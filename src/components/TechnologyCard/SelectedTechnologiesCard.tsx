import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../../type/technology';
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
  };
  return (
    <div className="border border-gray-200 rounded-lg p-5 my-5 flex items-center gap-5 justify-between">
      <div className="flex items-center gap-5">
        <img src={technology.icon} alt={technology.name} className="w-8 h-auto" />
        <div>
          <h2 className="text-[#0F172A] font-bold text-[10px]">{technology.name}</h2>
          <p className="text-[#64748B] text-[6px] font-bold">{technology.category}</p>
        </div>
      </div>
      <button onClick={handleRemoveFromStack} className="font-extralight text-4xl">
        <span aria-hidden="true">X</span>
      </button>
    </div>
  );
};
export default SelectedTechnologiesCard;
