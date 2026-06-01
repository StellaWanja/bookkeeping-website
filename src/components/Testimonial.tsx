import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { TESTIMONIALS } from "../data";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-alabaster relative border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Big quote icon */}
        <div className="flex justify-center mb-8 text-black/30">
          <Quote className="w-10 h-10 rotate-180" />
        </div>
        {/* Typographic Quote Carousel Frame */}
        <div className="relative min-h-55 flex items-center justify-center select-none">
          <AnimatePresence mode="wait">
            <motion.div
              id={`quote-slide-${currentIndex}`}
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Quote text written in Cormorant Garamond */}
              <p className="italic text-xl md:text-2xl text-black leading-relaxed max-w-2xl mx-auto">
                {TESTIMONIALS[currentIndex].quote}
              </p>

              {/* Author name and credentials */}
              <div className="border-t border-black/10 pt-6 inline-block">
                <span className="font-extrabold text-sm text-black uppercase tracking-wider block">
                  {TESTIMONIALS[currentIndex].author}
                </span>
                <span className="text-xs uppercase text-black/80 font-semibold tracking-widest block mt-1">
                  {TESTIMONIALS[currentIndex].role} —{" "}
                  {TESTIMONIALS[currentIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

         {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button
            id="testimonial-prev"
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                id={`testimonial-dot-${idx}`}
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'bg-black w-5' : 'bg-black/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next"
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;
