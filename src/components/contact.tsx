import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <footer
      id="contact"
      className="text-white py-6 px-4 bg-white/10 backdrop-blur-md"
    >
      <div id="contacts" className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2 text-green-500">Get in Touch</h2>
        <p className="text-gray-200 text-sm mb-6">
          You can reach me through the following platforms.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {/* Email */}
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-1 hover:underline transition"
          >
            <FaEnvelope className="text-[#D44638] text-lg" /> {/* Gmail red */}
            <span>youremail@example.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline transition"
          >
            <FaGithub className="text-black dark:text-white text-lg" /> {/* GitHub black (white in dark mode) */}
            <span>github.com/yourusername</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline transition"
          >
            <FaLinkedin className="text-[#0A66C2] text-lg" /> {/* LinkedIn blue */}
            <span>linkedin.com/in/yourusername</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline transition"
          >
            <FaFacebook className="text-[#1877F2] text-lg" /> {/* Facebook blue */}
            <span>facebook.com/yourusername</span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-xs text-gray-300">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Contact;
