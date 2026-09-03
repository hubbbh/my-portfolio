import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const background = [
  {
    title: '公共艺术训练',
    description:
      '让我更习惯从综合媒介、空间组织与受众感知的角度理解视觉表达。',
  },
  {
    title: 'AI产品项目经验',
    description:
      '在"魔幻时刻"中，我参与用户研究、产品定义与项目推进，建立了对"AI能力如何转化为用户价值"的基础理解。',
  },
  {
    title: 'AIGC内容创作实践',
    description:
      '从早期 AI 辅助短片，到近期基于 ComfyUI、Blender、AE 与剪辑工具的工作流搭建，我逐渐形成了自己的方法与判断标准。',
  },
]

const roles = [
  'AIGC内容创作',
  'AI视觉内容设计',
  'AI短视频创作 / 内容策划',
  '内容产品协同 / AIGC内容策划',
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="section-padding border-b border-border-subtle">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <div className="max-w-2xl">
              <FadeIn>
                <p className="label-sm mb-4">About</p>
                <h1 className="text-4xl lg:text-5xl font-semibold text-text-1 mb-8">关于我</h1>
                <p className="text-lg text-text-2 leading-relaxed mb-6">
                  我是公共艺术背景的 AIGC 创作者，持续关注视觉语言、平台内容逻辑与人机协作之间的关系。
                </p>
                <p className="text-base text-text-2 leading-relaxed">
                  我对 AI 感兴趣，不是因为它足够新，而是因为它正在改变内容如何被生产、被组织，
                  也改变了创作者判断在流程中的位置。
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} direction="left">
              <ImagePlaceholder
                aspectRatio="3/4"
                label="人物照片"
                bg="bg-surface"
                className="rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-b border-border-subtle">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-10">Background</p>
          </FadeIn>
          <div className="space-y-10">
            {background.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 pb-10 border-b border-border-subtle last:border-0 last:pb-0">
                  <span className="text-text-3 text-sm mt-1 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-text-1 mb-3">{item.title}</h3>
                    <p className="text-base text-text-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="label-sm mb-6">What I'm Looking For</p>
            <p className="text-xl font-semibold text-text-1 mb-5">我在寻找什么</p>
            <p className="text-base text-text-2 leading-relaxed mb-10">
              我希望加入那些正在认真思考 AI 如何参与内容生产、视觉表达或创作者工具建设的团队。
              相比被严格分工的单一岗位，我更适合进入需要内容理解、审美判断、AI工具应用与一定产品意识同时在线的环境。
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="label-sm mb-5">目标岗位方向</p>
            <div className="flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 bg-surface border border-border-subtle rounded-full text-sm text-text-1 font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex gap-4">
              <Button href="/projects" variant="primary">
                查看项目
              </Button>
              <Button href="/resume" variant="secondary">
                查看简历
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
