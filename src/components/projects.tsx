import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AI Scheduler",
      description: "An AI-powered class scheduler using Reinforcement Learning.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "E-Commerce App",
      description: "Full-stack MERN e-commerce platform with payment integration.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div id="projects" className="relative bg-transparent min-h-screen py-10 px-5 overflow-hidden">
      {/* Animated Background Shapes */}
      {/* Triangle */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 clip-triangle opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Circle */}
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full opacity-15"
        animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob (irregular shape) */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-400 rounded-full opacity-10 filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0], x: [-20, 20, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <h1 className="text-3xl font-bold text-white text-center mb-10 relative z-10">
        My Projects
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{ transformOrigin: "center" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tailwind CSS doesn't have a built-in triangle shape, so add this custom style */}
      <style>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}

export default Projects;
