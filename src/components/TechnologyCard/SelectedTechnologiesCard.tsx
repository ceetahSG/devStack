import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../../type/technology';
import { toast } from 'react-toastify';
import { RxCross1 } from 'react-icons/rx';
interface SelectedTechnologiesCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTechnologiesCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesCardProps) => {
  const handleRemoveFromStack = () => {
    const updatedTechnologies = selectedTechnologies.filter((t) => t.id !== technology.id);
    setSelectedTechnologies(updatedTechnologies);
    toast.warn(`${technology.name} removed from stack`);
  };
  return (
    <div className="my-4 flex items-center justify-between gap-3 rounded-lg border border-gray-200 p-3 sm:my-5 sm:gap-5 sm:p-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        <img src={technology.icon} alt={technology.name} className="w-8 h-auto" />
        <div className="min-w-0">
          <h2 className="truncate text-[10px] font-bold text-[#0F172A] sm:text-xs">
            {technology.name}
          </h2>
          <p className="text-[8px] font-bold text-[#64748B] sm:text-[10px]">
            {technology.category}
          </p>
        </div>
      </div>
      <button
        onClick={handleRemoveFromStack}
        className="shrink-0 p-1 text-2xl font-extralight sm:text-4xl"
        aria-label={`Remove ${technology.name}`}
      >
        <RxCross1 aria-hidden="true" />
      </button>
    </div>
  );
};
export default SelectedTechnologiesCard;
