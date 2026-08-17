/* 由 scripts/sync_dashboard.py 从 coverage.yml 与 Markdown 生成，不要手改。 */
window.COVERAGE = {
  "version": 1,
  "updated": "2026-08-17",
  "learner": "summyer",
  "legend": {
    "uncovered": "未覆盖——图谱中有节点，尚无学习记录",
    "partial": "部分覆盖——子节点有已学内容，领域整体未闭环",
    "covered": "已覆盖——能复述要点，且有对应学习记录；默认仍属概念层",
    "practiced": "已实践——在隔离环境动手验证过，学习记录中写明实践证据"
  },
  "domains": [
    {
      "id": "foundations",
      "name": "基础底座",
      "status": "partial",
      "children": [
        {
          "id": "network",
          "name": "计算机网络",
          "status": "uncovered",
          "notes": "TCP/IP、以太网、DNS、HTTP、TLS、抓包阅读"
        },
        {
          "id": "operating-systems",
          "name": "操作系统",
          "status": "uncovered",
          "notes": "进程/线程、内存、权限模型、Windows 与 Linux 差异"
        },
        {
          "id": "systems-programming",
          "name": "系统编程",
          "status": "partial",
          "notes": "C/Python；C 与 ABI 仅在逆向领域概念覆盖",
          "children": [
            {
              "id": "c-language",
              "name": "C 语言",
              "status": "uncovered"
            },
            {
              "id": "python",
              "name": "Python",
              "status": "uncovered"
            },
            {
              "id": "abi-calling-convention",
              "name": "ABI 与调用约定",
              "status": "covered",
              "learning_notes": [
                "domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md"
              ]
            }
          ]
        },
        {
          "id": "crypto-basics",
          "name": "密码学基础",
          "status": "uncovered",
          "notes": "哈希、对称/非对称、证书、常见误用"
        }
      ]
    },
    {
      "id": "reverse-engineering",
      "name": "二进制逆向分析",
      "status": "partial",
      "first_studied": "2026-08-17",
      "learning_notes": [
        "domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md"
      ],
      "children": [
        {
          "id": "re-process",
          "name": "逆向完整过程",
          "status": "covered"
        },
        {
          "id": "re-lab",
          "name": "隔离实验室",
          "status": "covered"
        },
        {
          "id": "re-file-id",
          "name": "文件鉴定与分类",
          "status": "covered"
        },
        {
          "id": "re-static-props",
          "name": "静态属性分析",
          "status": "covered"
        },
        {
          "id": "re-sandbox",
          "name": "自动化沙箱初判",
          "status": "covered"
        },
        {
          "id": "re-behavior",
          "name": "行为分析",
          "status": "covered"
        },
        {
          "id": "re-sandbox-vs-behavior",
          "name": "沙箱与行为分析的差异",
          "status": "covered"
        },
        {
          "id": "re-static-code",
          "name": "静态代码分析",
          "status": "covered"
        },
        {
          "id": "re-dynamic-code",
          "name": "动态代码分析",
          "status": "covered"
        },
        {
          "id": "re-report",
          "name": "重建、验证与报告",
          "status": "covered"
        },
        {
          "id": "re-ioc",
          "name": "IOC 概念",
          "status": "covered"
        },
        {
          "id": "re-tools",
          "name": "各阶段推荐工具",
          "status": "covered"
        },
        {
          "id": "re-assembly-strategy",
          "name": "汇编阅读策略",
          "status": "covered"
        },
        {
          "id": "re-c-abi-why",
          "name": "为何需要 C 与 ABI",
          "status": "covered"
        },
        {
          "id": "re-ai-barrier",
          "name": "AI 时代的逆向门槛",
          "status": "covered"
        },
        {
          "id": "re-x86-asm",
          "name": "x86-64 汇编实践",
          "status": "uncovered"
        },
        {
          "id": "re-pe-elf",
          "name": "PE / ELF 格式深入",
          "status": "uncovered"
        },
        {
          "id": "re-ghidra",
          "name": "Ghidra 实操",
          "status": "uncovered"
        },
        {
          "id": "re-debugger",
          "name": "调试器实操",
          "status": "uncovered"
        },
        {
          "id": "re-unpacking",
          "name": "加壳识别与授权实验室内还原",
          "status": "uncovered"
        },
        {
          "id": "re-obfuscation",
          "name": "混淆与对抗分析",
          "status": "uncovered"
        },
        {
          "id": "re-yara",
          "name": "YARA 检测规则",
          "status": "uncovered"
        },
        {
          "id": "re-cpp",
          "name": "C++ 逆向",
          "status": "uncovered"
        },
        {
          "id": "re-managed",
          "name": ".NET / Java 托管代码逆向",
          "status": "uncovered"
        },
        {
          "id": "re-firmware",
          "name": "固件逆向",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "malware-analysis",
      "name": "恶意软件分析",
      "status": "uncovered",
      "notes": "与逆向相邻；行为/沙箱概念已在逆向中接触，本领域未单列学习"
    },
    {
      "id": "web-security",
      "name": "Web 安全",
      "status": "uncovered"
    },
    {
      "id": "network-security",
      "name": "网络安全与流量分析",
      "status": "uncovered"
    },
    {
      "id": "identity",
      "name": "身份认证与访问控制",
      "status": "partial",
      "notes": "微信小程序 wx.login / 业务 token 概念已覆盖；OAuth、会话管理、MFA 等未覆盖",
      "children": [
        {
          "id": "id-wx-login-crossref",
          "name": "小程序登录与业务 token（交叉）",
          "status": "covered",
          "notes": "详见 mobile-iot 节点 mp-wx-login-model / mp-auth-token-reuse",
          "learning_notes": [
            "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
          ]
        },
        {
          "id": "id-oauth-oidc",
          "name": "OAuth / OIDC",
          "status": "uncovered"
        },
        {
          "id": "id-session-token",
          "name": "会话与 Token 生命周期",
          "status": "uncovered"
        },
        {
          "id": "id-mfa",
          "name": "多因素认证",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "cloud-security",
      "name": "云与容器安全",
      "status": "uncovered"
    },
    {
      "id": "mobile-iot",
      "name": "移动与物联网安全",
      "status": "partial",
      "first_studied": "2026-08-17",
      "learning_notes": [
        "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
      ],
      "children": [
        {
          "id": "wechat-miniprogram",
          "name": "微信小程序",
          "status": "partial",
          "learning_notes": [
            "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
          ],
          "children": [
            {
              "id": "mp-wxapkg-layout",
              "name": "客户端缓存包与导入布局",
              "status": "practiced",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-project-config",
              "name": "解包工程配置与常见缺陷",
              "status": "practiced",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-wx-login-model",
              "name": "wx.login 与后端换票模型",
              "status": "covered",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-local-debug-limits",
              "name": "本地调试与鉴权边界",
              "status": "covered",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-devtools-cli",
              "name": "微信开发者工具 CLI",
              "status": "practiced",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-auth-token-reuse",
              "name": "业务 token 复用与自动化",
              "status": "covered",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md"
              ]
            },
            {
              "id": "mp-cloud-dev",
              "name": "小程序云开发安全",
              "status": "uncovered"
            }
          ]
        },
        {
          "id": "android-appsec",
          "name": "Android 应用安全",
          "status": "uncovered"
        },
        {
          "id": "ios-appsec",
          "name": "iOS 应用安全",
          "status": "uncovered"
        },
        {
          "id": "iot-protocols",
          "name": "物联网协议与设备",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "dfir",
      "name": "应急响应与取证",
      "status": "uncovered",
      "notes": "NIST 采集-检验-分析-报告框架已在逆向过程中提及，本领域未单列学习"
    },
    {
      "id": "threat-intel",
      "name": "威胁情报",
      "status": "partial",
      "notes": "IOC / IOA 概念已覆盖；情报生命周期、STIX/TAXII 等未覆盖",
      "children": [
        {
          "id": "ioc-ioa",
          "name": "IOC 与 IOA",
          "status": "covered",
          "learning_notes": [
            "domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md"
          ]
        },
        {
          "id": "intel-lifecycle",
          "name": "情报生命周期",
          "status": "uncovered"
        },
        {
          "id": "intel-sharing",
          "name": "情报共享格式",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "detection-eng",
      "name": "检测工程",
      "status": "uncovered"
    },
    {
      "id": "soc",
      "name": "SOC 运营",
      "status": "uncovered"
    },
    {
      "id": "secure-sdlc",
      "name": "安全开发生命周期",
      "status": "uncovered"
    },
    {
      "id": "grc",
      "name": "风险管理与合规",
      "status": "uncovered"
    },
    {
      "id": "security-architecture",
      "name": "安全架构",
      "status": "uncovered"
    }
  ]
};
window.NOTES = {
  "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md": "---\ndate: 2026-08-17\ndomain: mobile-iot\nnodes:\n  - mp-wxapkg-layout\n  - mp-project-config\n  - mp-wx-login-model\n  - mp-local-debug-limits\n  - mp-devtools-cli\n  - mp-auth-token-reuse\n  - wechat-miniprogram\nform: 对话 + 本地开发者工具实践\ndepth: practice\n---\n\n# 微信小程序：解包产物本地调试、鉴权模型与自动化边界\n\n合法用途：理解小程序工程结构、鉴权模型、授权调试与自动化约束；用于自有应用或已获授权的安全评估。不涉及未授权访问、破解或伪造他人身份。\n\n## 学了什么\n\n围绕微信客户端缓存中的小程序包（`wxapkg` 解包目录）导入开发者工具的完整排障过程，并澄清 `wx.login`、后端 token、AppID 绑定与自动化之间的关系。实践对象是本地解包工程的**工程修复与鉴权概念验证**，不是对第三方生产接口的未授权调用。\n\n## 可复述结论\n\n### 1. 解包目录 ≠ 可直接导入的源码工程\n\n微信客户端缓存路径形如：\n\n`...\\Tencent\\xwechat\\radium\\users\\<uid>\\applet\\packages\\<appid>\\<ver>\\`\n\n常见布局：\n\n- 版本目录根：可能有 `__APP__.wxapkg`、空或后补的 `project.config.json`\n- 真正可导入的源码根：子目录 `__APP__/`（含 `app.js` / `app.json` / `pages/`）\n\n导入版本根会报「根目录未找到 `app.json`」。应导入 `__APP__`，并补齐合法 `project.config.json`。\n\n### 2. 解包产物常见工程缺陷（只记现象与修复方向）\n\n| 现象 | 原因方向 | 修复方向（概念） |\n|---|---|---|\n| `componentFramework` 类型错误 | 解包把字段还原成对象 | 改为字符串 `exparser` / `glass-easel` |\n| Skyline 启动失败 | 页面 `renderer: skyline` 缺全局 `lazyCodeLoading` | `app.json` 增加 `\"lazyCodeLoading\": \"requiredComponents\"` |\n| WXML `unexpected` / 拆串 | 解包后字符串字面量被换行切断 | 合并为单行表达式 |\n| Vant `style is not a function` | `.wxs` 内 `require(\"p_./...\")` 为运行时内部路径 | 改为相对路径如 `../wxs/style.wxs` |\n| AppID 无法切换 | 当前登录账号不是该小程序开发者 | 只能用自己有权限的 AppID 本地调试 |\n\n增强编译 / 二次压缩对已编译产物常加重问题；本地调试宜关闭 `es6`/`enhance`/`minifyWXML`。\n\n### 3. `wx.login` 鉴权模型（概念）\n\n标准链路：\n\n1. 客户端 `wx.login()` → 微信返回短时 `code`（绑定**当前运行 AppID**）\n2. 前端把 `code` 交给业务后端\n3. 后端用 **AppID + AppSecret** 调微信换票接口 → `openid` / `session_key`\n4. 后端签发自有 `access_token`（业务会话）\n\n因此：开发者工具里换成「自己的 AppID」后，即便 UI 能跑，`code` 也无法被「对方后端」按原 AppID 合法换票。失败点通常在步骤 3/4，而不是 `wx.login` API「完全不可调用」。\n\n不同小程序前端表现不同：有的跳「认证失败」页，有的跳「获取登录凭证失败」页；根因同类。\n\n### 4. 本地调试能做什么、不能做什么\n\n| 目标 | 可行性 |\n|---|---|\n| 修工程、看页面结构、走前端流程 | 可行：本地 mock openid/token、跳过失败跳转 |\n| 用自己的 AppID 冒充原小程序调生产登录 | 不可行：微信侧绑定 AppID |\n| 无权限伪造他人 `code` / 换票 | 不可行，且属未授权范畴 |\n\n本地 mock 只越过**前端门禁**，不产生对方后端承认的真实身份。\n\n### 5. 有合法长效业务 token 时\n\n许多业务接口只校验后端 token。若已通过授权渠道持有**仍有效**的 token：\n\n- 后续请求可不再走 `wx.login`\n- 自动化可预置 token / storage，跳过登录页\n\n仍须注意：刷新机制、设备/签名绑定、服务端吊销、部分接口额外校验。token 必须来自有权使用的账号或测试通道。\n\n### 6. 自动化是否「无解」\n\n- **有开发者权限 / 测试号 / 测试后门**：可解（automator、测试 ticket、预置 token、测试环境跳过换票等）\n- **无权限仅持解包产物**：无解的是「鉴权」，不是「自动化技术」本身\n\n工具名记用途即可：微信开发者工具 CLI（`wechatide`）用于授权调试、编译刷新、console/截图；First / WMPFDebugger 类工具用于在微信进程内动态观察 API（需合法使用场景）。它们都不能让错误的 AppID 通过微信换票。\n\n## 实践证据\n\n环境：Windows + 微信开发者工具 + `wechatide` CLI（Cursor 客户端授权）。\n\n操作与结果：\n\n1. 将缓存包 `__APP__` 导入工具；缺配置时补 `project.config.json`，AppID 使用有权限的测试号。\n2. 修复 `componentFramework`、`lazyCodeLoading`、WXML 拆串、部分 WXS 路径后，模拟器可启动。\n3. 登录失败页出现后，用本地 mock openid/token 验证「仅过前端门禁」；首页 UI 可打开，业务列表仍依赖真实鉴权。\n4. 用 `wechatide` 完成导入、清缓存、刷新、读 console、截图取证。\n\n## 仍未覆盖\n\n- 微信云开发鉴权与云函数安全模型\n- 小程序加密请求 / 自定义签名方案的一般分析方法（仅概念未展开）\n- iOS / Android 客户端侧 WMPF 注入工具的合法实验流程\n- 小程序权限模型（scope）、隐私协议与合规清单\n\n## 下一步\n\n1. 在**自有**小程序上用测试号 + automator 跑通「预置 token 跳过登录」的自动化样例\n2. 梳理身份认证领域：OAuth / session / token 刷新的一般模型，与 `wx.login` 对照\n3. 若继续移动安全：补充 APK/IPA 与小程序包在「客户端产物分析」上的异同（概念）\n",
  "domains/mobile-iot/README.md": "---\nid: mobile-iot\nname: 移动与物联网安全\nstatus: partial\nupdated: 2026-08-17\n---\n\n# 移动与物联网安全\n\n当前从**微信小程序本地调试与鉴权模型**切入；Android/iOS 应用安全、物联网协议等尚未覆盖。\n\n- 覆盖状态真源：[`coverage.yml`](../../coverage.yml)\n- 本领域笔记：[learning/2026-08-17-wechat-miniprogram-local-debug.md](learning/2026-08-17-wechat-miniprogram-local-debug.md)\n\n## 子图\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  MIOT[移动与物联网 · partial]\n  MP[微信小程序 · partial]\n\n  subgraph done [已学]\n    LAY[解包目录布局]\n    CFG[工程配置缺陷]\n    LOGIN[wx.login 鉴权模型]\n    LIMIT[本地调试边界]\n    CLI[开发者工具 CLI]\n    TOK[业务 token 复用]\n  end\n\n  subgraph todo [未覆盖]\n    AND[Android 应用安全]\n    IOS[iOS 应用安全]\n    IOT[物联网协议与设备]\n    CLOUD[小程序云开发安全]\n  end\n\n  MIOT --> MP\n  MP --> LAY --> CFG\n  MP --> LOGIN --> LIMIT\n  MP --> CLI\n  LOGIN --> TOK\n  MIOT --> AND\n  MIOT --> IOS\n  MIOT --> IOT\n  MP --> CLOUD\n\n  class LAY,CFG,CLI practiced\n  class LOGIN,LIMIT,TOK covered\n  class AND,IOS,IOT,CLOUD uncovered\n  class MP,MIOT partial\n```\n\n## 已覆盖\n\n| 节点 id | 深度 | 要点 |\n|---|---|---|\n| `mp-wxapkg-layout` | practiced | 导入 `__APP__`，不是版本根目录 |\n| `mp-project-config` | practiced | componentFramework / Skyline lazyCodeLoading / WXML 拆串 / WXS 路径 |\n| `mp-wx-login-model` | covered | code 绑定 AppID；后端 AppSecret 换票；业务 token |\n| `mp-local-debug-limits` | covered | mock 只过前端门禁 |\n| `mp-devtools-cli` | practiced | wechatide 授权调试用途 |\n| `mp-auth-token-reuse` | covered | 合法长效 token 可减少反复 wx.login |\n\n## 未覆盖（建议顺序）\n\n1. 自有小程序上的 automator + 测试号实践\n2. 小程序云开发鉴权概念\n3. Android 应用基础（APK 结构、权限）\n4. iOS / 物联网另开专题\n\n## 与其他领域的边\n\n- 身份认证：`mp-wx-login-model` / `mp-auth-token-reuse` 与 token/session 模型交叉\n- 二进制逆向：解包产物分析是「客户端产物」旁支，不是传统 PE/ELF 逆向主线\n",
  "domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md": "---\ndate: 2026-08-17\ndomain: reverse-engineering\nnodes:\n  - re-process\n  - re-lab\n  - re-file-id\n  - re-static-props\n  - re-sandbox\n  - re-behavior\n  - re-sandbox-vs-behavior\n  - re-static-code\n  - re-dynamic-code\n  - re-report\n  - re-ioc\n  - re-tools\n  - re-assembly-strategy\n  - re-c-abi-why\n  - re-ai-barrier\n  - abi-calling-convention\n  - ioc-ioa\nform: 对话\ndepth: concept\n---\n\n# 二进制逆向：过程、IOC、工具、C/ABI，以及 AI 之后的门槛\n\n合法用途：恶意软件研判、事故响应、漏洞审计、协议互操作。不涉及破解、绕过授权或编写利用。\n\n## 学了什么\n\n一次对话把「二进制逆向的完整过程」讲清楚，并追问了四个概念缺口：IOC、每步工具与是否硬读汇编、为何要学 C/ABI、自动化沙箱与行为分析有何不同。另外讨论了 AI 普及后逆向门槛会挪到哪里。\n\n## 可复述结论\n\n### 1. 外层是取证，内层是迭代分析\n\n外层可套 NIST SP 800-86：**采集 → 检验 → 分析 → 报告**。  \n内层接近 SANS / Zeltser 的恶意软件方法，在隔离实验室里把静态属性、行为、代码分析反复做，直到回答完事先写下的问题。\n\n目标决定深度。应急响应常常做到行为 + IOC 就够；深度研判才需要还原算法。\n\n### 2. 九步过程（可循环）\n\n1. **明确问题**：是不是恶意、改了什么、连谁、某个异常对应哪段逻辑。\n2. **隔离实验室**：虚拟机快照、与生产网隔离、样本只读、记录哈希。\n3. **文件鉴定**：PE/ELF/Mach-O、架构位数、是否像加壳、编译语言、签名。这步决定工具链。\n4. **静态属性（不运行）**：字符串、导入表、资源、熵值、哈希情报。形成假说，不是结论。\n5. **自动化沙箱初判**：短时间自动跑，看文件/进程/网络/持久化。噪声大、会被反沙箱骗，是**起点**。\n6. **行为分析**：在自己实验室里监控文件系统、注册表、进程、网络、IPC。回答 **What**，产出可核实的 IOC 和清理建议。\n7. **静态代码分析**：反汇编/反编译，从入口、字符串 xref、API 定位关键函数，还原控制流和数据结构。\n8. **动态代码分析**：调试器验证运行时数据；在关键 API 或比较处下断点，而不是从入口单步到结束。\n9. **重建与报告**：功能清单（已证实 / 仅静态可见 / 未触发）、IOC、防御建议；写清事实与推断。\n\n```mermaid\nflowchart TB\n  A[明确问题] --> B[隔离实验室]\n  B --> C[文件鉴定]\n  C --> D[静态属性]\n  D --> E[自动化沙箱初判]\n  E --> F[行为分析]\n  F --> G[静态代码分析]\n  G --> H[动态代码分析]\n  H --> I[重建与报告]\n  I -.-> A\n```\n\n教学例子：自写的口令比较小程序。鉴定看到 ELF/PE；字符串窗口可能直接出现提示语和明文；行为上无落盘无联网；反编译能还原 `strcmp`；若字符串被简单变换，则在比较处下断看缓冲区。\n\n### 3. 沙箱初判 ≠ 行为分析\n\n两者观察对象重叠（文件、进程、网络），差别不在软件名字，而在约束：\n\n| | 自动化沙箱 | 行为分析 |\n|---|---|---|\n| 谁跑 | 固定剧本、追求吞吐 | 分析员在场、可改条件 |\n| 目的 | 分诊：要不要继续、先盯哪 | 取证：本次运行确实做了什么 |\n| 输出 | 线索 | 可复述的 What |\n\n```mermaid\nflowchart LR\n  S[自动化沙箱] -->|分诊线索| Q{要不要继续?}\n  Q -->|是| B[行为分析]\n  B -->|已核实的 What| C[代码分析 How]\n  S -->|噪声 / 装死| Q\n```\n\n同一条「写了 `%TEMP%\\svc.dat`」在沙箱里是提示；在行为分析里要有路径、哈希、进程树、是否依赖网络，才能写进报告。  \nHow 仍然留给代码分析。\n\n### 4. IOC 是什么\n\n**IOC（Indicator of Compromise，失陷指标）**：用来判断主机或流量是否已被攻陷过的可观测线索。例如文件哈希、路径、互斥体、域名、注册表键。\n\n它回答「怎么认出它来过」，不回答「怎么打进去」。  \n**IOA** 更偏手法（例如用合法工具写启动项），不绑死某一个哈希。  \nYARA / Sigma 是把线索写成可检索规则。\n\n### 5. 每步工具（名称与用途）与汇编策略\n\n| 步骤 | 工具（记名称即可） |\n|---|---|\n| 隔离 | VirtualBox / VMware / Hyper-V |\n| 鉴定 | `file`、Detect It Easy、CFF Explorer、PE-bear、`readelf` |\n| 静态属性 | `strings`、FLOSS、pestudio |\n| 沙箱 | ANY.RUN、CAPE、Cuckoo、Joe Sandbox |\n| 行为 | Process Monitor、Process Explorer、Wireshark、Sysmon |\n| 静态代码 | Ghidra、IDA、Binary Ninja、radare2 |\n| 动态代码 | x64dbg、WinDbg、gdb/gef |\n| 托管代码 | dnSpy、JADX |\n\n**不必通读汇编，但不能完全不碰。** 工作方式是三层：先用反编译和字符串定位；伪代码说谎或空白时下到汇编；调试用来验证而不是朗读全文。常规样本大致是 70% 属性+行为+伪代码，20% 对照几段汇编，10% 真正逐条抠。\n\n### 6. 为什么要熟练 C，以及 ABI / 调用约定\n\n二进制不是另一种源码，而是 **C（或类 C）编译后剩下的机器约定**。汇编没有「函数」「对象」这些词；它们是编译器和 ABI 约定出来的。\n\n- **C**：`if` 是比较+条件跳；局部变量是栈槽；`struct` 是按对齐排的内存。逆向是把「源码 → 汇编」倒着走。Ghidra 伪代码像 C，正是因为这个心智模型。\n- **ABI / 调用约定**：参数放哪个寄存器、谁清栈、返回值在哪、栈如何对齐、结构体怎么传。Windows x64 前四个整数/指针走 `RCX, RDX, R8, R9`；Linux System V 走 `RDI, RSI, RDX, RCX, R8, R9`。不懂就会把参数当成局部变量，或看错结构体字段。\n\n工具负责把字节变成汇编或伪代码；C 解释程序结构；ABI 解释函数边界上的数据放在哪。有了它们，才能判断模型或反编译器有没有说错。\n\n### 7. AI 之后门槛在哪\n\n机械步骤（改名、摘要、对已知家族、写草稿）会变便宜；动态调试也会逐渐被 agent + 执行反馈补上。门槛不消失，而是搬家：\n\n1. **验真**：模型会把反编译伪影推理成很自信的错误结论。以后差的是「AI 说这是 C2」；好的是能钉到地址、交叉工具、运行时数据。\n2. **提问与裁剪**：模型吃不下整个二进制。选错函数，后面全是精致幻觉。\n3. **对抗**：样本会专门骗分析器（混淆、自定义 VM、污染字符串）。\n4. **环境耦合**：C2 是否活着、是否要特定域环境才爆发，不在静态文本里。\n5. **领域深度**：自研协议、密码误用、内核/固件，比「解释这段伪代码」更稀缺。\n6. **责任**：报告上要签字的是人，事实/推断/未知必须分开。\n\n汇编和 C 仍然要学，理由变了：不是因为 AI 读不了，而是因为只有你懂，才能看出它在流畅地撒谎。\n\n## 实践证据\n\n无。全程概念层，未打开样本、未使用 Ghidra 或调试器。\n\n## 仍未覆盖\n\n- x86-64 汇编动手\n- PE / ELF 格式深入\n- Ghidra、x64dbg / gdb 实操\n- 加壳识别、混淆、YARA\n- C++ / 托管代码 / 固件\n- 恶意软件教学样本（需隔离实验室）\n\n## 下一步\n\n用自己写的小 C 程序（例如带 `strcmp` 的输入检查）编译后，在 Ghidra 里对上 `main` 和参数寄存器，验证本笔记里的 ABI 说法。\n",
  "domains/reverse-engineering/README.md": "---\nid: reverse-engineering\nname: 二进制逆向分析\nstatus: partial\nupdated: 2026-08-17\n---\n\n# 二进制逆向分析\n\n第一块系统学习的领域。当前是**概念覆盖、未实践**：完整过程、IOC、工具地图、C/ABI 必要性、沙箱与行为分析差异、AI 时代门槛都已有学习记录；汇编/Ghidra/调试器等实操仍未覆盖。\n\n- 覆盖状态真源：[`coverage.yml`](../../coverage.yml)\n- 本领域笔记：[learning/2026-08-17-binary-reverse-engineering.md](learning/2026-08-17-binary-reverse-engineering.md)\n\n## 子图\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n\n  RE[二进制逆向 · partial]\n  subgraph covered [已覆盖]\n    P[完整过程]\n    DIFF[沙箱 vs 行为]\n    IOC[IOC]\n    TL[工具地图]\n    ASM[汇编策略]\n    WHY[C 与 ABI]\n    AI[AI 门槛]\n  end\n  subgraph uncovered [未覆盖]\n    X86[汇编实践]\n    GH[Ghidra]\n    DBG[调试器]\n    PE[PE/ELF]\n    REST[加壳 / 混淆 / YARA / C++ / 托管 / 固件]\n  end\n  RE --> P --> DIFF\n  RE --> IOC\n  RE --> TL\n  RE --> ASM --> WHY\n  RE --> AI\n  RE --> X86\n  RE --> GH\n  RE --> DBG\n  RE --> PE\n  RE --> REST\n  class P,DIFF,IOC,TL,ASM,WHY,AI covered\n  class X86,GH,DBG,PE,REST uncovered\n```\n\n## 已覆盖\n\n| 节点 id | 深度 | 要点 |\n|---|---|---|\n| `re-process` 及实验室到报告各步 | concept | 9 步迭代：目标 → 隔离 → 鉴定 → 静态属性 → 沙箱 → 行为 → 静态代码 → 动态代码 → 报告 |\n| `re-sandbox` / `re-behavior` / `re-sandbox-vs-behavior` | concept | 沙箱是自动分诊；行为分析是人工核实 What |\n| `re-ioc` | concept | 失陷指标；与 IOA 不同 |\n| `re-tools` | concept | 每步工具名称与用途，未上手 |\n| `re-assembly-strategy` | concept | 定位+抽查+验证，不是通读 |\n| `re-c-abi-why` | concept | 汇编没有高级语义，C/ABI 是倒推地图 |\n| `re-ai-barrier` | concept | 门槛从翻译成本转到验真、裁剪、对抗、责任 |\n\n## 未覆盖（建议顺序）\n\n1. C 小程序对照编译，看 `main` / 参数 / 返回值\n2. x86-64 常用指令与 Windows/Linux 调用约定对照\n3. PE 或 ELF 头、区段、导入表（用自己的程序）\n4. Ghidra 打开上述程序，对上源码\n5. 调试器在比较/输出处下断点\n6. 再考虑教学样本、YARA、混淆等\n\n## 与其他领域的边\n\n- 系统编程：`abi-calling-convention` 已覆盖，C 语言本身未覆盖\n- 威胁情报：IOC/IOA 概念已覆盖\n- 应急响应：NIST 四阶段仅作为外层框架提及\n- 恶意软件分析：相邻但未单列学习\n",
  "graph.md": "# 知识图谱\n\n状态以 [`coverage.yml`](coverage.yml) 为准。更新方式见 [`AGENTS.md`](AGENTS.md)。\n\n图例：灰 = 未覆盖 · 橙 = 部分覆盖 · 绿 = 已覆盖（概念） · 蓝 = 已实践\n\n最后同步：2026-08-17\n\n## 顶层领域\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n\n  subgraph base [基础]\n    F[基础底座]\n    N[计算机网络]\n    OS[操作系统]\n    SP[系统编程]\n    CR[密码学基础]\n    ABI[ABI 与调用约定]\n  end\n\n  subgraph tech [技术方向]\n    RE[二进制逆向分析]\n    MA[恶意软件分析]\n    WEB[Web 安全]\n    NET[网络安全与流量分析]\n    ID[身份认证与访问控制]\n    CL[云与容器安全]\n    IOT[移动与物联网安全]\n  end\n\n  subgraph ops [防御运营]\n    DFIR[应急响应与取证]\n    TI[威胁情报]\n    DET[检测工程]\n    SOC[SOC 运营]\n  end\n\n  subgraph gov [工程与治理]\n    SDLC[安全开发生命周期]\n    GRC[风险管理与合规]\n    ARCH[安全架构]\n  end\n\n  F --> N\n  F --> OS\n  F --> SP\n  F --> CR\n  SP --> ABI\n  RE -.概念交叉.-> ABI\n  RE -.相邻.-> MA\n  RE -.过程框架交叉.-> DFIR\n  RE -.IOC 交叉.-> TI\n  IOT -.鉴权交叉.-> ID\n\n  class N,OS,CR,MA,WEB,NET,CL,DFIR,DET,SOC,SDLC,GRC,ARCH uncovered\n  class F,SP,RE,TI,IOT,ID partial\n  class ABI covered\n```\n\n## 二进制逆向分析（当前主领域之一）\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n\n  RE[二进制逆向分析 · 部分覆盖]\n\n  subgraph done [已覆盖 · 概念]\n    P[完整过程]\n    LAB[隔离实验室]\n    FID[文件鉴定]\n    SP[静态属性]\n    SB[自动化沙箱]\n    BH[行为分析]\n    DIFF[沙箱 vs 行为]\n    SC[静态代码分析]\n    DC[动态代码分析]\n    RP[重建与报告]\n    IOC[IOC]\n    TL[工具地图]\n    ASM[汇编阅读策略]\n    WHY[为何需要 C 与 ABI]\n    AI[AI 时代门槛]\n  end\n\n  subgraph todo [未覆盖]\n    X86[x86-64 汇编实践]\n    PE[PE / ELF 深入]\n    GH[Ghidra 实操]\n    DBG[调试器实操]\n    UP[加壳识别]\n    OB[混淆对抗]\n    YA[YARA]\n    CPP[C++ 逆向]\n    MG[.NET / Java]\n    FW[固件逆向]\n  end\n\n  RE --> P\n  P --> LAB --> FID --> SP --> SB --> BH --> SC --> DC --> RP\n  BH --> DIFF\n  SB --> DIFF\n  RP --> IOC\n  P --> TL\n  SC --> ASM\n  DC --> ASM\n  ASM --> WHY\n  RE --> AI\n\n  RE --> X86\n  RE --> PE\n  RE --> GH\n  RE --> DBG\n  RE --> UP\n  RE --> OB\n  RE --> YA\n  RE --> CPP\n  RE --> MG\n  RE --> FW\n\n  class P,LAB,FID,SP,SB,BH,DIFF,SC,DC,RP,IOC,TL,ASM,WHY,AI covered\n  class X86,PE,GH,DBG,UP,OB,YA,CPP,MG,FW uncovered\n```\n\n## 移动与物联网安全（微信小程序）\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  MIOT[移动与物联网 · 部分覆盖]\n  MP[微信小程序 · 部分覆盖]\n\n  subgraph done [已学]\n    LAY[缓存包布局 · 已实践]\n    CFG[工程配置缺陷 · 已实践]\n    LOGIN[wx.login 换票模型 · 已覆盖]\n    LIMIT[本地调试边界 · 已覆盖]\n    CLI[开发者工具 CLI · 已实践]\n    TOK[业务 token 复用 · 已覆盖]\n  end\n\n  subgraph todo [未覆盖]\n    CLOUD[小程序云开发]\n    AND[Android]\n    IOS[iOS]\n    IOTDEV[物联网协议]\n  end\n\n  MIOT --> MP\n  MP --> LAY --> CFG\n  MP --> LOGIN --> LIMIT\n  LOGIN --> TOK\n  MP --> CLI\n  MP --> CLOUD\n  MIOT --> AND\n  MIOT --> IOS\n  MIOT --> IOTDEV\n\n  class LAY,CFG,CLI practiced\n  class LOGIN,LIMIT,TOK covered\n  class CLOUD,AND,IOS,IOTDEV uncovered\n  class MIOT,MP partial\n```\n\n## 覆盖一览\n\n| 领域 | 状态 | 学习记录 |\n|---|---|---|\n| 基础底座 / 网络、OS、密码学 | 部分覆盖（仅 ABI 已覆盖） | [2026-08-17 逆向](domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |\n| 系统编程 / ABI 与调用约定 | 部分 / ABI 已覆盖 | 同上 |\n| **二进制逆向分析** | **部分覆盖** | 同上 |\n| **移动与物联网安全** | **部分覆盖** | [2026-08-17 小程序](domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) |\n| **身份认证与访问控制** | **部分覆盖**（小程序登录交叉） | 同上 |\n| 恶意软件分析 | 未覆盖 | — |\n| Web 安全 | 未覆盖 | — |\n| 网络安全与流量分析 | 未覆盖 | — |\n| 云与容器安全 | 未覆盖 | — |\n| 应急响应与取证 | 未覆盖 | 过程框架仅在逆向中提及 |\n| 威胁情报 | 部分覆盖（IOC/IOA） | 逆向笔记 |\n| 检测工程 | 未覆盖 | — |\n| SOC 运营 | 未覆盖 | — |\n| 安全开发生命周期 | 未覆盖 | — |\n| 风险管理与合规 | 未覆盖 | — |\n| 安全架构 | 未覆盖 | — |\n",
  "progress/LEARNING_LOG.md": "# 学习总账\n\n专门记录**已经学过的部分**：时间、挂在哪些节点、深度、缺口。详细正文在各领域 `learning/` 目录。\n\n状态约定与更新步骤见 [`AGENTS.md`](../AGENTS.md)。\n\n| 日期 | 领域 | 深度 | 摘要 | 详细记录 |\n|---|---|---|---|---|\n| 2026-08-17 | 移动与物联网（微信小程序）及身份认证交叉 | practice | 解包导入布局、工程配置缺陷、wx.login 换票模型、本地 mock 边界、wechatide、合法 token 与自动化 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) |\n| 2026-08-17 | 二进制逆向分析（及 ABI、IOC 交叉） | concept | 完整逆向过程、IOC、分步工具、汇编策略、C/ABI 原因、沙箱 vs 行为分析、AI 时代门槛 | [笔记](../domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |\n\n---\n\n## 2026-08-17 · 微信小程序本地调试与鉴权（实践）\n\n- **形式**：对话 + 微信开发者工具 / wechatide 本地实践。\n- **已覆盖**：`__APP__` 导入；componentFramework / Skyline lazyCodeLoading / WXML 拆串 / WXS 路径；wx.login→后端换票→业务 token；本地 mock 只过前端门禁；合法长效 token 对自动化的意义；CLI 用途。\n- **未覆盖**：云开发安全、Android/iOS、自有小程序 automator 样例。\n- **下一步**：在自有小程序上用测试号验证「预置 token 跳过登录」的自动化。\n\n---\n\n## 2026-08-17 · 二进制逆向分析（概念）\n\n- **形式**：对话系统讲解，无实验。\n- **已覆盖**：逆向 9 步流程；沙箱初判 ≠ 行为分析；IOC/IOA；每步推荐工具；不必通读汇编但必须能抽查；学 C 与 ABI 是为了还原语义和打假；AI 会降低翻译成本、提高验真成本。\n- **未覆盖**：任何工具实操、汇编练习、PE/ELF 深入、教学样本。\n- **下一步**：用自己编译的小 C 程序对照 Ghidra，验证调用约定。\n"
};
