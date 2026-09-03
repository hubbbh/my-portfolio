import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="label-sm mb-4">404</p>
        <h1 className="text-4xl font-semibold text-text-1 mb-4">页面不存在</h1>
        <p className="text-text-2 mb-8">这个页面可能已被移动或删除。</p>
        <Button href="/" variant="primary">返回首页</Button>
      </div>
    </div>
  )
}
