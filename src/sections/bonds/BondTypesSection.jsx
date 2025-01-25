'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import { useState } from 'react';
import { GiVikingLonghouse } from 'react-icons/gi';
import { LuBuilding2 } from 'react-icons/lu';
import { TbMoneybag } from 'react-icons/tb';

import Calendar from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/treasury bills.png';
import Frame from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/government securities.svg';
import hhh from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/state development tools.svg';
import Taxes from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/rbi bonds.png';

import Briefing from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/comercial papers.png';
import Flash from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/zero coupon bonds.png';
import Invesstment from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/non convertible.png';
import Team from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/public sector.png';

import Dollar from '@/assets/rupeestop_assets/Bonds/Icons and Vectors/oreference shares.png';

const bondData = {
  governmentSecurities: [
    {
      id: 1,
      title: 'Treasury Bills',
      description:
        'Short-term government securities with maturities of less than a year. They are issued at a discount to face value and do not pay periodic interest.',
      benefits: [
        'Risk-free investment backed by the government',
        'Highly liquid',
        'Sold at a discount, mature at face value',
      ],
      icon: Calendar,
    },
    {
      id: 2,
      title: 'RBI Bonds',
      description:
        'Bonds issued by the Reserve Bank of India, offering a fixed rate of interest with a tenure of 6 years.',
      benefits: [
        'Safe and secure investment',
        'Fixed interest rate',
        'Suitable for long-term investment',
      ],
      icon: Taxes,
    },
    {
      id: 3,
      title: 'Government Securites',
      description:
        'Long-term securities issued by the central or state governments. These include bonds with maturities ranging from 5 to 30 years.',
      benefits: [
        ' Risk-free returns',
        'Periodic interest payments',
        'Suitable for long-term investment',
      ],
      icon: Frame,
    },
    {
      id: 4,
      title: 'State Development Tools',
      description:
        'Debt instruments issued by state governments to meet their financial requirements. SDLs have similar characteristics to government securities.',
      benefits: [
        'Backed by state government',
        'Regular interest payments',
        'Suitable for long-term investments',
      ],
      icon: hhh,
    },
  ],
  corporateDebtInstruments: [
    {
      id: 1,
      title: 'Commercial Papers',
      description:
        'Short-term debt instruments issued by corporations to finance their immediate needs. These are typically unsecured and have maturities ranging from a few days to a year.',
      benefits: [
        ' Short-term investment',
        'Higher returns compared to savings accounts',
        'Good liquidity',
      ],
      icon: Briefing,
    },
    {
      id: 2,
      title: 'Zero Coupon Bonds',
      description:
        'Bonds that do not pay periodic interest but are issued at a deep discount to their face value. They mature at face value.',
      benefits: [
        ' Lump-sum return at maturity',
        'Suitable for long-term investment',
        'Predictable returns',
      ],
      icon: Flash,
    },
    {
      id: 3,
      title: 'Public Sector Unit Bonds',
      description:
        'Bonds issued by public sector undertakings (PSUs) for raising capital. These bonds are backed by the government.',
      benefits: [
        ' High credit quality',
        'Regular interest payments',
        'Suitable for conservative investors',
      ],
      icon: Team,
    },
    {
      id: 4,
      title: 'Non-Convertible Debentures',
      description:
        'Long-term debt instruments issued by corporations. They cannot be converted into equity shares of the issuing company.',
      benefits: [
        'Higher interest rates than traditional bonds',
        'Fixed returns',
        'Suitable for investors seeking regular income',
      ],
      icon: Invesstment,
    },
  ],
  hybridSecurities: [
    {
      id: 1,
      title: 'Tax Free Bonds',
      description:
        'Bonds issued by government-backed entities where the interest income is exempt from tax.',
      benefits: [
        'Tax-free interest income',
        ' Suitable for high net worth individuals',
        ' Long-term investment',
      ],
      icon: Taxes,
    },
    {
      id: 2,
      title: 'Preference Shares',
      description:
        'Have characteristics of both equity and debt. They pay fixed dividends and have priority over common stock in dividend payments and asset liquidation.',
      benefits: [
        'Fixed dividend income',
        'Priority in dividend payments',
        'Suitable for income-seeking investors',
      ],
      icon: Dollar,
    },
  ],
};

const BondTypesSection = () => {
  const [activeTab, setActiveTab] = useState('governmentSecurities');

  const tabs = [
    {
      id: 'governmentSecurities',
      label: 'Government Securities',
      icon: <GiVikingLonghouse size={25} />,
    },
    {
      id: 'corporateDebtInstruments',
      label: 'Corporate Debt Instruments',
      icon: <LuBuilding2 size={25} />,
    },
    {
      id: 'hybridSecurities',
      label: 'Hybrid Securities',
      icon: <TbMoneybag size={25} />,
    },
  ];

  const activeBonds = bondData[activeTab];

  return (
    <div className="bg-white px-5 sm:px-0">
      <WidthXL>
        <h1 className="font-poppins font-semibold text-[32px] sm:text-[52px] text-center mb-4">
          Types of Bonds
        </h1>
        <p className="font-lato font-semibold text-sm sm:text-[20px] mb-6 text-center text-gray-800">
          Explore each bond type to find the best fit for your financial
          strategy
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-medium text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3 rounded flex items-center gap-0 sm:gap-2 text-wrap ${
                activeTab === tab.id ? 'bg-[#E16122] text-white' : ' text-black'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
          {activeBonds.map((bond) => (
            <div
              key={bond.id}
              className="w-full sm:w-[580px] rounded-[12px] p-[10px] sm:p-5 bg-backgroundLight2 flex flex-col gap-[10px] sm:gap-5"
            >
              <div className="bg-white h-[210px] rounded-[10px] p-[10px]">
                <div className="flex items-center gap-4 mb-2">
                  <Image
                    src={bond.icon.src}
                    alt={bond.title}
                    width={80}
                    height={80}
                    className='w-[65px] h-[54px] sm:w-[80px] sm:h-[80px]'
                  />
                  <h2 className="font-lato font-bold text-[20px] sm:text-[24px]">
                    {bond.title}
                  </h2>
                </div>
                <p className="font-lato text-base sm:text-[20px] text-gray-800 mb-2">
                  {bond.description}
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-[10px] italic">
                <h3 className="font-semibold font-lato text-sm sm:text-lg">Benefits:</h3>
                <ul className="list-disc list-inside font-lato font-semibold text-sm sm:text-lg text-gray-800">
                  {bond.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </WidthXL>
    </div>
  );
};

export default BondTypesSection;
