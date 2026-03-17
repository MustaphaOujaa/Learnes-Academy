"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type GalleryData = {
  [key: string]: {
    title: string;
    description: string;
    images: string[];
  };
};

const RoomsGallery = () => {
  const rooms = ["Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"];
  const allTabs = ["All", ...rooms];
  
  const [activeTab, setActiveTab] = useState("All");

  const galleryData: GalleryData = {
    "Classrooms": {
      title: "Classrooms",
      description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment.",
      images: [
        "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop"
      ]
    },
    // ... the rest omitted here for brevity since data was large, but I will put it all in. Wait...
    "Library": {
      title: "Library",
      description: "Our expansive library is a treasure trove of books, fostering a love for reading.",
      images: [
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop"
      ]
    },
    "Science Lab": {
      title: "Science Lab",
      description: "Our hands-on science lab allows students to conduct experiments in a fun way.",
      images: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400&auto=format&fit=crop"
      ]
    },
    "Computer Lab": {
      title: "Computer Lab",
      description: "Equipped with technology, the computer lab enhances students' digital literacy.",
      images: [
        "https://images.unsplash.com/photo-1547480053-7d174f67b557?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
      ]
    },
    "Garden and Nature Area": {
      title: "Garden and Nature Area",
      description: "Our garden offers an opportunity for children to connect with nature.",
      images: [
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=400&auto=format&fit=crop"
      ]
    }
  };

  const handleArrowClick = (direction: 'prev' | 'next', currentRoomKey: string) => {
    const currentIndex = rooms.indexOf(currentRoomKey);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % rooms.length;
    } else {
      newIndex = (currentIndex - 1 + rooms.length) % rooms.length;
    }
    
    setActiveTab(rooms[newIndex]);
  };

  const displayKeys = activeTab === "All" ? rooms : [activeTab];

  return (
    <section id="gallery" className="bg-[#FFF9F5] py-[80px] px-[5%] font-sans">
      <div className="text-center mb-[50px]">
        <span className="inline-block py-1.5 px-4 border-2 border-[#1A1A1A] rounded-lg bg-white font-medium mb-[15px] text-[#1A1A1A]">Our Gallery</span>
        <h2 className="text-[42px] font-extrabold m-0 text-[#1A1A1A]">Our Rooms Gallery</h2>
      </div>

      <div className="flex justify-center gap-2.5 flex-wrap mb-[50px]">
        {allTabs.map((tab) => (
          <button 
            key={tab}
            className={`py-2.5 px-5 border-2 border-[#1A1A1A] rounded-xl font-semibold cursor-pointer outline-none transition-colors ${activeTab === tab ? 'bg-[#F5F5F5] shadow-[2px_2px_0px_#1A1A1A]' : 'bg-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[60px] max-w-[1200px] mx-auto">
        {displayKeys.map((key) => (
          <div key={key} className="relative w-full mb-5">
            <div className="absolute top-2.5 left-2.5 w-full h-full bg-[#1A1A1A] rounded-[20px] z-[1]"></div>
            <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[20px] p-[30px] z-[2]">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] mb-[30px]">
                {galleryData[key].images.map((img, index) => (
                  <div key={index} className="border-2 border-[#1A1A1A] rounded-xl overflow-hidden aspect-[1.2/1]">
                    <Image src={img} alt={key} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#EEE] pt-[25px] gap-5">
                <div className="text-left max-w-[100%] md:max-w-[80%]">
                  <h3 className="text-[26px] font-bold mb-2 text-[#1A1A1A]">{galleryData[key].title}</h3>
                  <p className="text-[#555] leading-[1.5] text-[15px] m-0">{galleryData[key].description}</p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className="w-12 h-12 border-2 border-[#1A1A1A] rounded-xl bg-white cursor-pointer text-xl transition-transform active:scale-95 flex items-center justify-center text-[#1A1A1A]" onClick={() => handleArrowClick('prev', key)}>←</button>
                  <button className="w-12 h-12 border-2 border-[#1A1A1A] rounded-xl bg-white cursor-pointer text-xl transition-transform active:scale-95 flex items-center justify-center text-[#1A1A1A]" onClick={() => handleArrowClick('next', key)}>→</button>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsGallery;
