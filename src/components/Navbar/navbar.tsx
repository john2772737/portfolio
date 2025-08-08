import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-gray-50 py-4 fixed top-0 w-full z-50">
      <div  className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">John.dev</div>

        {/* Desktop Links */}
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
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-black bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-transparent px-4 py-3 space-y-2">
          <a href="#home" className="block hover:text-green-400">
            Home
          </a>
          <a href="#about" className="block hover:text-green-400">
            About
          </a>
          <a href="#projects" className="block hover:text-green-400">
            Projects
          </a>
          <button
            type="button"
            className="w-full text-black bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Contact Me !
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
