"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Atom, FileCode, Code, Palette, Layers, Sparkles,
  type LucideIcon,
} from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  "React": Atom,
  "Next.js": Layers,
  "TypeScript": FileCode,
  "JavaScript": Code,
  "Tailwind CSS": Palette,
  "OpenAI API": Sparkles,
  "Anthropic Claude": Sparkles,
  "Vercel AI SDK": Sparkles,
  "RAG Pipelines": Sparkles,
};

const Skills = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Core",
      description: "Daily drivers I know inside out",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "State & Architecture",
      description: "Building scalable systems",
      skills: ["Redux", "Zustand", "Component Architecture", "Design Systems"]
    },
    {
      title: "AI & APIs",
      description: "AI-integrated product development",
      skills: ["OpenAI API", "Anthropic Claude", "Vercel AI SDK", "RAG Pipelines"]
    }
  ];

  const tools = [
    "Git", "Vite", "Framer Motion", "shadcn/ui",
    "SEO", "Core Web Vitals"
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Skills
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technologies & tools
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The technologies I use to bring products to life, from frontend frameworks
              to AI integration.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`p-6 rounded bg-gradient-card border border-border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <h3 className="font-display font-bold text-lg mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skillIcons[skill];
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-sm font-mono text-primary hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                        style={{ transitionDelay: `${(index * 150) + (skillIndex * 50)}ms`, transitionDuration: '500ms' }}
                      >
                        {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Tools section */}
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">
              // Tools I use
            </span>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${(index + 1) * 50}ms`, transitionDuration: '500ms' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
