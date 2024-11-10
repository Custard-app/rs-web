'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/Logo.png';
import mutualFundIcon from '@/assets/images/icon-park_funds.png';
import portfolioIcon from '@/assets/images/computer-video-call.png';
import fixedDepositIcon from '@/assets/images/money-bag.png';
import bondsIcon from '@/assets/images/document-add-outline.png';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar() {
  const [showInstrumentsBanner, setShowInstrumentsBanner] = useState(false);

  const toggleInstrumentsBanner = () => {
    console.log('fjljfl');
    setShowInstrumentsBanner(!showInstrumentsBanner);
  };

  return (
    <div className="bg-primary border-b border-black relative z-30">
      <WidthXL>
        <div className="flex items-center justify-between py-5">
          <Link href="/">
            <Image src={logo} alt="Rupeestop" width={195} height={34} />
          </Link>
          <div className="space-x-4 text-accentGray-100 flex gap-6 items-center text-base font-bold">
            <Link href="/aboutus">About Us</Link>
            <button
              onClick={toggleInstrumentsBanner}
              className="flex items-center gap-2 focus:outline-none"
            >
              Instruments <IoIosArrowDown size={20} />
            </button>
            <Link href="/calculators" className="flex items-center gap-2">
              Calculators <IoIosArrowDown size={20} />
            </Link>
            <Link href="/community">Community</Link>
            <Link
              href="/login"
              className="bg-accentOrange-200 p-2 px-4 text-base font-medium text-white rounded-3xl text-center"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Instruments Slider Banner */}
        <div
          className={`absolute top-0 right-4 mx-auto w-[650px] bg-gray-100 px-7 py-5 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out ${
            showInstrumentsBanner
              ? 'translate-y-0 opacity-100'
              : '-translate-y-20 opacity-0 pointer-events-none'
          }`}
          style={{ top: '100%' }}
        >
          <div className="flex justify-between gap-7">
            {/* Left side options */}
            <div className="space-y-4 text-lg text-gray-900 font-semibold w-[45%] flex flex-col items-start justify-evenly gap-4">
              <p className="font-lato font-bold text-lg border-b-2 border-green-950">
                Instruments
              </p>
              <Link
                href="#"
                className="flex items-center gap-3 font-lato font-medium text-lg"
              >
                <Image
                  src={mutualFundIcon}
                  alt="Mutual Fund"
                  width={30}
                  height={30}
                />
                Mutual Fund
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 font-lato font-medium text-lg"
              >
                <Image
                  src={portfolioIcon}
                  alt="Portfolio Management"
                  width={30}
                  height={30}
                />
                Portfolio Management
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 font-lato font-medium text-lg"
              >
                <Image
                  src={fixedDepositIcon}
                  alt="Fixed Deposit"
                  width={30}
                  height={30}
                />
                Fixed Deposit
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 font-lato font-medium text-lg"
              >
                <Image src={bondsIcon} alt="Bonds" width={30} height={30} />
                Bonds
              </Link>
            </div>

            <div className="w-[2px] bg-gray-200"></div>

            {/* Right side message */}
            <div className="bg-[#DCFCFF] w-[45%] h-56  px-5 py-3 rounded-lg flex flex-col  gap-4">
              <div className="flex justify-between items-center">
                <p className="font-lato font-semibold text-xs italic text-accentOrange-200">
                  Portfolio Health Checker
                </p>
                <div className="w-12 h-12 rounded-full bg-primary"></div>
              </div>
              <p className="font-lato font-semibold text-xl italic text-black">
                Track, Evaluate, Improve!
              </p>
              <p className="font-lato font-medium text-base italic text-black">
                Assess your investments with our Portfolio Health Checker for
                personalized insights and tips.
              </p>
            </div>
          </div>
        </div>
        {/* )}  */}
      </WidthXL>
    </div>
  );
}

export default Navbar;
