"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/Section";

const Hero = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const codeLines = [
    "const engineer = new SeniorFrontendEngineer();",
    'engineer.stack = ["React", "TypeScript", "Next.js"];',
    'engineer.focus = "AI-Powered Products";',
    'engineer.experience = "5+ years shipping at scale";',
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

    if (isDeleting && displayedText === "") {
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

  const wins = [
    "RAG pipelines + LLM streaming UIs",
    "0 critical vulns at pen-test",
  ];

  return (
    <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center overflow-hidden bg-vscode-editor">
      {/* Grid pattern - VS Code style */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Line numbers gutter effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-vscode-sidebar border-r border-border opacity-30" />

      <Container className="relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:pl-8">
            {/* Headlines - code style */}
            <div className="space-y-4 font-mono">
              <div className="text-muted-foreground text-sm">
                <span className="vscode-keyword">const</span>{" "}
                <span className="vscode-variable">engineer</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <span className="vscode-string">"Parv Saxena"</span>
                <span className="text-foreground">;</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="vscode-function">Parv</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-normal">
                <span className="vscode-comment">// </span>Front-End Craftsman & Performance Architect
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl font-body">
                Transforming complex requirements into elegant, high-performance web experiences. Specializing in React, TypeScript, and modern front-end architecture.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="group px-6 py-5 rounded font-mono text-sm bg-primary hover:bg-primary/90"
              >
                <a href="#experience" className="flex items-center space-x-2">
                  <span>viewMyWork()</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="px-6 py-5 font-mono text-sm border-border hover:bg-secondary"
              >
                <a href="#contact">getInTouch()</a>
              </Button>
            </div>
          </div>

          {/* Right - Code editor */}
          <div className="relative">
            <div className="bg-card rounded border border-border overflow-hidden shadow-xl">
              {/* Editor tab */}
              <div className="flex items-center bg-vscode-tab-inactive border-b border-border">
                <div className="flex items-center gap-2 px-4 py-2 bg-vscode-tab-active border-t border-t-primary text-sm font-mono text-foreground">
                  <span className="text-primary">TS</span>
                  <span>engineer.ts</span>
                  <span className="text-muted-foreground">×</span>
                </div>
              </div>

              {/* Editor content with line numbers */}
              <div className="flex">
                {/* Line numbers */}
                <div
                  className="py-4 px-3 text-right font-mono text-sm select-none bg-vscode-sidebar border-r border-border"
                  style={{ color: "hsl(var(--vscode-line-number))" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div className="min-h-[2lh]">3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                </div>

                {/* Code content */}
                <div className="flex-1 p-4 font-mono text-sm space-y-1 overflow-x-auto">
                  <div>
                    <span className="vscode-keyword">import</span>
                    <span className="text-foreground"> {"{"} </span>
                    <span className="vscode-type">Excellence</span>
                    <span className="text-foreground"> {"}"} </span>
                    <span className="vscode-keyword">from</span>
                    <span className="vscode-string"> 'passion'</span>
                    <span className="text-foreground">;</span>
                  </div>
                  <div className="vscode-comment">
                    // Live coding demonstration
                  </div>
                  <div className="min-h-[2lh]">
                    {isHydrated ? (
                      <>
                        <span className="text-foreground">{displayedText}</span>
                        <span className="inline-block w-[2px] h-[1.1em] bg-foreground ml-0.5 animate-blink align-middle" />
                      </>
                    ) : (
                      <span className="text-foreground">{codeLines[0]}</span>
                    )}
                  </div>
                  <div>
                    <span className="vscode-keyword">const</span>{" "}
                    <span className="vscode-variable">wins</span>{" "}
                    <span className="text-foreground">= [</span>
                  </div>
                  {wins.map((win, index) => (
                    <div key={index} className="pl-4">
                      <span className="vscode-string">"{win}"</span>
                      <span className="text-foreground">
                        {index < wins.length - 1 ? "," : ""}
                      </span>
                    </div>
                  ))}
                  <div>
                    <span className="text-foreground">];</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 group font-mono text-sm"
          >
            <span>scrollDown()</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
