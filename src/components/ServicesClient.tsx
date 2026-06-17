"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import * as Icons from "lucide-react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const getIconComponent = (iconName: string) => {
  // @ts-ignore
  const IconComp = Icons[iconName];
  return IconComp || Icons.Globe;
};

export default function ServicesClient({ services }: { services: ServiceItem[] }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[110px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6 uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Our Core Competencies
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Smart Web & App
            <br />
            <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We design, develop, and scale high-performance digital products engineered to solve business challenges.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {services.map((service, idx) => {
            const Icon = getIconComponent(service.icon);
            return (
              <AnimatedSection
                key={service.title}
                delay={idx * 0.08}
                className="glow-card rounded-2xl p-8 flex flex-col justify-between group cursor-default h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {service.features && service.features.length > 0 && (
                  <div className="space-y-2 mt-auto border-t border-border/40 pt-4">
                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5 group-hover:text-foreground transition-colors duration-300">
                          <ShieldCheck size={12} className="text-primary flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Call To Action */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mt-12 bg-secondary/10 border border-border/60 rounded-3xl p-10 md:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8">
            Partner with us to transform your ideas into custom software systems and scalable applications.
          </p>
          <div className="flex justify-center">
            <MagneticButton
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg glow-accent hover:glow-accent-strong transition-all duration-300 group cursor-pointer"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
