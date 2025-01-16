'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Portfolio Management Services (PMS)?",
      answer:
        "PMS is a tailored investment service where professional portfolio managers create and manage a customized portfolio of stocks, bonds, or other assets for high-net-worth individuals (HNIs).",
    },
    {
      question: "What is the minimum investment required for PMS?",
      answer:
        "As per SEBI regulations, the minimum investment required to avail of PMS is ₹50 lakhs.",
    },
    {
      question: "How does PMS differ from mutual funds?",
      answer:
        "PMS offers a personalized investment strategy and direct ownership of securities, whereas mutual funds pool investments from various investors into a common portfolio.",
    },
    {
      question: "What are the charges for PMS?",
      answer:
        "PMS charges typically include a fixed management fee and a performance fee based on returns. Additional charges may apply for transactions and custody.",
    },
    {
      question: "Is PMS suitable for all investors?",
      answer:
        "PMS is best suited for HNIs with a high-risk appetite and a desire for personalized portfolio management. Retail investors may find mutual funds or other instruments more suitable.",
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
