import React, { useState, useEffect } from "react";
import { FaCar, FaCheckCircle, FaUsers, FaClock } from "react-icons/fa";

export default function CounterSection() {
  const counters = [
    { icon: FaCar, number: 500, label: "Cars Available" },
    { icon: FaCheckCircle, number: 2500, label: "Bookings Completed" },
    { icon: FaUsers, number: 10000, label: "Happy Customers" },
    { icon: FaClock, number: 10, label: "Years of Service" },
  ];

  const Counter = ({ target, label, icon: Icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000; // Animation duration in milliseconds
      const increment = end / (duration / 100); // Calculate increment per frame
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 100);

      return () => clearInterval(timer); // Cleanup on unmount
    }, [target]);

    return (
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
        <Icon className="text-orange-500 text-4xl mx-auto mb-4" />
        <h3 className="text-3xl font-grotesk font-bold text-black">{count}+</h3>
        <p className="text-slate-600 text-sm font-grotesk">{label}</p>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="linrr w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
          <span className="text-sm uppercase font-grotesk text-orange-500 tracking-widest">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-grotesk text-black font-extrabold leading-tight mt-2 mb-4">
            Numbers That <span className="text-orange-600">Speak</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Discover the impact of our services through these impressive milestones.
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              target={counter.number}
              label={counter.label}
              icon={counter.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}