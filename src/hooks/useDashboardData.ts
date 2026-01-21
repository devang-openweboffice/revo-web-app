import { useQuery } from '@tanstack/react-query'
import { fetchDashboardData } from '../data/mockData'
import { DashboardData } from '../types'

export const useDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: async () => {
      try {
        const data = await fetchDashboardData()

        if (!data) {
          throw new Error('No dashboard data returned')
        }

        return data
      } catch (error) {
        console.error('fetchDashboardData failed:', error)
        throw error
      }
    },
    retry: false,              // 🔒 prevent retry loops on Netlify
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,  // optional but good
  })
}
