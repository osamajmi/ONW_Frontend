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
    const className = "text-primary w-5 h-5";
    if (l.includes("project")) return <Trophy className={className} />;
    if (l.includes("client")) return <Star className={className} />;
    if (l.includes("year") || l.includes("experience")) return <Calendar className={className} />;
    return <Users className={className} />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
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
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="glow-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {getIcon(stat.label)}
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mt-2 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
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
            <AnimatedSection delay={0.1} className="glow-card p-8 rounded-2xl group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Star size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">Uncompromising Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't cut corners. We obsess over the details, clean code, design fidelity, and smooth animations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glow-card p-8 rounded-2xl group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Sparkles size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">Constant Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology moves fast. We continuous evolve our stack and methodologies to build modern experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="glow-card p-8 rounded-2xl group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Users size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">Human-Centric Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At the end of the day, we design for people. User experience is at the core of all our technical decisions.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Leadership & Credentials (E-E-A-T) */}
        <div className="max-w-6xl mx-auto mt-24 border-t border-border/40 pt-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection className="space-y-6">
              <span className="text-primary text-xs uppercase font-bold tracking-widest">Our Leadership</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Founder's Story</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ON Next Web was founded by **MD Osama Khan**, a seasoned systems architect and technology consultant with a vision to build high-performance web systems for ambitious startups. Having spent years fixing sluggish template-based websites that failed under high traffic, Osama set out to build an agency focused entirely on custom, clean-coded Next.js systems.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Today, our engineers combine deep technical capabilities in React, Node.js, and cloud deployments with custom organic search strategies. We do not build throwaway templates; we code resilient digital assets from the ground up, guaranteeing speed, security, and full ownership access.
              </p>
              <div className="flex items-center gap-4 bg-secondary/10 p-5 rounded-2xl border border-border/60 mt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary shrink-0">
                  OK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">MD Osama Khan</h4>
                  <p className="text-xs text-muted-foreground">Chief Technologist & Architect, ON Next Web</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-6">
              <span className="text-primary text-xs uppercase font-bold tracking-widest">Credentials & Trust</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Certifications & Standards</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Next.js Partner Network", desc: "Certified partners specializing in Next.js speed configurations.", icon: <Sparkles className="w-5 h-5 text-primary" /> },
                  { title: "AWS Solutions Architect", desc: "Engineers certified in secure cloud hosting setup.", icon: <Trophy className="w-5 h-5 text-primary" /> },
                  { title: "ISO 9001:2015 Quality", desc: "International standard for digital delivery systems.", icon: <Users className="w-5 h-5 text-primary" /> },
                  { title: "Google Analytics Certified", desc: "Qualified search engine analysts monitoring user retention.", icon: <Star className="w-5 h-5 text-primary" /> }
                ].map((cred, i) => (
                  <div key={i} className="bg-secondary/15 border border-border/60 hover:border-primary/20 p-5 rounded-xl transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      {cred.icon}
                    </div>
                    <h4 className="text-xs font-bold text-foreground mb-1">{cred.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
