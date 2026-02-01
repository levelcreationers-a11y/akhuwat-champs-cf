import { Code2, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-foreground">AKHUWAT</span>
              <span className="text-primary font-bold"> Champs</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://codeforces.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Codeforces
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 AKHUWAT Champs | Akhuwat University Kasur
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
