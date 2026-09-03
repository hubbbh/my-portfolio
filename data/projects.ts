export interface ProjectMeta {
  year: string
  type: string
  role: string
  tools?: string[]
  teamSize?: string
  duration?: string
  keywords?: string[]
}

export interface AIDivisionRow {
  phase: string
  ai: string
  human: string
}

export interface ProjectMedia {
  src: string
  title: string
  type: 'video' | 'image'
}

export interface Project {
  slug: string
  title: string
  titleEn: string
  tagline: string
  tags: string[]
  summary: string
  featured: boolean
  meta: ProjectMeta
  overview: string
  problem?: string
  goals?: string[]
  process?: { step: string; title: string; content: string }[]
  decisions?: { title: string; content: string }[]
  aiDivision?: AIDivisionRow[]
  outcomes?: string[]
  retrospective?: string
  result?: string
  awards?: string[]
  // media
  coverVideo?: string
  coverImage?: string
  heroVideo?: string
  gallery?: ProjectMedia[]
}

const projects: Project[] = [
  {
    slug: 'aigc-short-films',
    title: 'AIGC短片系列创作',
    titleEn: 'AIGC Short-form Film Experiments',
    tagline:
      '围绕统一视觉风格完成多支 15 秒短片，探索 AI 辅助下情绪表达、风格控制与短内容节奏之间的关系。',
    tags: ['AIGC Short Film', 'Visual Direction', 'Editing', 'Workflow'],
    summary:
      '这组短片并不以技术复杂度为目标，而是尝试在 AI 参与创作的前提下，让情绪、风格和观看节奏保持成立。项目帮助我建立了从内容意图、视觉生成到人工收敛的 AIGC 短片工作流。',
    featured: true,
    coverVideo: '/videos/aigc/bigcat-cape.mp4',
    gallery: [
      { src: '/videos/aigc/bigcat-cape.mp4', title: '大胖猫披披风', type: 'video' },
      { src: '/videos/aigc/sweet-girl.mp4', title: '小妹妹香香', type: 'video' },
      { src: '/videos/aigc/bohemian.mp4', title: '波西米亚狂想', type: 'video' },
      { src: '/videos/aigc/food.mp4', title: '饭！！', type: 'video' },
    ],
    meta: {
      year: '2026',
      type: 'AIGC短片 / 视觉实验 / 短内容创作',
      role: '内容构思、视觉生成、场景搭建、后期合成、剪辑',
      tools: ['ComfyUI', 'Blender', 'Photoshop', 'After Effects', '剪映', 'Suno', 'DeepSeek', 'GPT', 'Claude'],
    },
    overview:
      '这组由多支 15 秒短片构成的项目，聚焦于 AI 辅助下的情绪表达、风格控制与短内容节奏。我更关心的不是生成结果本身，而是如何通过人的判断，让视觉语言、空间结构和观看体验逐步收敛为真正成立的内容。',
    goals: [
      '在 15 秒这种极短时长里，情绪是否可以先于完整叙事被观众感知',
      'AI 生成的视觉结果是否能够在人工判断下形成统一风格',
      '不同工具之间能否建立一套相对稳定的人机协作工作流',
      '内容是否能同时兼顾观看进入感和个人表达',
    ],
    problem:
      '这组短片的起点来自我对短视频平台内容观看方式的观察。我逐渐意识到，在短时长语境里，技术复杂度并不天然等于有效表达。很多真正能让人停留下来的内容，往往不是最复杂的，而是那些情绪进入足够快、视觉语言足够集中、信息密度恰到好处的内容。',
    process: [
      {
        step: '01',
        title: '观察内容，整理参考',
        content:
          '项目通常从素材检索与参考积累开始。这一阶段我会同时观察视觉参考、内容参考与音频参考，建立判断标准：什么值得做、什么容易失控、什么形式更适合当前的情绪目标。',
      },
      {
        step: '02',
        title: '把模糊感觉翻译成 AI 能理解的方向',
        content:
          '在形成初步方向后，我会使用 DeepSeek、GPT 或 Claude 帮助整理关键词、画面描述和表达方向，再将这些语言转化为 ComfyUI 可以进一步扩展的生成输入。',
      },
      {
        step: '03',
        title: '当生成结果不够稳定时，用人工重建结构',
        content:
          '当单纯依赖生成结果无法稳定空间关系时，我会把阶段性结果带入 Blender，重新处理模型与场景摆放、镜头方向、基本空间关系与构图重心。',
      },
      {
        step: '04',
        title: '在后期里完成真正的收敛',
        content:
          '当视觉主体基本稳定后，我会在 Photoshop、After Effects 和剪映中完成图层整理、贴图特效、节奏控制与音频关系调整。',
      },
    ],
    decisions: [
      {
        title: '优先选择故事性更强的内容，而不是技术最复杂的内容',
        content:
          '在四支短片中，我没有优先选择技术路径最复杂的方案进入主案例，而是优先选择那些故事性更明确、情绪进入更快的片段。',
      },
      {
        title: '主动放弃过于精细的视觉结果',
        content:
          '在角色和场景的早期生成中，我曾经尝试过更高精度、更完整的视觉方案，但最终发现它们会削弱项目真正需要的东西：留白、抽象感和情绪空间。因此后续我主动收敛视觉复杂度，转向更低模、更克制的表达方式。',
      },
      {
        title: '让 AI 负责发散，让人工负责定型',
        content:
          '这个系列中最有效的创作方式，不是让 AI 一次性给出接近成片的结果，而是让 AI 先快速发散大量方向，再由人工完成筛选、统一、修正与节奏控制。',
      },
      {
        title: '先让情绪成立，再谈更复杂的表达',
        content:
          '我对短内容的理解是：它不需要一开始承载太多复杂概念，但必须先让观众进入一种明确的感受。',
      },
    ],
    aiDivision: [
      {
        phase: '概念阶段',
        ai: '帮助扩展关键词、意象方向与初步表达语言',
        human: '确定情绪目标、内容方向和筛选标准',
      },
      {
        phase: '视觉生成阶段',
        ai: '批量生成角色、场景和构图可能',
        human: '选择、删减、统一风格，判断哪些结果真正可用',
      },
      {
        phase: '结构阶段',
        ai: '提供参考',
        human: '用 Blender 组织空间、镜头和场景关系',
      },
      {
        phase: '后期阶段',
        ai: '提供局部辅助',
        human: '完成合成、节奏、音频匹配和最终内容落地',
      },
    ],
    result:
      '这组短片帮助我建立了一条更清晰的工作路径：从观察内容、整理参考、语言梳理，到视觉生成、结构稳定与后期收敛，每一步开始拥有更明确的分工。',
    retrospective:
      '这组项目并没有让我得到一套完全成熟的答案，但它让我更明确地看见了自己的方法正在形成。如果继续推进下一阶段，我希望把这些短片从"单次实验"进一步发展为更系统的内容结构。',
  },
  {
    slug: 'magic-moment',
    title: '魔幻时刻',
    titleEn: 'AI Portrait Art Transformation Tool',
    tagline:
      '一款面向大众使用场景的 AI 人像艺术风格转换工具，从用户调研、产品定义到技术落地，完成了一次较完整的从 0 到 1 项目实践。',
    tags: ['AI Product', 'User Research', 'Product Definition'],
    summary:
      '"魔幻时刻"是一款围绕 AI 人像艺术风格转换设计的工具项目。通过 2000+ 问卷、竞品分析与用户访谈，我参与定义了产品价值、交互路径与风格系统，完成了一次较完整的从 0 到 1 实践。',
    featured: true,
    meta: {
      year: '2025.01 – 2026.07',
      type: 'AI产品项目 / 用户研究 / 产品定义 / 艺术风格工具',
      role: '项目负责人',
      teamSize: '7人',
      keywords: ['用户研究', '竞品分析', '产品定义', '风格系统', 'AI能力转化'],
    },
    overview:
      '"魔幻时刻"是一款围绕 AI 人像艺术风格转换设计的工具项目。它的出发点并不是单纯展示技术能力，而是尝试解决一个更具体的问题：对于普通用户来说，现有工具虽然具备 AI 能力，但往往门槛高、风格浅、缺乏明确的审美方向。',
    problem:
      '在调研过程中，我发现大众用户在使用图像美化和风格化产品时，常常会遇到三个问题：操作链路过长，理解门槛高；风格化结果停留在表层效果，缺乏真正的艺术方向感；工具虽然具备 AI 能力，但用户并不清楚这些能力到底带来了什么价值。',
    goals: [
      '降低用户完成艺术风格转换的使用门槛',
      '让艺术风格不只是滤镜效果，而拥有更明确的审美方向',
      '通过简单流程让普通用户也能快速获得有辨识度的结果',
      '探索 AI 能力如何与艺术表达、用户体验和商业转化结合',
    ],
    process: [
      {
        step: '01',
        title: '用户研究',
        content:
          '项目初期，我没有直接进入功能设计，而是先从用户研究开始。设计并回收 2000+ 份问卷，前往罗中立美术馆、黄桷坪艺术家交流中心进行艺术家访谈，进行街头采访，深度分析 6 款竞品：美图秀秀、醒图、DeepArt、Lensa、NeuralStyler、AI Filter。研究结论：用户真正需要的是更明确的结果预期、更低的操作负担、更有辨识度的风格表达。',
      },
      {
        step: '02',
        title: '产品定义',
        content:
          '在研究基础上，我把"魔幻时刻"的核心价值总结为：一键生成 + 专业艺术风格 + 人像背景分离。围绕这一价值，设计 3 步极简交互流程，建立 7 大流派、25 种艺术风格元素库，制定在线（Stable Diffusion API）+ 离线（自研算法）双模式策略。',
      },
      {
        step: '03',
        title: '技术实现',
        content:
          '项目主要涉及：PyQt5 构建桌面端图形界面，MediaPipe 人像语义分割，7 种离线风格迁移算法，Stable Diffusion API 在线模式，在线 / 离线双路径产品方案。我的角色更接近连接者：理解技术原理、理解用户需求，并帮助把两者转化为具体的产品形式。',
      },
      {
        step: '04',
        title: '团队协作与推进',
        content:
          '带领 7 人跨职能团队协作，制定里程碑和阶段目标，推动调研、设计、开发、测试与竞赛路演之间的协同。使用 Git 进行版本管理，建立测试与反馈机制。',
      },
    ],
    awards: [
      'iCAN 大学生创新创业大赛重庆赛区三等奖',
      '四川美术学院新文科实践创新比赛三等奖',
      '四川美术学院本科生作品年展优秀奖',
      '创新创业单项奖学金',
      '获评重庆市级大学生创新创业项目并顺利结题',
      '项目在北京互联网法院"天平链"完成司法存证',
    ],
    result:
      '"魔幻时刻"并不只是一个比赛项目，它更像是我第一次系统地理解"AI、用户和产品"之间关系的起点。这段经历让我意识到：一个好用的 AI 产品，不只是技术成立，还要让用户感到清楚、轻松和有价值。',
    retrospective:
      '回看这个项目，我最大的收获并不是"做过一个 AI 工具"，而是第一次更具体地理解了：技术能力只有在被正确组织、正确表达、正确对接用户需求时，才会真正形成价值。',
  },
  {
    slug: 'chongqing-impression',
    title: '重庆城市映像 · AI辅助短片',
    titleEn: 'Chongqing City Impression',
    tagline:
      '以重庆城市印象为主题，完成从脚本构思、AI素材生成到剪辑输出的独立创作流程。',
    tags: ['AI-assisted Film', 'City Narrative', 'Short-form Content'],
    summary:
      '以重庆城市印象为主题，完成从脚本构思、AI素材生成到剪辑输出的独立创作流程，是我早期将 AI 视觉生成与短片叙事结合的尝试。',
    featured: false,
    coverVideo: '/videos/chongqing/walking-chongqing.mp4',
    heroVideo: '/videos/chongqing/walking-chongqing.mp4',
    gallery: [
      { src: '/videos/chongqing/walking-chongqing.mp4', title: '漫步重庆', type: 'video' },
    ],
    meta: {
      year: '2025',
      type: 'AI辅助短片 / 城市叙事 / 短内容创作',
      role: '独立创作',
    },
    overview:
      '以重庆城市印象为主题，完成从脚本构思、AI素材生成到剪辑输出的独立创作流程，是我早期将 AI 视觉生成与短片叙事结合的尝试。',
  },
  {
    slug: 'ai-content-system',
    title: 'AI内容系统 / 系列化表达探索',
    titleEn: 'AI Content System',
    tagline:
      '围绕统一主题、受众与视觉规则，尝试将单条内容扩展为可持续的内容系统与表达框架。',
    tags: ['Content System', 'Audience Thinking', 'Visual Identity'],
    summary:
      '围绕统一主题、受众与视觉规则，尝试将单条内容扩展为可持续的内容系统与表达框架。',
    featured: false,
    meta: {
      year: '2026',
      type: '内容系统 / 系列化表达',
      role: '内容策划、视觉方向',
    },
    overview:
      '围绕统一主题、受众与视觉规则，尝试将单条内容扩展为可持续的内容系统与表达框架。',
  },
]

export default projects

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAdditionalProjects(): Project[] {
  return projects.filter((p) => !p.featured)
}
