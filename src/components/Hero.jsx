import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-screen p-20 pt-24">
      {/* Animated Text on Left */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-bold"
        >
          <Typewriter
            words={["Protect what matters most", "Cybersecurity Enthusiast", "Full Stack Developer", "Problem Solver"]}
            loop={0}
            typeSpeed={80}
            deleteSpeed={50}
          />
        </motion.div>
      </div>

      {/* Static Image on Right */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          src="/glitch_effect_transparent.gif"
          alt="Hacker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-80 sm:h-96"
        />
      </div>
    </div>
  );
}
