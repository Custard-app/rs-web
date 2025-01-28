import Footer from '@/sections/footer/Footer';
import Calculator from '@/sections/home/calculatorSection/Calculator';
import MagicOfCompounding from '@/sections/home/compoundingSection/MagicOfCompounding';
import Dreamsection from '@/sections/home/heroSection/Dreamsection';
import Herosection from '@/sections/home/heroSection/Herosection';
import TaazaKhabar from '@/sections/home/taazaKhabar/TaazaKhabar';
import TrailblazorsSection from '@/sections/home/trailblazorsSection/TrailblazorsSection';

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
        {/* <TaazaKhabar /> */}
        <MagicOfCompounding />
        <Footer />
      </main>
    </div>
  );
}



//***** FOR MAINTENANCE CODE ****** */

// import Image from 'next/image';
// import React from 'react';
//import logo from '@/assets/rupeestop_assets/Home page/Logo.png';
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
