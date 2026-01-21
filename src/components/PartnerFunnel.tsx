import { Zap } from 'lucide-react'
import { FunnelStage } from '../types'

interface PartnerFunnelProps {
  funnel: FunnelStage[]
  growth: string
  growthText: string
}

export const PartnerFunnel = ({
  funnel,
  growth,
  growthText,
}: PartnerFunnelProps) => {
  const maxValue = Math.max(...funnel.map((f) => f.value))

  return (
    <div className="rounded-2xl bg-lime-300 p-8 shadow-sm">
      {/* Header */}
      <div className="mb-10 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-gray-900" />
          <h3 className="text-sm font-bold text-gray-900">
            Partner Funnel
          </h3>
        </div>

        <div className="flex gap-2 flex-wrap mt-4 lg:mt-0">
          <button className="rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white">
            Last quarter
          </button>
          <button className="rounded-full bg-lime-200 px-4 py-1.5 text-xs font-semibold text-gray-900">
            What has influenced
          </button>
          <button className="rounded-full bg-lime-200 px-4 py-1.5 text-xs font-semibold text-gray-900">
            Forecast
          </button>
        </div>
      </div>

      {/* Growth */}
      <div className="mb-16 flex items-end gap-4">
        <div className="text-5xl font-bold text-gray-900">
          {growth}
        </div>
        <div className="max-w-[160px] text-sm font-medium text-gray-800">
          {growthText}
        </div>
      </div>

      {/* Funnel */}
      {/* Funnel */}
<div className="flex flex-wrap lg:h-40 items-end gap-6">
  {funnel.map((stage, index) => {
    const maxValue = Math.max(...funnel.map(f => f.value))
    const height = (stage.value / maxValue) * 100
    const isSales = stage.label === 'SALES'

    return (
      <div key={index} className="flex flex-1 flex-col justify-end">
        {/* Label */}
        <div className="mb-2">
          <div className="text-sm font-bold text-gray-900">
            {stage.value.toLocaleString()}
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-800">
            {stage.label}
          </div>
        </div>

        {/* Bar container (FIXED HEIGHT) */}
        <div className="relative h-28 w-full">
          <div
            className={`absolute bottom-0 w-full rounded-xl ${
              isSales ? 'bg-gray-900' : stage.color
            }`}
            style={{ height: `${height}%` }}
          />
        </div>
      </div>
    )
  })}
</div>

    </div>
  )
}
