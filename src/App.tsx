import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/preloader/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-[#F9F8F6] selection:bg-[#4A5D4E] selection:text-[#F9F8F6]"
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
