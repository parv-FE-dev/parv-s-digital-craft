"use client";

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ChevronDown, Trophy, TrendingUp, Download, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  impact: {
    metric: string;
    value: string;
  }[];
}

const Experience = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Neurowyzr',
      role: 'Senior Frontend Engineer',
      period: 'Jul 2024 - Present',
      location: 'Remote',
      description: 'Founding FE on an enterprise AI cognitive assessment platform serving multiple clients. Lead the contract engineering team and own the product surface end-to-end.',
      achievements: [
        'Built interactive AI-driven cognitive assessment games with a reusable game engine, scoring algorithms, and adaptive difficulty, contributing to new revenue streams',
        'Designed a role-based Admin Portal for test management, improving operational efficiency by 40%',
        'Achieved zero critical/high-risk vulnerabilities in penetration testing',
        'Implemented modular component architecture with a shared design system'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
      impact: [
        { metric: 'Operational Efficiency', value: '+40%' },
        { metric: 'Pen-Test Vulnerabilities', value: '0' },
        { metric: 'Build Stage', value: '0 → 1' }
      ]
    },
    {
      id: 2,
      company: 'Lifesight',
      role: 'SDE II, Frontend',
      period: 'Jul 2023 - Jul 2024',
      location: 'Bengaluru',
      description: 'Core contributor to the Lifesight 3.0 frontend rewrite. Owned the new analytics modules and the chart engine that powers them.',
      achievements: [
        'Replaced fragmented charting with a unified visualization layer, cutting dashboard load time from 14s to <1s (10× improvement)',
        'Shipped Attribution and Customer Journey Analytics modules using React + TypeScript',
        'Led UI sprints that improved Core Web Vitals across the dashboard'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Data Visualization', 'REST APIs'],
      impact: [
        { metric: 'Dashboard Load Time', value: '14s → <1s' },
        { metric: 'Speed-Up', value: '10×' },
        { metric: 'Chart Engine', value: 'Unified' }
      ]
    },
    {
      id: 3,
      company: 'True Sparrow Systems',
      role: 'Front-End Developer',
      period: 'Jul 2021 - Jun 2023',
      location: 'Remote',
      description: 'Frontend developer across fitness and wellness products serving thousands of users.',
      achievements: [
        'Developed an AI-powered content generation tool with OpenAI GPT-3 + Stable Diffusion: full frontend for prompt input and real-time preview; shipped and adopted by the content team',
        'Built the Moxie Pass subscription bundling system, improving conversion and retention',
        'Boosted SEO and organic traffic across the wellness portfolio'
      ],
      technologies: ['React', 'JavaScript', 'TypeScript', 'OpenAI API', 'SCSS', 'Redux'],
      impact: [
        { metric: 'Users Served', value: '1000s+' },
        { metric: 'AI Tool Built', value: 'GPT-3 + SD' },
        { metric: 'Subscription System', value: 'Moxie Pass' }
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section
      id="experience"
      width="narrow"
      className="bg-secondary/20"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              // Professional Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Experience <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A chronological journey through roles with measurable impact and continuous growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted" />

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative mb-8 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2 z-10">
                  {expandedId === exp.id && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/50 animate-ping" />
                  )}
                  <div className={`relative w-4 h-4 rounded-full bg-primary border-4 border-background ${expandedId === exp.id ? 'ring-2 ring-primary/30 ring-offset-2 ring-offset-background' : ''}`} />
                </div>

                {/* Content card */}
                <div className="ml-12 md:ml-16">
                  <div 
                    className={`p-6 rounded-xl bg-gradient-card border transition-all duration-300 cursor-pointer ${
                      expandedId === exp.id 
                        ? 'border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3),0_0_30px_rgba(var(--primary-rgb),0.1)]' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl text-foreground">{exp.role}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="text-primary font-medium">{exp.company}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                          expandedId === exp.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Expanded content */}
                    <div className={`grid transition-all duration-300 ${
                      expandedId === exp.id 
                        ? 'grid-rows-[1fr] opacity-100 mt-6' 
                        : 'grid-rows-[0fr] opacity-0'
                    }`}>
                      <div className="overflow-hidden">
                        <div className="border-t border-border pt-6 space-y-6">
                          {/* Achievements */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Trophy className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Key Achievements</span>
                            </div>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact metrics */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">Measurable Impact</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              {exp.impact.map((item, impIndex) => (
                                <div key={impIndex} className="text-center p-3 rounded-lg bg-secondary/50 border border-border">
                                  <p className="text-xl font-bold text-primary">{item.value}</p>
                                  <p className="text-xs text-muted-foreground">{item.metric}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download resume button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="/Parv_Saxena_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Download Full Resume
              </a>
            </Button>
          </div>
        </div>
    </Section>
  );
};

export default Experience;
