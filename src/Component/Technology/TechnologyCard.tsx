import type { ITechnologyType } from "../../Type/TechnologyType";

interface TechnologyCardProps {
  tech: ITechnologyType;
  handleAddToStack: (tech: ITechnologyType) => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  tech,
  handleAddToStack,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-2xl">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        {tech.badge && (
          <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-600">
            {tech.badge}
          </span>
        )}
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
          {tech.name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-50 pt-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
              {tech.category}
            </span>
            <span className="rounded-md bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
              {tech.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span> {tech.rating}
          </div>
        </div>

        <button
          onClick={() => handleAddToStack(tech)}
          disabled={isSelected}
          className={`w-full cursor-pointer rounded-xl py-3 text-sm font-medium transition-colors ${
            isSelected
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
              : "bg-gray-900 text-white hover:bg-black"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
