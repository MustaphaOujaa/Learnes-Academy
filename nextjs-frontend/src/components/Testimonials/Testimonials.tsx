"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: "Jennifer B",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
  },
  {
    id: 2,
    name: "David K",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
  },
  {
    id: 3,
    name: "Emily L",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
  },
  {
    id: 4,
    name: "Michael T",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "An incredible school! The teachers are passionate and the curriculum is perfectly designed to foster creativity and curiosity in young children."
  },
  {
    id: 5,
    name: "Sarah M",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "I've seen such a positive transformation in my daughter since she started here. The school creates a truly warm and welcoming environment for every child."
  },
  {
    id: 6,
    name: "Robert J",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    text: "The programs are fantastic and the teachers genuinely care. My son looks forward to school every single day — that says everything!"
  }
];

const CARDS_PER_PAGE = 3;

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4 justify-center">
    {[...Array(count)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FF8A5B" stroke="#FF8A5B" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);

  const prev = () => setCurrentIndex((i) => (i === 0 ? totalPages - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === totalPages - 1 ? 0 : i + 1));

  const visibleReviews = reviews.slice(
    currentIndex * CARDS_PER_PAGE,
    currentIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section id="testimonials" className="bg-neo-bg py-[80px] px-5 text-center font-sans">
      <div className="mb-[50px]">
        <span className="inline-block py-1.5 px-[15px] bg-white border-2 border-[#1A1A1A] rounded-lg font-semibold text-sm mb-[15px]">
          Their Happy Words 
        </span>
        <h2 className="text-[42px] font-extrabold text-[#1A1A1A] mb-[15px]">Our Testimonials</h2>
        <p className="max-w-[800px] mx-auto text-[#4C4C4C] leading-[1.6]">
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 max-w-[1400px] mx-auto">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous testimonials"
          className="flex-shrink-0 w-[50px] h-[50px] bg-white border-2 border-[#1A1A1A] rounded-lg text-xl cursor-pointer shadow-[3px_3px_0px_#1A1A1A] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#1A1A1A] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#1A1A1A]"
        >
          ←
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {visibleReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-[15px] p-[40px_30px] text-center shadow-[6px_6px_0px_#1A1A1A] relative"
            >
              {/* Avatar */}
              <div className="mb-[15px]">
                <div className="w-[70px] h-[70px] border-2 border-[#1A1A1A] rounded-full mx-auto mb-3 overflow-hidden shadow-[3px_3px_0px_#1A1A1A]">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A1A1A] leading-tight">{item.name}</h3>
                <span className="text-[13px] text-[#FF8A5B] font-semibold">{item.role}</span>
              </div>

              <StarRating count={item.rating} />

              <p className="text-[15px] leading-[1.6] text-[#333] font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next testimonials"
          className="flex-shrink-0 w-[50px] h-[50px] bg-white border-2 border-[#1A1A1A] rounded-lg text-xl cursor-pointer shadow-[3px_3px_0px_#1A1A1A] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#1A1A1A] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#1A1A1A]"
        >
          →
        </button>
      </div>

      {/* Page Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-[#1A1A1A] transition-all duration-200 ${
              i === currentIndex ? 'bg-[#FF8A5B] scale-125' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
