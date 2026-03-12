import { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  subtitle?: string;
  iconColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MetricCard({ 
  icon, 
  label, 
  value, 
  subtitle, 
  iconColor = 'text-cyan-400',
  gradientFrom = 'from-cyan-500/10',
  gradientTo = 'to-emerald-500/5'
}: MetricCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} border border-[#1a2332] rounded-xl p-5 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10`}>
      <div className="flex items-start gap-3">
        <div className={`${iconColor} p-2 rounded-lg bg-black/20`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-gray-400 text-xs uppercase mb-1 font-medium">{label}</div>
          <div className="text-white text-2xl font-semibold mb-0.5">{value}</div>
          {subtitle && (
            <div className="text-gray-500 text-xs">{subtitle}</div>
          )}
        </div>
      </div>
    </div>
  );
}