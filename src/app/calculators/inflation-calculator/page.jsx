'use client';
import DoughnutChart from '@/components/chart/DoughnutChart';
import '@/sections/home/calculatorSection/Calculator.css';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

const inflationCalculators = [
  {
    category: 'Inflation Calculators',
    items: [
      {
        title: 'Inflation Cost Calculator',
        description: 'Calculate future cost considering inflation rate over a period.',
        button: 'Calculate',
      },
    ],
  },
];

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
                    value={currentCost}
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
                    
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
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
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
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
          <div className=" mt-20">
            {inflationCalculators.map((section, index) => (
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
              Contact us for personalized Inflation advice
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-xs sm:text-[20px] text-wrap text-center text-gray-100 leading-6">
                Get personalized advice from our expert advisors. Click the
                button below to chat with us directly on WhatsApp and start your
                journey with Rupeestop!
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
