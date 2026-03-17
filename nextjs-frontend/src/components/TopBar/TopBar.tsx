import React from 'react';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="bg-[#FBCBA7] w-full py-[10px] px-8 flex items-center justify-between font-sans">

      {/* Left: Checkerboard dot pattern */}
      <div className="hidden sm:grid grid-cols-3 gap-[4px]">
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <div
            key={i}
            className={`w-[6px] h-[6px] rounded-[1px] ${
              [0,2,4,6,8].includes(i) ? 'bg-[#D97848]' : 'bg-[#F5A87B]'
            }`}
          />
        ))}
      </div>

      {/* Center: Admission Text */}
      <div className="flex-1 flex items-center justify-center gap-2">
        <span className="text-[13px] font-semibold text-[#1A1A1A] tracking-[0.01em]">
          Admissions is Open, Grab your seat now
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>

      {/* Right: Graduation Cap */}
      <div className="hidden sm:block">
        <svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Diploma / scroll icon matching design */}
          <rect x="25" y="30" width="50" height="45" rx="4" fill="#D97848" />
          <rect x="30" y="25" width="50" height="45" rx="4" fill="#F5A87B" stroke="#D97848" strokeWidth="2" />
          <line x1="38" y1="42" x2="62" y2="42" stroke="#D97848" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="52" x2="62" y2="52" stroke="#D97848" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="62" x2="55" y2="62" stroke="#D97848" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default TopBar;
