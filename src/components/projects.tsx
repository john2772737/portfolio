import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "IoT Flood Monitoring System",
      description: "A data-driven monitoring solution using Node.js and MongoDB to process real-time streams from ESP32 sensors via RESTful APIs.",
      tech: "Node.js, MongoDB, React, Firebase",
      link: "#",
    },
    {
      title: "DriveMate Automotive Suite",
      description: "A cross-platform mobile application built with Flutter/Dart featuring a secure Node.js backend for synchronized service management.",
      tech: "Flutter, Dart, Node.js, REST API",
      link: "#",
    },
    {
      title: "BookLot Inventory System",
      description: "A full-stack web application for inventory tracking using a centralized Node.js server and scalable MongoDB database schemas.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      link: "#",
    },
  ];

  return (
    <div id="projects" className="relative bg-transparent min-h-screen py-10 px-5 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 clip-triangle opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full opacity-15"
        animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <h1 className="text-3xl font-bold text-white text-center mb-10 relative z-10">
        Software Engineering Portfolio
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-teal-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="text-xs font-mono text-pink-300 mb-6">
                STACK: {project.tech}
              </div>
              <a
                href={project.link}
                className="inline-block w-full text-center px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}

export default Projects;