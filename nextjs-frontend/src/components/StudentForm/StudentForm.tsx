"use client";

import React, { useState } from 'react';

function StudentForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "1f8dd6d4-0a1e-4591-a8c4-1cab9095831e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred while submitting the form.");
    }
  };

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

        <main className="relative bg-white border-2 border-[#262626] rounded-2xl p-[80px_20px_40px] md:p-[80px_50px_50px]">
          
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 flex gap-[15px]">
            <div className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#262626] rounded-[10px] flex items-center justify-center text-[22px]">
              fb
            </div>
            <div className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#262626] rounded-[10px] flex items-center justify-center text-[22px]">
              tw
            </div>
            <div className="w-[60px] h-[60px] bg-[#FFEFE7] border-2 border-[#262626] rounded-[10px] flex items-center justify-center text-[22px]">
              ln
            </div>
          </div>

          <form className="flex flex-col gap-[25px] text-left" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Parent Name</label>
                <input type="text" name="parent_name" placeholder="Enter Parent Name" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Email Address</label>
                <input type="email" name="email" placeholder="Enter Email Address" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Phone Number" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Student Name</label>
                <input type="text" name="student_name" placeholder="Enter Student Name" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Student Age</label>
                <input type="text" name="student_age" placeholder="Enter Student Age" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-semibold text-[#4C4C4D]">Program of Interest</label>
                <div>
                  <select name="program" required defaultValue="" className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full appearance-none">
                    <option value="" disabled>Select Program</option>
                    <option value="Preschool">Preschool</option>
                    <option value="Kindergarten">Kindergarten</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <label className="font-semibold text-[#4C4C4D]">Message</label>
              <textarea name="message" placeholder="Enter your Message" required className="bg-[#FCFCFD] border border-[#F1F1F3] p-[18px] rounded-xl text-[15px] outline-none w-full h-[150px] resize-none"></textarea>
            </div>

            <button type="submit" className="bg-[#FFB085] text-[#262626] border-2 border-[#262626] font-semibold text-[18px] p-5 rounded-xl cursor-pointer transition-transform active:scale-95">
              Submit
            </button>
          </form>
          {result && <p className="mt-5 font-bold text-center">{result}</p>}
        </main>
      </div>
    </div>
  );
}

export default StudentForm;
