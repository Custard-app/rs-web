import BasicbondSection from '@/sections/bonds/BasicbondSection'
import BondTypesSection from '@/sections/bonds/BondTypesSection'
import FAQSection from '@/sections/bonds/FAQSection'
import HeroSection from '@/sections/bonds/HeroSection'
import GetstartSection from '@/sections/bonds/GetstartSection'
import WidthXXL from '@/wrapper/widths/WidthXXL'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go';

export default function page() {
  return (
    <>
        <HeroSection/>
        <BasicbondSection/>
        <BondTypesSection/>  
        <GetstartSection/>
        <FAQSection/>
        {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative px-5">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Ready to Invest?
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-[20px] text-wrap text-center text-gray-100">
              Connect with us and secure your investment in corporate bonds!
              </p>
            </div>

            <Link
                href="https://calendly.com/llprupeestop/30min"
                target="_blank"
            className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
                Chat With Us
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </Link>

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
    </>
  )
}
