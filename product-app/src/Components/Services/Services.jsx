import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Affordable Price",
    icon: (
      <FaCameraRetro className="text-5xl text-blue-600 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Get exceptional service without the premium price tag. Our rates are designed to be as accessible as they are fair, giving you high-quality help at a price that fits your budget.",
    aosDelay: "0",
  },
  {
    name: "Efficient Work",
    icon: (
      <GiNotebook className="text-5xl text-blue-600 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Time is precious, and we respect yours. Our team works swiftly and effectively, ensuring your tasks are completed to the highest standard with minimal disruption to your day.",
    aosDelay: "500",
  },
  {
    name: "Experienced Workers",
    icon: (
      <SlNote className="text-5xl text-blue-600 group-hover:text-white duration-500" />
    ),
    link: "#",
    description:
      "Trust your home to seasoned professionals. Our workers bring a wealth of experience and dedication to every job, delivering results you can count on.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-slate-50 dark:bg-slate-900 dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container mx-auto px-4">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-secondary text-slate-900 dark:text-white"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card-premium group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-gradient-professional duration-300 text-slate-700 hover:text-white rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold font-secondary">
                  {skill.name}
                </h1>
                <p className="font-primary">{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-blue-600 group-hover:text-white duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
