import { TradingSidebar } from './components/TradingSidebar';
import { Navbar } from './components/Navbar';
import { MetricCard } from './components/MetricCard';
import { FinancialCard } from './components/FinancialCard';
import { 
  UserPlus, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Settings, 
  AlertTriangle,
  DollarSign,
  Activity,
  PieChart
} from 'lucide-react';

export default function App() {
  return (
    <div className="size-full flex bg-gradient-to-br from-[#0a0e14] via-[#0a0e14] to-[#0f1419]">
      <TradingSidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Navbar />

        {/* Main Dashboard Content */}
        <div className="p-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            <MetricCard
              icon={<UserPlus className="w-5 h-5" />}
              label="Total Clients"
              value="7"
              subtitle="7 active"
              iconColor="text-cyan-400"
              gradientFrom="from-cyan-500/10"
              gradientTo="to-cyan-500/5"
            />
            <MetricCard
              icon={<CreditCard className="w-5 h-5" />}
              label="Accounts"
              value="6"
              iconColor="text-purple-400"
              gradientFrom="from-purple-500/10"
              gradientTo="to-purple-500/5"
            />
            <MetricCard
              icon={<TrendingUp className="w-5 h-5" />}
              label="Open Positions"
              value="2"
              subtitle="0 closed"
              iconColor="text-emerald-400"
              gradientFrom="from-emerald-500/10"
              gradientTo="to-emerald-500/5"
            />
            <MetricCard
              icon={<FileText className="w-5 h-5" />}
              label="Total Orders"
              value="2"
              iconColor="text-blue-400"
              gradientFrom="from-blue-500/10"
              gradientTo="to-blue-500/5"
            />
            <MetricCard
              icon={<Settings className="w-5 h-5" />}
              label="Instruments"
              value="8"
              iconColor="text-yellow-400"
              gradientFrom="from-yellow-500/10"
              gradientTo="to-yellow-500/5"
            />
          </div>

          {/* Active Alerts */}
          <div className="mb-8">
            <MetricCard
              icon={<AlertTriangle className="w-5 h-5" />}
              label="Active Alerts"
              value="0"
              iconColor="text-red-400"
              gradientFrom="from-red-500/10"
              gradientTo="to-red-500/5"
            />
          </div>

          {/* Financial Summary */}
          <div>
            <h2 className="text-gray-400 text-sm uppercase mb-4 font-medium flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
              Financial Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FinancialCard
                icon={<DollarSign className="w-5 h-5" />}
                label="Total Balance"
                amount="$6000.00"
                iconColor="text-cyan-400"
                gradientFrom="from-cyan-500/15"
                gradientTo="to-emerald-500/10"
              />
              <FinancialCard
                icon={<Activity className="w-5 h-5" />}
                label="Float P&L"
                amount="$395.78"
                iconColor="text-emerald-400"
                amountColor="text-emerald-400"
                gradientFrom="from-emerald-500/15"
                gradientTo="to-emerald-500/10"
              />
              <FinancialCard
                icon={<PieChart className="w-5 h-5" />}
                label="Margin Used"
                amount="$129.02"
                iconColor="text-cyan-400"
                gradientFrom="from-cyan-500/15"
                gradientTo="to-cyan-500/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}