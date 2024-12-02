'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import npsbg from '@/assets/images/npsbg.png';
import '@/sections/home/calculatorSection/Calculator.css';

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

export default function NPSCalculator() {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [expectedReturnRate, setExpectedReturnRate] = useState('');
  const [totalCorpus, setTotalCorpus] = useState(0);
  const [monthlyPension, setMonthlyPension] = useState(0);

  const calculatePension = () => {
    const ageDiff = retirementAge - currentAge;
    const totalMonths = ageDiff * 12;
    const monthlyRate = expectedReturnRate / 100 / 12;

    // Future Value of Annuity formula
    const fv =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const corpusForPension = fv * 0.4; // Assuming 40% of the corpus is used for pension
    const pension = (corpusForPension * (7 / 100)) / 12; // 7% annual annuity rate divided into monthly

    // Format numbers to Indian style
    const formattedCorpus = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
    }).format(fv);

    const formattedPension = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
    }).format(pension);

    setTotalCorpus(formattedCorpus);
    setMonthlyPension(formattedPension);
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div
        className="py-14 px-5 sm:px-0 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${npsbg.src})` }}
      >
        <WidthXL>
          {/* HEROSECTION START */}
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
            NPS Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
            Use our NPS Calculator to determine your total corpus at retirement
            and the monthly pension you can expect.
          </p>
          <div className="bg-white p-[10px] sm:p-10 rounded-[20px] mt-10">
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 ">
              Calculate your National Pension System (NPS) Amount and Pension
              Easily
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Current Age
                  </label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Retirement Age
                  </label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Monthly Contribution
                  </label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) =>
                      setMonthlyContribution(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Expected Return Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={expectedReturnRate}
                    onChange={(e) =>
                      setExpectedReturnRate(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculatePension}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Pension
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex items-center justify-center">
                </div>
                <div className="w-full flex items-center justify-evenly gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Corpus at Retirement
                    </p>
                    <p
                      className={`font-lato font-semibold ${
                        totalCorpus.length > 10
                          ? 'text-[18px] sm:text-[28px]'
                          : 'text-[28px] sm:text-[38px]'
                      } text-accentOrange-200 text-wrap text-center`}
                    >
                      ₹{totalCorpus}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Monthly Pension Amount
                    </p>
                    <p
                      className={`font-lato font-semibold ${
                        monthlyPension.length > 10
                          ? 'text-[18px] sm:text-[28px]'
                          : 'text-[28px] sm:text-[38px]'
                      } text-accentOrange-200 text-wrap text-center`}
                    >
                      ₹{monthlyPension}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}

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
        {/* Card */}
        <div className="py-14 sm:py-24">
          <WidthXXL>
            <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative overflow-hidden">
              <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
                Learn more about NPS with our experts
              </p>
              <div className="w-full sm:w-[756px]">
                <p className="w-full font-lato font-medium text-xs sm:text-[20px] text-wrap text-center text-gray-100">
                  Get personalized advice from our expert advisors. Click the
                  button below to chat with us directly on WhatsApp and start
                  your investment journey with Rupeestop!
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
        
      </div>
    </>
  );
}
