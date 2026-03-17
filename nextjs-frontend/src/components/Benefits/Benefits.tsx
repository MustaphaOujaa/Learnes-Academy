import React from 'react';
import Image from 'next/image';

const Benefits = () => {
  const benefitsData = [
    {
      title: "Holistic Learning Approach",
      desc: "Our curriculum focuses on cognitive, social, emotional, and physical development, ensuring a well-rounded foundation.",
      icon: "https://cdn-icons-png.flaticon.com/512/3534/3534127.png" // Graduation/Book
    },
    {
      title: "Experiential Learning",
      desc: "We provide hands-on experiences that make learning fun and engaging, fostering curiosity and exploration.",
      icon: "https://cdn-icons-png.flaticon.com/512/3067/3067468.png" // Science/Experiment
    },
    {
      title: "Nurturing Environment",
      desc: "Our center offers a warm and caring atmosphere where every child feels safe, loved, and valued.",
      icon: "https://cdn-icons-png.flaticon.com/512/2544/2544087.png" // House/Heart
    },
    {
      title: "Play-Based Learning",
      desc: "We believe in the power of play to enhance creativity, problem-solving, and social skills.",
      icon: "https://cdn-icons-png.flaticon.com/512/806/806214.png" // Puzzle/Blocks
    },
    {
      title: "Individualized Attention",
      desc: "Our small class sizes ensure that each child receives personal attention and support tailored to their needs.",
      icon: "https://cdn-icons-png.flaticon.com/512/10432/10432135.png" // Teacher/Student
    },
    {
      title: "Parent Involvement",
      desc: "We value the partnership between home and school and encourage parent participation and communication.",
      icon: "https://cdn-icons-png.flaticon.com/512/4112/4112705.png" // Handshake/People
    }
  ];

  return (
    <section id="features" className="bg-[#FFFDFB] py-[80px] px-5 text-center font-sans">
      <div className="mb-[50px]">
        <span className="inline-block py-2 px-[18px] bg-white border-2 border-[#1A1A1A] rounded-lg font-semibold text-sm mb-5">
           Children Power through learning
        </span>
        <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#1A1A1A] mb-5">Our Benefits</h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          With a child-centered approach to each child's individual needs, our curriculum ensures that children thrive in their early years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1280px] mx-auto">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="bg-white p-[40px_30px] rounded-[15px] border-2 border-[#1A1A1A] text-left shadow-[6px_6px_0px_#1A1A1A] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[8px_8px_0px_#1A1A1A]">
            <div className="bg-[#FFEFE7] border-2 border-[#1A1A1A] w-[60px] h-[60px] rounded-xl flex items-center justify-center mb-6 shadow-[3px_3px_0px_#1A1A1A]">
              <Image src={benefit.icon} alt={benefit.title} width={34} height={34} className="w-[34px] h-[34px]" />
            </div>
            <h3 className="text-[22px] font-extrabold text-[#1A1A1A] mb-4">{benefit.title}</h3>
            <p className="text-[15px] text-[#4C4C4C] leading-[1.6] font-medium">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

