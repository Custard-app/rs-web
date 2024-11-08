"use client"
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import heroImage from '@/assets/images/heroImage.png'

function Herosection() {
  return (
    <>
      <div className="w-full max-h-screen h-screen flex flex-col items-center relative bg-teal-900 overflow-hidden">
        <h1 className="text-accentGray-400 uppercase font-extrabold text-7xl mt-10">
          Choose Freedom
        </h1>
        <p className="text-accentGray-400 text-xl font-light mt-4">
          Automate your financial decisions with us
        </p>
        <button className="flex items-center bg-accentLime p-2 px-3 rounded-full mt-8 z-5">
          <p className="text-black font-semibold text-base capitalize">
            I want to invest{' '}
          </p>
          <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
            <GoArrowRight size={25} />
          </span>
        </button>

        <div className="mt-10 bg-gradient1 z-10">
          <Image
            src={heroImage} 
            alt="Investment Image"
            width={600}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Curved Background */}
        <div className="absolute w-full h-[300px] bottom-0 left-0 bg-accentGray-300 curve-bg z-0"></div>
      </div>

      {/* Big circle */}
      <div className='absolute -right-36 top-24 w-[1100px] h-[1100px] rounded-full border-[1px] opacity-25'></div>

      <div className='absolute -right-32 top-64 w-[850px] h-[850px] rounded-full border-[1px] opacity-25'></div>

      <style jsx>{`
        .curve-bg {
          background-color: #f3f3fa;
          clip-path: ellipse(55% 80% at 50% 100%); 

        }
      `}</style>
    </>
  );
}

export default Herosection;
