import { use, useState } from 'react';
import type { ITechnology } from '../../type/technology';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import SelectedTechnologies from './SelectedTechnologies';

interface TechnologyProps {
  technologyPromise: Promise<ITechnology[]>;
}
const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);
  const [technologyLIst, setTechnologyList] = useState<ITechnology[]>([]);
  console.log(technologyLIst, 'from technology list');

  //   console.log(technologies);
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-[#0F172A] font-extrabold text-[36px] mb-2">
        Explore the{' '}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748B] mb-10">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {technologies.map((t) => (
            <TechnologyCard
              technology={t}
              key={t.id}
              technologyList={technologyLIst}
              setTechnologyList={setTechnologyList}
            />
          ))}
        </div>
        <SelectedTechnologies
          selectedTechnologies={technologyLIst}
          setSelectedTechnologies={setTechnologyList}
        />
      </div>
    </div>
  );
};

export default Technologies;
