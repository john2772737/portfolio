import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFirebase, SiNextdotjs, SiTailwindcss, SiExpress, SiPostman, SiRust, SiC } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function TechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTypescript size={40} className="text-blue-500" />, name: "TypeScript" },
        { icon: <FaJava size={40} className="text-orange-500" />, name: "Java" },
        { icon: <SiRust size={40} className="text-orange-700" />, name: "Rust" },
        { icon: <SiC size={40} className="text-blue-400" />, name: "C" },
        { icon: <FaPython size={40} className="text-yellow-400" />, name: "Python" },
      ],
    },
    {
      title: "Frameworks / Libraries",
      items: [
        { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
        { icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
        { icon: <SiNextdotjs size={40} />, name: "Next.js" },
        { icon: <SiExpress size={40} />, name: "Express.js" },
        { icon: <SiMongodb size={40} className="text-green-400" />, name: "MongoDB" },
        { icon: <SiFirebase size={40} className="text-yellow-500" />, name: "Firebase" },
        { icon: <MdApi size={40} className="text-orange-400" />, name: "API Development" },
        { icon: <GiArtificialIntelligence size={40} className="text-pink-400" />, name: "AI/ML Basics" },
        { icon: <SiTailwindcss size={40} className="text-cyan-500" />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Tools",
      items: [
        { icon: <SiPostman size={40} className="text-orange-500" />, name: "Postman" },
        { icon: <FaGitAlt size={40} className="text-orange-500" />, name: "Git" },
        { icon: <FaGithub size={40} />, name: "GitHub" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-10 m-6 overflow-hidden"
    >
      {/* Background animated shapes */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-green-500 rounded-lg opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ zIndex: 0 }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ zIndex: 0 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-500 opacity-15 clip-triangle"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ zIndex: 0 }}
      />

      <motion.h2
        className="text-3xl text-green-500 font-bold text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-white font-semibold mb-4">{category.title}</h3>
            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center text-white space-x-3"
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom CSS for triangle clip-path */}
      <style>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}
