'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function SSYCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(10000);
  const [ssyRate, setSSYRate] = useState(8.2); // Current SSY interest rate
  const [girlAge, setGirlAge] = useState(5);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [maturityDetails, setMaturityDetails] = useState({
    totalInvestment: 0,
    totalInterest: 0,
    maturityYear: 0,
    maturityValue: 0,
  });
  const [investmentPercentage, setInvestmentPercentage] = useState(83);
  const [interestPercentage, setInterestPercentage] = useState(17);

  const calculateSSY = () => {
    const maxInvestmentPeriod = 15; // Maximum deposit period in years
    const maturityPeriod = 21; // Total maturity period in years
    const endYear = parseInt(startYear, 10) + maturityPeriod; // Maturity year

    let principal = 0; // Total principal invested
    let balance = 0; // Total balance including interest

    // For the first 15 years: Add yearly investment and compound interest
    for (let i = 0; i < maxInvestmentPeriod; i++) {
      principal += yearlyInvestment; // Add yearly deposit
      balance += yearlyInvestment; // Add yearly deposit to balance
      balance = Math.floor(balance + (balance * ssyRate) / 100); // Apply yearly interest
    }

    // For the next 6 years: Only compound interest on the balance
    for (let i = 0; i < maturityPeriod - maxInvestmentPeriod; i++) {
      balance = Math.floor(balance + (balance * ssyRate) / 100); // Apply yearly interest
    }

    const totalInterest = balance - principal; // Calculate total interest earned

    // Update state with results
    setMaturityDetails({
      totalInvestment: principal,
      totalInterest: totalInterest,
      maturityYear: endYear,
      maturityValue: balance,
    });

    // Calculate doughnut chart percentages
    const investmentPercentage = Math.floor((principal / balance) * 100);
    const interestPercentage = 100 - investmentPercentage;

    setInvestmentPercentage(investmentPercentage);
    setInterestPercentage(interestPercentage);
  };


  useEffect(() => {
    calculateSSY();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              SSY Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the maturity value of your Sukanya Samriddhi Yojana
              account with ease.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Plan Your Daughter&#39;s Secure Future Today
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <p className="w-full text-start font-bold font-lato text-base sm:text-[20px] text-gray-400">
                  Latest SSY Rate = {ssyRate}%
                </p>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Yearly Investment
                  </label>
                  <input
                    type="number"
                    value={yearlyInvestment > 0 ? yearlyInvestment : ''} 
                    step="250"
                    max="150000"
                    onChange={(e) =>
                      setYearlyInvestment(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Girl&#39;s Age (years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={girlAge > 0 ? girlAge : ''}
                    onChange={(e) => setGirlAge(Number(e.target.value) > 10 ? 10 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Start Year
                  </label>
                  <input
                    type="number"
                    min="2018"
                    max="2030"
                    value={startYear > 0 ? startYear : ''}
                    onChange={(e) => setStartYear(Number(e.target.value) > 2030 ? 2030 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateSSY}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Maturity Amount
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <DoughnutChart 
                t1="Total Investment"
                t2="Total Interest"
                totalInvestment={maturityDetails.totalInvestment}
                totalInterest={maturityDetails.totalInterest}
                />

                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Maturity Value
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹
                      {Number(maturityDetails.maturityValue).toLocaleString(
                        'en-IN',
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Invested Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹
                      {Number(maturityDetails.totalInvestment).toLocaleString(
                        'en-IN',
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Interest Earned
                    </p>
                    <p className="font-lato font-semibold text-[16px]  sm:text-[25px] text-accentOrange-200">
                      ₹
                      {Number(maturityDetails.totalInterest).toLocaleString(
                        'en-IN',
                      )}
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
      <ContactCard value="SSY" />
    </>
  );
}
