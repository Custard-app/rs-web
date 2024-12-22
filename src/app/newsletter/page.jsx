import BecomerichSection from '@/sections/newsLetter/BecomerichSection';
import FinanceTetrisSection from '@/sections/newsLetter/financeTetris/FinanceTetrisSection';
import HeroSection from '@/sections/newsLetter/HeroSection';
import JourneyCarousel from '@/sections/newsLetter/journeyCarousel/JourneyCarousel';
import PastNewsletterSection from '@/sections/newsLetter/PastNewsletterSection';
import RoadmapSection from '@/sections/newsLetter/RoadmapSection';
import React from 'react';

export default function page() {
  return (
    <div className="bg-white">
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
      <RoadmapSection/>
      <PastNewsletterSection/>
      <FinanceTetrisSection/>
      <BecomerichSection/>
    </div>
  );
}
