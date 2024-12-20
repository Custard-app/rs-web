'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(600000); // CTC input
  const [bonus, setBonus] = useState(15); // Bonus input (percentage or amount)
  const [bonusType, setBonusType] = useState('percentage'); // Bonus type (percentage or amount)
  const [monthlyProfessionalTax, setMonthlyProfessionalTax] = useState(200);
  const [monthlyEmployerPf, setMonthlyEmployerPf] = useState(1800);
  const [monthlyEmployeePf, setMonthlyEmployeePf] = useState(1800);
  const [monthlyAdditionalDeduction, setMonthlyAdditionalDeduction] =
    useState(0);
  const [monthlyAdditionalDeduction2, setMonthlyAdditionalDeduction2] =
    useState(0);

  const [result, setResult] = useState({
    totalMonthlyDeductions: 0,
    totalAnnualDeductions: 0,
    takeHomeMonthlySalary: 0,
    takeHomeAnnualSalary: 0,
  });

  // Calculate function
  const calculateSalary = () => {
    // Convert bonus if it's in percentage
    let bonusAmount = 0;
    if (bonusType === 'percentage') {
      bonusAmount = (ctc * bonus) / 100;
    } else {
      bonusAmount = bonus;
    }

    // Total Annual Salary (Including Bonus)
    const totalAnnualSalary = ctc + bonusAmount;

    // Monthly Salary (including Bonus)
    const monthlySalary = totalAnnualSalary / 12;

    // Calculate Total Monthly Deductions
    const totalMonthlyDeductions =
      monthlyProfessionalTax +
      monthlyEmployerPf +
      monthlyEmployeePf +
      monthlyAdditionalDeduction +
      monthlyAdditionalDeduction2;

    // Calculate Take-Home Monthly Salary
    const takeHomeMonthlySalary = monthlySalary - totalMonthlyDeductions;

    // Calculate Total Annual Deductions and Take-Home Annual Salary
    const totalAnnualDeductions = totalMonthlyDeductions * 12;
    const takeHomeAnnualSalary = takeHomeMonthlySalary * 12;

    // Set the result to state
    setResult({
      totalMonthlyDeductions,
      totalAnnualDeductions,
      takeHomeMonthlySalary,
      takeHomeAnnualSalary,
    });
  };

  return (
    <div className="w-full bg-white">
      <div className="pt-24 px-5 sm:px-0">
        <WidthXL>
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px]">
            Salary Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
          Easily Calculate Your Monthly and Annual Take-Home Salary by Entering Your CTC and Deductions
          </p>
          {/* Input Fields */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-14 my-20 bg-gray-100 rounded-3xl p-4 sm:p-10">
            <div className="w-full sm:w-1/2 pt-5">
              {/* CTC */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Cost to Company (CTC) (₹)
                </label>
                <input
                  type="number"
                  value={ctc}
                  onChange={(e) => setCtc(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter CTC"
                />
              </div>

              {/* Bonus */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Bonus (₹ or %){' '}
                  <select
                    value={bonusType}
                    onChange={(e) => setBonusType(e.target.value)}
                    className="px-3 py-2 w-[120px] text-sm border rounded-md bg-gray-50 ml-4"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="amount">Amount</option>
                  </select>
                </label>
                <input
                  type="number"
                  value={bonus}
                  min={1}
                  step={bonusType === 'percentage' ? '0.1' : '100'}
                  onChange={(e) => setBonus(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Bonus"
                />
              </div>

              {/* Monthly Professional Tax */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Monthly Professional Tax (₹)
                </label>
                <input
                  type="number"
                  value={monthlyProfessionalTax}
                  onChange={(e) =>
                    setMonthlyProfessionalTax(Number(e.target.value))
                  }
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter PT"
                />
              </div>

              {/* Monthly Employer PF */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Monthly Employer PF (₹)
                </label>
                <input
                  type="number"
                  value={monthlyEmployerPf}
                  onChange={(e) => setMonthlyEmployerPf(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Employer PF"
                />
              </div>

              {/* Monthly Employee PF */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Monthly Employee PF (₹)
                </label>
                <input
                  type="number"
                  value={monthlyEmployeePf}
                  onChange={(e) => setMonthlyEmployeePf(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Employee PF"
                />
              </div>

              {/* Monthly Additional Deduction 1 */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Additional Deduction 1 (₹)
                </label>
                <input
                  type="number"
                  value={monthlyAdditionalDeduction}
                  onChange={(e) =>
                    setMonthlyAdditionalDeduction(Number(e.target.value))
                  }
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Additional Deduction 1"
                />
              </div>

              {/* Monthly Additional Deduction 2 */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Additional Deduction 2 (₹)
                </label>
                <input
                  type="number"
                  value={monthlyAdditionalDeduction2}
                  onChange={(e) =>
                    setMonthlyAdditionalDeduction2(Number(e.target.value))
                  }
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Additional Deduction 2"
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateSalary}
                className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
              >
                Calculate Salary
              </button>
            </div>

            {/* Results */}
            <div className="pt-5 w-full sm:w-1/2 mx-auto flex items-center justify-between ">
              <div className="mb-5 flex flex-col items-start gap-14 font-bold font-lato text-base sm:text-[20px] text-gray-700">
                <p className="">Total Monthly Deductions (₹) </p>
                <p className="">Total Annual Deductions (₹) </p>
                <p className="">Take-home Monthly Salary (₹) </p>
                <p className="">Take-home Annual Salary (₹) </p>
              </div>

              <div className="flex flex-col items-center justify-between gap-8 sm:gap-10 font-bold font-lato text-base sm:text-[20px] text-accentOrange-200">
                <p className="w-[100px] sm:w-[200px] py-2 px-2 bg-gray-200 rounded-lg text-end">
                  {result.totalMonthlyDeductions.toLocaleString('en-IN')}
                </p>
                <p className=" w-[100px] sm:w-[200px] py-2 px-2 bg-gray-200 rounded-lg text-end">
                  {' '}
                  {result.totalAnnualDeductions.toLocaleString('en-IN')}
                </p>
                <p className="w-[100px] sm:w-[200px] py-2 px-2 bg-gray-200 rounded-lg text-end">
                  {result.takeHomeMonthlySalary.toLocaleString('en-IN')}
                </p>
                <p className="w-[100px] sm:w-[200px] py-2 px-2 bg-gray-200 rounded-lg text-end">
                  {' '}
                  {result.takeHomeAnnualSalary.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </div>
        </WidthXL>
      </div>
    </div>
  );
}
