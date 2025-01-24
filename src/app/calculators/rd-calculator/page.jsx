'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';

export default function RDCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [rate, setRate] = useState(7.5); // Annual interest rate in percentage
  const [tenure, setTenure] = useState(5); // Tenure in years
  const [maturityAmount, setMaturityAmount] = useState(364902);
  const [totalInvestment, setTotalInvestment] = useState(300000);
  const [totalInterest, setTotalInterest] = useState(64902);
  const [investmentPercentage, setInvestmentPercentage] = useState(0);
  const [interestPercentage, setInterestPercentage] = useState(0);

  const calculateMaturity = () => {
    const annualRate = rate / 100; // Convert annual rate to decimal
    const monthlyRate = annualRate / 12; // Monthly interest rate
    const totalMonths = tenure * 12; // Total months

    // Maturity Calculation
    let maturityAmount = 0;
    for (let i = 1; i <= totalMonths; i++) {
      // Each month's investment earns interest for a different number of months
      maturityAmount += monthlyInvestment * Math.pow(1 + monthlyRate, totalMonths - i + 1);
    }

    const totalInvestment = monthlyInvestment * totalMonths; // Total deposits
    const totalInterest = maturityAmount - totalInvestment; // Total interest earned

    // Calculate percentages for the doughnut chart
    const investmentPercentage = Math.ceil((totalInvestment / maturityAmount) * 100);
    const interestPercentage = 100 - investmentPercentage;

  

    // Update states
    setMaturityAmount(Math.ceil(maturityAmount));
    setTotalInvestment(totalInvestment);
    setTotalInterest(Math.ceil(totalInterest));
    setInvestmentPercentage(investmentPercentage);
    setInterestPercentage(interestPercentage);
  };


  useEffect(()=>{
    calculateMaturity();
  },[])

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              RD Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily calculate the maturity amount of your Recurring Deposit with our RD
              Calculator. Just enter your monthly deposit, interest rate, and tenure to get
              instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out your Recurring Deposit (RD) Maturity Details with Ease
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Monthly Investment
                  </label>
                  <input
                    type="number" 
                    value={monthlyInvestment > 0 ? monthlyInvestment : ""}
                    step="500"
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={rate > 0 ? rate : ""}
                    step="0.1"
                    min="1"
                    max="15"
                    onChange={(e) => setRate(parseFloat(e.target.value) > 15 ? 15 : parseFloat(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Tenure (years)
                  </label>
                  <input
                    type="number"
                    value={tenure > 0 ? tenure : ""}
                    min="1"
                    max="10"
                    onChange={(e) => setTenure(Number(e.target.value) > 10 ? 10 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateMaturity}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Maturity Amount
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                
                <DoughnutChart 
                t1="Total Investment"
                t2="Total Interest"
                totalInvestment={totalInvestment}
                totalInterest={totalInterest}
                />


                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Maturity Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{Number(maturityAmount).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Invested Amount
                    </p>
                    <p className="font-lato font-semibold text-[16px] sm:text-[25px] text-accentOrange-200">
                      ₹{Number(totalInvestment).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center ">
                      Total Interest Earned
                    </p>
                    <p className="font-lato font-semibold text-[16px]  sm:text-[25px] text-accentOrange-200">
                      ₹{Number(totalInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AllOtherCalculators/>
        </WidthXL>
      </div>
      <ContactCard value="Recuring deposite"/>
    </>
  );
}
