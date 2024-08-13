import React from "react";
import cartlogo from "../../assets/cartlogo.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-gradient-professional rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={cartlogo}
              alt="Home services illustration"
              className="w-full max-w-lg mx-auto lg:max-w-none lg:w-[50%] lg:-translate-x-[5%] rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold font-secondary text-slate-900 dark:text-white leading-tight"
            >
              About Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-primary"
            >
              At our core, we believe in simplifying your life. We understand
              the challenges of finding reliable home care, and we're here to
              bridge that gap. Our platform connects you with dedicated
              professionals who are passionate about making a positive impact on
              your daily life.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-primary"
            >
              We offer affordable, efficient, and trustworthy solutions tailored
              to your unique needs. With our service, you can have peace of mind
              knowing your home is in capable and caring hands.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="btn-modern-primary"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
