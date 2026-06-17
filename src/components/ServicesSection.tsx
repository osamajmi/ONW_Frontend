"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import * as Icons from "lucide-react";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const fallbackServices: ServiceItem[] = [
  { icon: "Globe", title: "Web Development", description: "High-performance websites and web apps built with modern technologies." },
  { icon: "Smartphone", title: "Mobile App Development", description: "Native and cross-platform mobile experiences that users love." },
  { icon: "Palette", title: "UI/UX Design", description: "Research-driven design that balances beauty with usability." },
  { icon: "Cpu", title: "Custom Software Development", description: "Tailored software systems built to solve your unique business challenges." },
  { icon: "TrendingUp", title: "SEO & Digital Marketing", description: "Data-driven strategies that drive traffic and grow revenue." },
  { icon: "Sparkles", title: "Branding", description: "Visual identities that tell your story and stand out in the market." },
];

const getIconComponent = (iconName: string) => {
  // @ts-ignore
  const IconComp = Icons[iconName];
  // Fallback to Globe if not found
  return IconComp || Icons.Globe;
};

const ServicesSection = ({ initialServices }: { initialServices?: ServiceItem[] }) => {
  const displayServices = initialServices && initialServices.length > 0 ? initialServices : fallbackServices;

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Smart Web & App <span className="text-gradient">Solutions</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, i) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glow-card rounded-2xl p-8 h-full group cursor-default flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-primary group-hover:rotate-12 transition-transform duration-300" size={24} />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                  {service.features && service.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-6 border-t border-border/20 pt-4">
                      {service.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-secondary/40 text-muted-foreground border border-border/40">
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
