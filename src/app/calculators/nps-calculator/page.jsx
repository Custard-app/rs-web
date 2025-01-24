'use client';
import npsbg from '@/assets/images/npsbg.png';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';

export default function NPSCalculator() {
  const [currentAge, setCurrentAge] = useState(18);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [totalCorpus, setTotalCorpus] = useState(0);
  const [monthlyPension, setMonthlyPension] = useState(0);

  const calculatePension = () => {
    const ageDiff = retirementAge - currentAge;
    const totalMonths = ageDiff * 12;
    const monthlyRate = expectedReturnRate / 100 / 12;

    // Future Value of Annuity formula
    const fv =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const corpusForPension = Math.ceil(fv * 0.4); // Assuming 40% of the corpus is used for pension
    const pension = Math.ceil((corpusForPension * (7 / 100)) / 12); // 7% annual annuity rate divided into monthly


    setTotalCorpus(corpusForPension);
    setMonthlyPension(corpusForPension);
  };

  useEffect(() => {
    calculatePension();
  },[]);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div
        className="py-14 px-5 sm:px-0 relative bg-cover bg-center bg-white"
        // style={{ backgroundImage: `url(${npsbg.src})` }}
      >
        <WidthXL>
          {/* HEROSECTION START */}
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
            NPS Calculator
          </h1>
          <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
            Use our NPS Calculator to determine your total corpus at retirement
            and the monthly pension you can expect.
          </p>
          <div className="bg-white p-[10px] sm:p-10 rounded-[20px] mt-10">
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 ">
              Calculate your National Pension System (NPS) Amount and Pension
              Easily
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Current Age
                  </label>
                  <input
                    type="number"
                    value={currentAge > 0 ? currentAge : ''}
                    min="18"
                    max="60"
                    onChange={(e) => setCurrentAge(Number(e.target.value) > 60 ? 60 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Retirement Age
                  </label>
                  <input
                    type="number"
                    value={retirementAge > 0 ? retirementAge : '' }
                    min="18"
                    max="60"
                    onChange={(e) => setRetirementAge(Number(e.target.value) > 60 ? 60 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Monthly Contribution
                  </label>
                  <input
                    type="number"
                    min="500"
                    max="150000"
                    value={monthlyContribution > 0 ? monthlyContribution : ''}
                    onChange={(e) =>
                      setMonthlyContribution(Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Expected Return Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="8"
                    max="15"
                    value={expectedReturnRate > 0 ? expectedReturnRate : ''}
                    onChange={(e) =>
                      setExpectedReturnRate(Number(e.target.value) > 15 ? 15 : Number(e.target.value))
                    }
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculatePension}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Pension
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
              <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[313px] flex items-center justify-center">
                </div>
                <div className="w-full flex items-center justify-evenly gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Total Corpus at Retirement
                    </p>
                    <p
                      className={`font-lato font-semibold ${
                        totalCorpus.length > 10
                          ? 'text-[18px] sm:text-[28px]'
                          : 'text-[28px] sm:text-[38px]'
                      } text-accentOrange-200 text-wrap text-center`}
                    >
                      ₹{Number(totalCorpus).toLocaleString( 'en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 text-center">
                      Monthly Pension Amount
                    </p>
                    <p
                      className={`font-lato font-semibold ${
                        monthlyPension.length > 6
                          ? 'text-[18px] sm:text-[28px]'
                          : 'text-[28px] sm:text-[38px]'
                      } text-accentOrange-200 text-wrap text-center`}
                    >
                      ₹{Number(monthlyPension).toLocaleString( 'en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}

          <AllOtherCalculators/>
        </WidthXL>
        {/* Card */}
        <ContactCard value="NPS" />
        
      </div>
    </>
  );
}
