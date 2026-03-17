import React from 'react';

const featuresData = [
  {
    icon: '📚', 
    title: 'Thematic Learning',
    description: 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.'
  },
  {
    icon: '📊', 
    title: 'STEAM Education',
    description: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.'
  },
  {
    icon: '🗣️', 
    title: 'Language Immersion',
    description: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.'
  },
  {
    icon: '🖌️', 
    title: 'Art and Creativity',
    description: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.'
  },
  {
    icon: '☀️', 
    title: 'Outdoor Education',
    description: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.'
  },
  {
    icon: '⭐', 
    title: 'Play-Based Learning',
    description: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.'
  }
];

const SpecialFeatures = () => {
  return (
    <div id="special-features" className="bg-[#F8F6F1] py-[60px] px-5 font-sans text-[#262626]">
      <div className="max-w-[1200px] mx-auto text-center">
        
        <div className="inline-block py-2 px-[18px] border-[1.5px] border-[#262626] rounded-lg mb-[30px] bg-white">
          <span className="text-[13px] font-medium text-[#1A1A1A]">Our Features</span>
        </div>

        <h2 className="text-[38px] font-bold mb-[25px] text-[#1A1A1A]">Our Special Features</h2>

        <p className="max-w-[680px] mx-auto mb-[70px] text-[15px] leading-[1.6] text-[#4C4C4C]">
          Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {featuresData.map((feature, index) => (
            <div className="relative shadow-[4px_4px_0px_#1A1A1A] rounded-xl" key={index}>
              <div className="absolute top-[-15px] left-[15px] w-[44px] h-[44px] bg-[#FFE5D9] border-[1.5px] border-[#1A1A1A] rounded-lg flex items-center justify-center z-10">
                <span className="text-[20px]">{feature.icon}</span>
              </div>
              
              <div className="bg-white p-[60px_25px_35px] border-[1.5px] border-[#1A1A1A] rounded-xl text-left h-full">
                <h3 className="text-[18px] font-semibold mb-5 text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#4C4C4C] m-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SpecialFeatures;
