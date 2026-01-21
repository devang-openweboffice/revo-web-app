import { TrendingUp } from 'lucide-react'
import { ProgramGrowthPartner } from '../types'

interface ProgramGrowthProps {
  partners: ProgramGrowthPartner[]
  total: string
}

export const ProgramGrowth = ({ partners, total }: ProgramGrowthProps) => {
  const maxCount = Math.max(...partners.map((p) => p.count))

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col md:flex-row items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Program Growth</h3>
          <p className="text-sm text-gray-600">New partner acquisition breakdown</p>
          <div className="mt-6 flex items-center gap-1.5 text-base font-semibold">
            
            <span className="text-5xl text-black mr-2">{total}</span>
            <span className="bg-green-200 rounded-sm p-1 text-sm flex items-center gap-2"><TrendingUp /> This Month</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          
          <div className="flex gap-1 ml-3 bg-gray-200 rounded-xl p-1">
            <button className="rounded-xl  px-3 py-1.5 bg-white text-xs font-semibold text-gray">
              APPLICATION
            </button>
            <button className="rounded-xl  px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200">
              PRODUCT
            </button>
            <button className="rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200">
              CAMPAIGN
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        {partners.map((partner, index) => {
          const width = (partner.count / maxCount) * 100
          return (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">{partner.name}</span>
                <span className="text-sm font-semibold text-gray-600">
                  {partner.count} Partners
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-gray-900"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

