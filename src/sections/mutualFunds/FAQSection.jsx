'use client'
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are mutual funds, and how do they work?",
      answer:
        "Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. Professional fund managers manage these investments.",
    },
    {
      question: "What types of mutual funds are available?",
      answer:
        "There are various types, including equity funds, debt funds, hybrid funds, and sectoral/thematic funds, each with different risk and return profiles.",
    },
    {
      question: "How are mutual fund returns taxed?",
      answer:
        "Taxation depends on the type of fund and holding period. For example, short-term and long-term capital gains on equity and debt funds are taxed differently.",
    },
    {
      question: "Are mutual funds safe to invest in?",
      answer:
        "Mutual funds are subject to market risks. The level of risk depends on the type of fund. Equity funds carry higher risks, while debt funds are relatively safer.",
    },
    {
      question: "How do I choose the right mutual fund for my goals?",
      answer:
        "Consider your financial goals, risk tolerance, investment horizon, and the fund's past performance before selecting a mutual fund.",
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
