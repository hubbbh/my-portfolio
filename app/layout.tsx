import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '秦若楠 — AIGC 视听创作者',
  description:
    '以内容逻辑与审美判断驱动的 AIGC 视听创作者。持续围绕 AIGC 短内容创作、人机协作工作流与视觉语言控制进行实践。',
  keywords: ['AIGC', '短视频', 'AI内容创作', '视觉设计', '人机协作', '秦若楠'],
  authors: [{ name: '秦若楠' }],
  openGraph: {
    title: '秦若楠 — AIGC 视听创作者',
    description: '以内容逻辑与审美判断驱动的 AIGC 视听创作者',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-bg font-sans text-text-1 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
