import { Zap } from 'lucide-react'
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis } from 'recharts'
import { PayoutData } from '../types'
import { Badge } from './ui/badge'

interface PayoutsCardProps {
  payouts: PayoutData[]
  growth: string
  total: string
}

export const PayoutsCard = ({ payouts, growth, total }: PayoutsCardProps) => {
  // Process chart data: first 3 gray, next 3 black, last one lime green
  const chartData = payouts.map((payout, index) => {
    let fill = '#d1d5db' // default gray
    
    if (index < 3) {
      fill = '#d1d5db' // first 3 bars: light gray
    } else if (index < 6) {
      fill = '#000000' // next 3 bars: black
    } else if (payout.color === 'bg-lime-500' || index === payouts.length - 1) {
      fill = '#C9F94A' // last bar or lime green: vibrant lime green
    }
    
    return {
      period: payout.period,
      amount: payout.amount,
      fill,
    }
  })

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
      {/* Top Section */}
      <div className="mb-6 flex items-start justify-between">
        {/* Pill-shaped badge with lightning icon */}
        <Badge 
          variant="secondary" 
          className="rounded-full bg-gray-100 border-0 px-3 py-1.5 h-auto flex items-center gap-2 text-black font-medium"
        >
          <Zap className="h-4 w-4 text-black" />
          <span>Payouts last quarter</span>
        </Badge>
        
        {/* Avatar/emoji in top-right */}
        <div className="text-2xl">👤</div>
      </div>

      {/* Growth and Total Section */}
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <div className="text-6xl font-bold text-black leading-none">{growth}</div>
        <div className="text-2xl font-semibold text-black">{total}</div>
      </div>

      {/* Bar Chart */}
      <div className="h-52 mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 400 }}
            />
            <YAxis hide />
            <Bar dataKey="amount" radius={[16, 16, 16, 16]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}


