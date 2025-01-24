'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(10000); // Default yearly investment
  const [ppfRate, setPPFRate] = useState(7.1); // Current PPF interest rate
  const [tenure, setTenure] = useState(15);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [maturityDetails, setMaturityDetails] = useState({
    totalInvestment: 0,
    totalInterest: 0,
    maturityValue: 0,
  });
  const [investmentPercentage, setInvestmentPercentage] = useState(83);
  const [interestPercentage, setInterestPercentage] = useState(17);

  const calculatePPF = () => {
    let principal = 0;
    let balance = 0;

    for (let i = 0; i < tenure; i++) {
      principal += yearlyInvestment;
      balance += yearlyInvestment;
      balance = Math.ceil(balance + (balance * ppfRate) / 100); // Apply yearly interest
    }

    const totalInterest = balance - principal;

    // Calculate percentages for the doughnut chart
    const investmentPercentage = Math.ceil((principal / balance) * 100);
    const interestPercentage = 100 - investmentPercentage;

    setMaturityDetails({
      totalInvestment: principal,
      totalInterest: totalInterest,
      maturityValue: balance,
    });
    setInvestmentPercentage(investmentPercentage);
    setInterestPercentage(interestPercentage);
  };


  useEffect(() => {
    calculatePPF();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              PPF Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily calculate the maturity value of your Public Provident Fund
              with our PPF Calculator. Just enter your yearly investment and
              interest rate to get instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out your Public Provident Fund (PPF) Maturity Details with
              Ease
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Yearly Investment
                  </label>
                  <input
                    type="number"
                    value={yearlyInvestment > 0 ? yearlyInvestment : ''} 
                    min="1000"
                    max="150000"
                    onChange={(e) =>
                      setYearlyInvestment(Number(e.target.value) > 150000 ? 150000 : Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time period (in years)
                  </label>
                  <input
                    type="number"
                    value={tenure > 0 ? tenure : ''}
                    step="1"
                    min="15"
                    max="50"
                    onChange={(e) => setTenure(Number(e.target.value) > 50 ? 50 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Rate of interest
                  </p>
                  <p className="w-[100px] sm:w-[200px]  font-bold font-lato text-base sm:text-[20px] text-gray-700 px-10 py-2 bg-gray-200 rounded-md text-center">
                    {ppfRate}%
                  </p>
                </div>

                <button
                  onClick={calculatePPF}
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
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
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
          <AllOtherCalculators/>
        </WidthXL>
      </div>
      <ContactCard value="PPF" />
    </>
  );
}
