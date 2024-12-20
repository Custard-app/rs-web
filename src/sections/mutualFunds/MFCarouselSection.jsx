import WidthXL from '@/wrapper/widths/WidthXL';
import AnimatedCards from './carousel/AnimatedCards';

function MFCarouselSection() {
  return (
    <div className="bg-white py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <div className="flx flex-col">
          <h1 className="font-poppins font-semibold text-3xl sm:text-5xl text-950 text-center mb-5">
            Ways to Invest in Mutual Funds
          </h1>
          <p className="font-lato font-medium text-sm sm:text-lg text-gray-600 text-center">
            Choose from various investment methods with Rupeestop to suit your
            financial goals and strategy.
          </p>
          <div className='mt-10'>
            <AnimatedCards />
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default MFCarouselSection;
