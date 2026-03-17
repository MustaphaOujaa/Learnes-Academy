import React from 'react';
import Image from 'next/image';

const WhatStudentsLearn = () => {
  const subjects = [
    { title: "Language Arts", desc: "Reading, writing, storytelling, and communication skills.", img: "/assets/images/language-arts.png" },
    { title: "Mathematics", desc: "Number sense, basic operations, problem-solving, and logic.", img: "/assets/images/mathematics.png" },
    { title: "Science", desc: "Exploring the natural world through hands-on experiments and investigations.", img: "/assets/images/science.png" },
    { title: "Social Studies", desc: "Cultivating an understanding of diverse cultures and communities.", img: "/assets/images/social-studies.png" },
    { title: "Arts and Crafts", desc: "Encouraging creativity through various art forms and crafts.", img: "/assets/images/arts-crafts.png" },
    { title: "Physical Education", desc: "Promoting physical fitness, coordination, and teamwork.", img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section className="bg-[#FFF9F5] py-[80px] px-[5%] text-center font-sans">
      <div className="mb-[60px]">
        <span className="inline-block py-1.5 px-[16px] border-2 border-[#1A1A1A] rounded-lg bg-white font-medium mb-5 text-[14px]">
          Our Features
        </span>
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1A1A1A] m-0">What Students Learn</h2>
        <p className="max-w-[800px] mx-auto mt-5 text-[#4C4C4C] leading-[1.6] text-[16px]">
          At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[80px] gap-x-[30px] max-w-[1150px] mx-auto">
        {subjects.map((subject, index) => (
          <div key={index} className="relative w-full">
            {/* The Hard Shadow Background */}
            <div className="absolute top-[10px] left-[10px] w-full h-full bg-[#1A1A1A] rounded-[20px] z-[1]"></div>
            
            {/* The Main Foreground Card */}
            <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[20px] p-[45px_25px_30px_25px] z-[2] h-full flex flex-col items-center">
              
              {/* Top Tab Decorator */}
              <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 w-[55px] h-[10px] bg-[#FFEFE5] border-2 border-[#1A1A1A] border-b-0 rounded-t-lg"></div>
              
              <div className="w-[90%] aspect-[1.5/1] border-2 border-[#1A1A1A] rounded-[14px] overflow-hidden mb-[25px] bg-[#F8F8F8] relative">
                <Image 
                  src={subject.img}
                  alt={subject.title} 
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-[24px] font-bold mb-3 text-[#1A1A1A]">{subject.title}</h3>
                <p className="text-[15px] text-[#595959] leading-[1.5] m-0">{subject.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatStudentsLearn;
