"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, Luxe Fashion", text: "ON Next Web transformed our online presence. The attention to detail and creative vision exceeded every expectation." },
  { name: "Marcus Rivera", role: "Founder, FinCore", text: "Working with this team was seamless. They delivered a product that our users genuinely love using every day." },
  { name: "Amara Osei", role: "CMO, GreenTech", text: "From branding to launch, the quality was impeccable. They truly understand how to build for the modern web." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Client <span className="text-gradient">Voices</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-10 md:p-14 text-center relative"
            >
              <Quote className="text-primary/20 mx-auto mb-6" size={40} />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
