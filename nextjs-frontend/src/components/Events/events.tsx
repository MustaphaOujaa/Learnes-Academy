import React from 'react';
import Image from 'next/image';

const Events = () => {
  const eventList = [
    {
      title: "Annual Sports Day",
      desc: "A day filled with friendly competition, team spirit, and sportsmanship.",
      img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=600"
    },
    {
      title: "Cultural Festivals",
      desc: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600"
    },
    {
      title: "Art Exhibitions",
      desc: "Showcasing our students' artistic talents through exhibitions and displays.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
    },
    {
      title: "Science Fair",
      desc: "A platform for budding scientists to present their innovative projects and experiments.",
      img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=600"
    },
    {
      title: "International Day",
      desc: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600"
    },
    {
      title: "Graduation Ceremony",
      desc: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
    }
  ];
  
  return (
    <section className="bg-[#FFF9F5] py-[80px] px-[5%] text-center font-sans">
      <div className="mb-[60px]">
        <span className="inline-block py-1.5 px-4 border-2 border-[#1A1A1A] rounded-lg bg-white font-medium mb-5 text-[14px]">
          Our Features
        </span>
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1A1A1A] m-0">Events & Celebrations</h2>
        <p className="max-w-[800px] mx-auto mt-5 text-[#4C4C4C] leading-[1.6] text-base">
          At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. 
          Throughout the year, we host a variety of events and celebrations that bring the entire school community together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[80px] gap-x-[30px] max-w-[1150px] mx-auto">
        {eventList.map((eventL, index) => (
          <div key={index} className="relative w-full">
            
            <div className="absolute top-[10px] left-[10px] w-full h-full bg-[#1A1A1A] rounded-[20px] z-[1]"></div>
            
            <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[20px] p-[45px_25px_30px_25px] z-[2] h-[400px] flex flex-col items-center">
              
              <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 w-[55px] h-[10px] bg-[#FFEFE5] border-2 border-[#1A1A1A] border-b-0 rounded-t-lg"></div>
              
              <div className="w-[90%] aspect-[1.5/1] border-2 border-[#1A1A1A] rounded-[14px] overflow-hidden mb-[25px] bg-[#F8F8F8] relative">
                <Image 
                  src={eventL.img}
                  alt={eventL.title} 
                  fill
                  className="object-cover block" 
                />
              </div>

              <div className="text-center">
                <h3 className="text-[24px] font-bold mb-3 text-[#1A1A1A]">{eventL.title}</h3>
                <p className="text-[15px] text-[#595959] leading-[1.5] m-0">{eventL.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
