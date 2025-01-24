'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';



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
       <AllOtherCalculators/>
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
    </>
  );
}
