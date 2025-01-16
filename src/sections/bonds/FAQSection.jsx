'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are bonds, and how do they work?",
      answer:
        "Bonds are fixed-income securities where investors lend money to issuers (corporations or governments) in exchange for periodic interest payments and principal repayment at maturity.",
    },
    {
      question: "What types of bonds can I invest in?",
      answer:
        "Bonds include government bonds, corporate bonds, municipal bonds, and tax-free bonds, each with different risk levels and returns.",
    },
    {
      question: "Are bonds risk-free investments?",
      answer:
        "Bonds carry risks such as credit risk, interest rate risk, and inflation risk. Government bonds are considered safer than corporate bonds.",
    },
    {
      question: "How are bond returns taxed?",
      answer:
        "Interest earned from bonds is taxable as per your income tax slab. Some bonds, like tax-free bonds, are exempt from income tax on interest.",
    },
    {
      question: "How do bonds compare with fixed deposits?",
      answer:
        "Bonds may offer higher returns than fixed deposits but with higher risks. They also provide potential capital appreciation, unlike fixed deposits.",
    },
    
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
