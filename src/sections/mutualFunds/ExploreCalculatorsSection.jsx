'use client';
import React, { useState, useEffect } from "react";

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
];

const ExploreCalculatorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic to change the card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="bg-white pb-14 sm:pb-24 pt-0 sm:pt-24 px-5 sm:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1 className="font-poppins font-semibold text-[42px] text-wrap text-center sm:text-left">
              Effortlessly Calculate Your Mutual Fund Returns
            </h1>
            <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 px-4 outline-none font-lato font-semibold text-[16px]">
              Explore All Calculators
            </button>
          </div>

          {/* Card Slider */}
          <div className="w-full sm:w-2/3 h-full mt-8 sm:mt-0 flex overflow-hidden items-center gap-4 relative">
            {/* The wrapper to move the cards left/right */}
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`relative w-[280px] h-[420px] bg-[#fff8f2] rounded-xl transition-all duration-500 ease-in-out`}
                  style={{
                    // Scaling the upcoming card
                    transform: index === currentIndex ? 'scale(1)' : 'scale(0.7)',
                    opacity: index === currentIndex ? 1 : 0.6,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                  }}
                >
                  {/* Card Content */}
                  <div className="w-full h-full rounded-xl flex flex-col items-start justify-between p-5">
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
      </div>
    </div>
  );
};

export default ExploreCalculatorsSection;
