import React from 'react';

const Welcome = ({ btn, welcome, text }: { btn: string, welcome: string, text: string }) => {
  return (
    <section className="bg-[#FFF9F5] py-[100px] px-10 flex justify-center font-sans">
      <div className="relative bg-white border-2 border-[#262626] rounded-xl max-w-[1200px] w-full p-[60px_20px] lg:p-[80px_50px] shadow-[6px_6px_0px_#262626] overflow-hidden">
        
        <div className="absolute top-[-10px] left-[-10px] flex">
          <div className="flex flex-col">
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
          </div>
          <div className="flex flex-col">
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
          </div>
          <div className="flex flex-col">
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
          </div>
          <div className="flex flex-col">
            <div className="w-[25px] h-[25px] m-[1px] bg-[#FFBE99]"></div>
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
          </div>
          <div className="flex flex-col">
            <div className="w-[25px] h-[25px] m-[1px] bg-[#262626]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] text-center lg:text-left relative z-10 lg:mt-0 mt-8">
          <div className="flex-1">
            <div className="mb-5">
              <span className="border-[1.5px] border-[#262626] py-1.5 px-[14px] rounded-md text-sm font-medium inline-block bg-white text-[#262626]">
                {btn}
              </span>
            </div>
            <h1 className="text-[30px] lg:text-[44px] font-bold text-[#262626] leading-[1.1] m-0">
              {welcome}
            </h1>
          </div>

          <div className="flex-[1.2]">
            <p className="text-base leading-[1.6] text-[#4C4C4C] m-0">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
