import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import CarList from "../Components/CarList/CarList";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 md:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center py-12 md:py-20"
          >
            <Hero />
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white dark:bg-gray-800"
          >
            <About />
          </section>

          <section
            id="services"
            className="min-h-screen flex items-center justify-center py-12 md:py-20"
          >
            <Services />
          </section>

          <section
            id="cars"
            className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white dark:bg-gray-800"
          >
            <CarList />
          </section>

          <section
            id="testimonials"
            className="min-h-screen flex items-center justify-center py-12 md:py-20"
          >
            <Testimonial />
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white dark:bg-gray-800"
          >
            <Contact />
          </section>
        </div>
      </main>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-20">
          <nav className="flex justify-around py-3">
            {["Home", "Services", "Contact"].map((item, index) => (
              <Link
                key={item}
                to={index === 0 ? "/" : `/#${item.toLowerCase()}`}
                className="flex flex-col items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* SVG paths remain the same */}
                </svg>
                <span className="text-xs">{item}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Home;
