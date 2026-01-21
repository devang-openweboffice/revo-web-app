import { AlertCircle, Check } from 'lucide-react'
import { ApprovalRequest } from '../types'

interface NeedsApprovalProps {
  approvals: ApprovalRequest[]
}

export const NeedsApproval = ({ approvals }: NeedsApprovalProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-yellow-50 shadow-sm overflow-hidden">
      <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-4 border-b border-yellow-100">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500">
            <AlertCircle className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
          <h2 className="text-lg font-bold text-gray-900">Needs Approval</h2>
          <div className="text-sm text-gray-600">
            {approvals.length} requests pending your review
          </div>
          </div>
         
        </div>
        <div className="flex items-center gap-4">
         
          <button className="rounded-full bg-white border border-gray-300 px-4 py-1.5 text-xs font-semibold text-orange-900 hover:bg-gray-50">
            APPROVE ALL
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 p-6 md:grid-cols-2 xl:grid-cols-4">
        {approvals.map((approval) => (
          <div
            key={approval.id}
            className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow"
          >
             <div
              className={`flex justify-between`}
            >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${approval.partnerColor} text-white text-lg font-bold flex-shrink-0`}
            >
              {approval.partnerInitial}
            </div>
            <div className="text-xs text-gray-500">{approval.timeAgo}</div>
            </div>
            <div className="flex-1 min-w-0 mt-2">
              <div className="font-semibold text-gray-900 mb-1">{approval.partner}</div>
              <div className="text-sm text-gray-600 mb-1">{approval.action}</div>
             
            </div>
            <button className="mt-2 flex w-full items-center gap-1.5 text-center justify-center rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

