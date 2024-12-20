'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Calculator.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Calculator() {
  const [monthlyInstallment, setMonthlyInstallment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);
  const [isSIPMode, setIsSIPMode] = useState(true);

  const investedAmount = isSIPMode
    ? monthlyInstallment * 12 * timePeriod // Total investment for SIP
    : monthlyInstallment; // Single investment for lump sum

  const estimatedReturns = isSIPMode
    ? Math.floor(
        ((monthlyInstallment *
          ((1 + expectedReturn / 100 / 12) ** (12 * timePeriod) - 1)) /
          (expectedReturn / 100 / 12)) *
          (1 + expectedReturn / 100 / 12),
      ) - investedAmount // Calculate profit for SIP
    : Math.floor(
        investedAmount * (1 + expectedReturn / 100) ** timePeriod -
          investedAmount,
      ); // Calculate profit for lump sum

  const totalAmount = Math.floor(investedAmount + estimatedReturns);

  const updateRangeBackground = (e) => {
    const input = e.target;
    const percentage =
      ((input.value - input.min) / (input.max - input.min)) * 100;
    input.style.setProperty('--range-value', `${percentage}%`);
  };

  const handleToggle = () => {
    setIsSIPMode(!isSIPMode);
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
    },
  };

  const doughnutData = {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        data: [investedAmount, estimatedReturns],
        backgroundColor: ['#B6E300', '#004C48'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="my-14 sm:my-24 px-5 sm:px-0 bg-accentGray-100 flex flex-col items-center justify-center">
      <WidthXL>
        <div className="w-full flex flex-col items-center gap-1 mb-10">
          <h2 className="text-4xl  text-center sm:text-6xl font-bold font-poppins text-black capitalize">
            Finance Weapons
          </h2>
          <p className="text-sm sm:text-xl text-center font-lato font-semibold text-gray-300">
            {isSIPMode
              ? 'Know the SIP amount required to achieve your goals.'
              : 'Calculate the final amount for Lumpsum investment.'}
          </p>
        </div>

        <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-around p-10 bg-backgroundLight rounded-[40px] gap-14">
          {/* Left part */}
          <div className="w-full sm:w-[45%] gap-6 flex flex-col items-center justify-center text-gray-700">
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
            <div className="w-full sm:w-[90%] calculator">
              <p className="flex items-center justify-between mb-6 font-lato font-medium sm:font-semibold text-sm sm:text-lg">
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

            <div className="w-full sm:w-[90%] calculator">
              <p className="flex items-center justify-between mb-6 font-lato font-medium sm:font-semibold text-sm sm:text-lg">
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

            <div className="w-full sm:w-[90%] calculator">
              <p className="flex items-center justify-between mb-6 font-lato font-medium sm:font-semibold text-sm sm:text-lg">
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
          <div className="flex flex-col items-center w-full sm:w-[45%] gap-9">
            <div className='w-[280px] h-[280px] mx-auto'>
              <Doughnut data={doughnutData} options={doughnutOptions} />
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

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-700">
              <div className="w-full p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm text-nowrap">
                  Invested Amount
                </p>
                <p className="font-lato font-bold text-2xl">
                  ₹{Number(investedAmount).toLocaleString('en-IN')}
                </p>
              </div>
              <div className="w-full p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm text-nowrap">
                  {' '}
                  Estimated Returns
                </p>
                <p className="font-lato font-bold text-2xl">
                  ₹{Number(estimatedReturns).toLocaleString('en-IN')}
                </p>
              </div>
              <div className="w-full p-3 bg-accentGreen rounded-xl flex items-center justify-center flex-col gap-2">
                <p className="font-lato font-medium text-sm">Total Amount</p>
                <p className="font-lato font-bold text-2xl">
                  ₹{Number(totalAmount).toLocaleString('en-IN')}
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
