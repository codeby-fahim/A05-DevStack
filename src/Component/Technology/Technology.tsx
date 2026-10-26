import { use, useEffect, useState } from "react";
import type { ITechnologyType } from "../../Type/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import SelectedCard from "./SelectedCard";
import { Bounce, toast } from "react-toastify";

interface TechnologyFetchProps {
  technologyPromise: Promise<ITechnologyType[]>;
}

const STORAGE_KEY = "devstack-selected";

const getSavedStack = (): ITechnologyType[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? (parsed as ITechnologyType[]) : [];
  } catch {
    return [];
  }
};

const Technology = ({ technologyPromise }: TechnologyFetchProps) => {
  const technology = use(technologyPromise);

  const [selectedStack, setSelectedStack] =
    useState<ITechnologyType[]>(getSavedStack);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedStack));
    } catch {
      // Storage can be unavailable (private mode / quota); the app still works.
    }
  }, [selectedStack]);

  const handleAddToStack = (tech: ITechnologyType) => {
    const isExist = selectedStack.find((item) => item.id === tech.id);
    if (!isExist) {
      setSelectedStack([...selectedStack, tech]);
    }
    toast.success("Successfully Added to Stack", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleRemoveFromStack = (id: string | number) => {
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updatedStack);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section
      id="technologies"
      className="container mx-auto scroll-mt-24 px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mb-8 sm:mb-10">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3">
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

        <div className="order-first lg:order-none lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <SelectedCard
              selectedStack={selectedStack}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
