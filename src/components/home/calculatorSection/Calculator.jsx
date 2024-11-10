'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';

function Calculator() {
  const [monthlyInstallment, setMonthlyInstallment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);
  const [isSIPMode, setIsSIPMode] = useState(true);

  const [isClient, setIsClient] = useState(false);

  // Hydration check for client-only logic
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (!isClient) return; 

  //   const rangeInputs = document.querySelectorAll('input[type="range"]');
  //   rangeInputs.forEach((input) => updateRangeBackground(input));

  //   rangeInputs.forEach((input) => {
  //     input.addEventListener('input', () => updateRangeBackground(input));
  //   });

  //   return () => {
  //     rangeInputs.forEach((input) =>
  //       input.removeEventListener('input', () => updateRangeBackground(input))
  //     );
  //   };
  // }, [isClient]);

  const investedAmount = isSIPMode
    ? monthlyInstallment * 12 * timePeriod
    : monthlyInstallment;

  const estimatedReturns = isSIPMode
    ? Math.floor(
        ((monthlyInstallment *
          ((1 + expectedReturn / 100 / 12) ** (12 * timePeriod) - 1)) /
          (expectedReturn / 100 / 12)) *
          (1 + expectedReturn / 100 / 12),
      )
    : Math.floor(
        investedAmount * (1 + expectedReturn / 100) ** timePeriod -
          investedAmount,
      );

  const totalAmount = Math.floor(investedAmount + estimatedReturns);
  const investedPercentage = Math.floor((investedAmount / totalAmount) * 100);
  const estimatedPercentage = Math.floor(
    (estimatedReturns / totalAmount) * 100,
  );

  const updateRangeBackground = (e) => {
    const input = e.target;
    const percentage =
      ((input.value - input.min) / (input.max - input.min)) * 100;
    input.style.setProperty('--range-value', `${percentage}%`);
  };

  const handleToggle = () => {
    setIsSIPMode(!isSIPMode);
  };


  // if (!isClient) {
  //   return null; 
  // }

  return (
    <div className="my-24 bg-accentGray-100 flex flex-col items-center justify-center">
      <WidthXL>
        <div className="w-full flex flex-col items-center gap-1 mb-10">
          <h2 className="text-6xl font-bold font-poppins text-black capitalize">
            Finance Weapons
          </h2>
          <p className="text-xl font-lato font-semibold text-gray-300">
            {isSIPMode
              ? 'Know the SIP amount required to achieve your goals.'
              : 'Calculate the final amount for Lumpsum investment.'}
          </p>
        </div>

        <div className="w-[100%] mx-auto flex items-center justify-around p-10 bg-backgroundLight rounded-[40px]">
          {/* Left part */}
          <div className="w-[45%] gap-6 flex flex-col items-center justify-center text-gray-700">
            {/* Toggle Slider */}
            <div className="toggle-container">
              <div className="toggle-switch" onClick={handleToggle}>
                <div
                  className="toggle-slider"
                  style={{
                    transform: isSIPMode ? 'translateX(0)' : 'translateX(100%)',
                  }}
                ></div>
                <div
                  className={`toggle-switch-option font-lato ${
                    isSIPMode ? 'active' : ''
                  }`}
                  onClick={() => setIsSIPMode(true)}
                >
                  SIP
                </div>
                <div
                  className={`toggle-switch-option font-lato ${
                    !isSIPMode ? 'active' : ''
                  }`}
                  onClick={() => setIsSIPMode(false)}
                >
                  Lumpsum
                </div>
              </div>
            </div>
            <div className="w-[90%]">
              <p className="flex items-center justify-between mb-6 font-lato font-semibold text-lg">
                {isSIPMode ? 'Monthly Installment' : 'Lumpsum Amount'}{' '}
                <span>₹{monthlyInstallment.toLocaleString()}</span>
              </p>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyInstallment}
                onChange={(e) => {
                  setMonthlyInstallment(Number(e.target.value));
                  updateRangeBackground(e);
                }}
                className="w-full"
              />
            </div>

            <div className="w-[90%]">
              <p className="flex items-center justify-between mb-6 font-lato font-semibold text-lg">
                Expected Return<span>{expectedReturn}%</span>
              </p>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => {
                  setExpectedReturn(Number(e.target.value));
                  updateRangeBackground(e);
                }}
                className="w-full"
              />
            </div>

            <div className="w-[90%]">
              <p className="flex items-center justify-between mb-6 font-lato font-semibold text-lg">
                Time Period<span>{timePeriod} Years</span>
              </p>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={timePeriod}
                onChange={(e) => {
                  setTimePeriod(Number(e.target.value));
                  updateRangeBackground(e);
                }}
                className="w-full"
              />
            </div>
          </div>

          {/* Right part */}
          <div className="flex flex-col items-center w-[45%] gap-8">
            <div
              className="doughnut-chart"
              style={{
                background: `conic-gradient(
              #004C48 0% ${investedPercentage}%,
              #B6E300 ${investedPercentage}% 100%
            )`,
              }}
            >
              <div className="doughnut-hole"></div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <div className="w-7 h-2 bg-primary rounded-md"></div>
                <p className="font-lato text-xs">Invested Amount</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-7 h-2 bg-brightLime rounded-md"></div>
                <p className="font-lato text-xs">Estimated Amount</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 text-gray-700">
              <div className="p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm">Invested Amount</p>
                <p className="font-lato font-bold text-2xl">
                  ₹{investedAmount.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm">
                  {' '}
                  Estimated Returns
                </p>
                <p className="font-lato font-bold text-2xl">
                  ₹{estimatedReturns.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm">Total Amount</p>
                <p className="font-lato font-bold text-2xl">
                  ₹{totalAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default Calculator;
