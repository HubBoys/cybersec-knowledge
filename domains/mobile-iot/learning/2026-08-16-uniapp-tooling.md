---
date: 2026-08-16
domain: mobile-iot
nodes:
  - uni-app
  - uniapp-packaging
  - uniapp-mp-tools
  - uniapp-app-www
  - uniapp-js-restore
form: GitHub 仓库调研 + 对话整理
depth: concept
---

# UniApp 产物：按打包形态选工具

合法用途：自有或已授权应用的安全评估与还原。只记形态、工具名称与分工，不写解密、解包或 Hook 步骤。

## 学了什么

UniApp 不是单一二进制。发到微信、Android、iOS、H5 后，分析入口不同；业务逻辑多数在 JS，原生 so 只在加固/支付时才需要 IDA/Ghidra。

## 可复述结论

### 1. 先看打到哪一端

| 形态 | 常见产物 | 分析重点 |
|---|---|---|
| 微信小程序 | `.wxapkg` | 与普通小程序同一层：还原工程文件 |
| Android App | APK 内 `assets/apps/<appid>/www/` | Apktool 找 www；可能有 DCloud 资源加密 |
| iOS App | IPA 内同样有 `www` | 当 zip 打开后处理前端包 |
| H5 | webpack / vite 打包 JS | 反混淆、sourcemap |

### 2. 小程序端工具（名称与星标，约 2026-08-16）

与已有节点 `mp-tool-unveilr` 同层，都是**产物还原**，不是登录绕过。

| Stars | 项目 | 定位 |
|------:|------|------|
| 5946 | Ackites/KillWxapkg | 解密、解包、尽量还原工程 |
| 4505 | qwerty472123/wxappUnpacker | 老牌解包 |
| 3978 | wux1an/wxapkg | GUI：扫描 / 解密 / 解包 |
| 3048 | biggerstar/wedecode | 跨平台源码还原 |
| 2430 | xdmjun/wxappUnpacker | 常用 fork |

对照仍用微信开发者工具。新版运行时观察仍以 First 为当前代际（见小程序工具栈笔记）。

### 3. App 端：www 为主，so 为辅

| Stars | 项目 | 定位 |
|------:|------|------|
| 50083 | skylot/jadx | 看 Java 壳与启动器 |
| 25297 | iBotPeaches/Apktool | 解 APK 资源，找 `www` |
| 21639 | frida/frida | 动态层（交叉 `re-frida`）；本次未对 UniApp 实操 |

DCloud 若开启资源加密，`www` 往往不是明文；社区有脚本，**没有官方统一解密器**。本库不记录解密步骤。

### 4. 各端都要的 JS 还原

| Stars | 项目 | 定位 |
|------:|------|------|
| 2852 | j4k0xb/webcrack | 解 obfuscator.io、拆 webpack |
| — | Prettier / js-beautify | 格式化压缩代码 |

抓包用 mitmproxy（交叉 `net-mitmproxy`），只记名称。

## 实践证据

无。全程概念与仓库对照，未解包他人或自有 UniApp 产物。

## 仍未覆盖

- 自有 UniApp 小程序 / App 的授权还原实践
- DCloud 加密样本的合法对照
- iOS UniApp / nvue
- 云开发与支付 so

## 下一步

用自己编译的未加密 UniApp 演示包，对照 `www` 目录与小程序包，把本笔记里的路径说圆。
