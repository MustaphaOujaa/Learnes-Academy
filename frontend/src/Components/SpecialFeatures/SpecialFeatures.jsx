import React from 'react';
import './SpecialFeatures.css';


const featuresData = [
  {
    icon: '📚', 
    title: 'Thematic Learning',
    description: 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.'
  },
  {
    icon: '📊', 
    title: 'STEAM Education',
    description: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.'
  },
  {
    icon: '🗣️', 
    title: 'Language Immersion',
    description: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.'
  },
  {
    icon: '🖌️', 
    title: 'Art and Creativity',
    description: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.'
  },
  {
    icon: '☀️', 
    title: 'Outdoor Education',
    description: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.'
  },
  {
    icon: '⭐', 
    title: 'Play-Based Learning',
    description: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.'
  }
];

const SpecialFeatures = () => {
  return (
    <div className="sf-outer-container">
      <div className="sf-main-container">
        
       
        <div className="sf-header-badge">
          <span>Our Features</span>
        </div>

     
        <h2 className="sf-main-title">Our Special Features</h2>

       
        <p className="sf-description-text">
          Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
        </p>

        <div className="sf-cards-grid">
          {featuresData.map((feature, index) => (
            <div className="sf-card-wrapper" key={index}>
           
              <div className="sf-icon-wrapper">
                <span className="sf-icon-span">{feature.icon}</span>
              </div>
              
              <div className="sf-card-content">
                <h3 className="sf-card-title">{feature.title}</h3>
                <p className="sf-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SpecialFeatures;