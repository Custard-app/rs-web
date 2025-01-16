import pms from '@/assets/images/pms-hero.png';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

function HeroSection() {
  return (
    <div className="relative h-full sm:h-[90vh] bg-primary flex flex-col items-center justify-center px-5 sm:px-0 rounded-b-[50px]">
      <div className="max-w-5xl flex flex-col items-center justify-center gap-5 z-10 py-20">
        <h1 className="font-poppins font-bold text-4xl sm:text-7xl text-center text-gray-50 mt-20">
          Portfolio Management Services
        </h1>
        <h3 className="font-poppins font-semibold text-[28px] sm:text-[34px] text-wrap text-center text-gray-100">
          Customized investment solutions for high net-worth individuals
        </h3>
        <Link
        href="https://calendly.com/llprupeestop/30min"
                target="_blank"
        className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
          <p className="text-black font-semibold text-base capitalize">
            Invest in PMS
          </p>
          <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
            <GoArrowRight size={25} />
          </span>
        </Link>
      </div>

      {/*(Image with Overlay) */}
      <div className=" absolute inset-y-0 right-0 top-20 w-full h-[520px] sm:h-[90vh] z-0 ">
        <Image
          src={pms}
          alt="PMS Background"
          layout="fill"
          className="z-0 object-cover rounded-b-[50px]"
        />
        {/* Overlay */}
        <div className="absolute -inset-0 bg-gradient-to-b from-primary via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default HeroSection;
