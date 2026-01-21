import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import clsx from "clsx";

interface InboxSidebarProps {
  messages: InboxMessage[];
  open: boolean;
  onToggle: () => void;
}

export const InboxSidebar = ({
  messages,
  open,
  onToggle,
}: InboxSidebarProps) => {
  return (
    <aside
      className={clsx(
        "relative rounded-[32px] bg-[#F6F1EB] shadow-sm overflow-hidden",
        "transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
        open
          ? "w-full translate-x-0"
          : "w-16"
      )}
    >
      {/* Top Center Toggle */}
      <button
        onClick={onToggle}
        className="absolute left-1/2 top-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow"
      >
        {open ? (
          <ChevronRight className="h-5 w-5 text-gray-700" />
        ) : (
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        )}
      </button>

      {/* Collapsed Rail */}
      {!open && (
        <div className="flex flex-col items-center gap-4 pt-20 pb-6">
          {messages.slice(0, 6).map((m) => (
            <div key={m.id} className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
                {m.avatar}
              </div>
              {m.badge && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                  {m.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Expanded */}
      {open && (
        <div className="flex h-full flex-col px-4 pt-20 pb-4">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto pb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex gap-3 rounded-2xl bg-[#FBF8F3] px-4 py-3"
              >
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold">
                    {message.avatar}
                  </div>
                  {message.badge && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                      {message.badge}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {message.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {message.timeAgo}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 border-t border-white/70 pt-4">
            {/* Quick Reply */}
            <div className="flex items-center gap-2 rounded-2xl bg-[#FBF8F3] px-4 py-3">
              <input
                placeholder="Quick reply..."
                className="flex-1 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900">
                <Send className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* View Inbox */}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-800">
              View Full Inbox <span className="text-gray-400">↗</span>
            </button>

            {/* AI Assistant */}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white">
              ✨ AI Chat Assistant
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
