'use client';

import React from 'react';
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
        <div className="flex flex-col items-center justify-center relative pt-10 h-[680px] sm:h-[880px] ">
          {/* Title */}
          <h1 className="absolute left-10 top-10 text-white font-bold text-2xl sm:text-5xl text-start w-[345px] sm:w-[600px] z-10">
            Imagine Having a Clear Roadmap to Navigate your Financial Journey
          </h1>

          {/* Roadmap Container Large screen*/}
          <div className="hidden sm:flex w-full relative overflow-y-hidden z-0 overflow-x-hidden">
            <Image
              src={newletterSubtract}
              alt="Image"
              className="object-cover w-full "
            />
            <Image
              src={newsletterArrow}
              alt="Image"
              className="absolute top-5 left-4 object-cover w-full"
            />
            {/* Pigi Bank */}
            <Image
              src={pigiBank}
              alt="bankImage"
              className="absolute bottom-28 left-12"
            />
            <Image
              src={archedArrow}
              alt="archedArrow"
              className="absolute bottom-72 left-20 scale-x-[-1] rotate-[20deg]"
            />

            {/* Tranding Image */}
            <Image
              src={trandingImage}
              alt="trandingImage"
              className="absolute top-80 left-[400px]"
            />
            <Image
              src={archedArrow}
              alt="archedArrow"
              className="absolute bottom-[340px] left-[540px] scale-x-[-1] rotate-[150deg]"
            />

            {/* Wallet Image */}
            <Image
              src={walletImage}
              alt="walletImage"
              className="absolute bottom-40 right-[460px]"
            />
            <Image
              src={archedArrow}
              alt="archedArrow"
              className="absolute bottom-24 right-[450px] scale-y-[1] rotate-[110deg]"
            />

            {/* Scooter Image */}
            <Image
              src={scooterImage}
              alt="scooterImage"
              className="absolute bottom-96 right-28"
            />
            <Image
              src={archedArrow}
              alt="archedArrow"
              className="absolute top-56 right-28 scale-y-[1] rotate-[0deg]"
            />
          </div>

          {/* Roadmap Container SMALL screen*/}
          <div className="relative flex sm:hidden w-full h-full z-0 overflow-x-auto overflow-y-hidden bg-[#1E1E1E]">
            {/* Scrollable Path */}
            <div className="min-w-[1090px] w-auto h-full flex-shrink-0 relative ">
              <Image
                src={newletterSubtract}
                alt="Image"
                className="object-contain w-full h-full"
                layout="fill"
                priority
              />
              <Image
                src={newsletterArrow}
                alt="Image"
                className="absolute top-[53%] left-[51%] translate-x-[-50%] translate-y-[-50%] w-[1050px] h-full"
                layout="intrinsic"
              />

              {/* Pigi Bank */}
              <Image
                src={pigiBank}
                alt="bankImage"
                className="w-[100px] h-[100px] absolute bottom-24 left-12"
              />
              <Image
                src={archedArrow}
                alt="archedArrow"
                className="w-[30px] h-[45px] absolute bottom-48 left-12 scale-x-[-1] rotate-[5deg]"
              />

              {/* Tranding Image */}
              <Image
                src={trandingImage}
                alt="trandingImage"
                className="w-[100px] h-[100px] absolute top-60 left-[340px]"
              />
              <Image
                src={archedArrow}
                alt="archedArrow"
                className="w-[30px] h-[45px] absolute bottom-[270px] left-[420px] scale-x-[-1] rotate-[150deg]"
              />

              {/* Wallet Image */}
              <Image
                src={walletImage}
                alt="walletImage"
                className="w-[100px] h-[100px] absolute bottom-32 right-[370px]"
              />
              <Image
                src={archedArrow}
                alt="archedArrow"
                className="w-[30px] h-[45px] absolute bottom-24 right-[370px] scale-y-[1] rotate-[110deg]"
              />

              {/* Scooter Image */}
              <Image
                src={scooterImage}
                alt="scooterImage"
                className="w-[100px] h-[100px] absolute bottom-72 right-32"
              />
              <Image
                src={archedArrow}
                alt="archedArrow"
                className="w-[30px] h-[45px] absolute top-52 right-32 scale-y-[1] rotate-[0deg]"
              />
            </div>
          </div>
        </div>
      </WidthXXL>
    </div>
  );
}

export default RoadmapSection;
