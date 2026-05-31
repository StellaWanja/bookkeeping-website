import { useScroll } from "motion/react";
import { useRef } from "react";
import WordHighlight from "./about-us/WordHighlight";
import { ABOUT_US_TEXT } from "../data.ts";

function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use Motion's scroll hook on the containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = ABOUT_US_TEXT.split(" ");

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative h-[220vh] bg-[#F4F3EF] w-full"
    >
      {/* Sticky viewport container covering 100vh during scroll trail pinning */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-black/10">
        {/* Background elegant wireframe elements */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-black/5 rounded-full -translate-y-12 translate-x-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-125 h-125 border border-black/5 rounded-full translate-y-36 -translate-x-36 pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto px-6 md:px-12 text-center relative z-10">
          {/* Oversized centered text block with scroll-to-fill interactive mapping */}
          <p className="font-extrabold text-[#1A1A1B] text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.3] text-left">
            {words.map((word, idx) => {
              // Map individual progress elegantly
              const activeStart = 0.0;
              const activeEnd = 0.95;
              const activeRange = activeEnd - activeStart;

              // Calculate starts and ends based on word indices to map across active scroll region
              // Overlapping by 1.5 words to make the text highlight flow seamlessly and fluidly
              const startFraction =
                activeStart + (idx / words.length) * activeRange;
              const endFraction =
                activeStart + ((idx + 1.5) / words.length) * activeRange;

              return (
                <WordHighlight
                  key={idx}
                  word={word}
                  startFraction={startFraction}
                  endFraction={endFraction}
                  scrollProgress={scrollYProgress}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
