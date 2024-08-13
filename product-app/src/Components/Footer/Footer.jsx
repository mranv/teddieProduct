import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/contact" },
  { title: "Help", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-professional text-white py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold font-secondary">EaseMyWork</h1>
            <p className="text-slate-200 font-primary">
              Our platform connects you with dedicated helpers who take care of
              your household tasks efficiently, so you can focus on what matters
              most. Enjoy hassle-free service that truly makes your life easier.
            </p>
            <div className="space-y-4 font-primary">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-blue-300" />
                <p>Pune, Maharashtra</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-blue-300" />
                <div>
                  <p>+91 9588633019</p>
                  <p>+91 7218209234</p>
                </div>
              </div>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-4">
              {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="text-blue-300 hover:text-white transition-colors duration-300"
                >
                  <Icon className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Important Links */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 font-secondary">
              Important Links
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-primary">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>&#8250;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-400 text-center font-primary">
          <p>
            &copy; {new Date().getFullYear()} EaseMyWork. All rights reserved.
          </p>
        </div>
      </div>
      {/* Frosted glass effect overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg -z-10"></div>
    </footer>
  );
};

export default Footer;
