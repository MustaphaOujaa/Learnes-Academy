import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ضع هنا المفتاح الخاص بك الذي وصلك في الإيميل
    formData.append("access_key", "1f8dd6d4-0a1e-4591-a8c4-1cab9095831e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <header className="header-section">
          <div className="badge-container"><span className="badge-text">Contact Form</span></div>
          <h1 className="title">Student Information</h1>
          <p className="description">
            If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below.
          </p>
        </header>

        <main className="form-card">
          {/* أيقونات التواصل الاجتماعي مطابقة تماماً للصورة */}
          <div className="social-header">
            <div className="social-icon-box"><i className="fa-brands fa-facebook"></i></div>
            <div className="social-icon-box"><i className="fa-brands fa-twitter"></i></div>
            <div className="social-icon-box"><i className="fa-brands fa-linkedin"></i></div>
          </div>

          <form className="form-content" onSubmit={onSubmit}>
            <div className="grid-row">
              <div className="input-field">
                <label>Parent Name</label>
                <input type="text" name="parent_name" placeholder="Enter Parent Name" required />
              </div>
              <div className="input-field">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter Email Address" required />
              </div>
            </div>

            <div className="grid-row">
              <div className="input-field">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Phone Number" required />
              </div>
              <div className="input-field">
                <label>Student Name</label>
                <input type="text" name="student_name" placeholder="Enter Student Name" required />
              </div>
            </div>

            <div className="grid-row">
              <div className="input-field">
                <label>Student Age</label>
                <input type="text" name="student_age" placeholder="Enter Student Age" required />
              </div>
              <div className="input-field">
                <label>Program of Interest</label>
                <div className="custom-select">
                  <select name="program" required defaultValue="">
                    <option value="" disabled>Select Program</option>
                    <option value="Preschool">Preschool</option>
                    <option value="Kindergarten">Kindergarten</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-field full-width">
              <label>Message</label>
              <textarea name="message" placeholder="Enter your Message" required></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
          {result && <p className="status-text">{result}</p>}
        </main>
      </div>
    </div>
  );
}

export default StudentForm;