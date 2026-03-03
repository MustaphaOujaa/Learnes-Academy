import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  // السؤال الأول مفتوح افتراضياً (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    { 
      q: "What are the school hours at Little Learners Academy?", 
      a: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." 
    },
    { q: "Is there a uniform policy for students?", a: "Yes, we have a simple and comfortable uniform policy to foster community." },
    { q: "What extracurricular activities are available for students?", a: "We offer music, arts, sports, and coding clubs for all levels." },
    { q: "How do you handle food allergies and dietary restrictions?", a: "We are a nut-free zone and have strict protocols for all dietary needs." },
    { q: "What is the teacher-to-student ratio at Little Learners Academy?", a: "Our ratio is 1:10 to ensure every child gets personalized attention." },
    { q: "How do I apply for admission to Little Learners Academy?", a: "You can apply through our online portal or by visiting our campus." }
  ];

  return (
    <section className="faq-container">
      <div className="faq-header">
        <span className="faq-badge">Solutions For The Doubts</span>
        <h2>Frequently Asked Questions</h2>
        <p>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions.</p>
      </div>

      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-card ${openIndex === index ? 'is-open' : ''}`}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            <div className="faq-top">
              <span className="faq-question">{item.q}</span>
              <div className="faq-icon-box">
                {openIndex === index ? '−' : '+'}
              </div>
            </div>
            
            {openIndex === index && (
              <div className="faq-content">
                <div className="faq-divider"></div>
                <p className="faq-answer">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;