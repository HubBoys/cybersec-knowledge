---
date: 2026-08-16
domain: network-security
nodes:
  - net-packet-analysis
  - net-mitmproxy
form: 本机 pip 安装验证
depth: practice
---

# mitmproxy：安装与命令入口

合法用途：在自有或授权环境里观察 HTTP(S) 流量、调试客户端。不写对他人应用的证书绕过或拦截利用步骤。

## 学了什么

本机用 miniconda Python 3.12 安装 mitmproxy，验证三条 CLI。安装过程把 `cryptography` / `ruamel.yaml` 升到较新版本，conda 报过与 `ruamel.yaml<0.19` 的冲突警告，mitmproxy 本身可运行。

## 可复述结论

1. **三条入口**：`mitmproxy`（终端）、`mitmweb`（浏览器）、`mitmdump`（无界面/脚本）。默认监听 **8080**。
2. **HTTPS**：需要把 mitmproxy CA 装到系统或测试设备；这是授权调试的前提，不是绕过别人证书校验的教程。
3. **交叉**：UniApp / App 抓包、Frida 动态层之前，常先确认流量是否明文或可被本机代理看到。pcap 文件阅读（Wireshark）仍未学。

## 实践证据

- 环境：Windows 11，`D:\Programs\miniconda3\python.exe` 3.12.8。
- 操作：`python -m pip install mitmproxy`。
- 结果：`mitmproxy --version` / `mitmweb --version` / `mitmdump --version` 均为 **12.2.3**（OpenSSL 4.0.1）。未启动代理、未抓包。

## 仍未覆盖

- 实际抓一段授权流量并阅读
- CA 安装到 Android 模拟器
- 脚本过滤（mitmdump addon）
- Wireshark / pcap
- IDS/IPS

## 下一步

在本机浏览器指向 8080，打开一个自己的 HTTP 站点，确认 `mitmweb` 能列出请求（先不要上双向证书的生产 App）。
