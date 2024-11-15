'use client';
import { useState, useEffect } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import QuickCards from './QuickCards';
import mutualFundImg from '@/assets/images/profit-growth.png';
import fixedDepositImg from '@/assets/images/keywords.png';
import pmsImg from '@/assets/images/pms.png';
import bonds from '@/assets/images/certificate.png';
import dream1 from '@/assets/images/dream1.png';
import dream2 from '@/assets/images/dream2.png';
import dream3 from '@/assets/images/dream3.png';
import './Dreamsection.css';
import { FaRegFlag } from 'react-icons/fa6';

function Dreamsection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      age: 30,
      name: 'Rahul',
      goal: 'I want to explore the world without worrying about',
      highlightText: 'Want to buy a car?',
      shadowText: "Need to fulfill your child's dream?",
      yearsLeft: '3 more years to go...',
      imageUrl: dream1,
    },
    {
      age: 31,
      name: 'Shubham',
      goal: "I want to invest in my child's future",
      highlightText: 'Saving for college?',
      shadowText: 'Want to start a business?',
      yearsLeft: '2 more years to go...',
      imageUrl: dream2,
    },
    {
      age: 32,
      name: 'Mohit',
      goal: 'I want to retire early',
      highlightText: 'Ready to retire?',
      shadowText: 'Want to buy a house?',
      yearsLeft: '1 more year to go...',
      imageUrl: dream3,
    },
  ];

  const products = [
    {
      image: mutualFundImg,
      heading: 'Mutual Funds',
      content: 'Invest in diversified portfolios to maximize returns.',
    },
    {
      image: fixedDepositImg,
      heading: 'Fixed Deposits',
      content: 'Safe and secure investments with guaranteed returns.',
    },
    {
      image: pmsImg,
      heading: 'Portfolio Management Services (PMS)',
      content:
        'Customized investment solutions for high net-worth individuals. ',
    },
    {
      image: bonds,
      heading: 'Bonds',
      content: 'Consistent earnings with minimized financial risk.',
    },
  ];

  const years = [0, 1, 2]; // Indices for the years

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % years.length);
    }, 3000); // Adjust interval time as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [years.length]);

  return (
    <div className="px-5 sm:px-0 bg-white">
      <WidthXL>
        <div className="my-14 sm:my-24 overflow-hidden">
          <div className="w-full flex flex-col items-center mb-16 gap-5 z-5">
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase flex flex-col sm:flex-row gap-1 sm:gap-0 text-center">
              Do you have a{' '}
              <span className="text-primary font-protestRiot capitalize">
                Dream ?
              </span>
            </h1>
            <p className="text-sm sm:text-xl font-lato font-medium">
              There&#39;s no limit on how much we can dream, right?
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row        items-center justify-between gap-5">
            {/* Left Side - Text and Scroller */}
            <div className="w-full sm:w-1/2 px-12 py-6 bg-teal-700 text-white rounded-[30px] h-[440px] flex flex-col gap-8 relative">
              <h3 className="text-right font-lato italic text-xl">
                {data[scrollPosition].name}, {data[scrollPosition].age} Yrs
              </h3>
              <div className="flex items-center justify-center flex-col gap-4">
                <p className="font-lato italic text-3xl w-80 text-wrap text-center">
                  {data[scrollPosition].goal}
                </p>
                <p className="text-base text-green-300">
                  {data[scrollPosition].highlightText}
                </p>
                <p className="text-sm text-green-500 opacity-70">
                  {data[scrollPosition].shadowText}
                </p>
              </div>

              <div className="absolute w-[80%] bottom-12 left-12 sm:left-16 mx-auto">
                

                <div className="mt-4 sm:mt-6 relative flex gap-4 items-start">
                  {/* Scroller Bar */}
                  <input
                    type="range"
                    min="0"
                    max={data.length - 1}
                    value={scrollPosition}
                    onChange={(e) => setScrollPosition(Number(e.target.value))}
                    className="w-full h-2 sm:h-3 appearance-none rounded-full range-track"
                    style={{
                      background: `linear-gradient(to right, #00EE67 0%, #00EE67 ${
                        (scrollPosition / (data.length - 1)) * 100
                      }%, #E5E5E5 ${
                        (scrollPosition / (data.length - 1)) * 100
                      }%, #E5E5E5 100%)`,
                    }}
                  />
                  <div className="flex flex-col items-center gap-2 -mt-2">
                    <FaRegFlag className="text-[#00EE67] w-5 sm:w-6" />
                    <p className="font-lato font-medium text-xs">Target</p>
                  </div>

                  {/* Display the year above the thumb */}
                  <div className="mt-2 sm:mt-4">
                    <p
                      className="inline-block p-1 sm:p-2 text-xs font-medium font-lato bg-white text-teal-700 rounded-md absolute -top-8 transform translate-x-[-40%]"
                      style={{
                        left: `${(scrollPosition / (data.length - 1)) * 100}%`,
                      }}
                    >
                      {data[scrollPosition].yearsLeft}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full sm:w-1/2 bg-gray-300 h-[440px] rounded-[30px]">
              <img
                src={data[scrollPosition].imageUrl.src}
                alt="Travel Goal"
                className="rounded-[30px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* STOP DREAMING SECTION */}
        <div className="my-10 sm:my-24">
          <div className="w-full flex flex-col items-center mb-12 sm:mb-16 gap-5 ">
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-center">
              STOP DREAMING,{' '}
              <span className="text-primary font-protestRiot capitalize">
                Invest With Us!{' '}
              </span>
            </h1>
            <p className="text-sm sm:text-xl font-lato font-medium">
              Join us to transform your dreams into reality
            </p>
          </div>
          {/* CARDS */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-x-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="sm:flex-grow transition-all duration-300 ease-out group-hover:flex-[1] hover:flex-[2] cursor-pointer"
              >
                <QuickCards product={product} />
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default Dreamsection;
