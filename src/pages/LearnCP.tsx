import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ExternalLink, Youtube, FileText, Code2, Trophy } from "lucide-react";

const resources = [
  {
    title: "Codeforces",
    description: "Practice problems and compete in rated contests",
    url: "https://codeforces.com",
    icon: Trophy,
  },
  {
    title: "CP Algorithms",
    description: "Comprehensive encyclopedia of competitive programming algorithms",
    url: "https://cp-algorithms.com",
    icon: FileText,
  },
  {
    title: "CSES Problem Set",
    description: "Curated set of problems to master key CP topics",
    url: "https://cses.fi/problemset/",
    icon: Code2,
  },
  {
    title: "USACO Guide",
    description: "Free collection of CP resources for all skill levels",
    url: "https://usaco.guide",
    icon: BookOpen,
  },
  {
    title: "Errichto (YouTube)",
    description: "Tutorials on algorithms, problem-solving techniques & contest strategy",
    url: "https://www.youtube.com/@Errichto",
    icon: Youtube,
  },
  {
    title: "AtCoder",
    description: "Japanese competitive programming platform with great problems",
    url: "https://atcoder.jp",
    icon: Code2,
  },
];

const LearnCP = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn <span className="text-gradient">Competitive Programming</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated resources to help you start and grow your competitive programming journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <resource.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnCP;
