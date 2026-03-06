import React from 'react';
import './WhatStudentsLearn.css';
import artsImg from "../../assets/arts.jpeg";
import langImg from "../../assets/lang.jpeg";
import mathImg from "../../assets/math.jpeg";
import socialImg from "../../assets/social.jpeg";
import pcImg from "../../assets/physical.jpeg";
import sncImg from "../../assets/snc.jpeg";

const WhatStudentsLearn = () => {
const subjects = [
  { title: "Language Arts", desc: "Reading, writing, storytelling, and communication skills.", img: langImg },
  { title: "Mathematics", desc: "Number sense, basic operations, problem-solving, and logic.", img: mathImg },
  { title: "Science", desc: "Exploring the natural world through hands-on experiments and investigations.", img: sncImg },
  { title: "Social Studies", desc: "Cultivating an understanding of diverse cultures and communities.", img: socialImg },
  { title: "Arts and Crafts", desc: "Encouraging creativity through various art forms and crafts.", img: artsImg },
  { title: "Physical Education", desc: "Promoting physical fitness, coordination, and teamwork.", img: pcImg },
];

  return (
    <section className="learn-section">
      <div className="learn-header">
        <span className="learn-badge">Our Features</span>
        <h2 className="learn-title">What Students Learn</h2>
        <p className="learn-subtitle">
          At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success.
        </p>
      </div>

      <div className="learn-grid">
        {subjects.map((subject, index) => (
          <div key={index} className="card-container">
          
            <div className="card-shadow-layer"></div>
            
            <div className="card-main-body">
             
              <div className="tab-decorator"></div>
              
              
              <div className="image-frame">
                
                <img 
                  src={subject.img}
                  alt={subject.title} 
                  className="subject-image" 
                />
              </div>

              <div className="text-content">
                <h3 className="subject-title">{subject.title}</h3>
                <p className="subject-description">{subject.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatStudentsLearn;