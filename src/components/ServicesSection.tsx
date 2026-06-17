"use client";

import { motion } from "framer-motion";

import AnimatedSection from "./AnimatedSection";
import { Globe, Smartphone, Palette, TrendingUp, Sparkles } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance websites and web apps built with modern technologies." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences that users love." },
  { icon: Palette, title: "UI/UX Design", desc: "Research-driven design that balances beauty with usability." },
  { icon: TrendingUp, title: "SEO & Digital Marketing", desc: "Data-driven strategies that drive traffic and grow revenue." },
  { icon: Sparkles, title: "Branding", desc: "Visual identities that tell your story and stand out in the market." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Smart Web & App <span className="text-gradient">Solutions</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-8 h-full group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
