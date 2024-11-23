'use client';
import React, { useState, useEffect } from 'react';
import one from '@/assets/calculatorIcons/1.svg';
import two from '@/assets/calculatorIcons/2.svg';
import four from '@/assets/calculatorIcons/4.svg';
import six from '@/assets/calculatorIcons/6.svg';
import add1 from '@/assets/calculatorIcons/add1.svg';
import add2 from '@/assets/calculatorIcons/add2.svg';
import add3 from '@/assets/calculatorIcons/add3.svg';
import arrow1 from '@/assets/calculatorIcons/arrow1.svg';
import arrow2 from '@/assets/calculatorIcons/arrow2.svg';
import arrow3 from '@/assets/calculatorIcons/arrow3.svg';
import car from '@/assets/calculatorIcons/car.svg';
import circle1 from '@/assets/calculatorIcons/circle1.svg';
import circle2 from '@/assets/calculatorIcons/circle2.svg';
import circle3 from '@/assets/calculatorIcons/circle3.svg';
import dollar from '@/assets/calculatorIcons/dollar.svg';
import dollar2 from '@/assets/calculatorIcons/dollar2.svg';
import hand from '@/assets/calculatorIcons/hand.svg';
import plane from '@/assets/calculatorIcons/plane.svg';
import Image from 'next/image';

function HeroSection() {
  const [animateArrows, setAnimateArrows] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimateArrows(true);
  }, []);

  return (
    <div className="bg-primary relative h-[90vh] rounded-b-[50px] overflow-hidden px-5 sm:px-0">
      <div className="hidden sm:flex w-full h-full relative flex-col items-center justify-center">
        <Image
          src={circle1}
          alt="image"
          className="absolute top-14 left-8 animate-scale"
        />
        <Image
          src={circle2}
          alt="image"
          className="absolute top-28 left-32 animate-scale"
        />
        <Image
          src={circle3}
          alt="image"
          className="absolute top-36 -right-2 animate-scale"
        />

        <Image
          src={one}
          alt="image"
          className="absolute top-44 right-1 animate-downUp"
        />
        <Image
          src={two}
          alt="image"
          className="absolute bottom-36 right-44 animate-upDown"
        />
        <Image
          src={four}
          alt="image"
          className="absolute top-36 left-28 animate-downUp"
        />
        <Image
          src={six}
          alt="image"
          className="absolute bottom-32 left-44 animate-upDown"
        />

        <Image
          src={plane}
          alt="image"
          className="absolute top-28 left-96 animate-leftRight"
        />

        <Image
          src={hand}
          alt="image"
          className="absolute top-32 right-56 animate-rightLeft"
        />

        <Image
          src={car}
          alt="image"
          className="absolute bottom-1 right-4 animate-leftRightCar"
        />

        <Image
          src={dollar}
          alt="image"
          className="absolute bottom-20 right-[650px] animate-upDown"
        />
        <Image
          src={dollar2}
          alt="image"
          className="absolute bottom-32 left-[500px] animate-downUp"
        />

        <Image
          src={add1}
          alt="image"
          className="absolute top-36 right-[580px] animate-scale"
        />
        <Image
          src={add2}
          alt="image"
          className="absolute bottom-28 right-[710px] animate-scale"
        />
        <Image
          src={add3}
          alt="image"
          className="absolute bottom-36 left-6 animate-scale"
        />

        <Image
          src={arrow1}
          alt="Arrow 1"
          className={`absolute bottom-0 left-4 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
        <Image
          src={arrow2}
          alt="Arrow 2"
          className={`absolute bottom-0 left-10 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
        <Image
          src={arrow3}
          alt="Arrow 3"
          className={`absolute bottom-0 left-60 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
      <h1 className="font-poppins font-bold text-[32px] sm:text-7xl text-white text-center mb-5">
        Calculate your Dreams
      </h1>
      <p className="font-lato font-medium text-sm sm:text-[22px] text-gray-200 text-center">
        Explore a range of calculators to plan and achieve your financial goals
        with ease.
      </p>
      </div>

      {/* //FOR MOBILE SCREEN */}
      <div className="flex sm:hidden w-full h-full relative flex-col items-center justify-center">
        
        <Image
          src={circle2}
          alt="image"
          className="w-4 absolute top-56 right-3 animate-scale"
        />

        <Image
          src={one}
          alt="image"
          className="w-12 absolute top-24 right-1 animate-downUp"
        />
        <Image
          src={two}
          alt="image"
          className="w-12 absolute bottom-36 right-4 animate-upDown"
        />
        <Image
          src={four}
          alt="image"
          className="w-12 absolute bottom-44 left-8 animate-downUp"
        />
        <Image
          src={six}
          alt="image"
          className="w-12 absolute bottom-32 left-40 animate-upDown"
        />

        <Image
          src={plane}
          alt="image"
          className="w-72 absolute top-28 left-4 animate-leftRight"
        />

        <Image
          src={hand}
          alt="image"
          className="w-20 absolute top-52 right-6 animate-rightLeft"
        />

        <Image
          src={car}
          alt="image"
          className="w-52 absolute bottom-1 right-4 animate-leftRightCar"
        />

        <Image
          src={dollar}
          alt="image"
          className="absolute bottom-20 right-[650px] animate-upDown"
        />
        <Image
          src={dollar2}
          alt="image"
          className="absolute bottom-32 left-[500px] animate-downUp"
        />

        <Image
          src={add1}
          alt="image"
          className="w-12 absolute top-36 right-[580px] animate-scale"
        />
        <Image
          src={add2}
          alt="image"
          className="w-12 absolute bottom-96 left-3 animate-scale"
        />
        <Image
          src={add3}
          alt="image"
          className="w-12 absolute bottom-36 left-6 animate-scale"
        />

        <Image
          src={arrow1}
          alt="Arrow 1"
          className={`w-16 absolute bottom-0 left-2 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
        <Image
          src={arrow2}
          alt="Arrow 2"
          className={`w-44 absolute bottom-0 left-6 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
        <Image
          src={arrow3}
          alt="Arrow 3"
          className={`w-16 absolute bottom-0 left-32 ${
            animateArrows ? 'animate-slideInArrow' : ''
          }`}
        />
      <h1 className="font-poppins font-bold text-[32px] sm:text-7xl text-white text-center mb-5">
        Calculate your Dreams
      </h1>
      <p className="font-lato font-medium text-sm sm:text-[22px] text-gray-200 text-center">
        Explore a range of calculators to plan and achieve your financial goals
        with ease.
      </p>
      </div>


    </div>
  );
}

export default HeroSection;
