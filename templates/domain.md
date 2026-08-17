---
id: <domain-id>
name: <中文名>
status: uncovered
updated: YYYY-MM-DD
---

# <领域中文名>

- 覆盖状态：`uncovered` | `partial` | `covered` | `practiced`
- 状态真源：[`coverage.yml`](../../coverage.yml)
- 学习总账：[`LEARNING_LOG.md`](../../progress/LEARNING_LOG.md)

## 子图

```mermaid
flowchart TB
  classDef uncovered fill:#e5e7eb,stroke:#6b7280,color:#111
  classDef covered fill:#dcfce7,stroke:#15803d,color:#111
  D[<领域>]
  A[节点 A]
  B[节点 B]
  D --> A --> B
  class A,B uncovered
```

## 已覆盖

| 节点 id | 深度 | 学习记录 |
|---|---|---|
| — | — | — |

## 未覆盖（下一步）

- ...

## 与其他领域的边
