"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    { 
      q: "What are the school hours at Little Learners Academy?", 
      a: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." 
    },
    { q: "Is there a uniform policy for students?", a: "Yes, we have a simple and comfortable uniform policy to foster community." },
    { q: "What extracurricular activities are available for students?", a: "We offer music, arts, sports, and coding clubs for all levels." },
    { q: "How do you handle food allergies and dietary restrictions?", a: "We are a nut-free zone and have strict protocols for all dietary needs." },
    { q: "What is the teacher-to-student ratio at Little Learners Academy?", a: "Our ratio is 1:10 to ensure every child gets personalized attention." },
    { q: "How do I apply for admission to Little Learners Academy?", a: "You can apply through our online portal or by visiting our campus." }
  ];

  return (
    <section className="bg-neo-bg py-[80px] px-[5%] font-sans">
      <div className="text-center mb-[60px]">
        <span className="inline-block py-2 px-[18px] bg-white border-2 border-[#1A1A1A] rounded-lg font-semibold text-sm mb-5">
          Solutions For The Doubts
        </span>
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#1A1A1A] mb-5">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[850px] mx-auto text-[#333] leading-[1.6]">
          Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1300px] mx-auto items-start">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border-2 border-[#1A1A1A] rounded-[15px] p-[25px_35px] cursor-pointer transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-[#FFEFE5]'}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="flex justify-between items-center gap-5">
                <span className="font-bold text-lg text-[#1A1A1A]">{item.q}</span>
                <div className="w-[42px] h-[42px] border-2 border-[#1A1A1A] bg-white rounded-lg flex items-center justify-center text-[24px] font-bold shrink-0">
                  {isOpen ? '−' : '+'}
                </div>
              </div>
              
              {isOpen && (
                <div className="mt-[25px]">
                  <div className="h-[2px] bg-[#1A1A1A] opacity-10 mb-5"></div>
                  <p className="text-[#4C4C4C] leading-[1.7] text-base font-medium">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
