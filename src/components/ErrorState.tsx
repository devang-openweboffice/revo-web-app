import { AlertCircle } from 'lucide-react'
import { Button } from './ui/button'

interface ErrorStateProps {
  onRetry?: () => void
}

export const ErrorState = ({ onRetry }: ErrorStateProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-500" />
        <h2 className="mb-2 text-xl font-semibold text-gray-900">Error loading dashboard</h2>
        <p className="mb-4 text-gray-600">Something went wrong while fetching the data.</p>
        {onRetry && (
          <Button onClick={onRetry} variant="default">
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

