import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1A1A1A] p-[40px_60px_15px] border border-[#262626] mx-5 mb-5 rounded-lg max-w-[1200px] xl:mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-[30px] mb-[30px]">
        {/* Section 1: Brand & Contact */}
        <div className="flex-[1.2] max-w-[320px]">
          <div className="flex items-center gap-2 font-semibold text-lg mb-[15px]">
            <span className="w-5 h-5 bg-[#1A1A1A] inline-block"></span>
            <span>Little Learners</span>
          </div>
          <p className="text-[13px] leading-[1.5] text-[#4C4C4D] mb-[25px]">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-[13px] font-normal text-[#1A1A1A]">
              <span className="bg-white border border-[#333] p-1.5 rounded-md w-7 h-7 flex items-center justify-center text-sm">
                 @
              </span>
              <span>hello@littlelearners.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-[13px] font-normal text-[#1A1A1A]">
              <span className="bg-white border border-[#333] p-1.5 rounded-md w-7 h-7 flex items-center justify-center text-sm">
                 ☏
              </span>
              <span>+91 91813 23 2309</span>
            </div>
            <div className="flex items-center gap-2.5 text-[13px] font-normal text-[#1A1A1A]">
              <span className="bg-white border border-[#333] p-1.5 rounded-md w-7 h-7 flex items-center justify-center text-sm">
                 ⚲
              </span>
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>

        {/* Section 2: Links */}
        <div className="flex-[2] flex flex-wrap md:flex-nowrap justify-between gap-5">
          <div className="mb-5 md:mb-0">
            <h4 className="text-[15px] mb-[15px] font-medium">Home</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link href="/#benefits" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Benefits</Link></li>
              <li className="mb-2"><Link href="/#testimonials" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Our Testimonials</Link></li>
              <li className="mb-2"><Link href="/#faq" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">FAQ</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[15px] mb-[15px] font-medium">About Us</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link href="/about#mission" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Our Mission & Vision</Link></li>
              <li className="mb-2"><Link href="/about#awards" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Awards and Recognitions</Link></li>
              <li className="mb-2"><Link href="/about#history" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">History</Link></li>
              <li className="mb-2"><Link href="/about#teachers" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Teachers</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[15px] mb-[15px] font-medium">Academics</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link href="/academics#special-features" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Special Features</Link></li>
              <li className="mb-2"><Link href="/academics#gallery" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Gallery</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[15px] mb-[15px] font-medium">Contact Us</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link href="/contact" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Information</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-[#4C4C4D] text-[13px] transition-colors hover:text-black">Map & Direction</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4E4E7] py-[15px] flex justify-between items-center sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <Link href="#terms" className="text-[#1A1A1A] text-[13px]">Terms of Service</Link>
          <span className="text-black font-light text-[13px]">|</span>
          <Link href="#privacy" className="text-[#1A1A1A] text-[13px]">Privacy Policy</Link>
          <span className="text-black font-light text-[13px]">|</span>
          <Link href="#cookie" className="text-[#1A1A1A] text-[13px]">Cookie Policy</Link>
        </div>
        <div className="flex gap-2">
          <Link href="#" className="bg-[#FFE4D6] border border-black w-[34px] h-[34px] flex items-center justify-center rounded-md text-black text-sm">f</Link>
          <Link href="#" className="bg-[#FFE4D6] border border-black w-[34px] h-[34px] flex items-center justify-center rounded-md text-black text-sm">t</Link>
          <Link href="#" className="bg-[#FFE4D6] border border-black w-[34px] h-[34px] flex items-center justify-center rounded-md text-black text-sm">in</Link>
        </div>
      </div>

      <div className="border-t border-[#E4E4E7] pt-[15px] text-center text-[12px] text-[#4C4C4D]">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
