'use client';
import React, { useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import { GoArrowRight } from 'react-icons/go';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXXL from '@/wrapper/widths/WidthXXL';

const calculators = [
  {
    category: 'Investment Calculators',
    items: [
      {
        title: 'FD Calculator',
        description: 'Find out your Fixed Deposit maturity details with ease.',
        button: 'Calculate',
      },
      {
        title: 'NPS Calculator',
        description:
          'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
        button: 'Calculate',
      },
      {
        title: 'NSC Calculator',
        description: 'Calculate the maturity amount of your National Savings Certificate (NSC) investment. ',
        button: 'Calculate',
      },
      {
        title: 'MF Calculator',
        description:
          'Calculate the estimated returns of your one-time mutual fund investment.',
        button: 'Calculate',
      },
    ],
  },
];


export default function RDCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [rate, setRate] = useState(7.5); // Annual interest rate in percentage
  const [tenure, setTenure] = useState(5); // Tenure in years
  const [maturityAmount, setMaturityAmount] = useState(364902);
  const [totalInvestment, setTotalInvestment] = useState(300000);
  const [totalInterest, setTotalInterest] = useState(64902);
  const [investmentPercentage, setInvestmentPercentage] = useState(83);
  const [interestPercentage, setInterestPercentage] = useState(0);

  const calculateMaturity = () => {
    const annualRate = rate / 100; // Convert annual rate to decimal
    const monthlyRate = annualRate / 12; // Monthly interest rate
    const totalMonths = tenure * 12; // Total months

    // Maturity Calculation
    let maturityAmount = 0;
    for (let i = 1; i <= totalMonths; i++) {
      // Each month's investment earns interest for a different number of months
      maturityAmount += monthlyInvestment * Math.pow(1 + monthlyRate, totalMonths - i + 1);
    }

    const totalInvestment = monthlyInvestment * totalMonths; // Total deposits
    const totalInterest = maturityAmount - totalInvestment; // Total interest earned

    // Calculate percentages for the doughnut chart
    const investmentPercentage = Math.ceil((totalInvestment / maturityAmount) * 100);
    const interestPercentage = 100 - investmentPercentage;

  

    // Update states
    setMaturityAmount(Math.ceil(maturityAmount));
    setTotalInvestment(totalInvestment);
    setTotalInterest(Math.ceil(totalInterest));
    setInvestmentPercentage(investmentPercentage);
    setInterestPercentage(interestPercentage);
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              RD Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily calculate the maturity amount of your Recurring Deposit with our RD
              Calculator. Just enter your monthly deposit, interest rate, and tenure to get
              instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out your Recurring Deposit (RD) Maturity Details with Ease
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
                    value={monthlyInvestment}
                    step="100"
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    step="0.1"
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Tenure (years)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
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
                <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex flex-col items-center justify-center gap-10">
                  <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-7 h-2 bg-primary rounded-md"></div>
                      <p className="font-lato text-xs">Total Interest</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-7 h-2 bg-brightLime rounded-md"></div>
                      <p className="font-lato text-xs">Total Investment</p>
                    </div>
                  </div>
                  <div
                    className="doughnut-chart"
                    style={{
                      background: `conic-gradient(
                            #B6E300 0% ${investmentPercentage}%,
                            #004C48 ${investmentPercentage}% 100%
                          )`,
                    }}
                  >
                    <div className="doughnut-hole"></div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Maturity Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{maturityAmount}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Invested Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{totalInvestment}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center ">
                      Total Interest Earned
                    </p>
                    <p className="font-lato font-semibold text-[16px]  sm:text-[25px] text-accentOrange-200">
                      ₹{totalInterest}
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
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative ">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Contact us for personalized Recuring deposit advice
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-xs sm:text-[20px] text-wrap text-center text-gray-100 leading-6">
                Get personalized advice from our expert advisors. Click the
                button below to chat with us directly on WhatsApp and start your investment journey with Rupeestop!
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

            {/* Big circle */}
            <div className="absolute -left-8 sm:-left-14 -top-14 sm:-top-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -left-8 sm:-left-20 -top-14  sm:-top-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* For BOttom */}
            {/* Big circle */}
            <div className="absolute -right-8 sm:-right-14 -bottom-14 sm:-bottom-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -right-8 sm:-right-20 -bottom-14  sm:-bottom-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>
          </div>
        </WidthXXL>
      </div>
    </>
  );
}
