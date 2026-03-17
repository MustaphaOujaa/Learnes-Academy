"use client";
import React, { useState } from 'react';

type FormData = {
  parent_name: string;
  email: string;
  phone: string;
  student_name: string;
  student_age: string;
  program: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function StudentForm() {
  const [formData, setFormData] = useState<FormData>({
    parent_name: '',
    email: '',
    phone: '',
    student_name: '',
    student_age: '',
    program: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.parent_name) newErrors.parent_name = "Parent name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (minimum 10 digits)";
    }
    if (!formData.student_name) newErrors.student_name = "Student name is required";
    if (!formData.student_age) {
      newErrors.student_age = "Student age is required";
    } else if (isNaN(Number(formData.student_age)) || Number(formData.student_age) <= 0) {
      newErrors.student_age = "Please enter a valid age";
    }
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Specifically prevent letters in phone number and age fields
    if (name === 'phone') {
      const numericValue = value.replace(/[^\d\s\+\-]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else if (name === 'student_age') {
      const numericValue = value.replace(/[^\d]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setResult("Sending....");
    
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => submitData.append(key, value));
    submitData.append("access_key", "1f8dd6d4-0a1e-4591-a8c4-1cab9095831e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        setFormData({
          parent_name: '',
          email: '',
          phone: '',
          student_name: '',
          student_age: '',
          program: '',
          message: ''
        });
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name: keyof FormData) => `
    bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full
    transition-all focus:border-[#FFB085] 
    ${errors[name] ? 'border-red-500 bg-red-50' : ''}
  `;

  return (
    <div className="bg-[#FFF5F0] min-h-screen py-[60px] px-5 flex items-center justify-center font-sans">
      <div className="w-full max-w-[950px] text-center">
        <header className="mb-[60px]">
          <div className="mb-[20px]">
            <span className="inline-block py-1.5 px-[18px] border-[1.5px] border-[#262626] rounded-lg bg-white text-[14px]">
              Contact Form
            </span>
          </div>
          <h1 className="text-[32px] md:text-[44px] font-bold text-[#1A1A1A] my-5">Student Information</h1>
          <p className="text-[#4C4C4D] leading-[1.6]">
            If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below.
          </p>
        </header>

        <main className="relative bg-white border-2 border-[#1A1A1A] rounded-2xl p-[80px_20px_40px] md:p-[80px_50px_50px] shadow-[6px_6px_0px_#1A1A1A]">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 flex gap-[15px]">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#1A1A1A] rounded-[10px] flex items-center justify-center hover:-translate-y-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#1A1A1A] rounded-[10px] flex items-center justify-center hover:-translate-y-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#1A1A1A] rounded-[10px] flex items-center justify-center hover:-translate-y-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <form className="flex flex-col gap-[25px] text-left" onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Parent Name</label>
                <input type="text" name="parent_name" value={formData.parent_name} onChange={handleChange} placeholder="Enter Parent Name" className={inputClass('parent_name')} />
                {errors.parent_name && <span className="text-red-500 text-xs font-bold">{errors.parent_name}</span>}
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Address" className={inputClass('email')} />
                {errors.email && <span className="text-red-500 text-xs font-bold">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" className={inputClass('phone')} />
                {errors.phone && <span className="text-red-500 text-xs font-bold">{errors.phone}</span>}
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Student Name</label>
                <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} placeholder="Enter Student Name" className={inputClass('student_name')} />
                {errors.student_name && <span className="text-red-500 text-xs font-bold">{errors.student_name}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Student Age</label>
                <input type="text" name="student_age" value={formData.student_age} onChange={handleChange} placeholder="Enter Student Age" className={inputClass('student_age')} />
                {errors.student_age && <span className="text-red-500 text-xs font-bold">{errors.student_age}</span>}
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Program of Interest</label>
                <select name="program" value={formData.program} onChange={handleChange} className={inputClass('program')}>
                  <option value="" disabled>Select Program</option>
                  <option value="Preschool">Preschool</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="Pre-Kindergarten">Pre-Kindergarten</option>
                </select>
                {errors.program && <span className="text-red-500 text-xs font-bold">{errors.program}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <label className="font-semibold text-[#4C4C4D]">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your Message" className={`${inputClass('message')} h-[150px] resize-none`}></textarea>
              {errors.message && <span className="text-red-500 text-xs font-bold">{errors.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className="bg-[#FFB085] text-[#1A1A1A] border-2 border-[#1A1A1A] font-bold text-[18px] p-5 rounded-xl cursor-pointer transition-all active:scale-95 hover:bg-[#ff9a6a] disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_#1A1A1A]">
              {isSubmitting ? 'Sending...' : 'Submit Form'}
            </button>
          </form>
          {result && (
            <p className={`mt-6 font-bold text-center p-4 rounded-xl border-2 border-[#1A1A1A] ${result.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {result}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default StudentForm;
