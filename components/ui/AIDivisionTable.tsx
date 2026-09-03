interface AIDivisionTableProps {
  rows: {
    phase: string
    ai: string
    human: string
  }[]
}

export default function AIDivisionTable({ rows }: AIDivisionTableProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[600px] text-sm border-collapse">
        <thead>
          <tr className="border-b border-border-subtle">
            <th className="text-left py-3 pr-8 font-medium text-text-3 text-xs tracking-widest uppercase w-1/4">
              阶段
            </th>
            <th className="text-left py-3 pr-8 font-medium text-text-3 text-xs tracking-widest uppercase w-3/8">
              AI 做了什么
            </th>
            <th className="text-left py-3 font-medium text-text-3 text-xs tracking-widest uppercase w-3/8">
              我做了什么
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border-subtle last:border-0 hover:bg-surface/50 transition-colors"
            >
              <td className="py-4 pr-8 font-medium text-text-1 align-top">{row.phase}</td>
              <td className="py-4 pr-8 text-text-2 align-top">{row.ai}</td>
              <td className="py-4 text-text-1 align-top font-medium">{row.human}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
