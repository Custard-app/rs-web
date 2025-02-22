'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a portfolio health checker?",
      answer:
        "A portfolio health checker is a tool or service that analyzes your investment portfolio to assess its performance, diversification, risk level, and alignment with your financial goals.",
    },
    {
      question: "How does a portfolio health checker work?",
      answer:
        "It evaluates key factors such as asset allocation, historical performance, risk exposure, and alignment with market conditions. Some tools provide recommendations to optimize the portfolio.",
    },
    {
      question: "What information do I need to provide for a portfolio health check?",
      answer:
        "You typically need to share details about your current investments, such as asset classes (equity, debt, etc.), fund names, investment amounts, and holding periods.",
    },
    {
      question: "How often should I use a portfolio health checker?",
      answer:
        "It's advisable to review your portfolio health at least annually or when there are significant changes in your financial goals, market conditions, or income levels.",
    },
    {
      question: "Is the portfolio health checker suitable for all types of investors?",
      answer:
        "Yes, it benefits all investors, from beginners to seasoned investors, by providing insights into improving returns, managing risks, and achieving financial goals efficiently.",
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
