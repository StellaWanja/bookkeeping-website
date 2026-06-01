import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/PreLoader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

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

  const scrollToContact = () => {
    const footerElement = document.getElementById("app-footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });

      // Focus on the specific contact details inside the footer
      const contactBlock = document.getElementById("footer-contact-details");
      if (contactBlock) {
        // Apply temporary highlight container states to guide the eye
        contactBlock.classList.add(
          "bg-[#1A1A1B]",
          "transition-all",
          "duration-700",
        );
        setTimeout(() => {
          contactBlock.classList.remove(
            "bg-[#1A1A1B]",
          );
        }, 2500);
      }
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main App Content revealed once loading finishes */}
      <div
        className={`transition-opacity duration-1000 ease-out ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header onContactClick={scrollToContact} />

        <main id="main-landing-content">
          <Hero onContactClick={scrollToContact} />
          <LogoMarquee />
          <Services />
          <AboutUs />
          <Timeline />
          <Testimonial />
        </main>
        <Footer
          onContactClick={scrollToContact}
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.8s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export default App;
