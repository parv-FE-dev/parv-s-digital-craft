"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Atom, FileCode, Code, FileText, Palette, 
  Layers, GitBranch, Cloud, Plug,
  Sparkles, Image, Server, Paintbrush, BookOpen,
  Monitor, PenTool, Terminal, Search, Send,
  ClipboardList, MessageSquare, StickyNote, Triangle, Container,
  type LucideIcon
} from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  "React": Atom,
  "TypeScript": FileCode,
  "JavaScript": Code,
  "HTML/CSS": FileText,
  "Tailwind CSS": Palette,
  "Next.js": Layers,
  "Redux-Saga": Layers,
  "Git/GitHub": GitBranch,
  "AWS": Cloud,
  "REST APIs": Plug,
  "OpenAI API": Sparkles,
  "RAG": Sparkles,
  "Vector Databases": Layers,
  "Node.js": Server,
  "Storybook": BookOpen,
  "Docker": Container,
};

const toolIcons: Record<string, LucideIcon> = {
  "VS Code": Monitor,
  "Figma": PenTool,
  "Git": GitBranch,
  "Chrome DevTools": Search,
  "Postman": Send,
  "Jira": ClipboardList,
  "Slack": MessageSquare,
  "Notion": StickyNote,
  "Vercel": Triangle,
  "Docker": Container,
};

const Skills = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Expert",
      description: "Daily drivers I know inside out",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Proficient",
      description: "Confident and production-ready",
      skills: ["OpenAI API", "RAG", "Redux-Saga", "Git/GitHub", "REST APIs"]
    },
    {
      title: "Familiar",
      description: "Growing experience with these",
      skills: ["Vector Databases", "Node.js", "AWS", "Storybook", "Docker"]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Git", "Chrome DevTools", "Postman", 
    "Jira", "Slack", "Notion", "Vercel", "Docker"
  ];

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 bg-secondary/20 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Skills
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technologies & <span className="text-gradient">tools</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The technologies I use to bring products to life, from front-end frameworks 
              to development tools.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`p-6 rounded-xl bg-gradient-card border border-border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <h3 className="font-display font-bold text-lg mb-2 text-center">
                  <span className="text-gradient">{category.title}</span>
                </h3>
                <p className="text-xs text-muted-foreground text-center mb-6">{category.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skillIcons[skill];
                    return (
                      <span 
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm font-mono text-primary hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
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
          <div className="text-center">
            <h3 className="font-display font-semibold text-xl mb-6">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => {
                const IconComponent = toolIcons[tool];
                return (
                  <span 
                    key={tool}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${(index + 1) * 50}ms`, transitionDuration: '500ms' }}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {tool}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
