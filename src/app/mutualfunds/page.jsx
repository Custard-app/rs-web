import HeroSection from '@/sections/mutualFunds/HeroSection';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import mutualfund2 from '@/assets/images/mutualfund2.png';

function page() {
  return (
    <div className="bg-white">
      <HeroSection />
      <>
        <WidthXL>
          <div className='w-full flex flex-col-reverse sm:flex-row items-center gap-8 px-5 sm:px-0 py-14 sm:py-24'>
            <div className='w-full sm:w-1/2'>
                <Image src={mutualfund2} alt='image' />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-3 text-center sm:text-start'>
              <h2 className='font-poppins font-semibold text-[32px] sm:text-[42px]'>What are Mutual Funds?</h2>
              <p className='font-lato font-medium text-sm sm:text-lg text-center sm:text-start'>
              Mutual funds pool money from many investors to purchase securities. They are managed by professional fund managers who allocate the fund&#39;s investments and attempt to produce capital gains or income for the fund&#39;s investors. Mutual funds offer diversification, liquidity, and professional management, making them an attractive investment option for individuals.
              </p>
            </div>
          </div>
        </WidthXL>
      </>
    </div>
  );
}

export default page;
