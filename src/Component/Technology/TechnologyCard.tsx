import type { ITechnologyType } from "../../Type/TechnologyType";

interface TechnologyCardProps {
  tech: ITechnologyType;
}

const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 flex items-center justify-center text-2xl">
          <img src={tech.icon} alt="" />
        </div>

        {tech.badge && (
          <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full">
            {tech.badge}
          </span>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-gray-100 rounded-md font-medium text-gray-700">
              {tech.category}
            </span>
            <span className="px-2.5 py-1 bg-gray-100 rounded-md font-medium text-gray-700">
              {tech.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span> {tech.rating}
          </div>
        </div>

        <button className="w-full py-3 bg-gray-900 hover:bg-black text-white font-medium rounded-xl transition-colors text-sm cursor-pointer">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
