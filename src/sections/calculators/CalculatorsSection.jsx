import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';

const calculators = [
  {
    category: 'Investment Calculators',
    items: [
      {
        title: 'FD Calculator',
        description: 'Find out your Fixed Deposit maturity details with ease.',
        navigation: 'calculators/fd-calculator',
        filter: ['Secure', 'Steady'],
        plan: 'Best for Secure Savings',
      },
      {
        title: 'NPS Calculator',
        description:
          'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
        navigation: 'calculators/nps-calculator',
        filter: ['Pension', 'Retirement'],
        plan: 'Best for Retirement Planning',
      },
      {
        title: 'RD Calculator',
        description: 'The simplest Recurring Deposit Calculator out there!',
        navigation: 'calculators/rd-calculator',
        filter: ['Growth', 'Earn'],
        plan: 'Best for Consistent Savings',
      },
      {
        title: 'NSC Calculator',
        description:
          'Now learn how much your National Savings Certificate (NSC) will grow for you!',
        navigation: 'calculators/nsc-calculator',
        filter: ['Savings', 'Returns'],
        plan: 'Best for Guaranteed Returns',
      },
      {
        title: 'MF Calculator',
        description: 'Find out your Mutual Fund maturity amount and benefits.',
        navigation: 'calculators/mutual-fund-calculator',
        filter: ['SIP', 'Wealth'],
        plan: 'Best for Wealth Creation',
      },
      {
        title: 'SSY Calculator',
        description:
          'Should you invest in Sukanya Samriddhi Yojana (SSY)? Check now!',
        navigation: 'calculators/sukanya-samriddhi-yojana-calculator',
        filter: ['Child', 'Education'],
        plan: "Best for Your Daughter's Future",
      },
      {
        title: 'SIP Calculator',
        description: 'How much can you save by starting an SIP? Find out!',
        navigation: 'calculators/sip-calculator',
        filter: ['Invest', 'Grow'],
        plan: 'Best for Systematic Investing',
      },
      {
        title: 'Step Up SIP Calculator',
        description: 'How to plan your goals via SIP? Assess now!',
        navigation: 'calculators/step-up-sip-calculator',
        filter: ['Goal', 'Flexible'],
        plan: 'Best for Gradual Investments',
      },
      {
        title: 'APY Calculator',
        description:
          'Calculate the pension benefits under the Atal Pension Yojana (APY) scheme.',
        navigation: 'calculators/apy-calculator',
        filter: ['Pension', 'Security'],
        plan: 'Best for Low-Cost Pension Planning',
      },
      {
        title: 'Brokerage Calculator',
        description: 'Estimate the brokerage charges for your stock trades.',
        navigation: 'calculators/brokerage-calculator',
        filter: ['Trade', 'Cost'],
        plan: 'Best for Stock Market Insights',
      },
      {
        title: 'CAGR Calculator',
        description:
          'Determine the Compound Annual Growth Rate (CAGR) for your investments.',
        navigation: 'calculators/cagr-calculator',
        filter: ['Growth', 'Return'],
        plan: 'Best for Performance Tracking',
      },
      {
        title: 'Car Loan EMI Calculator',
        description:
          'Calculate the EMI and interest for your car loan with ease.',
        navigation: 'calculators/car-loan-emi-calculator',
        filter: ['Loan', 'Car'],
        plan: 'Best for Car Loan Planning',
      },
      {
        title: 'Compound Interest Calculator',
        description:
          'Find the compound interest and total value of your investments.',
        navigation: 'calculators/compound-interest-calculator',
        filter: ['Compound', 'Wealth'],
        plan: 'Best for Advanced Savings',
      },
      {
        title: 'EMI Calculator',
        description: 'Quickly calculate your monthly EMI for any loan.',
        navigation: 'calculators/emi-calculator',
        filter: ['Loan', 'Repayment'],
        plan: 'Best for EMI Planning',
      },
      {
        title: 'EPF Calculator',
        description:
          'Calculate your Employees’ Provident Fund (EPF) maturity amount.',
        navigation: 'calculators/epf-calculator',
        filter: ['Retirement', 'Savings'],
        plan: 'Best for Employee Benefits',
      },
      {
        title: 'Gratuity Calculator',
        description:
          'Compute the gratuity amount payable based on your tenure and salary.',
        navigation: 'calculators/gratuity-calculator',
        filter: ['Tenure', 'Benefits'],
        plan: 'Best for Gratuity Planning',
      },
      {
        title: 'GST Calculator',
        description:
          'Easily calculate the GST amount for your products or services.',
        navigation: 'calculators/gst-calculator',
        filter: ['Tax', 'Services'],
        plan: 'Best for Tax Management',
      },
      {
        title: 'Home Loan EMI Calculator',
        description:
          'Calculate monthly EMIs and total interest for your home loan.',
        navigation: 'calculators/home-loan-emi-calculator',
        filter: ['Loan', 'Home'],
        plan: 'Best for Home Buyers',
      },
      {
        title: 'HRA Calculator',
        description: 'Determine your House Rent Allowance (HRA) tax exemption.',
        navigation: 'calculators/hra-calculator',
        filter: ['Rent', 'Tax'],
        plan: 'Best for HRA Exemptions',
      },
      {
        title: 'Income Tax Calculator',
        description:
          'Estimate your income tax liability based on current tax slabs.',
        navigation: 'calculators/income-tax-calculator',
        filter: ['Income', 'Tax'],
        plan: 'Best for Tax Planning',
      },
      {
        title: 'Inflation Calculator',
        description:
          'Understand how inflation affects the future value of money.',
        navigation: 'calculators/inflation-calculator',
        filter: ['Money', 'Value'],
        plan: 'Best for Inflation Tracking',
      },
      {
        title: 'Lumpsum Calculator',
        description:
          'Calculate the future value of a one-time lump sum investment.',
        navigation: 'calculators/lumpsum-calculator',
        filter: ['Investment', 'Growth'],
        plan: 'Best for One-Time Investors',
      },
      {
        title: 'Post Office MIS Calculator',
        description:
          'Calculate returns from the Post Office Monthly Income Scheme (MIS).',
        navigation: 'calculators/post-office-monthly-income-scheme-calculator',
        filter: ['Secure', 'Monthly'],
        plan: 'Best for Reliable Income',
      },
      {
        title: 'PPF Calculator',
        description:
          'Estimate the maturity value of your Public Provident Fund (PPF) investments.',
        navigation: 'calculators/ppf-calculator',
        filter: ['Savings', 'Secure'],
        plan: 'Best for Long-Term Savings',
      },
      {
        title: 'Salary Calculator',
        description:
          'Calculate your net salary after deductions such as tax and PF.',
        navigation: 'calculators/salary-calculator',
        filter: ['Income', 'Deductions'],
        plan: 'Best for Salary Insights',
      },
      {
        title: 'SCSS Calculator',
        description:
          'Compute returns under the Senior Citizen Savings Scheme (SCSS).',
        navigation: 'calculators/scss-calculator',
        filter: ['Retirement', 'Secure'],
        plan: 'Best for Senior Citizens',
      },
      {
        title: 'Simple Interest Calculator',
        description:
          'Quickly compute simple interest for any principal, rate, and time period.',
        navigation: 'calculators/simple-interest-calculator',
        filter: ['Interest', 'Easy'],
        plan: 'Best for Basic Calculations',
      },
      {
        title: 'SWP Calculator',
        description:
          'Plan your systematic withdrawals with ease using the SWP Calculator.',
        navigation: 'calculators/swp-calculator',
        filter: ['Withdrawals', 'Plan'],
        plan: 'Best for Planned Withdrawals',
      },
      {
        title: 'TDS Calculator',
        description:
          'Estimate the Tax Deducted at Source (TDS) for various incomes.',
        navigation: 'calculators/tds-calculator',
        filter: ['Tax', 'Deduction'],
        plan: 'Best for TDS Estimation',
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-10">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
                  >
                    <p className="w-full text-primary font-lato font-medium text-xs sm:text-sm text-end mb-2">
                      {item.plan}
                    </p>
                    <div className="flex items-center mb-3">
                      {item.filter.map((tag, i) => (
                        <span
                          key={i}
                          className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-lato text-2xl font-bold mb-3 sm:mb-5 text-start">
                      {item.title}
                    </h3>
                    <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                      {item.description}
                    </p>
                    <Link
                      href={item.navigation}
                      className="font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600"
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
                <p className="w-full text-primary font-lato font-medium text-xs sm:text-sm text-end mb-2">
                  Best for Tax Exemption
                </p>
                <div className="flex items-center mb-3">
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Exemption
                  </span>
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Tax
                  </span>
                </div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  HRA Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  The most accurate House Rent Allowance (HRA) Calculator out
                  there.
                </p>
                <Link
                  href="calculators/hra-calculator"
                  className="font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600"
                >
                  Calculate
                </Link>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <p className="w-full text-primary font-lato font-medium text-xs sm:text-sm text-end mb-2">
                  Best for Early Retirement
                </p>
                <div className="flex items-center mb-3">
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Freedom
                  </span>
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Savings
                  </span>
                </div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  FIRE Calculator
                </h3>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 mb-5 text-start">
                  Know exactly how much you need to achieve Financial
                  Independence and Retire Early (FIRE).
                </p>
                <button className="font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
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
                <p className="w-full text-primary font-lato font-medium text-xs sm:text-sm text-end mb-2">
                  Best for Investment Analysis
                </p>
                <div className="flex items-center mb-3">
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Profit
                  </span>
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Cashflow
                  </span>
                </div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  IRR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Calculate Internal Rate of Return (IRR) with multiple
                  cashflows using the XIRR method.
                </p>
                <button className="font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600">
                  Calculate
                </button>
              </div>

              {/* CARD2 */}
              <div className="w-full bg-[#FFFBF7] shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center">
                <p className="w-full text-primary font-lato font-medium text-xs sm:text-sm text-end mb-2">
                  Best for Tracking Growth
                </p>
                <div className="flex items-center mb-3">
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Growth
                  </span>
                  <span className="border-accentOrange-200 border-[1.5px] text-accentOrange-200 text-xs sm:text-[13px] px-2 py-1 rounded-full mr-2">
                    Returns
                  </span>
                </div>
                <h3 className="font-lato text-2xl font-bold mb-5 text-start">
                  CAGR Calculator
                </h3>
                <p className="font-lato font-medium text-lg text-gray-600 mb-5 text-start">
                  Figure out the Compound Annual Growth Rate (CAGR) in a flash.
                </p>
                <Link
                  href="calculators/cagr-calculator"
                  className="font-poppins font-semibold text-sm sm:text-lg px-4 py-2 bg-[#E16122] text-white rounded-3xl hover:bg-orange-600"
                >
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
