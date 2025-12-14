import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Calendar, Layers, Star, Zap } from "lucide-react";

const Hero = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const codeLines = [
    'const developer = new FrontendCraftsman();',
    'developer.expertise = ["React", "TypeScript", "Next.js"];',
    'developer.passion = "Building Exceptional UX";',
    'developer.mission = "Performance + Elegance";'
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const currentLine = codeLines[currentLineIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayedText === currentLine) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentLineIndex((prev) => (prev + 1) % codeLines.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentLine.substring(0, displayedText.length - 1)
          : currentLine.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentLineIndex, isHydrated]);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Performance', level: 92 }
  ];

  const metrics = [
    { value: '4+', label: 'Years Experience', Icon: Calendar },
    { value: '50+', label: 'Projects Delivered', Icon: Layers },
    { value: '99%', label: 'Client Satisfaction', Icon: Star },
    { value: '<2s', label: 'Avg Load Time', Icon: Zap }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-gradient">Parv</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-body text-muted-foreground">
                Front-End Craftsman & Performance Architect
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transforming complex requirements into elegant, high-performance web experiences. 
                Specializing in React, TypeScript, and modern front-end architecture with a passion 
                for pixel-perfect implementations and sub-second load times.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group px-8 py-6 rounded-lg glow-subtle hover:glow-primary transition-all duration-300 hover:-translate-y-1">
                <a href="#projects" className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button variant="outline" asChild className="px-8 py-6 bg-secondary/50 text-foreground rounded-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 hover:bg-secondary">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                  <metric.Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Code editor */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Editor header */}
              <div className="flex items-center space-x-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-muted-foreground">developer.ts</span>
                </div>
              </div>

              {/* Editor content */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground select-none">1</span>
                  <div className="flex-1">
                    <span className="text-purple-400">import</span>
                    <span className="text-foreground/80"> &#123; </span>
                    <span className="text-primary">Excellence</span>
                    <span className="text-foreground/80"> &#125; </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-emerald-400"> 'passion'</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground select-none">2</span>
                  <div className="flex-1 text-muted-foreground">// Live coding demonstration</div>
                </div>

                <div className="flex items-start space-x-3 min-h-[24px]">
                  <span className="text-muted-foreground select-none">3</span>
                  <div className="flex-1">
                    {isHydrated ? (
                      <>
                        <span className="text-foreground/80">{displayedText}</span>
                        <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
                      </>
                    ) : (
                      <span className="text-foreground/80">{codeLines[0]}</span>
                    )}
                  </div>
                </div>

                {/* Skills progress bars */}
                <div className="pt-6 space-y-3">
                  <div className="text-muted-foreground text-xs mb-2">// Core Competencies</div>
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isHydrated ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl blur-2xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Explore My Journey</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
