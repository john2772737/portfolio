import React from "react";

function Navbar() {
  return (
    <nav className="bg-transparent text-gray-50 py-4 fixed top-0 w-full z-50">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">John.dev</div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#about" className="hover:text-green-400">
            About
          </a>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>

          <button
            type="button"
            className="text-black bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-green-800"
          >
            Contact Me !
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
