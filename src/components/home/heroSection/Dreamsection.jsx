import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import QuickCards from './QuickCards';
import mutualFundImg from '@/assets/images/profit-growth.png'
import fixedDepositImg from '@/assets/images/keywords.png'        
import pmsImg from '@/assets/images/pms.png'
import bonds from '@/assets/images/certificate.png'

function Dreamsection() {
  const products = [
    {
      image: mutualFundImg,
      heading: 'Mutual Funds',
      content: 'Invest in diversified portfolios to maximize returns.',
    },
    {
      image: fixedDepositImg,
      heading: 'Fixed Deposits',
      content: 'Safe and secure investments with guaranteed returns.',
    },
    {
      image: pmsImg,
      heading: 'Portfolio Management Services (PMS)',
      content:
        'Customized investment solutions for high net-worth individuals. ',
    },
    {
      image: bonds,
      heading: 'Bonds',
      content: 'Consistent earnings with minimized financial risk.',
    },
  ];

  return (
    <>
      <WidthXL>
        <div className="mt-24 bg-white overflow-hidden">
          <div className="w-full flex flex-col items-center mb-16 gap-5 z-5">
            <h1 className="text-6xl font-extrabold uppercase">
              Do you have a{' '}
              <span className="text-primary font-protestRiot capitalize">
                Dream ?
              </span>
            </h1>
            <p className="text-xl font-lato font-medium">
              There&#39;s no limit on how much we can dream, right?
            </p>
          </div>
          <div className="w-full flex items-center justify-between gap-5">
            <div className="bg-primary w-1/2 rounded-[30px] h-[441px] px-12 py-5">
              <p className="text-end text-xl font-poppins italic">
                Rahul,30 Yrs
              </p>
              <p className=" text-center text-3xl font-poppins italic">
                I want to explore the world without worrying about
              </p>

              <p className=" text-center text-base font-poppins italic">
                Need to fulfill you childs dream?
              </p>
              <p className=" text-center text-base font-poppins italic">
                Want to buy a car?
              </p>

              <div className="">
                <input type="range" />
              </div>
            </div>
            <div className="bg-gray-400 w-1/2 rounded-[30px] h-[441px] px-12 py-5"></div>
          </div>
        </div>

        {/* STOP DREAMING SECTION */}
        <div className="my-24">
          <div className="w-full flex flex-col items-center mb-16 gap-5 ">
            <h1 className="text-6xl font-extrabold uppercase">
              STOP DREAMING,{' '}
              <span className="text-primary font-protestRiot capitalize">
                Invest With Us!{' '}
              </span>
            </h1>
            <p className="text-xl font-lato font-medium">
              Join us to transform your dreams into reality
            </p>
          </div>
          {/* CARDS */}
          <div className="flex justify-between items-center space-x-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-grow transition-all duration-300 ease-out group-hover:flex-[1] hover:flex-[2] cursor-pointer"
              >
                <QuickCards product={product} />
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </>
  );
}

export default Dreamsection;
