'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000); // Default loan amount
  const [interestRate, setInterestRate] = useState(7.5); // Default rate of interest (p.a.)
  const [loanTenure, setLoanTenure] = useState(20); // Default loan tenure in years
  const [emiDetails, setEmiDetails] = useState({
    monthlyEMI: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const calculateEMI = () => {
    const rateOfInterest = interestRate / 12 / 100; // Monthly interest rate
    const months = loanTenure * 12; // Loan tenure in months

    // EMI Formula: [P * r * (1 + r)^n] / [(1 + r)^n - 1]
    const emi =
      (loanAmount * rateOfInterest * Math.pow(1 + rateOfInterest, months)) /
      (Math.pow(1 + rateOfInterest, months) - 1);

    const totalAmount = emi * months; // Total repayment amount
    const totalInterest = totalAmount - loanAmount; // Total interest payable

    // Update state with results
    setEmiDetails({
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    });
  };

  useEffect(() => {
    calculateEMI();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Home Loan EMI Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your monthly EMI, total interest, and repayment amount with ease.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Plan Your Home Loan Repayment Today
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    step="10000"
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (p.a.) (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    step="0.1"
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateEMI}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate EMI
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <DoughnutChart
                  t1="Principal Amount"
                  t2="Total Interest"
                  totalInvestment={loanAmount}
                  totalInterest={emiDetails.totalInterest}
                />

                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Monthly EMI
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{emiDetails.monthlyEMI.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Interest
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{emiDetails.totalInterest.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{emiDetails.totalAmount.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthXL>
      </div>
    </>
  );
}
