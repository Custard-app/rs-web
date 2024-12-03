'use client';
import React, { useState, useEffect } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';
import '@/sections/home/calculatorSection/Calculator.css';

export default function IncomeTaxCalculator() {
  // State for storing user inputs
  const [salary, setSalary] = useState(1000000);
  const [houseRentAllowance, setHouseRentAllowance] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [investmentsUnder80C, setInvestmentsUnder80C] = useState(150000);
  const [medicalInsurance, setMedicalInsurance] = useState(25000);
  const [interestOnHomeLoan, setInterestOnHomeLoan] = useState(200000);
  const [taxableSalary, setTaxableSalary] = useState(0);
  const [oldTax, setOldTax] = useState(0);
  const [newTax, setNewTax] = useState(0);

  // Old Regime tax slabs
  const oldTaxSlabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.1 },
    { limit: 2500000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 }
  ];

  // New Regime tax slabs (No deductions)
  const newTaxSlabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.1 },
    { limit: 7500000, rate: 0.15 },
    { limit: 10000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 }
  ];

  // Function to calculate tax based on slabs
  const calculateTax = (income, slabs) => {
    let tax = 0;
    let remainingIncome = income;

    for (let i = 0; i < slabs.length; i++) {
      const slab = slabs[i];
      if (remainingIncome > slab.limit) {
        tax += (Math.min(remainingIncome, slab.limit) - (i === 0 ? 0 : slabs[i - 1].limit)) * slab.rate;
      } else {
        break;
      }
    }
    return tax;
  };

  // Function to calculate taxable salary after deductions (Old Regime)
  const calculateTaxableSalaryOldRegime = () => {
    let deductions = 0;

    // 80C Deductions
    deductions += investmentsUnder80C;

    // Medical Insurance Deduction
    deductions += medicalInsurance;

    // Home Loan Interest Deduction
    deductions += interestOnHomeLoan;

    const taxableSalary = salary + otherIncome - deductions;

    setTaxableSalary(taxableSalary);
    return taxableSalary;
  };

  // Calculate both old and new regime taxes
  const calculateIncomeTax = () => {
    const taxableSalaryOld = calculateTaxableSalaryOldRegime();
    const oldRegimeTax = calculateTax(taxableSalaryOld, oldTaxSlabs);
    const newRegimeTax = calculateTax(salary + otherIncome, newTaxSlabs);

    setOldTax(oldRegimeTax);
    setNewTax(newRegimeTax);
  };

  useEffect(() => {
    calculateIncomeTax();
  }, [
    salary, 
    houseRentAllowance, 
    otherIncome, 
    investmentsUnder80C, 
    medicalInsurance, 
    interestOnHomeLoan
  ]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Income Tax Calculator (Old vs New Regime)
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate your income tax under both the old and new regimes with all possible deductions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Annual Salary (₹)
                  </label>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    House Rent Allowance (₹)
                  </label>
                  <input
                    type="number"
                    value={houseRentAllowance}
                    onChange={(e) => setHouseRentAllowance(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Other Income (₹)
                  </label>
                  <input
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Investments Under 80C (₹)
                  </label>
                  <input
                    type="number"
                    value={investmentsUnder80C}
                    onChange={(e) => setInvestmentsUnder80C(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Medical Insurance Premium (₹)
                  </label>
                  <input
                    type="number"
                    value={medicalInsurance}
                    onChange={(e) => setMedicalInsurance(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest on Home Loan (₹)
                  </label>
                  <input
                    type="number"
                    value={interestOnHomeLoan}
                    onChange={(e) => setInterestOnHomeLoan(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <button
                  onClick={calculateIncomeTax}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Tax
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    **Old Regime Tax**
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{oldTax.toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="w-full flex flex-col items-center gap-4">
                  <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                    **New Regime Tax**
                  </p>
                  <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                    ₹{newTax.toLocaleString('en-IN')}
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
