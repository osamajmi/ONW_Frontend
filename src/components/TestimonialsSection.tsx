"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

interface TestimonialItem {
  _id?: string;
  name: string;
  role: string;
  company?: string;
  feedback?: string;
  text?: string;
  rating?: number;
}

const TestimonialsSection = ({ initialTestimonials }: { initialTestimonials?: TestimonialItem[] }) => {
  const verifiedTestimonials = initialTestimonials && initialTestimonials.length > 0 ? initialTestimonials : [];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? verifiedTestimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === verifiedTestimonials.length - 1 ? 0 : c + 1));

  if (verifiedTestimonials.length > 0) {
    return (
      <section className="py-24 md:py-32 bg-gradient-section">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Client Feedback</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Verified <span className="text-gradient">Testimonials</span>
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
                className="glass rounded-2xl p-10 md:p-14 text-center relative border border-border/40"
              >
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                  "{verifiedTestimonials[current].feedback || verifiedTestimonials[current].text}"
                </p>
                <p className="font-display font-semibold text-foreground">{verifiedTestimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">
                  {verifiedTestimonials[current].role}
                  {verifiedTestimonials[current].company ? `, ${verifiedTestimonials[current].company}` : ""}
                </p>
              </motion.div>
            </AnimatePresence>

            {verifiedTestimonials.length > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  &larr;
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Neutral CTA when no verified client testimonials exist
  return (
    <section className="py-24 md:py-32 bg-gradient-section border-t border-b border-border/30">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-semibold mb-6 uppercase tracking-wider">
            <MessageSquare size={14} />
            Let's Collaborate
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Have a Project in <span className="text-gradient">Mind?</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you're building and we'll help you plan the right technical solution for your business.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-12">
            <div className="glass rounded-2xl p-6 border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground mb-1">Clear Technical Scoping</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Detailed architecture proposal and timeline before coding begins.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground mb-1">Full Source Ownership</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                100% intellectual property ownership of your custom code and assets.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground mb-1">Speed &amp; SEO Standards</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Engineered for fast load speeds, accessibility, and search visibility.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg glow-accent hover:glow-accent-strong transition-all duration-300 group cursor-pointer"
            >
              Start a Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
