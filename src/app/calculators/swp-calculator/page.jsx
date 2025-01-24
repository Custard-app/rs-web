'use client';

import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';

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
      setter(Number(value) > 30 ? 30 : Number(value));
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
                    min="10000"
                    max="10000000"
                    step="1"
                    value={totalInvestment > 0 ? totalInvestment : ''}
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
                    min="500"
                    max="1000000"
                    step="1"
                    value={monthlyWithdrawal > 0 ? monthlyWithdrawal : ''}
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
                    value={timePeriod > 0 ? timePeriod : ''}
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
                    min="1"
                    max="30"
                    step="0.1"
                    value={annualReturnRate > 0 ? annualReturnRate : ''}
                    onChange={(e) =>
                      setAnnualReturnRate(
                        Number(e.target.value) > 30
                          ? 30
                          : Number(e.target.value),
                      )
                    }
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
                    <h3 className="font-lato text-lg font-semibold">
                      Total Invested
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalInvested).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Total Withdrawn
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalWithdrawn).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Final Value
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.finalValue).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CAROUSEL START */}
          <AllOtherCalculators />
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <ContactCard value="SWP" />
    </>
  );
}
