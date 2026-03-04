import React from 'react';
import './NavigationPages.css';

const NavigationPages = () => {
  const pages = [
    { title: "About Us", desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education." },
    { title: "Academics", desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development." },
    { title: "Student Life", desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable." },
    { title: "Admissions", desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces." }
  ];

  return (
    <section className="nav-pages-container">
      <div className="section-header">
        <span className="badge">Explore More</span>
        <h1>Navigate through our Pages</h1>
        <p className="sub-text">Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
      </div>

      <div className="pages-grid">
        {pages.map((page, index) => (
          <div className="page-card" key={index}>
            <h2>{page.title}</h2>
            
            {/* الخط المقطع مع الدوائر */}
            <div className="divider-container">
              <div className="dot"></div>
              <div className="dashed-line"></div>
              <div className="dot"></div>
            </div>

            <p className="page-desc">{page.desc}</p>
            
            <button className="learn-more-btn">
              Learn More <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavigationPages;