import { Button } from "@/components/ui/button";
import {
  Code2,
  Rocket,
  Boxes,
  Sparkles,
  Award,
  MapPin,
  Trophy,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: Boxes,
    title: "Full-Stack, End-to-End",
    description:
      "From databases and APIs to polished UI — I architect and ship complete products solo or with a team",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Sparkles,
    title: "AI Product Builder",
    description:
      "Building AI-powered experiences — conversational UIs, chatbot builders, and smart, real-time features",
    color: "from-accent to-accent-glow",
  },
  {
    icon: Code2,
    title: "3+ Years Experience",
    description:
      "Production platforms for Netflix and Sinch built with modern web technologies",
    color: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Performance & Quality",
    description:
      "Fast, accessible, well-tested apps — code splitting, Web Vitals, and clean architecture",
    color: "from-accent to-primary",
  },
];

const experiences = [
  {
    year: "Sep 2025 — Present",
    title: "Full-Stack Engineer",
    company: "LumegaLabs (Client: Sinch)",
    location: "Remote",
    description: [
      "Built real-time analytics dashboards on React.js, Next.js, and Apache Superset for Sinch's customer communication platform across WhatsApp, SMS, RCS, and Email channels.",
      "Integrated Apache Kafka and Apache Druid pipelines processing large-scale event data in real time, enabling sub-second dashboard refresh rates.",
      "Designed reusable charting components and standardized dashboard architecture, significantly cutting new dashboard delivery time across the team.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Apache Superset",
      "Apache Kafka",
      "Apache Druid",
    ],
  },
  {
    year: "Apr 2024 — Aug 2025",
    title: "Full-Stack Engineer",
    company: "Code Sentinels (Client: Netflix)",
    location: "Remote",
    description: [
      "Engineered a global storyteller training platform for Netflix scaling to thousands of users across multiple regions and languages.",
      "Architected a Backend-for-Frontend (BFF) layer using tRPC, GraphQL, Node.js, and Express.js, decoupling client requirements from CMS schema and eliminating over-fetching platform-wide.",
      "Repurposed Contentful CMS as a full LMS using the SCORM standard, with multilingual search and course pages following the Netflix Hawkins design system and WCAG accessibility.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "tRPC",
      "GraphQL",
      "Node.js",
      "Contentful CMS",
      "Hawkins UI",
    ],
  },
  {
    year: "Jun 2023 — Mar 2024",
    title: "Full-Stack Engineer",
    company: "Kapstan",
    location: "Bengaluru, India",
    description: [
      "Built cross-browser UI components for a cloud infrastructure dashboard used by DevOps teams to manage deployments and services in production.",
      "Maintained high test coverage with Jest and React Testing Library, reducing production bugs and enabling fast, confident iteration cycles.",
      "Optimized data fetching with React Query (caching, background sync, pagination) and translated Figma designs into pixel-accurate React and Tailwind CSS interfaces, reducing designer-engineer revision cycles by 40%.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "React Query",
      "Jest",
      "Tailwind CSS",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "700+ DSA Problems Solved",
    description:
      "Across LeetCode, GeeksforGeeks, HackerRank, Codeforces, and CodeChef.",
  },
  {
    icon: Award,
    title: "Rahmani 30 Scholar",
    description:
      "Selected among 60 scholars from 40,000+ applicants nationwide — one of India's most competitive merit scholarships.",
  },
  {
    icon: Trophy,
    title: "All India Rank 1 — AME CET 2019",
    description: "National engineering entrance examination.",
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
              A full-stack engineer who builds AI-powered products end-to-end —
              from idea and architecture to a polished, shipped experience.
              Here's my journey.
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
                  What started as curiosity about how websites come to life has
                  grown into building complete products — owning the full
                  journey from database schema and APIs to the last pixel of the
                  UI, and increasingly weaving{" "}
                  <span className="text-foreground font-medium">AI</span> into
                  the experiences I ship.
                </p>

                <p>
                  Over the past 3+ years, I've built production SaaS, analytics,
                  and learning platforms for{" "}
                  <span className="text-foreground font-medium">Netflix</span>{" "}
                  and <span className="text-foreground font-medium">Sinch</span>{" "}
                  — working across the stack with React, Next.js, TypeScript,
                  Node.js, GraphQL, tRPC, and real-time data pipelines on Apache
                  Kafka and Druid. On the side I build AI-powered products:
                  conversational UIs, a visual chatbot flow builder, and
                  assistant-style apps that put models to work for real users.
                </p>

                <p>
                  I care about products that are not just functional, but fast,
                  elegant, and accessible. When I'm not shipping, I'm sharpening
                  problem-solving with algorithms — 700+ DSA problems across
                  competitive platforms — and exploring what's next in AI and
                  web.
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
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>

            <div className="glass p-6 rounded-2xl border border-primary/20 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">700+</div>
              <div className="text-muted-foreground">DSA Problems Solved</div>
            </div>

            <div className="glass p-6 rounded-2xl border border-accent/20 text-center">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <div className="text-muted-foreground">
                Global Brands Shipped (Netflix, Sinch)
              </div>
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

        {/* Experience Timeline - Vertical Layout */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional Journey
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-50 md:-translate-x-1/2" />

            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div
                  key={experience.company}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-gradient-primary ring-4 ring-background -translate-x-1/2 z-10" />

                  <div
                    className={`glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 flex-wrap ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
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
                    <div
                      className={`text-accent font-medium mb-3 flex items-center gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </div>

                    <ul className="list-disc text-sm text-muted-foreground leading-relaxed ml-4 md:ml-0 md:list-inside space-y-1 mb-4 text-left">
                      {experience.description.map((point) => (
                        <li key={point.slice(0, 40)}>{point}</li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
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

        {/* Achievements & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-accent" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="glass p-5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-accent" />
              Education
            </h3>
            <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-bold rounded-full inline-block mb-4">
                Aug 2019 — May 2023
              </div>
              <h4 className="font-bold text-lg mb-1">
                B.Tech, Mechanical Engineering
              </h4>
              <div className="text-accent font-medium mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Jamia Millia Islamia, New Delhi
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transitioned from mechanical engineering into software,
                self-teaching modern web development and computer science
                fundamentals to build a career as a full-stack engineer.
              </p>
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
