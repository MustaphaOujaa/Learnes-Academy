import React from 'react';
import './Team.css';

const Team= () => {
  const team = [
    {
      name: "Ms. Sarah Anderson",
      role: "Bachelor's Degree in Early Childhood Education",
      desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment.",
      img: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    {
      name: "Mr. David Roberts",
      role: "Master's Degree in Elementary Education",
      desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <section className="team-section">
      <div className="badge" style={{border:'1px solid #262626', padding:'5px 15px', borderRadius:'6px', display:'inline-block'}}>
        Our Teachers With Expertise
      </div>
      <h2 style={{fontSize: '40px', marginTop: '15px'}}>Our Team Members</h2>
      <p style={{maxWidth: '800px', margin: '15px auto', color: '#4C4C4C'}}>
        At Little Learners Academy, our teaching team is the heart of our educational journey...
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-header">
              <div className="profile-info">
                <img src={member.img} alt={member.name} className="profile-img" />
                <h3>{member.name}</h3>
              </div>
              <div className="social-icon-box">
                ✉️
              </div>
            </div>
            
            <div className="qualification-box">
              <h4>Qualification: {member.role}</h4>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;