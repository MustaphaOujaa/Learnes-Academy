import React from 'react';
import './StudentForm.css';

function StudentForm() {
  return (
    <div className="page-wrapper">
      <div className="container">
        
       
        <header className="header-section">
          <div className="badge-container">
            <span className="badge-text">Contact Form</span>
          </div>
          <h1 className="title">Student Information</h1>
          <p className="description">
            If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs.
          </p>
        </header>

        
        <main className="form-card">
          
          
          <div className="social-header">
            <div className="social-icon-box"><i className="fa-brands fa-facebook"></i></div>
            <div className="social-icon-box"><i className="fa-brands fa-twitter"></i></div>
            <div className="social-icon-box"><i className="fa-brands fa-linkedin"></i></div>
          </div>

          <form className="form-content">
            <div className="grid-row">
              <div className="input-field">
                <label>Parent Name</label>
                <input type="text" placeholder="Enter Parent Name" />
              </div>
              <div className="input-field">
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email Address" />
              </div>
            </div>

            <div className="grid-row">
              <div className="input-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter Phone Number" />
              </div>
              <div className="input-field">
                <label>Student Name</label>
                <input type="text" placeholder="Enter Student Name" />
              </div>
            </div>

            <div className="grid-row">
              <div className="input-field">
                <label>Student Age</label>
                <input type="text" placeholder="Enter Student Age" />
              </div>
              <div className="input-field">
                <label>Program of Interest</label>
                <div className="custom-select">
                  <select defaultValue="">
                    <option value="" disabled>Select Program</option>
                    <option value="preschool">Preschool</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-field full-width">
              <label>Message</label>
              <textarea placeholder="Enter your Message"></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default StudentForm;