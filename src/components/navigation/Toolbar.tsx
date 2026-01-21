import { useState } from "react";
import {
  Search,
  Calendar as CalendarIcon,
  Filter,
  MoreHorizontal,
  RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";

export const Toolbar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const formatDateRange = () => {
    if (!date) return "Oct 1 – Oct 31";
    return format(date, "MMM d");
  };

  return (
    <div className="border-b border-gray-100 bg-white">
      {/* Container */}
      <div className="mx-auto flex flex-wrap container items-center justify-between gap-4 px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
            <span>Partners</span>
            <span>/</span>
            <span className="font-medium text-gray-900">Overview</span>
          </div>

          <span className="flex items-center gap-1">
            Last synced:
            <span className="text-gray-700">Just now</span>
            <Button
              variant="ghost"
              size="icon"
              className="ml-1 h-auto w-auto p-0 text-gray-400 hover:text-gray-600"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </Button>
          </span>
        </div>

        {/* Center */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none z-10" />
          <Input
            placeholder="Search Partners..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-gray-200 bg-gray-50 px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                {formatDateRange()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Filter (no border) */}
          <Button variant="ghost" className="flex items-center gap-1 hover:text-gray-900">
            <Filter className="h-4 w-4" />
            Filter
          </Button>

          {/* Export (text only) */}
          <Button variant="ghost" className="hover:text-gray-900">Export</Button>

          {/* More */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-auto w-auto hover:text-gray-900">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
