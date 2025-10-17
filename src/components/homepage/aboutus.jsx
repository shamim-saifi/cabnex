// AboutUsDark.jsx
import React from "react";
import aboutImage from "../../assets/about/about.jpg"; // Replace with your image

import { FaCheck, FaPlay ,FaArrowRight ,FaCarSide ,FaBriefcase,FaUsers,FaMapMarkedAlt,FaCalendarAlt,FaPlane} from "react-icons/fa";

export default function AboutUsDark() {
  return (
    <section className="bg-white text-white py-28">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left: Content */}
       <div className="md:w-1/2 space-y-6">
  <span className="text-sm uppercase font-grotesk text-orange-500 tracking-widest">Cabnex</span>
  <h2 className="text-3xl md:text-5xl font-grotesk text-black font-extrabold leading-14 mt-2 mb-4">
    We Are More Than <span className="text-orange-500">A Car Rental Company</span>
  </h2>
  <p className="text-gray-800">
    We provide premium car rental services with comfort, reliability, and style. Explore our wide range of offerings for corporate, leisure, and special needs.
  </p>

  {/* Services Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
    <div className="flex items-center mt-3 transition">
      <FaBriefcase className="text-white mr-1 text-2xl w-14 h-14 rounded-4xl p-4 bg-orange-500" />
      <div>
        <h4 className="text-lg font-bold font-grotesk text-black">Corporates</h4>
        <p className="text-gray-700 text-sm">Reliable transport for business needs</p>
      </div>
    </div>

    <div className="flex items-center mt-3 ">
      <FaUsers className="text-white mr-1 text-2xl w-14 h-14 rounded-4xl p-4 bg-orange-500"/>
      <div>
        <h4 className="text-lg font-bold font-grotesk text-black">Special Events</h4>
        <p className="text-gray-700 text-sm">Transport for events and gatherings</p>
      </div>
    </div>

    <div className="flex items-center mt-3">
      <FaMapMarkedAlt className="text-white mr-1 text-2xl w-14 h-14 rounded-4xl p-4 bg-orange-500" />
      <div>
        <h4 className="text-lg font-bold font-grotesk text-black">City Tours</h4>
        <p className="text-gray-700 text-sm">Explore cities with comfort</p>
      </div>
    </div>

    

    <div className="flex items-center mt-3">
      <FaPlane className="text-white mr-1 text-2xl w-14 h-14 rounded-4xl p-4 bg-orange-500" />
      <div>
        <h4 className="text-lg font-bold font-grotesk text-black">Airport Transfer</h4>
        <p className="text-gray-700 text-sm">Safe and timely transfers</p>
      </div>
    </div>
  </div>

  {/* Read More Button */}
 <button className="bg-[#FF6900] text-white cursor-pointer px-8 py-3 rounded-4xl hover:bg-[#FF6900] transition font-semibold mt-1 hover:translate-y-[-10px] flex items-center gap-2">
  Read More 
  <FaArrowRight className="text-white" />
</button>
</div>


        {/* Right: Image */}
        <div className="md:w-1/2 relative ">
        <div className="flex justify-center md:justify-end overflow-hidden relative rounded-4xl ">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full transition-all transform hover:scale-110  rounded-4xl"
          />
          {/* Optional Play Button overlay */}
      
<div className="absolute bottom-[-10px] bg-white left-[-10px] bg-white] w-28 h-28 flex items-center justify-center rounded-tr-[35px] cursor-pointer  transition">
  <FaCarSide className="text-gray-900 border text-7xl p-3 rounded-full" />
  
  <div className="br-left-top">
    <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 fill-[#fff]">
      <path d="M11 0L0 0L0 11C0 5 5 0 11 0Z" />
    </svg>
  </div>

  <div className="br-right-bottom">
    <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 fill-[#fff]">
      <path d="M11 0L0 0L0 11C0 5 5 0 11 0Z" />
    </svg>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
