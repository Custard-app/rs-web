import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({t1,t2,totalInvestment,totalInterest}) {
  const doughnutData = {
    labels: [t1, t2],
    datasets: [
      {
        data: [parseFloat(totalInvestment), parseFloat(totalInterest)],
        backgroundColor: ['#B6E300', '#004C48'],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position the labels in a row on top
        display: false,
      },
    },
  };

  return (
    <>
      <div className="bg-[#D9D9D9] rounded-[16px] w-full h-[330px] flex flex-col items-center justify-between gap-2 sm:gap-4 p-4 sm:p-8">
        <div className="flex items-center justify-center gap-5 -mt-2">
          <div className="flex items-center justify-center gap-3">
            <div className="w-7 h-2 bg-brightLime rounded-md"></div>
        <p className="font-lato text-xs">{t1}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-7 h-2 bg-primary rounded-md"></div>
            <p className="font-lato text-xs">{t2}</p>
          </div>
        </div>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
    </>
  );
}
