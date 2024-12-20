'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

const cardData = [
  {
    title: 'SIP Calculator',
    description: 'How much can you save by starting an SIP? Find out!',
    navigation: '/calculators/sip-calculator',
  },
  {
    title: 'Lumpsum Calculator',
    description:
      'Calculate the future value of a one-time lump sum investment.',
    navigation: '/calculators/lumsum-calculator',
  },
  {
    title: 'TDS Calculator',
    description:
      'Estimate the Tax Deducted at Source (TDS) for various incomes.',
    navigation: '/calculators/tds-calculator',
  },
  {
    title: 'Compound Interest Calculator',
    description:
      'Find the compound interest and total value of your investments.',
    navigation: '/calculators/compound-interest-calculator',
  },{
    title: 'Income Tax Calculator',
    description:
      'Estimate your income tax liability based on current tax slabs.',
    navigation: '/calculators/income-tax-calculator',
  },
];

const ExploreCalculatorsSection = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  const [animationConfig] = useState(config.gentle);
  const intervalRef = React.useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % cardData.length);
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <div className="relative bg-white pb-14 sm:pb-24 pt-0 sm:pt-24 px-5 sm:px-0 h-[100vh] sm:h-[500px]">
      <WidthXL>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-52 sm:gap-20">
          {/* Left Heading */}
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-6">
            <h1 className="font-poppins font-semibold text-[42px] text-wrap text-center sm:text-left">
              Effortlessly Calculate Your Mutual Fund Returns
            </h1>
            <Link
              href="/calculators"
              className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 px-4 outline-none font-lato font-semibold text-[16px]"
            >
              Explore All Calculators
            </Link>
          </div>

          {/* Carousel */}
          <div className="w-full sm:w-1/2 mt-8 flex justify-center">
            <Carousel
              slides={cardData.map((card, index) => ({
                key: index,
                content: (
                  <div
                    className={`w-[280px] h-[420px] flex flex-col bg-[#FFF8F2] items-center py-7 px-4 rounded-[20px] shadow-sm ${
                      index === (goToSlide + 1) % cardData.length
                        ? 'opacity-80 bg-[#ffe5cc]'
                        : index === goToSlide
                        ? ''
                        : 'opacity-0'
                    }`}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                    onTouchStart={stopAutoplay}
                    onTouchEnd={startAutoplay}
                  >
                    <div className="h-full rounded-xl flex flex-col items-start justify-between p-5">
                      <div className="w-[95px] h-[95px] bg-[#C4C4C4] rounded-full"></div>
                      <div>
                        <h2 className="font-lato text-2xl font-semibold text-black">
                          {card.title}
                        </h2>
                        <p className="font-lato text-lg text-primary mt-2">
                          {card.description}
                        </p>
                      </div>
                      <Link
                      href={card.navigation}
                       className="w-full text-center border-2 border-accentOrange-200 text-black rounded-full p-2 px-4">
                        Calculate Now
                      </Link>
                    </div>
                  </div>
                ),
              }))}
              goToSlide={goToSlide}
              offsetRadius={offsetRadius}
              animationConfig={animationConfig}
              showNavigation={false}
            />
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default ExploreCalculatorsSection;
