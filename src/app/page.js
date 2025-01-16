import arrow from '@/assets/images/arrow.png';
import Footer from '@/sections/footer/Footer';
import Calculator from '@/sections/home/calculatorSection/Calculator';
import MagicOfCompounding from '@/sections/home/compoundingSection/MagicOfCompounding';
import Dreamsection from '@/sections/home/heroSection/Dreamsection';
import Herosection from '@/sections/home/heroSection/Herosection';
import TrailblazorsSection from '@/sections/home/trailblazorsSection/TrailblazorsSection';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { IoStarSharp } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="">
      <main className="overflow-hidden bg-white">
        <Herosection />
        <div className="w-full h-32 sm:h-44 bg-accentGray-400 text-center flex flex-col items-center justify-center z-0">
          <div className="w-[350px] sm:w-[739px]">
            <p className="text-base sm:text-2xl font-semibold font-lato text-gray-950 italic text-wrap">
              “The only thing standing between you and your goal is the story
              you keep telling yourself as to why you can&#39;t achieve it”
            </p>

            <p className="w-full text-right text-sm sm:text-lg font-lato font-medium mt-2">
              ~ Wolf of Wall Street
            </p>
          </div>
        </div>
        <Dreamsection />
        <TrailblazorsSection />
        <Calculator />
        {/* Moving horizontal Carousel */}
        <div className="flex sm:hidden w-full h-[74px] overflow-hidden bg-white whitespace-nowrap mt-24 ">
          <div className="w-full animate-horizontalScroll">
            <p className=" text-gray-900 text-6xl font-extrabold font-poppins flex items-center">
              <span>
                <IoStarSharp size={50} />
              </span>
              TODAY&#39;S LATEST NEWS
            </p>
          </div>
        </div>
        <div className="bg-[#1B1B1B] w-full flex flex-col sm:flex-row items-center justify-center sm:gap-56 px-5 sm:px-0 relative">
          <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 pb-20">
            <div className="flex items-center justify-center sm:justify-start gap-0 sm:gap-5">
              <Image
                src={arrow}
                alt="icon"
                className="hidden sm:block w-44 h-44  sm:w-44"
              />
              <div className="absolute sm:hidden top-14 left-4 w-14 h-14">
                <Image src={arrow} alt="icon" />
              </div>
              <div className="flex flex-col items-center justify-center mt-20 gap-8 ">
                <h1 className="hidden sm:block font-extrabold font-poppins text-5xl sm:text-7xl uppercase text-white text-center">
                  Aaj ki taaza khabar
                </h1>
                <h1 className="flex flex-col items-center sm:hidden font-extrabold font-poppins text-[43px] sm:text-7xl uppercase text-white text-center">
                  Aaj ki
                  <span>taaza khabar</span>
                </h1>
                <p className="font-lato font-semibold text-sm sm:text-xl text-gray-100 text-center">
                  Stay Updated with the Latest News in Finance.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-[70%] sm:w-full max-w-md flex items-center justify-between">
                    {/* Email Icon and Placeholder */}
                    <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>

                    {/* Input Field */}
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="block w-[500px] py-4 pl-10 border rounded-full bg-transparent text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    {/* Submit Button */}
                    <button className="absolute top-2 right-2 flex items-center bg-gray-50 rounded-full text-black p-2">
                      <FiArrowRight size={25} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center sm:justify-between gap-12 flex-wrap text-gray-400">
              <Link
                href="#"
                className="font-lato italic text-xs sm:text-base flex items-center justify-center gap-2"
              >
                Gold Rate Update
                <span>
                  <HiArrowTrendingUp className="w-3 h-3 sm:w-6 sm:h-6" />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-xs sm:text-base flex items-center justify-center gap-2"
              >
                Expert tips to Invest
                <span>
                  <HiArrowTrendingUp className="w-3 h-3 sm:w-6 sm:h-6" />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-xs sm:text-base flex items-center justify-center gap-2"
              >
                SIP: How does it work?
                <span>
                  <HiArrowTrendingUp className="w-3 h-3 sm:w-6 sm:h-6" />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-xs sm:text-base flex items-center justify-center gap-2"
              >
                Should you Invest in Debt funds
                <span>
                  <HiArrowTrendingUp className="w-3 h-3 sm:w-6 sm:h-6" />
                </span>
              </Link>
            </div>
          </div>

          {/* Moving Vertical Carousel */}
          <div className="hidden sm:flex w-36 h-[475px] overflow-hidden bg-white whitespace-nowrap">
            <div className="w-full animate-verticalScroll">
              <p className=" text-gray-900 text-6xl font-extrabold font-poppins transform -rotate-90 flex items-center">
                <span>
                  <IoStarSharp size={50} />
                </span>
                <span className="ml-10">T</span>
                <span>O</span>
                <span>D</span>
                <span>A</span>
                <span>Y</span>
                <span>&#39;</span>
                <span>S</span>
                <span className="ml-10">L</span>
                <span>A</span>
                <span>T</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
                <span className="ml-10">N</span>
                <span>E</span>
                <span>W</span>
                <span>S</span>
              </p>
            </div>
          </div>
        </div>
        <MagicOfCompounding />
        <Footer />
      </main>
    </div>
  );
}



//***** FOR MAINTENANCE CODE ****** */

// import Image from 'next/image';
// import React from 'react';
// import logo from '@/assets/images/Logo.png';
// import Link from 'next/link';

// function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
//       <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-lg bg-white shadow-lg">
//         <Image
//           src={logo}
//           alt="logo"
//           className="w-[136px] h-[23px] sm:w-48 sm:h-8"
//         />
//         <h1 className="text-2xl sm:text-3xl font-bold">We&quot;ll Be Back Soon!</h1>
//         <p className="text-center text-gray-600">
//           Our website is currently undergoing scheduled maintenance. Thank you
//           for your patience. We&quot;ll be back online shortly!
//         </p>
//         <Link
//           href="https://invest.rupeestop.com/client-login"
//           className="bg-accentOrange-200 py-2 sm:py-3 px-8 sm:px-12 text-white font-medium rounded-full hover:bg-accentOrange-300 transition duration-300"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
