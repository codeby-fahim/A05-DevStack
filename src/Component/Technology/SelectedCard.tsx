import type { ITechnologyType } from "../../Type/TechnologyType";

interface SelectedCardProps {
  selectedStack: ITechnologyType[];
  handleRemoveFromStack: (id: string | number) => void;
  handleRemoveAll: () => void;
}

const SelectedCard = ({
  selectedStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SelectedCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <span className="text-xs text-gray-400 font-medium">
          {selectedStack.length} Technology Selected
        </span>
      </div>

      {selectedStack.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">
          Your Stack is Empty
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="space-y-3 mb-6">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">{item.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-red-500 text-lg font-bold px-1 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-medium rounded-xl text-sm transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedCard;
