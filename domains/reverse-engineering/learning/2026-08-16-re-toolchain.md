---
date: 2026-08-16
domain: reverse-engineering
nodes:
  - re-tools
  - re-disasm-catalog
  - re-ghidra
  - re-ida-mcp
  - re-frida
  - re-debugger
  - re-radare2
form: 对话 + GitHub 调研 + 本机安装验证
depth: practice
---

# 逆向工具链：Ghidra / radare2 / IDA MCP / Frida

合法用途：自有程序、授权评估、恶意软件研判。只记工具定位、本机安装证据与选用边界，不写利用、破解或 Hook 操作手册。

## 学了什么

对照开源反汇编/逆向平台与引擎库；本机安装 Ghidra、radare2、ida-pro-mcp、Frida；跳过 Binary Ninja（商业，winget 哈希失败后取消）。讨论了 ImHex 是否适合 agent 驱动。

## 可复述结论

### 1. 反汇编要分「整机」和「引擎」

| 类型 | 代表 | 用途 |
|---|---|---|
| 完整平台 | Ghidra、radare2 / Cutter、IDA Pro、Binary Ninja | 打开二进制、函数识别、反编译/反汇编视图 |
| 引擎库 | Capstone、Zydis、iced | 给自己的程序嵌反汇编，不是分析员日常 GUI |
| Hex / 格式 | ImHex、DIE、PE-bear | 看字节、识别加壳、解析结构；反汇编不是主业 |

ImHex 有 Pattern Language CLI 和 MCP，适合 **agent 看 hex / 套结构体**；系统做反汇编流水线应选 Ghidra headless、rizin/radare2，而不是 ImHex。

### 2. 本机安装位置（Windows）

| 工具 | 版本 | 位置 / 入口 |
|---|---|---|
| JDK | OpenJDK 21.0.12 | `C:\Program Files\Microsoft\jdk-21.0.12.8-hotspot`；用户 `JAVA_HOME` |
| Ghidra | 12.1.2 | `E:\tools\ghidra_12.1.2_PUBLIC`；`E:\tools\bin\ghidra.cmd`、`analyzeHeadless.cmd` |
| radare2 | 6.2.0 | `E:\tools\radare2\radare2-6.2.0-w64\bin`；已加入用户 PATH |
| IDA | Professional 9.3 | `C:\Program Files\IDA Professional 9.3` |
| ida-pro-mcp | 2.0.0 | 插件：`%AppData%\Hex-Rays\IDA Pro\plugins\ida_mcp.py` |
| Frida | 17.17.0 + frida-tools 14.10.4 | miniconda Python 3.12：`frida` / `frida-ps` |

Binary Ninja Free 的 winget 包哈希不匹配；用户取消安装，缓存已删。

### 3. IDA MCP 与 Cursor

- 插件已写入 IDA 用户 plugins 目录，**必须重启 IDA**。
- Cursor `~/.cursor/mcp.json` 使用 **stdio**：用 miniconda 的 `ida_pro_mcp\server.py` 拉起服务，默认连 `127.0.0.1:13337`。
- IDA 里要先打开数据库，MCP 才有分析对象。未验证一次完整问答。

### 4. Frida 的边界

电脑端 CLI 与手机端 `frida-server` 必须**同版本**。本次只验证了主机 `frida --version`，没有连设备、没有注入。

## 实践证据

- 环境：Windows 11，miniconda Python 3.12，IDA 9.3。
- 操作：winget 装 JDK 21；解压 Ghidra / radare2 到 `E:\tools`；`pip` 装 ida-pro-mcp、frida、frida-tools；写入 Cursor MCP。
- 结果：`radare2 -v` → 6.2.0；`frida --version` → 17.17.0；Ghidra 目录含 `ghidraRun.bat`；IDA 插件文件存在。

## 仍未覆盖

- 用 Ghidra / radare2 打开自编译样本并对上源码
- x64dbg / gdb 调试会话
- Frida 连设备、frida-server
- Binary Ninja
- 加壳、YARA、C++ / 托管 / 固件

## 下一步

用自己写的小 C 程序在 Ghidra 里对 `main` 和参数寄存器，并试一次 `analyzeHeadless`。
