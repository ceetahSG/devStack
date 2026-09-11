import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../../type/technology';
import SelectedTechnologiesCard from '../TechnologyCard/SelectedTechnologiesCard';

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
  };
  if (selectedTechnologies.length === 0) {
    return (
      <div className="border border-gray-200 rounded-lg p-5">
        <h2 className="text-[#0F172A] font-extrabold text-[16px] mb-2">Your Stack</h2>
        <p className="text-[#64748B] text-[12px] mb-3">No technologies selected yet.</p>
        <button className="btn btn-neutral btn-dash text-[12px] px-16 py-8 rounded-2xl text-[#475569]">
          Your Stack Is Empty
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-5">
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
        <button onClick={handleRemoveAll} className="btn btn-outline btn-error rounded-xl px-20">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechnologies;
