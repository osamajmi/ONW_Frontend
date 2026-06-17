"use client";

import { motion } from "framer-motion";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Instagram", href: "#" },
];

const Footer = () => (
  <footer className="relative pt-24 md:pt-32 pb-12 bg-surface overflow-hidden">
    <div className="container mx-auto px-6">
      {/* Giant brand name */}
      <AnimatedSection>
        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none tracking-tighter text-foreground/5 select-none">
          ON Next Web
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-12 mt-12 md:-mt-8 relative z-10">
        {/* Contact */}
        <AnimatedSection>
          <p className="font-display text-lg font-semibold mb-4 text-foreground">Contact</p>
          <div className="space-y-3 text-muted-foreground text-sm">
            <a href="mailto:info.onnextweb@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> info.onnextweb@gmail.com
            </a>
            <a href="tel:+918765077474" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91 8765077474
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>C-25 Abul Fazal, Jamia Nagar, Okhla, New Delhi – 110025</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Navigation */}
        <AnimatedSection delay={0.1}>
          <p className="font-display text-lg font-semibold mb-4 text-foreground">Navigation</p>
          <div className="space-y-2">
            {["About", "Services", "Portfolio", "Process", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Socials */}
        <AnimatedSection delay={0.2}>
          <p className="font-display text-lg font-semibold mb-4 text-foreground">Follow Us</p>
          <div className="space-y-2">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                {s.name}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg text-foreground">
          ON <span className="text-gradient">Next</span> Web
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} ON Next Web. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
