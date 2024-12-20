'use client';
import phcimage from '@/assets/images/phcimage.png'; // Replace with your image path
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
// import user from '@/assets/icons/user.png'
import bot from '@/assets/icons/bot.png';

const HeroSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    {
      text: 'I’m not sure if my portfolio is balanced. Can your tool help with that?',
      user: 'user',
    },
    {
      text: 'Absolutely! Our tool provides a detailed analysis of your asset allocation and suggests rebalancing strategies.',
      user: 'bot',
    },
    { text: 'What if my portfolio is too risky? How do I know?', user: 'user' },
    {
      text: 'We’ve got you covered! The tool evaluates the risk level of your investments and offers recommendations to align with your risk tolerance.',
      user: 'bot',
    },
  ];

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  return (
    <div className="bg-primary h-full sm:h-[95vh] text-white flex flex-col sm:flex-row items-center relative">
      {/* Left Section - Text */}
      <WidthXL>
        <div className="w-full sm:w-1/2 flex sm:absolute flex-col px-5 sm:px-0 items-start gap-6 top-44 left-44">
          <h1 className="text-center sm:text-start font-poppins text-[36px] sm:text-[56px] font-bold mt-28 sm:mt-0">
            Portfolio Health Checker
          </h1>
          <p className="text-center sm:text-start text-lg sm:text-[22px]">
            Ensure your investment portfolio is on the right track with our
            Portfolio Health Checker. This tool helps you evaluate the overall
            performance and health of your investments, providing insights and
            recommendations for improvement.
          </p>
          <button className="mx-auto sm:mx-0 flex items-center gap-4 bg-accentLime px-6 py-3 rounded-full mt-4">
            <p className="text-black font-semibold text-sm sm:text-[20px] capitalize">
              Check Portfolio Health
            </p>
            <span className="bg-gray-50 rounded-full text-black p-2">
              <GoArrowRight size={24} />
            </span>
          </button>
        </div>
      </WidthXL>

      {/* Right Section - Image and Animation */}
      <div className="w-full sm:w-1/2 relative flex justify-center items-center mt-8 sm:mt-0 h-full sm:h-[95vh]">
        {/* Background Image */}
        <Image
          src={phcimage}
          alt="Portfolio Health Checker"
          className="w-full sm:w-auto  h-full object-cover"
        />

        {/* Chat Animation */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end p-4 space-y-4 z-10">
          {messages.slice(0, currentMessageIndex).map((message, index) => (
            <div
              key={index}
              className={`flex items-start max-w-xs ${
                message.user === 'user' ? 'self-end' : 'self-start'
              }`}
            >
              {/* Profile Image */}
              {message.user === 'bot' && (
                <Image
                  src={bot}
                  alt="Bot Avatar"
                  className="w-8 h-8 rounded-full mr-3"
                />
              )}
              {message.user === 'user' && (
                <Image
                  src={bot}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full ml-3 order-last"
                />
              )}

              {/* Message Bubble */}
              <div
                className={`pl-2 pr-2 py-2 rounded-lg ${
                  message.user === 'user'
                    ? 'bg-teal-700 text-white'
                    : 'bg-white text-teal-900 shadow-md'
                }`}
                style={{ animation: 'fade-in 0.5s ease-in-out' }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
