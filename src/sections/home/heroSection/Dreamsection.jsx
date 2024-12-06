'use client';
import { useState, useEffect } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';
import dream1 from '@/assets/images/dream1.png';
import dream2 from '@/assets/images/dream2.png';
import dream3 from '@/assets/images/dream3.png';

function Dreamsection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false); // Fade effect state

  const data = [
    {
      age: 30,
      name: 'Rahul',
      goal: 'I want to explore the world without worrying about',
      highlightText: 'Want to buy a car?',
      shadowText: "Need to fulfill your child's dream?",
      yearsLeft: '3 more years to go...',
      imageUrl: dream1,
      width: 90,
    },
    {
      age: 31,
      name: 'Shubham',
      goal: "I want to invest in my child's future",
      highlightText: 'Saving for college?',
      shadowText: 'Want to start a business?',
      yearsLeft: '2 more years to go...',
      imageUrl: dream2,
      width: 20,
    },
    {
      age: 32,
      name: 'Mohit',
      goal: 'I want to retire early',
      highlightText: 'Ready to retire?',
      shadowText: 'Want to buy a house?',
      yearsLeft: '1 more year to go...',
      imageUrl: dream3,
      width: 55,
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % data.length); 
        setFade(false); 
      }, 300); // Match the fade duration
    }, 3000); 

    return () => clearInterval(interval); 
  }, [data.length]);

  return (
    <div className="px-5 sm:px-0 bg-white">
      <WidthXL>
        <div className="my-14 sm:my-24 overflow-hidden">
          {/* Header */}
          <div className="w-full flex flex-col items-center mb-16 gap-5 z-5">
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase flex flex-col sm:items-center sm:flex-row gap-2 sm:gap-3 text-center">
              Do you have a{' '}
              <span className="text-primary font-protestRiot capitalize">
                Dream?
              </span>
            </h1>
            <p className="text-sm sm:text-xl font-lato font-medium">
              There&#39;s no limit on how much we can dream, right?
            </p>
          </div>

          {/* Main Content */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Left Side - Text */}
            <div
              className={`w-full sm:w-1/2 px-12 py-6 bg-teal-700 text-white rounded-[30px] h-[440px] flex flex-col gap-8 relative transition-opacity duration-500 `}
            >
              <h3 className={`text-right font-lato italic text-xl transition-all duration-500 transform ${
                fade ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}>
                {data[activeIndex].name}, {data[activeIndex].age} Yrs
              </h3>
              <div
                className={`flex items-center justify-center flex-col gap-4 transition-all duration-500 transform ${
                  fade ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <p className="font-lato italic text-3xl w-80 text-wrap text-center">
                  {data[activeIndex].goal}
                </p>
                <p className="text-base text-green-300 italic">
                  {data[activeIndex].highlightText}
                </p>
                <p className="text-sm text-green-500 opacity-70 italic">
                  {data[activeIndex].shadowText}
                </p>
              </div>

              {/* Custom Range Scroller at the Bottom */}
              <div className="w-[80%] mx-auto absolute bottom-14 left-6 right-6">
                <div className="relative w-full h-3 bg-gray-50 rounded-full">
                  {/* Scroll Track */}
                  <div
                    className="absolute top-0 left-0 h-full bg-[#00EE67] rounded-full transition-all duration-300"
                    style={{
                      width: `${data[activeIndex].width}%`,
                    }}
                  ></div>

                  {/* Scroll Thumb */}
                  <div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-white border-[2px] border-[#00EE67] rounded-full cursor-pointer transition-all duration-300"
                    style={{
                      left: `${data[activeIndex].width}%`,
                    }}
                  >
                    <div className="absolute -top-10 left-3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-8 text-xs rounded-lg p-2 bg-white text-[#344054] triangle-box">
                      {data[activeIndex].yearsLeft}
                    </div>
                    <div
                      className="absolute -top-[21px] left-3 transform -translate-x-1/2 -translate-y-1/2 
                        w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className={`w-full sm:w-1/2 bg-gray-300 h-[440px] rounded-[30px] transition-opacity duration-500 ${
                fade ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img
                src={data[activeIndex].imageUrl.src}
                alt="Dream Goal"
                className="rounded-[30px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default Dreamsection;
