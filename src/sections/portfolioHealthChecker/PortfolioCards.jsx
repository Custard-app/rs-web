'use client';
import phcasset from '@/assets/icons/phcasset.png';
import phcdiverse from '@/assets/icons/phcdiverse.png';
import phcgoal from '@/assets/icons/phcgoal.png';
import phcmetrics from '@/assets/icons/phcmetrics.png';
import phcrisk from '@/assets/icons/phcrisk.png';
import phcvector from '@/assets/icons/phcvector.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GoArrowRight } from 'react-icons/go';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PortfolioCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sliderRef = useRef(null);

  const cards = [
    {
      id: 0,
      title: 'Sector Analysis',
      description:
        'Get insights on the sectors your investments are focused on for better strategies.',
      icon: phcvector,
    },
    {
      id: 1,
      title: 'Asset Allocation Review',
      description: 'Review how your assets are distributed across categories.',
      icon: phcasset,
    },
    {
      id: 2,
      title: 'Goal Alignment',
      description: 'Ensure your investments align with your financial goals.',
      icon: phcgoal,
    },
    {
      id: 3,
      title: 'Diversification Check',
      description: 'Check if your portfolio is well-diversified.',
      icon: phcdiverse,
    },
    {
      id: 4,
      title: 'Risk Assessment',
      description: 'Analyze the risks associated with your portfolio.',
      icon: phcrisk,
    },
    {
      id: 5,
      title: 'Performance Metrics',
      description: "Monitor your portfolio's performance.",
      icon: phcmetrics,
    },
  ];

  const sliderSettings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: true, // Enable centered mode
    centerPadding: '0', // Prevent extra padding on the sides
    focusOnSelect: true, // Allow selecting a card by clicking
    arrows: false, // Disable default arrows
  };

  // Handling next and previous buttons
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Manually go to previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Manually go to next slide
    }
  };

  return (
    <div className="py-14 sm:py-24 px-5 sm:px-0 bg-primary">
      <WidthXL>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-center sm:text-start font-poppins font-semibold text-[32px] sm:text-[48px]">
            Unlock the Power of Your Portfolio
          </h1>
          <p className="text-center sm:text-start font-lato text-sm sm:text-[22px] mb-20">
            Balance Risks, Maximize Returns, and Achieve Your Dreams.
          </p>

          {/* FOR LARGE SCREEN */}
          <div className="hidden sm:flex gap-4 w-full h-[380px]">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={`transition-all duration-500 ease-in-out cursor-pointer flex-1 ${
                  activeCard === card.id ? 'flex-[250px]' : 'flex-[158px]'
                } bg-white text-black rounded-lg p-5 relative overflow-hidden`}
              >
                {/* Icon, Title, and Description Container */}
                <div
                  className={`absolute ${
                    activeCard === card.id
                      ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 w-[220px]'
                      : 'bottom-5 left-5 scale-100 '
                  } transition-all duration-500 ease-in-out flex flex-col items-center`}
                >
                  <div
                    className={`transition-all duration-500 mb-4 flex items-center ${
                      activeCard === card.id
                        ? 'w-16 h-16 scale-125 bg-accentOrange-200 rounded-full justify-center '
                        : 'scale-100 justify-start w-full '
                    }`}
                  >
                    <img
                      src={card.icon.src}
                      alt={`${card.title} Icon`}
                      className={`w-8 h-8 `}
                    />
                  </div>
                  <h3
                    className={`w-full text-start font-bold transition-all text-wrap ${
                      activeCard === card.id
                        ? 'text-black text-[22px] '
                        : 'text-gray-700 text-left text-lg'
                    }`}
                  >
                    {card.title}
                  </h3>
                  {activeCard === card.id && (
                    <p className="w-full text-start mt-3 text-lg text-gray-600 ">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FOR SMALL SCREEN - Mobile Slider */}
          <div className="sm:hidden w-full">
            <Slider {...sliderSettings} ref={sliderRef}>
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`w-[230px] h-[430px] text-black rounded-[12px] flex items-center justify-center p-5 relative transition-all duration-500 ease-in-out ${
                    activeCard === index
                      ? 'scale-95 bg-white'
                      : 'scale-95 bg-white'
                  }`}
                >
                  <div className="h-full flex flex-col items-center justify-center px-5 ">

                    <div className="mb-4 bg-accentOrange-200 rounded-full p-8 flex items-center justify-center">
                      <img
                        src={card.icon.src}
                        alt={`${card.title} Icon`}
                        className="w-12 h-12"
                      />
                    </div>

                    <h3 className="w-full text-start font-bold text-[24px]">
                      {card.title}
                    </h3>
                    <p className=" text-start mt-2 text-lg  text-gray-600">
                      {card.description}
                    </p>

                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Navigation Buttons */}
          <div className="flex sm:hidden gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="bg-white p-3 rounded-full text-black"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full text-black"
            >
              <FaAngleRight />
            </button>
          </div>

          {/* Button */}
          <button className="mt-14 mx-auto flex items-center gap-3 sm:gap-4 bg-accentLime pl-[20px] py-[10px] pr-[10px] rounded-full">
            <p className="text-black font-semibold text-sm sm:text-[20px] capitalize">
              Check Portfolio health
            </p>
            <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
              <GoArrowRight size={24} />
            </span>
          </button>
        </div>
      </WidthXL>
    </div>
  );
};

export default PortfolioCards;
