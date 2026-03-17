"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Student Life", href: "/student-life" }
  ];

  return (
    <nav className="bg-[#FFF5F0] py-5 w-full flex justify-center sticky top-0 z-50">
      <div className="w-[95%] max-w-[1280px] flex items-stretch bg-white border-2 border-[#1A1A1A] rounded-xl h-auto lg:h-[70px] relative shadow-[4px_4px_0px_#1A1A1A]">
        
        {/* Logo Section */}
        <div className="bg-[#FF8A5B] flex items-center gap-2.5 px-6 py-4 border-r-2 border-[#1A1A1A] rounded-l-[10px] lg:rounded-l-[10px] z-20">
          <span className="font-extrabold text-[#1A1A1A] whitespace-nowrap">Little Learners</span>
        </div>

        {/* Spacer */}
        <div className="flex-grow z-10 bg-white"></div>

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden lg:flex"} flex-col lg:flex-row absolute lg:static top-[90px] lg:top-auto left-[0] lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent border-2 lg:border-none border-[#1A1A1A] rounded-xl lg:rounded-none z-[999] lg:z-auto shadow-[6px_6px_0px_0px_#1A1A1A] lg:shadow-none m-0 p-0 list-none`}>
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li key={index} className={`border-[#1A1A1A] border-b-2 lg:border-b-0 lg:border-l-2 w-full lg:w-auto flex items-stretch last:border-b-0 ${isActive ? 'bg-[#FFEFE5]' : ''}`}>
                <Link 
                  href={link.href} 
                  className={`text-[#1A1A1A] font-semibold px-5 h-full flex items-center justify-center lg:justify-start text-sm py-5 lg:py-0 w-full transition-colors hover:bg-[#FFEFE5]`} 
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          
          {/* Mobile Only Contact Link */}
          <li className={`lg:hidden w-full border-[#1A1A1A] border-t-2 ${pathname === '/contact' ? 'bg-[#FFEFE5]' : ''}`}>
            <Link 
              href="/contact" 
              className="text-[#1A1A1A] font-semibold px-5 h-full flex items-center justify-center text-sm py-5 w-full hover:bg-[#FFEFE5]" 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex bg-[#FFB088] items-stretch border-l-2 border-[#1A1A1A] rounded-r-[10px] z-20">
          <Link href="/contact" className="text-[#1A1A1A] font-bold px-6 flex items-center justify-center hover:bg-[#ff9a6a] transition-colors h-full">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden flex items-center justify-center bg-[#FFF5F0] border-none border-l-2 border-[#1A1A1A] px-5 py-4 cursor-pointer outline-none rounded-r-[10px] z-20" 
          onClick={toggleMenu}
        >
          <div className="relative w-[25px] h-[20px]">
            <span className="absolute top-0 left-0 block w-[25px] h-[2px] bg-[#1A1A1A] rounded-[2px] transition-transform origin-center" style={{ transform: isOpen ? 'translateY(9px) rotate(45deg)' : 'none' }}></span>
            <span className="absolute top-[9px] left-0 block w-[25px] h-[2px] bg-[#1A1A1A] rounded-[2px] transition-opacity" style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span className="absolute bottom-0 left-0 block w-[25px] h-[2px] bg-[#1A1A1A] rounded-[2px] transition-transform origin-center" style={{ transform: isOpen ? 'translateY(-9px) rotate(-45deg)' : 'none' }}></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
