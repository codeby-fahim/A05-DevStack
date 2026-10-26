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
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <span className="text-xs font-medium text-gray-400">
          {selectedStack.length} Technology Selected
        </span>
      </div>

      {selectedStack.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-400">
          Your Stack is Empty
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="mb-6 space-y-3">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 p-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="truncate text-xs text-gray-400">
                      {item.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveFromStack(item.id)}
                  aria-label={`Remove ${item.name} from stack`}
                  className="cursor-pointer px-1 text-lg font-bold text-gray-400 transition-colors hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="w-full cursor-pointer rounded-xl border border-red-200 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedCard;
