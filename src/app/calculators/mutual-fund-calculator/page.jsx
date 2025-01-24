'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function MutualFundCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [rate, setRate] = useState(12); // Annual expected return in percentage
  const [tenure, setTenure] = useState(5); // Tenure in years
  const [maturityAmount, setMaturityAmount] = useState(8812);
  const [estimatedReturns, setEstimatedReturns] = useState(3812);
  const [investmentPercentage, setInvestmentPercentage] = useState(57);
  const [returnsPercentage, setReturnsPercentage] = useState(0);

  // Formula for Compound Interest:
  const calculateMaturity = () => {
    const monthlyRate = rate / 100 / 12; // Monthly rate in decimal
    const months = tenure * 12; // Total months
    const maturityAmount = Math.ceil(
      investmentAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    );
    const estimatedReturns = maturityAmount - investmentAmount * months;
  
    // Calculate percentages for the chart
    const investmentPercentage = Math.ceil(
      ((investmentAmount * months) / maturityAmount) * 100
    );
    const returnsPercentage = 100 - investmentPercentage;
  
    // Update state
    setMaturityAmount(maturityAmount);
    setEstimatedReturns(estimatedReturns);
    setInvestmentPercentage(investmentPercentage);
    setReturnsPercentage(returnsPercentage);
  };
  

  useEffect(() => {
    calculateMaturity();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Mutual Fund Investment Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the estimated returns of your one-time mutual fund
              investment. Enter your investment amount, expected annual return,
              and tenure to get instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Discover Your Investment Returns
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
                    value={investmentAmount > 0 ? investmentAmount : ''}
                    step="100"
                    min="100"
                    max="1000000"
                    onChange={(e) =>
                      setInvestmentAmount(Number(e.target.value) > 1000000 ? 1000000 : Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={rate > 0 ? rate : ''}
                    step="0.1"
                    min="1"
                    max="50"
                    onChange={(e) => setRate(parseFloat(e.target.value) > 50 ? 50 : parseFloat(e.target.value))}
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
                    max="40"
                    onChange={(e) => setTenure(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
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
                t2="Estimated Return"
                totalInvestment={investmentAmount}
                totalInterest={estimatedReturns}
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
                    <p className="font-lato text-base sm:text-lg text-gray-600">
                      Estimated Returns
                    </p>
                    <p className="font-lato font-semibold text-[28px]  sm:text-[38px] text-accentOrange-200">
                      ₹{Number(estimatedReturns).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AllOtherCalculators/>
        </WidthXL>
      </div>
      {/* Card */}
      <ContactCard value="Mutual Fund" />
    </>
  );
}
