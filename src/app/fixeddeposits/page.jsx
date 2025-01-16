import benifits from '@/assets/icons/benifits.png';
import diverse from '@/assets/icons/diverse.png';
import flexibility from '@/assets/icons/flexibility.png';
import hightreturn from '@/assets/icons/hightreturn.png';
import safety from '@/assets/icons/safety.png';
import bajaj from '@/assets/images/bajaj.png';
import hdfc from '@/assets/images/hdfc.png';
import mahindra from '@/assets/images/mahindra.png';
import pnb from '@/assets/images/pnb.png';
import waterLogo from '@/assets/images/waterLogo.png';
import FAQSection from '@/sections/fixedDeposits/FAQSection';
import HeroSection from '@/sections/fixedDeposits/HeroSection';
import InterestRateSection from '@/sections/fixedDeposits/IntrestRateSection';
import WidthXL from '@/wrapper/widths/WidthXL';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

function page() {
  const benefits = [
    {
      id: 1,
      title: 'Higher Returns',
      description:
        'Benefit from higher interest rates compared to traditional savings options.',
      icon: hightreturn
    },
    {
      id: 2,
      title: 'Diverse Options',
      description:
        'Choose from a wide range of deposit products tailored to your needs.',
      icon: diverse
    },
    {
      id: 3,
      title: 'Flexibility',
      description:
        'Enjoy flexible investment periods and the option for quick loans against deposits.',
      icon: safety
    },
    {
      id: 4,
      title: 'Safety and Stability',
      description:
        'Invest in highly rated instruments by reputable credit agencies.',
      icon: flexibility
    },
    {
      id: 5,
      title: 'Additional Benefits for Seniors',
      description:
        'Senior citizens get additional interest rates, enhancing their returns.',
      icon: benifits
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <div className="py-14 sm:py-24 px-5 sm:p-0">
        <div className="max-w-6xl w-full mx-auto h-[394px] sm:h-[462px] bg-[#E3FFFE] rounded-tr-[70px] rounded-bl-[70px] px-5 sm:px-24 shadow-xl relative flex flex-col items-center justify-center gap-10">
          <p className="font-lato font-semibold text-base sm:text-[26px] text-wrap text-center">
            At Rupeestop, we bring you the best instruments available in the
            market, highly rated by credit agencies. All these companies have
            proven track records in terms of market share, consistency in
            performance, and returns on their loans and deposits.
          </p>
          <div className="flex items-center justify-evenly flex-wrap space-y-4 space-x-1">
            <Image src={hdfc} alt="hdfc" className="h-10 sm:12" />
            <Image src={mahindra} alt="mahindra" className="h-10 sm:12" />
            <Image src={pnb} alt="pnb" className="h-10 sm:12" />
            <Image src={bajaj} alt="bajaj" className="h-10 sm:12" />
          </div>
          <Image
            src={waterLogo}
            alt="logo"
            className="w-[145px] sm:w-[359px] h-[124px] sm:h-[306px] absolute top-14 sm:top-20 left-10 sm:left-16"
          />
        </div>
      </div>
      <InterestRateSection />
      <div className='bg-backgroundLight2 py-14 sm:py-24 px-5 sm:px-0'>
        <WidthXL>
          <div className="flex flex-col sm:flex-row items-center sm:items-start  gap-10 sm:gap-0">
            <h2 className="w-full sm:w-1/4 font-poppins font-semibold text-[28px] sm:text-[46px] text-black text-center sm:text-start">Why Choose Corporate Fixed Deposits</h2>
            <div className="w-full sm:w-3/4 flex justify-center gap-10 flex-wrap ">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex flex-col items-center gap-[10px] w-[164px] sm:w-[231px]">
                  <Image src={benefit.icon.src} alt={benefit.title} width={60}
                    height={60}/>
                  <p className='font-lato font-semibold text-lg sm:text-2xl text-center text-wrap'>{benefit.title}</p>
                  <p className='font-lato text-sm sm:text-lg text-center text-wrap'>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </WidthXL>
      </div>
      <FAQSection/>
      {/* Card */}
      <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
        <WidthXXL>
          <div className=" bg-primary rounded-[60px] flex flex-col items-center justify-center gap-8 py-14 sm:py-24 relative px-5">
            <p className="font-poppins font-bold sm:font-extrabold text-2xl sm:text-5xl text-gray-50 text-center">
              Ready to Invest?
            </p>
            <div className="w-full sm:w-[756px]">
              <p className="w-full font-lato font-medium text-[20px] text-wrap text-center text-gray-100">
                Get personalized advice from our expert advisors  and secure
                your investment in corporate fixed deposits!
              </p>
            </div>

            <Link
             href="https://calendly.com/llprupeestop/30min"
            target="_blank"
            className="flex items-center bg-accentLime p-2 pl-6 pr-2 rounded-full z-5">
              <p className="text-black font-semibold text-base capitalize">
                Chat With Us
              </p>
              <span className="bg-gray-50 rounded-full text-black p-2 ml-4">
                <GoArrowRight size={25} />
              </span>
            </Link>

            {/* Big circle */}
            <div className="absolute -left-8 sm:-left-14 -top-14 sm:-top-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -left-8 sm:-left-20 -top-14  sm:-top-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* For BOttom */}
            {/* Big circle */}
            <div className="absolute -right-8 sm:-right-14 -bottom-14 sm:-bottom-20 w-[170px] sm:w-[400px] h-[170px] sm:h-[400px] rounded-full border-white border-[1px] opacity-25"></div>

            {/* small circle */}
            <div className="absolute -right-8 sm:-right-20 -bottom-14  sm:-bottom-20 w-[120px] sm:w-[300px] h-[120px] sm:h-[300px] rounded-full border-white border-[1px] opacity-25"></div>
          </div>
        </WidthXXL>
      </div>
    </div>
  );
}

export default page;
