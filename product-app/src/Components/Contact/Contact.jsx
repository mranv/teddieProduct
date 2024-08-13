import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSpinner } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-secondary">
            Let's Collaborate in Making Your Home Divine!
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 font-primary">
            Transform your living space with our expert services. Book now and
            experience the difference!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/services"
              className="btn-modern-secondary inline-flex items-center justify-center"
            >
              Explore Services
              <FaArrowRight className="ml-2" />
            </Link>
            <button className="btn-modern-primary inline-flex items-center justify-center">
              <FaSpinner className="animate-spin mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
