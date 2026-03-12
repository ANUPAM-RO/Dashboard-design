import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  ShoppingCart, 
  Briefcase, 
  FolderKanban, 
  FileText,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Client Accounts', active: false },
  { icon: MapPin, label: 'Positions', active: false },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: Briefcase, label: 'Instruments', active: false },
  { icon: FolderKanban, label: 'Groups', active: false },
  { icon: FileText, label: 'Audit Log', active: false },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#1a1d29] text-white flex flex-col">
      {/* Company Logo and Name */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1633796212691-0cfba2ab1dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMGFic3RyYWN0fGVufDF8fHx8MTc3MzIxMjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">TradePro</h1>
            <p className="text-xs text-gray-400">Financial Solutions</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NzMyMDk4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Sarah Johnson</p>
            <p className="text-xs text-gray-400 truncate">sarah.j@tradepro.com</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm font-medium">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
