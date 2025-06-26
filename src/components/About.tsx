import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Creating consistent, beautiful user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-2xl"></div>
              <img
                src="/faisalkhan.jpeg"
                alt="Faisal Khan"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Frontend Engineer
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              With 2.3 years of experience in frontend development, I specialize
              in creating exceptional user experiences using modern web
              technologies. My journey began with a curiosity for how things
              work on the web, and it has evolved into a passion for crafting
              pixel-perfect, performant applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in the power of collaboration, continuous learning, and
              staying up to date with the latest industry trends. When I'm not
              coding, you'll find me exploring new technologies and reading the
              latest tech blogs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Icon className="text-blue-400 mb-3" size={32} />
                    <h4 className="text-white font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
