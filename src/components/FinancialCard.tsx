import { ReactNode } from 'react';

interface FinancialCardProps {
  icon: ReactNode;
  label: string;
  amount: string;
  iconColor?: string;
  amountColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function FinancialCard({ 
  icon, 
  label, 
  amount, 
  iconColor = 'text-cyan-400',
  amountColor = 'text-white',
  gradientFrom = 'from-cyan-500/10',
  gradientTo = 'to-emerald-500/5'
}: FinancialCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} border border-[#1a2332] rounded-xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`${iconColor} p-2 rounded-lg bg-black/20`}>
          {icon}
        </div>
        <div className="text-gray-400 text-xs uppercase font-medium">{label}</div>
      </div>
      <div className={`text-3xl font-semibold ${amountColor}`}>
        {amount}
      </div>
    </div>
  );
}