import React from 'react';
import './Testimonials.css';

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
    <section className="testimonials-section">
      <div className="testi-header">
        <span className="testi-badge">Their Happy Words 😊</span>
        <h2>Our Testimonials</h2>
        <p className="testi-intro">Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
      </div>

      <div className="testi-container">
        <button className="nav-btn">←</button>
        
        <div className="testi-grid">
          {reviews.map((item) => (
            <div className="testi-card" key={item.id}>
              <div className="user-profile">
                <div className="avatar-box">{item.avatar}</div>
                <h3 className="user-name">{item.name}</h3>
              </div>
              <div className="rating">{item.rating}</div>
              <p className="testi-text">{item.text}</p>
            </div>
          ))}
        </div>

        <button className="nav-btn">→</button>
      </div>
    </section>
  );
};

export default Testimonials;