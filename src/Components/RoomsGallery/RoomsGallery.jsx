import React, { useState } from 'react';
import './RoomsGallery.css';


const RoomsGallery = () => {
  const rooms = ["Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"];
  const allTabs = ["All", ...rooms];
  
  const [activeTab, setActiveTab] = useState("All");

  const galleryData = {
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

  // دالة الأسهم المصلحة
  const handleArrowClick = (direction, currentRoomKey) => {
    const currentIndex = rooms.indexOf(currentRoomKey);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % rooms.length;
    } else {
      newIndex = (currentIndex - 1 + rooms.length) % rooms.length;
    }
    
    // إذا كان المستخدم في وضع All، الأسهم تحوله لوضع الغرفة الواحدة للتصفح
    setActiveTab(rooms[newIndex]);
  };

  const displayKeys = activeTab === "All" ? rooms : [activeTab];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-badge">Our Gallery</span>
        <h2 className="gallery-main-title">Our Rooms Gallery</h2>
      </div>

      <div className="tabs-container">
        {allTabs.map((tab) => (
          <button 
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="all-cards-container">
        {displayKeys.map((key) => (
          <div key={key} className="gallery-card-wrapper">
            <div className="gallery-hard-shadow"></div>
            <div className="gallery-main-card">
              <div className="images-grid">
                {galleryData[key].images.map((img, index) => (
                  <div key={index} className="img-frame">
                    <img src={img} alt={key} />
                  </div>
                ))}
              </div>

              <div className="card-footer">
                <div className="text-info">
                  <h3 className="room-title">{galleryData[key].title}</h3>
                  <p className="room-desc">{galleryData[key].description}</p>
                </div>
                <div className="nav-arrows">
                  {/* أضفنا الـ onClick هنا وتمرير المفتاح الحالي */}
                  <button className="arrow-btn" onClick={() => handleArrowClick('prev', key)}>←</button>
                  <button className="arrow-btn" onClick={() => handleArrowClick('next', key)}>→</button>
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