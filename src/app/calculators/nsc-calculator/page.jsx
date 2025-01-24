'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function NSCCalculator() {
  const [principal, setPrincipal] = useState(20000);
  const [rate, setRate] = useState(6); // Typical NSC rate
  const [tenure, setTenure] = useState(5); // Standard NSC tenure
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [interestPercentage, setInterestPercentage] = useState(0);
  const [principalPercentage, setPrincipalPercentage] = useState(0);

  const calculateMaturity = () => {
    // NSC maturity calculation assumes yearly compounding
    const ratePerPeriod = rate / 100; // Convert rate to a decimal
    const compoundInterestFactor = Math.pow(1 + ratePerPeriod, tenure);
    const totalAmount = Math.ceil(principal * compoundInterestFactor);
    const totalInterest = Math.ceil(totalAmount - principal);

    const interestPercentage = Math.ceil((totalInterest / totalAmount) * 100);
    const principalPercentage = 100 - interestPercentage;

    setMaturityAmount(totalAmount);
    setTotalInterest(totalInterest);
    setInterestPercentage(interestPercentage);
    setPrincipalPercentage(principalPercentage);
  };


  useEffect(() => {
    calculateMaturity();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              NSC Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Calculate the maturity amount of your National Savings Certificate
              (NSC) investment. Enter the principal amount, interest rate, and
              tenure to get instant results.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out your National Savings Certificate (NSC) Maturity Details
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Principal Amount
                  </label>
                  <input
                    type="number"
                    value={principal > 0 ? principal : ''} 
                    min="1000"
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={rate > 0 ? rate : ''}
                    step="0.1"
                    min="1"
                    max="10"
                    onChange={(e) => setRate(Number(e.target.value) > 10 ? 10 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Tenure (years)
                  </label>
                  <input
                    type="number"
                    value={tenure}  
                    readOnly
                    // onChange={(e) => setTenure(Number(e.target.value))}
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

              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <DoughnutChart 
                t1="Total Investment"
                t2="Total Return"
                totalInvestment={principal}
                totalInterest={totalInterest}
                />
                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">
                      Maturity Amount
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(maturityAmount).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 ">
                      Total Interest Earned
                    </p>
                    <p className="font-lato font-semibold text-[28px]  sm:text-[38px] text-accentOrange-200">
                      ₹{Number(totalInterest).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AllOtherCalculators />
        </WidthXL>
      </div>
      <ContactCard value="NSC" />
    </>
  );
}
