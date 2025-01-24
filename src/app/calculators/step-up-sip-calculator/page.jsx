'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';

export default function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualStepUp, setAnnualStepUp] = useState(10);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateStepUpSIP = () => {
    let totalInvestment = 0;
    let totalReturns = 0;
    let monthlyInvest = monthlyInvestment;
    const months = timePeriod * 12;
    const monthlyRate = expectedReturnRate / 12 / 100;

    for (let year = 1; year <= timePeriod; year++) {
      for (let month = (year - 1) * 12; month < year * 12; month++) {
        const factor = Math.pow(1 + monthlyRate, months - month);
        totalReturns += monthlyInvest * factor;
        totalInvestment += monthlyInvest;
      }
      monthlyInvest += (monthlyInvest * annualStepUp) / 100;
    }

    setInvestedAmount(Math.ceil(totalInvestment));
    setEstimatedReturns(Math.ceil(totalReturns - totalInvestment));
    setTotalValue(Math.ceil(totalReturns));
  };

  useEffect(() => {
    calculateStepUpSIP();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Step-Up SIP Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your future wealth with a Step-Up SIP. Enter your
              monthly investment, step-up percentage, return rate, and time
              period to see how your investments grow.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Plan Your Wealth Creation with Step-Up SIP
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    min="1000"
                    value={monthlyInvestment > 0 ? monthlyInvestment : ''}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Step-Up (%)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max='50'
                    value={annualStepUp > 0 ? annualStepUp : ''}
                    onChange={(e) => setAnnualStepUp(Number(e.target.value) > 50 ? 50 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Expected Return Rate (p.a. %)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={expectedReturnRate > 0 ? expectedReturnRate : ''}
                    onChange={(e) =>
                      setExpectedReturnRate(Number(e.target.value) > 30 ? 30 : Number(e.target.value)) 
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (years)
                  </label>
                  <input
                    type="number"
                    value={timePeriod > 0 ? timePeriod : ''} 
                    min="1"
                    max="40"
                    onChange={(e) => setTimePeriod(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateStepUpSIP}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart
                  t1="Invested Amount"
                  t2="Estimated Returns"
                  totalInvestment={investedAmount}
                  totalInterest={estimatedReturns}
                />

                <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Invested Amount
                    </p>
                    <p className="font-lato font-semibold text-base sm:text-[28px] text-accentOrange-200">
                      ₹{Number(investedAmount).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center ">
                      Estimated Returns
                    </p>
                    <p className="font-lato font-semibold text-base  sm:text-[28px] text-accentOrange-200">
                      ₹{Number(estimatedReturns).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-10 sm:gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Value
                    </p>
                    <p className="font-lato font-semibold text-base  sm:text-[28px] text-accentOrange-200">
                      ₹{Number(totalValue).toLocaleString('en-IN')}
                    </p>
                  </div>
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
      <ContactCard value="Step-Up SIP" />
    </>
  );
}
