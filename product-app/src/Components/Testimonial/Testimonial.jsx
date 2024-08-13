import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialData = [
  {
    name: "Darshan",
    image: "https://picsum.photos/seed/darshan/200",
    description:
      "This platform made finding reliable help so easy! The workers are great, and it feels good to support those in need. Highly recommend!",
    rating: 5,
  },
  {
    name: "Faraz",
    image: "https://picsum.photos/seed/faraz/200",
    description:
      "The service is affordable and efficient. Booking was simple, and the helpers were experienced and trustworthy.",
    rating: 5,
  },
  {
    name: "Pratiksha",
    image: "https://picsum.photos/seed/pratiksha/200",
    description:
      "I love the peace of mind this service provides. The workers are reliable, and it's great knowing I'm helping someone who really needs it.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, image, description, rating }) => (
  <div className="card-premium transition-all duration-300 hover:shadow-xl">
    <div className="flex justify-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-blue-600"
      />
    </div>
    <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
    <p className="text-slate-700 dark:text-slate-300 mb-4 font-primary">
      {description}
    </p>
    <div className="flex justify-center mb-2">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
    </div>
    <p className="font-bold text-center font-secondary text-slate-900 dark:text-white">
      {name}
    </p>
  </div>
);

const Testimonial = () => {
  return (
    <section
      id="about"
      className="bg-slate-100 dark:bg-slate-900 py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white font-secondary">
            What Our Clients Say About Us
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-primary">
            Our clients rave about the exceptional service and heartfelt
            dedication of our team. With countless positive reviews and loyal
            customers, their experiences reflect our commitment to excellence
            and the real difference we make in their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
