import Footer from '@/components/footer/Footer';
import Calculator from '@/components/home/calculatorSection/Calculator';
import Dreamsection from '@/components/home/heroSection/Dreamsection';
import Herosection from '@/components/home/heroSection/Herosection';
import TrailblazorsSection from '@/components/home/trailblazorsSection/TrailblazorsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <main className='overflow-hidden'>
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
        <TrailblazorsSection/>
        <Calculator/>
        <div className='bg-[#1B1B1B] w-full p-20'>
          <h1 className='font-extrabold font-poppins text-7xl uppercase text-white text-center'>Aaj ki taaza khabar</h1>
          <p className='font-lato font-semibold text-xl mt-4 text-gray-100 text-center'>Stay Updated with the Latest News in Finance.</p>
          <div className='flex items-center justify-center mt-7'>
            <input
            placeholder='Enter your email'
            className='pl-5 py-2 px-2 rounded-3xl border bg-transparent text-white'
            />
          </div>
          <div>
            <Link href="#">Gold Rate Update</Link>
            <Link href="#">Expert tips to Invest</Link>
            <Link href="#">SIP: How does it work?</Link>
            <Link href="#">Should you Invest in Debt funds</Link>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
