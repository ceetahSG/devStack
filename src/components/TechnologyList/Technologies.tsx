import { use } from 'react';
import type { ITechnology } from '../../type/technology';
import TechnologyCard from '../TechnologyCard/TechnologyCard';

interface TechnologyProps {
  technologyPromise: Promise<ITechnology[]>;
}
const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);
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
      <div className="flex items-start gap-10">
        <div className="w-3/4 grid grid-cols-3 gap-2">
          {technologies.map((t) => (
            <TechnologyCard technology={t} key={t.id} />
          ))}
        </div>
        <div className="w-1/4 border border-gray-200 rounded-lg p-5 ">
          <h2 className="text-[0F172A] font-bold text-[16px]">Your Stack</h2>
          <p className="text-[#475569] text-[12px]">No technologies selected yet.</p>
          <button className="btn btn-neutral btn-dash px-6 py-6 text-[12px]">
            Your Stack Is Empty
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
