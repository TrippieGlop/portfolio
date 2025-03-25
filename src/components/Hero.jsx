import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-20 pt-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Animated Text on Left */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
          <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           className="text-4xl sm:text-6xl font-bold text-orange-500 relative z-20"
         >
           <Typewriter
             words={[
               "Protect what matters most",
               "Cybersecurity Enthusiast",
               "Problem Solver"
             ]}
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
            className="h-80 sm:h-100"
          />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="w-full mt-60 p-10 bg-gray-800 rounded-lg shadow-lg text-orange-500 relative z-20">
  <motion.h2 className="text-4xl font-bold mb-4 text-center">
    About Me
  </motion.h2>
  <motion.p className="text-gray-300 text-lg text-center">
        
I enjoy diving into cybersecurity projects and exploring ethical hacking, network security, and secure coding practices. Each project I tackle challenges me technically and brings me closer to my goal of making an impactful contribution to cybersecurity and national security.

When I'm not immersed in cybersecurity or working on coding projects, you'll usually find me at the gym, staying active and pushing myself physically. I also have a profound love for music, it's my inspiration, motivation, and relaxation.

Feel free to explore my projects or connect with me. I’m always excited to collaborate and discuss cybersecurity, fitness, music, or potential career opportunities!
        </motion.p>
      </section>
    </div>
  );
}
