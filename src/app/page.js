import Footer from '@/components/footer/Footer';
import Calculator from '@/components/home/calculatorSection/Calculator';
import Dreamsection from '@/components/home/heroSection/Dreamsection';
import Herosection from '@/components/home/heroSection/Herosection';
import TrailblazorsSection from '@/components/home/trailblazorsSection/TrailblazorsSection';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/assets/images/arrow.png';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { IoStarSharp } from "react-icons/io5";
import MagicOfCompounding from '@/components/home/compoundingSection/MagicOfCompounding';


export default function Home() {
  return (
    <div className="">
      <main className="overflow-hidden">
        <Herosection />
        <div className="w-full h-44 bg-accentGray-400 text-center flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[739px]">
            <p className="text-2xl font-semibold font-lato text-gray-950 italic">
              “The only thing standing between you and your goal is the story
              you keep telling yourself as to why you can&#39;t achieve it”
            </p>

            <p className="w-full text-right text-lg font-lato font-medium">
              ~ Wolf of Wall Street
            </p>
          </div>
        </div>
        <Dreamsection />
        <TrailblazorsSection />
        <Calculator />
        <div className="bg-[#1B1B1B] w-full flex items-center justify-center gap-56 mt-24">
          <div className="flex flex-col items-center justify-center gap-16 pb-20">
            <div className="flex items-center justify-start gap-5">
              <Image src={arrow} alt='button' className="w-44" />
              <div className="flex flex-col items-center justify-center mt-20 gap-8">
                <h1 className="font-extrabold font-poppins text-7xl uppercase text-white text-center">
                  Aaj ki taaza khabar
                </h1>
                <p className="font-lato font-semibold text-xl text-gray-100 text-center">
                  Stay Updated with the Latest News in Finance.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md flex items-center justify-between">
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

            <div className="w-full flex items-center justify-between text-gray-400">
              <Link
                href="#"
                className="font-lato italic text-base flex items-center justify-center gap-2"
              >
                Gold Rate Update
                <span>
                  <HiArrowTrendingUp size={25} />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-base flex items-center justify-center gap-2"
              >
                Expert tips to Invest
                <span>
                  <HiArrowTrendingUp size={25} />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-base flex items-center justify-center gap-2"
              >
                SIP: How does it work?
                <span>
                  <HiArrowTrendingUp size={25} />
                </span>
              </Link>
              <Link
                href="#"
                className="font-lato italic text-base flex items-center justify-center gap-2"
              >
                Should you Invest in Debt funds
                <span>
                  <HiArrowTrendingUp size={25} />
                </span>
              </Link>
            </div>
          </div>
          {/* Moving Vertical Carousel */}
          <div className="w-36 h-[475px] overflow-hidden bg-white whitespace-nowrap flex">
            <div className="w-full animate-verticalScroll">
              <p className=" text-gray-900 text-6xl font-extrabold font-poppins transform -rotate-90 flex items-center">
                <span><IoStarSharp size={50}/></span>
                <span className='ml-10'>T</span>
                <span>O</span>
                <span>D</span>
                <span>A</span>
                <span>Y</span>
                <span>&#39;</span>
                <span>S</span>
                <span className='ml-10'>L</span>
                <span>A</span>
                <span>T</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
                <span className='ml-10'>N</span>
                <span>E</span>
                <span>W</span>
                <span>S</span>
              </p>
            </div>
          </div>
        </div>
      <MagicOfCompounding/>
        <Footer />
      </main>
    </div>
  );
}
