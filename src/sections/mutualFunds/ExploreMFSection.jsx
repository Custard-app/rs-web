'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useState } from 'react';

const ExploreMFSection = () => {
  const [activeTab, setActiveTab] = useState('Debt Funds');

  const data = {
    'Debt Funds': {
      title: 'Steady Returns, Lower Risk – Debt Funds',
      description:
        'Debt funds are a better option than Bank Fixed Deposits (FD) as they provide better returns and are more tax-efficient. These funds do not invest in the share markets.',
      benefits: [
        'Relatively stable and consistent in nature',
        'Flexible in investing and withdrawal',
        'Higher interest returns with tax efficiency',
      ],
    },
    'Liquid Funds': {
      title: 'Maximize Growth with Equity Investments.',
      description:
        'Liquid funds are the best investment alternative to saving and current bank accounts, generating better interest than banks. They are the safest product in the mutual fund industry, with no money invested in share markets.',
      benefits: [
        'Best option to invest your surplus money',
        'Invest for as low as one day and earn returns',
        'Suitable for short-term investments like weekends or bank holidays',
      ],
    },
    'Equity Funds': {
      title: 'Quick Access, Secure Growth – Liquid Funds',
      description:
        'Equity funds allow you to be part of the companies performance by investing a maximum amount into the share market, involving risk and volatility. These products are suitable for those looking to invest for a longer period (more than 5 years).',
      benefits: [
        'Ownership in companies',
        'Investment linked to the profit and loss of the companies in the selected scheme',
        'Long-term capital gains on equity are taxable at 10% beyond ₹100,000 per financial year',
        'Dividends paid on equity are taxable at 10%',
        'Best suited for long-term investments',
        'Compounding multiplies your returns',
      ],
    },
    'Gold Funds': {
      title: 'Golden Opportunities for a Shining Future',
      description:
        'Investing in gold can be done efficiently through paper gold, which provides the same feel of prosperity and security.',
      benefits: [
        'Highest purity guaranteed (99.5%)',
        'Start buying paper gold with as low as ₹500 monthly',
        'Easy liquidity similar to physical gold',
        'Tax-efficient',
        'Cost-efficient with no storage or locker expenses',
        'No impact from the devaluation cycle compared to physical gold',
      ],
    },
  };

  return (
    <div className="bg-white py-14 px-5 sm:px-0">
      <WidthXL>
        <div className="flex flex-col gap-14">
          <div >
            <h1 className="font-poppins font-semibold text-4xl sm:text-[42px] text-black text-center mb-4">
              Explore the Different Types of Mutual Funds
            </h1>
            <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 text-center">
              Below are the various types of mutual funds, each designed to meet
              specific investment needs.
            </p>
          </div>

          {/* Naviagation section */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-[20px] sm:gap-8">
            {/* Left Navigation */}
            <div className="bg-[#E3FFFE] rounded-[20px] w-full sm:w-[290px] h-[64px] sm:h-[520px] p-[10px] sm:p-4 flex flex-row sm:flex-col justify-between sm:justify-center gap-3 sm:gap-10">
              {Object.keys(data).map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`block w-full px-[12px] sm:px-10 py-[6px] sm:py-3 rounded-lg sm:rounded-full text-xs sm:text-lg font-semibold font-lato text-wrap text-center sm:text-left ${
                    activeTab === item
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Content */}
            <div className="bg-[#E3FFFE] w-full sm:w-[890px] h-[520px] rounded-[20px] p-[20px] sm:p-10 flex flex-col justify-center">
              <h2 className="font-poppins font-semibold text-lg sm:text-2xl text-center text-wrap">
                {data[activeTab].title}
              </h2>
              <p className="mt-4 text-gray-800 font-lato font-semibold text-sm sm:text-[20px]">
                {data[activeTab].description}
              </p>
              <h3 className="my-6 font-bold text-sm sm:text-[20px] text-primary">
                Benefits:
              </h3>
              <ul className="list-disc list-inside text-gray-700 font-lato font-medium text-sm sm:text-[20px] space-y-2">
                {data[activeTab].benefits.map((benefit, index) => (
                  <li key={index} >{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default ExploreMFSection;
