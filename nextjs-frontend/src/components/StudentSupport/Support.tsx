import React from 'react';

const Support = () => {
  const services = [
    {
      title: "Counseling",
      desc: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
      icon: "💡"
    },
    {
      title: "Learning Support",
      desc: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
      icon: "📖"
    },
    {
      title: "Parent-Teacher Collaboration",
      desc: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
      icon: "👥"
    }
  ];

  return (
    <section className="bg-[#FFF9F5] py-[80px] px-[5%] font-sans text-center">
      <div className="mb-[80px]">
        <span className="inline-block py-2 px-4 border-2 border-[#1A1A1A] rounded-lg bg-white font-semibold mb-5 text-[14px]">
          Our Achievements
        </span>
        <h2 className="text-[32px] md:text-[42px] font-extrabold mb-5 text-[#1A1A1A]">Student Support</h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          At Little Learners Academy, we are committed to providing a supportive and nurturing environment 
          that meets the unique needs of each student. Our student support services include
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[60px] gap-x-[30px] max-w-[1200px] mx-auto">
        {services.map((item, index) => (
          <div key={index} className="relative h-full">
            <div className="absolute top-[10px] left-[10px] w-full h-full bg-[#1A1A1A] rounded-[15px] z-[1]"></div>
            
            <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[15px] p-[60px_30px_40px] z-[2] h-full text-left">
              <div className="absolute top-[-28px] left-[25px] w-[56px] h-[56px] bg-[#FFEFE5] border-2 border-[#1A1A1A] rounded-xl flex items-center justify-center text-[24px]">
                {item.icon}
              </div>
              <h3 className="text-[24px] font-bold mb-[15px] text-[#1A1A1A]">{item.title}</h3>
              <p className="text-[16px] text-[#595959] leading-[1.6] m-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
