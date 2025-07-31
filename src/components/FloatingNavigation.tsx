import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { User, Code, Briefcase, Mail, Home, Menu, X } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
  { id: "skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
  { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Vertical Side Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="glass"
              size="icon"
              onClick={() => scrollToSection(item.id)}
              className={`w-14 h-14 rounded-2xl backdrop-blur-xl border transition-all duration-300 group relative ${
                activeSection === item.id
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {item.icon}
              
              {/* Tooltip */}
              <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg glass border border-primary/20 backdrop-blur-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === item.id ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}>
                {item.label}
              </div>
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Button
          variant="glass"
          size="icon"
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-2xl backdrop-blur-xl border border-primary/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <div className="absolute top-20 right-6 glass rounded-2xl p-4 border border-primary/20 backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "magnetic" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className="justify-start gap-3 w-full"
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}