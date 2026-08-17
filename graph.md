# 知识图谱

状态以 [`coverage.yml`](coverage.yml) 为准。更新方式见 [`AGENTS.md`](AGENTS.md)。

图例：灰 = 未覆盖 · 橙 = 部分覆盖 · 绿 = 已覆盖（概念） · 蓝 = 已实践

最后同步：2026-08-17

## 顶层领域

```mermaid
flowchart TB
  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111
  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111
  classDef covered fill:#dcfce7,stroke:#15803d,color:#111
  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111

  subgraph base [基础]
    F[基础底座]
    N[计算机网络]
    OS[操作系统]
    SP[系统编程]
    CR[密码学基础]
    ABI[ABI 与调用约定]
  end

  subgraph tech [技术方向]
    RE[二进制逆向分析]
    MA[恶意软件分析]
    WEB[Web 安全]
    NET[网络安全与流量分析]
    ID[身份认证与访问控制]
    CL[云与容器安全]
    IOT[移动与物联网安全]
  end

  subgraph ops [防御运营]
    DFIR[应急响应与取证]
    TI[威胁情报]
    DET[检测工程]
    SOC[SOC 运营]
  end

  subgraph gov [工程与治理]
    SDLC[安全开发生命周期]
    GRC[风险管理与合规]
    ARCH[安全架构]
  end

  F --> N
  F --> OS
  F --> SP
  F --> CR
  SP --> ABI
  RE -.概念交叉.-> ABI
  RE -.相邻.-> MA
  RE -.过程框架交叉.-> DFIR
  RE -.IOC 交叉.-> TI
  IOT -.鉴权交叉.-> ID
  NET -.弱口令交叉.-> ID

  class N,OS,CR,MA,CL,DFIR,DET,SOC,SDLC,GRC,ARCH uncovered
  class F,SP,RE,TI,IOT,ID,WEB,NET partial
  class ABI covered
```

## 二进制逆向分析（当前主领域之一）

```mermaid
flowchart TB
  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111
  classDef covered fill:#dcfce7,stroke:#15803d,color:#111

  RE[二进制逆向分析 · 部分覆盖]

  subgraph done [已覆盖 · 概念]
    P[完整过程]
    LAB[隔离实验室]
    FID[文件鉴定]
    SP[静态属性]
    SB[自动化沙箱]
    BH[行为分析]
    DIFF[沙箱 vs 行为]
    SC[静态代码分析]
    DC[动态代码分析]
    RP[重建与报告]
    IOC[IOC]
    TL[工具地图]
    ASM[汇编阅读策略]
    WHY[为何需要 C 与 ABI]
    AI[AI 时代门槛]
  end

  subgraph todo [未覆盖]
    X86[x86-64 汇编实践]
    PE[PE / ELF 深入]
    GH[Ghidra 实操]
    DBG[调试器实操]
    UP[加壳识别]
    OB[混淆对抗]
    YA[YARA]
    CPP[C++ 逆向]
    MG[.NET / Java]
    FW[固件逆向]
  end

  RE --> P
  P --> LAB --> FID --> SP --> SB --> BH --> SC --> DC --> RP
  BH --> DIFF
  SB --> DIFF
  RP --> IOC
  P --> TL
  SC --> ASM
  DC --> ASM
  ASM --> WHY
  RE --> AI

  RE --> X86
  RE --> PE
  RE --> GH
  RE --> DBG
  RE --> UP
  RE --> OB
  RE --> YA
  RE --> CPP
  RE --> MG
  RE --> FW

  class P,LAB,FID,SP,SB,BH,DIFF,SC,DC,RP,IOC,TL,ASM,WHY,AI covered
  class X86,PE,GH,DBG,UP,OB,YA,CPP,MG,FW uncovered
```

## 移动与物联网安全（微信小程序）

```mermaid
flowchart TB
  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111
  classDef covered fill:#dcfce7,stroke:#15803d,color:#111
  classDef practiced fill:#dbeafe,stroke:#1d4ed8,color:#111
  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111

  MIOT[移动与物联网 · 部分覆盖]
  MP[微信小程序 · 部分覆盖]

  subgraph done [已学]
    LAY[缓存包布局 · 已实践]
    CFG[工程配置缺陷 · 已实践]
    LOGIN[wx.login 换票模型 · 已覆盖]
    LIMIT[本地调试边界 · 已覆盖]
    CLI[开发者工具 CLI · 已实践]
    TOK[业务 token 复用 · 已覆盖]
    TOOL[分析工具栈 · 已覆盖]
  end

  subgraph todo [未覆盖]
    CLOUD[小程序云开发]
    AND[Android]
    IOS[iOS]
    IOTDEV[物联网协议]
  end

  MIOT --> MP
  MP --> LAY --> CFG
  MP --> LOGIN --> LIMIT
  LOGIN --> TOK
  MP --> CLI
  MP --> TOOL
  MP --> CLOUD
  MIOT --> AND
  MIOT --> IOS
  MIOT --> IOTDEV

  class LAY,CFG,CLI practiced
  class LOGIN,LIMIT,TOK,TOOL covered
  class CLOUD,AND,IOS,IOTDEV uncovered
  class MIOT,MP partial
```

## 网络安全与流量分析（在线登录探测）

```mermaid
flowchart TB
  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111
  classDef covered fill:#dcfce7,stroke:#15803d,color:#111
  classDef partial fill:#ffedd5,stroke:#c2410c,color:#111

  NET[网络安全与流量分析 · 部分覆盖]
  DIFF[在线探测 vs 离线恢复 · 已覆盖]
  PROBE[在线登录探测工具 · 部分覆盖]
  H[THC-Hydra · 已覆盖]
  M[Medusa · 已覆盖]
  NC[Ncrack · 未覆盖]
  PKT[抓包与流量分析 · 未覆盖]
  IDS[IDS/IPS · 未覆盖]

  NET --> DIFF --> PROBE
  PROBE --> H
  PROBE --> M
  PROBE --> NC
  NET --> PKT
  NET --> IDS

  class DIFF,H,M covered
  class NC,PKT,IDS uncovered
  class NET,PROBE partial
```

## 覆盖一览

| 领域 | 状态 | 学习记录 |
|---|---|---|
| 基础底座 / 网络、OS、密码学 | 部分覆盖（仅 ABI 已覆盖） | [2026-08-17 逆向](domains/reverse-engineering/learning/2026-08-17-binary-reverse-engineering.md) |
| 系统编程 / ABI 与调用约定 | 部分 / ABI 已覆盖 | 同上 |
| **二进制逆向分析** | **部分覆盖** | 同上 |
| **移动与物联网安全** | **部分覆盖** | [2026-08-17 小程序](domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) · [工具栈](domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |
| **身份认证与访问控制** | **部分覆盖**（小程序登录 + 弱口令在线探测交叉） | [小程序本地调试](domains/mobile-iot/learning/2026-08-17-wechat-miniprogram-local-debug.md) · [Hydra/Medusa](domains/network-security/learning/2026-08-17-hydra-medusa.md) |
| 恶意软件分析 | 未覆盖 | — |
| Web 安全 | 部分覆盖（仅 EasyTools 定位） | [工具栈](domains/mobile-iot/learning/2026-08-17-wechat-mp-tooling.md) |
| **网络安全与流量分析** | **部分覆盖**（Hydra/Medusa 概念） | [2026-08-17 Hydra/Medusa](domains/network-security/learning/2026-08-17-hydra-medusa.md) |
| 云与容器安全 | 未覆盖 | — |
| 应急响应与取证 | 未覆盖 | 过程框架仅在逆向中提及 |
| 威胁情报 | 部分覆盖（IOC/IOA） | 逆向笔记 |
| 检测工程 | 未覆盖 | — |
| SOC 运营 | 未覆盖 | — |
| 安全开发生命周期 | 未覆盖 | — |
| 风险管理与合规 | 未覆盖 | — |
| 安全架构 | 未覆盖 | — |
