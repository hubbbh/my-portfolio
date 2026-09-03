import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/data/projects'
import projects from '@/data/projects'
import FadeIn from '@/components/ui/FadeIn'
import Tag from '@/components/ui/Tag'
import AIDivisionTable from '@/components/ui/AIDivisionTable'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import VideoPlayer from '@/components/ui/VideoPlayer'
import Button from '@/components/ui/Button'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  return {
    title: project ? `${project.title} — 秦若楠` : '项目 — 秦若楠',
    description: project?.tagline,
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const heroVideo = project.heroVideo ?? project.gallery?.[0]?.src

  return (
    <div className="pt-16">
      <article>
        {/* Header */}
        <section className="section-padding border-b border-border-subtle">
          <div className="container-site max-w-4xl">
            <FadeIn>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-text-1 mb-4 leading-tight">
                {project.title}
              </h1>

              {project.titleEn && (
                <p className="font-sans text-text-3 text-xs tracking-widest uppercase mb-6">{project.titleEn}</p>
              )}

              <p className="text-lg text-text-2 leading-relaxed max-w-2xl mb-10">
                {project.tagline}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border-subtle">
                <div>
                  <p className="label-sm mb-1.5">时间</p>
                  <p className="text-sm text-text-1 font-medium">{project.meta.year}</p>
                </div>
                <div>
                  <p className="label-sm mb-1.5">类型</p>
                  <p className="text-sm text-text-1 font-medium">{project.meta.type}</p>
                </div>
                <div>
                  <p className="label-sm mb-1.5">角色</p>
                  <p className="text-sm text-text-1 font-medium">{project.meta.role}</p>
                </div>
                {project.meta.teamSize && (
                  <div>
                    <p className="label-sm mb-1.5">团队规模</p>
                    <p className="text-sm text-text-1 font-medium">{project.meta.teamSize}</p>
                  </div>
                )}
                {project.meta.tools && project.meta.tools.length > 0 && (
                  <div className="col-span-2 sm:col-span-4">
                    <p className="label-sm mb-2">工具链</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.meta.tools.map((tool) => (
                        <Tag key={tool} label={tool} variant="subtle" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Hero visual */}
        <section className="bg-surface">
          <div className="container-site max-w-5xl py-12">
            <FadeIn>
              {heroVideo ? (
                <VideoPlayer src={heroVideo} />
              ) : (
                <ImagePlaceholder aspectRatio="16/9" label="项目主视觉" bg="bg-bg" />
              )}
            </FadeIn>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-site max-w-3xl">
            <FadeIn>
              <div className="mb-12">
                <p className="label-sm mb-4">Overview</p>
                <p className="text-lg lg:text-xl text-text-1 leading-relaxed font-medium">
                  {project.overview}
                </p>
              </div>
            </FadeIn>

            {project.goals && (
              <FadeIn delay={0.1}>
                <div className="mb-12">
                  <p className="label-sm mb-6">
                    {project.slug === 'aigc-short-films' ? '这个项目想解决什么' : '项目目标'}
                  </p>
                  <ul className="space-y-4">
                    {project.goals.map((goal, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-text-3 text-sm mt-0.5 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-base text-text-2">{goal}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}

            {project.problem && (
              <FadeIn delay={0.15}>
                <div className="mb-12 p-8 bg-surface rounded-xl border border-border-subtle">
                  <p className="label-sm mb-4">
                    {project.slug === 'aigc-short-films' ? '为什么做这组短片' : '这个项目为什么开始'}
                  </p>
                  <p className="text-base text-text-2 leading-relaxed">{project.problem}</p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* Video gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="bg-surface border-y border-border-subtle py-16">
            <div className="container-site">
              <FadeIn>
                <p className="label-sm mb-8">
                  {project.slug === 'aigc-short-films' ? '最终成果' : '项目视频'}
                </p>
              </FadeIn>

              {project.gallery.length === 1 ? (
                <FadeIn delay={0.1}>
                  <VideoPlayer
                    src={project.gallery[0].src}
                    title={project.gallery[0].title}
                    className="max-w-4xl mx-auto"
                  />
                </FadeIn>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, i) => (
                    <FadeIn key={i} delay={i * 0.08}>
                      <VideoPlayer src={item.src} title={item.title} />
                    </FadeIn>
                  ))}
                </div>
              )}

              {project.slug === 'aigc-short-films' && (
                <FadeIn delay={0.4}>
                  <p className="mt-8 text-sm text-text-2 max-w-2xl leading-relaxed">
                    这四支短片拥有统一的视觉倾向，但在情绪和叙事密度上各有侧重。我最终选择将它们视为一个系列，而不是彼此独立的作品，因为它们共同构成了我对 AIGC 短内容工作流的一次集中实践。
                  </p>
                </FadeIn>
              )}
            </div>
          </section>
        )}

        {/* Awards (for magic moment) */}
        {project.awards && (
          <section className="bg-surface border-y border-border-subtle py-16">
            <div className="container-site max-w-3xl">
              <FadeIn>
                <p className="label-sm mb-8">项目结果</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.awards.map((award, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-bg rounded-lg border border-border-subtle">
                      <span className="text-accent mt-0.5 flex-shrink-0">✦</span>
                      <p className="text-sm text-text-1">{award}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Process */}
        {project.process && (
          <section className="section-padding">
            <div className="container-site max-w-3xl">
              <FadeIn>
                <p className="label-sm mb-12">Process</p>
              </FadeIn>
              <div className="space-y-16">
                {project.process.map((step, i) => (
                  <FadeIn key={i} delay={0.1}>
                    <div className="grid sm:grid-cols-[80px_1fr] gap-6">
                      <span className="text-4xl font-light text-border-subtle">{step.step}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-text-1 mb-4">{step.title}</h3>
                        <p className="text-base text-text-2 leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key decisions */}
        {project.decisions && (
          <section className="bg-surface border-y border-border-subtle py-20">
            <div className="container-site max-w-3xl">
              <FadeIn>
                <p className="label-sm mb-10">几个关键判断</p>
              </FadeIn>
              <div className="space-y-10">
                {project.decisions.map((d, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div>
                      <h3 className="text-base font-semibold text-text-1 mb-3">
                        判断{['一', '二', '三', '四'][i]}：{d.title}
                      </h3>
                      <p className="text-base text-text-2 leading-relaxed">{d.content}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* AI Division */}
        {project.aiDivision && (
          <section className="section-padding">
            <div className="container-site max-w-4xl">
              <FadeIn>
                <p className="label-sm mb-8">AI 做了什么，我做了什么</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <AIDivisionTable rows={project.aiDivision} />
              </FadeIn>
            </div>
          </section>
        )}

        {/* Result & Retrospective */}
        {(project.result || project.retrospective) && (
          <section className="bg-surface border-t border-border-subtle py-20">
            <div className="container-site max-w-3xl">
              {project.result && (
                <FadeIn>
                  <div className="mb-12">
                    <p className="label-sm mb-4">
                      {project.slug === 'aigc-short-films' ? '这个项目带给我的结果' : '这个项目对我意味着什么'}
                    </p>
                    <p className="text-lg text-text-1 leading-relaxed font-medium">{project.result}</p>
                  </div>
                </FadeIn>
              )}
              {project.retrospective && (
                <FadeIn delay={0.1}>
                  <div className="pt-8 border-t border-border-subtle">
                    <p className="label-sm mb-4">复盘</p>
                    <p className="text-base text-text-2 leading-relaxed">{project.retrospective}</p>
                  </div>
                </FadeIn>
              )}
            </div>
          </section>
        )}

        {/* Back nav */}
        <section className="py-16 border-t border-border-subtle">
          <div className="container-site flex justify-between items-center">
            <Button href="/projects" variant="secondary">
              ← 返回所有项目
            </Button>
            <Button href="/resume.pdf" variant="ghost" download>
              ↓ 下载简历
            </Button>
          </div>
        </section>
      </article>
    </div>
  )
}
