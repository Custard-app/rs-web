'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { GoArrowRight } from 'react-icons/go';
import heroImage2 from '@/assets/rupeestop_assets/Home page/Images/herosection2.jpg';
import Width3XL from '@/wrapper/widths/Width3XL';
import axios from 'axios';
import Link from 'next/link';

function Herosection() {
  return (
    <div className="bg-teal-900 overflow-hidden relative w-full z-0">
      {/* <Width3XL> */}
      <div className="w-full flex flex-col items-center relative overflow-hidden pb-20 pt-12 sm:pt-20">
        <h1 className="text-accentGray-400 uppercase text-center font-poppins font-bold sm:font-extrabold text-[54px] sm:text-7xl mt-20">
          Choose Freedom
        </h1>
        <p className="text-accentGray-400 font-poppins text-base sm:text-xl font-light mt-4">
          Automate your financial decisions with us
        </p>
        <Link
          href="https://calendly.com/llprupeestop/30min"
          target="_blank"
          className="flex items-center gap-2 sm:gap-3 bg-accentLime  pl-[20px] py-[10px] pr-[10px] rounded-full mt-8"
        >
          <p className="text-black font-semibold text-sm sm:text-base ">
            I want to invest{' '}
          </p>
          <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
            <GoArrowRight size={24} />
          </span>
        </Link>

        <div className="mt-10 bg-gradient1 z-10 rounded-t-xl">
          <Image
            src={heroImage2}
            alt="Investment Image"
            className="rounded-xl shadow-lg h-[200px] sm:h-[477px] w-[351px] sm:w-[967px] object-cover"
          />
        </div>

        {/* Curved Background (Semi-circle) */}
        <div className="absolute w-full h-[300px] bottom-0 left-0 bg-accentGray-300 curve-bg z-0"></div>
      </div>
      {/* </Width3XL> */}

      {/* Big Circle */}
      <div className="hidden sm:flex absolute right-[-10%] top-[10%] w-[1100px] h-[1100px] rounded-full border-[1px] opacity-25"></div>
      {/* Small Circle */}
      <div className="hidden sm:flex absolute right-[-6%] top-[25%] w-[850px] h-[850px] rounded-full border-[1px] opacity-25"></div>

      <style jsx>{`
        .curve-bg {
          background-color: #f3f3fa;
          clip-path: ellipse(55% 80% at 50% 100%);
        }
      `}</style>
    </div>
  );
}

export default Herosection;
