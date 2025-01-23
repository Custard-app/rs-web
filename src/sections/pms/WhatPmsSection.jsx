'use client';
import Vector from '@/assets/icons/Vector.png';
import balance from '@/assets/icons/cil_balance-scale.png';
import pageImg from '@/assets/icons/oui_page-select.png';
import FinanceAnalysis from '@/assets/images/FinanceAnalysis.png';
import TeamPresentation from '@/assets/images/TeamPresentation.png';
import pmsMain from '@/assets/images/pms-main.png';
import logo from '@/assets/images/waterLogo.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import './WhatPmsSection.css';

function WhatPmsSection() {
  const [activeTab, setActiveTab] = useState('customized');
  const [isInView, setIsInView] = useState(false);
  const [isTabChange, setIsTabChange] = useState(false);
  const containerRef = useRef(null);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);  

  const data = {
    customized: {
      title: 'Customised PMS',
      description:
        'Customized PMS is tailored to meet your specific investment goals and risk tolerance. You can work with portfolio managers to design a unique investment strategy that aligns with your financial objectives.',
      point: [
        'Personalized investment strategy',
        'Flexibility in choosing asset allocation',
        'Continuous monitoring and adjustments based on market conditions',
      ],
      image: TeamPresentation,
    },
    predesigned: {
      title: 'Pre Designed PMS',
      description:
        'Pre-designed PMS allows you to invest in already running, professionally managed portfolios by different companies. These portfolios are structured based on proven strategies and market analysis.',
      point: [
        'Ready-made investment Solutions',
        'Proven Track record & Performance history',
        'Managed by experienced Portfolio Managers',
      ],
      image: FinanceAnalysis,
    },
  };


  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setIsInView(true);
          setHasBeenSeen(true);  
        }
      },
      {
        threshold: 0.5,
      },
    );

    if(currentRef){
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasBeenSeen]);

   // Combine in-view and tab change triggers
  const shouldAnimate = isInView || isTabChange;

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsTabChange(true);

    setTimeout(() => setIsTabChange(false), 500);
  };

  return (
    <div className="py-14 sm:py-24 mt-0 sm:mt-20 px-5 sm:px-0 ">
      <WidthXL>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10 sm:gap-20">
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-5 sm:gap-10 flex-wrap">
            <h1 className="font-poppins font-semibold text-[32px] sm:text-5xl text-black text-center sm:text-start">
              What is PMS?
            </h1>
            <p className="font-lato font-semibold text-base sm:text-2xl text-gray-800 text-wrap text-center sm:text-start">
              Portfolio Management Services (PMS) provide customized investment
              planning, which includes a mix of both equity (shares) and debt
              instruments. Designed for institutions, high net worth
              individuals, or anyone ready to invest a minimum amount of 50
              Lacs, PMS offers tailored investment solutions.
            </p>
          </div>
          <div className="relative w-[333px] sm:w-[537px] h-[277px] sm:h-[368px]">
            <Image
              src={pmsMain}
              alt="pms image"
              className="absolute top-8 sm:top-0 left-0 sm:right-28 w-[290px] sm:w-[467px] h-[193px] sm:h-[311px] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] z-20"
            />

            <div className="absolute bottom-0 right-0 w-[295px] sm:w-[493px] h-[205px] sm:h-[342px] rounded-tr-[50px] rounded-bl-[50px] bg-backgroundLight3 z-0"></div>
          </div>
        </div>

        {/* INVESTING START */}
        <div className="py-24 flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-20 justify-between">
          <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:gap-10">
            <div className="flex items-center gap-6 border-2 border-primary rounded-3xl p-8">
              <Image
                src={Vector}
                alt="img"
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <p className="font-lato font-semibold text-sm sm:text-[20px] text-gray-800 text-wrap">
                Provide the option to select products that match your needs from
                various portfolio managers.
              </p>
            </div>
            <div className="flex items-center gap-6 border-2 border-primary rounded-3xl p-8">
              <Image
                src={balance}
                alt="img"
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <p className="font-lato font-semibold text-sm sm:text-[20px] text-gray-800 text-wrap">
                Conduct thorough analysis of risk and reward ratios for each
                product.
              </p>
            </div>
            <div className="flex items-center gap-6 border-2 border-primary rounded-3xl p-8">
              <Image
                src={pageImg}
                alt="img"
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <p className="font-lato font-semibold text-sm sm:text-[20px] text-gray-800 text-wrap">
                Evaluate portfolio composition and performance to ensure quality
                investments.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end relative">
            <h1 className="font-poppins font-semibold text-[30px] sm:text-[52px] text-center sm:text-end mb-10">
              What We Do for PMS Investing?
            </h1>
            <Image
              src={logo}
              alt="logo"
              className="hidden sm:block w-[268px] h-[228px]"
            />

            <Image
              src={logo}
              alt="logo"
              className="absolute block sm:hidden w-[153px] h-[131px] bottom-4"
            />
          </div>
        </div>
        {/* INVESTING END */}

        {/* CUSTOMISED PMS START */}
        <div className="flex flex-col gap-16 bg-backgroundLight2 rounded-[20px] py-10 px-10 sm:px-20 -mx-10">
          {/* Tabs */}
          <div className="flex space-x-4 items-center justify-center">
            <button
              onClick={() => handleTabChange("customized")}
              className={`px-7 py-2 rounded-full font-lato font-bold texxt-sm sm:text-[20px] ${
                activeTab === 'customized'
                  ? 'bg-primary text-white'
                  : 'bg-gray-50 text-gray-800'
              } transition duration-300`}
            >
              Customised PMS
            </button>
            <button
              onClick={() => handleTabChange("predesigned")}
              className={`px-7 py-3 rounded-full font-lato font-bold text-sm sm:text-[20px] ${
                activeTab === 'predesigned'
                  ? 'bg-primary text-white'
                  : 'bg-gray-50 text-gray-800'
              } transition duration-300`}
            >
              Predesigned PMS
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-20">
            {/* Left Box */}
            <div
              ref={containerRef}
              className="w-full sm:w-1/2 h-[419px] bg-primary text-white rounded-xl p-6 flex flex-col gap-4"
            >
              {/* Title */}
              <p className="font-lato font-bold text-[24px] sm:text-[26px] animate-fade-in text-center">
                {data[activeTab].title}
              </p>

              {/* Description */}
              <p
                className={`font-lato font-medium text-base sm:text-[20px] ${
                  shouldAnimate ? 'animate-fade-in-delayed' : ''
                }`}
                style={{ '--animation-delay': '0.3s' }}
              >
                {data[activeTab].description}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {data[activeTab].point.map((item, index) => (
                  <li
                    key={index}
                    className={`font-lato font-semibold text-base sm:text-[20px] flex items-start gap-2 ${
                      shouldAnimate ? 'animate-fade-in-delayed' : ''
                    }`}
                    style={{ '--animation-delay': `${0.8 + index * 0.2}s` }}
                  >
                    <span className="mt-1">
                      <FaCircleCheck size={20} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Images */}
            <div className="flex items-center justify-center w-full sm:w-1/2">
              <img
                src={data[activeTab].image.src}
                alt="PMS Illustration"
                className="w-[310px] sm:w-[425px] h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* CUSTOMISED PMS END */}
      </WidthXL>
    </div>
  );
}

export default WhatPmsSection;
