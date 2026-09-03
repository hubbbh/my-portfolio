import FadeIn from '@/components/ui/FadeIn'

const principles = [
  '先判断内容，再调用工具',
  '风格是一种选择，不是一层滤镜',
  'AI 负责扩展，人负责收敛',
  '短内容首先要被感受到',
]

const stages = [
  {
    step: '01',
    name: '观察',
    en: 'Observe',
    description: '整理素材、参考风格、音频与平台内容，判断内容为什么值得被看。',
  },
  {
    step: '02',
    name: '匹配',
    en: 'Match',
    description: '确认情绪目标、内容方向和可能的受众接受方式。',
  },
  {
    step: '03',
    name: '生成',
    en: 'Generate',
    description: '通过 LLM 梳理关键词与脚本框架，再使用 ComfyUI 等工具扩展视觉可能。',
  },
  {
    step: '04',
    name: '收敛',
    en: 'Converge',
    description: '在 Blender 中稳定空间关系，在 AE / PS / 剪辑中完成风格统一与节奏控制。',
  },
  {
    step: '05',
    name: '成片',
    en: 'Output',
    description: '完成结果输出，并复盘 AI 与人工各自发挥了什么作用。',
  },
]

const division = [
  { aspect: '内容方向', ai: '扩展关键词、意象、可能性', human: '选择情绪目标、内容基调' },
  { aspect: '视觉发散', ai: '批量生成角色、场景、构图', human: '筛选、删减、统一风格' },
  { aspect: '空间结构', ai: '提供参考素材', human: 'Blender 重建场景与镜头关系' },
  { aspect: '节奏控制', ai: '局部辅助', human: 'AE / PS / 剪辑完成最终收敛' },
  { aspect: '判断标准', ai: '—', human: '什么值得做、什么可以用、什么要放弃' },
]

export default function MethodPage() {
  return (
    <div className="pt-16">
      <section className="section-padding border-b border-border-subtle">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-4">Method</p>
            <h1 className="text-4xl lg:text-5xl font-semibold text-text-1 mb-5">我如何工作</h1>
            <p className="text-lg text-text-2 mb-4 leading-relaxed">
              我把 AI 视为一种放大探索效率的工具，而不是替代判断的答案。
            </p>
            <p className="text-base text-text-2 leading-relaxed">
              我的工作流程并不是从"打开工具"开始，而是从"内容为什么值得做"开始。
              无论是短片、系列内容还是产品型项目，我通常都会先确定内容目标、受众感受和情绪方向，再决定工具如何介入。
              对我来说，工作流不是技术顺序，而是一种判断顺序。
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface border-b border-border-subtle">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-8">核心原则</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-3 p-5 bg-bg rounded-xl border border-border-subtle">
                  <span className="text-text-3 text-sm mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base text-text-1 font-medium">{p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-2">工作流</p>
            <p className="text-2xl font-medium text-text-3 mb-12">
              观察 → 匹配 → 生成 → 收敛 → 成片
            </p>
          </FadeIn>

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <FadeIn key={stage.step} delay={i * 0.1}>
                <div className="grid sm:grid-cols-[100px_1fr] gap-6 pb-12 border-b border-border-subtle last:border-0 last:pb-0">
                  <div>
                    <p className="text-3xl font-light text-border-subtle">{stage.step}</p>
                    <p className="text-lg font-semibold text-text-1 mt-1">{stage.name}</p>
                    <p className="text-xs text-text-3">{stage.en}</p>
                  </div>
                  <div className="pt-1">
                    <p className="text-base text-text-2 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-border-subtle py-20">
        <div className="container-site max-w-4xl">
          <FadeIn>
            <p className="label-sm mb-8">AI 与人工分工</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
              <table className="w-full min-w-[560px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 pr-8 font-medium text-text-3 text-xs tracking-widest uppercase w-1/4">方面</th>
                    <th className="text-left py-3 pr-8 font-medium text-text-3 text-xs tracking-widest uppercase w-3/8">AI</th>
                    <th className="text-left py-3 font-medium text-text-3 text-xs tracking-widest uppercase w-3/8">我</th>
                  </tr>
                </thead>
                <tbody>
                  {division.map((row, i) => (
                    <tr key={i} className="border-b border-border-subtle last:border-0 hover:bg-bg/60 transition-colors">
                      <td className="py-4 pr-8 font-medium text-text-1 align-top">{row.aspect}</td>
                      <td className="py-4 pr-8 text-text-2 align-top">{row.ai}</td>
                      <td className="py-4 text-text-1 font-medium align-top">{row.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
