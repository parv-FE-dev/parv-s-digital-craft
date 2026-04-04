"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const projects = [
    {
      title: "ResumeAI",
      description: "AI-powered resume optimizer — upload your resume, paste a job description, and get instant match scoring (0-100), keyword gap analysis, AI-rewritten bullet points, and actionable suggestions. Features real-time streaming analysis with Claude AI, 4-layer caching for cost optimization, and a demo mode for visitors.",
      image: "/placeholder.svg",
      tech: ["Next.js 16", "TypeScript", "Claude AI", "Vercel AI SDK", "Tailwind CSS 4", "Zustand", "Framer Motion"],
      liveUrl: "https://resume-ai-seven-omega.vercel.app/",
      githubUrl: "https://github.com/parv-FE-dev/resume-ai",
      highlights: ["AI Match Scoring", "Real-time Streaming", "Bullet Rewriting", "4-Layer Caching"],
      status: "live" as const,
    },
    {
      title: "ChatPDF",
      description: "RAG-powered document Q&A — upload any PDF and chat with it using AI. Get answers with clickable page-level [Page X] citations, auto-summary on upload, and full chat history. Built with a custom TF-IDF + chunking RAG pipeline for fast semantic retrieval without external embedding APIs.",
      image: "/placeholder.svg",
      tech: ["Next.js 15", "TypeScript", "Claude AI", "RAG Pipeline", "TF-IDF", "Tailwind CSS 4", "Zustand"],
      liveUrl: "https://chat-with-pdf-mu.vercel.app/",
      githubUrl: "https://github.com/parv-FE-dev/chat-with-pdf",
      highlights: ["RAG Pipeline", "Page Citations", "Auto-Summary", "Custom TF-IDF Engine"],
      status: "live" as const,
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Projects
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Things I've <span className="text-gradient">built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills in front-end development, 
              from complex dashboards to AI integrations.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Project image placeholder */}
                <div className="relative h-48 bg-secondary/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Coming soon badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-mono font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Links */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/parv-FE-dev" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
