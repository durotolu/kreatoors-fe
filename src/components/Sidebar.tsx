
import { cn } from '@/lib/utils';
import {
    BarChart,
    Briefcase,
    FileText,
    Home,
    Plus,
    Settings,
    Users
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  hasSubMenu?: boolean;
  expanded?: boolean;
};

const SidebarItem = ({ icon: Icon, label, active, hasSubMenu, expanded }: SidebarItemProps) => {
  return (
    <li className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors",
      active ? "text-[#6A67AF]" : "hover:bg-gray-100 text-[#667085]"
    )}>
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
      {hasSubMenu && expanded && (
        <svg className="ml-auto w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      )}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-white border-r border-gray-200 flex flex-col space-y-4">
      <div className="p-4">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#6A67AF"/>
            <g clip-path="url(#clip0_23_78)">
            <path d="M33.4172 26.4688C33.1935 25.7188 33.497 24.8438 34.4613 24.8438C35.4255 24.8438 35.7291 25.7188 35.5053 26.4688C35.3477 26.997 34.9312 28.2072 34.6987 28.8768C34.6558 29.0002 34.7424 29.1299 34.8614 29.1953C34.9802 29.2606 35.1388 29.2634 35.2307 29.1668C35.7296 28.6423 36.6337 27.6968 37.0403 27.304C37.6176 26.7464 38.5733 26.5567 39.0555 27.3437C39.5376 28.1308 38.8854 28.8161 38.0844 29.0085C37.5202 29.144 36.1998 29.4091 35.4683 29.5541C35.3336 29.5808 35.257 29.714 35.257 29.8438C35.257 29.9735 35.3336 30.1067 35.4683 30.1334C36.1998 30.2784 37.5202 30.5435 38.0844 30.679C38.8854 30.8714 39.5376 31.5567 39.0555 32.3437C38.5734 33.1308 37.6176 32.9411 37.0403 32.3835C36.6337 31.9906 35.7296 31.0452 35.2307 30.5207C35.1388 30.4241 34.9802 30.4269 34.8614 30.4922C34.7424 30.5576 34.6558 30.6873 34.6987 30.8107C34.9312 31.4803 35.3478 32.6905 35.5053 33.2188C35.729 33.9688 35.4255 34.8438 34.4613 34.8438C33.497 34.8438 33.1935 33.9688 33.4172 33.2188C33.5748 32.6905 33.9913 31.4803 34.2238 30.8107C34.2667 30.6873 34.1802 30.5576 34.0612 30.4922C33.9423 30.4269 33.7837 30.4241 33.6919 30.5207C33.193 31.0452 32.2889 31.9907 31.8822 32.3835C31.3049 32.9411 30.3492 33.1308 29.8671 32.3438C29.385 31.5567 30.0371 30.8714 30.8381 30.679C31.4023 30.5435 32.7227 30.2784 33.4542 30.1334C33.5889 30.1067 33.6655 29.9735 33.6655 29.8438C33.6655 29.714 33.5889 29.5808 33.4542 29.5541C32.7227 29.4091 31.4023 29.144 30.8381 29.0085C30.0371 28.8161 29.3849 28.1308 29.8671 27.3438C30.3492 26.5567 31.3049 26.7464 31.8822 27.304C32.2889 27.6969 33.193 28.6423 33.6918 29.1668C33.7837 29.2634 33.9423 29.2606 34.0612 29.1953C34.1802 29.1299 34.2667 29.0002 34.2238 28.8768C33.9913 28.2072 33.5748 26.997 33.4172 26.4688Z" fill="white"/>
            </g>
            <path d="M10.6758 34.7207L10.6757 34.7208L10.6795 34.7244C10.9404 34.9723 11.2534 35.0997 11.6092 35.0997C11.9741 35.0997 12.2933 34.9738 12.5557 34.7244C12.8208 34.4724 12.9549 34.1555 12.9549 33.7869V25.4022L23.1356 34.7102L23.1357 34.7103C23.4195 34.9695 23.7313 35.1124 24.0666 35.0997C24.424 35.0987 24.7368 34.9632 24.9959 34.7039C25.2543 34.4453 25.3914 34.1372 25.3914 33.7869C25.3914 33.3932 25.2625 33.0638 24.9868 32.8277L14.6181 23.3298L24.162 14.8707C24.4345 14.6381 24.5759 14.3141 24.6011 13.9234L24.6015 13.9234V13.9103C24.6015 13.5586 24.4578 13.237 24.1956 12.9495L24.1892 12.9426L24.1822 12.9362C23.9041 12.6832 23.588 12.5471 23.239 12.5471C22.9207 12.5471 22.6233 12.6798 22.35 12.916L22.35 12.9159L22.3475 12.9182L12.9549 21.31V13.8599C12.9549 13.4913 12.8208 13.1744 12.5557 12.9224C12.2933 12.673 11.9741 12.5471 11.6092 12.5471C11.2534 12.5471 10.9404 12.6744 10.6795 12.9224L10.6795 12.9224L10.6758 12.926C10.4231 13.1789 10.2971 13.4947 10.2971 13.8599V33.7869C10.2971 34.1521 10.4231 34.4679 10.6758 34.7207Z" fill="white" stroke="white" stroke-width="0.405875"/>
            <path d="M23.365 34.7912L23.365 34.7912L23.3686 34.7945C23.6407 35.0409 23.9636 35.1665 24.3283 35.1665C24.6837 35.1665 24.989 35.0392 25.2301 34.7856C25.4829 34.5316 25.6068 34.2102 25.6068 33.8369V27.3123C25.6068 26.4871 25.764 25.7013 26.0781 24.9532C26.4044 24.1916 26.8494 23.5297 27.4129 22.9658C27.9771 22.4013 28.6276 21.9619 29.3657 21.6469C30.1024 21.3326 30.8708 21.1756 31.6725 21.1756H31.807C32.1869 21.1756 32.514 21.06 32.7701 20.8172L32.7703 20.817C33.037 20.5635 33.1695 20.2403 33.1695 19.8628C33.1695 19.4816 33.0475 19.1575 32.7909 18.9121C32.5429 18.6526 32.2059 18.5331 31.807 18.5331H31.6725C30.5027 18.5331 29.3886 18.7628 28.3321 19.2223C27.2775 19.6697 26.3429 20.3009 25.5293 21.115L25.5282 21.1161C24.726 21.9303 24.0957 22.8708 23.6377 23.9362L23.6377 23.9362L23.637 23.9379C23.1894 25.0059 22.9658 26.1312 22.9658 27.3123V33.8369C22.9658 34.2144 23.0983 34.5377 23.365 34.7912Z" fill="white" stroke="white" stroke-width="0.405875"/>
            <defs>
            <clipPath id="clip0_23_78">
            <rect width="9.63383" height="9.85787" fill="white" transform="translate(29.4609 24.8438)"/>
            </clipPath>
            </defs>
        </svg>

      </div>
      
      <div className="px-3 mb-4">
        <button className="w-full bg-[#6A67AF] hover:bg-purple text-white rounded-md flex items-center justify-center gap-2 py-2 px-4 transition-colors">
          <Plus size={16} />
          <span className="text-sm font-medium">Create a Post</span>
        </button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-6 px-3">
          <SidebarItem icon={Briefcase} label="Main Workspace" active />
          <SidebarItem icon={Home} label="Personal Growth Hub" />
          <SidebarItem icon={FileText} label="Content Studio" hasSubMenu expanded />
          <SidebarItem icon={Users} label="Advocacy Hub" hasSubMenu expanded />
          <SidebarItem icon={Users} label="Community Hub" hasSubMenu expanded />
          <SidebarItem icon={BarChart} label="Analytics Hub" />
          <SidebarItem icon={Settings} label="Settings" />
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-[#6A67AF] rounded-md p-3 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white">Remaining Tokens</span>
            <span className="font-semibold text-white">4/10</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '40%' }}></div>
          </div>
          <button className="w-full flex items-center justify-start gap-2 text-white text-sm font-medium hover:underline">
            <span>Upgrade Plan</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
