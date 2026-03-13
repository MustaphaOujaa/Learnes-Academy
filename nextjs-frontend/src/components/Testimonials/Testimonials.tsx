import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Jennifer B",
      avatar: "👩‍💼", 
      rating: "⭐⭐⭐⭐⭐",
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
      id: 2,
      name: "David K",
      avatar: "👨‍💼",
      rating: "⭐⭐⭐⭐⭐",
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
      id: 3,
      name: "Emily L",
      avatar: "👩‍🎨",
      rating: "⭐⭐⭐⭐⭐",
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    }
  ];

  return (
    <section className="bg-neo-bg py-[60px] px-5 text-center font-sans">
      <div className="mb-[50px]">
        <span className="inline-block py-1.5 px-[15px] bg-white border-2 border-[#1A1A1A] rounded-lg font-semibold text-sm mb-[15px]">
          Their Happy Words 😊
        </span>
        <h2 className="text-[42px] font-extrabold text-[#1A1A1A] mb-[15px]">Our Testimonials</h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 max-w-[1400px] mx-auto">
        <button className="hidden sm:flex w-[50px] h-[50px] bg-white border-2 border-[#1A1A1A] rounded-lg text-xl cursor-pointer shadow-[3px_3px_0px_#1A1A1A] items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#1A1A1A]">
          ←
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {reviews.map((item) => (
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[15px] p-[40px_30px] text-center shadow-[6px_6px_0px_#1A1A1A] relative" key={item.id}>
              <div className="mb-[15px]">
                <div className="w-[60px] h-[60px] border-2 border-[#1A1A1A] rounded-full mx-auto mb-2.5 flex items-center justify-center text-[30px] bg-neo-bg">
                  {item.avatar}
                </div>
                <h3 className="font-extrabold text-lg text-[#1A1A1A]">{item.name}</h3>
              </div>
              <div className="mb-[15px] tracking-widest">{item.rating}</div>
              <p className="text-[15px] leading-[1.6] text-[#333] font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <button className="hidden sm:flex w-[50px] h-[50px] bg-white border-2 border-[#1A1A1A] rounded-lg text-xl cursor-pointer shadow-[3px_3px_0px_#1A1A1A] items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#1A1A1A]">
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
