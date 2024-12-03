'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';


const cardData = [
  {
    title: 'SIP Calculator',
    description: 'Calculate the future value of your SIP investments.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Lump Sum Calculator',
    description: 'Determine the maturity amount of a one-time investment.',
    buttonText: 'Calculate Now',
  },
  {
    title: 'Tax Saving Calculator',
    description: 'Plan your tax savings with ease.',
    buttonText: 'Calculate Now',
  },
];

const ExploreCalculatorsSection = () => {
  return (
    <div className="bg-white pb-14 sm:pb-24 pt-0 sm:pt-24 px-5 sm:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1 className="font-poppins font-semibold text-[42px] text-wrap text-center sm:text-left">
              Effortlessly Calculate Your Mutual Fund Returns
            </h1>
            <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 px-4 outline-none font-lato font-semibold text-[16px]">
              Explore All Calculators
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            
            }}
            pagination={{el:'', clickable: true}}
            effect={'coverflow'}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={'auto'} 
            centeredSlides={true} 
            coverflowEffect={
              {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
              }
            }
            // pagination={{ clickable: true }}
            className="w-full sm:w-2/3 mt-8 sm:mt-0"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[280px] h-[420px] bg-[#fff8f2]">
                  {/* Card */}
                  <div className="w-full h-full rounded-xl shadow-lg flex flex-col items-start justify-between p-5">
                    <div className="w-[95px] h-[95px] bg-[#C4C4C4] rounded-full"></div>
                    <div>
                      <h2 className="font-lato text-2xl font-semibold text-black">
                        {card.title}
                      </h2>
                      <p className="font-lato text-lg text-primary mt-2">
                        {card.description}
                      </p>
                    </div>
                    <button className="w-full border-2 border-accentOrange-200 text-black rounded-full p-2 px-4">
                      {card.buttonText}
                    </button>
                  </div>

                  {/* Fade Overlay for Next Card */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ExploreCalculatorsSection;
