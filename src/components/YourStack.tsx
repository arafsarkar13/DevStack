import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Conditional rendering: empty state vs. list of selected items */}
      {stack.length === 0 ? (
        <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-gray-200 text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-8 w-8"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {technology.name}
                </p>
                <p className="text-xs text-gray-400">{technology.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${technology.name} from stack`}
                onClick={() => onRemove(technology.id)}
                className="btn btn-ghost btn-square btn-sm text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={onRemoveAll}
            className="btn btn-outline mt-2 w-full rounded-lg border-red-200 text-sm font-medium text-red-500 hover:border-red-300 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}

export default YourStack;
