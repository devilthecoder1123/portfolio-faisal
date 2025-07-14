import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import WeatherBotImage from "../assests/weatherbotimage.png";
import ChatFlowBuilderImage from "../assests/chatbotflowImage.png";
import PortfolioImage from "../assests/FaisalKhanPortfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "Weather Bot",
      description:
        "A modern, feature-rich Telegram bot with real-time weather updates and a powerful admin dashboard. Features include daily weather notifications, smart city recognition, user subscription management, and secure admin controls for user and API management.",

      image: `${WeatherBotImage}`,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React Icon",
      ],
      liveUrl: "https://weatherbotfk.netlify.app/",
      githubUrl: "https://github.com/devilthecoder1123/WeatherBot",
      featured: true,
    },
    {
      title: "Chatbot Flow Builder",
      description:
        "A beautiful and extensible visual flow builder for designing chatbot conversations, built with React, TypeScript, and React Flow. Features include an intuitive drag-and-drop interface, smart connection validation, a dynamic settings panel, and a modular node architecture for easy extensibility.",
      image: `${ChatFlowBuilderImage}`,
      technologies: ["React", "TypeScript", "React Flow", "Tailwind CSS"],
      liveUrl: "https://chatbotflowbuilderbitespeed.netlify.app/",
      githubUrl: "https://github.com/devilthecoder1123/Chatbot-flow-builder",
      featured: true,
    },
    {
      title: "IMDB clone",
      description:
        "Developed a movie browsing app that provides users with a seamless browsing experience. Designed the app to display movie data in an easy-to-understand format, with the ability to sort by popularity, rating, and release date.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React.js",
        "TMDB API",
        "React-multi-carousel",
        "Material UI",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark mode, and optimized performance.",
      image: `${PortfolioImage}`,
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/devilthecoder1123/portfolio-faisal",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-orange-500 transition-colors duration-300"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-orange-500 transition-colors duration-300"
                    aria-label="View Source Code"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                  >
                    <Eye size={16} />
                    <span>View Project</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-white">
                  {project.title}
                </h4>
                <div className="flex space-x-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-gray-500 text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
