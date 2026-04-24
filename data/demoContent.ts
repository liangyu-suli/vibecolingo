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

export const uiDesignQuestion: ChoiceQuestion = {
  id: "ui-precision",
  titleZh: "模块一：UI设计精确描述",
  titleEn: "Module 1: UI Design Precision",
  promptZh: "选择最可能让按钮从左图变成右图的描述。",
  promptEn: "Pick the prompt that best turns the left button into the right one.",
  options: [
    "Make the button look good.",
    "Apply a subtle rounded corner to the button.",
    "Make the button perfectly round."
  ],
  correctIndex: 1,
  success: "正确。'subtle rounded corner' 给了 AI 明确且可执行的风格指令。",
  fail: "这个选项不够精确，AI 可能输出偏差较大的样式。"
};

export const bugQuestion: ChoiceQuestion = {
  id: "bug-diagnosis",
  titleZh: "模块二：Bug诊断式表达",
  titleEn: "Module 2: Bug Diagnosis",
  promptZh: "点击后出现白屏，哪句描述最有利于 AI 定位问题？",
  promptEn: "After click, the page turns white. Which report helps AI debug fastest?",
  options: [
    "It's broken.",
    "It's not working when I click.",
    "The page crashes with a white screen after the button click."
  ],
  correctIndex: 2,
  success: "很好。你提供了触发条件和具体症状，这就是高质量 bug report。",
  fail: "缺少触发动作或症状细节，AI 难以快速定位。"
};

export const styleQuestion: ChoiceQuestion = {
  id: "style-vocab",
  titleZh: "模块四：风格术语掌握",
  titleEn: "Module 4: Style Vocabulary",
  promptZh: "卡片半透明、柔和阴影、背景模糊，最匹配哪种风格？",
  promptEn: "A card is translucent with blur and soft depth. Which style is it?",
  options: ["Brutalism", "Glassmorphism", "Retro"],
  correctIndex: 1,
  success: "答对了。Glassmorphism 能让 AI 直接命中视觉语义。",
  fail: "这个术语和视觉特征不匹配，建议优先记住 Glassmorphism。"
};

export const sentenceBlocks = {
  scrambled: [
    "the navbar",
    "to the top",
    "Add",
    "a glassmorphism effect",
    "fix",
    "it",
    "and",
    "of the page"
  ],
  answer: [
    "Add",
    "a glassmorphism effect",
    "to the navbar",
    "and",
    "fix",
    "it",
    "to the top",
    "of the page"
  ]
};

export const badges = [
  { zh: "Bug终结者", en: "Bug Terminator", rule: "连续10次诊断正确" },
  { zh: "细节控", en: "Precision Crafter", rule: "形容词选择准确率100%" },
  { zh: "极简大师", en: "Minimal Master", rule: "风格模块满分" }
];
