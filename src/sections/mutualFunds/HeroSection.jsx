import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import mutualFundHero from '@/assets/images/mutualfund-hero.png';

function HeroSection() {
  return (
    <div className="relative h-full sm:h-[90vh] flex items-center bg-primary flex-col pt-10">
      <WidthXL>
        {/* Left Section (Text Content) */}
        <div className="flex flex-col items-center sm:items-start gap-4 sm:py-36 pt-28 sm:pt-44 relative w-full sm:w-1/2 px-5 sm:px-0">
          <h1 className="font-lato font-bold text-4xl sm:text-6xl text-white text-center sm:text-start">
            Mutual Funds
          </h1>
          <p className="font-lato font-semibold text-[32px] sm:text-5xl text-gray-50 text-wrap text-center sm:text-start">
            Invest in diversified portfolios to maximize returns.
          </p>
          <p className="font-lato font-medium text-sm sm:text-lg text-gray-200 text-wrap text-center sm:text-start">
            Mutual funds are completely transparent, professionally managed, and
            provide easy withdrawals and better tax-efficient returns.
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
      {/* Right Section (Image with Overlay) */}
      <div className="hidden sm:block absolute inset-y-0 right-0 w-1/2 z-0">
        <Image
          src={mutualFundHero}
          alt="Mutual Funds Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
      </div>

      {/* Right Section (Image with Overlay) for Mobile screen*/}
      <div className="relative block sm:hidden w-full h-80 z-0">
        <Image
          src={mutualFundHero}
          alt="Mutual Funds Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default HeroSection;
