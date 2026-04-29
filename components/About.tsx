"use client";

import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Section } from "@/components/Section";

const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <Section id="about" width="narrow" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section header */}
        <div className="mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Passionate about building
            <br />
            <span className="text-gradient">exceptional web experiences</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm Parv Saxena, a Senior Frontend Engineer with 5+ years building
          AI-powered products in React, Next.js, and TypeScript. I combine deep
          frontend craft with hands-on AI/LLM integration to deliver intelligent,
          user-facing products.
        </p>

        <ul className="space-y-3 pt-6">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Neurowyzr:</span> Founding
              FE on a 0 → 1 enterprise AI assessment platform; owning the product
              surface end-to-end.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Lifesight:</span> Cut
              dashboard load time from 14s to &lt;1s (10× faster) on the analytics rewrite.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">True Sparrow:</span> Shipped
              an early production AI content tool combining GPT-3 and Stable Diffusion.
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default About;
