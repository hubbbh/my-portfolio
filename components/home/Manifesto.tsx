import FadeIn from '@/components/ui/FadeIn'

export default function Manifesto() {
  return (
    <section className="section-padding border-t border-border-subtle bg-surface">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="label-sm mb-10">Manifesto</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="space-y-6 text-xl lg:text-2xl xl:text-3xl font-medium text-text-1 leading-relaxed tracking-tight">
              <p>
                我对&ldquo;AI 能做什么&rdquo;感兴趣，
                也对&ldquo;AI 不该替人决定什么&rdquo;更感兴趣。
              </p>
              <p className="text-text-2">
                在创作里，我更关注风格是否统一、情绪是否成立、信息是否恰到好处。
              </p>
              <p>
                AI 负责扩展可能性，
                <br />
                而我负责让结果真正成立。
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
