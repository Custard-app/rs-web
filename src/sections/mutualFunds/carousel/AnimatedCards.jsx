
'use client';
import lumsum from '@/assets/icons/lumsum.png';
import sip from '@/assets/icons/sip.png';
import stp from '@/assets/icons/stp.png';
import swp from '@/assets/icons/swp.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const AnimatedCards = () => {
  const cardsRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Detect when cards come into view using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 },
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => observer.disconnect();
  }, []);



  return (
    <div
      ref={cardsRef}
      className="relative w-full h-[1470px] sm:h-auto flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8"
    >

      {/* card 1 */}
      <div className="w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5">
        <Image
          src={lumsum.src}
          alt="logo"
          className="object-contain"
          width={70}
          height={70}
        />
        <div>
          <h2 className="text-[22px] font-lato font-semibold text-gray-50 mb-2 text-center sm:text-start text-wrap">
            Lump Sum Investment
          </h2>
          <p className="font-lato text-lg text-gray-200 text-center sm:text-start">
          Invest once and watch your money grow steadily over time with consistent returns.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 bg-[#C1F558] font-lato font-medium text-[20px] text-black rounded-3xl">
            Invest Now
          </button>
        </div>
      </div>
      {/* card 1 end */}
      {/* card 2 */}
      <div className={`absolute w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5 ${inView ? `transition-all duration-700 ease-in-out delay-300 sm:translate-x-[315px] sm:translate-y-0 translate-y-[370px] ` : 'absolute left-0 rotate-6'}`}>
        <Image
          src={sip.src}
          alt="logo"
          className="object-contain"
          width={70}
          height={70}
        />
        <div>
          <h2 className="text-[22px] font-lato font-semibold text-gray-50 mb-2 text-center sm:text-start">
          Systematic Investment Plan (SIP)
          </h2>
          <p className="font-lato text-lg text-gray-200 text-center sm:text-start">
          Regular investments in fixed amounts.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 bg-[#C1F558] font-lato font-medium text-[20px] text-black rounded-3xl">
            Invest Now
          </button>
        </div>
      </div>
      {/* card 2 end */}
      {/* card 3 */}
      <div className={`absolute w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5 ${inView ? `transition-all duration-700 ease-in-out delay-300 translate-y-[740px] sm:translate-x-[630px] sm:translate-y-0` : 'absolute left-0 bottom-6 -rotate-12'}`}>
        <Image
          src={swp.src}
          alt="logo"
          className="object-contain"
          width={70}
          height={70}
        />
        <div>
          <h2 className="text-[22px] font-lato font-semibold text-gray-50 mb-2 text-center sm:text-start">
          Systematic Withdrawal Plan (SWP)
          </h2>
          <p className="font-lato text-lg text-gray-200 text-center sm:text-start">
          Regular withdrawals from your investment.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 bg-[#C1F558] font-lato font-medium text-[20px] text-black rounded-3xl">
            Invest Now
          </button>
        </div>
      </div>
      {/* card 3 end */}
      {/* card 4 */}
      <div className={`absolute w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5 ${inView ? `transition-all duration-700 ease-in-out delay-200 translate-y-[1110px] sm:translate-x-[940px] sm:translate-y-0` : 'left-6 bottom-2 rotate-10'}`}>
        <Image
          src={stp.src}
          alt="logo"
          className="object-contain"
          width={70}
          height={70}
        />
        <div>
          <h2 className="text-[22px] font-lato font-semibold text-gray-50 mb-2 text-center sm:text-start">
          Systematic Transfer Plan (STP)
          </h2>
          <p className="font-lato text-lg text-gray-200 text-center sm:text-start">
          Transfer of funds from one scheme to another.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 bg-[#C1F558] font-lato font-medium text-[20px] text-black rounded-3xl">
            Invest Now
          </button>
        </div>
      </div>
      {/* card 4 end */}

    </div>
  );
};

export default AnimatedCards;