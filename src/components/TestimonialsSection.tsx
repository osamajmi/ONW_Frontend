"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialItem {
  _id?: string;
  name: string;
  role: string;
  company?: string;
  feedback?: string;
  text?: string; // Fallback
  rating?: number;
}

const fallbackTestimonials: TestimonialItem[] = [
  { name: "Sarah Chen", role: "CEO", company: "Luxe Fashion", feedback: "ON Next Web transformed our online presence. The attention to detail and creative vision exceeded every expectation." },
  { name: "Marcus Rivera", role: "Founder", company: "FinCore", feedback: "Working with this team was seamless. They delivered a product that our users genuinely love using every day." },
  { name: "Amara Osei", role: "CMO", company: "GreenTech Energy", feedback: "From branding to launch, the quality was impeccable. They truly understand how to build for the modern web." },
  { name: "Martin", role: "Co-Founder & Product Lead", company: "portal360.ai", feedback: "ON Next Web delivered an outstanding AI analytics portal. Their engineering precision, quick execution, and Next.js development expertise took our platform launch to the next level." },
  { name: "Rasim Khan", role: "Tech Lead", company: "revoft.com", feedback: "The team at ON Next Web built a robust custom accounting portal that optimized our invoice workflows. Their technical clarity and clean code architecture are commendable." },
  { name: "Lawrence", role: "Operations Director", company: "importexporttv.com", feedback: "Excellent streaming platform execution! ON Next Web solved our latency bottlenecks using AWS Cloudfront configurations. Lawrence and the logistics team are highly satisfied." },
  { name: "Kai Chain", role: "Managing Director", company: "MPC Markets Mosaic", feedback: "Our clients love the new Mosaic platform interface. The speed of the live price updates and clean charts designed by ON Next Web have doubled our platform engagement." },
  { name: "Paul", role: "Founder", company: "FitFlow: Home Workouts App", feedback: "We hired ON Next Web to build our workout app on iOS and Android. Paul and the user base have been absolutely wowed by the smooth Framer Native animations and secure firebase authentication." },
  { name: "David", role: "Growth Manager", company: "SaaS Growth Co", feedback: "Their local marketing and Google Ads optimization strategy doubled our lead pipeline. A highly data-driven approach that is rare among digital marketing agencies." }
];

const TestimonialsSection = ({ initialTestimonials }: { initialTestimonials?: TestimonialItem[] }) => {
  const [current, setCurrent] = useState(0);
  const displayTestimonials = initialTestimonials && initialTestimonials.length >= 9 ? initialTestimonials : fallbackTestimonials;

  const prev = () => setCurrent((c) => (c === 0 ? displayTestimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === displayTestimonials.length - 1 ? 0 : c + 1));

  if (displayTestimonials.length === 0) return null;

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
                "{displayTestimonials[current].feedback || displayTestimonials[current].text}"
              </p>
              <p className="font-display font-semibold text-foreground">{displayTestimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">
                {displayTestimonials[current].role}
                {displayTestimonials[current].company ? `, ${displayTestimonials[current].company}` : ""}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
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
