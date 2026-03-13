import React from 'react';

const History = () => {
  const historyData = [
    { year: '2023', title: 'Resilience and Future Horizons', desc: 'Adapting to new challenges and expanding our digital learning tools to ensure uninterrupted education.' },
    { year: '2017', title: 'Innovation and Technology', desc: 'Introduced coding and advanced STEM programs for early learners, fostering a tech-savvy generation.' },
    { year: '2012', title: 'Expansion and Recognition', desc: 'Opened our second campus and received national excellence awards for our curriculum and student support.' },
    { year: '2005', title: 'Inception and Growth', desc: 'The academy was founded with a vision for holistic child development and a commitment to nurturing young minds.' }
  ];

  return (
    <section className="bg-[#FFF9F5] py-[80px] px-5 text-center font-sans">
      <span className="inline-block border border-[#262626] py-1.5 px-[14px] rounded-md text-sm font-medium bg-white text-[#262626] mb-2.5" id="history">
        Our History
      </span>
      <h2 className="text-[40px] font-bold my-2.5 text-[#262626]">Our Journey Through the Years</h2>
      
      <div className="max-w-[1000px] mx-auto mt-[50px] bg-white border-2 border-[#262626] rounded-xl p-[40px_20px] md:p-[60px_40px] shadow-[8px_8px_0px_#262626] relative">
        {/* Vertical Dashed Line */}
        <div className="absolute left-[30px] md:left-[50px] top-[60px] bottom-[60px] border-l-2 border-dashed border-[#FFBE99] z(1)"></div>

        {historyData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[40px] mb-[40px] last:mb-0 relative z-10">
            
            <div className="bg-white border-2 border-[#262626] rounded-xl p-[15px_25px] flex items-center gap-[15px] shadow-[4px_4px_0px_#262626] min-w-[160px]">
              <div className="grid grid-cols-[repeat(3,8px)] gap-[3px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-[8px] h-[8px] rounded-[2px] ${i % 2 === 0 ? 'bg-[#FFBE99]' : 'bg-[#262626]'}`}></div>
                ))}
              </div>
              <span className="text-[28px] font-bold text-[#262626]">{item.year}</span>
            </div>

            <div className="text-left mt-2 md:mt-0 ml-4 md:ml-0">
              <h3 className="text-[22px] font-bold m-0 mb-2.5 text-[#262626]">{item.title}</h3>
              <p className="text-[15px] text-[#4C4C4C] leading-[1.6] m-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
