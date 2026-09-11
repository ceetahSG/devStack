import Banner from '../../assets/banner-stack.png';
const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-8 text-black sm:px-6 sm:py-12 lg:flex-row lg:gap-10 lg:px-8">
      <div className="w-full max-w-[555px]">
        <h2 className="mb-6 font-sans text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Build Your Ideal{' '}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="text-[18px] text-[#6B7280] max-w-125 mb-6">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button className="btn w-full rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] text-white sm:w-auto">
            Explore Technologies
          </button>
          <button className="btn w-full rounded-lg px-11 font-semibold sm:w-auto">
            Learn more
          </button>
        </div>
      </div>
      <img src={Banner} alt="Banner" className="w-full max-w-md lg:max-w-[46%]" />
    </div>
  );
};

export default Hero;
