import React from 'react';

import mainimg from '../../assets/whychoose/why-choose-car-img.png'; // Replace with your image
import mainimgsec from '../../assets/whychoose/why-choose-img.jpg'; // Replace with your image

import { FaCar, FaHeadset, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
const WhyChooseUs = () => {
const features = [
  {
    icon: <FaCar className="text-2xl" aria-hidden="true" />,
    title: "Wide Range of Vehicles",
    description:
      "From economy hatchbacks to premium SUVs — pick the perfect ride for every trip. Whether it’s daily commute, family vacation or business travel, we’ve got you covered.",
  },
  {
    icon: <FaHeadset className="text-2xl" aria-hidden="true" />,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock help via phone or chat so your rental runs smooth, always. Our support team ensures quick solutions and stress-free travel experience.",
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" aria-hidden="true" />,
    title: "Pickup at Convenient Locations",
    description:
      "Multiple pickup/drop points in cities and airports — fast, local access. Book from anywhere and start your journey hassle-free within minutes.",
  },
  {
    icon: <FaShieldAlt className="text-2xl" aria-hidden="true" />,
    title: "Safety & Reliability",
    description:
      "Regularly inspected cars, insurance options and transparent pricing for peace of mind. Drive confidently knowing your safety is our top priority.",
  },
];


  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading Section */}
        <div className="mb-8">
         
           <div className="linrr"></div>
        <span className="text-sm uppercase text-center font-grotesk text-orange-500 tracking-widest">Why Choose Us</span>
        <h2 className="text-3xl text-center md:text-5xl font-grotesk text-black font-extrabold leading-14 mt-2 mb-12">
             Unmatched quality <span className="text-orange-500">and service for</span> your needs
        </h2>

        </div>

        {/* Content Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Feature Boxes */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/3 lg:pr-4">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4  border-b border-gray-200 "
              >
                <div className="flex-shrink-0 mt-2 feature-cion">{feature.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-grotesk mb-3 font-semibold text-black">{feature.title}</h3>
                  <p className="text-md leading-6 font-grotesk text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full lg:w-1/3 px-8 mt-8 lg:mt-0  flex justify-center items-center">
            <img
              src={mainimgsec}   alt="Car"
              className="relative z-10 h-[550px] w-full rounded-[200px] mx-auto  shadow-lg"
            />
            <img
                src={mainimg}
                alt="Decorative Shape"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] z-99 "
            />
          </div>

          {/* Right Side: Feature Boxes */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/3 lg:pl-4 mt-8 lg:mt-0">
            {features.slice(2, 4).map((feature, index) => (
               <div
                key={index+2}
                className="flex items-start space-x-4 p-4  border-b border-gray-200 "
              >
                <div className="flex-shrink-0 mt-2 feature-cion">{feature.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-grotesk mb-3 font-semibold text-black">{feature.title}</h3>
                  <p className="text-md leading-6 font-grotesk text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;