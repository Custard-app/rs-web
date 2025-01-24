'use client';
import AllOtherCalculators from '@/components/calculators/AllOtherCalculators';
import DoughnutChart from '@/components/chart/DoughnutChart';
import ContactCard from '@/components/contactCard/ContactCard';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useState } from 'react';


export default function InflationCalculator() {
  const [currentCost, setCurrentCost] = useState(10000);
  const [inflationRate, setInflationRate] = useState(6);
  const [timePeriod, setTimePeriod] = useState(5);
  const [futureCost, setFutureCost] = useState(13382);
  const [totalInflation, setTotalInflation] = useState(3382);
  const [inflationPercentage, setInflationPercentage] = useState(0);
  const [costPercentage, setCostPercentage] = useState(55);

  const calculateInflation = () => {
    const n = 1; // Assuming yearly compounding (inflation annually)
    const ratePerPeriod = inflationRate / 100; // Convert annual inflation rate to a decimal
    const totalPeriods = timePeriod; // Total number of years (inflation occurs yearly)

    const inflationFactor = Math.pow(1 + ratePerPeriod, totalPeriods);
    const futureCost = Math.ceil(currentCost * inflationFactor); // Future cost considering inflation
    const totalInflation = Math.ceil(futureCost - currentCost); // Total inflation amount

    // Calculate percentages for visualization
    const inflationPercentage = Math.ceil((totalInflation / futureCost) * 100);
    const costPercentage = 100 - inflationPercentage;

    // Update state
    setFutureCost(futureCost);
    setTotalInflation(totalInflation);
    setInflationPercentage(inflationPercentage);
    setCostPercentage(costPercentage);
  };

  useEffect(() => {
    calculateInflation();
  }, []);

  return (
    <>
      <div className="w-full h-[73px] sm:h-[80px] bg-primary"></div>
      <div className="pt-14 px-5 sm:px-0 bg-white relative">
        <WidthXL>
          {/* HEROSECTION START */}
          <div>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[42px] text-start">
              Inflation Calculator
            </h1>
            <p className="font-lato font-medium text-sm sm:text-[20px] text-start">
              Easily calculate the future cost of your expenses considering inflation over time.
            </p>
            <h2 className="text-lg sm:text-[28px] font-lato font-bold text-gray-800 text-center py-10 sm:py-16">
              Find out how inflation will affect your future costs
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between p-8 gap-5 sm:gap-10">
              {/* Left Side - Inputs */}
              <div className="w-full sm:w-1/2 flex flex-col gap-5 sm:gap-8">
                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Current Cost
                  </label>
                  <input
                    type="number"
                    min="1000"
                    value={currentCost > 0 ? currentCost : ''} 
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Inflation Rate (% p.a)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="50"
                    value={inflationRate > 0 ? inflationRate : ''}
                    onChange={(e) => setInflationRate(Number(e.target.value) > 50 ? 50 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                    Time Period (years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={timePeriod > 0 ? timePeriod : ''}
                    onChange={(e) => setTimePeriod(Number(e.target.value) > 30 ? 30 : Number(e.target.value))}
                    className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  onClick={calculateInflation}
                  className="bg-primary font-lato font-bold text-base text-white px-5 py-[10px] rounded-3xl block mx-auto"
                >
                  Calculate Future Cost
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-6 sm:mt-0 gap-5">
                {/* Doughnut Chart */}
                <DoughnutChart
                  t1="Current Cost"
                  t2="Total Inflation"
                  totalInvestment={currentCost}
                  totalInterest={totalInflation}
                />

                <div className="w-full flex items-center justify-evenly">
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600">
                      Future Cost (after inflation)
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(futureCost).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-base sm:text-lg text-gray-600 ">
                      Total Inflation
                    </p>
                    <p className="font-lato font-semibold text-[28px] sm:text-[38px] text-accentOrange-200">
                      ₹{Number(totalInflation).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEROSECTION END */}

          {/* CAROUSEL START */}
          <AllOtherCalculators/>
          {/* CAROUSEL END */}
        </WidthXL>
      </div>
      {/* Card */}
      <ContactCard value="Inflation"/>
    </>
  );
}
