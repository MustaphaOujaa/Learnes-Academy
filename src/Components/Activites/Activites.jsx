import React from 'react';
import './Activites.css';

const Activites = () => {
  const activities = [
    { 
      title: "Sports and Athletics", 
      desc: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.", 
      icon: "⚡" 
    },
    { 
      title: "Art and Creativity", 
      desc: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.", 
      icon: "🎨" 
    },
    { 
      title: "Music and Performing Arts", 
      desc: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.", 
      icon: "🎵" 
    },
    { 
      title: "Language Clubs", 
      desc: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.", 
      icon: "🧩" 
    },
    { 
      title: "Science Club", 
      desc: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.", 
      icon: "🔬" 
    },
    { 
      title: "Cooking and Culinary Arts", 
      desc: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.", 
      icon: "✨" 
    }
  ];

  return (
    <section className="activities-section">
      <div className="header-container">
        <span className="section-badge">Our Features</span>
        <h2 className="section-title">Extracurricular Activities</h2>
        <p className="section-subtitle">
          At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including
        </p>
      </div>

      <div className="activities-grid">
        {activities.map((item, index) => (
          <div key={index} className="activity-card-container">
            {/* الظل الأسود الصلب */}
            <div className="activity-shadow"></div>
            
            {/* الكارد الرئيسي */}
            <div className="activity-card">
              {/* الأيقونة العلوية المنفصلة */}
              <div className="activity-icon-box">
                {item.icon}
              </div>
              <h3 className="activity-h3">{item.title}</h3>
              <p className="activity-p">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activites;