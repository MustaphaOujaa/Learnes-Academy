import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1A1A1A] p-[40px_60px_15px] border-2 border-[#1A1A1A] w-[95%] mx-auto mb-5 rounded-xl max-w-[1280px] shadow-[4px_4px_0px_#1A1A1A]">
      <div className="flex flex-col md:flex-row justify-between gap-[30px] mb-[30px]">
        {/* Section 1: Brand & Contact */}
        <div className="flex-[1.2] max-w-[320px]">
          <div className="flex items-center gap-2 font-bold text-xl mb-[25px]">
            <div className="bg-[#FF8A5B] border-2 border-[#1A1A1A] p-1 rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <span>Little Learners</span>
          </div>
          <p className="text-[14px] leading-[1.6] text-[#595959] mb-[30px] font-medium">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@littlelearners.com" className="flex items-center gap-3 text-[14px] font-semibold text-[#1A1A1A] hover:underline">
              <div className="bg-[#FFEFE7] border-2 border-[#1A1A1A] p-1.5 rounded-lg w-9 h-9 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span>hello@littlelearners.com</span>
            </a>
            <a href="tel:+919181323209" className="flex items-center gap-3 text-[14px] font-semibold text-[#1A1A1A] hover:underline">
              <div className="bg-[#FFEFE7] border-2 border-[#1A1A1A] p-1.5 rounded-lg w-9 h-9 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span>+91 91813 23 2309</span>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] font-semibold text-[#1A1A1A] hover:underline">
              <div className="bg-[#FFEFE7] border-2 border-[#1A1A1A] p-1.5 rounded-lg w-9 h-9 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span>Somewhere in the World</span>
            </a>
          </div>
        </div>

        {/* Section 2: Links */}
        <div className="flex-[2] flex flex-wrap md:flex-nowrap justify-between gap-5">
          <div className="mb-5 md:mb-0">
            <h4 className="text-[17px] mb-[20px] font-bold">Home</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><Link href="/#features" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Features</Link></li>
              <li className="mb-3"><Link href="/#testimonials" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Our Testimonials</Link></li>
              <li className="mb-3"><Link href="/#faq" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">FAQ</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[17px] mb-[20px] font-bold">About Us</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><Link href="/about#mission" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Our Mission</Link></li>
              <li className="mb-3"><Link href="/about#vision" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Our Vision</Link></li>
              <li className="mb-3"><Link href="/about#awards" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Awards and Recognitions</Link></li>
              <li className="mb-3"><Link href="/about#history" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">History</Link></li>
              <li className="mb-3"><Link href="/about#teachers" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Teachers</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[17px] mb-[20px] font-bold">Academics</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><Link href="/academics#special-features" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Special Features</Link></li>
              <li className="mb-3"><Link href="/academics#gallery" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Gallery</Link></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="text-[17px] mb-[20px] font-bold">Contact Us</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><Link href="/contact#information" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Information</Link></li>
              <li className="mb-3"><Link href="/contact#map" className="text-[#595959] text-[14px] font-medium transition-colors hover:text-black">Map & Direction</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#1A1A1A] py-[25px] flex justify-between items-center sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="#terms" className="text-[#595959] text-[14px] font-medium">Terms of Service</Link>
          <div className="w-[2px] h-4 bg-[#1A1A1A]"></div>
          <Link href="#privacy" className="text-[#595959] text-[14px] font-medium">Privacy Policy</Link>
          <div className="w-[2px] h-4 bg-[#1A1A1A]"></div>
          <Link href="#cookie" className="text-[#595959] text-[14px] font-medium">Cookie Policy</Link>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#FFE4D6] border-2 border-[#1A1A1A] w-[44px] h-[44px] flex items-center justify-center rounded-xl shadow-[2px_2px_0px_#1A1A1A] transition-transform hover:-translate-y-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#FFE4D6] border-2 border-[#1A1A1A] w-[44px] h-[44px] flex items-center justify-center rounded-xl shadow-[2px_2px_0px_#1A1A1A] transition-transform hover:-translate-y-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#FFE4D6] border-2 border-[#1A1A1A] w-[44px] h-[44px] flex items-center justify-center rounded-xl shadow-[2px_2px_0px_#1A1A1A] transition-transform hover:-translate-y-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-[#1A1A1A] pt-[20px] text-center text-[13px] text-[#595959] font-medium">
        Copyright © (2023) Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
