import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import arrow from '@/assets/rupeestop_assets/newsletterArrow.png';
import Link from 'next/link';

const data = [
  {
    id: 1,
    date: 'Jan 04, 2025',
    title: 'Achieving 1cr without going to KBC',
    link: "https://rupeesorted.substack.com/p/achieving-1cr-without-going-to-kbc"
  },
  {
    id: 2,
    date: 'Dec 27, 2024',
    title: 'FIRE a 30yr old with ₹1.5 Cr Corpus by 45',
    link: "https://rupeesorted.substack.com/p/fire-a-30yr-old-with-15-cr-corpus"
  },
];

export default function PastNewsletterSection() {
  return (
    <div className="px-5 sm:px-0 bg-white py-24">
      <WidthXL>
        <div className='relative'>
          <h1 className="hidden sm:block w-full font-poppins font-bold text-[32px] sm:text-[52px] text-center text-wrap text-black">
            Catch up on past newsletters
          </h1>
          <h1 className="block sm:hidden w-full font-poppins font-bold text-[32px] sm:text-[52px] text-center text-wrap text-black">
            Catch up on <br></br>past newsletters
          </h1>
          <p className="font-lato font-medium text-base sm:text-[20px] text-center text-wrap text-black">
            For valuable insights and tips to boost your financial game!
          </p>
          <Image src={arrow} alt="arrow" className="absolute top-3 right-2 sm:top-20 sm:right-24 w-14 sm:w-24"/>
          <div className="mt-20">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center justify-between border-b border-gray-200 py-4"
              >
                {/* Date and Title */}
                <div className="w-[75%] sm:w-full flex flex-col-reverse sm:flex-row items-start sm:items-center justify-start gap-2 sm:gap-20">
                  <p className="text-gray-900 text-sm font-poppins font-medium">
                    {item.date}
                  </p>
                  <h3 className="text-black font-medium text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Button */}
                <Link
                href={item.link}
                target='_blank'
                className="mt-2 sm:mt-0 bg-primary text-white px-5 py-2 rounded-full hover:bg-teal-800">
                  Read
                </Link>
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </div>
  );
}
