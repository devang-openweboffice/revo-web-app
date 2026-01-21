import { useQuery } from '@tanstack/react-query'
import { fetchDashboardData } from '../data/mockData'
import { DashboardData } from '../types'

export const useDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
  })
}

