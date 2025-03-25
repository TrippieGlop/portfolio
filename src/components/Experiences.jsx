import { motion } from "framer-motion";

const experiences = [
  { role: "Security Engineer Intern", company: "CyberSecure Inc.", duration: "Summer 2023", description: "Assisted in monitoring and improving network security systems." },
  { role: "Full Stack Developer", company: "Tech Solutions", duration: "2022 - Present", description: "Developing scalable web applications and APIs." },
  { role: "Freelance Penetration Tester", company: "Independent", duration: "2021 - Present", description: "Conducting security assessments for small businesses." }
];

export default function Experiences() {
  return (
    <section id="experience" className="min-h-screen p-20 text-center flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Experience
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
            <p className="text-gray-400 font-semibold">{exp.company}</p>
            <p className="text-gray-300 text-sm mb-4">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
