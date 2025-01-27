import bajaj from '@/assets/rupeestop_assets/Fixed Deposits/Images/bajaj.png';
import shriram from '@/assets/rupeestop_assets/Fixed Deposits/Images/shriram.png';
import mahindra from '@/assets/rupeestop_assets/Fixed Deposits/Images/mahindra.png';
import pnb from '@/assets/rupeestop_assets/Fixed Deposits/Images/pnb.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import Link from 'next/link';

const InterestRateSection = () => {
  return (
    <div className="bg-[#FFFBF7] py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className="flex flex-col gap-24">
          {/* SHRIRAM */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={shriram} alt="hdfc" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                Shriram Finance
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Corporate Fixed Deposits of Shriram Finance have been rated
                &#39;AAA&#39; by two leading credit rating agencies (CRISIL and
                ICRA) for the last 23 years.
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Attractive and assured returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>A wide range of
                  deposit products to choose from
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Quick loan against deposit facility
                </li>
              </ul>
              <Link
                href="https://calendly.com/llprupeestop/30min"
                target="_blank"
                className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl"
              >
                Invest Now
              </Link>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Tenure (Months)
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Cumulative ROI (p.a.)
                      </th>
                      <th className="py-2 px-4 text-center">
                        Amount Payable (₹)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        12 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.85%
                      </td>
                      <td className="py-2 px-4">5,392</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        18 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.00%
                      </td>
                      <td className="py-2 px-4">5,612</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        24 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.15%
                      </td>
                      <td className="py-2 px-4">5,849</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        30 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.35%
                      </td>
                      <td className="py-2 px-4">6,110</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        36 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.70%
                      </td>
                      <td className="py-2 px-4">6,423</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        42 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.75%
                      </td>
                      <td className="py-2 px-4">6,706</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        50 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.80%
                      </td>
                      <td className="py-2 px-4">7,107</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        60 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.80%
                      </td>
                      <td className="py-2 px-4">7,625</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic mb-1">Notes:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 font-lato text-[10px] sm:text-sm italic">
                <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                    Additional interest of 0.25% will be paid on renewals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Additional interest of 0.10% will be paid to women
                    depositors.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Minimum amount to start investment is ₹5,000.</li>
                  <li>
                    Additional Interest of 0.50% will be paid to Senior
                    Citizens.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Additional interest of 0.10% will be paid to Female
                    Depositors.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Min amount to start investment Rs 5000.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MAHINDRA */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-20">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={mahindra} alt="hdfc" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                Mahindra & Mahindra Fixed Deposits
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                High Safety Assurance – Rated &#39;IND AAA/Stable&#39; by India
                Ratings & &#39;CRISIL AAA/Stable&#39; by CRISIL
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Secure & Reliable – Enjoy peace of mind with highly rated
                  fixed deposits
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>Attractive
                  Interest Rates – Competitive returns on your investment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Higher Interest for Seniors – Additional 0.25% p.a. interest
                  for senior citizens
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Special Interest for Employees – Additional 0.35% interest for
                  Mahindra Group employees and their relatives on Samruddhi
                  Fixed Deposits
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Flexible Deposit Options – Choose from a variety of tenures to
                  suit your needs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Trusted Institution – Backed by Mahindra Group’s strong
                  financial foundation
                </li>
              </ul>
              <Link
                href="https://calendly.com/llprupeestop/30min"
                target="_blank"
                className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl"
              >
                Invest Now
              </Link>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Tenure (Months)
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Cumulative ROI (p.a.)
                      </th>
                      <th className="py-2 px-4 text-center">
                        Amount Payable (₹)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        12 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.50%
                      </td>
                      <td className="py-2 px-4">5,375</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.75%
                      </td>
                      <td className="py-2 px-4">5,492</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        24 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.80%
                      </td>
                      <td className="py-2 px-4">5,810</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        30 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.90%
                      </td>
                      <td className="py-2 px-4">6,051</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        36 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.10%
                      </td>
                      <td className="py-2 px-4">6,316</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        42 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.05%
                      </td>
                      <td className="py-2 px-4">6,561</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        48 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.05%
                      </td>
                      <td className="py-2 px-4">6,815</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        60 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.10%
                      </td>
                      <td className="py-2 px-4">7,381</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic mb-1">Notes:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 font-lato text-[10px] sm:text-sm italic">
                <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                    Minimum amount to start investment is ₹5,000 for cumulative
                    option.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Additional 0.25% p.a. for Senior Citizens for 12, 24, 36, 48
                    & 60 months tenure.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Additional 0.10% p.a. for Senior Citizens for 15, 30 & 42
                    months tenure.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    0.10% p.a. additional rate on renewal of deposits for Public
                    & Senior Citizens.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Interest rates are subject to change as per the
                    company&#39;s discretion.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PNB */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={pnb} alt="pnb" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                PNB Housing Finance
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                High Safety Assurance – Rated &#39;AA+/Stabl&#39; by CARE &
                &#39;AA+/Positive&#39; by CRISIL
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Secure & Reliable – Enjoy peace of mind with highly rated
                  fixed deposits
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>Attractive
                  Interest Rates – Competitive returns on your investment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Higher Interest for Seniors – Additional 0.30% p.a. interest
                  for senior citizens
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Flexible Deposit Options – Choose from a variety of tenures to
                  suit your needs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Trusted Institution – Backed by PNB Housing’s strong
                  financial foundation
                </li>
              </ul>
              <Link
                href="https://calendly.com/llprupeestop/30min"
                target="_blank"
                className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl"
              >
                Invest Now
              </Link>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Tenure (Months)
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Cumulative ROI (p.a.)
                      </th>
                      <th className="py-2 px-4 text-center">
                        Amount Payable (₹)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        12 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.45%
                      </td>
                      <td className="py-2 px-4">10,745.00</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        24 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.25%
                      </td>
                      <td className="py-2 px-4">11,502.56</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        30 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.00%
                      </td>
                      <td className="py-2 px-4">12,121.58</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        36 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.75%
                      </td>
                      <td className="py-2 px-4">12,509.84</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        48 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.40%
                      </td>
                      <td className="py-2 px-4">13,305.07</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        60 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.60%
                      </td>
                      <td className="py-2 px-4">14,423.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic mb-1">Notes:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 font-lato text-[10px] sm:text-sm italic">
                <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                    Minimum deposit amount: ₹10,000 for cumulative option.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Interest rates are subject to change and applicable as per
                    the rate prevailing on the date of realization of
                    cheque/transfer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Senior Citizen (60 years & above) is eligible for an
                    additional 0.25% interest for tenures 36 months & above from
                    01.04.2024.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Interest rates are subject to change and applicable as per
                    the rate prevailing on the date of realization of
                    cheque/transfer.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BAJAJ */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-20">
            {/* Left Section */}
            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
              <div className="mb-4">
                <Image src={bajaj} alt="bajaj" className="w-28 h-auto" />
              </div>
              <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                Bajaj Finserv
              </h2>
              <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                Rated &#39;AAA&#39; by CRISIL & [ICRA] AAA(STABLE) – Ensuring
                High Safety & Stability
              </p>
              <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Trusted by over 5 lakh customers
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>Fixed Deposits
                  worth more than ₹50,000 crore booked
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Special tenure of 18, 22, 33, 42, and 44 months – Offering
                  higher returns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Up to 0.40% p.a. extra interest for senior citizens
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  Flexible interest payout options – Choose from Monthly,
                  Quarterly, Half-yearly, Annually, or at Maturity
                </li>
              </ul>
              <Link
                href="https://calendly.com/llprupeestop/30min"
                target="_blank"
                className="mt-6 bg-primary text-white px-6 py-2 rounded-3xl"
              >
                Invest Now
              </Link>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[506px] ">
              <h3 className="font-poppins text-[20px sm:text-[24px] font-semibold text-white bg-primary text-center py-4 rounded-t-3xl ">
                Interest Rates
              </h3>
              <div className="overflow-x-auto py-5 sm:py-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-black font-lato font-bold text-base sm:text-xl ">
                      <th className="py-2 px-4 text-center border-r border-gray-300 ">
                        Tenure (Months)
                      </th>
                      <th className="py-2 px-4 text-center border-r border-gray-300">
                        Cumulative ROI (p.a.)
                      </th>
                      <th className="py-2 px-4 text-center">
                        Amount Payable (₹)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        12 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.85%
                      </td>
                      <td className="py-2 px-4">16,177.50</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        15 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        7.95%
                      </td>
                      <td className="py-2 px-4">16,505.15</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        18 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.00%
                      </td>
                      <td className="py-2 px-4">16,835.53</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        22 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.10%
                      </td>
                      <td className="py-2 px-4">17,302.35</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        24 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.40%
                      </td>
                      <td className="py-2 px-4">17,625.84</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        33 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.30%
                      </td>
                      <td className="py-2 px-4">18,677.53</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        36 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.55%
                      </td>
                      <td className="py-2 px-4">19,185.84</td>
                    </tr>
                    <tr className="font-lato font-medium text-sm sm:text-lg text-center">
                      <td className="py-2 px-4 border-r border-gray-300">
                        44 months
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        8.45%
                      </td>
                      <td className="py-2 px-4">20,196.04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                <p className="italic mb-1">Notes:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 font-lato text-[10px] sm:text-sm italic">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Minimum deposit amount: ₹15,000 for cumulative option.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Interest rates are subject to change as per the
                    company&#39;s discretion.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default InterestRateSection;
