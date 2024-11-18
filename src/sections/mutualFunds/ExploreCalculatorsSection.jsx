'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useState, useEffect } from 'react';

const cardData = [
  {
    title: 'SIP Calculator',
    description: 'Calculate the future value of your SIP investments.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Lump Sum Calculator',
    description: 'Determine the maturity amount of a one-time investment.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Tax Saving Calculator',
    description: 'Plan your tax savings with ease.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Tax Saving Calculator',
    description: 'Plan your tax savings with ease.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Tax Saving Calculator',
    description: 'Plan your tax savings with ease.',
    buttonText: 'Calculate Now',
  },
];

const ExploreCalculatorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }, 9000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);

  return (
    <div className="bg-white pb-14 sm:pb-24 pt-0 sm:pt-24 px-5 sm:px-0">
      <WidthXL>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1 className="font-poppins font-semibold text-[42px] text-wrap text-center sm:text-left">
              Effortlessly Calculate Your Mutual Fund Returns
            </h1>
            <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 px-4 outline-none font-lato font-semibold text-[16px]">
              Explore All Calculators
            </button>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 justify-start"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Adjust to use full width
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-[80%] p-4 transition-opacity duration-500 ${
                    currentIndex === index
                      ? 'opacity-100 scale-100' // Current card: fully visible
                      : currentIndex === index + 1 ||
                        (currentIndex === cardData.length - 1 && index === 0)
                      ? 'opacity-70 scale-95' // Next card: slightly faded and scaled down
                      : 'opacity-50 scale-90' // Other cards: more faded and smaller
                  }`}
                >
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="bg-[#FFF8F2] w-[280px] h-[420px] rounded-xl shadow-lg flex flex-col items-start justify-between p-5"
                  >
                    <div className="w-[95px] h-[95px] bg-[#C4C4C4] rounded-full"></div>
                    <div>
                      <h2 className="font-lato text-2xl font-semibold text-black">
                        {card.title}
                      </h2>
                      <p className="font-lato text-lg text-primary mt-2">
                        {card.description}
                      </p>
                    </div>

                    <button className="w-full border-2 border-accentOrange-200 text-black rounded-full p-2 px-4">
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default ExploreCalculatorsSection;
