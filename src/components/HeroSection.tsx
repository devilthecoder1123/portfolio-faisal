import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);

  const words = [
    "Frontend Engineer",
    "React Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/faisal-resume.pdf";
    link.download = "Faisal_Khan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Mouse Gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              hsl(var(--primary) / 0.4) 0%, 
              hsl(var(--accent) / 0.3) 40%, 
              transparent 70%)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-float" />
      <div
        className="absolute bottom-32 right-1/4 w-32 h-32 rounded-full bg-gradient-accent opacity-25 blur-2xl animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="absolute top-1/2 left-20 w-24 h-24 rounded-full bg-primary/30 blur-xl animate-float"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
            {/* Left Column - Main Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                {/* Greeting */}
                <div className="flex items-center gap-3 text-lg text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  <span>Hello, I'm</span>
                </div>

                {/* Name */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Faisal </span>
                  <span className="block gradient-text">Khan</span>
                </h1>

                {/* Animated Role */}
                <div className="h-16 flex items-center">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                    <span className="inline-block transition-all duration-500 ease-in-out">
                      {words[currentWord]}
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Crafting exceptional digital experiences with{" "}
                  <span className="text-primary font-semibold">2.5 years</span>{" "}
                  of expertise in modern web technologies. Passionate about
                  creating beautiful, performant applications that solve
                  real-world problems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="magnetic"
                  size="xl"
                  onClick={scrollToProjects}
                  className="group"
                >
                  <span>Explore My Work</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button variant="glass" size="xl" onClick={handleDownload}>
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/devilthecoder1123",
                    label: "GitHub",
                    color: "hover:text-foreground",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/khanfaisal23/",
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: "mailto:faisalkhantech1123@gmail.com",
                    label: "Email",
                    color: "hover:text-accent",
                  },
                ].map(({ icon: Icon, href, label, color }) => (
                  <Button
                    key={label}
                    variant="glass"
                    size="icon"
                    className={`w-12 h-12 rounded-xl transition-all duration-300 group ${color}`}
                    asChild
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="order-1 lg:order-2 relative h-96 lg:h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Avatar/Logo Area */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Rotating Rings */}
                  <div
                    className="absolute inset-0 rounded-full border border-primary/20 animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                  <div
                    className="absolute inset-4 rounded-full border border-accent/20 animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  />
                  <div
                    className="absolute inset-8 rounded-full border border-primary/30 animate-spin"
                    style={{ animationDuration: "25s" }}
                  />

                  {/* Central Circle */}
                  <div className="absolute inset-16 rounded-full bg-gradient-primary opacity-80 flex items-center justify-center animate-glow-pulse">
                    <div className="text-6xl lg:text-7xl font-bold text-primary-foreground">
                      FK
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute top-8 right-8 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float">
                    <span className="text-accent font-semibold">⚛️</span>
                  </div>
                  <div
                    className="absolute bottom-8 left-8 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float"
                    style={{ animationDelay: "-1s" }}
                  >
                    <span className="text-primary font-semibold">TS</span>
                  </div>
                  <div
                    className="absolute top-1/2 right-4 w-10 h-10 glass rounded-lg flex items-center justify-center animate-float"
                    style={{ animationDelay: "-2s" }}
                  >
                    <span className="text-accent font-semibold">JS</span>
                  </div>
                  <div
                    className="absolute bottom-16 right-16 w-10 h-10 glass rounded-lg flex items-center justify-center animate-float"
                    style={{ animationDelay: "-3s" }}
                  >
                    <span className="text-primary font-semibold">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
