import React from "react";
import profilephoto from "../../assets/profilephoto.png";
import { FaInfoCircle } from "react-icons/fa";

const employeeList = [
  {
    name: "ABC",
    service: "COOK",
    image: profilephoto,
    rating: 4.5,
  },
  {
    name: "XYZ",
    service: "MAID",
    image: profilephoto,
    rating: 4.2,
  },
  {
    name: "PJW",
    service: "BABY-SITTER",
    image: profilephoto,
    rating: 4.8,
  },
];

const EmployeeCard = ({ name, service, image, rating }) => (
  <div className="card-premium overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2 bg-yellow-400 text-slate-800 px-2 py-1 rounded-full text-sm font-bold">
        ★ {rating}
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-slate-800 dark:text-white font-secondary">
        {name}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mt-1 font-primary">
        {service}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-blue-600 dark:text-blue-400 font-medium font-primary">
          Available Now
        </span>
        <button className="btn-modern-primary flex items-center">
          <FaInfoCircle className="mr-2" />
          Details
        </button>
      </div>
    </div>
  </div>
);

const EmployeeList = () => {
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white font-secondary">
          Our Star Employees
        </h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto font-primary">
          Discover our top-rated professionals ready to assist you with various
          household tasks. From cooking to childcare, our team is here to make
          your life easier.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employeeList.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-modern-primary">View All Employees</button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeList;
