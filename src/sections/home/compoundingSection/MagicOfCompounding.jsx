'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Lottie from 'lottie-react';
import Link from 'next/link';

function MagicOfCompounding() {
  return (
    <div className="py-10 sm:py-24 px-2 sm:px-0 bg-accentGray-300 flex flex-col justify-between">
      <WidthXL>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between mb-20 bg-accentGray-300 relative">
          {/* Lottie Animation */}
          <div className="relative w-full -mb-20 sm:mb-0">
            <div className="absolute top-4 sm:-top-10 left-[10%] sm:left-[80%] z-10 w-[80px] h-[80px] sm:w-32 sm:h-32">
              <Lottie
                animationData={require('/public/animation/clock.json')}
                autoplay
                loop={true}
                className="w-full h-full"
              />
            </div>

            <div className="w-[360px] sm:w-[620px] h-96">
              <Lottie
                animationData={require('/public/animation/moneyBag.json')}
                autoplay
                loop={true}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end justify-start gap-3 sm:gap-10">
            <p className="font-poppins font-bold sm:font-extrabold text-4xl sm:text-6xl flex flex-col items-center sm:items-end justify-center gap-4">
              The Magic of <span>Compounding</span>
            </p>
            <p className="font-lato font-semibold text-base sm:text-xl text-center sm:text-end">
              Start Compounding Your Wealth Today
            </p>
            <Link
            href="https://calendly.com/llprupeestop/30min"
          target='_blank'
             className="flex items-center bg-accentLime p-2 pl-4 rounded-full mt-8">
              <p className="text-black font-semibold text-base capitalize">
                Start Compounding
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
      </WidthXL>

      {/* Card */}
      {/* <WidthXXL>
        <div className=" bg-primary rounded-[60px] -mb-32 sm:-mb-44 flex flex-col sm:flex-row items-center sm:items-end justify-center gap-10 py-5 sm:py-24 relative z-20 overflow-hidden">
          <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-6xl flex flex-col items-start justify-center text-gray-200 gap-4 mt-10 sm:mt-0">
            I am gonna make an <span>offer you can&#39;t refuse...</span>
          </p>

          
            <Link
            href="https://calendly.com/llprupeestop/30min"
          target='_blank'
            className="flex items-center bg-accentLime p-2 px-3 rounded-full sm:mt-8 z-5">
            <p className="text-black font-semibold text-base capitalize">
              I want To Listen{' '}
            </p>
            <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
              <GoArrowRight size={25} />
            </span>
          </Link>

          <div>
            <Image
              src={moneyImg}
              alt="money"
              className="absolute top-0 right-12 sm:right-24 w-14 sm:w-36"
            />
          </div>
          {/* Big circle */}
          {/*<div className="absolute -left-8 sm:-left-10 -top-16 sm:-top-48 w-[260px] sm:w-[470px] h-[260px] sm:h-[470px] rounded-full border-[1px] border-accentGray-300 opacity-25"></div>*/}

          {/* small circle */}
          {/*<div className="absolute -left-10 -top-24  sm:-top-52 w-[201px] sm:w-[350px] h-[201px] sm:h-[350px] rounded-full border-[1px] border-accentGray-300 opacity-25"></div>
        </div>
      </WidthXXL> */}
    </div>
  );
}

export default MagicOfCompounding;
