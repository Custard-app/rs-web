'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { GoArrowRight } from 'react-icons/go';
import heroImage from '@/assets/images/heroImage.png';
import Width3XL from '@/wrapper/widths/Width3XL';
import axios from 'axios';

function Herosection() {
  useEffect(() => {
    const NSE_URL =
      'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json';

    const getNiftyMarquee = async () => {
      try {
        const response = axios.get(NSE_URL);
        const data = response.data;
        console.log('Nifthy data:', data);
      } catch (error) {
        console.error('Error scraping NSE data', error);
      }
    };

    getNiftyMarquee();
  }, []);

  return (
    <div className="bg-teal-900 overflow-hidden relative w-full z-0">
      {/* <Width3XL> */}
      <div className="w-full flex flex-col items-center relative overflow-hidden pb-20 pt-12 sm:pt-20">
        <h1 className="text-accentGray-400 text-center font-poppins font-bold sm:font-extrabold text-[54px] sm:text-7xl mt-20">
          Choose Freedom 
        </h1>
        <p className="text-accentGray-400 font-poppins text-base sm:text-xl font-light mt-4">
          Automate your financial decisions with us
        </p>
        <button className="flex items-center gap-3 sm:gap-4 bg-accentLime pl-[20px] py-[10px] pr-[10px] rounded-full mt-8">
          <p className="text-black font-semibold text-sm sm:text-base capitalize">
            I want to invest{' '}
          </p>
          <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
            <GoArrowRight size={24} />
          </span>
        </button>

        <div className="mt-10 bg-gradient1 z-10 rounded-t-xl">
          <Image
            src={heroImage}
            alt="Investment Image"
            className="rounded-xl shadow-lg h-[200px] sm:h-[477px] w-[351px] sm:w-[967px]"
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
