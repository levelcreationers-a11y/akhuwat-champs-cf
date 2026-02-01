import { Crown, Code, User, ExternalLink } from "lucide-react";
import fazalQadirImg from "@/assets/fazal-qadir.jpeg";

interface TeamMember {
  name: string;
  role: "lead" | "member";
  image?: string;
  cfHandle?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Fazal Qadir", role: "lead", image: fazalQadirImg, cfHandle: "fazalqadir" },
  { name: "Abdul Wahab Akbar", role: "member" },
  { name: "Ali Asghar", role: "member" },
  { name: "Bashir Ahmad", role: "member" },
  { name: "Munir Ahmad", role: "member" },
  { name: "Muhammad Ahmar", role: "member" },
  { name: "Abdul Rehman Chandia", role: "member" },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const isLead = member.role === "lead";
  
  return (
    <div 
      className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-105 ${
        isLead 
          ? "col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/10 to-secondary border-primary/30 hover:border-primary/60"
          : "bg-card border-border hover:border-primary/40"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect for lead */}
      {isLead && (
        <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all duration-500" />
      )}
      
      <div className="relative z-10">
        {/* Avatar */}
        <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden flex items-center justify-center ${
          isLead ? "bg-gradient-primary glow ring-2 ring-primary/50" : "bg-secondary"
        }`}>
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          ) : isLead ? (
            <Crown className="w-10 h-10 text-primary-foreground" />
          ) : (
            <User className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          )}
        </div>

        {/* Name */}
        <h3 className={`text-xl font-bold text-center mb-2 ${
          isLead ? "text-gradient" : "text-foreground"
        }`}>
          {member.name}
        </h3>

        {/* Role badge */}
        <div className="flex justify-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
            isLead 
              ? "bg-primary/20 text-primary border border-primary/30" 
              : "bg-secondary text-muted-foreground"
          }`}>
            {isLead ? (
              <>
                <Crown className="w-3.5 h-3.5" />
                Team Lead
              </>
            ) : (
              <>
                <Code className="w-3.5 h-3.5" />
                Member
              </>
            )}
          </span>
          
          {/* Codeforces link */}
          {member.cfHandle && (
            <a 
              href={`https://codeforces.com/profile/${member.cfHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              CF Profile
            </a>
          )}
        </div>
      </div>

      {/* Hover decoration */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Code className="w-5 h-5 text-primary/40" />
      </div>
    </div>
  );
};

const TeamSection = () => {
  const lead = teamMembers.find(m => m.role === "lead")!;
  const members = teamMembers.filter(m => m.role === "member");

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(188_100%_50%_/_0.05),transparent_70%)]" />
      
      <div className="container px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of competitive programmers pushing the boundaries of algorithmic excellence
          </p>
        </div>

        {/* Team Lead - Featured */}
        <div className="max-w-sm mx-auto mb-12">
          <TeamMemberCard member={lead} index={0} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-md mx-auto mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
          <span className="text-muted-foreground text-sm font-medium">Team Members</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
