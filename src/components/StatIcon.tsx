import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface StatIconProps {
  children: ReactNode;
  color: 'purple' | 'green' | 'red' | 'transparent';
  className?: string;
}

const StatIcon: React.FC<StatIconProps> = ({ children, color, className }) => {
  return (
    <div 
      className={cn(
        "h-8 w-8 rounded-full flex items-center justify-center",
        {
          "bg-purple-100": color === 'purple',
          "bg-green-100": color === 'green',
          "bg-red-100": color === 'red',
          "bg-transparent": color === 'transparent',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default StatIcon;
