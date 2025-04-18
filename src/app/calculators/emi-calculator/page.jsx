'use client';

import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';


export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000); // Default loan amount
  const [rateOfInterest, setRateOfInterest] = useState(8); // Default rate of interest (percentage)
  const [loanTenure, setLoanTenure] = useState(1); // Default loan tenure in years
  const [results, setResults] = useState({
    monthlyEMI: 0,
    totalPrincipal: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const calculateEMI = () => {
    // Validate inputs
    if (loanAmount <= 0 || rateOfInterest <= 0 || loanTenure <= 0) {
      alert('Please enter valid values for all fields.');
      return;
    }

    const annualInterestRate = rateOfInterest / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfMonths = loanTenure * 12; // Convert years to months

    // EMI calculation formula
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalAmountPaid = emi * numberOfMonths;
    const totalInterestPaid = totalAmountPaid - loanAmount;
    const totalPrincipalPaid = loanAmount;

    setResults({
      monthlyEMI: Math.ceil(emi),
      totalPrincipal: Math.ceil(totalPrincipalPaid),
      totalInterest: Math.ceil(totalInterestPaid),
      totalAmount: Math.ceil(totalAmountPaid),
    });
  };

  useEffect(() =>{
    calculateEMI();
  },[])

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              EMI Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your Equated Monthly Installment (EMI) easily.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Input Section */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="10000"
                    max="100000000"
                    value={loanAmount > 0 ? loanAmount : ''}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Rate of Interest (Annual %)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    step="0.1"
                    value={rateOfInterest > 0 ? rateOfInterest : ''}
                    onChange={(e) => setRateOfInterest(Number(e.target.value) > 30 ? 30 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={loanTenure > 0 ? loanTenure : ''}
                    onChange={(e) => setLoanTenure(Number(e.target.value) > 30 ? 30 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateEMI} // Trigger calculation on button click
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate EMI
                </button>
              </div>

              {/* Right Section (Chart and Results) */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart 
                t1="Principle Amount"
                t2="Total Interest"
                totalInvestment={results.totalPrincipal}
                totalInterest={results.totalInterest}
                />

                {/* Results Section (EMI, Total Interest, Total Amount) */}
                <div className="flex flex-row items-center justify-between w-full gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Monthly EMI
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.monthlyEMI).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Total Interest
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Total Amount
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.totalAmount).toLocaleString('en-IN')}
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
