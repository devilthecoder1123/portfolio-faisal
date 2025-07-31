import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import WeatherBotImage from "../assests/weatherbotimage.png";
import ChatFlowBuilderImage from "../assests/chatbotflowImage.png";
import GeminiCloneImage from "../assests/GeminiClone.png";
import ImdbImage from "../assests/Imdb.png";
import PortfolioImage from "../assests/FaisalPortfolio.png";

const projects = [
  {
    id: 1,
    title: "Weather Bot",
    subtitle: "Full-Stack Application",
    description:
      "A modern, feature-rich Telegram bot with real-time weather updates and a powerful admin dashboard. Features include daily weather notifications, smart city recognition, user subscription management, and secure admin controls for user and API management.",
    image: `${WeatherBotImage}`,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React Icon"],
    liveUrl: "https://weatherbotfk.netlify.app/",
    githubUrl: "https://github.com/devilthecoder1123/WeatherBot",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Chatbot Flow Builder",
    description:
      "A beautiful and extensible visual flow builder for designing chatbot conversations, built with React, TypeScript, and React Flow. Features include an intuitive drag-and-drop interface, smart connection validation, a dynamic settings panel, and a modular node architecture for easy extensibility.",
    image: `${ChatFlowBuilderImage}`,
    technologies: ["React", "TypeScript", "React Flow", "Tailwind CSS"],
    liveUrl: "https://chatbotflowbuilderbitespeed.netlify.app/",
    githubUrl: "https://github.com/devilthecoder1123/Chatbot-flow-builder",
    featured: true,
    subtitle: "Visual Bot Designer",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Gemini Frontend Clone",
    description:
      "A fully functional, responsive Gemini-style conversational AI UI built with React, Zustand, and Tailwind. Includes OTP auth, real-time simulated chat, chatroom management, dark mode, and mobile responsiveness.",
    image: `${GeminiCloneImage}`,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Vite"],
    liveUrl: "https://gemini-ai-clonefk.netlify.app/",
    githubUrl: "https://github.com/devilthecoder1123/gemini-ai-clone",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "IMDB clone",
    subtitle: "Social Platform",
    description:
      "Developed a movie browsing app that provides users with a seamless browsing experience. Designed the app to display movie data in an easy-to-understand format, with the ability to sort by popularity, rating, and release date.",
    image: `${ImdbImage}`,
    technologies: [
      "React.js",
      "TMDB API",
      "React-multi-carousel",
      "Material UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark mode, and optimized performance.",
    image: `${PortfolioImage}`,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    liveUrl: "https://faisalkhan1123-portfolio.netlify.app/",
    githubUrl: "https://github.com/devilthecoder1123/portfolio-faisal",
    featured: false,
    category: "Frontend",
  },
];

const categories = ["All", "Full-Stack", "Frontend"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of projects that demonstrate technical expertise,
            creative problem-solving, and passion for building exceptional user
            experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "magnetic" : "glass"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-accent" />
              Featured Projects
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-bold text-primary/20">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Button variant="glass" size="lg" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="glass" size="lg" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h3>
                        <p className="text-accent font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button variant="minimal" className="group">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects - Compact Grid */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8">More Projects</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Compact Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/30">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-background/80 text-foreground text-xs rounded-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Compact Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass p-8 rounded-3xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited about new challenges and opportunities to
              create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="magnetic" size="lg" asChild>
                <a
                  href="https://github.com/devilthecoder1123?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All on GitHub
                </a>
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-48 h-48 rounded-full bg-gradient-primary opacity-5 blur-3xl animate-float" />
      <div
        className="absolute bottom-40 right-10 w-36 h-36 rounded-full bg-gradient-accent opacity-10 blur-2xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
    </section>
  );
}
