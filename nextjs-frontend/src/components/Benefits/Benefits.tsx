import React from 'react';

const Benefits = () => {
  const benefitsData = [
    {
      title: "Holistic Learning Approach",
      desc: "Our curriculum focuses on cognitive, social, emotional, and physical development, ensuring a well-rounded foundation.",
      icon: "🎓"
    },
    {
      title: "Experiential Learning",
      desc: "We provide hands-on experiences that make learning fun and engaging, fostering curiosity and exploration.",
      icon: "🧪"
    },
    {
      title: "Nurturing Environment",
      desc: "Our center offers a warm and caring atmosphere where every child feels safe, loved, and valued.",
      icon: "🏠"
    },
    {
      title: "Play-Based Learning",
      desc: "We believe in the power of play to enhance creativity, problem-solving, and social skills.",
      icon: "🧩"
    },
    {
      title: "Individualized Attention",
      desc: "Our small class sizes ensure that each child receives personal attention and support tailored to their needs.",
      icon: "👩‍🏫"
    },
    {
      title: "Parent Involvement",
      desc: "We value the partnership between home and school and encourage parent participation and communication.",
      icon: "🤝"
    }
  ];

  return (
    <section className="bg-[#FFF5F1] py-[80px] px-[10%] text-center">
      <span className="bg-white border border-[#ddd] py-[5px] px-[15px] rounded-[20px] text-[14px] inline-block mb-[15px]">Children Power through learning</span>
      <h2 className="text-[36px] font-extrabold mb-[15px] text-[#333333]">Our Benefits</h2>
      <p className="text-[#666666] max-w-[700px] mx-auto mb-[50px] leading-[1.6]">
        With a thick and personal approach to each child's individual needs, our curriculum ensures that children thrive in their early years.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="bg-white p-[40px_30px] rounded-[20px] border border-[#f0f0f0] text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-[10px]">
            <div className="bg-[#FFF0E8] w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-[25px] text-[24px]">
              {benefit.icon}
            </div>
            <h3 className="text-[20px] mb-[15px] text-[#333333] font-bold">{benefit.title}</h3>
            <p className="text-[15px] text-[#666666] leading-[1.6]">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
