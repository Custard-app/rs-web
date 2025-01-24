'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function SCSSCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(10000); // Yearly Investment
  const [interestRate, setInterestRate] = useState(8.2); // Annual Interest Rate (%)
  const [tenure, setTenure] = useState(5); // Tenure in years (fixed for SCSS)
  const [quarterlyInterest, setQuarterlyInterest] = useState(2050); // Quarterly interest payment
  const [totalInterest, setTotalInterest] = useState(41000); // Total interest earned over the tenure
  const [maturityValue, setMaturityValue] = useState(141000); // Principal + total interest

  const calculateSCSS = () => {
    // Calculate Quarterly Interest
    const annualInterest = (yearlyInvestment * interestRate) / 100;
    const quarterlyInterest = Math.ceil(annualInterest / 4);

    // Calculate Total Interest over 5 years
    const totalInterest = Math.ceil(annualInterest * tenure);

    // Maturity Value (Principal + Total Interest)
    const maturityValue = yearlyInvestment + totalInterest;

    // Update State
    setQuarterlyInterest(quarterlyInterest);
    setTotalInterest(totalInterest);
    setMaturityValue(maturityValue);
  };

  useEffect(() => {
    calculateSCSS();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          {/* HEROSECTION START */}
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Senior Citizen Savings Scheme (SCSS) Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate quarterly interest, total interest, and maturity value
              from your SCSS investment.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Secure your future with precise SCSS calculations
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Yearly Investment (₹)
                  </label>
                  <input
                    type="number"
                    min="1000"
                    value={yearlyInvestment > 0 ? yearlyInvestment : ''} 
                    onChange={(e) =>
                      setYearlyInvestment(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    disabled // Fixed interest rate for SCSS
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    disabled // Fixed tenure for SCSS
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <button
                  onClick={calculateSCSS}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate SCSS
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart
                  t1="Principal"
                  t2="Total Interest"
                  totalInvestment={yearlyInvestment}
                  totalInterest={totalInterest}
                />

                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Quarterly Interest
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(quarterlyInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Interest
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(totalInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Maturity Value
                    </p>
                    <p className="font-lato font-semibold text-[20px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(maturityValue).toLocaleString('en-IN')}
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
      <ContactCard value="Senior Citizen Savings Scheme"/>
    </>
  );
}
