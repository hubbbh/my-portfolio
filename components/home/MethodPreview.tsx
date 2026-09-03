import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

const steps = [
  { label: '观察', en: 'Observe' },
  { label: '匹配', en: 'Match' },
  { label: '生成', en: 'Generate' },
  { label: '收敛', en: 'Converge' },
  { label: '成片', en: 'Output' },
]

export default function MethodPreview() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="label-sm mb-3">Method</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-text-1 mb-6">我如何工作</h2>
              <p className="text-base text-text-2 leading-relaxed mb-8">
                我通常从素材观察、音频匹配和内容判断开始，再让 AI 介入视觉发散，最后通过 Blender、AE
                和剪辑工具去稳定结果。
                <br />
                <br />
                对我来说，真正重要的不是&ldquo;生成&rdquo;，而是&ldquo;选择&rdquo;。
              </p>
              <Link
                href="/method"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-1 hover:text-text-2 transition-colors"
              >
                查看完整方法论
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-border-subtle">
              <p className="label-sm mb-8">工作流</p>
              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-bg border border-border-subtle flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-text-2">{i + 1}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-[1.5px] h-8 bg-border-subtle" />
                      )}
                    </div>
                    <div className="pb-8 last:pb-0">
                      <p className="text-base font-semibold text-text-1">{step.label}</p>
                      <p className="text-xs text-text-3">{step.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
