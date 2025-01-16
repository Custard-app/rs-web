import AboutSection from '@/sections/aboutUs/AboutSection';
import JobOpeningCard from '@/sections/aboutUs/cards/JobOpeningCard';
import HeroSection from '@/sections/aboutUs/HeroSection';
import MapDataSection from '@/sections/aboutUs/MapDataSection';
import TeamSection from '@/sections/aboutUs/TeamSection';
import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';

const datas = [
  {
    title: 'Investment Advisor',
    description:
      'Provide personalized financial advice, helping clients make informed investment decisions to achieve their goals. Ideal for those passionate about simplifying finance and delivering tailored strategies.',
  },
  {
    title: 'Financial Analyst',
    description:
      'Provide personalized financial advice, helping clients make informed investment decisions to achieve their goals. Ideal for those passionate about simplifying finance and delivering tailored strategies.',
  },
  {
    title: 'Marketing Specialist',
    description:
      'Provide personalized financial advice, helping clients make informed investment decisions to achieve their goals. Ideal for those passionate about simplifying finance and delivering tailored strategies.',
  },
  {
    title: 'Customer Support Executive',
    description:
      'Provide personalized financial advice, helping clients make informed investment decisions to achieve their goals. Ideal for those passionate about simplifying finance and delivering tailored strategies.',
  },
];

function AboutUs() {
  return (
    <div>
      <main className="bg-white overflow-hidden">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <MapDataSection />
        <div className="w-full bg-backgroundLight2 py-14 sm:py-24 px-5 sm:px-0 overflow-hidden ">
          <WidthXL>
            <div className=" px-2 sm:px-7 py-5 sm:py-7 flex flex-col gap-10 items-center">
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-poppins font-semibold text-4xl sm:text-[42px] text-gray-900 text-center">
                  Joining the Team?
                </h2>
                <p className="font-lato font-medium text-sm sm:text-lg text-gray-800 text-center">
                  We are always on the lookout for passionate and driven
                  individuals to join our growing team. If you&#39;re excited
                  about working in a collaborative, innovative environment with
                  growth opportunities, reach out to us and make an impact in
                  the world of finance.
                </p>
                <p className="font-lato text-xs sm:text-base text-gray-600 text-center">
                  *Send your resume and cover letter to{' '}
                  <Link href="#" className="text-primary underline">
                  info@rupeestop.com
                  </Link>{' '}
                  or click the button below to apply online.
                </p>
              </div>
              <p className="w-full font-lato font-bold text-2xl text-black  items-start mb-10 hidden">
                Current Openings
              </p>
              <div className=" flex-col sm:flex-row gap-4 sm:gap-10 hidden">
                {datas.map((data, index) => (
                  <JobOpeningCard data={data} key={index} />
                ))}
              </div>
            </div>
          </WidthXL>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
