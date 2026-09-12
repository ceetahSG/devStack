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
  // console.log(technologyLIst, 'from technology list');

  //   console.log(technologies);
  return (
    <div className="container mx-auto mt-8 px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div>
        <h2 className="mb-2 text-3xl font-extrabold text-[#0F172A] sm:text-4xl">
          Explore the{' '}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mb-8 text-[#64748B] sm:mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((t) => (
            <TechnologyCard
              technology={t}
              key={t.id}
              technologyList={technologyLIst}
              setTechnologyList={setTechnologyList}
            />
          ))}
        </div>
        <div className="w-full lg:w-70 lg:shrink-0">
          <SelectedTechnologies
            selectedTechnologies={technologyLIst}
            setSelectedTechnologies={setTechnologyList}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
