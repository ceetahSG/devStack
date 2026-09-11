import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../../type/technology';
import { toast } from 'react-toastify';
interface TechnologyCardProps {
  technology: ITechnology;
  technologyList: ITechnology[];
  setTechnologyList: Dispatch<SetStateAction<ITechnology[]>>;
}
const TechnologyCard = ({ technology, technologyList, setTechnologyList }: TechnologyCardProps) => {
  // console.log(technologyList, 'from technology card');
  const handleAddToStack = () => {
    if (technologyList.find((t) => t.id === technology.id)) {
      toast.error('Technology already added to stack');
      return;
    }
    setTechnologyList([...technologyList, technology]);
    toast.success(`${technology.name} added to stack`);
  };
  return (
    <div className="border border-gray-200 rounded-lg p-5 ">
      <div className="flex items-center justify-between my-5">
        <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
        <button
          className={`btn rounded-3xl ${technology.badgeTextColor} ${technology.badgeBgColor}`}
        >
          {technology.badge}
        </button>
      </div>
      <div className="my-10">
        <h2 className="text-[#0F172A] font-bold text-[18px]">{technology.name}</h2>
        <p className="text-[#64748B]">{technology.description}</p>
      </div>
      <div className="flex items-center justify-between my-5">
        <button className=" btn btn-soft text-[#475569] text-[11px] font-medium bg-[#F1F5F9] py-0.5">
          {technology.category}
        </button>
        <p className="text-[#475569] text-[11px] font-medium">{technology.difficulty}</p>
        <p className="font-bold text-[11px]">
          <span aria-hidden="true" className="text-yellow-400 m-2">
            ★
          </span>
          {technology.rating}
        </p>
      </div>
      <button onClick={() => handleAddToStack()} className="btn btn-neutral px-20">
        Add To Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
