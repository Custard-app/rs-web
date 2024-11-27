'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { CgAdd } from "react-icons/cg";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is a Portfolio Health Checker?',
      answer:
        'It is a tool that evaluates the overall performance and health of your investment portfolio, providing insights and recommendations for improvement.',
    },
    {
      question: 'How often should I use the Portfolio Health Checker?',
      answer:
        'To start investing, you can consult a financial advisor or choose a trusted platform to create an account, research funds, and make your first investment.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Benefits include professional management, diversification, transparency, flexibility, tax efficiency, and liquidity.',
    },
    {
      question: 'Can I use this tool if I have a small portfolio?',
      answer:
        'Yes, mutual funds offer flexibility in withdrawal. However, there might be some exit load charges depending on the fund and holding period.',
    },
    {
      question: 'Do I need to have all my investments in one place?',
      answer:
        'While all investments carry some risk, mutual funds are managed by professional fund managers and offer various levels of risk to suit different investors.',
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-backgroundLight3 py-14 sm:py-24 px-5 sm:px-0 ">
      <WidthXL>
        <div className="">
          <h2 className="font-poppins text-[32px] sm:text-[42px] font-semibold text-center mb-5 sm:mb-10">
          Frequently asked questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-primary border-opacity-40 pb-8"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-lato font-medium text-lg sm:text-[20px]">
                    {faq.question}
                  </h3>
                  <button
                    className={`text-2xl transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    {activeIndex === index ? <GrSubtractCircle /> : <CgAdd />}
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="font-lato text-base sm:text-[18px] text-gray-600 mt-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default FAQSection;
