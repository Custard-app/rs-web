import WidthXL from '@/wrapper/widths/WidthXL';
import React from 'react';

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
      {
        title: 'MF Calculator',
        description: 'Find out your Mutual Fund maturity amount and benefits.',
        button: 'Calculate',
      },
      {
        title: 'SSY Calculator',
        description:
          'Should you invest in Sukanya Samriddhi Yojana (SSY)? Check now!',
        button: 'Calculate',
      },
      {
        title: 'SIP Calculator',
        description: 'How much can you save by starting an SIP? Find out!',
        button: 'Calculate',
      },
      {
        title: 'Goal SIP Calculator',
        description: 'How to plan your goals via SIP? Assess now!',
        button: 'Calculate',
      },
    ],
  },
];

function CalculatorsSection() {
  return (
    <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className="">
          {calculators.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
                  >
                    <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                    <h3 className="font-lato text-2xl font-bold mb-3 sm:mb-5 text-start">
                      {item.title}
                    </h3>
                    <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                      {item.description}
                    </p>
                    <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                      {item.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* TAX AND SAVING CALCULATORS */}
          <div className='mt-20'>
            <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
              Tax & Savings Calculators
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              {/* CARD1 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  HRA Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  The most accurate House Rent Allowance (HRA) Calculator out
                  there.
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  FIRE Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  Know exactly how much you need to achieve Financial
                  Independence and Retire Early (FIRE).
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Growth & Returns Calculators */}
          <div className='mt-20'>
            <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
              Growth & Returns Calculators
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              {/* CARD1 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  IRR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Calculate Internal Rate of Return (IRR) with multiple
                  cashflows using the XIRR method.
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  CAGR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Figure out the Compound Annual Growth Rate (CAGR) in a flash.
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default CalculatorsSection;
