import React from 'react';
import './Process.css';

const AdmissionProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Inquiry",
      description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
    },
    {
      number: "02",
      title: "School Tour",
      description: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
    },
    {
      number: "03",
      title: "Application Form",
      description: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
    },
    {
      number: "04",
      title: "Parent Interview",
      description: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
    },
    {
      number: "05",
      title: "Student Assessment",
      description: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
    },
    {
      number: "06",
      title: "Acceptance",
      description: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
    }
  ];

  return (
    <section className="admission-container">
      <div className="header-wrapper">
        <div className="badge">Process</div>
        <h1 className="main-title">Admission Process</h1>
        <p className="description-text">
          Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            {/* الجزء الخاص برقم الخطوة */}
            <div className="number-container">
              <div className="number-box-shadow"></div>
              <div className="number-box">{step.number}</div>
            </div>

            {/* الخط البرتقالي الرابط */}
            <div className="orange-connector"></div>

            {/* بطاقة المحتوى */}
            <div className="card-container">
              <div className="card-shadow"></div>
              <div className="card-content">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;