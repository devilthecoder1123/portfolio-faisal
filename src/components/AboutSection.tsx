import { Button } from "@/components/ui/button";
import {
  Code2,
  Rocket,
  Users,
  Award,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "2.5 Years Experience",
    description: "Building scalable web applications with modern technologies",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description:
      "Optimizing applications for speed and exceptional user experience",
    color: "from-accent to-accent-glow",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Working effectively with cross-functional teams and stakeholders",
    color: "from-primary to-accent",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Writing clean, maintainable code with comprehensive testing",
    color: "from-accent to-primary",
  },
];

const experiences = [
  {
    year: "2024-current",
    title: "Senior Frontend Engineer",
    company: "Codesentinels",
    location: "Remote",
    description: [
      "Leading frontend development for enterprise applications, mentoring junior developers, and architecting scalable solutions.",
      "Transformed Contentful CMS into a scalable LMS using the SCORM standard, enabling 100+ interactive learning modules.",
      "Engineered a multi-level content recommendation system with optimized querying logic for enhanced learner engagement.",
      "Built multilingual Course and Global Search pages, supporting 3+ languages and increasing accessibility.",
      "Translated Figma designs into production-ready UI using Netflix’s Hawkins design system and Material UI.",
      "Developed a Backend-for-Frontend (BFF) layer using tRPC and GraphQL to streamline CMS data access and reduce load times by 30%.",
    ],
    technologies: [
      "React",
      "Nextjs",
      "TypeScript",
      "Next.js",
      "tRPC",
      "Contentful CMS",
      "Hawkins UI",
      "Talwind CSS",
      "GraphQL",
    ],
  },
  {
    year: "2023-2024",
    title: "Frontend Developer",
    company: "Kapstan.io",
    location: "Bengauluru, India",
    description: [
      "Developed and maintained the user interface of the company’s product using ReactJS and TypeScript, ensuring a responsive and visually appealing user experience.",
      "Implemented robust testing strategies using Jest, increasing UI component reliability and reducing UI-related bugs by 30% during regression cycles.",
      "Collaborated with UI/UX designers to translate design mockups into functional interfaces, improving feature delivery speed by 25% through tight feedback loops.",
      "Optimized data fetching using React Query, reducing redundant API calls and improving page load times by up to 40%, resulting in a noticeably smoother user experience.",
    ],
    technologies: ["React", "Typescript", "Material UI", "React-Query", "Jest"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate about creating digital experiences that make a
              difference. Here's my journey in the world of web development.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Personal Story - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
                My Story
              </h3>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey into web development began with curiosity wondering
                  how websites come to life. What started as tinkering with HTML
                  and CSS has evolved into a deep passion for creating digital
                  experiences that truly matter.
                </p>

                <p>
                  Over the past 2.5 years, I've had the privilege of working
                  with amazing teams, contributing to projects that reach
                  thousands of users, and constantly learning new technologies.
                  I believe the best code is not just functional, but elegant,
                  maintainable, and accessible.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring the latest
                  design trends, reading the latest tech blogs, and mentoring
                  aspiring developers. I'm always excited about the next
                  challenge and the next opportunity to grow.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  variant="magnetic"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/khanfaisal23/",
                      "_blank"
                    )
                  }
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl border border-accent/20 text-center">
              <div className="text-4xl font-bold text-accent mb-2">50k+</div>
              <div className="text-muted-foreground">Lines of Code</div>
            </div>

            <div className="glass p-6 rounded-2xl border border-primary/20 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-3 text-foreground text-lg">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline - Horizontal Layout */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional Journey
          </h3>

          <div className="relative">
            {/* Horizontal Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="grid lg:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
                <div key={experience.year} className="relative">
                  <div
                    className={`glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 ${
                      index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-bold rounded-full">
                        {experience.year}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {experience.location}
                      </div>
                    </div>

                    <h4 className="font-bold text-lg mb-1">
                      {experience.title}
                    </h4>
                    <div className="text-accent font-medium mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </div>

                    <ul className="list-disc text-sm text-muted-foreground leading-relaxed ml-4 space-y-1 mb-2">
                      {experience.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-48 h-48 rounded-full bg-gradient-accent opacity-5 blur-3xl animate-float" />
      <div
        className="absolute bottom-40 left-10 w-36 h-36 rounded-full bg-gradient-primary opacity-10 blur-2xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
    </section>
  );
}
