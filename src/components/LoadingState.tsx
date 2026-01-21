export const LoadingState = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 mx-auto"></div>
        <p className="text-gray-600">Loading dashboard data...</p>
      </div>
    </div>
  )
}

