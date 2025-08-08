// App.tsx
import React from "react";
import Navbar from "./components/Navbar/navbar";
import heroRight from './assets/hero_Right.png'
import AnimatedShapes from "./components/framerMotion";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Navbar />

      {/*Hero Section */}
      <section id ="home" className="bg-white dark:bg-transparent  mt-10 lg:mt-20 ">
        <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
          <AnimatedShapes />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* Left side text */}
          <div className="mr-auto place-self-center lg:col-span-7">
            <span className="block mb-2 text-lg font-medium text-white">
              I am,
            </span>

            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              John Regulacion
            </h1>
             <p className="max-w-2xl mb-6 font-light text-green-500 text-base lg:text-lg">
              AI + Web + Software Development
            </p>
            <p className="max-w-2xl mb-6 font-light text-white text-base lg:text-lg">
              I’m a versatile developer skilled in multiple languages, AI, and
              full-stack development. 
            </p>

            {/* Primary button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg  bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Resume
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          {/* Right side image */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={heroRight}
              alt="mockup"
            />
         
          </div>
          </div>
        </div>
      </section>


      {/*About section */}

      <AboutMe/>

      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
