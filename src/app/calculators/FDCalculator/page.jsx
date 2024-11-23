'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useState } from 'react';

const calculators = [
    {
      category: 'Investment Calculators',
      items: [
        {
          title: 'FD Calculator',
          description: 'Find out your Fixed Deposit maturity details with ease.',
          button: 'Calculate',
        },
        {
          title: 'NPS Calculator',
          description:
            'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
          button: 'Calculate',
        },
        {
          title: 'RD Calculator',
          description: 'The simplest Recurring Deposit Calculator out there!',
          button: 'Calculate',
        },
        {
          title: 'NSC Calculator',
          description:
            'Now learn how much your National Savings Certificate (NSC) will grow for you!',
          button: 'Calculate',
        },
      ],
    },
  ];

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(20000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMaturity = () => {
    const simpleInterest = (principal * rate * tenure) / 100;
    const totalAmount = principal + simpleInterest;
    setMaturityAmount(totalAmount);
    setTotalInterest(simpleInterest);
  };
  return (
    <div className="py-24 sm:py-32 px-5 sm:px-0 bg-white">
      <WidthXL>
        <div>
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
            FD Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
            Easily calculate the maturity amount of your Fixed Deposit with our
            FD Calculator. Just enter the principal amount, interest rate, and
            tenure to get instant results.
          </p>
          <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
            Find out your Fixed Deposit (FD) Maturity Details with Ease
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
            {/* Left Side - Inputs */}
            <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Principal Amount
                </label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Tenure (years)
                </label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <button
                onClick={calculateMaturity}
                className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
              >
                Calculate Maturity Amount
              </button>
            </div>

            {/* Right Side - Results */}
            <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px]"></div>
              <div className="w-full flex items-center justify-evenly">
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600">
                    Maturity Amount
                  </p>
                  <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                    {maturityAmount}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 ">
                    Total Interst Earned
                  </p>
                  <p className="font-lato font-semibold text-[28px]  sm:text-[38px] text-accentOrange-200">
                    {totalInterest}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          {calculators.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
              Other Popular Calculators
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
                  >
                    <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                    <h3 className="font-lato text-2xl font-bold mb-3 sm:mb-5 text-start">
                      {item.title}
                    </h3>
                    <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                      {item.description}
                    </p>
                    <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-primary text-white rounded-3xl ">
                      {item.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </WidthXL>
    </div>
  );
}
