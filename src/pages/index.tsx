
import ChartSection from '@/components/ChartSection';
import DateFilter from '@/components/DateFilter';
import ExportButton from '@/components/ExportButton';
import Header from '@/components/Header';
import MetricCard from '@/components/MetricCard';
import Sidebar from '@/components/Sidebar';
import StatIcon from '@/components/StatIcon';
import TeamTable from '@/components/TeamTable';
import { BarChart, Heart, MessageCircleQuestion, Share } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="px-8">
          <Header title="Analytics" />
          
          <div className="py-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Advocacy Impact Dashboard</h2>
                <p className="text-gray-500 text-sm">Brand Amplification & Employee Advocacy Metrics</p>
              </div>
              
              <div className="flex items-center gap-3">
                <DateFilter label="Last 30 Days" />
                <ExportButton 
                    icon={
                        <StatIcon color="transparent">
                            <MessageCircleQuestion size={16} className="text-white" />
                        </StatIcon>
                    }
                    label="Export Report"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <MetricCard 
                title="Total Shares"
                value="2,847"
                subtitle="Daily Average"
                change={{ value: "12%", positive: true }}
                metric="shares"
                icon={
                  <StatIcon color="purple">
                    <Share size={16} className="text-purple-dark" />
                  </StatIcon>
                }
              />
              
              <MetricCard 
                title="Impression Generated"
                value="1.2M"
                subtitle="Daily Average"
                change={{ value: "12%", positive: true }}
                metric="views"
                icon={
                  <StatIcon color="green">
                    <BarChart size={16} className="text-green-600" />
                  </StatIcon>
                }
              />
              
              <MetricCard 
                title="Engagement Rate"
                value="4.8%"
                subtitle="Daily Average"
                change={{ value: "-2.1%", positive: false }}
                metric="avg rate"
                icon={
                  <StatIcon color="red">
                    <Heart size={16} className="text-red-600" />
                  </StatIcon>
                }
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ChartSection title="Sharing Activity Trend" chartType="area" />
              <ChartSection title="Engagement by Content Type" chartType="bar" />
            </div>
            
            <div className="mb-6">
              <TeamTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
