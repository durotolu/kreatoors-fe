
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: string;
    positive?: boolean;
  };
  icon?: React.ReactNode;
  metric?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  change, 
  icon,
  metric,
  className
}) => {
  return (
    <div className={cn("bg-white rounded-lg p-5 flex flex-col", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          {icon}
          <span>{title}</span>
        </div>
        {change && (
          <div className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            change.positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          )}>
            {change.positive ? "+" : ""}{change.value}
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        <div className="text-3xl font-semibold">{value}</div>
        {metric && <span className="text-gray-400 text-sm">{metric}</span>}
      </div>
      
      {subtitle && (
        <div className="mt-1 text-gray-500 text-sm flex justify-between">
          <span>{subtitle}</span>
          <span className="text-gray-400">94.7</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
