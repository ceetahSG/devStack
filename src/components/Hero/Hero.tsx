import Banner from '../../assets/banner-stack.png';
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-4 text-black container mx-auto">
      <div className="w-full max-w-[555px]">
        <h2 className="text-4xl md:text-6xl font-extrabold font-sans mb-7.5">
          Build Your Ideal{' '}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="text-[18px] text-[#6B7280] max-w-125 mb-6">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] btn text-white font-semibold rounded-lg">
            Explore Technologies
          </button>
          <button className="btn rounded-lg font-semibold px-11">Learn more</button>
        </div>
      </div>
      <img src={Banner} alt="Banner" className="max-w-full" />
    </div>
  );
};

export default Hero;
