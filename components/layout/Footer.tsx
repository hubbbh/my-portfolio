import Link from 'next/link'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/method', label: 'Method' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg">
      <div className="container-site py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-medium text-text-1 mb-2">秦若楠</p>
            <p className="text-sm text-text-3 leading-relaxed">
              AI 负责扩展可能，人负责决定什么值得留下。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div>
              <p className="label-sm mb-4">导航</p>
              <nav className="flex flex-col gap-3">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-text-2 hover:text-text-1 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="label-sm mb-4">联系</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hrrhzz@qq.com"
                  className="text-sm text-text-2 hover:text-text-1 transition-colors"
                >
                  hrrhzz@qq.com
                </a>
                <p className="text-sm text-text-2">
                  微信 qrm321321
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm text-text-2 hover:text-text-1 transition-colors"
                >
                  ↓ 下载简历 PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-text-3">© 2026 秦若楠. All rights reserved.</p>
          <p className="text-xs text-text-3">以内容逻辑与审美判断驱动的 AIGC 视听创作者</p>
        </div>
      </div>
    </footer>
  )
}
