import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/PreLoader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Prevent background scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div id="app-root-container" className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main App Content revealed once loading finishes */}
      <div
        className={`transition-opacity duration-1000 ease-out ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header onContactClick={() => setIsContactOpen(true)} />

        <main id="main-landing-content">
          <Hero onContactClick={() => setIsContactOpen(true)} />
          <LogoMarquee />
          <Services />
          <AboutUs />
        </main>
      </div>
    </div>
  );
}

export default App;
