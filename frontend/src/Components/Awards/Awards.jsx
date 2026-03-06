import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Outstanding Early Childhood Education Award",
      desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education.",
      icon: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" // أيقونة تقريبية
    },
    {
      id: 2,
      title: "Innovative STEAM Education Award",
      desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs.",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
    },
    {
      id: 3,
      title: "Environmental Stewardship Award",
      desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913520.png"
    }
  ];

  return (
    <section className="awards-section">
      <div className="container">
        <span className="badge" id = 'awards'>Our Achievements</span>
        <h2 style={{ fontSize: '38px', fontWeight: '700', margin: '15px 0' }}>
          Our Awards and Recognitions
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#4C4C4C' }}>
          Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences.
        </p>

        <div className="awards-grid">
          {awards.map((item) => (
            <div key={item.id} className="award-card">
              <div className="award-icon-wrapper">
                <img src={item.icon} alt="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;