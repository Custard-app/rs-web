'use client'
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useRef, useState } from 'react';
import { RxTriangleRight } from 'react-icons/rx';
import './GetstartSection.css';
import arrowDown from '@/assets/rupeestop_assets/Icons/arrow-down.png'
import Image from 'next/image';

export default function GetstartSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setInView(true);
          setHasBeenSeen(true);  
        }
      },
      {
        threshold: 0.5,
      },
    );

    if(ref.current){
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasBeenSeen]);

  return (
    <div ref={ref} className="py-14 sm:py-24 bg-white px-5 sm:px-0">
      <WidthXL>
        <div>
          <h1 className="font-poppins font-semibold text-[32px] sm:text-5xl text-center mb-10">
            How to Get Started?
          </h1>

          {/* FOR LARGE SCREEN */}
          <div className="hidden sm:flex justify-between relative">
            {/* Arrow 1 */}
            <div className="absolute left-44 top-4 w-[180px] h-5 ">
              <div className="relative w-full h-full overflow-hidden">
                <div className="flex items-center justify-center text-xl whitespace-nowrap -mt-1">
                  {`--------------------`}
                  <span>
                    <RxTriangleRight className="mt-1 -ml-2" />
                  </span>
                </div>

                <div className={`absolute top-0 w-full h-5 mt-1 ${inView ?'arrow-timeline' : 'opacity-100 bg-white'}` }></div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="absolute left-[520px] top-4 w-[180px] h-5 ">
              <div className="relative w-full h-full overflow-hidden">
                <div className="flex items-center justify-center text-xl whitespace-nowrap -mt-1">
                  {`--------------------`}
                  <span>
                    <RxTriangleRight className="mt-1 -ml-2" />
                  </span>
                </div>

                <div className={`absolute top-0 w-full h-5 mt-1 ${inView ?'arrow-timeline2' : 'opacity-100 bg-white'}` }></div>
              </div>
            </div>

            {/* Arrow 3 */}
            <div className="absolute right-44 top-4 w-[180px] h-5 ">
              <div className="relative w-full h-full overflow-hidden">
                <div className="flex items-center justify-center text-xl whitespace-nowrap -mt-1">
                  {`--------------------`}
                  <span>
                    <RxTriangleRight className="mt-1 -ml-2" />
                  </span>
                </div>

                <div className={`absolute top-0 w-full h-5 mt-1 ${inView ?'arrow-timeline3' : 'opacity-100 bg-white'}` }></div>
              </div>
            </div>

            {/* card 1 */}
            <div className="flex flex-col gap-4 items-center w-[200px] overflow-hidden">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                01
              </p>
              <div className="relative overflow-hidden">
                <p className="font-lato font-bold text-lg text-center text-black">
                Define Your Investment Goals
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Decide whether you want regular income, capital preservation, or diversification. Assess your risk appetite and investment horizon.
                </p>
                <div className={`absolute top-0 w-full h-full ${ inView ? 'animate-text' : 'opacity-100 bg-white'}  `}></div>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col gap-4 items-center w-[200px] overflow-hidden">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                02
              </p>
              <div className="relative overflow-hidden">
                <p className="font-lato font-bold text-lg text-center text-black">
                Choose the Right Bonds
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Select from government, corporate, tax-free, or RBI bonds based on your financial needs and risk tolerance. Check bond ratings and yields before investing.
                </p>
                <div className={`absolute top-0 w-full h-full ${ inView ? 'animate-text2' : 'opacity-100 bg-white'}  `}></div>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col gap-4 items-center w-[200px] overflow-hidden">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                03
              </p>
              <div className="relative overflow-hidden">
                <p className="font-lato font-bold text-lg text-center text-black">
                Open an Account & Invest
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                For listed bonds, open a Demat and trading account. You can also invest via RBI Retail Direct, bond platforms, or offline methods.
                </p>
                <div className={`absolute top-0 w-full h-full ${ inView ? 'animate-text3' : 'opacity-100 bg-white'}  `}></div>
              </div>
            </div>

            {/* card 4 */}
            <div className="flex flex-col gap-4 items-center w-[200px] overflow-hidden">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                04
              </p>
              <div className="relative overflow-hidden">
                <p className="font-lato font-bold text-lg text-center text-black">
                Monitor & Optimize
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Track interest payouts, reinvestment options, and market conditions to maximize returns and manage risk effectively.
                </p>
                <div className={`absolute top-0 w-full h-full ${ inView ? 'animate-text4' : 'opacity-100 bg-white'}  `}></div>
              </div>
            </div>
          </div>

          {/* FOR SMALL SCREEN */}
          <div className="w-[350px] flex sm:hidden flex-col relative gap-20">
            {/* Arrow 1 */}
            <Image src={arrowDown} alt='arrow'className='absolute -left-5 top-[60px] w-32 h-auto' />

            {/* Arrow 2 */}
             <Image src={arrowDown} alt='arrow'className='absolute -left-5 top-[280px] w-32 h-auto' />

            {/* Arrow 3 */}
            <Image src={arrowDown} alt='arrow'className='absolute -left-5 top-[495px] w-32 h-auto' />

            {/* card 1 */}
            <div className="w-full flex flex-row gap-4 items-start justify-center">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                01
              </p>
              <div className="w-[250px]">
                <p className="font-lato font-bold text-lg text-center text-black">
                Define Your Investment Goals
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Decide whether you want regular income, capital preservation, or diversification. Assess your risk appetite and investment horizon.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="w-full flex flex-row gap-4 items-start justify-center">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                02
              </p>
              <div className="w-[250px]">
                <p className="font-lato font-bold text-lg text-center text-black">
                Choose the Right Bonds
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Select from government, corporate, tax-free, or RBI bonds based on your financial needs and risk tolerance. Check bond ratings and yields before investing.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="w-full flex flex-row gap-4 items-start justify-center">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                03
              </p>
              <div className="w-[250px]">
                <p className="font-lato font-bold text-lg text-center text-black">
                Open an Account & Invest
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                For listed bonds, open a Demat and trading account. You can also invest via RBI Retail Direct, bond platforms, or offline methods.
                </p>
              </div>
            </div>

            {/* card 4 */}
            <div className="w-full flex flex-row gap-4 items-start justify-center">
              <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
                04
              </p>
              <div className="w-[250px]">
                <p className="font-lato font-bold text-lg text-center text-black">
                Monitor & Optimize
                </p>
                <p className="font-lato font-medium text-base text-gray-800 text-center">
                Track interest payouts, reinvestment options, and market conditions to maximize returns and manage risk effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}
