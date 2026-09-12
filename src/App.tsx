import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.tsx";
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";

function App() {
  // The list of technologies the user has picked for their stack.
  // This lives in App because both TechGrid (adding) and YourStack
  // (removing) need to read and update it.
  const [stack, setStack] = useState<Technology[]>([]);

  function handleAdd(technology: Technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function handleRemove(id: string) {
    const technology = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechGrid
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
