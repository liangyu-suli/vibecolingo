export type ChoiceQuestion = {
  id: string;
  titleZh: string;
  titleEn: string;
  promptZh: string;
  promptEn: string;
  options: string[];
  correctIndex: number;
  success: string;
  fail: string;
};

export type Track = "ui" | "backend" | "db" | "api" | "networking";

export type ScoreEvent = {
  track: Track;
  accuracy: number;
  complexityWeight: number;
  speedFactor: number;
  consistencyBonus: number;
  timestamp: string;
};

export type UserRankProfile = {
  totalScore: number;
  tier: "Explorer" | "Builder" | "Architect" | "Operator" | "Principal";
  percentile: number;
  streakDays: number;
  trackScores: Record<Track, number>;
};

export type LeaderboardEntry = {
  handle: string;
  tier: UserRankProfile["tier"];
  totalScore: number;
  trend: string;
};

export const uiDesignQuestion: ChoiceQuestion = {
  id: "ui-precision",
  titleZh: "UI 轨道：界面意图表达",
  titleEn: "UI Track: Interface Intent",
  promptZh: "选择最能表达“微调圆角但保持专业感”的指令。",
  promptEn: "Choose the prompt that best conveys subtle corner refinement with a professional tone.",
  options: [
    "Make the button look nicer.",
    "Apply a subtle rounded corner to the button and keep the visual weight balanced.",
    "Turn the button into a fully circular shape."
  ],
  correctIndex: 1,
  success: "正确。你同时给出了程度和视觉约束，AI 更容易稳定执行。",
  fail: "这个表达过于笼统或偏离目标，建议加入明确的视觉边界。"
};

export const backendQuestion: ChoiceQuestion = {
  id: "backend-flow",
  titleZh: "Backend 轨道：服务流程表达",
  titleEn: "Backend Track: Service Flow",
  promptZh: "哪句最能指导 AI 设计可扩展的订单处理流程？",
  promptEn: "Which prompt best guides AI to build a scalable order-processing flow?",
  options: [
    "Make checkout logic better.",
    "Build an async order workflow with queue-based workers and idempotent retry handling.",
    "Add more backend code for orders."
  ],
  correctIndex: 1,
  success: "很好。你明确了流程结构、执行机制和稳定性约束。",
  fail: "建议补充流程机制与可靠性约束，而不仅是目标描述。"
};

export const styleQuestion: ChoiceQuestion = {
  id: "style-vocab",
  titleZh: "API 轨道：契约表达",
  titleEn: "API Track: Contract Language",
  promptZh: "哪个术语最能表达“接口返回稳定、字段可预测”的设计目标？",
  promptEn: "Which term best captures stable and predictable API responses?",
  options: ["Loose payloads", "Contract-first schema", "Visual polish"],
  correctIndex: 1,
  success: "答对了。Contract-first schema 能显著提升跨团队协作效率。",
  fail: "建议使用可验证的接口术语来减少集成歧义。"
};

export const sentenceBlocks = {
  scrambled: [
    "the service",
    "for read-heavy endpoints",
    "Design",
    "and",
    "cache-first",
    "with indexed queries",
    "a response strategy"
  ],
  answer: [
    "Design",
    "a response strategy",
    "for read-heavy endpoints",
    "and",
    "cache-first",
    "the service",
    "with indexed queries"
  ]
};

export const badges = [
  { zh: "架构指挥官", en: "Flow Architect", rule: "连续 10 次跨轨道任务达标" },
  { zh: "性能优化师", en: "Latency Optimizer", rule: "性能类任务平均得分 90+" },
  { zh: "契约大师", en: "Contract Master", rule: "API 轨道满分通过" }
];
