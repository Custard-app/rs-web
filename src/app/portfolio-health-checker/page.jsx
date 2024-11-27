import FAQSection from '@/sections/portfolioHealthChecker/FAQSection';
import GetstartSection2 from '@/sections/portfolioHealthChecker/GetstartSection2';
import HeroSection from '@/sections/portfolioHealthChecker/HeroSection';
import HowItWorks from '@/sections/portfolioHealthChecker/HowItWorks';
import PortfolioCards from '@/sections/portfolioHealthChecker/PortfolioCards';
import TestimonialSection from '@/sections/portfolioHealthChecker/TestimonialSection';
import UsePhcSection from '@/sections/portfolioHealthChecker/UsePhcSection';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

function page() {
  return (
    <div className="bg-white">
      <HeroSection />
      <UsePhcSection />
      <HowItWorks />
      <PortfolioCards/>
      <GetstartSection2 />
      <button className="mb-24 mx-auto flex items-center gap-3 sm:gap-4 bg-accentLime pl-[20px] py-[10px] pr-[10px] rounded-full mt-8">
        <p className="text-black font-semibold text-sm sm:text-[20px] capitalize">
          Check Portfolio health
        </p>
        <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
          <GoArrowRight size={24} />
        </span>
      </button>
      <TestimonialSection/>
      <FAQSection />
      {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative ">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
            Get Started
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-sm sm:text-[20px] text-wrap text-center text-gray-100">
              Ready to optimize your portfolio? Click the button below to start using the Portfolio Health Checker now!
              </p>
            </div>

            <button className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
              Check Portfolio health
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </button>

            {/* Big circle */}
            <div className="absolute -left-8 sm:-left-14 -top-14 sm:-top-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -left-8 sm:-left-20 -top-14  sm:-top-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* For BOttom */}
            {/* Big circle */}
            <div className="absolute -right-8 sm:-right-14 -bottom-14 sm:-bottom-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -right-8 sm:-right-20 -bottom-14  sm:-bottom-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>
          </div>
        </WidthXXL>
      </div>
    </div>
  );
}

export default page;
