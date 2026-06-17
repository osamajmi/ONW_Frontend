"use client";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "80px 80px"
    }} />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
          Digital Studio
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-8"
      >
        We Build
        <br />
        <span className="text-gradient">Digital</span> Experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12"
      >
        Smart web & app solutions crafted with precision.
        Design. Develop. Scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <MagneticButton
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg glow-accent hover:glow-accent-strong transition-all duration-300 group "
        >
          Start a Project
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </MagneticButton>
        <MagneticButton
          href="#portfolio"
          className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300"
        >
          View Our Work
        </MagneticButton>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
