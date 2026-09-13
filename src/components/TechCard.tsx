import type { Technology } from "../types/technology";

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechCard({ technology, isAdded, onAdd }: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  // Work out the button's text and classes BEFORE the JSX below.
  // This keeps the return statement simple and easy to read.
  let buttonClass = "btn mt-4 rounded-lg border-none text-sm font-medium ";
  let buttonText = "Add to Stack";

  if (isAdded) {
    // DaisyUI's .btn sets `pointer-events: none` on disabled buttons,
    // which would also block :hover from ever being detected. We add
    // "!pointer-events-auto" to override that, so the browser still
    // notices the mouse hovering here (needed for the cursor AND for
    // the card's hover border below).
    buttonClass +=
      "!pointer-events-auto cursor-not-allowed bg-gray-100 text-gray-400";
    buttonText = "✓ Added to Stack";
  } else {
    buttonClass += "bg-gray-900 text-white hover:bg-gray-800";
  }

  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-colors has-[button:disabled:hover]:border-red-300">
      {/* Icon + badge */}
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} icon`} className="h-9 w-9" />
        <span className="badge badge-ghost rounded-full bg-gray-50 px-3 text-xs font-medium text-gray-500">
          {badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-500">{description}</p>

      {/* Category, difficulty, rating */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
        <span className="badge rounded-full border-none bg-gray-100 px-3 py-2 font-medium text-gray-600">
          {category}
        </span>
        <span className="text-gray-500">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-gray-700">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      {/* Add to Stack button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={buttonClass}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default TechCard;
