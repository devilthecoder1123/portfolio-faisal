import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  BarChart3,
  Palette,
  Wrench,
  Bot,
} from "lucide-react";

const skillCategories = [
  {
    category: "AI & Products",
    icon: Bot,
    color: "from-accent to-accent-glow",
    skills: [
      {
        name: "LLM / Chatbot Integration",
        level: 82,
        description: "Wiring models into product flows",
      },
      {
        name: "Conversational UI",
        level: 85,
        description: "Chat & assistant interfaces",
      },
      {
        name: "Prompt Engineering",
        level: 80,
        description: "Reliable, structured outputs",
      },
      {
        name: "Vercel AI SDK",
        level: 78,
        description: "Streaming AI app primitives",
      },
      {
        name: "Product Engineering",
        level: 85,
        description: "Idea to shipped MVP",
      },
      {
        name: "Real-Time Features",
        level: 84,
        description: "Live data & event-driven UX",
      },
    ],
  },
  {
    category: "Frontend",
    icon: Monitor,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "React.js", level: 95, description: "Building interactive UIs" },
      {
        name: "Next.js",
        level: 92,
        description: "SSR / SSG React framework",
      },
      { name: "TypeScript", level: 92, description: "Type-safe development" },
      { name: "JavaScript", level: 95, description: "Modern ES6+ features" },
      { name: "Redux", level: 85, description: "Predictable state container" },
      {
        name: "Zustand",
        level: 88,
        description: "Lightweight state management",
      },
      {
        name: "React Query",
        level: 88,
        description: "Server-state & data fetching",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        description: "Utility-first styling",
      },
      { name: "Material UI", level: 88, description: "React component library" },
      {
        name: "HTML5 / CSS3",
        level: 95,
        description: "Semantic markup & styling",
      },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    color: "from-primary to-accent",
    skills: [
      { name: "Node.js", level: 85, description: "Server-side JavaScript" },
      { name: "Express.js", level: 84, description: "Web framework for Node" },
      { name: "tRPC", level: 86, description: "End-to-end typesafe APIs" },
      { name: "GraphQL", level: 82, description: "Query language & runtime" },
      { name: "REST APIs", level: 90, description: "RESTful services" },
      {
        name: "BFF Architecture",
        level: 85,
        description: "Backend-for-Frontend layer",
      },
      {
        name: "PostgreSQL / SQL",
        level: 80,
        description: "Relational databases",
      },
      { name: "MongoDB", level: 76, description: "NoSQL database" },
      { name: "Auth (JWT/OAuth)", level: 88, description: "Auth & RBAC" },
    ],
  },
  {
    category: "Data & Streaming",
    icon: BarChart3,
    color: "from-accent to-primary",
    skills: [
      {
        name: "Apache Kafka",
        level: 80,
        description: "Real-time event streaming",
      },
      {
        name: "Apache Druid",
        level: 78,
        description: "Real-time analytics database",
      },
      {
        name: "Apache Superset",
        level: 85,
        description: "BI & dashboard platform",
      },
      {
        name: "Contentful CMS",
        level: 88,
        description: "Headless CMS & LMS / SCORM",
      },
    ],
  },
  {
    category: "Mobile & Responsive",
    icon: Smartphone,
    color: "from-accent to-accent-glow",
    skills: [
      {
        name: "Responsive Design",
        level: 95,
        description: "Mobile-first approach",
      },
      {
        name: "SSR / SSG",
        level: 88,
        description: "Server & static rendering",
      },
      { name: "React Native", level: 72, description: "Cross-platform mobile" },
      {
        name: "CSS Grid / Flexbox",
        level: 95,
        description: "Modern layout systems",
      },
      {
        name: "Web Performance",
        level: 90,
        description: "Code splitting & lazy loading",
      },
      {
        name: "Accessibility",
        level: 85,
        description: "WCAG compliance",
      },
    ],
  },
  {
    category: "Testing & DevOps",
    icon: Wrench,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Jest", level: 88, description: "JavaScript testing" },
      {
        name: "React Testing Library",
        level: 85,
        description: "Component testing",
      },
      { name: "Vitest", level: 82, description: "Vite-native unit testing" },
      {
        name: "Lighthouse / Web Vitals",
        level: 85,
        description: "Performance auditing",
      },
      { name: "Webpack / Vite", level: 86, description: "Module bundling" },
      { name: "Docker", level: 72, description: "Containerization" },
      { name: "Git & CI/CD", level: 90, description: "Version control & pipelines" },
    ],
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: "from-accent to-accent-glow",
    skills: [
      { name: "Figma", level: 88, description: "Design & prototyping" },
      {
        name: "Design Systems",
        level: 90,
        description: "Hawkins, MUI, component libs",
      },
      { name: "UI/UX Design", level: 85, description: "User-centered design" },
      { name: "Framer Motion", level: 70, description: "Animation library" },
      { name: "Prototyping", level: 80, description: "Interactive mockups" },
    ],
  },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("AI & Products");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const currentCategory = skillCategories.find(
    (cat) => cat.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full-stack toolkit for building AI-powered products — from models
            and data to backend, frontend, and design
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.category;

            return (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`p-4 rounded-2xl transition-all duration-300 text-left group ${
                  isSelected
                    ? "glass border-primary/40 scale-105"
                    : "glass border-primary/20 hover:border-primary/30 hover:scale-102"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`font-semibold text-sm ${
                    isSelected ? "text-primary" : "text-foreground"
                  }`}
                >
                  {category.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        {currentCategory && (
          <div className="glass p-8 rounded-3xl border border-primary/20">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentCategory.color} flex items-center justify-center`}
              >
                <currentCategory.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {currentCategory.category}
                </h3>
                <p className="text-muted-foreground">
                  Specialized expertise and tools
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <span className="text-sm text-primary font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                      {skill.description}
                    </p>

                    <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width:
                            hoveredSkill === skill.name || hoveredSkill === null
                              ? `${skill.level}%`
                              : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Cloud */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "SCORM",
              "RBAC",
              "WCAG Accessibility",
              "React Router",
              "Axios",
              "Webpack",
              "ESLint",
              "Prettier",
              "Vite",
              "Vercel",
              "Netlify",
              "Agile / Scrum",
              "SOLID",
              "Clean Code",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-accent opacity-5 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-2xl animate-float"
        style={{ animationDelay: "-2s" }}
      />
    </section>
  );
}
