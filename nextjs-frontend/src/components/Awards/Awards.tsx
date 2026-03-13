import React from 'react';
import Image from 'next/image';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Outstanding Early Childhood Education Award",
      desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education.",
      icon: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" 
    },
    {
      id: 2,
      title: "Innovative STEAM Education Award",
      desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs.",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
    },
    {
      id: 3,
      title: "Environmental Stewardship Award",
      desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913520.png"
    }
  ];

  return (
    <section className="bg-[#FFF9F5] py-[80px] px-5 w-full flex flex-col items-center font-sans">
      <div className="w-full text-center max-w-[1200px]">
        <span className="inline-block py-1.5 px-[14px] bg-white border border-[#262626] rounded-md text-sm font-medium mb-5 text-[#262626]" id="awards">
          Our Achievements
        </span>
        <h2 className="text-[38px] font-bold my-[15px] text-[#262626]">
          Our Awards and Recognitions
        </h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences.
        </p>

        <div className="grid grid-cols-[minmax(250px,400px)] lg:grid-cols-[repeat(3,minmax(250px,380px))] gap-[30px] w-full max-w-[1200px] mt-[60px] mx-auto justify-center">
          {awards.map((item) => (
            <div key={item.id} className="bg-white border-2 border-[#262626] rounded-xl p-[40px_30px_30px] shadow-[8px_8px_0px_#262626] relative text-center flex flex-col items-center">
              <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 bg-[#FFBE99] border-2 border-[#262626] border-t-0 p-3 rounded-b-[10px] w-[50px] h-[50px] flex items-center justify-center box-border z-10">
                <Image src={item.icon} alt="icon" width={24} height={24} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#262626] mt-5 mb-[15px]">{item.title}</h3>
              <p className="text-sm leading-[1.6] text-[#4C4C4C]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
