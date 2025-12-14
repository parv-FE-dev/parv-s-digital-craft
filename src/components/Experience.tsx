import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lifesight",
      role: "Software Engineer, Front-End",
      period: "Aug 2022 – Present",
      location: "Bengaluru, India",
      description: "Leading front-end development for a marketing intelligence platform, building scalable components and optimizing performance.",
      achievements: [
        "Reduced dashboard load time from 1s to <1s through lazy loading and code splitting",
        "Built component library with Storybook, improving development velocity by 40%",
        "Integrated OpenAI APIs for AI-powered marketing insights",
        "Implemented advanced data visualization with Recharts and D3.js"
      ],
      tech: ["React", "TypeScript", "Redux-Saga", "Tailwind CSS", "Storybook", "AWS"]
    },
    {
      company: "True Sparrow",
      role: "Software Engineer, Front-End",
      period: "Aug 2021 – Aug 2022",
      location: "Remote",
      description: "Developed modern web applications for various clients, focusing on React and performance optimization.",
      achievements: [
        "Built responsive UIs for 5+ client projects using React and TypeScript",
        "Integrated Stable Diffusion for AI image generation features",
        "Improved SEO rankings by implementing SSR with Next.js",
        "Collaborated with design teams to create pixel-perfect implementations"
      ],
      tech: ["React", "Next.js", "TypeScript", "SASS", "REST APIs"]
    },
    {
      company: "Shuru Technologies",
      role: "Front-End Developer Intern",
      period: "Feb 2021 – Aug 2021",
      location: "Remote",
      description: "Started my journey in front-end development, learning modern web technologies and best practices.",
      achievements: [
        "Developed interactive UI components using React and JavaScript",
        "Learned responsive design principles and CSS architecture",
        "Contributed to team code reviews and documentation"
      ],
      tech: ["React", "JavaScript", "HTML/CSS", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Where I've <span className="text-gradient">worked</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'} w-4 h-4 rounded-full bg-primary border-4 border-background z-10`} />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover-glow`}>
                  {/* Header */}
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-left' : ''}`}>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
