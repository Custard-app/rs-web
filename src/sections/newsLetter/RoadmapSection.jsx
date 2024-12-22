'use client';

import React from 'react';
// import { FiTrendingUp, FiShoppingBag, FiScooter, FiDollarSign } from "react-icons/fi";
import newletterSubtract from '@/assets/images/newletterSubtract.png';
import newsletterArrow from '@/assets/images/newsletter-arrow.png';
import pigiBank from '@/assets/images/pigiBank.png';
import trandingImage from '@/assets/images/trandingImage.png';
import walletImage from '@/assets/images/walletImage.png';
import scooterImage from '@/assets/images/scooterImage.png';
import archedArrow from '@/assets/images/undraw_arched-arrow.png';
import Image from 'next/image';
import WidthXXL from '@/wrapper/widths/WidthXXL';

function RoadmapSection() {
  return (
    <div className="bg-[#1E1E1E]">
      <WidthXXL>
        <div className="flex flex-col items-center justify-center relative pt-10">
          {/* Title */}
          <h1 className="absolute left-2 top-10 text-white font-bold text-4xl sm:text-5xl text-center w-[600px]">
          Imagine Having a Clear Roadmap to Navigate your Financial Journey
          </h1>

          {/* Roadmap Container */}

          <div className='w-full relative overflow-hidden'>
            <Image
              src={newletterSubtract}
              alt="Image"
              className="object-cover w-full"
            />
            <Image
              src={newsletterArrow}
              alt="Image"
              className="absolute top-5 left-4 object-cover w-full"
            /> 
            {/* Pigi Bank */}
            <Image 
            src={pigiBank}
            alt='bankImage'
            className="absolute bottom-28 left-12"
            />
            <Image 
            src={archedArrow}
            alt='archedArrow'
            className="absolute bottom-72 left-20 scale-x-[-1] rotate-[20deg]"
            />
            
            {/* Tranding Image */}
            <Image 
            src={trandingImage}
            alt='trandingImage'
            className="absolute top-80 left-[400px]"
            />
            <Image 
            src={archedArrow}
            alt='archedArrow'
            className="absolute bottom-[340px] left-[540px] scale-x-[-1] rotate-[150deg]"
            />

            {/* Wallet Image */}
            <Image 
            src={walletImage}
            alt='walletImage'
            className="absolute bottom-40 right-[460px]"
            />
            <Image 
            src={archedArrow}
            alt='archedArrow'
            className="absolute bottom-24 right-[450px] scale-y-[1] rotate-[110deg]"
            />

            {/* Scooter Image */}
            <Image 
            src={scooterImage}
            alt='scooterImage'
            className="absolute bottom-96 right-28"
            />
            <Image 
            src={archedArrow}
            alt='archedArrow'
            className="absolute top-56 right-28 scale-y-[1] rotate-[0deg]"
            />
          </div>
        </div>
      </WidthXXL>
    </div>
  );
}

export default RoadmapSection;
