import { Code2, Trophy, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(188_100%_50%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(210_100%_60%_/_0.08),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(188 100% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(188 100% 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating code symbols */}
      <div className="absolute top-20 left-10 text-primary/20 text-6xl font-mono animate-float">{'<>'}</div>
      <div className="absolute bottom-32 right-16 text-primary/20 text-5xl font-mono animate-float" style={{ animationDelay: '2s' }}>{'{ }'}</div>
      <div className="absolute top-40 right-20 text-primary/20 text-4xl font-mono animate-float" style={{ animationDelay: '4s' }}>{'#'}</div>

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Codeforces Group | BSIT ACUK</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">AKHUWAT</span>
            <br />
            <span className="text-foreground">Champs</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            V Entry | Competitive Programming Team
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Akhuwat University Kasur
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">7</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">CP</div>
                <div className="text-sm text-muted-foreground">Focus Area</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">CF</div>
                <div className="text-sm text-muted-foreground">Platform</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://codeforces.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 glow hover:scale-105"
            >
              <Code2 className="w-5 h-5" />
              Join Us on Codeforces
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
