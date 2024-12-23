'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import bikeImage from '@/assets/images/newsletter-bike.png';
import girlNewsletter from '@/assets/images/girlaNewsletter.png';
import boyNewsletter from '@/assets/images/boyNewsletter.png';
import Image from 'next/image';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';

const cardData = [
  {
    image: boyNewsletter.src,
    text: 'Are you wondering how to make most of your first salary?',
  },
  {
    image: bikeImage.src,
    text: 'Dreaming about that bike without losing your budget?',
  },
  {
    image: girlNewsletter.src,
    text: 'Earning ₹1 lakh per month but unsure how to invest wisely?',
  },
  
];

function JourneyCarousel() {
  const [goToSlide, setGoToSlide] = useState(1);
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
    <div className="bg-primary h-[998px] px-5 sm:px-0 py-16 relative overflow-hidden ">
      <WidthXL>
        <div className="flex flex-col mb-5">
          <div>
            <h1 className="font-lato font-bold text-[32px] sm:text-[56px] text-center text-wrap text-white">
              You’re not Alone in this Journey
            </h1>
            <p className="font-lato font-semibold text-base sm:text-[20px] text-center text-wrap text-white w-full sm:w-[800px] mx-auto">
              Financial uncertainty can be overwhelming. The questions pile up,
              and the answers seem elusive. Many young professionals,
              entrepreneurs, businessman, freelancers etc. feel the same
              way—eager to secure their financial future but unsure where to
              start.
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full mt-80 flex flex-col items-center justify-between z-10">
            <Carousel
              slides={cardData.map((card, index) => ({
                key: index,
                content: (
                  <div
                    className={`relative w-[341px] sm:w-[384px] h-[453px] sm:h-[544px] flex flex-col items-center rounded-[20px] shadow-sm ${
                      index === (goToSlide + 1) % cardData.length
                        ? 'opacity-95'
                        : index === goToSlide
                        ? ''
                        : 'opacity-95'
                    }`}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                    onTouchStart={stopAutoplay}
                    onTouchEnd={startAutoplay}
                  >
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden z-10">
                      <Image
                        src={card.image}
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                     {/* Text Overlay */}
                     <div className="absolute bg-white -bottom-10 sm:bottom-2 left-1/2 transform sm:transform-none -translate-x-1/2 sm:-left-28 w-[286px] sm:w-[322px] rounded-xl flex items-center justify-center p-5 z-10">

                      <p className="font-lato font-semibold text-base sm:text-[20px] text-black">
                        {card.text}
                      </p>
                    </div>

                     {/* Background Box */}
                    <div className="w-[341px] sm:w-[384px] h-[453px] sm:h-[544px] rounded-[20px] bg-[#1d716c] absolute left-5 top-5 z-0"></div>
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

      {/* Button */}
      <div className="z-10 absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-5">
        <button
          onClick={() => setGoToSlide((prev) => (prev - 1) % cardData.length)}
          className="p-[10px] rounded-full bg-primary text-white flex items-center justify-center shadow-sm hover:bg-teal-800"
        >
          <GoArrowLeft size={25} />
        </button>
        <button
          onClick={() => setGoToSlide((prev) => (prev + 1) % cardData.length)}
          className="p-[10px] rounded-full bg-primary text-white flex items-center justify-center shadow-sm hover:bg-teal-800"
        >
          <GoArrowRight size={25} />
        </button>
      </div>

      {/* Circle */}
      <div className="absolute -left-60 -bottom-8 sm:-left-48 sm:-bottom-72 z-0 w-[690px] h-[690px] sm:w-[1050px] sm:h-[1050px] border-[110px] sm:border-[150px] border-[#03524D] bg-transparent rounded-full"></div>
    </div>
  );
}

export default JourneyCarousel;
