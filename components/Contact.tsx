"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Section } from "@/components/Section";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/parvsaxena-fe",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/parv-FE-dev",
    },
  ];

  return (
    <Section
      id="contact"
      width="narrow"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            I'm actively exploring senior frontend roles at AI-first companies.
            If you're building products with LLMs, RAG, or real-time AI, I'd love to chat.
          </p>

          {/* Recruiter CTA */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-base font-semibold text-foreground">
              Open to Senior Frontend Engineer roles
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:parvsaxena94@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
            <a
              href="/Parv_Saxena_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '500ms' }}
              aria-label="Download Resume"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
    </Section>
  );
};

export default Contact;
