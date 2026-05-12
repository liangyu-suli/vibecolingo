产品设计文档：VibeCoLingo（SaaS 方向）

一句话定义
VibeCoLingo 是一款面向 AI 时代软件团队的交互式训练平台，通过微学习帮助非英语母语者掌握跨栈“技术意图表达”，从而更高质量地驱动 AI 产出。

产品定位
- 不是传统语法课，而是“AI 协作语言系统”。
- 目标不是背术语，而是把产品目标、架构边界、执行约束说清楚。
- 方法遵循 Vibe Coding：先意图、再架构、再优化执行。

核心用户痛点（升级版）
- 目标表达模糊：只能说“做快一点”“写得更好”，无法说明结果标准。
- 架构意图缺失：知道要功能，但说不清服务边界、数据流和接口契约。
- 跨栈沟通断层：UI、后端、数据库、API、网络优化语言不统一，导致 AI 结果不稳定。

五大学习轨道（5 Tracks）
1. UI Creation（界面创造）
- 训练点：视觉层级、交互反馈、组件状态与风格约束表达。
- 示例指令："Apply a subtle rounded corner while keeping visual weight balanced."

2. Backend Logic & Services（后端逻辑与服务）
- 训练点：业务流程、异步任务、容错机制、服务边界表达。
- 示例指令："Build an async order workflow with queue workers and idempotent retries."

3. Database Modeling & Query Intent（数据库建模与查询意图）
- 训练点：模型关系、索引策略、一致性约束、读写路径表达。
- 示例指令："Design indexed query paths for read-heavy endpoints with predictable consistency."

4. API Design & Integration（API 设计与集成）
- 训练点：契约优先、字段语义、版本策略、集成流表达。
- 示例指令："Define a contract-first API schema with explicit error and pagination semantics."

5. Networking, Reliability & Performance（网络、可靠性与性能）
- 训练点：延迟预算、缓存策略、重试机制、可用性目标表达。
- 示例指令："Use a cache-first delivery path targeting p95 under 200ms with graceful fallback."

学习方法：Vibe Coding Loop
1. Intent（意图）
- 先明确业务目标、用户价值和成功指标。
2. Architect（架构）
- 用高信号提示词描述系统流程、模块边界、关键约束。
3. Execute & Optimize（执行与优化）
- 根据输出质量持续优化指令，提升稳定性、可维护性和性能。

评分与全球排名系统（概念与产品行为）
全局评分公式
- `global_score = accuracy x complexity_weight x speed_factor x consistency_bonus`

等级体系（Rank Tiers）
- Explorer
- Builder
- Architect
- Operator
- Principal

个人资料页可视化（Profile Intelligence）
- 五轨能力雷达：UI / Backend / DB / API / Networking
- Global Percentile（全局百分位）
- 趋势曲线：近 7/30 天分数变化
- 升级进度：距离下一等级的分数差

全球榜单（Leaderboard）
- 展示项：用户标识、等级、总分、趋势变化（delta）
- 赛季机制：按周期重置榜单并保留历史荣誉（本阶段仅定义，不实现）

下一阶段公共接口约定（文档级）
- `Track = "ui" | "backend" | "db" | "api" | "networking"`
- `ScoreEvent`
  - 字段建议：track, accuracy, complexityWeight, speedFactor, consistencyBonus, timestamp
- `UserRankProfile`
  - 字段建议：totalScore, trackScores, tier, percentile, streakDays
- `LeaderboardEntry`
  - 字段建议：handle, tier, totalScore, trend

产品体验原则
- 以“可执行意图”作为学习单位，而不是零散单词记忆。
- 强调跨栈一致表达，让 AI 在多模块协作中保持稳定输出。
- 每次反馈都解释“为什么这个表达更好”，帮助用户形成可迁移能力。

一句话总结
VibeCoLingo 不只是教你怎么说英语，而是训练你用专业、可执行、跨栈一致的语言去“指挥 AI 构建产品”。

Web 实现说明（当前阶段）
- 交互渲染与内容数据完全分离：
  - UI 仅负责渲染 `ExerciseRenderer`（choice / reorder / fill_blank）
  - 题目内容、答案、反馈、轨道信息全部由内容层提供
- 内容源采用 Headless CMS 工作流（本阶段以本地 CMS feed 结构模拟）：
  - AI 生成草稿 -> 人工审核 -> 发布
  - 仅发布内容进入学习流
- 运行时校验：
  - 在内容进入 UI 前执行 schema 校验，非法条目会被过滤
- 移动端优先：
  - 以 375px 为基线，单手点击操作优先（大触达区、低输入负担）

当前页面路由（Web First）
- `/`：Landing
- `/lesson`：通用课程流（顺序练习）
- `/practice/[track]`：单轨道强化练习
- `/profile`：匿名档案（等级、分数、分轨道能力）

评分落地（匿名会话）
- 按 `ScoreEvent` 实时计算并更新会话档案：
  - `score = accuracy x complexity_weight x speed_factor x consistency_bonus`
- 排名与百分位为会话级可视化（非全局持久榜单）
