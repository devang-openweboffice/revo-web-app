import { Search, Printer, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export const Header = () => {
  return (
    <div className="relative border-b border-gray-200 bg-white">
      <div className="container relative py-4">
        {/* Top Row - Hamburger and Breadcrumbs */}
        <div className="flex items-center gap-3 mb-3">
          {/* Hamburger Menu */}
          <Button 
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-600 hover:bg-gray-100"
            aria-label="Menu"
            type="button"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Dashboard</span>
            <span>/</span>
            <span>Overview</span>
          </div>
        </div>

        {/* Main Row */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          {/* Left Section */}
          <div className="flex min-w-0 flex-col">
            {/* Welcome Message */}
            <h1 className="text-[28px] leading-[1.2] tracking-[-0.02em] text-gray-900">
              Welcome back, Combina
            </h1>
          </div>
          
          {/* Center Section - Search Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block">
            <div className="relative">
              <Search 
                className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" 
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Search across campaigns, partners, or assets..."
                className="h-[38px] w-[360px] rounded-none border-0 border-b border-gray-300 bg-transparent pl-6 pr-3 text-sm leading-5 text-gray-700 placeholder:text-gray-400 transition-colors focus:border-b-2 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
                aria-label="Search"
              />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Printer Icon Button */}
            <Button 
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              aria-label="Print"
              type="button"
            >
              <Printer className="h-4 w-4" />
            </Button>
            
            {/* NAME Tag - White with gray border */}
            <Badge variant="outline" className="rounded-md bg-white border-gray-200 px-2.5 py-1.5 text-[11px] leading-[13px] font-normal">
              <span className="text-gray-500">NAME: </span>
              <span className="font-bold text-gray-900">Velto</span>
            </Badge>
            
            {/* ID Tag - White with gray border */}
            <Badge variant="outline" className="rounded-md bg-white border-gray-200 px-2.5 py-1.5 text-[11px] leading-[13px] font-normal">
              <span className="text-gray-500">ID: </span>
              <span className="font-bold text-gray-900">5732</span>
            </Badge>
            
            {/* STATUS Tag - Light green */}
            <Badge className="rounded-md bg-green-100 px-2.5 py-1.5 text-[11px] leading-[13px] font-normal border-0 text-green-700 hover:bg-green-100">
              <span className="font-medium text-green-600">STATUS: </span>
              <span className="font-bold">In progress</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

