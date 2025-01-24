'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';



export default function PostOfficeMISCalculator() {
  const [principal, setPrincipal] = useState(500000); // Principal Amount
  const [interestRate, setInterestRate] = useState(7.4); // Annual Interest Rate (%)
  const [timePeriod, setTimePeriod] = useState(5); // Time Period in years
  const [monthlyIncome, setMonthlyIncome] = useState(3125); // Monthly payout
  const [maturityAmount, setMaturityAmount] = useState(500000); // Total amount returned on maturity
  const [incomePercentage, setIncomePercentage] = useState(7); // Income ratio
  const [principalPercentage, setPrincipalPercentage] = useState(93); // Principal ratio

  const calculateMIS = () => {
    // Monthly Income Calculation
    const annualInterest = (principal * interestRate) / 100;
    const monthlyIncome = Math.ceil(annualInterest / 12);

    // Maturity amount (MIS does not add interest to the principal; only the principal is returned)
    const maturityAmount = principal;

    // Calculate percentages for the chart
    const incomePercentage = Math.ceil(
      (annualInterest / (annualInterest + principal)) * 100,
    );
    const principalPercentage = 100 - incomePercentage;

    // Update state
    setMonthlyIncome(monthlyIncome);
    setMaturityAmount(maturityAmount);
    setIncomePercentage(incomePercentage);
    setPrincipalPercentage(principalPercentage);
  };

  useEffect(() => {
    calculateMIS();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          {/* HEROSECTION START */}
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Post Office MIS Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your monthly income and maturity amount from the Post
              Office Monthly Income Scheme.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Simplify your savings with accurate MIS calculations
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
                    min="1000"
                    value={principal > 0 ? principal : ''}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate > 0 ? interestRate : ''}
                    min="1"
                    max="12"
                    step="0.1"
                    onChange={(e) => setInterestRate(Number(e.target.value) > 12 ? 12 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (years)
                  </label>
                  <input
                    type="number"
                    value={timePeriod}
                    disabled // MIS is fixed at 5 years
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <button
                  onClick={calculateMIS}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate MIS Income
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart
                  t1="Principal"
                  t2="Interest Income"
                  totalInvestment={principal}
                  totalInterest={monthlyIncome * 12 * timePeriod} // Total income over the scheme period
                />

                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">
                      Monthly Income
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(monthlyIncome).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 ">
                      Maturity Amount
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(maturityAmount).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}

          <AllOtherCalculators/>
        </WidthXL>
      </div>
      <ContactCard value="Post Office MIS" />
    </>
  );
}
