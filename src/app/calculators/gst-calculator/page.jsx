'use client';
import React, { useState, useEffect } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';

export default function GSTCalculator() {
  const [totalAmount, setTotalAmount] = useState(5000); // This is the total amount (including or excluding GST)
  const [gstRate, setGstRate] = useState(18); // Default GST rate of 18%
  const [gstAmount, setGstAmount] = useState(0);
  const [preGstAmount, setPreGstAmount] = useState(0); 
  const [postGstAmount, setPostGstAmount] = useState(0);
  const [gstCalculationType, setGstCalculationType] = useState("excluding"); // "excluding" or "including"

  // Function to calculate GST when the "excluding GST" input is used
  const calculateGSTExcluding = () => {
    const gst = (totalAmount * gstRate) / 100;
    const postAmount = totalAmount + gst;
    setGstAmount(gst);
    setPostGstAmount(postAmount);
  };

  // Function to calculate GST when the "including GST" input is used
  const calculateGSTIncluding = () => {
    const preAmount = totalAmount / (1 + gstRate / 100);  
    const gst = totalAmount - preAmount;  // GST amount
    setPreGstAmount(preAmount); // Set the pre-GST amount
    setGstAmount(gst);
    setPostGstAmount(totalAmount);
  };

  // Recalculate based on the calculation type
  useEffect(() => {
    if (gstCalculationType === "excluding") {
      calculateGSTExcluding();
    } else if (gstCalculationType === "including") {
      calculateGSTIncluding();
    }
  }, [totalAmount, gstRate, gstCalculationType]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              GST Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the total GST and post-GST amount based on your input.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10 my-20">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    GST Calculation Type
                  </label>
                  <div className="flex items-center gap-4">
                    <label>
                      <input
                        type="radio"
                        name="gstType"
                        checked={gstCalculationType === "excluding"}
                        onChange={() => setGstCalculationType("excluding")}
                        className='mr-2'
                      />
                      Excluding GST
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gstType"
                        checked={gstCalculationType === "including"}
                        onChange={() => setGstCalculationType("including")}
                        className='mr-2'
                      />
                      Including GST
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Total Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={totalAmount > 0 ? totalAmount : ""}
                    min="5000"
                    max="5000000"
                    onChange={(e) => setTotalAmount(Number(e.target.value) > 5000000 ? 5000000 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    GST Rate (%)
                  </label>
                  <select
                    value={gstRate}
                    onChange={(e) => setGstRate(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value={0.25}>0.25</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                    <option value={28}>28</option>
                  </select>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    GST Amount
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{gstAmount.toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Post-GST Amount
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{postGstAmount.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AllOtherCalculators/>
        </WidthXL>
      </div>
    </>
  );
}
