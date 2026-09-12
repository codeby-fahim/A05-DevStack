import { use } from "react";
import type { ITechnologyType } from "../../Type/TechnologyType";
import TechnologyCard from "./TechnologyCard";

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
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {
            technology.map((tech)=>{
              return (
                <TechnologyCard tech={tech}></TechnologyCard>
              )
            })
          }
        </div>
        <div className="col-span-1">
          <h2>remove section</h2>
        </div>
      </div>
    </div>
  );
};

export default Technology;