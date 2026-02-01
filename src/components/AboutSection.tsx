import { Target, Zap, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Competitive Focus",
    description: "Training for Codeforces contests and algorithmic competitions",
  },
  {
    icon: Zap,
    title: "Fast Problem Solving",
    description: "Developing quick thinking and efficient coding skills",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Mastering data structures and algorithms together",
  },
  {
    icon: Award,
    title: "Team Excellence",
    description: "Supporting each other to achieve higher ratings",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">AKHUWAT Champs</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We are a passionate group of computer science students from Akhuwat University Kasur, 
              united by our love for competitive programming and problem-solving.
            </p>
            
            <p className="text-muted-foreground mb-8">
              As part of BSIT ACUK, our mission is to excel in Codeforces competitions, 
              improve our algorithmic skills, and represent our university in national and 
              international programming contests.
            </p>

            {/* Code snippet decoration */}
            <div className="bg-card rounded-xl border border-border p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="text-muted-foreground">
<span className="text-primary">const</span> team = {'{'}
  name: <span className="text-green-400">"AKHUWAT Champs"</span>,
  goal: <span className="text-green-400">"Excellence in CP"</span>,
  platform: <span className="text-green-400">"Codeforces"</span>
{'}'};
              </pre>
            </div>
          </div>

          {/* Right - Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
