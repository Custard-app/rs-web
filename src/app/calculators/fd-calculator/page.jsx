'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useEffect, useState } from 'react';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import ContactCard from '@/components/contactCard/ContactCard';


export default function FDCalculator() {
  const [principal, setPrincipal] = useState(20000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [maturityAmount, setMaturityAmount] = useState(36123);
  const [totalInterest, setTotalInterest] = useState(16123);
  const [interestPercentage, setInterestPercentage] = useState(0);
  const [principalPercentage, setPrincipalPercentage] = useState(55);

  const calculateMaturity = () => {
    // Quarterly compounding logic
    const n = 4; // Quarterly compounding (4 times a year)
    const ratePerPeriod = rate / (n * 100); // Convert annual rate to quarterly rate (in decimals)
    const totalPeriods = tenure * n; // Total number of compounding periods

    const compoundInterestFactor = Math.pow(1 + ratePerPeriod, totalPeriods);
    const totalAmount = Math.ceil(principal * compoundInterestFactor); // Maturity amount with compound interest
    const totalInterest = Math.ceil(totalAmount - principal); // Interest earned

    // Calculate percentages for visualization
    const interestPercentage = Math.ceil((totalInterest / totalAmount) * 100);
    const principalPercentage = 100 - interestPercentage;

    // Update state
    setMaturityAmount(totalAmount);
    setTotalInterest(totalInterest);
    setInterestPercentage(interestPercentage);
    setPrincipalPercentage(principalPercentage);
  };


  useEffect(() => {
    calculateMaturity();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          {/* HEROSECTION START */}
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              FD Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily calculate the maturity amount of your Fixed Deposit with
              our FD Calculator. Just enter the principal amount, interest rate,
              and tenure to get instant results.
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
                    value={principal > 0 ? principal : ''}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    min="1000"
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={rate > 0 ? rate : ''}
                    min="1"
                    max="15"
                    onChange={(e) => setRate(Number(e.target.value) > 15 ? 15 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Tenure (years)
                  </label>
                  <input
                    type="number"
                    value={tenure > 0 ? tenure : ''}
                    min="1"
                    max="25"
                    onChange={(e) => setTenure(Number(e.target.value) > 25 ? 25 : Number(e.target.value))}
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
                {/* Doughnut Chart */}
                <DoughnutChart 
                t1="Total Investment"
                t2="Total Return"
                totalInvestment={principal}
                totalInterest={totalInterest}
                />

                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">
                      Maturity Amount
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(maturityAmount).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 ">
                      Total Interst Earned
                    </p>
                    <p className="font-lato font-semibold text-[28px]  sm:text-[38px] text-accentOrange-200">
                      ₹{Number(totalInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}

          {/* CAROUSEL START */}
          <AllOtherCalculators />
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <ContactCard value="Fixed Diposit" />
    </>
  );
}
