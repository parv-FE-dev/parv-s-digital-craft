import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
            Front-End Developer
            <br />
            <span className="text-gradient">React & TypeScript</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
            Building intuitive, high-performance web experiences with 4+ years of crafting 
            pixel-perfect interfaces and scalable front-end architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-1 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 opacity-0 animate-fade-up stagger-4">
            <p className="text-sm text-muted-foreground mb-4">Tech I work with</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
              {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux'].map((tech, index) => (
                <span 
                  key={tech}
                  className="text-sm font-medium hover:text-primary transition-colors cursor-default"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
