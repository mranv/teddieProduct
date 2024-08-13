import React from "react";
import herologo from "../../assets/herologo.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1
              className="text-4xl md:text-5xl font-bold font-secondary mb-6 leading-tight text-slate-900 dark:text-white"
              data-aos="fade-up"
            >
              Manage Your Home with Ease
            </h1>
            <p
              className="text-lg mb-8 text-slate-700 dark:text-slate-300 font-primary"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Simplify your household tasks while making a meaningful impact.
              Our platform connects you with experienced individuals for
              Cleaning, Cooking, and Babysitting. Choose from a pool of
              dedicated helpers, tailor your service options, and enjoy a
              seamless booking process. Manage your home effortlessly while
              supporting those who need it most.
            </p>
            <button
              className="btn-modern-primary inline-flex items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div
            className="w-full md:w-1/2 relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-gradient-professional rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={herologo}
              alt="Home Management"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
