import React from 'react';
import './Events.css';
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
    <section className="learn-section">
      <div className="learn-header">
        <span className="learn-badge">Our Features</span>
        <h2 className="learn-title">Events & Celebrations</h2>
        <p className="learn-subtitle">
          At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. 
          Throughout the year, we host a variety of events and celebrations that bring the entire school community together.
        </p>
        
      </div>

      <div className="learn-grid">
        {eventList.map((eventL, index) => (
          <div key={index} className="card-container">
            {/* الظل الأسود الصلب (Hard Shadow) */}
            <div className="card-shadow-layer"></div>
            
            <div className="card-main-body">
              {/* النتوء الصغير (The Tab) بنفس لون الصورة */}
              <div className="tab-decorator"></div>
              
              {/* إطار الصورة بقياس ثابت 16:10 */}
              <div className="image-frame">
                {/* ضع رابط صورتك هنا مكان الـ src */}
                <img 
                  src={eventL.img}
                  alt={eventL.title} 
                  className="subject-image" 
                />
              </div>

              <div className="text-content">
                <h3 className="subject-title">{eventL.title}</h3>
                <p className="subject-description">{eventL.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;