"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, FileText, Phone, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "8698571577",
      href: "tel:+918698571577",
    },
    {
      icon: Mail,
      label: "Email",
      value: "parvsaxena94@gmail.com",
      href: "mailto:parvsaxena94@gmail.com",
    },
  ];

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
    <section 
      id="contact" 
      className="py-24 md:py-32 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <span className="text-primary font-mono text-sm mb-4 block">
            // Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Hiring for a senior frontend role or have a freelance project?
            If you're building products with LLMs, RAG, or real-time AI, I'd love to chat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button variant="outline" size="xl" className="font-mono" asChild>
              <a href="mailto:parvsaxena94@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                sayHello()
              </a>
            </Button>
            <Button variant="outline" size="xl" className="font-mono" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                downloadResume()
              </a>
            </Button>
          </div>

          {/* Contact info grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-4 p-6 rounded bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover-glow group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">
                    {link.label}
                  </div>
                  <div className="font-medium">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
