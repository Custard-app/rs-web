import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

function HeroSection() {
  return (
    <div className="pb-24 pt-36 bg-primary rounded-b-[50px] px-5 sm:px-0">
      <WidthXL>
        <div className="w-full sm:w-[770px] mx-auto flex flex-col items-center justify-center gap-5">
          <h1 className="font-poppins font-bold text-4xl sm:text-7xl text-white text-center">
            Fixed Deposits
          </h1>
          <h2 className="font-poppins font-semibold text-[28px] sm:text-5xl text-gray-50 text-center">
          Invest for Guaranteed Higher Returns
          </h2>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-gray-100 text-center text-wrap">
            Invest in Corporate Fixed Deposits from various institutions and
            corporate houses. Assure your investment with fixed returns.
          </p>
          <Link
          href="https://calendly.com/llprupeestop/30min"
          target='_blank'
          className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
            <p className="text-black font-semibold text-base capitalize">
              Chat With Us
            </p>
            <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
              <GoArrowRight size={25} />
            </span>
          </Link>
        </div>
      </WidthXL>
    </div>
  );
}

export default HeroSection;
