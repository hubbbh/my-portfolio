import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/projects/ProjectCard'
import { getFeaturedProjects, getAdditionalProjects } from '@/data/projects'
import type { TagVariant } from '@/components/ui/Tag'

const featuredTagVariants: TagVariant[] = ['film', 'product']
const additionalTagVariants: TagVariant[] = ['visual', 'content']

export default function ProjectsPage() {
  const featured = getFeaturedProjects()
  const additional = getAdditionalProjects()

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-site">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <p className="label-sm mb-4">Projects</p>
              <h1 className="text-4xl lg:text-5xl font-semibold text-text-1 mb-5 heading-accent">精选项目</h1>
              <p className="text-base text-text-2 mb-3 leading-relaxed">
                从内容创作到产品实践，我更关注项目如何体现判断、过程与可复用性。
              </p>
              <p className="text-sm text-text-3 leading-relaxed">
                这些项目并不试图证明"我会多少工具"，而是试图回答另外几个问题：
                内容为什么成立？风格如何被控制？AI 在哪里真的有效？
                以及人在整个过程中做了哪些关键判断。
              </p>
            </div>
          </FadeIn>

          <div className="mb-20">
            <FadeIn>
              <p className="label-sm mb-8">✦ Featured</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 0.1}>
                  <ProjectCard
                    project={project}
                    featured
                    tagVariant={featuredTagVariants[i] ?? 'subtle'}
                  />
                </FadeIn>
              ))}
            </div>
          </div>

          {additional.length > 0 && (
            <div>
              <FadeIn>
                <div className="border-t border-border-subtle pt-14 mb-8 flex items-center gap-3">
                  <p className="label-sm">Additional Work</p>
                  <div className="flex-1 h-[1px] bg-border-subtle" />
                </div>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {additional.map((project, i) => (
                  <FadeIn key={project.slug} delay={i * 0.1}>
                    <ProjectCard
                      project={project}
                      tagVariant={additionalTagVariants[i] ?? 'subtle'}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
