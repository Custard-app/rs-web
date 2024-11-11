import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';
import './Footer.css';
import Image from 'next/image';

import logo from '@/assets/images/Logo.png';
import Link from 'next/link';

function Footer() {
  return (
    <div className="w-full bg-footer py-20">
      <WidthXL>
        <h1 className="text-[70px] sm:text-[200px] font-bold text-transparent border-text text-center">
          {' '}
          Rupeestop
        </h1>
        <div className="flex items-start justify-between text-white mt-14">
          <  div className="flex flex-col gap-3 w-96">
            <Link href="/">
              <Image src={logo} alt="Rupeestop" width={195} height={34} />
            </Link>
            <p className="text-lg font-medium font-lato text-justify text-white text-wrap">
              At Rupeestop, we are dedicated to helping you achieve financial
              freedom. Our team of experts works tirelessly to provide
              personalized financial solutions that align with your goals.
            </p>
          </div>
          <div>
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
          <div>
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
          <div>
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
        </div>
      </WidthXL>
    </div>
  );
}

export default Footer;
