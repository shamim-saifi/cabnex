import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book a car?',
      answer: 'Use the search form to select your location, dates, and car type. Choose a car and complete the booking with your details and payment.',
    },
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You need a valid driver\'s license, ID proof (e.g., Aadhaar or passport), and a credit/debit card for payment.',
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking by logging into your account or contacting our support team before the pickup date.',
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns may incur additional charges based on the hourly or daily rate. Check our terms for details.',
    },
    {
      question: 'Are there any age restrictions for renting?',
      answer: 'Drivers must be at least 21 years old. Additional fees may apply for drivers under 25.',
    },
    {
      question: 'Is insurance included in the rental?',
      answer: 'Basic insurance is included, but you can opt for additional coverage for extra protection.',
    },
    {
      question: 'Can I rent a car for someone else?',
      answer: 'Yes, but the primary driver listed on the booking must provide their valid driver’s license at pickup.',
    },
    {
      question: 'What types of cars are available?',
      answer: 'We offer economy, SUVs, luxury cars, and more. Use the search form to see available options.',
    },
    {
      question: 'Do you offer airport pickups?',
      answer: 'Yes, select your airport as the pickup location during booking, and we’ll arrange it.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Cancellations are allowed up to 24 hours before pickup with a full refund, subject to our policy.',
    },
    {
      question: 'Are there extra charges for additional drivers?',
      answer: 'Yes, additional drivers may incur a small fee. Add them during the booking process.',
    },
    {
      question: 'What if the car breaks down?',
      answer: 'Contact our 24/7 support team, and we’ll provide roadside assistance or a replacement vehicle.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 pb-7 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
         <div className="linrr"></div>
        <span className="text-sm uppercase text-center font-grotesk text-orange-500 tracking-widest">FAQ</span>
      
        <h2 className="text-3xl md:text-5xl font-grotesk text-black font-extrabold text-center mb-12">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg transition-colors duration-300 ${
                  openIndex === index ? 'bg-orange-100' : 'bg-[#f2f2f2]'
                } hover:bg-orange-200 cursor-pointer`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-grotesk font-semibold text-black">
                    {faq.question}
                  </h3>
                  <div
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <FaChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index ? 'text-orange-600' : 'text-orange-400'
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 text-start font-grotesk text-sm pt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <div
                key={index + Math.ceil(faqs.length / 2)}
                className={`p-4 rounded-lg transition-colors duration-300 ${
                  openIndex === index + Math.ceil(faqs.length / 2) ? 'bg-orange-100' : 'bg-[#f2f2f2]'
                } hover:bg-orange-200 cursor-pointer`}
                onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-grotesk font-semibold text-black">
                    {faq.question}
                  </h3>
                  <div
                    className={`transition-transform duration-300 ${
                      openIndex === index + Math.ceil(faqs.length / 2) ? 'rotate-180' : ''
                    }`}
                  >
                    <FaChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index + Math.ceil(faqs.length / 2) ? 'text-orange-600' : 'text-orange-400'
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index + Math.ceil(faqs.length / 2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 text-start font-grotesk text-sm pt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;