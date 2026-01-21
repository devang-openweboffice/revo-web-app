import { useState } from 'react'
import { NotificationCard } from '../types'
import { Bell, Bot, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

interface NotificationCardsProps {
  notifications: NotificationCard[]
}

export const NotificationCards = ({ notifications }: NotificationCardsProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const latestNotification = notifications.find((n) => n.isLatest)
  const regularNotifications = notifications.filter((n) => !n.isLatest)

  // Show first 6 items when collapsed, all when expanded
  const maxVisibleWhenCollapsed = 5;
  const hasMoreNotifications = regularNotifications.length > maxVisibleWhenCollapsed
  const displayNotifications = isExpanded || !hasMoreNotifications
    ? regularNotifications
    : regularNotifications.slice(0, maxVisibleWhenCollapsed)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="container flex items-center justify-center py-3">
      <div className="flex gap-2 items-start md:items-center rounden-none md:rounded-full bg-white shadow-sm px-3 py-2 w-full max-w-full overflow-hidden">
        <div className="flex items-center flex-wrap gap-2 flex-1 min-w-0 overflow-hidden">
          {/* LATEST Updates Button */}
          {latestNotification && (
            <div className="flex min-w-[140px] items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold leading-[13px] text-gray-900">
                  {latestNotification.title}
                </span>
                <span className="text-[11px] font-normal leading-[13px] text-gray-600 truncate">
                  {latestNotification.subtitle}
                </span>
              </div>
            </div>
          )}

          {/* Regular Notifications */}
          {displayNotifications.map((notification) => (
            <div
              key={notification.id}
              className="relative flex min-w-[180px] items-center gap-2.5 shrink-0"
            >
              {/* Green Dot Indicator */}
              {notification.hasGreenDot && (
                <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-green-500 z-10" />
              )}

              {/* Icon */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notification.iconColor}`}
              >
                {notification.icon === 'bot' ? (
                  <Bot className="h-4 w-4 text-white" />
                ) : (
                  <span className="text-[11px] font-bold leading-[13px] text-white">
                    {notification.iconInitials}
                  </span>
                )}
              </div>

              {/* Text Content */}
              <div className="flex min-w-0 flex-col">
                <span className="text-[11px] font-bold leading-[13px] text-gray-900">
                  {notification.title}
                </span>
                <span className="text-[11px] font-normal leading-[13px] text-gray-600 truncate">
                  {notification.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Collapse/Expand Button - show if there are more notifications */}
        {hasMoreNotifications && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpand}
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

