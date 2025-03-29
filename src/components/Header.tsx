
import { cn } from '@/lib/utils';
import { ArrowLeft, Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-gray-900">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="py-2 pl-10 pr-4 w-64 bg-gray-100 border-none rounded-md focus:ring-2 focus:ring-[#6C68C0] focus:outline-none placeholder-gray-400 text-sm"
            placeholder="Search"
          />
        </div>
        
        <button className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md font-medium",
          "bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        )}>
          <BarChart size={16} />
          <span>Analytics</span>
        </button>
        
        <button className="relative text-gray-700 hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-[#6C68C0] rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
            <img 
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
};

const BarChart = ({ size = 24, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export default Header;
