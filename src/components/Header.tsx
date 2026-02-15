import { Calendar, Users, Mail, Trophy, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImg from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Contest Coming", href: "https://codeforces.com/group/FRcJYtMPKa/contests", icon: Calendar, external: true },
    { label: "Join Us", href: "https://codeforces.com/group/FRcJYtMPKa", icon: Users, external: true },
    { label: "Contact Us", href: "mailto:25f.bsit.07@gmail.com", icon: Mail, external: true },
    { label: "Team", href: "#team", icon: Trophy },
    { label: "Gadgets", href: "#gadgets", icon: ShoppingBag },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-gradient">
            <img src={logoImg} alt="Akhuwat Champs" className="w-9 h-9 rounded-full object-cover" />
            Akhuwat Champs
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
