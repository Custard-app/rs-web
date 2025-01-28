'use client';
import graph from '@/assets/rupeestop_assets/Portfolio Health Checker/Images/graph.png';
import logo from '@/assets/rupeestop_assets/Home page/Logo.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

function HowItWorks() {
  const [values, setValues] = useState([60, 80]);
  const [ranges, setRanges] = useState([84, 54, 26]);

  return (
    <div className="py-14 sm:py-94 px-5 sm:px-0">
      <WidthXL>
        <h1 className="text-[32px] sm:text-[48px] font-semibold font-poppins text-center mb-20">
          See How it Works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* card 1 */}
          <div className="rounded-[12px] bg-white border-[1px] border-gray-500 p-5">
            <h1 className="font-lato font-bold text-[20px] sm:text-[24px] text-start text-wrap mb-3 sm:mb-5">
              Receive personalized recommendations to optimize your portfolio.
            </h1>
            <p className="font-lato text-sm sm:text-lg text-start text-wrap mb-5">
              Suggestions for rebalancing your portfolio to align with your
              financial goals.
            </p>

            <div className="p-4 bg-[#FFFBF7] rounded-[12px] flex flex-col gap-2">
              {/* for image */}
              <div className="flex items-center justify-between mb-6">
                <Image src={logo} alt="logo" />
                <p className="p-1 text-gray-500 rounded-full bg-gray-200">
                  <RxCross2 className="" />
                </p>
              </div>
              {/* for card */}
              <Link
                href="#"
                className="w-full p-4 bg-white rounded-[12px] flex items-start justify-between gap-2"
              >
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#F2F2F7] flex-shrink-0"></div>

                <div className="flex items-center gap-1">
                  <div>
                    <p className="font-lato text-xs text-gray-400">
                      Portfolio Summary
                    </p>
                    <p className="font-lato text-base text-wrap">
                      6 Suggestions to Improve your Portfolio Performance
                    </p>
                  </div>
                  <MdArrowForwardIos
                    className="text-gray-500 flex-shrink-0"
                    size={20}
                  />
                </div>
              </Link>
              <Link
                href="#"
                className="p-4 bg-white rounded-[12px] flex items-start gap-4"
              >
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#F2F2F7] flex-shrink-0"></div>
                <div className="flex items-center gap-1">
                  <div>
                    <p className="font-lato text-xs text-gray-400">
                      Reallocate to Fixed Income
                    </p>
                    <p className="font-lato text-base">
                      Shift to fixed income for stability
                    </p>
                  </div>
                  <MdArrowForwardIos
                    className="text-gray-500 flex-shrink-0"
                    size={20}
                  />
                </div>
              </Link>
              <Link
                href="#"
                className="p-4 bg-white rounded-[12px] flex items-start gap-4"
              >
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#F2F2F7] flex-shrink-0"></div>
                <div className="flex items-center gap-1">
                  <div>
                    <p className="font-lato text-xs text-gray-400">
                      Diversify Asset Classes
                    </p>
                    <p className="font-lato text-base">
                      To reduce risk, diversify your portfolio by adding bonds,
                      commodities, or international stocks.
                    </p>
                  </div>
                  <MdArrowForwardIos
                    className="text-gray-500 flex-shrink-0"
                    size={20}
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* card 2 */}
          <div className="rounded-[12px] bg-white border-[1px] border-gray-500 p-5 overflow-hidden">
            <h1 className="font-lato font-bold text-[20px] sm:text-[24px] text-start text-wrap mb-3 sm:mb-5">
              Evaluates your portfolio by analyzing asset allocation, risk
              profile, and market performance.
            </h1>
            <p className="font-lato text-sm sm:text-lg text-start text-wrap mb-5">
              Receive detailed SWOT reports highlighting strengths, weaknesses,
              opportunities, and threats
            </p>

            <div className="p-4 bg-[#FFFBF7] rounded-[12px] flex flex-col gap-2">
              <p className="font-lato font-semibold text-[20px]">Risk Score</p>

              <div className="relative flex flex-col items-center justify-center space-y-4">
                {/* Slider Container */}
                <div className="relative w-full max-w-md h-6">
                  {/* Background Track */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-yellow-100 rounded-full"></div>

                  {/* Highlighted Active Track */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `${values[0]}%`,
                      width: `${values[1] - values[0]}%`,
                    }}
                  ></div>

                  {/* First Thumb */}
                  <div
                    className="absolute top-0 transform bg-white border border-orange-500 w-6 h-6 rounded-full"
                    style={{ left: `${values[0]}%` }}
                  ></div>

                  {/* Second Thumb */}
                  <div
                    className="absolute top-0 transform bg-white border border-orange-500 w-6 h-6 rounded-full"
                    style={{ left: `${values[1] - '2'}%` }}
                  ></div>
                </div>
                {/* Display Values Below */}
                <div
                  className={`absolute top-4 flex w-full text-sm gap-6 sm:gap-11 left-48 font-bold`}
                >
                  <span className="">{values[0]}%</span>
                  <span style={{ left: `${values[1]}%` }}>{values[1]}%</span>
                </div>
              </div>

              <div className="flex items-center justify-center mt-20">
                <Image
                  src={graph}
                  alt="graph"
                  className="w-[295px] h-[220px]"
                />{' '}
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="rounded-[12px] bg-white border-[1px] border-gray-500 p-5 flex flex-col">
            <h1 className="font-lato font-bold text-[20px] sm:text-[24px] text-start text-wrap mb-3 sm:mb-5">
              Easily upload details of your current investments
            </h1>
            <p className="font-lato text-sm sm:text-lg text-start text-wrap mb-5">
              Supported formats include CSV, Excel and Manual Entry
            </p>
            <div className="p-4 bg-[#FFFBF7] rounded-[12px] flex flex-col gap-8 sm:gap-14">
              <h2 className='font-lato font-bold text-[22px]'>Upload Documents</h2>

              <div>
                <p className="font-lato font-semibold text-lg flex justify-between items-center mb-2">
                  Bank Statements.xlxs{' '}
                  <span className="text-xs text-gray-600">{ranges[0]}%</span>
                </p>
                <div className="relative w-full h-2 rounded-full bg-gray-300">
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `${0}%`,
                      width: `${ranges[0]}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="font-lato font-semibold text-lg flex justify-between items-center mb-2">
                  Stock Contract Notes.xlxs
                  <span className="text-xs text-gray-600">{ranges[1]}%</span>
                </p>
                <div className="relative w-full h-2 rounded-full bg-gray-300">
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `${0}%`,
                      width: `${ranges[1]}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="font-lato font-semibold text-lg flex justify-between items-center mb-2">
                  RegularInvestments.xlxs
                  <span className="text-xs text-gray-600">{ranges[0]}%</span>
                </p>
                <div className="relative w-full h-2 rounded-full bg-gray-300">
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `${0}%`,
                      width: `${ranges[0]}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="font-lato font-semibold text-lg flex justify-between items-center mb-2">
                  Tradebook Files.csv
                  <span className="text-xs text-gray-600">{ranges[2]}%</span>
                </p>
                <div className="relative w-full h-2 rounded-full bg-gray-300">
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `${0}%`,
                      width: `${ranges[2]}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default HowItWorks;
