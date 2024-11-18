'use client'
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a mutual fund?",
      answer:
        "A mutual fund is a type of investment where money from multiple investors is pooled together to buy securities like stocks, bonds, and other assets.",
    },
    {
      question: "How do I start investing in mutual funds?",
      answer:
        "To start investing, you can consult a financial advisor or choose a trusted platform to create an account, research funds, and make your first investment.",
    },
    {
      question: "What are the benefits of investing in mutual funds?",
      answer:
        "Benefits include professional management, diversification, transparency, flexibility, tax efficiency, and liquidity.",
    },
    {
      question: "Can I withdraw my money from a mutual fund anytime?",
      answer:
        "Yes, mutual funds offer flexibility in withdrawal. However, there might be some exit load charges depending on the fund and holding period.",
    },
    {
      question: "Are mutual funds safe?",
      answer:
        "While all investments carry some risk, mutual funds are managed by professional fund managers and offer various levels of risk to suit different investors.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-backgroundLight2 py-3 sm:py-5">
    <div className="max-w-[1000px] mx-auto py-10 px-5 sm:px-0 bg-backgroundLight2">
      <h2 className="font-poppins text-[32px] sm:text-[42px] font-semibold text-center mb-3 sm:mb-4">Got Questions?</h2>
      <p className="font-lato font-medium text-sm sm:text-lg text-center text-gray-600 mb-10">
        Relax, We&#39;ve Got You Covered
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-lato font-medium text-lg sm:text-[24px]">{faq.question}</h3>
              <button
                className={`text-2xl transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? <RiSubtractLine/> : <IoMdAdd/>}
              </button>
            </div>
            {activeIndex === index && (
              <p className="font-lato text-base sm:text-[20px] text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
