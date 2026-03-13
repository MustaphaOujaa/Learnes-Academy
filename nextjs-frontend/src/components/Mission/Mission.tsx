import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <div className="bg-[#FFF9F5] font-sans">
      <section className="text-center py-[40px] px-[5%]">
        <span className="border border-[#262626] py-1.5 px-[14px] rounded-md text-sm inline-block mb-5 bg-white font-medium text-[#262626]" id='mission'>
          Mission & Visions
        </span>
        <h2 className="text-[36px] font-bold text-[#262626] mb-[15px]">Our Mission & Visions</h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[50px] max-w-[1400px] mx-auto">
          {/* Mission */}
          <div className="bg-white border-2 border-[#262626] rounded-xl shadow-[8px_8px_0px_#262626] relative p-[50px] text-left">
            <div className="flex justify-between items-center mb-[30px]">
              <h2 className="text-[32px] font-bold text-[#262626] m-0">Mission</h2>
              <Image src="https://cdn-icons-png.flaticon.com/512/1054/1054190.png" width={60} height={60} alt="mission" className="w-[60px] h-auto" />
            </div>
            <p className="text-base leading-[1.6] text-[#4C4C4C] flex-1">
              At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border-2 border-[#262626] rounded-xl shadow-[8px_8px_0px_#262626] relative p-[50px] text-left">
            <div className="flex justify-between items-center mb-[30px]">
              <h2 className="text-[32px] font-bold text-[#262626] m-0">Vision</h2>
              <Image src="https://cdn-icons-png.flaticon.com/512/2853/2853504.png" width={60} height={60} alt="vision" className="w-[60px] h-auto" />
            </div>
            <p className="text-base leading-[1.6] text-[#4C4C4C] flex-1">
              Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
