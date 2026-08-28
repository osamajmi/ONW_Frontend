"use client";

import AnimatedSection from "./AnimatedSection";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Team Members" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          setCount(0);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-gradient-section">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We are a team of designers, developers, and strategists who
            build premium digital products. Every pixel matters. Every
            interaction counts.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From concept to launch, we partner with ambitious brands to
            create experiences that inspire and convert. As a{" "}
            <a href="/website-development-company-in-delhi" className="text-primary hover:underline font-semibold">
              website development company in Delhi
            </a>{" "}
            NCR, we scale digital footprints globally.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 hover-lift">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm text-center mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
