'use client';
import DoughnutChart from '@/components/chart/DoughnutChart';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';

export default function SimpleInterestCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(50000); // Default principal amount
  const [interestRate, setInterestRate] = useState(5); // Default rate of interest (p.a.)
  const [timePeriod, setTimePeriod] = useState(2); // Default time period in years
  const [siDetails, setSiDetails] = useState({
    totalInterest: 0,
    totalAmount: 0,
  });

  const calculateSimpleInterest = () => {
    const totalInterest =
      (principalAmount * interestRate * timePeriod) / 100; // Simple Interest Formula
    const totalAmount = principalAmount + totalInterest; // Total repayment amount

    setSiDetails({
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    });
  };

  useEffect(() => {
    calculateSimpleInterest();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Simple Interest Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the simple interest and total amount on your investment with ease.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Plan Your Investments Effectively
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
                    value={principalAmount}
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
                    value={interestRate}
                    step="0.1"
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateSimpleInterest}
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
                  totalInterest={siDetails.totalInterest}
                />

                <div className="w-full flex items-center justify-evenly gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Interest
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{siDetails.totalInterest.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{siDetails.totalAmount.toLocaleString('en-IN')}
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
