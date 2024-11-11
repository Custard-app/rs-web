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
    <>
      <WidthXL>
        <div className="my-24 bg-white overflow-hidden">
          <div className="w-full flex flex-col items-center mb-16 gap-5 z-5">
            <h1 className="text-6xl font-extrabold uppercase">
              Do you have a{' '}
              <span className="text-primary font-protestRiot capitalize">
                Dream ?
              </span>
            </h1>
            <p className="text-xl font-lato font-medium">
              There&#39;s no limit on how much we can dream, right?
            </p>
          </div>

          <div className="w-full flex items-center justify-between gap-5">
      {/* Left Side - Text and Scroller */}
      <div className="w-1/2 px-12 py-6 bg-teal-700 text-white rounded-[30px] h-[440px] flex flex-col gap-8 relative">
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

        <div className="absolute w-[80%] bottom-12 left-16 mx-auto">
            {/* Display the year above the thumb */}
          <div className="mt-4">
            <p className="inline-block p-2 bg-white text-teal-700 rounded-md absolute -top-8 transform translate-x-[-50%]" style={{ left: `${(scrollPosition / (data.length - 1)) * 100}%` }}>
              {data[scrollPosition].yearsLeft}
            </p>
          </div>
          <div className="mt-6 relative">
            {/* Scroller Bar */}
            <input
              type="range"
              min="0"
              max={data.length - 1}
              value={scrollPosition}
              onChange={(e) => setScrollPosition(Number(e.target.value))}
              className="w-full h-3 appearance-none rounded-full range-track"
              style={{
                background: `linear-gradient(to right, #00EE67 0%, #00EE67 ${(scrollPosition / (data.length - 1)) * 100}%, #E5E5E5 ${(scrollPosition / (data.length - 1)) * 100}%, #E5E5E5 100%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-gray-300 h-[440px] rounded-[30px]">
        <img
          src={data[scrollPosition].imageUrl.src}
          alt="Travel Goal"
          className="rounded-[30px] w-full h-full"
        />
      </div>
    </div>
        </div>

        {/* STOP DREAMING SECTION */}
        <div className="my-24">
          <div className="w-full flex flex-col items-center mb-16 gap-5 ">
            <h1 className="text-6xl font-extrabold uppercase">
              STOP DREAMING,{' '}
              <span className="text-primary font-protestRiot capitalize">
                Invest With Us!{' '}
              </span>
            </h1>
            <p className="text-xl font-lato font-medium">
              Join us to transform your dreams into reality
            </p>
          </div>
          {/* CARDS */}
          <div className="flex justify-between items-center space-x-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-grow transition-all duration-300 ease-out group-hover:flex-[1] hover:flex-[2] cursor-pointer"
              >
                <QuickCards product={product} />
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </>
  );
}

export default Dreamsection;
