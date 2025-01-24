'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = tenure * 12;
    const futureValue =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));

    const totalInvested = monthlyInvestment * months;
    const totalReturns = futureValue - totalInvested;

    setTotalAmount(Math.ceil(futureValue));
    setTotalInvested(Math.ceil(totalInvested));
    setTotalReturns(Math.ceil(totalReturns));
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturn, tenure]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
            SIP Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
            Calculate your SIP returns and total investment value with ease.
          </p>

          <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
            Find out how much your SIP grows
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
            {/* Left Side - Inputs */}
            <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Monthly Investment
                </label>
                <input
                  type="number"
                  min="100"
                  value={monthlyInvestment > 0 ? monthlyInvestment : ''}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Expected Return (%)
                </label>
                <input
                  type="number"
                  value={expectedReturn > 0 ? expectedReturn : ''}
                  min="1"
                  max="30"
                  step="0.1"
                  onChange={(e) => setExpectedReturn(Number(e.target.value) > 30 ? 30 : Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Tenure (years)
                </label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={tenure > 0 ? tenure : ''}
                  onChange={(e) => setTenure(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <button
                onClick={calculateSIP}
                className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
              >
                Calculate SIP
              </button>
            </div>

            {/* Right Side - Results */}
            <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <DoughnutChart
                t1="Total Investment"
                t2="Total Returns"
                totalInvestment={totalInvested}
                totalInterest={totalReturns}
              />

              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600">
                    Total Value
                  </p>
                  <p className="font-lato font-semibold text-base sm:text-[30px] text-accentOrange-200">
                    ₹{Number(totalAmount).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600">
                    Est. Return
                  </p>
                  <p className="font-lato font-semibold text-base sm:text-[30px] text-accentOrange-200">
                    ₹{Number(totalReturns).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600">
                    Total Investment
                  </p>
                  <p className="font-lato font-semibold text-base sm:text-[30px] text-accentOrange-200">
                    ₹{Number(totalInvested).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CAROUSEL START */}
          <AllOtherCalculators/>
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
    </>
  );
}
