'use client';

import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';


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
                    min="1000"
                    value={basicSalary > 0 ? basicSalary : ''}
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
                    value={dearnessAllowance > 0 ? dearnessAllowance : ''}
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
                    min="1000"
                    value={hraReceived > 0 ? hraReceived : ''}
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
                    min="1000"
                    value={totalRentPaid  > 0 ? totalRentPaid : ''}
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
                      ₹{Number(results.exemptedHRA).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Taxable HRA
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(results.taxableHRA).toLocaleString('en-IN')}
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
      {/* Card */}
      <ContactCard value="HRA" />
    </>
  );
}
