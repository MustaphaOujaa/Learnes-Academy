import React from 'react';

const NavigationPages = () => {
  const pages = [
    { title: "About Us", desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education." },
    { title: "Academics", desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development." },
    { title: "Student Life", desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable." },
    { title: "Admissions", desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces." }
  ];

  return (
    <section className="bg-neo-bg py-[80px] px-[10%] text-center font-sans">
      <div className="mb-[60px]">
        <span className="inline-block py-1.5 px-[15px] border-2 border-[#1A1A1A] rounded-lg bg-white font-semibold mb-5">
          Explore More
        </span>
        <h1 className="text-[36px] md:text-[48px] font-extrabold mb-5 text-[#1A1A1A]">
          Navigate through our Pages
        </h1>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-[1300px] mx-auto">
        {pages.map((page, index) => (
          <div className="bg-white border-2 border-[#1A1A1A] rounded-[20px] p-[50px_40px] shadow-[10px_10px_0px_#1A1A1A] flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#1A1A1A]" key={index}>
            <h2 className="text-[32px] font-extrabold mb-[25px] text-[#1A1A1A]">{page.title}</h2>
            
            <div className="flex items-center w-full gap-3 mb-[30px]">
              <div className="w-3 h-3 border-2 border-[#1A1A1A] rounded-full bg-white shrink-0"></div>
              <div className="flex-grow h-[2px] bg-[linear-gradient(to_right,#FF8A5B_70%,transparent_0%)] bg-[length:25px_2px] bg-repeat-x bg-center"></div>
              <div className="w-3 h-3 border-2 border-[#1A1A1A] rounded-full bg-white shrink-0"></div>
            </div>

            <p className="text-[#4C4C4C] text-base leading-[1.7] mb-[40px] font-medium grow">
              {page.desc}
            </p>
            
            <button className="w-full mt-auto bg-[#FFE5D9] border-2 border-[#1A1A1A] p-[18px] rounded-xl font-extrabold text-base cursor-pointer shadow-[0px_5px_0px_#1A1A1A] flex justify-center items-center gap-2.5 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0px_8px_0px_#1A1A1A] hover:bg-[#FFD6C5] text-[#1A1A1A]">
              Learn More <span className="font-bold">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavigationPages;
