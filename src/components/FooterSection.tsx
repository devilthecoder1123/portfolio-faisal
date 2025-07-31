import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-lg font-semibold gradient-text">Faisal Khan</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved. Built with{" "}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />{" "}
              using React & TypeScript
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-6">
            <Button variant="minimal" size="sm" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              About
            </Button>
            <Button variant="minimal" size="sm" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Projects
            </Button>
            <Button variant="minimal" size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </Button>
          </div>

          {/* Right Side - Scroll to Top */}
          <Button
            variant="glass"
            size="icon"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-8 border-t border-primary/5 text-center">
          <p className="text-xs text-muted-foreground">
            Designed and developed with attention to detail and passion for great user experiences
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}