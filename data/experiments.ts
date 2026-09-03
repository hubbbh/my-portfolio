export interface Experiment {
  id: string
  title: string
  tags: string[]
  description: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
}

const experiments: Experiment[] = [
  {
    id: 'low-high-detail',
    title: '低模与高细节角色测试',
    tags: ['Character Design', 'ComfyUI', 'Visual Language'],
    description:
      '对比不同精度下角色的情绪表现与视觉压迫感，最终选择更克制的低模语言，以保留留白与抽象感。',
    aspectRatio: '4/3',
  },
  {
    id: 'prompt-evolution',
    title: 'Prompt 与视觉方向演化',
    tags: ['Prompt Engineering', 'LLM', 'Visual Direction'],
    description:
      '从模糊感受出发，逐步将语言转化为 AI 能理解的关键词，并观察结果在风格上的偏移与收敛。',
    aspectRatio: '4/3',
  },
  {
    id: 'comfyui-workflow',
    title: 'ComfyUI 工作流实验',
    tags: ['ComfyUI', 'Workflow', 'Style Consistency'],
    description:
      '围绕同一主题测试不同生成路径，记录哪些流程更利于后续风格统一与镜头衔接。',
    aspectRatio: '16/9',
  },
  {
    id: 'blender-scene',
    title: 'Blender 场景与镜头测试',
    tags: ['Blender', '3D', 'Composition'],
    description:
      '当 AI 生成结果无法稳定空间关系时，通过 Blender 重建场景结构，辅助完成更清晰的构图控制。',
    aspectRatio: '16/9',
  },
  {
    id: 'audio-rhythm',
    title: '音频与节奏匹配测试',
    tags: ['Audio', 'Rhythm', 'Editing'],
    description:
      '尝试不同音频情绪与镜头密度的搭配方式，判断什么样的节奏更容易在短时间内建立观看进入感。',
    aspectRatio: '4/3',
  },
]

export default experiments
