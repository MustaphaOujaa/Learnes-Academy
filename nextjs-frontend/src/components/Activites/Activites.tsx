import React from 'react';

const Activites = () => {
  const activities = [
    { 
      title: "Sports and Athletics", 
      desc: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.", 
      icon: "⚡" 
    },
    { 
      title: "Art and Creativity", 
      desc: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.", 
      icon: "🎨" 
    },
    { 
      title: "Music and Performing Arts", 
      desc: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.", 
      icon: "🎵" 
    },
    { 
      title: "Language Clubs", 
      desc: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.", 
      icon: "🧩" 
    },
    { 
      title: "Science Club", 
      desc: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.", 
      icon: "🔬" 
    },
    { 
      title: "Cooking and Culinary Arts", 
      desc: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.", 
      icon: "✨" 
    }
  ];

  return (
    <section className="bg-[#FFF9F5] py-[100px] px-[5%] font-sans text-[#1A1A1A]">
      <div className="text-center max-w-[900px] mx-auto mb-[80px]">
        <span className="inline-block py-2 px-[18px] border-2 border-[#1A1A1A] rounded-lg bg-white font-semibold mb-[25px]">
          Our Features
        </span>
        <h2 className="text-[34px] md:text-[48px] font-extrabold mb-[25px]">Extracurricular Activities</h2>
        <p className="text-[#4C4C4C] leading-[1.7] text-base">
          At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[60px] md:gap-y-[80px] lg:gap-y-[100px] gap-x-0 md:gap-x-5 lg:gap-x-[30px] max-w-[1280px] mx-auto">
        {activities.map((item, index) => (
          <div key={index} className="relative h-full">
            
            <div className="absolute top-2.5 left-2.5 w-full h-full bg-[#1A1A1A] rounded-[15px] z-[1]"></div>
            
            <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[15px] p-[60px_35px_35px] z-[2] h-full box-border">
            
              <div className="absolute top-[-28px] left-[30px] w-[58px] h-[58px] bg-[#FFEFE5] border-2 border-[#1A1A1A] rounded-xl flex items-center justify-center text-[26px]">
                {item.icon}
              </div>
              <h3 className="text-[24px] font-bold mb-[18px] text-[#1A1A1A]">{item.title}</h3>
              <p className="text-[#595959] text-base leading-[1.6] m-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activites;
