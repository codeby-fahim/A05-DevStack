import Banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <div className="flex justify-between container mx-auto py-20">
      <div className="flex flex-col justify-around">
        <div>
          <h2 className="text-6xl font-bold">
          Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </h2>
        <p className="text-xl mt-3">
          Explore frontend, backend, database, and tooling options,<br/> compare them
          side by side, and put together the stack that fits your<br/> next project.
        </p>
        </div>
        <div className="flex gap-2">
          <button className="py-2.5 px-6 rounded-[5px] text-white font-medium bg-linear-to-r from-[#F97316] to-[#EC4899] hover:opacity-90 transition-opacity duration-200 cursor-pointer">
            Explore Technologies
          </button>
          <button className=" py-2.5 px-6 font-medium border border-b-gray-300 rounded-[5px] hover:opacity-70   cursor-pointer">Learn More</button>
        </div>
      </div>
      <div>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
