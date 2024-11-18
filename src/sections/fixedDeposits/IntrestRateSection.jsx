import React from 'react';
import hdfc from '@/assets/images/hdfc.png';
import mahindra from '@/assets/images/mahindra.png';
import pnb from '@/assets/images/pnb.png';
import bajaj from '@/assets/images/bajaj.png';
import Image from 'next/image';
import WidthXL from '@/wrapper/widths/WidthXL';

const InterestRateSection = () => {
  return (
    <div className="bg-[#FFFBF7] py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className='flex flex-col gap-24'>
          {/* HDFC */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={hdfc} alt="hdfc" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                HDFC Limited
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Corporate Fixed Deposits of HDFC Limited have been rated &#39;AAA&#39;
                by two leading credit rating agencies (CRISIL and ICRA) for the
                last 23 years.
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Attractive and assured returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>A wide range of
                  deposit products to choose from
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Quick loan against deposit facility
                </li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl">
                Invest Now
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Period
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Annual Income Plan
                      </th>
                      <th className="py-2 px-4 text-center">
                        Cumulative Option
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">NA</td>
                      <td className="py-2 px-4">7.46%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        22 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        33 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.61%
                      </td>
                      <td className="py-2 px-4">7.61%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        44 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic">Notes:</p>
                <ul className="list-disc list-inside space-y-2 font-lato text-[10px] sm:text-sm italic">
                  <li>Subject to TDS</li>
                  <li>
                    Senior citizens (60 years+) are eligible for an additional
                    0.25% p.a. on deposits up to ₹2 crore.
                  </li>
                  <li>
                    For cumulative interest options and recurring deposits
                    plans, interest is compounded annually.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* MAHINDRA */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-20">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={mahindra} alt="hdfc" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                Mahindra & Mahindra
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Corporate Fixed Deposits of HDFC Limited have been rated &#39;AAA&#39;
                by two leading credit rating agencies (CRISIL and ICRA) for the
                last 23 years.
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Attractive and assured returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>A wide range of
                  deposit products to choose from
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Quick loan against deposit facility
                </li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl">
                Invest Now
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Period
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Annual Income Plan
                      </th>
                      <th className="py-2 px-4 text-center">
                        Cumulative Option
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">NA</td>
                      <td className="py-2 px-4">7.46%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        22 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        33 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.61%
                      </td>
                      <td className="py-2 px-4">7.61%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        44 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic">Notes:</p>
                <ul className="list-disc list-inside space-y-2 font-lato text-[10px] sm:text-sm italic">
                  <li>Subject to TDS</li>
                  <li>
                    Senior citizens (60 years+) are eligible for an additional
                    0.25% p.a. on deposits up to ₹2 crore.
                  </li>
                  <li>
                    For cumulative interest options and recurring deposits
                    plans, interest is compounded annually.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PNB */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={pnb} alt="pnb" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                PNB Housing Finance
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Corporate Fixed Deposits of HDFC Limited have been rated &#39;AAA&#39;
                by two leading credit rating agencies (CRISIL and ICRA) for the
                last 23 years.
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Attractive and assured returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>A wide range of
                  deposit products to choose from
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Quick loan against deposit facility
                </li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl">
                Invest Now
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Period
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Annual Income Plan
                      </th>
                      <th className="py-2 px-4 text-center">
                        Cumulative Option
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">NA</td>
                      <td className="py-2 px-4">7.46%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        22 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        33 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.61%
                      </td>
                      <td className="py-2 px-4">7.61%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        44 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic">Notes:</p>
                <ul className="list-disc list-inside space-y-2 font-lato text-[10px] sm:text-sm italic">
                  <li>Subject to TDS</li>
                  <li>
                    Senior citizens (60 years+) are eligible for an additional
                    0.25% p.a. on deposits up to ₹2 crore.
                  </li>
                  <li>
                    For cumulative interest options and recurring deposits
                    plans, interest is compounded annually.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BAJAJ */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-20">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={bajaj} alt="bajaj" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                Bajaj Finserv
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Corporate Fixed Deposits of HDFC Limited have been rated &#39;AAA&#39;
                by two leading credit rating agencies (CRISIL and ICRA) for the
                last 23 years.
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Attractive and assured returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>A wide range of
                  deposit products to choose from
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Quick loan against deposit facility
                </li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl">
                Invest Now
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px]">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Intrest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Period
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Annual Income Plan
                      </th>
                      <th className="py-2 px-4 text-center">
                        Cumulative Option
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">NA</td>
                      <td className="py-2 px-4">7.46%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        22 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        33 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.61%
                      </td>
                      <td className="py-2 px-4">7.61%</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        44 Months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.56%
                      </td>
                      <td className="py-2 px-4">7.56%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic">Notes:</p>
                <ul className="list-disc list-inside space-y-2 font-lato text-[10px] sm:text-sm italic">
                  <li>Subject to TDS</li>
                  <li>
                    Senior citizens (60 years+) are eligible for an additional
                    0.25% p.a. on deposits up to ₹2 crore.
                  </li>
                  <li>
                    For cumulative interest options and recurring deposits
                    plans, interest is compounded annually.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default InterestRateSection;
