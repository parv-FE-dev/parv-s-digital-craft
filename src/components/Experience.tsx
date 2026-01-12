import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ChevronDown, Trophy, TrendingUp, Download, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

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
      company: 'Lifesight',
      role: 'Senior Frontend Developer',
      period: 'Jan 2023 - Present',
      location: 'Bengaluru, India',
      description: 'Leading front-end architecture and performance optimization initiatives for enterprise-scale marketing analytics platform serving Fortune 500 clients.',
      achievements: [
        'Reduced initial page load time by 65% through code splitting and lazy loading strategies',
        'Architected reusable component library used across 8+ product teams',
        'Implemented real-time data visualization dashboard handling 1M+ data points',
        'Mentored 5 junior developers in React best practices and TypeScript patterns'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS', 'Chart.js'],
      impact: [
        { metric: 'Performance', value: '+65%' },
        { metric: 'Code Reusability', value: '+80%' },
        { metric: 'User Engagement', value: '+45%' }
      ]
    },
    {
      id: 2,
      company: 'True Sparrow',
      role: 'Frontend Developer',
      period: 'Jun 2021 - Dec 2022',
      location: 'Remote',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications with focus on responsive design and accessibility.',
      achievements: [
        'Built 12+ production-ready web applications from scratch',
        'Achieved 98+ Lighthouse scores across all projects',
        'Implemented comprehensive testing suite with 85% code coverage',
        'Collaborated with design team to create pixel-perfect implementations'
      ],
      technologies: ['React', 'JavaScript', 'SCSS', 'Jest', 'React Testing Library', 'Webpack'],
      impact: [
        { metric: 'Projects Delivered', value: '12+' },
        { metric: 'Quality Score', value: '98/100' },
        { metric: 'Test Coverage', value: '85%' }
      ]
    },
    {
      id: 3,
      company: 'Freelance Projects',
      role: 'Full-Stack Developer',
      period: 'Jan 2020 - May 2021',
      location: 'Remote',
      description: 'Delivered custom web solutions for small to medium businesses, focusing on modern tech stack and scalable architecture.',
      achievements: [
        'Successfully completed 20+ freelance projects with 100% client satisfaction',
        'Specialized in JAMstack architecture for optimal performance',
        'Implemented headless CMS solutions for content-heavy websites',
        'Provided ongoing maintenance and feature enhancements'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Gatsby', 'Contentful', 'Netlify'],
      impact: [
        { metric: 'Client Satisfaction', value: '100%' },
        { metric: 'Repeat Business', value: '60%' },
        { metric: 'Avg Load Time', value: '<1.5s' }
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      className="py-24 md:py-32 bg-secondary/20 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container px-6 md:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
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
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative mb-8 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 -translate-x-1/2" />

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
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
