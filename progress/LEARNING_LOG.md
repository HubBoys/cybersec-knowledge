# 学习总账

专门记录**已经学过的部分**：时间、挂在哪些节点、深度、缺口。详细正文在各领域 `learning/` 目录。

状态约定与更新步骤见 [`AGENTS.md`](../AGENTS.md)。

| 日期 | 领域 | 深度 | 摘要 | 详细记录 |
|---|---|---|---|---|
| 2026-08-16 | 网络安全（抓包入口） | practice | 安装 mitmproxy 12.2.3；三条 CLI；未抓包 | [笔记](../domains/network-security/learning/2026-08-16-mitmproxy.md) |
| 2026-08-16 | 移动与物联网（UniApp） | concept | 四端产物；小程序包工具星标对照；App `www` 与 jadx/Apktool 分工；webcrack | [笔记](../domains/mobile-iot/learning/2026-08-16-uniapp-tooling.md) |
| 2026-08-16 | 二进制逆向（工具链安装） | practice | Ghidra 12.1.2 / radare2 6.2.0 / IDA MCP / Frida 17.17.0 本机验证；ImHex 不适合当主反汇编引擎 | [笔记](../domains/reverse-engineering/learning/2026-08-16-re-toolchain.md) |
| 2026-08-17 | 移动与物联网（Android Flutter）及逆向交叉 | practice | APK 分层；Java 壳 vs Dart AOT Snapshot；Blutter 用匹配版 Dart VM 标注汇编；`--obfuscate` 改名；`.so` 即 ELF | [笔记](../domains/mobile-iot/learning/2026-08-17-android-flutter-aot.md) |
| 2026-08-17 | 网络安全（及身份认证交叉） | concept | 在线登录探测 vs 离线哈希恢复；Hydra（fork、协议广）vs Medusa（pthread、SMB/RDP）；不含操作步骤 | [笔记](../domains/network-security/learning/2026-08-17-hydra-medusa.md) |
| 2026-08-17 | 小程序工具栈（及 Web 工作台交叉） | concept | unveilr 产物还原；EasyTools 工作台；OpenDevTools 新版不可用；First 为新版运行时；官方 wechatide-skill 路由与门禁 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |
| 2026-08-17 | 移动与物联网（微信小程序）及身份认证交叉 | practice | 解包导入布局、工程配置缺陷、wx.login 换票模型、本地 mock 边界、wechatide、合法 token 与自动化 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) |
| 2026-08-17 | 二进制逆向分析（及 ABI、IOC 交叉） | concept | 完整逆向过程、IOC、分步工具、汇编策略、C/ABI 原因、沙箱 vs 行为分析、AI 时代门槛 | [笔记](../domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |

---

## 2026-08-16 · mitmproxy 安装（实践）

- **形式**：pip 安装并核对版本。
- **已覆盖**：mitmproxy / mitmweb / mitmdump 入口；默认 8080；HTTPS 需要本机 CA（不写绕过步骤）。
- **未覆盖**：实际抓包、Wireshark/pcap、IDS/IPS。
- **下一步**：对本机 HTTP 站点开 mitmweb 看请求列表。

---

## 2026-08-16 · UniApp 工具地图（概念）

- **形式**：GitHub 星标对照 + 对话整理，无解包实验。
- **已覆盖**：小程序 / App www / H5 四端；KillWxapkg 等与 unveilr 同层；jadx/Apktool 找 www；webcrack。
- **未覆盖**：自有 UniApp 还原实践、DCloud 加密对照、iOS。
- **下一步**：自编译未加密演示包对照路径。

---

## 2026-08-16 · 逆向工具链安装（实践）

- **形式**：对话调研 + 本机安装。
- **已覆盖**：Ghidra/r2/IDA MCP/Frida 版本与路径；反汇编整机 vs 引擎；ImHex 适合 hex 不适合当主反汇编；Binary Ninja 未装。
- **未覆盖**：对样本的 Ghidra/r2 分析、调试器会话、Frida 连设备。
- **下一步**：自写 C 小程序对照 Ghidra `analyzeHeadless`。

---

## 2026-08-17 · Android Flutter AOT / Blutter（实践）

- **形式**：对话 + 授权样本上的 jadx / ELF 打开 / Blutter 实操。
- **已覆盖**：APK=ZIP 分层；Java 层可能只是 Flutter 壳；`libapp.so` 是 ELF + Isolate Snapshot；通用反汇编对 Snapshot 常无普通 xref；Blutter 用匹配版 Dart VM 加载 Snapshot 并标注汇编（不是还原 `.dart`）；`--obfuscate` 主要改名，明文路径/字段常仍在。
- **未覆盖**：Android 权限与组件导出、ELF 规范/导入表、混淆样本对照、iOS Flutter、动态插桩。
- **下一步**：自编译未混淆/混淆 Flutter 小 App 对照 Blutter；用自己的 C 共享库补 ELF 头。

---

## 2026-08-17 · 在线登录探测 Hydra / Medusa（概念）

- **形式**：GitHub 仓库说明 + Hydra README + Medusa 官方文档对照，无实验。
- **已覆盖**：在线探测 vs 离线恢复；Hydra 的 fork/协议广度/HTTP 表单；Medusa 的 pthread/多主机/SMB·RDP；选用边界；GitHub 低质量账号脚本不入库。
- **未覆盖**：两款工具实操、Ncrack、Hashcat/John 本身、抓包与流量分析。
- **下一步**：若实践，仅在授权隔离靶场记录控速与锁定策略；离线哈希线另开节点。

---

## 2026-08-17 · 小程序工具栈（概念）

- **形式**：GitHub 仓库说明 + 本机官方 wechatide-skill 阅读 + 使用者反馈。
- **已覆盖**：unveilr / EasyTools / OpenDevTools（新版失效）/ First / 官方 skill 的分层与门禁。
- **未覆盖**：First 实操、automator 测试号样例、云开发安全、OWASP。
- **下一步**：授权项目继续用官方 wechatide；运行时观察以 First 为当前代际。

---

## 2026-08-17 · 微信小程序本地调试与鉴权（实践）

- **形式**：对话 + 微信开发者工具 / wechatide 本地实践。
- **已覆盖**：`__APP__` 导入；componentFramework / Skyline lazyCodeLoading / WXML 拆串 / WXS 路径；wx.login→后端换票→业务 token；本地 mock 只过前端门禁；合法长效 token 对自动化的意义；CLI 用途。
- **未覆盖**：云开发安全、Android/iOS、自有小程序 automator 样例。
- **下一步**：在自有小程序上用测试号验证「预置 token 跳过登录」的自动化。

---

## 2026-08-17 · 二进制逆向分析（概念）

- **形式**：对话系统讲解，无实验。
- **已覆盖**：逆向 9 步流程；沙箱初判 ≠ 行为分析；IOC/IOA；每步推荐工具；不必通读汇编但必须能抽查；学 C 与 ABI 是为了还原语义和打假；AI 会降低翻译成本、提高验真成本。
- **未覆盖**：任何工具实操、汇编练习、PE/ELF 深入、教学样本。
- **下一步**：用自己编译的小 C 程序对照 Ghidra，验证调用约定。
