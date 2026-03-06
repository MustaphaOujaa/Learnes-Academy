import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefitsData = [
    {
      title: "Holistic Learning Approach",
      desc: "Our curriculum focuses on cognitive, social, emotional, and physical development, ensuring a well-rounded foundation.",
      icon: "🎓"
    },
    {
      title: "Experiential Learning",
      desc: "We provide hands-on experiences that make learning fun and engaging, fostering curiosity and exploration.",
      icon: "🧪"
    },
    {
      title: "Nurturing Environment",
      desc: "Our center offers a warm and caring atmosphere where every child feels safe, loved, and valued.",
      icon: "🏠"
    },
    {
      title: "Play-Based Learning",
      desc: "We believe in the power of play to enhance creativity, problem-solving, and social skills.",
      icon: "🧩"
    },
    {
      title: "Individualized Attention",
      desc: "Our small class sizes ensure that each child receives personal attention and support tailored to their needs.",
      icon: "👩‍🏫"
    },
    {
      title: "Parent Involvement",
      desc: "We value the partnership between home and school and encourage parent participation and communication.",
      icon: "🤝"
    }
  ];

  return (
    <section className="benefits-section">
      <span className="section-tag">Children Power through learning</span>
      <h2 className="section-title">Our Benefits</h2>
      <p className="section-subtitle">
        With a thick and personal approach to each child's individual needs, our curriculum ensures that children thrive in their early years.
      </p>

      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="icon-box">
              {benefit.icon}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;