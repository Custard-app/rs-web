'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { GoArrowRight } from 'react-icons/go';
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
          title: 'RD Calculator',
          description: 'The simplest Recurring Deposit Calculator out there!',
          button: 'Calculate',
        },
        {
          title: 'NSC Calculator',
          description:
            'Calculate the maturity amount of your National Savings Certificate(NSC) investment. ',
          button: 'Calculate',
        },
      ],
    },
  ];

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(10000);
  const [finalValue, setFinalValue] = useState(20000);
  const [years, setYears] = useState(5);
  const [cagr, setCAGR] = useState(0);
  const [showGraph, setShowGraph] = useState(false);

  const calculateCAGR = () => {
    const cagrValue = ((finalValue / initialValue) ** (1 / years) - 1) * 100;
    setCAGR(cagrValue.toFixed(2));
    setShowGraph(years > 1);
  };

  useEffect(() => {
    calculateCAGR(); 
  }, []);

  const growthData = Array.from({ length: years + 1 }, (_, i) =>
    (initialValue * (1 + cagr / 100) ** i).toFixed(2)
  );

  const chartData = {
    labels: Array.from({ length: years + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Investment Growth',
        data: growthData,
        fill: false,
        backgroundColor: '#004C48',
        borderColor: '#004C48',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              CAGR Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the Compound Annual Growth Rate (CAGR) of your investment. Enter the
              initial value, final value, and tenure to get instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find Your Annualized Growth Rate
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Initial Value
                  </label>
                  <input
                    type="number"
                    value={initialValue > 0 ? initialValue : '' }
                    min="1000"
                    step="100"
                    onChange={(e) => setInitialValue(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Final Value
                  </label>
                  <input
                    type="number"
                    value={finalValue > 0 ? finalValue : '' }
                    min="1000"
                    step="100"
                    onChange={(e) => setFinalValue(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Number of Years
                  </label>
                  <input
                    type="number"
                    value={years > 0 ? years : '' }
                    min="1"
                    max="40"
                    onChange={(e) => setYears(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateCAGR}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate CAGR
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="p-2 sm:p-4 bg-[#e8e8e8] rounded-[16px] w-[380px] sm:w-full h-[313px] flex flex-col items-center justify-center gap-10">
                  {showGraph ? (
                    <Line data={chartData} options={chartOptions} />
                  ) : (
                    <p className="text-lg font-lato text-gray-700 text-center">
                      Enter valid inputs to calculate CAGR and visualize growth.
                    </p>
                  )}
                </div>
                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">CAGR</p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      {cagr}%
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">Duration</p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      {years} Year(s)
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
              Contact us for personalized CAGR advice
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
