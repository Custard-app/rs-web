'use client';
import React, { useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';

export default function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [yearsOfService, setYearsOfService] = useState(5);
  const [gratuityAmount, setGratuityAmount] = useState(0);

  // Function to calculate gratuity
  const calculateGratuity = () => {
    // Formula: (Basic Salary * Years of Service * 15) / 26
    const gratuity = Math.ceil((basicSalary * yearsOfService * 15) / 26);
    setGratuityAmount(gratuity);
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Gratuity Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your gratuity based on your basic salary and years of service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10 my-20">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Basic Salary (₹)
                  </label>
                  <input
                    type="number"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Years of Service
                  </label>
                  <input
                    type="number"
                    value={yearsOfService}
                    onChange={(e) => setYearsOfService(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <button
                  onClick={calculateGratuity}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Gratuity
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Gratuity Amount
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{gratuityAmount.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </WidthXL>
      </div>
    </>
  );
}
