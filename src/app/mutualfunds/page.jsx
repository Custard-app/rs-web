import dynamic from 'next/dynamic';
import HeroSection from '@/sections/mutualFunds/HeroSection';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import mutualfund2 from '@/assets/images/mutualfund2.png';
import birlamf from '@/assets/images/birlamf.png';
import hdfcmf from '@/assets/images/hdfcmf.png';
import sbimf from '@/assets/images/sbimf.png';
import icicimf from '@/assets/images/icicimf.png';
import reliancemf from '@/assets/images/reliancemf.png';
import axismf from '@/assets/images/axismf.png';
import './mutualfunds.css';
import AdvntMfSection from '@/sections/mutualFunds/AdvntMfSection';
import MFCarouselSection from '@/sections/mutualFunds/MFCarouselSection';
import AnimatedCards from '@/sections/mutualFunds/carousel/AnimatedCards';
import ExploreMFSection from '@/sections/mutualFunds/ExploreMFSection';
// import ExploreCalculatorsSection from '@/sections/mutualFunds/ExploreCalculatorsSection';
const ExploreCalculatorsSection = dynamic(() => import('@/sections/mutualFunds/ExploreCalculatorsSection'), {
  ssr: false,
});
import JourneyMFSection from '@/sections/mutualFunds/JourneyMFSection';
import GuideMFSection from '@/sections/mutualFunds/GuideMFSection';
import FAQSection from '@/sections/mutualFunds/FAQSection';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { GoArrowRight } from 'react-icons/go';

function page() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className=" px-5 sm:px-0 py-14 sm:py-24">
        <WidthXL>
          <div className="w-full flex flex-col-reverse sm:flex-row items-center gap-8 mb-8">
            <div className="w-full sm:w-1/2">
              <Image src={mutualfund2} alt="image" />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-3 text-center sm:text-start">
              <h2 className="font-poppins font-semibold text-[32px] sm:text-[42px]">
                What are Mutual Funds?
              </h2>
              <p className="font-lato font-medium text-sm sm:text-lg text-center sm:text-start">
                Mutual funds pool money from many investors to purchase
                securities. They are managed by professional fund managers who
                allocate the fund&#39;s investments and attempt to produce
                capital gains or income for the fund&#39;s investors. Mutual
                funds offer diversification, liquidity, and professional
                management, making them an attractive investment option for
                individuals.
              </p>
            </div>
          </div>
          <div className="relative w-full sm:w-[70%] mx-auto bg-white overflow-hidden">
            <p className="text-center font-lato font-semibold text-primary text-2xl mb-4">
              Compaines Providing Mutual Funds
            </p>
            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="flex items-center animate-marquee whitespace-nowrap">
              {/* Single Set of Images */}
              <Image
                src={birlamf}
                alt="birla mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={axismf}
                alt="axis mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={hdfcmf}
                alt="hdfc mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={sbimf}
                alt="sbi mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={icicimf}
                alt="icici mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={reliancemf}
                alt="reliance mutualfund"
                className="h-20 object-contain mx-4"
              />

              {/* Duplicate Set for Seamless Transition */}
              <Image
                src={birlamf}
                alt="birla mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={axismf}
                alt="axis mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={hdfcmf}
                alt="hdfc mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={sbimf}
                alt="sbi mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={icicimf}
                alt="icici mutualfund"
                className="h-20 object-contain mx-4"
              />
              <Image
                src={reliancemf}
                alt="reliance mutualfund"
                className="h-20 object-contain mx-4"
              />
            </div>
          </div>
        </WidthXL>
      </div>
      <AdvntMfSection />
      <MFCarouselSection />
      <ExploreMFSection />
      <ExploreCalculatorsSection />
      <JourneyMFSection />
      <GuideMFSection />
      <FAQSection />
      {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative ">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Ready to Invest?
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-[20px] text-wrap text-center text-gray-100">
                Get personalized advice from our expert advisors. Click the
                button below to chat with us directly on WhatsApp and secure
                your investment in corporate fixed deposits!
              </p>
            </div>

            <button className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
                Chat With Us
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
