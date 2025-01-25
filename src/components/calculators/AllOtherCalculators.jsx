import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';

const calculators = [
  {
    category: 'Investment Calculators',
    items: [
      {
        title: 'FD Calculator',
        description: 'Find out your Fixed Deposit maturity details with ease.',
        navigation: 'fd-calculator',
        filter: ['Secure', 'Steady'],
        plan: 'Best for Secure Savings',
      },
      {
        title: 'NPS Calculator',
        description:
          'Calculate your National Pension Scheme (NPS) amount and tax-saving benefits.',
        navigation: 'nps-calculator',
        filter: ['Pension', 'Retirement'],
        plan: 'Best for Retirement Planning',
      },
      {
        title: 'RD Calculator',
        description: 'The simplest Recurring Deposit Calculator out there!',
        navigation: 'rd-calculator',
        filter: ['Growth', 'Earn'],
        plan: 'Best for Consistent Savings',
      },
      {
        title: 'NSC Calculator',
        description:
          'Now learn how much your National Savings Certificate (NSC) will grow for you!',
        navigation: 'nsc-calculator',
        filter: ['Savings', 'Returns'],
        plan: 'Best for Guaranteed Returns',
      },
      {
        title: 'MF Calculator',
        description: 'Find out your Mutual Fund maturity amount and benefits.',
        navigation: 'mutual-fund-calculator',
        filter: ['SIP', 'Wealth'],
        plan: 'Best for Wealth Creation',
      },
      {
        title: 'SSY Calculator',
        description:
          'Should you invest in Sukanya Samriddhi Yojana (SSY)? Check now!',
        navigation: 'sukanya-samriddhi-yojana-calculator',
        filter: ['Child', 'Education'],
        plan: "Best for Your Daughter's Future",
      },
      {
        title: 'SIP Calculator',
        description: 'How much can you save by starting an SIP? Find out!',
        navigation: 'sip-calculator',
        filter: ['Invest', 'Grow'],
        plan: 'Best for Systematic Investing',
      },
      {
        title: 'Step Up SIP Calculator',
        description: 'How to plan your goals via SIP? Assess now!',
        navigation: 'step-up-sip-calculator',
        filter: ['Goal', 'Flexible'],
        plan: 'Best for Gradual Investments',
      },
      {
        title: 'APY Calculator',
        description:
          'Calculate the pension benefits under the Atal Pension Yojana (APY) scheme.',
        navigation: 'apy-calculator',
        filter: ['Pension', 'Security'],
        plan: 'Best for Low-Cost Pension Planning',
      },
      {
        title: 'Brokerage Calculator',
        description: 'Estimate the brokerage charges for your stock trades.',
        navigation: 'brokerage-calculator',
        filter: ['Trade', 'Cost'],
        plan: 'Best for Stock Market Insights',
      },
      {
        title: 'CAGR Calculator',
        description:
          'Determine the Compound Annual Growth Rate (CAGR) for your investments.',
        navigation: 'cagr-calculator',
        filter: ['Growth', 'Return'],
        plan: 'Best for Performance Tracking',
      },
      {
        title: 'Car Loan EMI Calculator',
        description:
          'Calculate the EMI and interest for your car loan with ease.',
        navigation: 'car-loan-emi-calculator',
        filter: ['Loan', 'Car'],
        plan: 'Best for Car Loan Planning',
      },
      {
        title: 'Compound Interest Calculator',
        description:
          'Find the compound interest and total value of your investments.',
        navigation: 'compound-interest-calculator',
        filter: ['Compound', 'Wealth'],
        plan: 'Best for Advanced Savings',
      },
      {
        title: 'EMI Calculator',
        description: 'Quickly calculate your monthly EMI for any loan.',
        navigation: 'emi-calculator',
        filter: ['Loan', 'Repayment'],
        plan: 'Best for EMI Planning',
      },
      {
        title: 'EPF Calculator',
        description:
          'Calculate your Employees’ Provident Fund (EPF) maturity amount.',
        navigation: 'epf-calculator',
        filter: ['Retirement', 'Savings'],
        plan: 'Best for Employee Benefits',
      },
      {
        title: 'Gratuity Calculator',
        description:
          'Compute the gratuity amount payable based on your tenure and salary.',
        navigation: 'gratuity-calculator',
        filter: ['Tenure', 'Benefits'],
        plan: 'Best for Gratuity Planning',
      },
      {
        title: 'GST Calculator',
        description:
          'Easily calculate the GST amount for your products or services.',
        navigation: 'gst-calculator',
        filter: ['Tax', 'Services'],
        plan: 'Best for Tax Management',
      },
      {
        title: 'Home Loan EMI Calculator',
        description:
          'Calculate monthly EMIs and total interest for your home loan.',
        navigation: 'home-loan-emi-calculator',
        filter: ['Loan', 'Home'],
        plan: 'Best for Home Buyers',
      },
      {
        title: 'HRA Calculator',
        description: 'Determine your House Rent Allowance (HRA) tax exemption.',
        navigation: 'hra-calculator',
        filter: ['Rent', 'Tax'],
        plan: 'Best for HRA Exemptions',
      },
      {
        title: 'Income Tax Calculator',
        description:
          'Estimate your income tax liability based on current tax slabs.',
        navigation: 'income-tax-calculator',
        filter: ['Income', 'Tax'],
        plan: 'Best for Tax Planning',
      },
      {
        title: 'Inflation Calculator',
        description:
          'Understand how inflation affects the future value of money.',
        navigation: 'inflation-calculator',
        filter: ['Money', 'Value'],
        plan: 'Best for Inflation Tracking',
      },
      {
        title: 'Lumpsum Calculator',
        description:
          'Calculate the future value of a one-time lump sum investment.',
        navigation: 'lumpsum-calculator',
        filter: ['Investment', 'Growth'],
        plan: 'Best for One-Time Investors',
      },
      {
        title: 'Post Office MIS Calculator',
        description:
          'Calculate returns from the Post Office Monthly Income Scheme (MIS).',
        navigation: 'post-office-monthly-income-scheme-calculator',
        filter: ['Secure', 'Monthly'],
        plan: 'Best for Reliable Income',
      },
      {
        title: 'PPF Calculator',
        description:
          'Estimate the maturity value of your Public Provident Fund (PPF) investments.',
        navigation: 'ppf-calculator',
        filter: ['Savings', 'Secure'],
        plan: 'Best for Long-Term Savings',
      },
      {
        title: 'Salary Calculator',
        description:
          'Calculate your net salary after deductions such as tax and PF.',
        navigation: 'salary-calculator',
        filter: ['Income', 'Deductions'],
        plan: 'Best for Salary Insights',
      },
      {
        title: 'SCSS Calculator',
        description:
          'Compute returns under the Senior Citizen Savings Scheme (SCSS).',
        navigation: 'scss-calculator',
        filter: ['Retirement', 'Secure'],
        plan: 'Best for Senior Citizens',
      },
      {
        title: 'Simple Interest Calculator',
        description:
          'Quickly compute simple interest for any principal, rate, and time period.',
        navigation: 'simple-interest-calculator',
        filter: ['Interest', 'Easy'],
        plan: 'Best for Basic Calculations',
      },
      {
        title: 'SWP Calculator',
        description:
          'Plan your systematic withdrawals with ease using the SWP Calculator.',
        navigation: 'swp-calculator',
        filter: ['Withdrawals', 'Plan'],
        plan: 'Best for Planned Withdrawals',
      },
      {
        title: 'TDS Calculator',
        description:
          'Estimate the Tax Deducted at Source (TDS) for various incomes.',
        navigation: 'tds-calculator',
        filter: ['Tax', 'Deduction'],
        plan: 'Best for TDS Estimation',
      },
    ],
  },
];

function AllOtherCalculators() {
  return (
    <div className="bg-white py-14 sm:py-24">
      <WidthXL>
        <h2 className="w-full text-start font-poppins text-[20px] sm:text-[32px] font-semibold mb-6 ">
          Other Popular Calculators
        </h2>
        <div className="">
          {calculators.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-10">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border bg-white shadow-md rounded-[12px] p-3 sm:p-5 flex flex-col items-start justify-between text-center"
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
        </div>
      </WidthXL>
    </div>
  );
}

export default AllOtherCalculators;
