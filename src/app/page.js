import Footer from '@/components/footer/Footer';
import Calculator from '@/components/home/calculatorSection/Calculator';
import Dreamsection from '@/components/home/heroSection/Dreamsection';
import Herosection from '@/components/home/heroSection/Herosection';
import TrailblazorsSection from '@/components/home/trailblazorsSection/TrailblazorsSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <main className='overflow-hidden'>
        <Herosection />
        <div className="w-full h-44 bg-accentGray-400 text-center flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[739px]">
            <p className="text-2xl font-semibold font-lato text-gray-950 italic">
              “The only thing standing between you and your goal is the story
              you keep telling yourself as to why you can't achieve it”
            </p>

            <p className="w-full text-right text-lg font-lato font-medium">
              ~ Wolf of Wall Street
            </p>
            <p className='text-4xl font-bold'>Hello world</p>
          </div>
        </div>
        <Dreamsection />
        <TrailblazorsSection/>
        <Calculator/>
        <Footer/>
      </main>
    </div>
  );
}
