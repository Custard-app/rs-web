'use client';

import React, { useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import { GoArrowRight } from 'react-icons/go';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXXL from '@/wrapper/widths/WidthXXL';

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
        title: 'NSC Calculator',
        description: 'Calculate the maturity amount of your National Savings Certificate (NSC) investment. ',
        button: 'Calculate',
      },
      {
        title: 'MF Calculator',
        description:
          'Calculate the estimated returns of your one-time mutual fund investment.',
        button: 'Calculate',
      },
    ],
  },
];

export default function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000); // Default total investment
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(5000); // Default monthly withdrawal
  const [timePeriod, setTimePeriod] = useState(1); // Default time period in years
  const [annualReturnRate, setAnnualReturnRate] = useState(8); // Default annual return rate (percentage)
  const [results, setResults] = useState({
    totalInvested: 0,
    totalWithdrawn: 0,
    finalValue: 0,
  });

  const calculateSWP = () => {
    const monthlyReturnRate = annualReturnRate / 12 / 100;
    const months = timePeriod * 12; // Convert years to months
    let balance = totalInvestment;
    let totalWithdrawn = 0;

    for (let month = 1; month <= months; month++) {
      // Apply interest on the current balance
      balance += balance * monthlyReturnRate;

      // Withdraw the specified amount
      if (balance >= monthlyWithdrawal) {
        balance -= monthlyWithdrawal;
        totalWithdrawn += monthlyWithdrawal;
      } else {
        totalWithdrawn += balance;
        balance = 0;
        break; // Stop if balance is zero
      }
    }

    setResults({
      totalInvested: totalInvestment,
      totalWithdrawn: totalWithdrawn,
      finalValue: Math.ceil(balance),
    });
  };

  const handleInputChange = (e, setter) => {
    // Block decimal point input
    const value = e.target.value;
    if (!value.includes('.')) {
      setter(Number(value));
    }
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              SWP Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your Systematic Withdrawal Plan (SWP) results easily.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Input Section */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Total Investment (₹)
                  </label>
                  <input
                    type="number"
                    min="100000"
                    max="10000000"
                    step="1"
                    value={totalInvestment}
                    onInput={(e) => handleInputChange(e, setTotalInvestment)}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Withdrawal Per Month (₹)
                  </label>
                  <input
                    type="number"
                    min="1000"
                    max="50000"
                    step="1"
                    value={monthlyWithdrawal}
                    onInput={(e) => handleInputChange(e, setMonthlyWithdrawal)}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    step="1"
                    value={timePeriod}
                    onInput={(e) => handleInputChange(e, setTimePeriod)}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Return Rate (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    step="0.1"
                    value={annualReturnRate}
                    onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateSWP}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate SWP
                </button>
              </div>

              {/* Result Section */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex flex-col sm:flex-row items-center justify-center gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">Total Invested</h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalInvested).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">Total Withdrawn</h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalWithdrawn).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">Final Value</h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.finalValue).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* CAROUSEL START */}
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
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative ">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Contact us for personalized SWP advice
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-xs sm:text-[20px] text-wrap text-center text-gray-100 leading-6">
                Get personalized advice from our expert advisors. Click the
                button below to chat with us directly on WhatsApp and start your investment journey with Rupeestop!
              </p>
            </div>

            <button className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
                Chat With Us
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </button>

            {/* Big circle */}
            <div className="absolute -left-8 sm:-left-14 -top-14 sm:-top-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -left-8 sm:-left-20 -top-14  sm:-top-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* For BOttom */}
            {/* Big circle */}
            <div className="absolute -right-8 sm:-right-14 -bottom-14 sm:-bottom-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -right-8 sm:-right-20 -bottom-14  sm:-bottom-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>
          </div>
        </WidthXXL>
      </div>
    </>
  );
}
