#!/usr/bin/env python3
"""把 coverage.yml 同步成 dashboard/coverage.js，供 index.html 离线打开。"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
YML = ROOT / "coverage.yml"
OUT = ROOT / "dashboard" / "coverage.js"


def parse_scalar(raw: str):
    if raw == "" or raw is None:
        return None
    if raw in ("true", "false"):
        return raw == "true"
    if re.fullmatch(r"-?\d+", raw):
        return int(raw)
    if raw[0] in "\"'" and raw[-1] == raw[0]:
        return raw[1:-1]
    return raw


def parse_yaml(text: str):
    """足够解析本仓库 coverage.yml 的缩进 YAML（映射 / 列表 / 标量）。"""
    items = []
    for raw in text.splitlines():
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        items.append((indent, raw.strip()))

    def parse_block(index: int, parent_indent: int):
        container = None
        while index < len(items):
            indent, content = items[index]
            if indent < parent_indent:
                break
            if indent != parent_indent and container is not None:
                break

            if content.startswith("- "):
                if container is None:
                    container = []
                elif not isinstance(container, list):
                    raise ValueError(f"混用列表与映射：{content}")
                rest = content[2:]
                index += 1
                if ":" in rest:
                    key, _, val = rest.partition(":")
                    key, val = key.strip(), val.strip()
                    node = {key: parse_scalar(val) if val else None}
                    if index < len(items) and items[index][0] > indent:
                        child, index = parse_block(index, items[index][0])
                        if node[key] is None:
                            node[key] = child
                        elif isinstance(child, dict):
                            node.update(child)
                        else:
                            node[key] = child
                    # 同一列表项后续同级键（比 `- ` 多 2 空格）
                    while index < len(items):
                        nindent, ncontent = items[index]
                        if nindent != indent + 2 or ncontent.startswith("- "):
                            break
                        k, _, v = ncontent.partition(":")
                        k, v = k.strip(), v.strip()
                        index += 1
                        if v:
                            node[k] = parse_scalar(v)
                        elif index < len(items) and items[index][0] > nindent:
                            node[k], index = parse_block(index, items[index][0])
                        else:
                            node[k] = None
                    container.append(node)
                else:
                    container.append(parse_scalar(rest))
                continue

            key, _, val = content.partition(":")
            key, val = key.strip(), val.strip()
            if container is None:
                container = {}
            elif not isinstance(container, dict):
                raise ValueError(f"混用映射与列表：{content}")
            index += 1
            if val:
                container[key] = parse_scalar(val)
            elif index < len(items) and items[index][0] > indent:
                container[key], index = parse_block(index, items[index][0])
            else:
                container[key] = None
        return container, index

    data, _ = parse_block(0, items[0][0] if items else 0)
    return data


def main() -> int:
    data = parse_yaml(YML.read_text(encoding="utf-8"))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    OUT.write_text(
        "/* 由 scripts/sync_dashboard.py 从 coverage.yml 生成，不要手改。 */\n"
        f"window.COVERAGE = {payload};\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
