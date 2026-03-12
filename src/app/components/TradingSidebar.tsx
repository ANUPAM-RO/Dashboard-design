import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  TrendingUp, 
  FileText, 
  Settings, 
  Layers, 
  Shield,
  LogOut,
  Activity
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Clients', active: false },
  { icon: Wallet, label: 'Accounts', active: false },
  { icon: TrendingUp, label: 'Positions', active: false },
  { icon: FileText, label: 'Orders', active: false },
  { icon: Settings, label: 'Instruments', active: false },
  { icon: Layers, label: 'Groups', active: false },
  { icon: Shield, label: 'Audit Log', active: false },
];

export function TradingSidebar() {
  return (
    <div className="w-[186px] bg-gradient-to-b from-[#0f1419] to-[#0a0e14] border-r border-[#1a2332] flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-[#1a2332]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-white font-semibold">Vast</div>
            <div className="text-gray-400 text-xs">Trading Terminal</div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 py-4">
        <div className="text-gray-500 text-xs px-4 mb-2 font-medium">MENU</div>
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  item.active
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-400 hover:bg-[#1a2332] hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-[#1a2332]">
        <div className="bg-gradient-to-br from-[#1a2332]/50 to-[#0f1419]/50 rounded-lg p-3 border border-[#1a2332] hover:border-cyan-500/30 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 ring-2 ring-teal-500/20">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-semibold truncate">admin@bbok.local</div>
              <div className="text-gray-500 text-[10px]">Administrator</div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20 border border-red-500/20 hover:border-red-500/40 rounded-md text-red-400 hover:text-red-300 transition-all text-xs font-medium">
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}