import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

const skills = [
  {
    category: '内容与表达',
    items: ['短视频内容策划', '情绪导向叙事', '视觉语言拆解', '内容节奏控制'],
  },
  {
    category: 'AIGC工作流',
    items: ['ComfyUI', 'LLM辅助概念梳理', '图像生成与风格筛选', '人机协作流程搭建'],
  },
  {
    category: '视听与后期',
    items: ['Blender', 'Photoshop', 'After Effects', '剪映', 'Suno'],
  },
  {
    category: '产品与研究',
    items: ['用户调研', '竞品分析', '产品定义', '基础项目管理'],
  },
]

const projectSummaries = [
  {
    title: 'AIGC短片系列创作',
    description:
      '围绕统一风格完成多支 15 秒短片，独立负责内容构思、视觉生成、场景搭建、合成与剪辑，探索 AIGC 短内容中的风格控制与人机协作流程。',
    href: '/projects/aigc-short-films',
  },
  {
    title: '魔幻时刻',
    description:
      '主导 AI 人像艺术风格工具从用户研究、竞品分析到产品定义与团队协作的完整流程；累计回收 2000+ 问卷，推动形成"低门槛生成 + 专业风格表达"的产品方案，并获多项比赛奖项。',
    href: '/projects/magic-moment',
  },
  {
    title: '重庆城市印象 · AI辅助短片',
    description:
      '独立完成脚本构思、AI 视觉生成与剪辑成片，探索地方叙事与 AI 短内容表达的结合方式。',
    href: '/projects/chongqing-impression',
  },
]

const awards = [
  'iCAN大学生创新创业大赛 重庆赛区三等奖',
  '四川美术学院新文科实践创新比赛 三等奖',
  '四川美术学院本科生作品年展 优秀奖',
  '创新创业单项奖学金',
  '市级大学生创新创业项目负责人',
]

export default function ResumePage() {
  return (
    <div className="pt-16">
      <section className="section-padding border-b border-border-subtle">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <FadeIn>
              <div>
                <p className="label-sm mb-4">Resume</p>
                <h1 className="text-4xl lg:text-5xl font-semibold text-text-1 mb-5">简历</h1>
                <p className="text-base text-text-2 max-w-xl leading-relaxed">
                  以内容逻辑和审美判断驱动的 AIGC 创作者，关注 AI 参与下的短内容表达、人机协作流程与可被理解的视觉结果。
                  具备 AIGC 短片创作、内容实验、用户研究与基础产品项目推进经验。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button href="/resume.pdf" variant="primary" size="lg" download>
                ↓ 下载完整 PDF
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div className="space-y-16">
              <FadeIn>
                <div>
                  <p className="label-sm mb-5">教育背景</p>
                  <p className="font-semibold text-text-1 mb-1">四川美术学院</p>
                  <p className="text-sm text-text-2">公共艺术专业｜本科在读</p>
                  <p className="text-sm text-text-3 mt-1">2023 – 2027</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <p className="label-sm mb-6">核心技能</p>
                  <div className="space-y-6">
                    {skills.map((group) => (
                      <div key={group.category}>
                        <p className="text-xs font-medium text-text-3 mb-2">{group.category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 bg-surface rounded-full text-xs text-text-2 border border-border-subtle"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <p className="label-sm mb-5">奖项</p>
                  <ul className="space-y-3">
                    {awards.map((award, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">✦</span>
                        <p className="text-sm text-text-2">{award}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <p className="label-sm mb-5">联系方式</p>
                  <div className="space-y-2">
                    <p className="text-sm text-text-2">your@email.com</p>
                    <p className="text-sm text-text-2">+86 1xx xxxx xxxx</p>
                    <a href="#" className="text-sm text-accent hover:underline block">
                      社交链接占位
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div>
              <FadeIn>
                <p className="label-sm mb-8">项目摘要</p>
              </FadeIn>
              <div className="space-y-8">
                {projectSummaries.map((proj, i) => (
                  <FadeIn key={proj.title} delay={i * 0.1}>
                    <div className="pb-8 border-b border-border-subtle last:border-0 last:pb-0">
                      <a
                        href={proj.href}
                        className="group flex items-start justify-between gap-4 mb-3"
                      >
                        <h3 className="text-lg font-semibold text-text-1 group-hover:text-text-2 transition-colors">
                          {proj.title}
                        </h3>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-text-3 group-hover:text-text-1 flex-shrink-0 mt-1 transition-colors"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <p className="text-sm text-text-2 leading-relaxed">{proj.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
