import card from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/transparency.svg';
import cart from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/liquidity.svg';
import flex from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/flexibility.svg';
import man from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/professional management.svg';
import money from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/diversification.svg';
import tax from '@/assets/rupeestop_assets/Mutual Funds/Icons and Vectors/tax efficiency.svg';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';

function AdvntMfSection() {
  return (
    <div className="bg-[#E3FFFE] py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-20">
          <div className="w-full sm:w-1/3">
            <h1 className="font-poppins font-semibold text-3xl sm:text-5xl text-center">
              Advantages of Mutual Funds
            </h1>
          </div>
          <div className="w-full sm:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={man}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Professional Management
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Managed by experts to maximize returns.
              </p>
            </div>
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={money}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Diversification
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Investments spread across various assets, reducing risk.
              </p>
            </div>
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={card}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Transparency
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Regular updates and reports on fund performance.
              </p>
            </div>
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={flex}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Flexibility
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Options to invest and withdraw funds as per your convenience.
              </p>
            </div>
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={tax}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Tax Efficiency
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Better tax benefits compared to traditional saving options.
              </p>
            </div>
            {/* *** */}
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src={cart}
                alt="professional management"
                className="w-[75px] h-[75px] mb-4"
              />
              <p className="font-lato font-semibold text-[20px] text-gray-800 mb-[10px] text-center sm:text-start">
                Liquidity
              </p>
              <p className="font-lato text-base text-gray-600 text-center sm:text-start">
                Easy to buy and sell mutual fund units.
              </p>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default AdvntMfSection;
