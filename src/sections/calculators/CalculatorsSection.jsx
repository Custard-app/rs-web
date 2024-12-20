import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';

const calculators = [
  {
    category: 'Investment Calculators',
    items: [
      {
        title: 'FD Calculator',
        description: 'Find out your Fixed Deposit maturity details with ease.',
        navigation: 'calculators/FDCalculator',
      },
      {
        title: 'NPS Calculator',
        description:
          'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
        navigation: 'calculators/NPSCalculator',
      },
      {
        title: 'RD Calculator',
        description: 'The simplest Recurring Deposit Calculator out there!',
        navigation: 'calculators/rd-calculator',
      },
      {
        title: 'NSC Calculator',
        description:
          'Now learn how much your National Savings Certificate (NSC) will grow for you!',
        navigation: 'calculators/nsc-calculator',
      },
      {
        title: 'MF Calculator',
        description: 'Find out your Mutual Fund maturity amount and benefits.',
        navigation: 'calculators/mutual-fund-calculator',
      },
      {
        title: 'SSY Calculator',
        description:
          'Should you invest in Sukanya Samriddhi Yojana (SSY)? Check now!',
        navigation: 'calculators/sukanya-samriddhi-yojana-calculator',
      },
      {
        title: 'SIP Calculator',
        description: 'How much can you save by starting an SIP? Find out!',
        navigation: 'calculators/sip-calculator',
      },
      {
        title: 'Step Up SIP Calculator',
        description: 'How to plan your goals via SIP? Assess now!',
        navigation: 'calculators/step-up-sip-calculator',
      },

      {
        title: 'APY Calculator',
        description:
          'Calculate the pension benefits under the Atal Pension Yojana (APY) scheme.',
        navigation: 'calculators/apy-calculator',
      },
      {
        title: 'Brokerage Calculator',
        description: 'Estimate the brokerage charges for your stock trades.',
        navigation: 'calculators/brokerage-calculator',
      },
      {
        title: 'CAGR Calculator',
        description:
          'Determine the Compound Annual Growth Rate (CAGR) for your investments.',
        navigation: 'calculators/cagr-calculator',
      },
      {
        title: 'Car Loan EMI Calculator',
        description:
          'Calculate the EMI and interest for your car loan with ease.',
        navigation: 'calculators/car-loan-emi-calculator',
      },
      {
        title: 'Compound Interest Calculator',
        description:
          'Find the compound interest and total value of your investments.',
        navigation: 'calculators/compound-interest-calculator',
      },
      {
        title: 'EMI Calculator',
        description: 'Quickly calculate your monthly EMI for any loan.',
        navigation: 'calculators/emi-calculator',
      },
      {
        title: 'EPF Calculator',
        description:
          'Calculate your Employees’ Provident Fund (EPF) maturity amount.',
        navigation: 'calculators/epf-calculator',
      },
      {
        title: 'Gratuity Calculator',
        description:
          'Compute the gratuity amount payable based on your tenure and salary.',
        navigation: 'calculators/gratuity-calculator',
      },
      {
        title: 'GST Calculator',
        description:
          'Easily calculate the GST amount for your products or services.',
        navigation: 'calculators/gst-calculator',
      },
      {
        title: 'Home Loan EMI Calculator',
        description:
          'Calculate monthly EMIs and total interest for your home loan.',
        navigation: 'calculators/home-loan-emi-calculator',
      },
      {
        title: 'HRA Calculator',
        description: 'Determine your House Rent Allowance (HRA) tax exemption.',
        navigation: 'calculators/hra-calculator',
      },
      {
        title: 'Income Tax Calculator',
        description:
          'Estimate your income tax liability based on current tax slabs.',
        navigation: 'calculators/income-tax-calculator',
      },
      {
        title: 'Inflation Calculator',
        description:
          'Understand how inflation affects the future value of money.',
        navigation: 'calculators/inflation-calculator',
      },
      {
        title: 'Lumpsum Calculator',
        description:
          'Calculate the future value of a one-time lump sum investment.',
        navigation: 'calculators/lumsum-calculator',
      },
      {
        title: 'Post Office MIS Calculator',
        description:
          'Calculate returns from the Post Office Monthly Income Scheme (MIS).',
        navigation: 'calculators/post-office-monthly-income-scheme-calculator',
      },
      {
        title: 'PPF Calculator',
        description:
          'Estimate the maturity value of your Public Provident Fund (PPF) investments.',
        navigation: 'calculators/ppf-calculator',
      },
      {
        title: 'Salary Calculator',
        description:
          'Calculate your net salary after deductions such as tax and PF.',
        navigation: 'calculators/salary-calculator',
      },
      {
        title: 'SCSS Calculator',
        description:
          'Compute returns under the Senior Citizen Savings Scheme (SCSS).',
        navigation: 'calculators/scss-calculator',
      },
      {
        title: 'Simple Interest Calculator',
        description:
          'Quickly compute simple interest for any principal, rate, and time period.',
        navigation: 'calculators/simple-interest-calculator',
      },
      {
        title: 'SWP Calculator',
        description:
          'Plan your systematic withdrawals with ease using the SWP Calculator.',
        navigation: 'calculators/swp-calculator',
      },
      {
        title: 'TDS Calculator',
        description:
          'Estimate the Tax Deducted at Source (TDS) for various incomes.',
        navigation: 'calculators/tds-calculator',
      },
    ],
  },
];

function CalculatorsSection() {
  return (
    <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className="">
          {calculators.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-14">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
                  >
                    <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                    <h3 className="font-lato text-2xl font-bold mb-3 sm:mb-5 text-start">
                      {item.title}
                    </h3>
                    <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                      {item.description}
                    </p>
                    <Link
                      href={item.navigation}
                      className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600"
                    >
                      Calculate
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* TAX AND SAVING CALCULATORS */}
          <div className="mt-20">
            <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
              Tax & Savings Calculators
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              {/* CARD1 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  HRA Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  The most accurate House Rent Allowance (HRA) Calculator out
                  there.
                </p>
                <Link 
                href="calculators/hra-calculator"
                className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </Link>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  FIRE Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  Know exactly how much you need to achieve Financial
                  Independence and Retire Early (FIRE).
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Growth & Returns Calculators */}
          <div className="mt-20">
            <h2 className="font-poppins text-[20px] sm:text-[32px] font-semibold mb-4">
              Growth & Returns Calculators
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              {/* CARD1 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  IRR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Calculate Internal Rate of Return (IRR) with multiple
                  cashflows using the XIRR method.
                </p>
                <button className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#D2D1D1] rounded-full mb-8"></div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  CAGR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Figure out the Compound Annual Growth Rate (CAGR) in a flash.
                </p>
                <Link 
                href="calculators/cagr-calculator"
                className="mx-auto sm:mx-0 font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default CalculatorsSection;
