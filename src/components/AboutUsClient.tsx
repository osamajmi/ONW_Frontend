"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Trophy, Users, Star, Calendar } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface AboutData {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  stats: Stat[];
}

export default function AboutUsClient({ data }: { data: AboutData }) {
  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("project")) return <Trophy className="text-primary w-6 h-6 mb-2" />;
    if (l.includes("client")) return <Star className="text-primary w-6 h-6 mb-2" />;
    if (l.includes("year") || l.includes("experience")) return <Calendar className="text-primary w-6 h-6 mb-2" />;
    return <Users className="text-primary w-6 h-6 mb-2" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6 uppercase tracking-wider"
          >
            <Sparkles size={12} />
            About Our Agency
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {data.title || "Crafting Digital"}
            <br />
            <span className="text-gradient">{data.subtitle || "Excellence"}</span>
          </motion.h1>
        </div>

        {/* Content & Stats grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start max-w-6xl mx-auto mb-24">
          <AnimatedSection className="space-y-6">
            <h3 className="text-2xl font-bold font-display">Who We Are</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.description1 ||
                "We are a team of designers, developers, and strategists who build premium digital products. Every pixel matters. Every interaction counts."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {data.description2 ||
                "From concept to launch, we partner with ambitious brands to create experiences that inspire and convert."}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-6">
            {data.stats?.map((stat, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-border/40 hover-lift flex flex-col items-center text-center"
              >
                {getIcon(stat.label)}
                <span className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* Our Values section */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we build and how we partner with our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="glass p-8 rounded-2xl border border-border/40 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Star size={24} />
              </div>
              <h4 className="font-display text-xl font-bold mb-3">Uncompromising Quality</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't cut corners. We obsess over the details, clean code, design fidelity, and smooth animations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glass p-8 rounded-2xl border border-border/40 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Sparkles size={24} />
              </div>
              <h4 className="font-display text-xl font-bold mb-3">Constant Innovation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology moves fast. We continuous evolve our stack and methodologies to build modern experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="glass p-8 rounded-2xl border border-border/40 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Users size={24} />
              </div>
              <h4 className="font-display text-xl font-bold mb-3">Human-Centric Approach</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At the end of the day, we design for people. User experience is at the core of all our technical decisions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
