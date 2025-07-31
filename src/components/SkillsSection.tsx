import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Palette,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Monitor,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "React", level: 100, description: "Building interactive UIs" },
      { name: "TypeScript", level: 100, description: "Type-safe development" },
      {
        name: "Next.js",
        level: 100,
        description: "Full-stack React framework",
      },
      {
        name: "Tailwind CSS",
        level: 100,
        description: "Utility-first styling",
      },
      { name: "Material-UI", level: 100, description: "React UI framework" },
      { name: "JavaScript", level: 100, description: "Modern ES6+ features" },
      {
        name: "HTML/CSS",
        level: 100,
        description: "Semantic markup & styling",
      },
      {
        name: "Zustand",
        level: 85,
        description: "Lightweight state management",
      },
      { name: "React Router", level: 100, description: "Declarative routing" },
      { name: "Axios", level: 100, description: "HTTP client for requests" },
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
        name: "PWA Development",
        level: 80,
        description: "Progressive web apps",
      },
      { name: "React Native", level: 70, description: "Cross-platform mobile" },
      {
        name: "CSS Grid/Flexbox",
        level: 95,
        description: "Modern layout systems",
      },
      {
        name: "Web Performance",
        level: 100,
        description: "Optimization techniques",
      },
      { name: "Accessibility", level: 85, description: "WCAG compliance" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    color: "from-primary to-accent",
    skills: [
      { name: "Node.js", level: 75, description: "Server-side JavaScript" },
      { name: "REST APIs", level: 85, description: "RESTful services" },
      { name: "GraphQL", level: 70, description: "Query language & runtime" },
      { name: "Express.js", level: 80, description: "Web framework for Node" },
      { name: "Authentication", level: 100, description: "JWT & OAuth" },
      {
        name: "Serverless",
        level: 70,
        description: "Function-based architecture",
      },
    ],
  },
  {
    category: "Database & Storage",
    icon: Database,
    color: "from-accent to-primary",
    skills: [
      { name: "PostgreSQL", level: 70, description: "Relational database" },
      { name: "MongoDB", level: 65, description: "NoSQL database" },
      { name: "Firebase", level: 80, description: "Backend-as-a-Service" },
      { name: "Supabase", level: 75, description: "Open source Firebase alt" },
      { name: "Prisma", level: 70, description: "Next-gen ORM" },
    ],
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Figma", level: 100, description: "Design & prototyping" },
      { name: "Framer Motion", level: 50, description: "Animation library" },
      { name: "UI/UX Design", level: 100, description: "User-centered design" },
      {
        name: "Design Systems",
        level: 90,
        description: "Consistent component libs",
      },
      { name: "Prototyping", level: 80, description: "Interactive mockups" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    color: "from-accent to-accent-glow",
    skills: [
      { name: "Git", level: 90, description: "Version control" },
      { name: "Docker", level: 65, description: "Containerization" },
      { name: "Webpack", level: 80, description: "Module bundling" },
      { name: "Jest", level: 85, description: "JavaScript testing" },
      { name: "CI/CD", level: 75, description: "Continuous integration" },
      { name: "AWS", level: 65, description: "Cloud services" },
    ],
  },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
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
            A diverse skill set honed through continuous learning and real-world
            application
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
              "Sass",
              "Styled Components",
              "Material-UI",
              "Zustand",
              "React Router",
              "Axios",
              "ESLint",
              "Prettier",
              "Vite",
              "Vercel",
              "Netlify",
              "Posthog",
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
