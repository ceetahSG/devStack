import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../../type/technology';
import SelectedTechnologiesCard from '../TechnologyCard/SelectedTechnologiesCard';
import { toast } from 'react-toastify';

interface SelectedTechnologiesProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesProps) => {
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.warn('All technologies removed from stack');
  };
  if (selectedTechnologies.length === 0) {
    return (
      <div className="border border-gray-200 rounded-lg p-4 sm:p-5">
        <h2 className="text-[#0F172A] font-extrabold text-[16px] mb-2">Your Stack</h2>
        <p className="text-[#64748B] text-[12px] mb-3">No technologies selected yet.</p>
        <button
          className="btn btn-neutral btn-dash w-full rounded-2xl px-4 py-8 text-[12px] text-[#475569] whitespace-nowrap
        "
        >
          Your Stack Is Empty
        </button>
      </div>
    );
  } else if (selectedTechnologies.length === 1) {
  }
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-4 sm:p-5">
        <h2 className="text-[#0F172A] font-extrabold text-[16px] mb-2">Your Stack</h2>
        <p className="text-[#64748B] text-[12px] mb-3">
          {selectedTechnologies.length} technologies selected
        </p>
        {selectedTechnologies.map((technology) => (
          <SelectedTechnologiesCard
            technology={technology}
            key={technology.id}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        ))}
        <button onClick={handleRemoveAll} className="btn btn-outline btn-error w-full rounded-xl">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechnologies;
