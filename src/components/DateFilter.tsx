
import { Calendar } from 'lucide-react';

interface DateFilterProps {
  label: string;
}

const DateFilter: React.FC<DateFilterProps> = ({ label }) => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
      <Calendar size={16} />
      <span>{label}</span>
    </button>
  );
};

export default DateFilter;
