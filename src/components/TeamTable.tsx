
import { ArrowUpRight } from 'lucide-react';

interface TeamData {
  id: string;
  name: string;
  color: string;
  shares: number;
  impressions: string;
  engagementRate: string;
  trend: 'up' | 'down' | 'neutral';
}

const teams: TeamData[] = [
  {
    id: 'mt',
    name: 'Marketing Team',
    color: '#9c27b0',
    shares: 284,
    impressions: '125.4K',
    engagementRate: '6.2%',
    trend: 'up'
  },
  {
    id: 'ft',
    name: 'Finance Team',
    color: '#2196f3',
    shares: 284,
    impressions: '125.4K',
    engagementRate: '6.2%',
    trend: 'up'
  },
  {
    id: 'dt',
    name: 'Design Team',
    color: '#f44336',
    shares: 284,
    impressions: '125.4K',
    engagementRate: '6.2%',
    trend: 'up'
  },
  {
    id: 'pt',
    name: 'Product Team',
    color: '#4caf50',
    shares: 284,
    impressions: '125.4K',
    engagementRate: '6.2%',
    trend: 'up'
  }
];

const TeamTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-gray-800">Top Team Advocates</h3>
        <button className="text-sm text-[#6C68C0] hover:underline">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">Team</th>
              <th className="pb-3 font-medium">Shares</th>
              <th className="pb-3 font-medium">Impressions</th>
              <th className="pb-3 font-medium">Engagement Rate</th>
              <th className="pb-3 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id} className="border-b border-gray-100 last:border-none">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ backgroundColor: team.color }}
                    >
                      {team.id.toUpperCase()}
                    </div>
                    <span>{team.name}</span>
                  </div>
                </td>
                <td className="py-4">{team.shares}</td>
                <td className="py-4">{team.impressions}</td>
                <td className="py-4">{team.engagementRate}</td>
                <td className="py-4">
                  <div className="flex items-center gap-1 text-green-500">
                    <ArrowUpRight size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
