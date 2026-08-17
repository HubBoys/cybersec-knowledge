# Agent 操作说明：如何更新本知识图谱

本仓库是学习者的**网络安全领域知识图谱**，不是漏洞利用手册。  
Agent 的职责是：把新学到的知识挂到图谱上、更新覆盖状态、写学习记录，并保持这些文件一致：`coverage.yml`、`index.html` 所用的 `dashboard/coverage.js`、`graph.md`、学习记录。

## 必读文件

| 文件 | 角色 |
|---|---|
| `coverage.yml` | **覆盖状态真源**。先改这里 |
| `index.html` | **可视化入口**。用浏览器打开；数据来自 `dashboard/coverage.js` |
| `graph.md` | Markdown 图谱，必须与 `coverage.yml` 一致 |
| `progress/LEARNING_LOG.md` | 已学习部分的总账 |
| `domains/<id>/` | 领域子图 + 该领域学习记录 |
| `templates/` | 新建领域或学习记录时复制 |

不要只改 Markdown 里的「已覆盖」字样却不改 `coverage.yml`。
可视化页不要手改 `dashboard/coverage.js`。

## 覆盖状态（只准用这四个）

| status | 中文 | 何时使用 |
|---|---|---|
| `uncovered` | 未覆盖 | 图谱里有节点，还没有对应学习记录 |
| `partial` | 部分覆盖 | 父节点：部分子节点已学，领域未闭环 |
| `covered` | 已覆盖 | 能复述要点，且有学习记录。默认是概念层，不等于会做 |
| `practiced` | 已实践 | 在隔离环境动手验证过；学习记录必须写实践证据（做了什么、环境、结果） |

规则：

1. **没有学习记录，不准标 `covered` 或 `practiced`。**
2. 对话里「听懂了」最多标 `covered`，不能标 `practiced`。
3. 父节点状态由子节点上卷：
   - 全部 `uncovered` → 父节点 `uncovered`
   - 同时存在已覆盖和未覆盖 → 父节点 `partial`
   - 全部至少 `covered`、且无 `uncovered` → 父节点 `covered`
   - 全部 `practiced` → 父节点 `practiced`
4. 跨领域引用（例如 ABI 同时属于「系统编程」和「逆向」）可以在多个父节点下出现，但 **id 必须唯一**；学习记录路径两边都写上。

## 一次学习之后怎么更新（按顺序）

用户学完一块内容、或要求「记到知识图谱」时，依次做：

### 1. 判断挂载点

- 已有节点能覆盖 → 更新该节点，不要新建近义节点
- 没有合适节点 → 在最近的父领域下新增 `id`（短横线英文，稳定后不要改）
- 说不清属于哪 → 先问用户，不要猜一个很宽的新顶层领域

### 2. 改 `coverage.yml`

- 改 `status`
- 把 `updated` 设为当天日期
- 在节点的 `learning_notes` 里追加笔记相对路径
- 需要时补 `notes` 说明边界（例如「只学了概念，没碰工具」）

### 3. 写或追加学习记录

已学习内容**必须**有 Markdown 记录，不要只改状态灯。

- 新的一次学习：复制 `templates/learning-note.md`
  - 路径：`domains/<domain-id>/learning/YYYY-MM-DD-<topic>.md`
  - 同一天同一主题追加到已有文件，不要拆成很多碎片
- 然后更新 `progress/LEARNING_LOG.md`：加一行索引，并写 5～10 行摘要（学了什么、深度、缺口）
- 若该领域还没有目录：复制 `templates/domain.md` 为 `domains/<id>/README.md`

学习记录最少包含：

- 日期、领域、节点 id 列表
- 学习形式（对话 / 书 / 课 / 实验）
- 已掌握要点（可复述的结论，不是聊天流水账）
- 明确的未覆盖 / 下一步
- 深度：`concept`（概念）或 `practice`（实践）

### 4. 同步给人看的图谱和可视化入口

1. 在仓库根目录运行：`python scripts/sync_dashboard.py`  
   这会从 `coverage.yml` 生成 `dashboard/coverage.js`。`index.html` 打开后应能看到新状态。
2. 改 `graph.md`：
   - 顶层总图的节点颜色 / 标记与 `coverage.yml` 一致
   - 若改了某个领域，同步该领域的子图（`graph.md` 后半，或 `domains/<id>/README.md` 里的图）

图例必须固定：

- 未覆盖：灰
- 部分覆盖：橙
- 已覆盖：绿
- 已实践：蓝

### 5. 收尾自检

- [ ] `coverage.yml` 的 status 与子节点上卷规则一致
- [ ] 每个 `covered` / `practiced` 节点都能点到至少一篇学习记录
- [ ] `LEARNING_LOG.md` 有对应条目
- [ ] `graph.md` 没有旧状态残留
- [ ] 已运行 `python scripts/sync_dashboard.py`，`index.html` 数据不过期
- [ ] 没有把利用步骤、破解、未授权访问写进仓库

## 用户只是提问、没有说「记下来」时

默认**可以**把本次已经系统讲清楚的新知识点补进图谱（尤其是当前对话正在学的领域）。  
不要把随口一问的名词全部建成节点。新增节点的标准：能写出至少 3 条可复述要点。

## 禁止写入的内容

本库用于建立知识地图和复习，不是攻击手册。

- 不写可复现的 exploit / PoC / payload
- 不写破解、绕过授权、未授权访问步骤
- 工具只记名称与用途，不记攻击操作手册
- 恶意软件相关只保留防御向的过程、概念、IOC 思路

## 文件命名

- 领域目录、节点 `id`：英文短横线，如 `reverse-engineering`
- 学习记录：`YYYY-MM-DD-英文或拼音短标题.md`
- 不要用「最终版」「新新新」当文件名

## 与学习者沟通

更新完成后用中文简短说明：

1. 改了哪些节点的状态
2. 学习记录路径
3. 该领域还剩哪些未覆盖（只列最近的 3～7 个，不要倒出整张图）
