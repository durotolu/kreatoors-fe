
import { MoreHorizontal } from 'lucide-react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const sharingData = [
  { day: 'Day 1', shares: 200, impressions: 120 },
  { day: 'Day 2', shares: 300, impressions: 180 },
  { day: 'Day 3', shares: 250, impressions: 220 },
  { day: 'Day 4', shares: 320, impressions: 260 },
  { day: 'Day 5', shares: 280, impressions: 340 },
  { day: 'Day 6', shares: 380, impressions: 300 },
  { day: 'Day 7', shares: 290, impressions: 280 },
];

const engagementData = [
  { day: 'Day 1', value: 320 },
  { day: 'Day 2', value: 380 },
  { day: 'Day 3', value: 400 },
  { day: 'Day 4', value: 350 },
  { day: 'Day 5', value: 420 },
  { day: 'Day 6', value: 380 },
  { day: 'Day 7', value: 410 },
];

interface ChartSectionProps {
  title: string;
  chartType: 'area' | 'bar';
  className?: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ title, chartType, className }) => {
  return (
    <div className={`bg-white rounded-lg p-5 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-gray-800">{title}</h3>
        
        {chartType === 'area' && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6C68C0]"></div>
              <span className="text-sm text-gray-600">Shares</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-600">Impressions</span>
            </div>
          </div>
        )}
                
        {chartType === 'bar' && <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>}
      </div>
      
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={sharingData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 600]} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="shares" 
                stroke="#4CAF50" 
                fillOpacity={0}
              />
              <Area 
                type="monotone" 
                dataKey="impressions" 
                stroke="#9b87f5" 
                fillOpacity={0}
              />
            </AreaChart>
          ) : (
            <BarChart data={engagementData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8581E7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8581E7" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 600]} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <Tooltip cursor />
              <Bar 
                dataKey="value" 
                fill="url(#colorValue)" 
                radius={[4, 4, 0, 0]} 
                barSize={40} 
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
