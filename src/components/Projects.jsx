import { motion } from "framer-motion";

const projects = [
  { title: "Password Strength Analyzer", description: "Coming Soon.", link: "#" },
  { title: "Portfolio Website", description: "Personal website built with React, Tailwind, and Framer Motion.", link: "#" },
  { title: "Keylogger Detector", description: "Coming Soon.", link: "#" }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-20 text-center flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-orange-500 relative z-20"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} className="text-orange-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
