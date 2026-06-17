import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Discover", desc: "We listen, research, and define your project goals." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and visual design come to life." },
  { num: "03", title: "Develop", desc: "Clean, scalable code built with modern technologies." },
  { num: "04", title: "Deploy", desc: "Launch, optimize, and iterate for continued growth." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">How We Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Our <span className="text-gradient">Process</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.15}>
            <div className="relative glass rounded-2xl p-8 hover-lift text-center">
              <div className="font-display text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-border" />
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
