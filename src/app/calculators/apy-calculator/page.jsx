'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useEffect, useState } from 'react';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';

// APY Contribution Table: Joining Age -> Pension -> Monthly Contribution
const APY_CONTRIBUTION_TABLE = {
    1000: { 18: 42, 20: 50, 25: 76, 30: 116, 35: 181, 40: 291 },
    2000: { 18: 84, 20: 100, 25: 151, 30: 231, 35: 362, 40: 582 },
    3000: { 18: 126, 20: 150, 25: 228, 30: 347, 35: 543, 40: 873 },
    4000: { 18: 168, 20: 198, 25: 301, 30: 462, 35: 722, 40: 1164 },
    5000: { 18: 210, 20: 248, 25: 376, 30: 577, 35: 902, 40: 1454 },
  };
  
  export default function APYCalculator() {
    const [joiningAge, setJoiningAge] = useState(25);
    const [desiredPension, setDesiredPension] = useState(1000);
    const [monthlyInvestment, setMonthlyInvestment] = useState(0);
    const [investmentDuration, setInvestmentDuration] = useState(35);
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    const interpolate = (age, table) => {
      const pensionData = table[desiredPension];
      const ages = Object.keys(pensionData).map(Number).sort((a, b) => a - b);
  
      // Handle age out of bounds
      if (age < 18 || age > 40) return null;
  
      // Exact match in table
      if (pensionData[age]) return pensionData[age];
  
      // Find two closest ages for interpolation
      let lowerAge = null,
        higherAge = null;
  
      for (let i = 0; i < ages.length; i++) {
        if (ages[i] < age) lowerAge = ages[i];
        if (ages[i] > age && higherAge === null) higherAge = ages[i];
      }
  
      if (lowerAge !== null && higherAge !== null) {
        // Linear interpolation
        const lowerValue = pensionData[lowerAge];
        const higherValue = pensionData[higherAge];
        return (
          lowerValue +
          ((age - lowerAge) / (higherAge - lowerAge)) * (higherValue - lowerValue)
        );
      }
      return null;
    };
  
    const calculateAPY = () => {
      const retirementAge = 60;
      const duration = retirementAge - joiningAge;
  
      // Validate age
      if (joiningAge < 18 || joiningAge > 40) {
        setErrorMessage('Joining age must be between 18 and 40.');
        setMonthlyInvestment(0);
        setTotalInvestment(0);
        setInvestmentDuration(0);
        return;
      }
  
      // Interpolate monthly contribution
      const monthlyContribution = interpolate(joiningAge, APY_CONTRIBUTION_TABLE);
  
      if (monthlyContribution === null) {
        setErrorMessage('Could not calculate for the given age.');
        return;
      }
  
      // Calculate total investment
      const total = monthlyContribution * 12 * duration;
  
      setErrorMessage('');
      setMonthlyInvestment(Math.floor(monthlyContribution));
      setInvestmentDuration(duration);
      setTotalInvestment(Math.floor(total));
    };
  
    useEffect(() => {
      calculateAPY();
    }, [joiningAge]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          {/* HEROSECTION START */}
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Atal Pension Yojana (APY) Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your monthly investment, investment duration, and total amount required for your desired pension.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Plan your Retirement with Ease
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Joining Age (Years)
                  </label>
                  <input
                    type="number"
                    value={joiningAge}
                    onChange={(e) => setJoiningAge(Number(e.target.value))}
                    min="18"
                    max="40"
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Desired Monthly Pension
                  </label>
                  <select
                    value={desiredPension}
                    onChange={(e) => setDesiredPension(Number(e.target.value))}
                    className="w-[110px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="1000">₹1,000</option>
                    <option value="2000">₹2,000</option>
                    <option value="3000">₹3,000</option>
                    <option value="4000">₹4,000</option>
                    <option value="5000">₹5,000</option>
                  </select>
                </div>
                <button
                  onClick={calculateAPY}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate APY
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart
                  t1="Monthly Contribution"
                  t2="Total Investment"
                  totalInvestment={totalInvestment}
                  totalInterest={0} // Placeholder as no interest is shown
                />

                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Monthly Investment
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(monthlyInvestment).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Investment Duration (Years)
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      {investmentDuration} Years
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Investment
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(totalInvestment).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}
          <AllOtherCalculators/>
        </WidthXL>
      </div>
    </>
  );
}
