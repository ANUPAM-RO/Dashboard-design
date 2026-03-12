import { Search, Bell, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <div className="border-b border-[#1a2332] px-8 py-3.5 flex items-center justify-between backdrop-blur-sm bg-[#0a0e14]/50">
      <div>
        <h1 className="text-white text-xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 text-xs">System overview and key metrics</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#0f1419] border border-[#1a2332] rounded-lg pl-4 pr-10 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 w-64"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 hover:bg-[#1a2332] rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-[#1a2332] rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 hover:bg-[#1a2332] rounded-lg px-2 py-1 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
            <span className="text-white text-sm font-semibold">A</span>
          </div>
          <span className="text-sm text-gray-300 font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}
