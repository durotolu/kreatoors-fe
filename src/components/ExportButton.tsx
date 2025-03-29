
interface ExportButtonProps {
  label: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ label }) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-purple-light hover:bg-purple text-white rounded-md transition-colors font-medium">
      <span>{label}</span>
    </button>
  );
};

export default ExportButton;
