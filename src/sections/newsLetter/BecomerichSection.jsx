import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import undrawUunderline from '@/assets/icons/undraw_fun-underline.svg';
import Image from 'next/image';
import Link from 'next/link';

const BecomerichSection = () => {
  return (
    <div className="bg-primary px-5 sm:px-0 py-24">
      <WidthXL>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins font-bold text-[36px] sm:text-[62px] text-center text-wrap text-white">
            Become{' '}
            <span className="relative">
              Rich
              <Image
                src={undrawUunderline}
                alt="underline"
                className="absolute top-1 sm:top-2 right-2 sm:right-3 w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
              />
            </span>{' '}
            <span className="text-accentLime">Wealthy</span> Today!
          </h1>
          <p className="font-lato font-medium text-base sm:text-[20px] text-center text-wrap text-white w-[90%] sm:w-[70%] mx-auto">
            Our newsletter is the key to unlocking answers to your most pressing
            financial questions—whether it&#39;s managing your first salary,
            investing a substantial income, making big purchases, planning for
            early retirement or something you don&#39;t even know of.
          </p>
          <div className="flex items-center gap-4 flex-col sm:flex-row mt-10">
            <div className="hidden items-start justify-center backdrop-blur-sm rounded-full border border-white">
              <div className="relative w-full max-w-md flex items-center justify-between">
                {/* Email Icon and Placeholder */}
                <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-100" />
                </div>

                {/* Input Field */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-[380px] sm:w-[500px] py-4 pl-10 rounded-full bg-transparent text-white outline-none placeholder-white placeholder-opacity-80"
                />
              </div>
            </div>
            <Link
             href="https://rupeesorted.substack.com/"
          target='_blank'
            className="relative flex items-center justify-center w-[100%] sm:w-full bg-[#698f1c] py-[12px] px-5 rounded-full z-5 appearance-none border-transparent border-b-[6px] font-semibold text-black text-base sm:text-[20px] capitalize transform transition-transform duration-200">
              <p>Yes, I Want To Build Health!</p>
              <span className="absolute inset-0 rounded-full bg-accentLime border-transparent border-b-4 -z-10"></span>
            </Link>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default BecomerichSection;
