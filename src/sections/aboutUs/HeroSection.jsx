import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import React from 'react';

function HeroSection() {
  return (
    <div className="w-full bg-primary py-44 px-5 sm:px-0">
      <WidthXXL>
        <h1 className="font-poppins font-bold text-3xl sm:text-7xl text-wrap text-white text-center flex flex-col gap-2">
          Your Trusted Partners in
          <span> Simplifying Investment Decisions!</span>
        </h1>
        </WidthXXL>
    </div>
  );
}

export default HeroSection;
