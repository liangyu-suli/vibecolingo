import type { Exercise } from "@/domain/contracts";

export const cmsExerciseFeed: unknown = [
  {
    id: "ui-choice-1",
    track: "ui",
    type: "choice",
    difficulty: 1,
    locale: "bilingual",
    prompt: {
      en: "Choose the prompt with precise UI intent and constraints.",
      zh: "选择表达最准确、约束最清晰的 UI 指令。"
    },
    learningObjective: {
      en: "Use high-signal wording for visual decisions.",
      zh: "练习高信号视觉表达。"
    },
    contentVersion: "2026.05.12",
    updatedAt: "2026-05-12T00:00:00.000Z",
    payload: {
      options: [
        "Make the button better.",
        "Apply a subtle rounded corner and keep visual weight balanced.",
        "Turn the button fully circular with no spacing rules."
      ],
      correctIndex: 1,
      success: {
        en: "Great. This prompt gives both direction and constraints.",
        zh: "很好。这个表达同时给出了方向和边界。"
      },
      fail: {
        en: "Try adding concrete intent and visual boundaries.",
        zh: "建议补充明确意图和视觉边界。"
      }
    }
  },
  {
    id: "backend-reorder-1",
    track: "backend",
    type: "reorder",
    difficulty: 2,
    locale: "bilingual",
    prompt: {
      en: "Tap blocks in order to form an execution-ready backend instruction.",
      zh: "按顺序点击词块，组成可执行的后端指令。"
    },
    learningObjective: {
      en: "Express backend flow and reliability in one sentence.",
      zh: "用一句话表达后端流程与可靠性要求。"
    },
    contentVersion: "2026.05.12",
    updatedAt: "2026-05-12T00:00:00.000Z",
    payload: {
      scrambled: ["idempotent retries", "Build", "with queue workers", "an async order workflow", "and"],
      answer: ["Build", "an async order workflow", "with queue workers", "and", "idempotent retries"],
      success: {
        en: "Excellent flow. This is architecture-clear and operationally precise.",
        zh: "很好。表达具备清晰架构流和执行精度。"
      },
      fail: {
        en: "Reorder for clearer flow from architecture to reliability.",
        zh: "调整顺序，让架构到可靠性的流程更清晰。"
      }
    }
  },
  {
    id: "api-fill-1",
    track: "api",
    type: "fill_blank",
    difficulty: 2,
    locale: "bilingual",
    prompt: {
      en: "Pick the term that makes this API instruction implementation-ready.",
      zh: "选择让 API 指令更可执行的术语。"
    },
    learningObjective: {
      en: "Use contract language that reduces integration ambiguity.",
      zh: "使用契约化术语，减少集成歧义。"
    },
    contentVersion: "2026.05.12",
    updatedAt: "2026-05-12T00:00:00.000Z",
    payload: {
      sentenceTemplate: "Define a ____ schema with explicit error and pagination semantics.",
      options: ["viral", "contract-first", "manual", "pixel-perfect"],
      answer: "contract-first",
      success: {
        en: "Correct. Contract-first gives predictable integration behavior.",
        zh: "正确。契约优先能显著提升集成稳定性。"
      },
      fail: {
        en: "Pick the term that defines stable integration behavior.",
        zh: "选择能定义稳定集成行为的术语。"
      }
    }
  },
  {
    id: "networking-choice-1",
    track: "networking",
    type: "choice",
    difficulty: 3,
    locale: "bilingual",
    prompt: {
      en: "Choose the prompt that states networking performance goals clearly.",
      zh: "选择能清晰表达网络性能目标的指令。"
    },
    learningObjective: {
      en: "Encode latency and fallback goals in prompt language.",
      zh: "在提示词中表达延迟与降级目标。"
    },
    contentVersion: "2026.05.12",
    updatedAt: "2026-05-12T00:00:00.000Z",
    payload: {
      options: [
        "Make the app faster.",
        "Use a cache-first path targeting p95 under 200ms with graceful fallback.",
        "Use any networking approach as long as it works."
      ],
      correctIndex: 1,
      success: {
        en: "Correct. You defined measurable performance outcomes.",
        zh: "正确。你给出了可测量的性能目标。"
      },
      fail: {
        en: "Add measurable targets and fallback behavior.",
        zh: "建议加入可量化指标和降级策略。"
      }
    }
  },
  {
    id: "db-fill-1",
    track: "db",
    type: "fill_blank",
    difficulty: 3,
    locale: "bilingual",
    prompt: {
      en: "Choose the word that best defines read-heavy database optimization.",
      zh: "选择最能表达读多写少数据库优化目标的词。"
    },
    learningObjective: {
      en: "Use precise data-path vocabulary for AI execution.",
      zh: "使用精确的数据路径术语。"
    },
    contentVersion: "2026.05.12",
    updatedAt: "2026-05-12T00:00:00.000Z",
    payload: {
      sentenceTemplate: "Design ____ query paths for read-heavy endpoints with predictable consistency.",
      options: ["indexed", "colorful", "manual", "viral"],
      answer: "indexed",
      success: {
        en: "Correct. Indexed paths communicate concrete DB strategy.",
        zh: "正确。索引化路径是明确的数据库策略表达。"
      },
      fail: {
        en: "Try the option that directly maps to query performance.",
        zh: "请选择能直接影响查询性能的词。"
      }
    }
  }
] as Exercise[];

