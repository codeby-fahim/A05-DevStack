import { use } from "react";
import type { ITechnologyType } from "../../Type/TechnologyType";

interface TechnologyFetchProps{
  technologyPromise: Promise<ITechnologyType[]>;
}
const Technology = ({technologyPromise}:TechnologyFetchProps) => {
  const technology = use(technologyPromise);
  return (
    <div className="container mx-auto my-10 py-5">
      <div className="mb-10">
        <h2 className="text-4xl font-bold mb-2">Explore the <span className="text-[#EC4899]">Technologies</span></h2>
        <p className="text-ms">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="flex justify-between">
        <div>
          {
            technology.map((tech)=>{
              return (
                <div>{tech.name}</div>
              )
            })
          }
        </div>
        <div>
          <h2>remove section</h2>
        </div>
      </div>
    </div>
  );
};

export default Technology;