import WidthXXL from '@/wrapper/widths/WidthXXL';

function HeroSection() {
  return (
    <div className="w-full bg-primary py-44 px-5 sm:px-0">
      <WidthXXL>
        <div className='w-full'>
          <h1 className="font-poppins font-bold text-3xl sm:text-7xl text-wrap text-white text-center flex flex-col gap-2">
            Your Trusted Partners in
            <span> Simplifying Investment Decisions!</span>
          </h1>
        </div>
      </WidthXXL>
    </div>
  );
}

export default HeroSection;
