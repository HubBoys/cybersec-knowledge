# 学习总账

专门记录**已经学过的部分**：时间、挂在哪些节点、深度、缺口。详细正文在各领域 `learning/` 目录。

状态约定与更新步骤见 [`AGENTS.md`](../AGENTS.md)。

| 日期 | 领域 | 深度 | 摘要 | 详细记录 |
|---|---|---|---|---|
| 2026-08-17 | 移动与物联网（微信小程序）及身份认证交叉 | practice | 解包导入布局、工程配置缺陷、wx.login 换票模型、本地 mock 边界、wechatide、合法 token 与自动化 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) |
| 2026-08-17 | 二进制逆向分析（及 ABI、IOC 交叉） | concept | 完整逆向过程、IOC、分步工具、汇编策略、C/ABI 原因、沙箱 vs 行为分析、AI 时代门槛 | [笔记](../domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |

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
