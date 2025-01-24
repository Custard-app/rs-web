'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function LumpSumCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);

  const calculateLumpSum = () => {
    const ratePerPeriod = expectedReturn / 100;
    const totalAmount = principal * Math.pow(1 + ratePerPeriod, tenure);
    const totalInvested = principal;
    const totalReturns = totalAmount - totalInvested;

    setMaturityAmount(Math.ceil(totalAmount));
    setTotalInvested(Math.ceil(totalInvested));
    setTotalReturns(Math.ceil(totalReturns));
  };

  useEffect(() => {
    calculateLumpSum();
  }, [principal, expectedReturn, tenure]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
            Lump Sum Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
            Calculate your lump sum investment returns and maturity value.
          </p>

          <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
            Find out your Lump Sum Growth
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
                  value={principal > "0" ? principal : ""} 
                  min="500"
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Expected Return (%)
                </label>
                <input
                  type="number"
                  value={expectedReturn > "0" ? expectedReturn : ""}
                  min="1"
                  max="30"
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
                  value={tenure > "0" ? tenure : ""}
                  min="1"
                  max="40"
                  onChange={(e) => setTenure(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <button
                onClick={calculateLumpSum}
                className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
              >
                Calculate Lump Sum
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

              <div className="w-full flex items-center justify-between ga-2">
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Total Value
                  </p>
                  <p className="font-lato font-semibold text-base sm:text-[30px] text-accentOrange-200">
                    ₹{Number(maturityAmount).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Est. Return
                  </p>
                  <p className="font-lato font-semibold text-base sm:text-[30px] text-accentOrange-200">
                    ₹{Number(totalReturns).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
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
          <AllOtherCalculators />
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <ContactCard value="Lumpsum" />
    </>
  );
}
