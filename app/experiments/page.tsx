import FadeIn from '@/components/ui/FadeIn'
import Tag from '@/components/ui/Tag'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import experiments from '@/data/experiments'

// Each experiment gets an accent color
const accentColors = [
  { border: 'border-l-ice-blue', dot: 'text-ice-blue' },
  { border: 'border-l-warm-yellow', dot: 'text-warm-yellow' },
  { border: 'border-l-peach', dot: 'text-peach' },
  { border: 'border-l-coral', dot: 'text-coral' },
  { border: 'border-l-forest', dot: 'text-forest' },
]

export default function ExperimentsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding border-b border-border-subtle">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-4">Experiments</p>
            <h1 className="text-4xl lg:text-5xl font-semibold text-text-1 mb-5">实验与过程</h1>
            <p className="text-lg text-text-2 mb-3 leading-relaxed">
              一些尚未完全定型、但正在帮助我建立方法的实验片段。
            </p>
            <p className="text-sm text-text-3 leading-relaxed">
              并不是每一次生成都值得成为成片。
              很多更重要的判断，往往发生在看起来"还没有完成"的阶段。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Dark statement band */}
      <section className="bg-text-1 py-16 lg:py-20">
        <div className="container-site">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
              <div className="flex-shrink-0">
                <span className="text-warm-yellow text-4xl select-none">✦</span>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-semibold text-white leading-snug mb-4">
                  低模还是高细节？
                  <br />
                  抽象还是完整？
                  <br />
                  AI 保留多少，人工介入多少？
                </p>
                <p className="text-sm text-white/50 leading-relaxed max-w-lg">
                  这些不是技术问题，而是判断问题。
                  实验页记录的是判断之前的那个阶段——那些让方法逐渐成形的过程。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experiment cards — 2-col layout */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-8">
            {experiments.map((exp, i) => {
              const accent = accentColors[i % accentColors.length]
              const isWide = i === 2

              return (
                <FadeIn
                  key={exp.id}
                  delay={i * 0.07}
                  className={isWide ? 'sm:col-span-2' : ''}
                >
                  <div
                    className={`group bg-bg border border-border-subtle border-l-4 ${accent.border} rounded-[4px] overflow-hidden`}
                  >
                    {/* Image */}
                    <div className="card-frame">
                      <ImagePlaceholder
                        aspectRatio={isWide ? '16/9' : exp.aspectRatio === '16/9' ? '16/9' : '4/3'}
                        label={exp.title}
                        bg="bg-surface"
                        className="w-full group-hover:scale-[1.01] transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs select-none ${accent.dot}`}>✦</span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Tag key={tag} label={tag} variant="subtle" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-text-1 mb-2">{exp.title}</h3>
                      <p className="text-sm text-text-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Bottom note */}
          <FadeIn delay={0.5}>
            <p className="mt-12 text-xs text-text-3 border-t border-border-subtle pt-8 max-w-lg">
              ✦ 这些实验不是失败作品，而是方法形成的轨迹。
              每一个判断的节点，最终都在成片里有了位置。
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
