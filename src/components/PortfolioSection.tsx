"use client";

import { motion } from "framer-motion";

import AnimatedSection from "./AnimatedSection";

const projects = [
  { title: "Luxe Fashion", category: "E-Commerce", color: "from-purple-900/40 to-primary/30" },
  { title: "FinCore Dashboard", category: "Web App", color: "from-blue-900/40 to-primary/30" },
  { title: "Vibe Social", category: "Mobile App", color: "from-pink-900/40 to-primary/30" },
  { title: "GreenTech", category: "Branding", color: "from-emerald-900/40 to-primary/30" },
  { title: "Artisan Studio", category: "UI/UX Design", color: "from-orange-900/40 to-primary/30" },
  { title: "CryptoVault", category: "Web App", color: "from-cyan-900/40 to-primary/30" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 md:py-32 bg-gradient-section">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Our Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Selected <span className="text-gradient">Projects</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group bg-card border border-white/5 shadow-2xl"
            >
              {/* Background with Gradient and Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />

              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground/80 text-xs font-medium tracking-widest uppercase mb-2 backdrop-blur-sm inline-block px-2 py-1 rounded bg-white/10 border border-white/10">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-primary rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white border border-white/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
