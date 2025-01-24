'use client';
import React, { useEffect, useState } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import { GoArrowRight } from 'react-icons/go';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import ContactCard from '@/components/contactCard/ContactCard';

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
        description:
          'Calculate the maturity amount of your National Savings Certificate (NSC) investment. ',
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

export default function EPFCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(1000); // Default monthly salary
  const [userAge, setUserAge] = useState(25); // Default age
  const [contributionPercentage, setContributionPercentage] = useState(12); // Minimum EPF contribution
  const [annualIncrement, setAnnualIncrement] = useState(2);
  const [totalInterest, setTotalInterest] = useState(0);
  const epfInterestRate = 8.1; // Fixed EPF interest rate
  const retirementAge = 60;

  const [maturityValue, setMaturityValue] = useState(0);

  const calculateEPF = () => {
    const yearsToRetirement = retirementAge - userAge;
    let balance = 0;
    let totalContributions = 0;
    let currentSalary = monthlySalary;

    for (let year = 0; year < yearsToRetirement; year++) {
      // Employee contribution
      const employeeContribution =
        (currentSalary * contributionPercentage * 12) / 100;

      // Employer contribution (3.67% to EPF, 8.33% to EPS capped at ₹15,000/month)
      const employerContribution = (currentSalary * 3.67 * 12) / 100;

      const totalYearlyContribution =
        employeeContribution + employerContribution;

      // Add contributions and calculate interest
      totalContributions += totalYearlyContribution;
      balance += totalYearlyContribution;

      balance = Math.floor(balance + (balance * epfInterestRate) / 100);

      // Annual salary increment
      currentSalary += (currentSalary * annualIncrement) / 100;
    }

    const totalInterest = Math.ceil(balance - totalContributions);

    setMaturityValue(balance);
    setTotalInterest(totalInterest);
  };

  useEffect(() => {
    calculateEPF();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              EPF Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily estimate your retirement corpus with our EPF Calculator.
              Enter details like salary, contribution, and increments to get
              your maturity value at retirement.
            </p>

            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out your Employee Provident Fund (EPF) Maturity Details with
              Ease
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Monthly Salary
                  </label>
                  <input
                    type="number"
                    min="1000"
                    max="500000"
                    value={monthlySalary > 0 ? monthlySalary : ''}
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Your Age
                  </label>
                  <input
                    type="number"
                    min="15"
                    max="58"
                    value={userAge > 0 ? userAge : ''}
                    onChange={(e) =>
                      setUserAge(
                        Number(e.target.value) > 58
                          ? 58
                          : Number(e.target.value),
                      )
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Contribution to EPF (%)
                  </label>
                  <input
                    type="number"
                    min="12"
                    max="20"
                    value={
                      contributionPercentage > 0 ? contributionPercentage : ''
                    }
                    onChange={(e) =>
                      setContributionPercentage(
                        Number(e.target.value) > 20
                          ? 20
                          : Number(e.target.value),
                      )
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Increment in Salary (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={annualIncrement > 0 ? annualIncrement : ''}
                    onChange={(e) =>
                      setAnnualIncrement(
                        Number(e.target.value) > 15
                          ? 15
                          : Number(e.target.value),
                      )
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <button
                  onClick={calculateEPF}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Retirement Amount
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex flex-col items-center justify-center gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-lato text-lg font-semibold">
                      Your accumulated maturity amount will be
                    </h3>
                    <p className="font-lato font-bold text-[25px] text-accentOrange-200">
                      ₹{Number(maturityValue).toLocaleString('en-In')}
                    </p>
                    <h3 className="font-lato text-lg font-semibold">
                      by the time you retire
                    </h3>
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
      <ContactCard value="EPF" />
    </>
  );
}
