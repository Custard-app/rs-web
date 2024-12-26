'use client'
import logo from '@/assets/images/Logo.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer2() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const isNewsletter = pathname === '/newsletter';
  return (
    <div className={`w-full ${isHomepage && 'hidden'} bg-footer py-20 px-5 sm:px-0 z-10`}>
      <WidthXL>

        <div className={`w-full ${isNewsletter && 'hidden'} flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-[#FFFBF7] py-7 px-5 sm:px-9 rounded-xl`}>
          <div>
            <p className='font-lato font-medium text-base text-gray-950'>Newsletter</p>
            <p className='font-lato text-base text-gray-700'>Stay updated with Latest News in Finance</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[75%] sm:w-full max-w-md flex items-center justify-between">
              {/* Email Icon and Placeholder */}
              <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-800" />
              </div>

              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-[500px] py-4 pl-10 border rounded-full bg-transparent text-gray-950 border-gray-800 outline-none"
              />

              {/* Submit Button */}
              <button className="absolute top-2 right-2 flex items-center bg-accentOrange-200 text-white rounded-full p-2 px-4 outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between text-white mt-14 gap-7 sm:gap-0">
          {/* Description */}
          <div className="flex flex-col gap-3 w-72 sm:w-96">
            <Link href="/">
              <Image
                src={logo}
                alt="Rupeestop"
                className="w-[136px] h-[23px] sm:w-48 sm:h-8"
              />
            </Link>
            <p className="text-xs sm:text-lg font-lato text-justify text-white text-wrap">
              At Rupeestop, we are dedicated to helping you achieve financial
              freedom. Our team of experts works tirelessly to provide
              personalized financial solutions that align with your goals.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden sm:block">
            <div className="flex flex-col mb-5">
              <p className="font-poppins font-medium text-lg">Navigation</p>
              <div className="w-14 h-[1px] bg-accentOrange-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <Link href="#" className="font-lato font-medium text-sm">
                About us
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Calculators
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Community
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Portfolio Health Checker
              </Link>
            </div>
          </div>

          {/* Instruments */}
          <div className="hidden sm:block">
            <div className="flex flex-col mb-5">
              <p className="font-poppins font-medium text-lg">Instruments</p>
              <div className="w-14 h-[1px] bg-accentOrange-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <Link href="#" className="font-lato font-medium text-sm">
                Mutual Funds
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Fixed Deposits
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Portfolio Management System
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Bonds
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="hidden sm:block">
            <div className="flex flex-col mb-5">
              <p className="font-poppins font-medium text-lg">Company</p>
              <div className="w-14 h-[1px] bg-accentOrange-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <Link href="#" className="font-lato font-medium text-sm">
                Term and Conditions
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="font-lato font-medium text-sm">
                Careers
              </Link>
            </div>
          </div>

          {/* For mobile screen */}
          <div className="flex sm:hidden flex-col items-center justify-center gap-7">

            <div className="flex items-center justify-between gap-5">
              {/* Navigation */}
              <div>
                <div className="flex flex-col mb-4">
                  <p className="font-poppins font-medium text-sm">Navigation</p>
                  <div className="w-12 h-[1px] bg-accentOrange-200 rounded-md"></div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Link href="#" className="font-lato font-medium text-xs">
                    About us
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Calculators
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Community
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Portfolio Health Checker
                  </Link>
                </div>
              </div>

              {/* Instruments */}
              <div>
                <div className="flex flex-col mb-4">
                  <p className="font-poppins font-medium text-sm">
                    Instruments
                  </p>
                  <div className="w-12 h-[1px] bg-accentOrange-200 rounded-md"></div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Link href="#" className="font-lato font-medium text-xs">
                    Mutual Funds
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Fixed Deposits
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Portfolio Management System
                  </Link>
                  <Link href="#" className="font-lato font-medium text-xs">
                    Bonds
                  </Link>
                </div>
              </div>
            </div>

            {/* Trems and conditions */}
            <div className="w-full mx-auto">
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <Link href="#" className="font-lato font-medium text-xs ">
                  Terms and Conditions
                </Link>
                <Link href="#" className="font-lato font-medium text-xs">
                  Privacy Policy
                </Link>
                <Link href="#" className="font-lato font-medium text-xs">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default Footer2;
