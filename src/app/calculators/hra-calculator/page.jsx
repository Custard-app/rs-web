'use client';

import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

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
        title: 'NSC Calculator',
        description: 'Calculate the maturity amount of your National Savings Certificate (NSC) investment. ',
        button: 'Calculate',
      },
      {
        title: 'MF Calculator',
        description:
          'Calculate the estimated returns of your one-time mutual fund investment.',
        button: 'Calculate',
      },
    ],
  },
];

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState(500000); // Default Basic Salary (P.A.)
  const [dearnessAllowance, setDearnessAllowance] = useState(50000); // Default DA (P.A.)
  const [hraReceived, setHraReceived] = useState(120000); // Default HRA Received (P.A.)
  const [totalRentPaid, setTotalRentPaid] = useState(100000); // Default Rent Paid (P.A.)
  const [isMetroCity, setIsMetroCity] = useState(false); // Default: Not a Metro City
  const [results, setResults] = useState({
    exemptedHRA: 0,
    taxableHRA: 0,
  });

  const calculateHRA = () => {
    const annualBasic = parseFloat(basicSalary) + parseFloat(dearnessAllowance);
    const rentExcess = Math.max(0, totalRentPaid - 0.1 * annualBasic);
    const hraMetroLimit = isMetroCity ? 0.5 * annualBasic : 0.4 * annualBasic;
    const exemptedHRA = Math.min(hraMetroLimit, rentExcess, hraReceived);

    const taxableHRA = hraReceived - exemptedHRA;

    setResults({
      exemptedHRA: exemptedHRA,
      taxableHRA: taxableHRA,
    });
  };

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              HRA Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your exempted and taxable HRA effortlessly based on your
              salary, rent, and location.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Input Section */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Basic Salary (P.A.)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Dearness Allowance (P.A.)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={dearnessAllowance}
                    onChange={(e) =>
                      setDearnessAllowance(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    HRA Received (P.A.)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={hraReceived}
                    onChange={(e) => setHraReceived(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Total Rent Paid (P.A.)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={totalRentPaid}
                    onChange={(e) => setTotalRentPaid(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Metro City?
                  </label>
                  <div className="flex items-center justify-between gap-24 mt-2">
                    <label className="flex items-center gap-2 font-lato text-lg text-gray-500">
                      <input
                        type="radio"
                        name="metroCity"
                        value="true"
                        checked={isMetroCity === true}
                        onChange={(e) =>
                          setIsMetroCity(e.target.value === 'true')
                        }
                        className="w-4 h-4 border-gray-300 focus:ring-black"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 font-lato text-lg text-gray-500">
                      <input
                        type="radio"
                        name="metroCity"
                        value="false"
                        checked={isMetroCity === false}
                        onChange={(e) =>
                          setIsMetroCity(e.target.value === 'true')
                        }
                        className="w-4 h-4 border-gray-300 focus:ring-black"
                      />
                      No
                    </label>
                  </div>
                </div>

                <button
                  onClick={calculateHRA}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate HRA
                </button>
              </div>

              {/* Result Section */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex flex-col items-center justify-center gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Exempted HRA
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{results.exemptedHRA}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Taxable HRA
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{results.taxableHRA}
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
              Contact us for personalized HRA advice
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
