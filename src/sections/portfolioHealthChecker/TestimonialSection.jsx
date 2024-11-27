import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';

const testimonialsData = [
  {
    name: 'Investor A',
    username: 'investorA',
    image: 'https://via.placeholder.com/48', // Replace with actual image URLs
    stars: 3,
    feedback:
      'The Portfolio Health Checker helped me understand where my investments were falling short. The recommendations were spot on and easy to implement.',
  },
  {
    name: 'Investor B',
    username: 'investorB',
    image: 'https://via.placeholder.com/48', // Replace with actual image URLs
    stars: 5,
    feedback:
      'I love the detailed reports and insights. This tool is a game-changer for anyone serious about their investments.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#FFFBF7] py-16 px-8 text-center">
      <WidthXL>
        <h2 className="font-poppins font-semibold text-[32px] sm:text-5xl text-gray-800 mb-2">
          Clients Cheers for us!
        </h2>
        <p className="font-lato text-sm sm:text-[20px] text-gray-600 mb-8">
          Find out how our clients are spreading the word
        </p>
        <div className="flex flex-col sm:flex-row justify-center mx-auto gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="w-[355px] sm:w-[490px] bg-white rounded-[12px] shadow-md py-5 px-6 sm:px-10 flex flex-col items-start border-[1px] border-gray-400"
            >
              <div className="w-full flex items-center justify-between mb-4">
                <div className='flex gap-1 sm:gap-4'>
                  <Image
                    src={testimonial.image.src}
                    alt={`${testimonial.name}'s profile`}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-200"
                  />
                  <div>
                    <h3 className="font-bold text-lg sm:text-2xl">{testimonial.name}</h3>
                    <p className="text-gray-500 font-medium text-xs sm:text-lg text-start">
                      @{testimonial.username}
                    </p>
                  </div>                  
                </div>
                
                <div className="flex items-center mb-2">
                  {Array.from({ length: testimonial.stars }, (_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - testimonial.stars }, (_, index) => (
                    <span key={index} className="text-gray-300 text-xl">
                      ★
                    </span>
                  ))}
                </div>

              </div>
              <p className="text-gray-700 font-lato font-normal text-start text-sm sm:text-lg">
              &#34;{testimonial.feedback}&#34;
              </p>
            </div>
          ))}
        </div>
      </WidthXL>
    </section>
  );
};

export default TestimonialSection;
