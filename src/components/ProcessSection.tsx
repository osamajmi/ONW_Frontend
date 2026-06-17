import AnimatedSection from "./AnimatedSection";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover & Strategy",
    desc: "We dive deep into your brand, analyze competitors, and structure your roadmap.",
    icon: Search,
    deliverables: ["Market Research", "Competitor Audit", "Scope Definition", "Architecture Map"]
  },
  {
    num: "02",
    title: "Design & Prototyping",
    desc: "We craft custom wireframes and stunning high-fidelity visual interfaces.",
    icon: PenTool,
    deliverables: ["User Journeys", "UI/UX Styleguides", "Figma Prototypes", "Responsive Layouts"]
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "We write clean, high-performance code integrating custom server logic.",
    icon: Code2,
    deliverables: ["Next.js & React Frontend", "Express API Middleware", "MongoDB Storage", "QA Rigorous Audits"]
  },
  {
    num: "04",
    title: "Launch & Optimization",
    desc: "We deploy onto optimized hosting and set up search console indexation.",
    icon: Rocket,
    deliverables: ["SEO Setup & Analytics", "Robots.txt & Sitemap", "Server CDN Cache", "Continuous Support"]
  },
];

const ProcessSection = () => (
  <section id="process" className="py-24 md:py-32 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50vw] h-[20vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection className="text-center mb-20">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">How We Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mt-4">
          A structured blueprint engineered to take ideas from conceptual strategy to highly optimized production launches.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <AnimatedSection key={step.num} delay={i * 0.15}>
              <div className="relative glow-card rounded-2xl p-8 group h-full cursor-default flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <ul className="text-left mt-6 space-y-2 border-t border-border/40 pt-4 text-xs text-muted-foreground/80">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-background border border-border/80 text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all duration-300 shadow-md">
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;
