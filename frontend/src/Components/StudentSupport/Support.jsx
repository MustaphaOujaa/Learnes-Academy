import React from 'react';
import './Support.css';

const Support = () => {
  const services = [
    {
      title: "Counseling",
      desc: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
      icon: "💡"
    },
    {
      title: "Learning Support",
      desc: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
      icon: "📖"
    },
    {
      title: "Parent-Teacher Collaboration",
      desc: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
      icon: "👥"
    }
  ];

  return (
    <section className="support-section">
      <div className="support-header">
        <span className="support-badge">Our Achievements</span>
        <h2 className="support-title">Student Support</h2>
        <p className="support-subtitle">
          At Little Learners Academy, we are committed to providing a supportive and nurturing environment 
          that meets the unique needs of each student. Our student support services include
        </p>
      </div>

      <div className="support-grid">
        {services.map((item, index) => (
          <div key={index} className="support-card-wrapper">
            <div className="support-card-shadow"></div>
            <div className="support-card">
              <div className="support-icon-box">
                {item.icon}
              </div>
              <h3 className="service-h3">{item.title}</h3>
              <p className="service-p">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;