import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';
import bonds_hero from '@/assets/images/bonds_hero.png';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import '../../app/bonds/bonds.css';
import { GoDotFill } from "react-icons/go";

export default function HeroSection() {
  return (
    <div className="relative h-full sm:h-[90vh] flex items-center bg-gradient-to-r from-[#014e44] 38% to-[#006563] 100% sm:bg-[#014e44] sm:bg-none flex-col pt-10 rounded-b-[50px]">
      <WidthXL>
        {/* Left Section (Text Content) */}
        <div className="flex flex-col items-center sm:items-start gap-4 sm:py-36 pt-28 sm:pt-32 relative w-full sm:w-1/2 px-5 sm:px-0">
          <h1 className="font-lato font-bold text-4xl sm:text-6xl text-white text-center sm:text-start">
            Bonds
          </h1>
          <p className="font-lato font-medium text-sm sm:text-lg text-gray-200 text-wrap text-center sm:text-start">
            Bonds are fixed income instruments (debt instruments) issued by
            government or corporate institutions to raise capital as a loan.
            They are often categorized based on tax status, credit quality,
            issuer type, maturity, and whether they are secured or unsecured.
          </p>
          <button className="flex items-center gap-3 sm:gap-4 bg-accentLime pl-[20px] py-[10px] pr-[10px] rounded-full mt-8">
            <p className="text-black font-semibold text-sm sm:text-base capitalize">
              Chat With Us
            </p>
            <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
              <GoArrowRight size={24} />
            </span>
          </button>
        </div>
      </WidthXL>
      {/* Right Section (Image) */}
      <div className="hidden sm:block absolute inset-y-0 right-0 w-1/2 z-0 rounded-bl-[50px]">
        <Image
          src={bonds_hero}
          alt="Bonds Background"
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-bl-[50px]"
        />
      </div>

      {/* Right Section (Image for Mobile screen*/}
      <div className="relative block sm:hidden w-full h-80 z-0">
        <Image
          src={bonds_hero}
          alt="Bonds Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className='absolute bottom-4'>
        <div className='text-gray-50 font-lato font-extrabold text-2xl sm:text-[38px] flex whitespace-nowrap gap-10 animate-bondsHorizontalScroll'>
          <p className='flex items-center gap-3'><GoDotFill/>STABLE INCOME WITH LOWER RISKS</p>
          <p className='flex items-center gap-3'><GoDotFill/>STABLE INCOME WITH LOWER RISKS</p>
          <p className='flex items-center gap-3'><GoDotFill/>STABLE INCOME WITH LOWER RISKS</p>
        </div>
      </div>
    </div>
  );
}
