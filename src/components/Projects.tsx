import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Marketing Intelligence Dashboard",
      description: "A comprehensive analytics platform for marketing teams to track campaign performance, visualize data, and generate AI-powered insights.",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "Redux-Saga", "Recharts", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["30% faster load times", "AI-powered insights", "Real-time data sync"]
    },
    {
      title: "AI Image Generator",
      description: "Web application integrating Stable Diffusion API for generating custom images based on text prompts with style customization.",
      image: "/placeholder.svg",
      tech: ["Next.js", "TypeScript", "Stable Diffusion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Text-to-image generation", "Style presets", "Gallery feature"]
    },
    {
      title: "Component Library",
      description: "A comprehensive design system and component library built with Storybook, used across multiple projects to ensure consistency.",
      image: "/placeholder.svg",
      tech: ["React", "Storybook", "TypeScript", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["40+ components", "Full documentation", "Dark mode support"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with product catalog, cart functionality, and secure checkout integration.",
      image: "/placeholder.svg",
      tech: ["React", "Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Secure payments", "SEO optimized", "Mobile responsive"]
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-8">
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
                className="group relative rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover-glow"
              >
                {/* Project image placeholder */}
                <div className="relative h-48 bg-secondary/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Links */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.githubUrl}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
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
              <a href="https://github.com/parvsaxena" target="_blank" rel="noopener noreferrer">
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
