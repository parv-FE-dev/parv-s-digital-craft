const Skills = () => {
  const skillCategories = [
    {
      title: "Expert",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Proficient",
      skills: [
        { name: "Next.js", level: 80 },
        { name: "Redux-Saga", level: 85 },
        { name: "Git/GitHub", level: 85 },
        { name: "AWS", level: 70 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Familiar",
      skills: [
        { name: "OpenAI APIs", level: 65 },
        { name: "Stable Diffusion", level: 60 },
        { name: "Node.js", level: 60 },
        { name: "SASS", level: 70 },
        { name: "Storybook", level: 75 },
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Git", "Chrome DevTools", "Postman", 
    "Jira", "Slack", "Notion", "Vercel", "Docker"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container px-6 md:px-8">
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
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="p-6 rounded-xl bg-gradient-card border border-border"
              >
                <h3 className="font-display font-bold text-lg mb-6 text-center">
                  <span className="text-gradient">{category.title}</span>
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools section */}
          <div className="text-center">
            <h3 className="font-display font-semibold text-xl mb-6">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
