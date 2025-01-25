import dynamic from 'next/dynamic';
import BecomerichSection from '@/sections/newsLetter/BecomerichSection';
import FinanceTetrisSection from '@/sections/newsLetter/financeTetris/FinanceTetrisSection';
import HeroSection from '@/sections/newsLetter/HeroSection';
const JourneyCarousel = dynamic(
  () => import('@/sections/newsLetter/journeyCarousel/JourneyCarousel'),
  { ssr: false },
);
import PastNewsletterSection from '@/sections/newsLetter/PastNewsletterSection';
import RoadmapSection from '@/sections/newsLetter/RoadmapSection';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import '../bonds/bonds.css';

export default function page() {
  return (
    <div className="bg-white relative">
      <HeroSection />
      <JourneyCarousel />
      <div className="px-5 sm:px-0 w-full sm:w-[1000px] flex flex-col items-center justify-center mx-auto py-32 gap-5 sm:gap-10">
        <h1 className="font-poppins font-bold text-[32px] sm:text-[56px] text-center text-wrap text-black">
          Our Newsletter is designed to turn these aspirations into Reality
        </h1>
        <p className="font-lato font-medium text-sm sm:text-[20px] text-center text-wrap text-black w-full sm:w-[70%] mx-auto">
          Picture yourself achieving your dreams—whether it&#39;s buying that
          bike, investing your hard-earned money, or attaining financial
          independence early.
        </p>
      </div>
      <div className="w-full" 
      style={{
        background:"linear-gradient(90deg, rgba(193,245,88,1) 0%, rgba(203,247,114,1) 87%)",
      }}
      >
        <div className="text-black font-lato font-medium text-lg sm:text-xl flex whitespace-nowrap gap-8 sm:gap-24 animate-bondsHorizontalScroll py-2">
          <p className="flex items-center gap-3">
            <GoDotFill className='text-white'/>
            Subscribe to our Newsletter
          </p>
          <p className="flex items-center gap-3">
            <GoDotFill className='text-white'/>
            Subscribe to our Newsletter
          </p>
          <p className="flex items-center gap-3">
            <GoDotFill className='text-white'/>
            Subscribe to our Newsletter
          </p>
        </div>
      </div>

      <RoadmapSection />
      <PastNewsletterSection />
      <FinanceTetrisSection />
      <BecomerichSection />
    </div>
  );
}
