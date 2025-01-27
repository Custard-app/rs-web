'use client';
import logo from '@/assets/rupeestop_assets/Home page/Logo.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from 'react-icons/io';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import AuthModal from '@/app/auth/AuthModal';
import { LiaCoinsSolid } from 'react-icons/lia';
import { BsPersonVcard } from 'react-icons/bs';
import { LuNotebookPen } from 'react-icons/lu';
import { TbMoneybag } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [showInstrumentsBanner, setShowInstrumentsBanner] = useState(false);
  const [showCalculatorsBanner, setShowCalculatorsBanner] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [showInstrumentsNested, setShowInstrumentsNested] = useState(false);
  const [showCalculatorsNested, setShowCalculatorsNested] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef();

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

  const closeInstrumentBanner = () => {
    setShowInstrumentsBanner(false);
  };
  const closeCalculatorBanner = () => {
    setShowCalculatorsBanner(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        if (showInstrumentsBanner) closeInstrumentBanner();
        if (showCalculatorsBanner) closeCalculatorBanner();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInstrumentsBanner, showCalculatorsBanner]);

  const isNewsletterPage = pathname === '/newsletter';

  return (
    <div className="relative" ref={navRef}>
      <div className="w-full bg-primary bg-opacity-30 backdrop-blur-md border-b border-black z-50 fixed top-0">
        {/* BANNER START*/}
        {isNewsletterPage && (
          <div
            className="w-full text-black p-2 text-center shadow-lg"
            style={{
              background:
                'linear-gradient(90deg, rgba(193,245,88,1) 0%, rgba(219,249,144,1) 45%, rgba(255,255,221,1) 87%)',
            }}
          >
            <p className="text-sm sm:text-base font-semibold">
            Rupee sorted - an Initiative by Rupeestop
            </p>
          </div>
        )}
        {/* BANNER END */}
        <div className="relative">
          <WidthXL>
            <div className="relative flex items-center justify-between py-5 px-5 sm:px-0 sm:py-5">
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
                    Instruments{' '}
                    {showInstrumentsBanner ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </button>
                  <button
                    onClick={toggleCalculatorsBanner}
                    className="flex items-center gap-2"
                  >
                    Calculators{' '}
                    {showCalculatorsBanner ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </button>
                  <Link href="/newsletter">Newsletter</Link>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    href="https://invest.rupeestop.com/client-login"
                    // onClick={() => setIsModalOpen(true)}
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

          {/* Instruments Slider Banner START*/}
          <div
            className={`absolute -mt-10 right-80 z-20 mx-auto w-[350px] bg-gray-100 px-7 py-5 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out ${
              showInstrumentsBanner
                ? 'translate-y-10 opacity-100'
                : '-translate-y-10 opacity-0 pointer-events-none'
            }`}
            style={{ top: '100%' }}
          >
            <div className="flex justify-between gap-7">
              {/* Left side options */}
              <div className="space-y-4 text-lg text-gray-900 font-semibold w-[100%] flex flex-col items-start justify-evenly gap-4">
                <p className="font-lato font-bold text-lg border-b-2 border-green-950">
                  Instruments
                </p>
                <Link
                  href="/mutualfunds"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeInstrumentBanner}
                >
                  <div className="w-8 h-8 bg-accentOrange-200 rounded-full flex items-center justify-center text-white">
                    <LiaCoinsSolid size={25} />
                  </div>
                  Mutual Fund
                </Link>
                <Link
                  href="/portfolio-management-services"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeInstrumentBanner}
                >
                  <div className="w-8 h-8 bg-accentOrange-200 rounded-full flex items-center justify-center text-white">
                    <BsPersonVcard size={20} />
                  </div>
                  Portfolio Management
                </Link>
                <Link
                  href="/fixeddeposits"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeInstrumentBanner}
                >
                  <div className="w-8 h-8 bg-accentOrange-200 rounded-full flex items-center justify-center text-white">
                    <TbMoneybag size={20} />
                  </div>
                  Fixed Deposit
                </Link>
                <Link
                  href="/bonds"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeInstrumentBanner}
                >
                  <div className="w-8 h-8 bg-accentOrange-200 rounded-full flex items-center justify-center text-white">
                    <LuNotebookPen size={20} />
                  </div>
                  Bonds
                </Link>
              </div>

              {/* <div className="w-[2px] bg-gray-200"></div> */}

              {/* Right side message Portfolio Health hecker */}
              {/* <div className="bg-[#DCFCFF] w-[45%] h-56  px-5 py-3 rounded-lg flex flex-col  gap-4">
                <div className="flex justify-between items-center">
                  <Link
                    href="#"
                    onClick={closeInstrumentBanner}
                    className="font-lato font-semibold text-xs italic text-accentOrange-200"
                  >
                    Portfolio Health Checker
                  </Link>
                  <div className="w-12 h-12 rounded-full bg-primary"></div>
                </div>
                <p className="font-lato font-semibold text-xl italic text-black">
                  Track, Evaluate, Improve!
                </p>
                <p className="font-lato font-medium text-base italic text-black">
                  Assess your investments with our Portfolio Health Checker for
                  personalized insights and tips.
                </p>
              </div> */}
            </div>
          </div>
          {/* Instruments Slider Banner END*/}

          {/* Calculators Slider Banner START*/}
          <div
            className={`absolute -mt-10 right-2 mx-auto z-40 w-[510px] bg-gray-100 px-7 py-5 flex flex-col shadow-lg rounded-b-lg transition-all duration-300 ease-in-out ${
              showCalculatorsBanner
                ? 'translate-y-10 opacity-100'
                : '-translate-y-10 opacity-0 pointer-events-none'
            }`}
            style={{ top: '100%' }}
          >
            <div className="flex justify-between gap-7">
              {/* Left side options */}
              <div className="space-y-4 text-lg text-gray-900 font-semibold w-[45%] flex flex-col items-start justify-evenly gap-4">
                <Link
                  href="/calculators/fd-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  FD Calculator
                </Link>
                <Link
                  href="/calculators/nps-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  NPS Calculator
                </Link>
                <Link
                  href="/calculators/rd-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  RD Calculator
                </Link>
                <Link
                  href="/calculators/cagr-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  CAGR Calculator
                </Link>
              </div>

              {/* Right side message */}
              <div className="space-y-4 text-lg text-gray-900 font-semibold w-[45%] flex flex-col items-start justify-evenly gap-4">
                <Link
                  href="/calculators/nsc-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  NSC Calculator
                </Link>
                <Link
                  href="/calculators/hra-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  HRA Calculator
                </Link>
                <Link
                  href="/calculators/mutual-fund-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  MF Calculator
                </Link>
                <Link
                  href="/calculators/sukanya-samriddhi-yojana-calculator"
                  className="flex items-center gap-3 font-lato font-medium text-lg"
                  onClick={closeCalculatorBanner}
                >
                  
                  SSY Calculator
                </Link>
              </div>
            </div>
            <Link
              href="/calculators"
              onClick={closeCalculatorBanner}
              className="text-accentOrange-200 font-lato text-center mt-5 flex justify-center items-center gap-2"
            >
              See All Calculators{' '}
              <span>
                <IoIosArrowRoundForward size={25} />
              </span>
            </Link>
          </div>
          {/* Calculators Slider Banner END*/}
        </div>
      </div>

      {/* Full-Screen HAMEBURGER Menu */}
      <div
        className={`fixed w-full inset-y-0 right-0 bg-[#151515] z-50 overflow-y-auto transition-transform transform ${
          isHamOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <div className="flex flex-col p-8 text-white gap-14">
          <button onClick={toggleHamburgerMenu} className="self-end mb-5 ">
            <RxCross2 size={30} />
          </button>
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="Rupeestop" className="w-[207px] h-[35px]" />
          </Link>
          <Link
            href="/aboutus"
            className="font-lato font-semibold text-xl"
            onClick={closeMenu}
          >
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
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                Mutual Fund
              </Link>
              <Link
                href="/fixeddeposits"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                Fixed deposits
              </Link>
              <Link
                href="/portfolio-management-services"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                Portfolio Management Services
              </Link>
              <Link
                href="/bonds"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                Bonds
              </Link>
              {/* <Link
                href="/portfolio-health-checker"
                className="font-lato font-medium text-base text-gray-200 "
                onClick={closeMenu}
              >
                Portfolio Health Checker
              </Link> */}
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
                href="/calculators/fd-calculator"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                FD Calculator
              </Link>
              <Link
                href="/calculators/nps-calculator"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                NPS Calculator
              </Link>
              <Link
                href="/calculators/rd-calculator"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                RD Calculator
              </Link>
              <Link
                href="/calculators/hra-calculator"
                className="font-lato font-medium text-base text-gray-200"
                onClick={closeMenu}
              >
                HRA Calculator
              </Link>
              <Link
                href="/calculators"
                className="font-lato font-medium text-base text-orange-400 flex items-center gap-24"
                onClick={closeMenu}
              >
                Explore All Calculators{' '}
                <span>
                  <GoArrowRight size={25} />
                </span>
              </Link>
            </div>
          )}
          <Link
            href="/newsletter"
            className="font-lato font-semibold text-xl"
            onClick={closeMenu}
          >
            Newsletter
          </Link>
        </div>
      </div>

      {/* Render Login Modal */}
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Navbar;
