import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

interface TechGridProps {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function TechGrid({ stack, onAdd, onRemove, onRemoveAll }: TechGridProps) {
  // The full list of technologies, loaded from the JSON file
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  // True while the JSON file is being fetched
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => setTechnologies(data))
      .finally(() => setIsLoading(false));
  }, []);


  function isInStack(id: string) {
    return stack.some((item) => item.id === id);
  }

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* Technology cards */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24 lg:col-span-1">
            <span className="loading loading-spinner loading-lg text-pink-500" />
            <span className="ml-3 text-gray-500">Loading technologies...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                isAdded={isInStack(technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}

        {/* Your Stack sidebar */}
        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}

export default TechGrid;
