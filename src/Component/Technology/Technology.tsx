import { use, useState } from "react";
import type { ITechnologyType } from "../../Type/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import SelectedCard from "./SelectedCard";

interface TechnologyFetchProps {
  technologyPromise: Promise<ITechnologyType[]>;
}

const Technology = ({ technologyPromise }: TechnologyFetchProps) => {
  const technology = use(technologyPromise);

  const [selectedStack, setSelectedStack] = useState<ITechnologyType[]>([]);

  const handleAddToStack = (tech: ITechnologyType) => {
    const isExist = selectedStack.find((item) => item.id === tech.id);
    if (!isExist) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (id: string | number) => {
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updatedStack);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="container mx-auto my-10 py-5">
      <div className="mb-10">
        <h2 className="text-4xl font-bold mb-2">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h2>
        <p className="text-ms">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {technology.map((tech) => {
            const isSelected = selectedStack.some(
              (item) => item.id === tech.id,
            );
            return (
              <TechnologyCard
                tech={tech}
                key={tech.id}
                handleAddToStack={handleAddToStack}
                isSelected={isSelected}
              />
            );
          })}
        </div>

        <div className="col-span-1">
          <SelectedCard
            selectedStack={selectedStack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
