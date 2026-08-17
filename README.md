# 网络安全知识图谱

个人系统学习网络安全用的知识仓库：一张图看清**学过什么、还没学什么**；学过的内容另有学习记录可复习。

**可视化入口：** 用浏览器打开 [`index.html`](index.html)（双击即可，不需要启动服务器）。右侧点学习记录会进入 Markdown 预览，支持 Mermaid 图。

- 覆盖状态真源：[`coverage.yml`](coverage.yml)
- 图谱视图：[`graph.md`](graph.md)
- 学习总账：[`progress/LEARNING_LOG.md`](progress/LEARNING_LOG.md)
- Agent 更新规则：[`AGENTS.md`](AGENTS.md)

## 状态含义

| 标记 | 含义 |
|---|---|
| 未覆盖 | 图谱里有这个节点，还没学 |
| 部分覆盖 | 领域下有的学了、有的没学 |
| 已覆盖 | 能复述要点，有学习记录（默认仍是概念层） |
| 已实践 | 在隔离环境动手验证过 |

当前进度：主领域包括 **二进制逆向分析**（概念部分已覆盖）与 **移动与物联网安全 / 微信小程序**（本地调试实践）。基础底座、威胁情报、身份认证为部分覆盖。其余顶层领域未覆盖。

## 目录

```text
index.html                   可视化入口（浏览器打开）
dashboard/coverage.js        由脚本从 coverage.yml 生成
coverage.yml                 覆盖状态（先改这里）
graph.md                     总图 + 逆向子图
AGENTS.md                    如何更新图谱
progress/LEARNING_LOG.md     已学习部分的总记录
domains/<id>/README.md       领域子图与缺口
domains/<id>/learning/*.md   该领域的学习笔记
templates/                   新建领域 / 笔记模板
```

## 怎么用

1. 打开 `index.html` 看全局覆盖和缺口（点领域看子节点）。
2. 复习已学内容：从 `progress/LEARNING_LOG.md` 进具体笔记。
3. 学了新东西：让 Agent 按 `AGENTS.md` 更新状态、补学习记录，并刷新可视化数据。
