'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'To start investing, you can consult a financial advisor or choose a trusted platform to create an account, research funds, and make your first investment.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Benefits include professional management, diversification, transparency, flexibility, tax efficiency, and liquidity.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer:
        'Yes, mutual funds offer flexibility in withdrawal. However, there might be some exit load charges depending on the fund and holding period.',
    },
    {
      question: 'How does billing work?',
      answer:
        'While all investments carry some risk, mutual funds are managed by professional fund managers and offer various levels of risk to suit different investors.',
    },
    {
      question: 'How do I change my account email?',
      answer:
        'While all investments carry some risk, mutual funds are managed by professional fund managers and offer various levels of risk to suit different investors.',
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
