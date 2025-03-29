
interface ExportButtonProps {
  label: string;
  icon?: React.ReactNode;
}

const ExportButton: React.FC<ExportButtonProps> = ({ label, icon }) => {
  return (
    <button className="flex items-center gap-1 px-4 py-1 bg-[#6C68C0] hover:bg-purple text-white rounded-md transition-colors font-normal">
        {/* <div className="flex items-center gap-2 text-gray-600 text-sm font-medium"> */}
            {icon}
            <span>{label}</span>
        {/* </div> */}
    </button>
  );
};

export default ExportButton;
