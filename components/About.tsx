"use client";

import { Code2, Sparkles, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const highlights = [
    {
      icon: Code2,
      title: "Product Mindset",
      description: "Think beyond the ticket, focused on user outcomes and business impact, not just implementation."
    },
    {
      icon: Sparkles,
      title: "AI-Native",
      description: "Integrate AI from first principles: RAG, streaming, and LLM UX built from scratch, not bolted on."
    },
    {
      icon: Zap,
      title: "0 to 1 Builder",
      description: "Founding engineer experience building from concept to production with full ownership across the stack."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Building the frontend layer of
              <br />
              <span className="text-gradient">AI-powered products.</span>
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            I'm a Senior Frontend Engineer with 5+ years building scalable web applications
            and AI-integrated products. Currently the founding frontend engineer at
            <span className="text-foreground font-medium"> Neurowyzr</span>, I combine deep
            React/TypeScript expertise with hands-on AI/LLM integration to ship intelligent,
            user-facing products.
          </p>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">10x</div>
              <div className="text-sm text-muted-foreground mt-1">Performance Gains</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Features Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
