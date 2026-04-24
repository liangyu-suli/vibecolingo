产品设计文档：vibecolingo

一句话定义
vibecolingo 是一款通过微学习，帮助非英语母语者掌握“技术指令英语”，从而更精准地与 AI 编程助手沟通的交互式学习App。

核心用户痛点
* 词不达意：只会用 make it pretty, fix bug, can't work 等笼统词汇，AI 给的代码质量全靠运气。
* 术语卡壳：知道想要什么效果，但不知道用 border-radius, overflow, asynchronous 等准确技术词汇来描述。
* 句式混乱：无法将零散想法组织成逻辑清晰、有主语谓语的技术指令。

产品核心机制：Vibe-Driven Learning
所有的学习都围绕“一个视觉目标”或“一个Bug场景”展开，学习的是如何“描述”它，而不是死记硬背语法。

核心学习方法与功能模块设计
模块一：UI设计 —— 准确描述产品该长什么样
* 目标：训练用户对程度、风格、状态的精确描述能力。
* 玩法：左右视觉对比 + 单选
* 题目设计：
    * 展示两张UI截图，左图是“原版”，右图是“目标效果”。箭头或高亮会提示差异点。
    * 用户需要从3个选项中，选出能精确导致右侧效果的指令。
* 选项设计哲学 (关键)：
    * A. 太笼统：Make the button look good. (AI会困惑，怎么算“good”？)
    * B. 正确且地道：Apply a subtle rounded corner to the button. ( subtle 是关键形容词，rounded corner 是准确术语)
    * C. 错误/过火：Make the button perfectly round. (可能直接变成胶囊形或圆形按钮)
* 延展题库：
    * spacing: “add some space” vs “increase vertical padding slightly”
    * typography: “make text bigger” vs “set a bolder font weight for the heading”
    * color: “make it pop” vs “use a higher contrast accent color”
模块二：Bug修复 —— 学会“诊断式”描述
* 目标：从“用户式抱怨”转变为“开发者式报告”，提供AI能读懂的有效上下文。
* 玩法：Bug截图/动画 + 单选
* 题目设计：
    * 展示一个动态Bug场景（GIF/视频），例如：点击按钮后页面闪白屏、列表滑动到顶部后无法弹回、文字在窄屏上挤出屏幕。
    * 任务：选出对AI修复此Bug最有效的描述。
* 选项设计哲学：
    * A. 无效抱怨：It's broken.
    * B. 症状描述 (不完整)：It's not working when I click.
    * C. 正确且专业 (精准定位)：The page crashes with a white screen after the button click. 或 The text overflows its container on mobile screens.
* 核心术语库：crash, freeze, overflow, overlap, disappear, fail to load, unresponsive, misaligned, flicker.
模块三：需求拼句挑战 —— 组织“Prompt句型”
* 目标：克服“蹦单词”的习惯，学会构建完整、通顺的祈使句。
* 玩法：单词块拖拽/点击排序
* 界面：底部提供6-8个打散的单词卡片。
* 任务：组合成一个对AI最有效的指令。
* 示例：
    * 题目：给一个导航栏(Navbar)添加毛玻璃效果，并让它固定在页面顶部。
    * 散落单词块：
        * [the navbar] [to the top] [add] [a glassmorphism effect] [fix] [and] [of the page]
    * 

正确拼句：
[Add][a glassmorphism effect][to the navbar][and][fix][it][to the top][of the page]
(注：“fix it to the top”是“固定在顶部”的地道说法，比 “make it stick” 更专业)

* 学习点：动词置于句首的祈使句结构、常用搭配（apply to, fix to, align with）。
模块四：风格描述 —— 掌握专业设计词汇
* 目标：能准确调用高阶设计风格术语，让AI生成的UI直接具备专业气质。
* 玩法：多种形式混合
    * 图片匹配题：给出一张UI图，选出定义了它的风格术语（Glassmorphism, Brutalism, Minimalism, Neumorphism）。
    * 风格描述题：“这张卡片有浮起感，有柔和的阴影，背景半透明且有模糊效果。” -> 选择 Glassmorphism。
    * 风格指令拼接：拼出 In a minimalist style with ample whitespace 这样的指令前缀。
* 核心术语库：
    * 风格: Minimalist, Maximalist, Retro, Futuristic, Brutalist, Glassmorphism.
    * 属性: Clean, Cluttered, Airy, Dense, Playful, Professional, Accessible.
    * 组件: Carousel, Accordion, Modal, Tooltip, Toast notification.
产品体验与“上瘾”循环设计 (借鉴Duolingo)
* 游戏化：
    * 每日打卡：每天完成“每日Vibe挑战”，包含以上四个模块的随机混合题。
    * 经验值 & 等级：用“精准度”和“速度”加权评分。从“Junior Coder”升级到“Senior Prompt Engineer”。
    * 成就徽章：“Bug终结者”（连续10次诊断正确）、“细节控”（形容词选择准确率100%）、“极简大师”（风格模块满分）。
* 即时反馈：
    * 选择正确：不仅仅显示“正确”，还要给一个简短提示，比如“完美！用‘overflow’这个词，AI一下就能定位到CSS问题。”
    * 选择错误：友好地指出：“这个词太笼统了，AI可能会给你一个意想不到的结果。试试更精确的‘rounded corner’吧！”
* 复习机制：在后续关卡中，将用户易错的词汇和句式以新场景的形式再次出现，加深记忆。
* 视觉风格：可以充满科技感和一点可爱的像素风或极简设计。主色调可以是高对比度的霓虹色或温暖的代码编辑器主题色，让它看起来就像一个给创造者准备的工具。
一句话总结
vibecolingo 不教英语语法，它教的是“与AI沟通的专业方言”。它不是让你成为英语大师，而是让你成为能精准表达需求的“AI导演”。