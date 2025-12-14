import { Code2, Sparkles, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that teams love to work with."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed with sub-second load times and smooth interactions."
    },
    {
      icon: Sparkles,
      title: "User-Centric",
      description: "Crafting interfaces that delight users and drive engagement."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Passionate about building
              <br />
              <span className="text-gradient">exceptional web experiences</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Parv Saxena, a Front-End Developer based in Bengaluru, India, with over 
                4 years of experience building modern web applications. Currently at 
                <span className="text-foreground font-medium"> Lifesight</span>, I specialize 
                in creating high-performance, user-centric interfaces using React, TypeScript, 
                and modern front-end tooling.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes shipping impactful features that improved load times by 
                30%+, integrating AI capabilities with OpenAI and Stable Diffusion, and 
                building component libraries that accelerated development velocity across teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open 
                source, and finding ways to make the web faster and more accessible for everyone.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient">4+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient">30%</div>
                  <div className="text-sm text-muted-foreground mt-1">Performance Gains</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Features Shipped</div>
                </div>
              </div>
            </div>

            {/* Right column - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
