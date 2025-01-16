'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a fixed deposit (FD)?",
      answer:
        "A fixed deposit is a financial instrument where you deposit a lump sum for a fixed period at a predetermined interest rate, earning guaranteed returns.",
    },
    {
      question: "What is the minimum and maximum tenure for an FD?",
      answer:
        "The tenure varies between financial institutions, usually ranging from 7 days to 10 years.",
    },
    {
      question: "Are the returns on fixed deposits taxable?",
      answer:
        "Yes, the interest earned on FDs is taxable as per your income tax slab. Tax-saving FDs offer deductions under Section 80C, but the interest is still taxable.",
    },
    {
      question: "Can I withdraw my FD before maturity?",
      answer:
        "Yes, but premature withdrawals may incur penalties, and you may earn a lower interest rate than agreed.",
    },
    {
      question: "How does a fixed deposit compare with other investments?",
      answer:
        "FDs are low-risk investments offering guaranteed returns, but they generally provide lower returns compared to market-linked options like mutual funds or bonds.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-backgroundLight3 py-14 sm:py-24 px-5 sm:px-0 ">
      <WidthXL>
        <div className="">
          <h2 className="font-poppins text-[32px] sm:text-[42px] font-semibold text-center mb-3 sm:mb-4">
          Frequently asked questions
          </h2>
          <p className="font-lato font-medium text-sm sm:text-lg text-center text-gray-600 mb-10">
          Everything you need to know about the product and billing.
          </p>

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
