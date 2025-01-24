'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';

export default function CompoundInterestCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(50000); // Default principal amount
  const [interestRate, setInterestRate] = useState(5); // Default rate of interest (p.a.)
  const [timePeriod, setTimePeriod] = useState(2); // Default time period in years
  const [compoundingFrequency, setCompoundingFrequency] = useState('Yearly'); // Default frequency
  const [ciDetails, setCiDetails] = useState({
    totalInterest: 0,
    totalAmount: 0,
  });

  const calculateCompoundInterest = () => {
    let n; // Compounding frequency
    switch (compoundingFrequency) {
      case 'Quarterly':
        n = 4;
        break;
      case 'Half-Yearly':
        n = 2;
        break;
      default:
        n = 1; // Yearly
    }

    // Compound Interest Formula: A = P * (1 + r/n)^(n*t)
    const ratePerPeriod = interestRate / (n * 100);
    const totalPeriods = n * timePeriod;
    const totalAmount = principalAmount * Math.pow(1 + ratePerPeriod, totalPeriods);
    const totalInterest = totalAmount - principalAmount;

    setCiDetails({
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    });
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [ compoundingFrequency]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Compound Interest Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the compound interest and total amount for your investments.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Maximize Your Returns with Compounding
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Principal Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={principalAmount > 0 ? principalAmount : ''} 
                    min="1000"
                    step="1000"
                    onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (p.a.) (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate > 0 ? interestRate : ''}
                    min="1"
                    max="50"
                    step="0.1"
                    onChange={(e) => setInterestRate(Number(e.target.value) > 50 ? 50 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={timePeriod > 0 ? timePeriod : ''}
                    min="1"
                    max="30"
                    onChange={(e) => setTimePeriod(Number(e.target.value) > 30 ? 30 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between'>
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700 mb-2 block">
                    Compounding Frequency
                  </label>
                  <div className="flex gap-4 my-4 sm:my-0">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="compoundingFrequency"
                        value="Quarterly"
                        checked={compoundingFrequency === 'Quarterly'}
                        onChange={(e) => setCompoundingFrequency(e.target.value)}
                        className="mr-2"
                      />
                      Quarterly
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="compoundingFrequency"
                        value="Half-Yearly"
                        checked={compoundingFrequency === 'Half-Yearly'}
                        onChange={(e) => setCompoundingFrequency(e.target.value)}
                        className="mr-2"
                      />
                      Half-Yearly
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="compoundingFrequency"
                        value="Yearly"
                        checked={compoundingFrequency === 'Yearly'}
                        onChange={(e) => setCompoundingFrequency(e.target.value)}
                        className="mr-2"
                      />
                      Yearly
                    </label>
                  </div>
                </div>

                <button
                  onClick={calculateCompoundInterest}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Interest
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <DoughnutChart
                  t1="Principal Amount"
                  t2="Total Interest"
                  totalInvestment={principalAmount}
                  totalInterest={ciDetails.totalInterest}
                />

                <div className="w-full flex items-center justify-evenly gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Interest
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{ciDetails.totalInterest.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{ciDetails.totalAmount.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AllOtherCalculators/>
        </WidthXL>
      </div>
    </>
  );
}
