import FadeIn from '@/components/ui/FadeIn'

const capabilities = [
  {
    number: '01',
    title: '内容逻辑',
    description:
      '我会先判断内容为什么成立，包括情绪是否进入得够快、信息密度是否适合短时观看，以及观众为什么愿意停留。',
  },
  {
    number: '02',
    title: '视觉控制',
    description:
      '我习惯先让 AI 帮我扩展视觉可能，再通过筛选、删减和人工重建去统一风格，让结果更稳定、更适合表达。',
  },
  {
    number: '03',
    title: '人机协作工作流',
    description:
      '我使用 LLM 梳理想法，用 ComfyUI 生成视觉方向，在 Blender 中处理空间结构，再通过 AE、PS 与剪辑工具完成后期收敛。',
  },
]

export default function WhatIDo() {
  return (
    <section className="section-padding bg-surface border-y border-border-subtle">
      <div className="container-site">
        <FadeIn>
          <div className="mb-14">
            <p className="label-sm mb-3">Capabilities</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-1 mb-4">我能做什么</h2>
            <p className="text-base text-text-2 max-w-xl">
              我更擅长把内容判断、视觉表达与 AI 工具链放在同一个流程里思考，而不是把它们割裂开来。
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.number} delay={i * 0.12}>
              <div className="flex flex-col gap-4">
                <span className="text-4xl font-light text-border-subtle select-none">
                  {cap.number}
                </span>
                <div className="w-8 h-[1.5px] bg-border-subtle" />
                <h3 className="text-xl font-semibold text-text-1">{cap.title}</h3>
                <p className="text-sm text-text-2 leading-relaxed">{cap.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
