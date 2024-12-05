'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { GoArrowRight } from 'react-icons/go';
import React, { useState, useEffect } from 'react';
import '@/sections/home/calculatorSection/Calculator.css';
import DoughnutChart from '@/components/chart/DoughnutChart';

const calculators = [
    {
      category: 'Investment Calculators',
      items: [
        {
          title: 'MF Calculator',
          description:
            'Calculate the estimated returns of your one-time mutual fund investment.',
          button: 'Calculate',
        },
        {
          title: 'NPS Calculator',
          description:
            'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
          button: 'Calculate',
        },
        {
          title: 'RD Calculator',
          description: 'The simplest Recurring Deposit Calculator out there!',
          button: 'Calculate',
        },
        {
          title: 'NSC Calculator',
          description:
            'Now learn how much your National Savings Certificate (NSC) will grow for you!',
          button: 'Calculate',
        },
      ],
    },
  ];

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
              Calculate your future wealth with a Step-Up SIP. Enter your monthly investment, step-up percentage, return rate, and time period to see how your investments grow.
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
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Step-Up (%)
                  </label>
                  <input
                    type="number"
                    value={annualStepUp}
                    onChange={(e) => setAnnualStepUp(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Expected Return Rate (p.a. %)
                  </label>
                  <input
                    type="number"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
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
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
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
        <div className=" mt-20">
            {calculators.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
                  Other Popular Calculators
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
                    >
                      <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                      <h3 className="font-lato text-2xl font-bold mb-3 sm:mb-5 text-start">
                        {item.title}
                      </h3>
                      <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                        {item.description}
                      </p>
                      <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-primary text-white rounded-3xl ">
                        {item.button}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative px-5 sm:px-14">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Contact us for personalized Step Up SIP Calculator advice
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-xs sm:text-[20px] text-wrap text-center text-gray-100 leading-6">
                Get help on your Step Up SIP Calculator with our expert team. Reach out via WhatsApp to start today!
              </p>
            </div>
            <button className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
                Chat With Us
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </button>
          </div>
        </WidthXXL>
      </div>
    </>
  );
}
