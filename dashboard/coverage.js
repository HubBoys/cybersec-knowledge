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
          "notes": "哈希、对称/非对称、证书、常见误用。Hydra/Medusa 学习中仅对照到「离线哈希恢复 ≠ 在线登录探测」，Hashcat/John 本身未覆盖"
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
      "status": "partial",
      "notes": "目前仅覆盖个人工作台 EasyTools 的定位；OWASP 与常见漏洞模型未覆盖",
      "children": [
        {
          "id": "web-toolkit-easytools",
          "name": "EasyTools 工作台（交叉）",
          "status": "covered",
          "notes": "详见 mobile-iot 的 mp-tool-easytools",
          "learning_notes": [
            "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
          ]
        },
        {
          "id": "web-owasp-basics",
          "name": "OWASP 与常见 Web 风险模型",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "network-security",
      "name": "网络安全与流量分析",
      "status": "partial",
      "notes": "目前仅覆盖在线登录探测工具 Hydra/Medusa 的概念对照；抓包、流量分析、IDS/IPS 未覆盖",
      "first_studied": "2026-08-17",
      "learning_notes": [
        "domains/network-security/learning/2026-08-17-hydra-medusa.md"
      ],
      "children": [
        {
          "id": "net-online-vs-offline-auth",
          "name": "在线登录探测 vs 离线哈希恢复",
          "status": "covered",
          "notes": "只记分工与风险差异；Hashcat/John 本身未学",
          "learning_notes": [
            "domains/network-security/learning/2026-08-17-hydra-medusa.md"
          ]
        },
        {
          "id": "net-login-probers",
          "name": "在线登录探测工具",
          "status": "partial",
          "notes": "Hydra/Medusa 已覆盖概念；Ncrack 未学。只记名称、架构与选用边界；不含探测操作手册",
          "learning_notes": [
            "domains/network-security/learning/2026-08-17-hydra-medusa.md"
          ],
          "children": [
            {
              "id": "net-thc-hydra",
              "name": "THC-Hydra",
              "status": "covered",
              "learning_notes": [
                "domains/network-security/learning/2026-08-17-hydra-medusa.md"
              ]
            },
            {
              "id": "net-medusa",
              "name": "Medusa",
              "status": "covered",
              "learning_notes": [
                "domains/network-security/learning/2026-08-17-hydra-medusa.md"
              ]
            },
            {
              "id": "net-ncrack",
              "name": "Ncrack",
              "status": "uncovered",
              "notes": "对照中提及，未单独学习"
            }
          ]
        },
        {
          "id": "net-packet-analysis",
          "name": "抓包与流量分析",
          "status": "uncovered"
        },
        {
          "id": "net-ids-ips",
          "name": "IDS/IPS 概念",
          "status": "uncovered"
        }
      ]
    },
    {
      "id": "identity",
      "name": "身份认证与访问控制",
      "status": "partial",
      "notes": "微信小程序 wx.login / 业务 token 概念已覆盖；弱口令在线探测与 Hydra/Medusa 交叉已覆盖；OAuth、会话管理、MFA 等未覆盖",
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
        },
        {
          "id": "id-weak-password-online",
          "name": "弱口令在线探测（交叉）",
          "status": "covered",
          "notes": "详见 network-security 的 Hydra/Medusa；只记分工与选用，不含探测步骤",
          "learning_notes": [
            "domains/network-security/learning/2026-08-17-hydra-medusa.md"
          ]
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
        "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md",
        "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
      ],
      "children": [
        {
          "id": "wechat-miniprogram",
          "name": "微信小程序",
          "status": "partial",
          "learning_notes": [
            "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md",
            "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
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
              "id": "mp-tooling",
              "name": "小程序分析工具栈",
              "status": "covered",
              "notes": "只记名称、分层与版本边界；不含未授权操作步骤",
              "learning_notes": [
                "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
              ],
              "children": [
                {
                  "id": "mp-tool-unveilr",
                  "name": "unveilr（wxapkg 还原）",
                  "status": "covered",
                  "learning_notes": [
                    "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
                  ]
                },
                {
                  "id": "mp-tool-easytools",
                  "name": "EasyTools（工作台）",
                  "status": "covered",
                  "learning_notes": [
                    "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
                  ]
                },
                {
                  "id": "mp-tool-wxopendevtools",
                  "name": "WeChatOpenDevTools-Python（旧版运行时）",
                  "status": "covered",
                  "notes": "新版微信不可用",
                  "learning_notes": [
                    "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
                  ]
                },
                {
                  "id": "mp-tool-first",
                  "name": "First / WMPFDebugger（新版运行时）",
                  "status": "covered",
                  "learning_notes": [
                    "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
                  ]
                },
                {
                  "id": "mp-tool-wechatide-skill",
                  "name": "官方 wechatide-skill 用法",
                  "status": "covered",
                  "notes": "只了解用法，未在本仓库安装该 skill",
                  "learning_notes": [
                    "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md"
                  ]
                }
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
  "domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md": "---\ndate: 2026-08-17\ndomain: mobile-iot\nnodes:\n  - mp-wxapkg-layout\n  - mp-project-config\n  - mp-wx-login-model\n  - mp-local-debug-limits\n  - mp-devtools-cli\n  - mp-auth-token-reuse\n  - wechat-miniprogram\nform: 对话 + 本地开发者工具实践\ndepth: practice\n---\n\n# 微信小程序：解包产物本地调试、鉴权模型与自动化边界\n\n合法用途：理解小程序工程结构、鉴权模型、授权调试与自动化约束；用于自有应用或已获授权的安全评估。不涉及未授权访问、破解或伪造他人身份。\n\n## 学了什么\n\n围绕微信客户端缓存中的小程序包（`wxapkg` 解包目录）导入开发者工具的完整排障过程，并澄清 `wx.login`、后端 token、AppID 绑定与自动化之间的关系。实践对象是本地解包工程的**工程修复与鉴权概念验证**，不是对第三方生产接口的未授权调用。\n\n## 可复述结论\n\n### 1. 解包目录 ≠ 可直接导入的源码工程\n\n微信客户端缓存路径形如：\n\n`...\\Tencent\\xwechat\\radium\\users\\<uid>\\applet\\packages\\<appid>\\<ver>\\`\n\n常见布局：\n\n- 版本目录根：可能有 `__APP__.wxapkg`、空或后补的 `project.config.json`\n- 真正可导入的源码根：子目录 `__APP__/`（含 `app.js` / `app.json` / `pages/`）\n\n导入版本根会报「根目录未找到 `app.json`」。应导入 `__APP__`，并补齐合法 `project.config.json`。\n\n### 2. 解包产物常见工程缺陷（只记现象与修复方向）\n\n| 现象 | 原因方向 | 修复方向（概念） |\n|---|---|---|\n| `componentFramework` 类型错误 | 解包把字段还原成对象 | 改为字符串 `exparser` / `glass-easel` |\n| Skyline 启动失败 | 页面 `renderer: skyline` 缺全局 `lazyCodeLoading` | `app.json` 增加 `\"lazyCodeLoading\": \"requiredComponents\"` |\n| WXML `unexpected` / 拆串 | 解包后字符串字面量被换行切断 | 合并为单行表达式 |\n| Vant `style is not a function` | `.wxs` 内 `require(\"p_./...\")` 为运行时内部路径 | 改为相对路径如 `../wxs/style.wxs` |\n| AppID 无法切换 | 当前登录账号不是该小程序开发者 | 只能用自己有权限的 AppID 本地调试 |\n\n增强编译 / 二次压缩对已编译产物常加重问题；本地调试宜关闭 `es6`/`enhance`/`minifyWXML`。\n\n### 3. `wx.login` 鉴权模型（概念）\n\n标准链路：\n\n1. 客户端 `wx.login()` → 微信返回短时 `code`（绑定**当前运行 AppID**）\n2. 前端把 `code` 交给业务后端\n3. 后端用 **AppID + AppSecret** 调微信换票接口 → `openid` / `session_key`\n4. 后端签发自有 `access_token`（业务会话）\n\n因此：开发者工具里换成「自己的 AppID」后，即便 UI 能跑，`code` 也无法被「对方后端」按原 AppID 合法换票。失败点通常在步骤 3/4，而不是 `wx.login` API「完全不可调用」。\n\n不同小程序前端表现不同：有的跳「认证失败」页，有的跳「获取登录凭证失败」页；根因同类。\n\n### 4. 本地调试能做什么、不能做什么\n\n| 目标 | 可行性 |\n|---|---|\n| 修工程、看页面结构、走前端流程 | 可行：本地 mock openid/token、跳过失败跳转 |\n| 用自己的 AppID 冒充原小程序调生产登录 | 不可行：微信侧绑定 AppID |\n| 无权限伪造他人 `code` / 换票 | 不可行，且属未授权范畴 |\n\n本地 mock 只越过**前端门禁**，不产生对方后端承认的真实身份。\n\n### 5. 有合法长效业务 token 时\n\n许多业务接口只校验后端 token。若已通过授权渠道持有**仍有效**的 token：\n\n- 后续请求可不再走 `wx.login`\n- 自动化可预置 token / storage，跳过登录页\n\n仍须注意：刷新机制、设备/签名绑定、服务端吊销、部分接口额外校验。token 必须来自有权使用的账号或测试通道。\n\n### 6. 自动化是否「无解」\n\n- **有开发者权限 / 测试号 / 测试后门**：可解（automator、测试 ticket、预置 token、测试环境跳过换票等）\n- **无权限仅持解包产物**：无解的是「鉴权」，不是「自动化技术」本身\n\n工具名记用途即可：微信开发者工具 CLI（`wechatide`）用于授权调试、编译刷新、console/截图；First / WMPFDebugger 类工具用于在微信进程内动态观察 API（需合法使用场景）。它们都不能让错误的 AppID 通过微信换票。\n\n## 实践证据\n\n环境：Windows + 微信开发者工具 + `wechatide` CLI（Cursor 客户端授权）。\n\n操作与结果：\n\n1. 将缓存包 `__APP__` 导入工具；缺配置时补 `project.config.json`，AppID 使用有权限的测试号。\n2. 修复 `componentFramework`、`lazyCodeLoading`、WXML 拆串、部分 WXS 路径后，模拟器可启动。\n3. 登录失败页出现后，用本地 mock openid/token 验证「仅过前端门禁」；首页 UI 可打开，业务列表仍依赖真实鉴权。\n4. 用 `wechatide` 完成导入、清缓存、刷新、读 console、截图取证。\n\n## 仍未覆盖\n\n- 微信云开发鉴权与云函数安全模型\n- 小程序加密请求 / 自定义签名方案的一般分析方法（仅概念未展开）\n- iOS / Android 客户端侧 WMPF 注入工具的合法实验流程（First 已入工具栈概念，尚无本次实操）\n- 小程序权限模型（scope）、隐私协议与合规清单\n\n## 下一步\n\n1. 在**自有**小程序上用测试号 + automator 跑通「预置 token 跳过登录」的自动化样例\n2. 梳理身份认证领域：OAuth / session / token 刷新的一般模型，与 `wx.login` 对照\n3. 若继续移动安全：补充 APK/IPA 与小程序包在「客户端产物分析」上的异同（概念）\n",
  "domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md": "---\ndate: 2026-08-17\ndomain: mobile-iot\nnodes:\n  - mp-tooling\n  - mp-tool-unveilr\n  - mp-tool-easytools\n  - mp-tool-wxopendevtools\n  - mp-tool-first\n  - mp-tool-wechatide-skill\n  - web-toolkit-easytools\nform: 仓库调研 + 官方 skill 阅读 + 使用者自述\ndepth: concept\n---\n\n# 微信小程序工具栈：EasyTools / unveilr / OpenDevTools / First / 官方 wechatide\n\n合法用途：在**自有应用或已获授权**的评估里，知道该用哪一层工具、哪一层已经失效。不涉及未授权访问、对他人小程序的破解或运行时注入操作步骤。\n\n## 学了什么\n\n把日常用的四件开源工具和官方 `wechatide-skill` 放到同一张分层图上：产物还原、授权调试、微信进程内观察、综合工作台。记录 **WeChatOpenDevTools-Python 在新版微信不可用**，以及官方 skill 的用法门禁（本仓库不安装该 skill）。\n\n## 可复述结论\n\n### 1. 先分层，再选工具\n\n```mermaid\nflowchart TB\n  subgraph product [产物层]\n    PKG[wxapkg 缓存包]\n    UV[unveilr]\n    ET1[EasyTools 小程序反编译入口]\n    PKG --> UV\n    ET1 --> UV\n  end\n  subgraph official [官方调试层]\n    IDE[微信开发者工具]\n    SK[wechatide-skill / CLI]\n    IDE --> SK\n  end\n  subgraph runtime [微信进程内观察]\n    OLD[WeChatOpenDevTools-Python]\n    NEW[First / WMPFDebugger]\n    OLD -.->|新版微信不可用| X[失效]\n    NEW -->|面向较新 WMPF| RT[运行时]\n  end\n  UV --> IDE\n  SK --> IDE\n```\n\n四层回答的问题不同：\n\n| 层 | 问题 | 工具 |\n|---|---|---|\n| 产物还原 | 缓存包如何变成可阅读的工程文件 | unveilr；EasyTools 内的小程序反编译入口依赖同类能力 |\n| 官方调试 | 有开发者权限时如何编译、预览、自动化、取证 | 微信开发者工具 + `wechatide` |\n| 进程内观察 | 微信里跑着的小程序运行时 | 旧：OpenDevTools；新：First |\n| 工作台 | 授权测试里的扫描、笔记、导航、小程序入口 | EasyTools |\n\n它们都不能让「错误的 AppID」通过微信换票。鉴权边界见上一篇本地调试笔记。\n\n### 2. unveilr\n\n- 仓库：https://github.com/broken5/unveilr（fork 自 r3x5ur/unveilr 一线）\n- 定位：把 `wxapkg` 还原成可查看的源码树；支持较新包格式与插件包。\n- 记住：这是**产物还原**，不是登录绕过。只用于有权分析的包。\n\n### 3. EasyTools\n\n- 仓库：https://github.com/doki-byte/EasyTools\n- 定位：授权渗透测试用的桌面工作台（工具仓库、导航、扫描、信息收集、CTF、CLI 定时等）。\n- 与小程序的交点：内置小程序反编译相关能力，changelog 写明参考 unveilr。\n- 交叉：Web 安全领域目前只把「这是个人工作台」记上，OWASP 模型仍未覆盖。\n- 使用约束：仅授权范围；仓库自身也禁止未授权商业用途。\n\n### 4. WeChatOpenDevTools-Python（已过时）\n\n- 仓库：https://github.com/JaveleyQAQ/WeChatOpenDevTools-Python\n- 定位：在**旧版** Windows/Mac 微信里给小程序或内置浏览器开调试界面。\n- **使用者结论：新版微信不能用。** 它绑死具体微信版本与小程序内核版本，版本对不上就匹配失败。\n- 图谱里保留为「旧路径 / 失效」，不要再当默认方案。不记录注入或 hook 步骤。\n\n### 5. First\n\n- 仓库：https://github.com/Spade-sec/First\n- 定位：WMPFDebugger 二开的小程序安全研究工作台（Frida + CDP），面向较新的微信 / WMPF。\n- 能力类别（只记类别）：运行时观察、wx API 观察、云函数调用观察、包还原与信息扫描、MCP 接口。\n- 和 OpenDevTools 的关系：**新版微信上优先理解 First 这一层，而不是旧 Python 注入器。**\n- 仅用于授权研究。不写 Frida 附加或 hook 操作手册。\n\n### 6. 官方 wechatide-skill（只了解用法）\n\n路径（本机已安装的开发者工具内，**不要往本仓库拷贝或再装一遍**）：\n\n`C:\\Program Files (x86)\\Tencent\\微信web开发者工具\\resources\\app.asar.unpacked\\wechatide-skill`\n\n版本阅读时为 `0.3.9`。根入口 `SKILL.md` 的要点：\n\n- 调用形态：`wechatide -c <clientName> <toolName> ...`（Cursor 会话里 `-c Cursor`）\n- **禁止在 sandbox 里跑** `wechatide`\n- 业务前先 `check_wechatide_status`；`tokenRequired` 时问用户「设置 → 安全」，禁止猜 token\n- 按**当前主目标**进一个 scene，不要混用原子工具\n\n| 意图 | Scene |\n|---|---|\n| 安装/更新开发者工具 | installer（用户未要求安装则不要走） |\n| 开窗、登录、AppID | initializer |\n| 导入/列表/删除项目 | project-manager |\n| 改 `project.config.json` | project-config（直接改文件） |\n| 编译、刷新模拟器 | compiler |\n| 预览、上传体验版 | previewer |\n| 点击/输入/测试号 | automator |\n| console / network / 截图 | debugger |\n| 云函数/云库/云存储 | cloudbase-operator |\n\n已实践过的 CLI 用途（清缓存、刷新、console、截图）仍记在上一篇；本篇只补 **skill 路由与门禁**。\n\n## 实践证据\n\n本篇为概念层：对照公开仓库说明与本机官方 skill 文档，以及「新版微信 OpenDevTools 不可用」的使用经验。未在本会话复现还原或进程内调试。\n\n## 仍未覆盖\n\n- 自有小程序上 automator + 测试号的完整样例\n- First 在授权实验室里的实际操作记录（有工具、无本次实验）\n- 小程序云开发安全（官方 skill 有 cloudbase scene，图谱仍未覆盖）\n- EasyTools 各 Web 模块对应的 OWASP 知识\n\n## 下一步\n\n1. 授权范围内若要做运行时观察，以 First 为当前代际，OpenDevTools 仅作历史条目\n2. 有开发者权限的项目继续走官方 wechatide，不要用进程内工具替代官方调试器\n3. Web 安全从 EasyTools 工作台下钻到 OWASP 模型，而不是继续堆工具名\n",
  "domains/mobile-iot/README.md": "---\nid: mobile-iot\nname: 移动与物联网安全\nstatus: partial\nupdated: 2026-08-17\n---\n\n# 移动与物联网安全\n\n当前从**微信小程序本地调试与鉴权模型**切入；Android/iOS 应用安全、物联网协议等尚未覆盖。\n\n- 覆盖状态真源：[`coverage.yml`](../../coverage.yml)\n- 本领域笔记：\n  - [learning/2026-08-17-wechat-miniprogram-local-debug.md](learning/2026-08-17-wechat-miniprogram-local-debug.md)\n  - [learning/2026-08-17-wechat-mp-tooling.md](learning/2026-08-17-wechat-mp-tooling.md)\n\n## 子图\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  MIOT[移动与物联网 · partial]\n  MP[微信小程序 · partial]\n\n  subgraph done [已学]\n    LAY[解包目录布局]\n    CFG[工程配置缺陷]\n    LOGIN[wx.login 鉴权模型]\n    LIMIT[本地调试边界]\n    CLI[开发者工具 CLI]\n    TOK[业务 token 复用]\n    TOOL[分析工具栈]\n  end\n\n  subgraph todo [未覆盖]\n    AND[Android 应用安全]\n    IOS[iOS 应用安全]\n    IOT[物联网协议与设备]\n    CLOUD[小程序云开发安全]\n  end\n\n  MIOT --> MP\n  MP --> LAY --> CFG\n  MP --> LOGIN --> LIMIT\n  MP --> CLI\n  LOGIN --> TOK\n  MP --> TOOL\n  MIOT --> AND\n  MIOT --> IOS\n  MIOT --> IOT\n  MP --> CLOUD\n\n  class LAY,CFG,CLI practiced\n  class LOGIN,LIMIT,TOK,TOOL covered\n  class AND,IOS,IOT,CLOUD uncovered\n  class MP,MIOT partial\n```\n\n## 已覆盖\n\n| 节点 id | 深度 | 要点 |\n|---|---|---|\n| `mp-wxapkg-layout` | practiced | 导入 `__APP__`，不是版本根目录 |\n| `mp-project-config` | practiced | componentFramework / Skyline lazyCodeLoading / WXML 拆串 / WXS 路径 |\n| `mp-wx-login-model` | covered | code 绑定 AppID；后端 AppSecret 换票；业务 token |\n| `mp-local-debug-limits` | covered | mock 只过前端门禁 |\n| `mp-devtools-cli` | practiced | wechatide 授权调试用途 |\n| `mp-auth-token-reuse` | covered | 合法长效 token 可减少反复 wx.login |\n| `mp-tooling` 及 unveilr / EasyTools / OpenDevTools / First / wechatide-skill | covered | 产物还原、官方调试、新旧运行时、工作台分层；新版微信 OpenDevTools 不可用 |\n\n## 未覆盖（建议顺序）\n\n1. 自有小程序上的 automator + 测试号实践\n2. First 在授权实验室的实践记录（工具已入图谱）\n3. 小程序云开发鉴权概念\n4. Android 应用基础（APK 结构、权限）\n\n## 与其他领域的边\n\n- 身份认证：`mp-wx-login-model` / `mp-auth-token-reuse` 与 token/session 模型交叉\n- 二进制逆向：解包产物分析是「客户端产物」旁支，不是传统 PE/ELF 逆向主线\n",
  "domains/network-security/learning/2026-08-17-hydra-medusa.md": "---\ndate: 2026-08-17\ndomain: network-security\nnodes:\n  - net-online-vs-offline-auth\n  - net-login-probers\n  - net-thc-hydra\n  - net-medusa\n  - id-weak-password-online\nform: GitHub 仓库调研 + 官方 README / Medusa 文档对照\ndepth: concept\n---\n\n# 在线登录探测：Hydra 与 Medusa\n\n合法用途：在**自有资产或已获授权**的评估里，理解「在线登录探测」和「离线哈希恢复」的分工，以及 Hydra / Medusa 的定位差异。本笔记只记名称、架构与选用边界，不写可复现的探测步骤、字典用法或未授权访问操作。\n\n## 学了什么\n\n从 GitHub 公开仓库对照两款经典在线登录探测工具：THC-Hydra 与 Foofus Medusa。同时划清它们与 Hashcat / John the Ripper 的边界，并记下 GitHub 上大量低质量「社交账号爆破」脚本不应进入工具地图。\n\n## 可复述结论\n\n### 1. 在线探测 ≠ 离线恢复\n\n| 类型 | 代表 | 输入 | 风险特征 |\n|---|---|---|---|\n| 在线登录探测 | Hydra、Medusa | 仍在提供认证的网络服务 | 会触发锁账号、封 IP、WAF、fail2ban；并发过高可把服务打挂 |\n| 离线哈希恢复 | Hashcat、John | 已经拿到的哈希 | 不打登录接口；本笔记未学这两款工具本身 |\n\n评估弱口令前，先确认目标有无锁定与速率限制，再决定要不要用在线类工具。未授权对他人系统或账号做口令探测违法。\n\nGitHub 搜 `password brute force` 会混进大量 Instagram / 社交账号脚本：星标低、说明夸张。高质量入口仍是 Hashcat / John / Hydra 这类长期维护项目，而不是这类账号脚本。\n\n### 2. Hydra：协议广、资料多，默认先认它\n\n- 仓库：https://github.com/vanhauser-thc/thc-hydra（THC / van Hauser，约 2001 年起）\n- 许可：AGPLv3；当前 release 对照时为 v9.7（2026-05）\n- 并发：`fork()` 子进程；模块编译进主程序\n- 配套：Kali 默认、`xhydra` GTK 界面、官方 Docker、JSON 输出、会话恢复\n- 覆盖面：五十多种远程认证模块，HTTP(S) 表单相对最熟；还有 LDAP、HTTP Proxy、SOCKS5、Cisco enable、SAP、SIP、MongoDB 等 Medusa 基本没有的方向\n- 选用：单台或少量目标、HTTP 表单、冷门协议、需要现成教程时\n\n作者声明仅限合法用途。\n\n### 3. Medusa：为「多主机并行」重写，SMB/RDP 更细\n\n- 仓库：https://github.com/jmk-foofus/medusa（Foofus / JoMo-Kun）\n- 文档：https://jmk-foofus.github.io/medusa/medusa.html\n- 许可：GPLv2；当前 release 对照时为 2.3（2025-05）\n- 并发：`pthread` 线程，从设计起按「多主机 × 多用户 × 多口令」共享同一份列表，避免 fork 复制开销\n- 模块：独立 `.mod` 文件，可单独编译加载\n- 亮点不在协议数量：SMB（SMBv1，有 libsmb2 时含 SMBv2/3 与 signing）、RDP 哈希传递、部分 SNMP / AS/400 Telnet 实现更细\n- 选用：一次打很多主机、很在意线程开销，或目标主要是 Windows SMB / RDP\n- 代价：社区小（星标约 Hydra 的 1/14），坑要自己翻源码和 foofus 文档\n\n作者写 Medusa 的原因：当时 Hydra 易崩、fork 模型难改。官方对比页停在 Hydra 7.1 vs Medusa 2.2，不能直接拿来评价现在的 Hydra 9.7。\n\n### 4. 怎么选（概念层）\n\n```mermaid\nflowchart TB\n  Q{要解决的问题?}\n  Q -->|已经拿到哈希| OFF[离线恢复 · Hashcat / John · 本节点未学]\n  Q -->|对着仍在跑的认证服务| ON[在线登录探测]\n  ON --> W{场景}\n  W -->|协议杂 / HTTP 表单 / 资料要多| H[Hydra]\n  W -->|多主机并行 / Windows SMB·RDP| M[Medusa]\n  W -->|协议很少、偏稳定扫描| N[Ncrack · 提及未学]\n```\n\n同类 Ncrack 定位更窄，现在不如 Hydra 常用，本节点未单独覆盖。\n\n## 实践证据\n\n无（概念层）。只读了仓库说明与官方文档，未在隔离环境运行这两款工具。\n\n## 仍未覆盖\n\n- Hydra / Medusa 在授权实验室的实操与速率控制经验\n- Ncrack\n- Hashcat / John 本身（仅知分工）\n- 抓包、IDS/IPS、流量分析\n- OAuth / 会话生命周期 / MFA（身份认证其余节点）\n\n## 下一步\n\n1. 若要实践：仅在自有或书面授权的隔离靶场记录「控速 + 锁定策略」观察，不要对着生产乱开并发。\n2. 离线哈希线另开 Hashcat / John 节点，不要和本笔记混成同一类工具。\n3. 网络领域主线仍是抓包阅读与流量分析，尚未开始。\n",
  "domains/network-security/README.md": "---\nid: network-security\nname: 网络安全与流量分析\nstatus: partial\nupdated: 2026-08-17\n---\n\n# 网络安全与流量分析\n\n当前从**在线登录探测工具对照**切入；抓包、流量分析、IDS/IPS 尚未覆盖。深度为概念，未实践。\n\n- 覆盖状态真源：[`coverage.yml`](../../coverage.yml)\n- 本领域笔记：[learning/2026-08-17-hydra-medusa.md](learning/2026-08-17-hydra-medusa.md)\n\n## 子图\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  NET[网络安全与流量分析 · partial]\n  DIFF[在线探测 vs 离线恢复]\n  PROBE[在线登录探测工具]\n  H[THC-Hydra]\n  M[Medusa]\n  NC[Ncrack]\n  PKT[抓包与流量分析]\n  IDS[IDS/IPS 概念]\n\n  NET --> DIFF --> PROBE\n  PROBE --> H\n  PROBE --> M\n  PROBE --> NC\n  NET --> PKT\n  NET --> IDS\n\n  class DIFF,H,M covered\n  class NC,PKT,IDS uncovered\n  class NET,PROBE partial\n```\n\n## 已覆盖\n\n| 节点 id | 深度 | 要点 |\n|---|---|---|\n| `net-online-vs-offline-auth` | concept | 在线打认证服务 vs 离线打哈希；锁定/封禁风险不同 |\n| `net-login-probers` | concept | 只记授权评估用的经典工具，不收社交账号脚本；因 Ncrack 未学，父节点为 partial |\n| `net-thc-hydra` | concept | fork、协议广、HTTP 表单熟、Kali 默认 |\n| `net-medusa` | concept | pthread、多主机、SMB/RDP 更细、社区小 |\n\n## 未覆盖（建议顺序）\n\n1. 授权靶场里对 Hydra 或 Medusa 做控速观察（当前禁止把操作手册写入本库）\n2. 抓包阅读（与基础网络节点交叉）\n3. IDS/IPS 与流量分析\n4. Ncrack、Hashcat / John（后者挂密码学，不要和本领域混）\n\n## 与其他领域的边\n\n- 身份认证：弱口令在线探测交叉节点 `id-weak-password-online`\n- 密码学基础：仅对照到「离线哈希恢复」，Hashcat/John 本身未覆盖\n- Web 安全：Hydra 的 HTTP 表单模块与 Web 弱口令评估相邻，OWASP 模型仍未覆盖\n",
  "domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md": "---\ndate: 2026-08-17\ndomain: reverse-engineering\nnodes:\n  - re-process\n  - re-lab\n  - re-file-id\n  - re-static-props\n  - re-sandbox\n  - re-behavior\n  - re-sandbox-vs-behavior\n  - re-static-code\n  - re-dynamic-code\n  - re-report\n  - re-ioc\n  - re-tools\n  - re-assembly-strategy\n  - re-c-abi-why\n  - re-ai-barrier\n  - abi-calling-convention\n  - ioc-ioa\nform: 对话\ndepth: concept\n---\n\n# 二进制逆向：过程、IOC、工具、C/ABI，以及 AI 之后的门槛\n\n合法用途：恶意软件研判、事故响应、漏洞审计、协议互操作。不涉及破解、绕过授权或编写利用。\n\n## 学了什么\n\n一次对话把「二进制逆向的完整过程」讲清楚，并追问了四个概念缺口：IOC、每步工具与是否硬读汇编、为何要学 C/ABI、自动化沙箱与行为分析有何不同。另外讨论了 AI 普及后逆向门槛会挪到哪里。\n\n## 可复述结论\n\n### 1. 外层是取证，内层是迭代分析\n\n外层可套 NIST SP 800-86：**采集 → 检验 → 分析 → 报告**。  \n内层接近 SANS / Zeltser 的恶意软件方法，在隔离实验室里把静态属性、行为、代码分析反复做，直到回答完事先写下的问题。\n\n目标决定深度。应急响应常常做到行为 + IOC 就够；深度研判才需要还原算法。\n\n### 2. 九步过程（可循环）\n\n1. **明确问题**：是不是恶意、改了什么、连谁、某个异常对应哪段逻辑。\n2. **隔离实验室**：虚拟机快照、与生产网隔离、样本只读、记录哈希。\n3. **文件鉴定**：PE/ELF/Mach-O、架构位数、是否像加壳、编译语言、签名。这步决定工具链。\n4. **静态属性（不运行）**：字符串、导入表、资源、熵值、哈希情报。形成假说，不是结论。\n5. **自动化沙箱初判**：短时间自动跑，看文件/进程/网络/持久化。噪声大、会被反沙箱骗，是**起点**。\n6. **行为分析**：在自己实验室里监控文件系统、注册表、进程、网络、IPC。回答 **What**，产出可核实的 IOC 和清理建议。\n7. **静态代码分析**：反汇编/反编译，从入口、字符串 xref、API 定位关键函数，还原控制流和数据结构。\n8. **动态代码分析**：调试器验证运行时数据；在关键 API 或比较处下断点，而不是从入口单步到结束。\n9. **重建与报告**：功能清单（已证实 / 仅静态可见 / 未触发）、IOC、防御建议；写清事实与推断。\n\n```mermaid\nflowchart TB\n  A[明确问题] --> B[隔离实验室]\n  B --> C[文件鉴定]\n  C --> D[静态属性]\n  D --> E[自动化沙箱初判]\n  E --> F[行为分析]\n  F --> G[静态代码分析]\n  G --> H[动态代码分析]\n  H --> I[重建与报告]\n  I -.-> A\n```\n\n教学例子：自写的口令比较小程序。鉴定看到 ELF/PE；字符串窗口可能直接出现提示语和明文；行为上无落盘无联网；反编译能还原 `strcmp`；若字符串被简单变换，则在比较处下断看缓冲区。\n\n### 3. 沙箱初判 ≠ 行为分析\n\n两者观察对象重叠（文件、进程、网络），差别不在软件名字，而在约束：\n\n| | 自动化沙箱 | 行为分析 |\n|---|---|---|\n| 谁跑 | 固定剧本、追求吞吐 | 分析员在场、可改条件 |\n| 目的 | 分诊：要不要继续、先盯哪 | 取证：本次运行确实做了什么 |\n| 输出 | 线索 | 可复述的 What |\n\n```mermaid\nflowchart LR\n  S[自动化沙箱] -->|分诊线索| Q{要不要继续?}\n  Q -->|是| B[行为分析]\n  B -->|已核实的 What| C[代码分析 How]\n  S -->|噪声 / 装死| Q\n```\n\n同一条「写了 `%TEMP%\\svc.dat`」在沙箱里是提示；在行为分析里要有路径、哈希、进程树、是否依赖网络，才能写进报告。  \nHow 仍然留给代码分析。\n\n### 4. IOC 是什么\n\n**IOC（Indicator of Compromise，失陷指标）**：用来判断主机或流量是否已被攻陷过的可观测线索。例如文件哈希、路径、互斥体、域名、注册表键。\n\n它回答「怎么认出它来过」，不回答「怎么打进去」。  \n**IOA** 更偏手法（例如用合法工具写启动项），不绑死某一个哈希。  \nYARA / Sigma 是把线索写成可检索规则。\n\n### 5. 每步工具（名称与用途）与汇编策略\n\n| 步骤 | 工具（记名称即可） |\n|---|---|\n| 隔离 | VirtualBox / VMware / Hyper-V |\n| 鉴定 | `file`、Detect It Easy、CFF Explorer、PE-bear、`readelf` |\n| 静态属性 | `strings`、FLOSS、pestudio |\n| 沙箱 | ANY.RUN、CAPE、Cuckoo、Joe Sandbox |\n| 行为 | Process Monitor、Process Explorer、Wireshark、Sysmon |\n| 静态代码 | Ghidra、IDA、Binary Ninja、radare2 |\n| 动态代码 | x64dbg、WinDbg、gdb/gef |\n| 托管代码 | dnSpy、JADX |\n\n**不必通读汇编，但不能完全不碰。** 工作方式是三层：先用反编译和字符串定位；伪代码说谎或空白时下到汇编；调试用来验证而不是朗读全文。常规样本大致是 70% 属性+行为+伪代码，20% 对照几段汇编，10% 真正逐条抠。\n\n### 6. 为什么要熟练 C，以及 ABI / 调用约定\n\n二进制不是另一种源码，而是 **C（或类 C）编译后剩下的机器约定**。汇编没有「函数」「对象」这些词；它们是编译器和 ABI 约定出来的。\n\n- **C**：`if` 是比较+条件跳；局部变量是栈槽；`struct` 是按对齐排的内存。逆向是把「源码 → 汇编」倒着走。Ghidra 伪代码像 C，正是因为这个心智模型。\n- **ABI / 调用约定**：参数放哪个寄存器、谁清栈、返回值在哪、栈如何对齐、结构体怎么传。Windows x64 前四个整数/指针走 `RCX, RDX, R8, R9`；Linux System V 走 `RDI, RSI, RDX, RCX, R8, R9`。不懂就会把参数当成局部变量，或看错结构体字段。\n\n工具负责把字节变成汇编或伪代码；C 解释程序结构；ABI 解释函数边界上的数据放在哪。有了它们，才能判断模型或反编译器有没有说错。\n\n### 7. AI 之后门槛在哪\n\n机械步骤（改名、摘要、对已知家族、写草稿）会变便宜；动态调试也会逐渐被 agent + 执行反馈补上。门槛不消失，而是搬家：\n\n1. **验真**：模型会把反编译伪影推理成很自信的错误结论。以后差的是「AI 说这是 C2」；好的是能钉到地址、交叉工具、运行时数据。\n2. **提问与裁剪**：模型吃不下整个二进制。选错函数，后面全是精致幻觉。\n3. **对抗**：样本会专门骗分析器（混淆、自定义 VM、污染字符串）。\n4. **环境耦合**：C2 是否活着、是否要特定域环境才爆发，不在静态文本里。\n5. **领域深度**：自研协议、密码误用、内核/固件，比「解释这段伪代码」更稀缺。\n6. **责任**：报告上要签字的是人，事实/推断/未知必须分开。\n\n汇编和 C 仍然要学，理由变了：不是因为 AI 读不了，而是因为只有你懂，才能看出它在流畅地撒谎。\n\n## 实践证据\n\n无。全程概念层，未打开样本、未使用 Ghidra 或调试器。\n\n## 仍未覆盖\n\n- x86-64 汇编动手\n- PE / ELF 格式深入\n- Ghidra、x64dbg / gdb 实操\n- 加壳识别、混淆、YARA\n- C++ / 托管代码 / 固件\n- 恶意软件教学样本（需隔离实验室）\n\n## 下一步\n\n用自己写的小 C 程序（例如带 `strcmp` 的输入检查）编译后，在 Ghidra 里对上 `main` 和参数寄存器，验证本笔记里的 ABI 说法。\n",
  "domains/reverse-engineering/README.md": "---\nid: reverse-engineering\nname: 二进制逆向分析\nstatus: partial\nupdated: 2026-08-17\n---\n\n# 二进制逆向分析\n\n第一块系统学习的领域。当前是**概念覆盖、未实践**：完整过程、IOC、工具地图、C/ABI 必要性、沙箱与行为分析差异、AI 时代门槛都已有学习记录；汇编/Ghidra/调试器等实操仍未覆盖。\n\n- 覆盖状态真源：[`coverage.yml`](../../coverage.yml)\n- 本领域笔记：[learning/2026-08-17-binary-reverse-engineering.md](learning/2026-08-17-binary-reverse-engineering.md)\n\n## 子图\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n\n  RE[二进制逆向 · partial]\n  subgraph covered [已覆盖]\n    P[完整过程]\n    DIFF[沙箱 vs 行为]\n    IOC[IOC]\n    TL[工具地图]\n    ASM[汇编策略]\n    WHY[C 与 ABI]\n    AI[AI 门槛]\n  end\n  subgraph uncovered [未覆盖]\n    X86[汇编实践]\n    GH[Ghidra]\n    DBG[调试器]\n    PE[PE/ELF]\n    REST[加壳 / 混淆 / YARA / C++ / 托管 / 固件]\n  end\n  RE --> P --> DIFF\n  RE --> IOC\n  RE --> TL\n  RE --> ASM --> WHY\n  RE --> AI\n  RE --> X86\n  RE --> GH\n  RE --> DBG\n  RE --> PE\n  RE --> REST\n  class P,DIFF,IOC,TL,ASM,WHY,AI covered\n  class X86,GH,DBG,PE,REST uncovered\n```\n\n## 已覆盖\n\n| 节点 id | 深度 | 要点 |\n|---|---|---|\n| `re-process` 及实验室到报告各步 | concept | 9 步迭代：目标 → 隔离 → 鉴定 → 静态属性 → 沙箱 → 行为 → 静态代码 → 动态代码 → 报告 |\n| `re-sandbox` / `re-behavior` / `re-sandbox-vs-behavior` | concept | 沙箱是自动分诊；行为分析是人工核实 What |\n| `re-ioc` | concept | 失陷指标；与 IOA 不同 |\n| `re-tools` | concept | 每步工具名称与用途，未上手 |\n| `re-assembly-strategy` | concept | 定位+抽查+验证，不是通读 |\n| `re-c-abi-why` | concept | 汇编没有高级语义，C/ABI 是倒推地图 |\n| `re-ai-barrier` | concept | 门槛从翻译成本转到验真、裁剪、对抗、责任 |\n\n## 未覆盖（建议顺序）\n\n1. C 小程序对照编译，看 `main` / 参数 / 返回值\n2. x86-64 常用指令与 Windows/Linux 调用约定对照\n3. PE 或 ELF 头、区段、导入表（用自己的程序）\n4. Ghidra 打开上述程序，对上源码\n5. 调试器在比较/输出处下断点\n6. 再考虑教学样本、YARA、混淆等\n\n## 与其他领域的边\n\n- 系统编程：`abi-calling-convention` 已覆盖，C 语言本身未覆盖\n- 威胁情报：IOC/IOA 概念已覆盖\n- 应急响应：NIST 四阶段仅作为外层框架提及\n- 恶意软件分析：相邻但未单列学习\n",
  "graph.md": "# 知识图谱\n\n状态以 [`coverage.yml`](coverage.yml) 为准。更新方式见 [`AGENTS.md`](AGENTS.md)。\n\n图例：灰 = 未覆盖 · 橙 = 部分覆盖 · 绿 = 已覆盖（概念） · 蓝 = 已实践\n\n最后同步：2026-08-17\n\n## 顶层领域\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n\n  subgraph base [基础]\n    F[基础底座]\n    N[计算机网络]\n    OS[操作系统]\n    SP[系统编程]\n    CR[密码学基础]\n    ABI[ABI 与调用约定]\n  end\n\n  subgraph tech [技术方向]\n    RE[二进制逆向分析]\n    MA[恶意软件分析]\n    WEB[Web 安全]\n    NET[网络安全与流量分析]\n    ID[身份认证与访问控制]\n    CL[云与容器安全]\n    IOT[移动与物联网安全]\n  end\n\n  subgraph ops [防御运营]\n    DFIR[应急响应与取证]\n    TI[威胁情报]\n    DET[检测工程]\n    SOC[SOC 运营]\n  end\n\n  subgraph gov [工程与治理]\n    SDLC[安全开发生命周期]\n    GRC[风险管理与合规]\n    ARCH[安全架构]\n  end\n\n  F --> N\n  F --> OS\n  F --> SP\n  F --> CR\n  SP --> ABI\n  RE -.概念交叉.-> ABI\n  RE -.相邻.-> MA\n  RE -.过程框架交叉.-> DFIR\n  RE -.IOC 交叉.-> TI\n  IOT -.鉴权交叉.-> ID\n  NET -.弱口令交叉.-> ID\n\n  class N,OS,CR,MA,CL,DFIR,DET,SOC,SDLC,GRC,ARCH uncovered\n  class F,SP,RE,TI,IOT,ID,WEB,NET partial\n  class ABI covered\n```\n\n## 二进制逆向分析（当前主领域之一）\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n\n  RE[二进制逆向分析 · 部分覆盖]\n\n  subgraph done [已覆盖 · 概念]\n    P[完整过程]\n    LAB[隔离实验室]\n    FID[文件鉴定]\n    SP[静态属性]\n    SB[自动化沙箱]\n    BH[行为分析]\n    DIFF[沙箱 vs 行为]\n    SC[静态代码分析]\n    DC[动态代码分析]\n    RP[重建与报告]\n    IOC[IOC]\n    TL[工具地图]\n    ASM[汇编阅读策略]\n    WHY[为何需要 C 与 ABI]\n    AI[AI 时代门槛]\n  end\n\n  subgraph todo [未覆盖]\n    X86[x86-64 汇编实践]\n    PE[PE / ELF 深入]\n    GH[Ghidra 实操]\n    DBG[调试器实操]\n    UP[加壳识别]\n    OB[混淆对抗]\n    YA[YARA]\n    CPP[C++ 逆向]\n    MG[.NET / Java]\n    FW[固件逆向]\n  end\n\n  RE --> P\n  P --> LAB --> FID --> SP --> SB --> BH --> SC --> DC --> RP\n  BH --> DIFF\n  SB --> DIFF\n  RP --> IOC\n  P --> TL\n  SC --> ASM\n  DC --> ASM\n  ASM --> WHY\n  RE --> AI\n\n  RE --> X86\n  RE --> PE\n  RE --> GH\n  RE --> DBG\n  RE --> UP\n  RE --> OB\n  RE --> YA\n  RE --> CPP\n  RE --> MG\n  RE --> FW\n\n  class P,LAB,FID,SP,SB,BH,DIFF,SC,DC,RP,IOC,TL,ASM,WHY,AI covered\n  class X86,PE,GH,DBG,UP,OB,YA,CPP,MG,FW uncovered\n```\n\n## 移动与物联网安全（微信小程序）\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  MIOT[移动与物联网 · 部分覆盖]\n  MP[微信小程序 · 部分覆盖]\n\n  subgraph done [已学]\n    LAY[缓存包布局 · 已实践]\n    CFG[工程配置缺陷 · 已实践]\n    LOGIN[wx.login 换票模型 · 已覆盖]\n    LIMIT[本地调试边界 · 已覆盖]\n    CLI[开发者工具 CLI · 已实践]\n    TOK[业务 token 复用 · 已覆盖]\n    TOOL[分析工具栈 · 已覆盖]\n  end\n\n  subgraph todo [未覆盖]\n    CLOUD[小程序云开发]\n    AND[Android]\n    IOS[iOS]\n    IOTDEV[物联网协议]\n  end\n\n  MIOT --> MP\n  MP --> LAY --> CFG\n  MP --> LOGIN --> LIMIT\n  LOGIN --> TOK\n  MP --> CLI\n  MP --> TOOL\n  MP --> CLOUD\n  MIOT --> AND\n  MIOT --> IOS\n  MIOT --> IOTDEV\n\n  class LAY,CFG,CLI practiced\n  class LOGIN,LIMIT,TOK,TOOL covered\n  class CLOUD,AND,IOS,IOTDEV uncovered\n  class MIOT,MP partial\n```\n\n## 网络安全与流量分析（在线登录探测）\n\n```mermaid\nflowchart TB\n  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111\n  classDef covered fill:#dcfce7,stroke:#15803d,color:#111\n  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111\n\n  NET[网络安全与流量分析 · 部分覆盖]\n  DIFF[在线探测 vs 离线恢复 · 已覆盖]\n  PROBE[在线登录探测工具 · 部分覆盖]\n  H[THC-Hydra · 已覆盖]\n  M[Medusa · 已覆盖]\n  NC[Ncrack · 未覆盖]\n  PKT[抓包与流量分析 · 未覆盖]\n  IDS[IDS/IPS · 未覆盖]\n\n  NET --> DIFF --> PROBE\n  PROBE --> H\n  PROBE --> M\n  PROBE --> NC\n  NET --> PKT\n  NET --> IDS\n\n  class DIFF,H,M covered\n  class NC,PKT,IDS uncovered\n  class NET,PROBE partial\n```\n\n## 覆盖一览\n\n| 领域 | 状态 | 学习记录 |\n|---|---|---|\n| 基础底座 / 网络、OS、密码学 | 部分覆盖（仅 ABI 已覆盖） | [2026-08-17 逆向](domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |\n| 系统编程 / ABI 与调用约定 | 部分 / ABI 已覆盖 | 同上 |\n| **二进制逆向分析** | **部分覆盖** | 同上 |\n| **移动与物联网安全** | **部分覆盖** | [2026-08-17 小程序](domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) · [工具栈](domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |\n| **身份认证与访问控制** | **部分覆盖**（小程序登录 + 弱口令在线探测交叉） | [小程序本地调试](domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) · [Hydra/Medusa](domains/network-security/learning/2026-08-17-hydra-medusa.md) |\n| 恶意软件分析 | 未覆盖 | — |\n| Web 安全 | 部分覆盖（仅 EasyTools 定位） | [工具栈](domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |\n| **网络安全与流量分析** | **部分覆盖**（Hydra/Medusa 概念） | [2026-08-17 Hydra/Medusa](domains/network-security/learning/2026-08-17-hydra-medusa.md) |\n| 云与容器安全 | 未覆盖 | — |\n| 应急响应与取证 | 未覆盖 | 过程框架仅在逆向中提及 |\n| 威胁情报 | 部分覆盖（IOC/IOA） | 逆向笔记 |\n| 检测工程 | 未覆盖 | — |\n| SOC 运营 | 未覆盖 | — |\n| 安全开发生命周期 | 未覆盖 | — |\n| 风险管理与合规 | 未覆盖 | — |\n| 安全架构 | 未覆盖 | — |\n",
  "progress/LEARNING_LOG.md": "# 学习总账\n\n专门记录**已经学过的部分**：时间、挂在哪些节点、深度、缺口。详细正文在各领域 `learning/` 目录。\n\n状态约定与更新步骤见 [`AGENTS.md`](../AGENTS.md)。\n\n| 日期 | 领域 | 深度 | 摘要 | 详细记录 |\n|---|---|---|---|---|\n| 2026-08-17 | 网络安全（及身份认证交叉） | concept | 在线登录探测 vs 离线哈希恢复；Hydra（fork、协议广）vs Medusa（pthread、SMB/RDP）；不含操作步骤 | [笔记](../domains/network-security/learning/2026-08-17-hydra-medusa.md) |\n| 2026-08-17 | 小程序工具栈（及 Web 工作台交叉） | concept | unveilr 产物还原；EasyTools 工作台；OpenDevTools 新版不可用；First 为新版运行时；官方 wechatide-skill 路由与门禁 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |\n| 2026-08-17 | 移动与物联网（微信小程序）及身份认证交叉 | practice | 解包导入布局、工程配置缺陷、wx.login 换票模型、本地 mock 边界、wechatide、合法 token 与自动化 | [笔记](../domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) |\n| 2026-08-17 | 二进制逆向分析（及 ABI、IOC 交叉） | concept | 完整逆向过程、IOC、分步工具、汇编策略、C/ABI 原因、沙箱 vs 行为分析、AI 时代门槛 | [笔记](../domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |\n\n---\n\n## 2026-08-17 · 在线登录探测 Hydra / Medusa（概念）\n\n- **形式**：GitHub 仓库说明 + Hydra README + Medusa 官方文档对照，无实验。\n- **已覆盖**：在线探测 vs 离线恢复；Hydra 的 fork/协议广度/HTTP 表单；Medusa 的 pthread/多主机/SMB·RDP；选用边界；GitHub 低质量账号脚本不入库。\n- **未覆盖**：两款工具实操、Ncrack、Hashcat/John 本身、抓包与流量分析。\n- **下一步**：若实践，仅在授权隔离靶场记录控速与锁定策略；离线哈希线另开节点。\n\n---\n\n## 2026-08-17 · 小程序工具栈（概念）\n\n- **形式**：GitHub 仓库说明 + 本机官方 wechatide-skill 阅读 + 使用者反馈。\n- **已覆盖**：unveilr / EasyTools / OpenDevTools（新版失效）/ First / 官方 skill 的分层与门禁。\n- **未覆盖**：First 实操、automator 测试号样例、云开发安全、OWASP。\n- **下一步**：授权项目继续用官方 wechatide；运行时观察以 First 为当前代际。\n\n---\n\n## 2026-08-17 · 微信小程序本地调试与鉴权（实践）\n\n- **形式**：对话 + 微信开发者工具 / wechatide 本地实践。\n- **已覆盖**：`__APP__` 导入；componentFramework / Skyline lazyCodeLoading / WXML 拆串 / WXS 路径；wx.login→后端换票→业务 token；本地 mock 只过前端门禁；合法长效 token 对自动化的意义；CLI 用途。\n- **未覆盖**：云开发安全、Android/iOS、自有小程序 automator 样例。\n- **下一步**：在自有小程序上用测试号验证「预置 token 跳过登录」的自动化。\n\n---\n\n## 2026-08-17 · 二进制逆向分析（概念）\n\n- **形式**：对话系统讲解，无实验。\n- **已覆盖**：逆向 9 步流程；沙箱初判 ≠ 行为分析；IOC/IOA；每步推荐工具；不必通读汇编但必须能抽查；学 C 与 ABI 是为了还原语义和打假；AI 会降低翻译成本、提高验真成本。\n- **未覆盖**：任何工具实操、汇编练习、PE/ELF 深入、教学样本。\n- **下一步**：用自己编译的小 C 程序对照 Ghidra，验证调用约定。\n"
};
