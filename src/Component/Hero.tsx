import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left">
          <div>
            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl xl:text-6xl">
              Build Your Ideal{" "}
              <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#technologies"
              className="cursor-pointer rounded-[5px] bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 text-center font-medium text-white transition-opacity duration-200 hover:opacity-90"
            >
              Explore Technologies
            </a>
            <button className="cursor-pointer rounded-[5px] border border-gray-300 px-6 py-2.5 font-medium transition-opacity hover:opacity-70">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm lg:w-1/2 lg:max-w-lg">
          <img
            src={Banner}
            alt="Development stack illustration"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
