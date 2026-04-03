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
      description: "AI-powered resume builder that analyzes job descriptions and tailors resumes using GPT-4. Features real-time streaming responses, intelligent suggestions, and ATS optimization scoring to help job seekers land interviews.",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Streaming"],
      liveUrl: "",
      githubUrl: "https://github.com/parv-FE-dev",
      highlights: ["GPT-4 Integration", "Real-time Streaming", "ATS Score Analysis"],
      status: "coming-soon" as const,
    },
    {
      title: "DocChat",
      description: "RAG-powered document chat application. Upload PDFs and have intelligent conversations with your documents using vector embeddings and LLM-powered retrieval. Built with a focus on fast semantic search and accurate citation.",
      image: "/placeholder.svg",
      tech: ["Next.js", "TypeScript", "RAG", "Vector DB", "OpenAI API"],
      liveUrl: "",
      githubUrl: "https://github.com/parv-FE-dev",
      highlights: ["RAG Pipeline", "PDF Processing", "Semantic Search"],
      status: "coming-soon" as const,
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
                  {project.status === "coming-soon" && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-mono font-medium">
                      Coming Soon
                    </div>
                  )}
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
