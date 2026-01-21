export interface ApprovalRequest {
  id: string
  partner: string
  partnerInitial: string
  partnerColor: string
  action: string
  timeAgo: string
}

export interface NotificationCard {
  id: string
  title: string
  subtitle?: string
  icon: string
  iconInitials: string
  iconColor: string
  badge?: number
  isLatest?: boolean
  hasGreenDot?: boolean
}

export interface PayoutData {
  period: string
  amount: number
  color: string
}

export interface FunnelStage {
  label: string
  value: number
  color: string
}

export interface SummaryMetric {
  title: string
  value: string
  description: string
  growth?: string
  icon: string
}

export interface ProgramGrowthPartner {
  name: string
  count: number
  percentage: number
}

export interface InboxMessage {
  id: string
  name: string
  message: string
  timeAgo: string
  badge?: number
  avatar: string
}

export interface DashboardData {
  approvals: ApprovalRequest[]
  notifications: NotificationCard[]
  payouts: PayoutData[]
  funnel: FunnelStage[]
  summaryMetrics: SummaryMetric[]
  programGrowth: ProgramGrowthPartner[]
  inboxMessages: InboxMessage[]
  payoutGrowth: string
  payoutTotal: string
  funnelGrowth: string
  funnelGrowthText: string
  programGrowthTotal: string
}

