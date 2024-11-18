'use client';
import logo from '@/assets/images/Logo.png';
import portfolioIcon from '@/assets/images/computer-video-call.png';
import bondsIcon from '@/assets/images/document-add-outline.png';
import mutualFundIcon from '@/assets/images/icon-park_funds.png';
import fixedDepositIcon from '@/assets/images/money-bag.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoArrowRight } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
  const [showInstrumentsBanner, setShowInstrumentsBanner] = useState(false);
  const [showCalculatorsBanner, setShowCalculatorsBanner] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [showInstrumentsNested, setShowInstrumentsNested] = useState(false);
  const [showCalculatorsNested, setShowCalculatorsNested] = useState(false);

  const toggleInstrumentsBanner = () => {
    if (showCalculatorsBanner) {
      setShowCalculatorsBanner(false);
    }
    setShowInstrumentsBanner(!showInstrumentsBanner);
  };
  const toggleCalculatorsBanner = () => {
    if (showInstrumentsBanner) {
      setShowInstrumentsBanner(false);
    }
    setShowCalculatorsBanner(!showCalculatorsBanner);
  };

  const toggleHamburgerMenu = () => {
    setIsHamOpen(!isHamOpen);
  };

  const closeMenu = () => {
    setIsHamOpen(false);
};

  const toggleInstrumentsNested = () => {
    setShowInstrumentsNested(!showInstrumentsNested);
  };

  const toggleCalculatorsNested = () => {
    setShowCalculatorsNested(!showCalculatorsNested);
  };

  useEffect(() => {
    if (isHamOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isHamOpen]);

  return (
    <div className="relative">
      <div className="w-full bg-primary bg-opacity-30 backdrop-blur-md border-b border-black z-50 fixed top-0 overflow-hidden">
        <WidthXL>
          <div className="flex items-center justify-between py-5 px-5 sm:px-0 sm:py-5 relative">
            <Link href="/">
              <Image
                src={logo}
                alt="Rupeestop"
                className="w-[136px] h-[23px] sm:w-48 sm:h-8"
              />
            </Link>
            <div className="flex items-center gap-8">
              <div className="space-x-4 hidden sm:flex text-accentGray-100 gap-6 items-center text-base font-bold">
                <Link href="/aboutus">About Us</Link>
                <button
                  onClick={toggleInstrumentsBanner}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  Instruments <IoIosArrowDown size={20} />
                </button>
                <button
                  onClick={toggleCalculatorsBanner}
                  className="flex items-center gap-2"
                >
                  Calculators <IoIosArrowDown size={20} />
                </button>
                <Link href="/community">Community</Link>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/login"
                  className="bg-accentOrange-200 py-1 sm:py-2 px-4 text-base font-medium text-white rounded-3xl text-center"
                >
                  Login
                </Link>
                <button
                  onClick={toggleHamburgerMenu}
                  className="block sm:hidden"
                >
                  <RxHamburgerMenu size={25} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </WidthXL>
      </div>

      {/* Full-Screen Hamburger Menu */}
      <div
        className={`fixed w-full inset-y-0 right-0 bg-[#151515] z-50 transition-transform transform ${
          isHamOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <div className="flex flex-col p-8 text-white gap-14">
          <button onClick={toggleHamburgerMenu} className="self-end mb-5 ">
            <RxCross2 size={30} />
          </button>
          <Link href="/"
              onClick={closeMenu}>
            <Image src={logo} alt="Rupeestop" className="w-[207px] h-[35px]" />
          </Link>
          <Link href="/aboutus" className="font-lato font-semibold text-xl" onClick={closeMenu}>
            About Us
          </Link>
          <button
            onClick={toggleInstrumentsNested}
            className="flex items-center justify-between font-lato font-semibold text-xl w-full focus:outline-none "
          >
            Instruments{' '}
            {showInstrumentsNested ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showInstrumentsNested && (
            <div className="pl-5 flex flex-col gap-5 -mt-8">
              <Link
                href="/mutualfunds"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                Mutual Fund
              </Link>
              <Link
                href="/fixeddeposits"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                Fixed deposits
              </Link>
              <Link
                href="/portfolio-management-services"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                Portfolio Management System
              </Link>
              <Link
                href="/bonds"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                Bonds
              </Link>
              <Link
                href="#"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                Portfolio Health Checker
              </Link>
            </div>
          )}

          <button
            onClick={toggleCalculatorsNested}
            className="flex items-center justify-between font-lato font-semibold text-xl"
          >
            Calculators{' '}
            {showCalculatorsNested ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showCalculatorsNested && (
            <div className="pl-5 flex flex-col gap-5 -mt-8">
              <Link
                href="#"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                FD Calculator
              </Link>
              <Link
                href="#"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                NPS Calculator
              </Link>
              <Link
                href="#"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                RD Calculator
              </Link>
              <Link
                href="#"
                className="font-lato font-medium text-base text-gray-200" onClick={closeMenu}
              >
                HRA Calculator
              </Link>
              <Link
                href="#"
                className="font-lato font-medium text-base text-orange-400 flex items-center gap-28" onClick={closeMenu}
              >
                Explore All Calculators{' '}
                <span>
                  <GoArrowRight size={25} />
                </span>
              </Link>
            </div>
          )}
          <Link href="/community" className="font-lato font-semibold text-xl" onClick={closeMenu}>
            Community
          </Link>
        </div>
      </div>

      {/* Instruments Slider Banner */}
      <div
        className={`absolute top-0 right-3 z-40 mx-auto w-[650px] bg-gray-100 px-7 py-5 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out ${
          showInstrumentsBanner
            ? 'translate-y-20 opacity-100'
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
              href="/mutualfunds"
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
              href="portfolio-management-services"
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
              href="fixeddeposits"
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
              href="bonds"
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

      {/* Calculators Slider Banner */}
      <div
        className={`absolute top-0 right-2 mx-auto z-40 w-[510px] bg-gray-100 px-7 py-5 flex flex-col shadow-lg rounded-b-lg transition-all duration-300 ease-in-out ${
          showCalculatorsBanner
            ? 'translate-y-20 opacity-100'
            : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
        style={{ top: '100%' }}
      >
        <div className="flex justify-between gap-7">
          {/* Left side options */}
          <div className="space-y-4 text-lg text-gray-900 font-semibold w-[45%] flex flex-col items-start justify-evenly gap-4">
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              FD Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              NPS Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              RD Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              CAGR Calculator
            </Link>
          </div>

          {/* Right side message */}
          <div className="space-y-4 text-lg text-gray-900 font-semibold w-[45%] flex flex-col items-start justify-evenly gap-4">
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              NSC Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              HRA Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              MF Calculator
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 font-lato font-medium text-lg"
            >
              <span className="w-10 h-10 rounded-full bg-gray-200"></span>
              SSY Calculator
            </Link>
          </div>
        </div>
        <p className="text-accentOrange-200 font-lato text-center mt-5 flex justify-center items-center gap-2">
          See All Calculators{' '}
          <span>
            <IoIosArrowRoundForward size={25} />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
