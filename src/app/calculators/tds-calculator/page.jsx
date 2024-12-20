'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';
// import '@/sections/home/tdsCalculatorSection/TDSCalculator.css';

export default function TDSCalculator() {
  const [totalAmount, setTotalAmount] = useState(5000); // This is the total amount (including or excluding TDS)
  const [tdsRate, setTdsRate] = useState(10); // Default TDS rate of 10%
  const [tdsAmount, setTdsAmount] = useState(0);
  const [preTdsAmount, setPreTdsAmount] = useState(0);
  const [postTdsAmount, setPostTdsAmount] = useState(0);
  const [tdsCalculationType, setTdsCalculationType] = useState('excluding'); // "excluding" or "including"

  // Function to calculate TDS when the "excluding TDS" input is used
  const calculateTDSExcluding = () => {
    const tds = (totalAmount * tdsRate) / 100;
    const postAmount = totalAmount - tds;
    setTdsAmount(tds);
    setPostTdsAmount(postAmount);
    setPreTdsAmount(totalAmount); // Pre-TDS amount is the totalAmount entered
  };

  // Function to calculate TDS when the "including TDS" input is used
  const calculateTDSIncluding = () => {
    const preAmount = totalAmount / (1 - tdsRate / 100); // Pre-TDS amount
    const tds = preAmount - totalAmount; // TDS amount
    setTdsAmount(tds);
    setPreTdsAmount(preAmount); // Pre-TDS amount is calculated
    setPostTdsAmount(totalAmount); // Post-TDS amount is the totalAmount entered
  };

  // Recalculate based on the calculation type
  useEffect(() => {
    if (tdsCalculationType === 'excluding') {
      calculateTDSExcluding();
    } else if (tdsCalculationType === 'including') {
      calculateTDSIncluding();
    }
  }, [totalAmount, tdsRate, tdsCalculationType]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              TDS Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the total TDS, pre-TDS amount, and post-TDS amount based
              on your input.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-20 my-20 ">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    TDS Calculation Type
                  </label>
                  <div className="flex items-center gap-4">
                    <label className='text-xs sm:text-sm'>
                      <input
                        type="radio"
                        name="tdsType"
                        checked={tdsCalculationType === 'excluding'}
                        onChange={() => setTdsCalculationType('excluding')}
                        className="mr-2"
                      />
                      Excluding TDS
                    </label>
                    <label className='text-xs sm:text-sm'>
                      <input
                        type="radio"
                        name="tdsType"
                        checked={tdsCalculationType === 'including'}
                        onChange={() => setTdsCalculationType('including')}
                        className="mr-2"
                      />
                      Including TDS
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Total Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    TDS Rate (%)
                  </label>
                  <input
                    type="number"
                    value={tdsRate}
                    onChange={(e) => setTdsRate(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="w-full flex flex-col items-start gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Pre-TDS Amount
                  </p>
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    Post-TDS Amount
                  </p>
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    TDS Amount
                  </p>
                </div>

                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{tdsAmount.toLocaleString('en-IN')}
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{preTdsAmount.toLocaleString('en-IN')}
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{postTdsAmount.toLocaleString('en-IN')}
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
