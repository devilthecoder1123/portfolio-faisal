import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 80, color: "bg-gray-700" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 90, color: "bg-red-500" },
        { name: "Webpack", level: 75, color: "bg-blue-400" },
        { name: "Vite", level: 85, color: "bg-purple-500" },
        { name: "Jest", level: 80, color: "bg-red-600" },
      ],
    },
    {
      title: "Backend & Others",
      skills: [
        { name: "Node.js", level: 20, color: "bg-green-600" },
        { name: "GraphQL", level: 70, color: "bg-pink-500" },
        { name: "REST APIs", level: 85, color: "bg-indigo-500" },
        { name: "PostgreSQL", level: 20, color: "bg-blue-700" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
