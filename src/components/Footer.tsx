"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Custom Brand SVGs to bypass missing brand icons in newer lucide-react versions
const TwitterIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const DribbbleIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const InstagramIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socials = [
  { name: "Twitter", href: "https://x.com/onnextweb", icon: TwitterIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/onnextweb", icon: LinkedinIcon },
  { name: "Dribbble", href: "https://dribbble.com/onnextweb", icon: DribbbleIcon },
  { name: "Instagram", href: "https://www.instagram.com/onnextweb/", icon: InstagramIcon },
];

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Resource Library", href: "/resources" },
  { name: "Latest Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" }
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you for subscribing!", {
        description: `We've added ${email} to our digital insights list.`,
      });
      setEmail("");
      setSubmitting(false);
    }, 800);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`, {
      description: text,
    });
  };

  return (
    <footer className="relative pt-24 md:pt-32 pb-12 bg-surface overflow-hidden border-t border-border/40">
      {/* Ambient grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Overlapping ambient blur glows */}
      <div className="absolute bottom-[-10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Call to Action & Newsletter Section */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-border/40 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20 backdrop-blur-sm animate-pulse-glow">
                <Sparkles size={12} className="text-primary" />
                Let's build the next web together
              </span>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Ready to design the <br className="hidden md:inline" />
                <span className="text-gradient">future of your brand?</span>
              </h3>
            </div>
            <div className="lg:col-span-5 w-full">
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for curated insights on modern web development, UI/UX designs, and tech innovation.
              </p>
              <form onSubmit={handleSubscribe} className="relative flex items-center gap-2">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-surface-elevated/40 border border-border/80 rounded-xl px-4 py-3.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/45 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-sm"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/40 w-4 h-4 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-6 py-3.5 rounded-xl hover:glow-accent transition-all duration-300 flex items-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? "Subscribed" : (
                    <>
                      Subscribe
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 relative z-10">
          {/* Studio Intro */}
          <AnimatedSection>
            <p className="font-display text-xl font-bold mb-4 text-foreground">ON Next Web</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A premium digital studio crafting modern interactive websites, customized software systems, and branding designs engineered for scaling ambitious brands.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <AnimatedSection delay={0.1}>
            <p className="font-display text-lg font-bold mb-4 text-foreground border-l-2 border-primary pl-3">Navigation</p>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-muted-foreground text-sm hover:text-primary transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Socials */}
          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg font-bold mb-4 text-foreground border-l-2 border-primary pl-3">Connect With Us</p>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Stay in touch with our social channels for news and project updates.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const SocialIcon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-11 h-11 rounded-xl border border-border/80 bg-surface-elevated/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 relative group"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SocialIcon size={18} className="transition-transform group-hover:rotate-6" />
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.3}>
            <p className="font-display text-lg font-bold mb-4 text-foreground border-l-2 border-primary pl-3">Get In Touch</p>
            <div className="space-y-2">
              <button
                onClick={() => handleCopy("info.onnextweb@gmail.com", "Email")}
                className="w-full flex items-center gap-3 text-left p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                title="Click to copy email"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <Mail size={14} />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider font-bold">Email Us</p>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">info.onnextweb@gmail.com</p>
                </div>
              </button>

              <button
                onClick={() => handleCopy("+918765077474", "Phone number")}
                className="w-full flex items-center gap-3 text-left p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                title="Click to copy phone number"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider font-bold">Call Us</p>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">+91 8765077474</p>
                </div>
              </button>

              <button
                onClick={() => handleCopy("C-25 Abul Fazal, Jamia Nagar, Okhla, New Delhi – 110025", "Address")}
                className="w-full flex items-start gap-3 text-left p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                title="Click to copy address"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider font-bold">Visit Us</p>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium leading-relaxed">
                    C-25 Abul Fazal, Jamia Nagar,<br />Okhla, New Delhi – 110025
                  </p>
                </div>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Giant brand name */}
        <AnimatedSection>
          <div className="relative select-none overflow-hidden my-8 md:my-12">
            <h2 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground/10 to-foreground/[0.01] hover:from-primary/20 hover:to-primary/[0.02] transition-all duration-700 text-center cursor-default uppercase">
              ON Next Web
            </h2>
          </div>
        </AnimatedSection>

        {/* Footer Bottom */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p className="font-display font-bold text-lg text-foreground">
              ON <span className="text-gradient">Next</span> Web
            </p>
            <span className="hidden sm:inline text-muted-foreground/20 text-sm">|</span>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} ON Next Web. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
