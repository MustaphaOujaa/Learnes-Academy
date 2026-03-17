import React from 'react';
import Image from 'next/image';

const Team = () => {
  const team = [
    {
      name: "Ms. Sarah Anderson",
      role: "Bachelor's Degree in Early Childhood Education",
      desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment.",
      img: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    {
      name: "Mr. David Roberts",
      role: "Master's Degree in Elementary Education",
      desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ms. Emily Hernandez",
      role: "Diploma in Child Psychology",
      desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide targeted support. Her warm smiles foster a strong sense of belonging.",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Mr. Michael Turner",
      role: "Bachelor's Degree in Physical Education",
      desc: "Mr. Michael's passion for physical fitness and sports plays an essential role in keeping students active and healthy. He brings boundless energy and enthusiasm.",
      img: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Ms. Jessica Lee",
      role: "Master's Degree in Special Education",
      desc: "Ms. Jessica's background in special education ensures that all children, regardless of their abilities, receive the support they need to succeed.",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Mr. William Parker",
      role: "Bachelor's Degree in Fine Arts",
      desc: "Mr. William's background in fine arts inspires creativity and self-expression. He encourages the exploration of various art forms.",
      img: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  return (
    <section id="teachers" className="bg-[#FFF9F5] py-[80px] px-5 text-center font-sans">
      <div className="inline-block border border-[#262626] p-[5px_15px] rounded-md font-medium bg-white text-[#262626]">
        Our Teachers With Expertise
      </div>
      <h2 className="text-[40px] font-bold mt-[15px] text-[#262626]">Our Team Members</h2>
      <p className="max-w-[800px] mx-auto mt-[15px] text-[#4C4C4C] leading-[1.6]">
        At Little Learners Academy, our teaching team is the heart of our educational journey...
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1200px] mt-[50px] mx-auto">
        {team.map((member, index) => (
          <div key={index} className="bg-white border-2 border-[#262626] rounded-xl p-[30px] shadow-[6px_6px_0px_#262626] relative">
            <div className="flex items-center justify-between mb-[25px]">
              <div className="flex items-center gap-[15px]">
                <Image src={member.img} alt={member.name} width={60} height={60} className="w-[60px] h-[60px] rounded-[10px] border-[1.5px] border-[#262626] object-cover" />
                <h3 className="text-[24px] font-bold m-0 text-[#262626]">{member.name}</h3>
              </div>
              <div className="bg-[#FFBE99] border-[1.5px] border-[#262626] p-2 rounded-lg flex items-center justify-center">
                ✉️
              </div>
            </div>
            
            <div className="bg-[#FFF9F5] border-2 border-[#262626] rounded-xl p-[20px] text-left shadow-[4px_4px_0px_#262626]">
              <h4 className="text-[18px] font-bold m-0 mb-2.5 text-[#262626]">Qualification: {member.role}</h4>
              <p className="text-[15px] text-[#4C4C4C] leading-[1.6] m-0">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
