import aboutImg from '@/assets/images/about1.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';

function AboutSection() {
  return (
    <div className="bg-white px-5 sm:px-0 py-14 sm:py-24 w-full">
      <WidthXL>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-11 sm:gap-0 relative">
          <div className="w-full sm:w-1/2 flex flex-col items-center-center sm:items-start flex-wrap gap-6">
            <h2 className="font-poppins font-semibold text-4xl sm:text-5xl text-center sm:text-start">
              About Rupeestop
            </h2>
            <p className="font-lato font-medium text-sm sm:text-xl text-wrap text-center sm:text-start">
              Rupeestop is a investment firm dedicated to simplifying
              investment decisions for individuals and institutions. Our mission
              is to provide comprehensive investment solutions that are tailored
              to meet the specific needs of our clients. With our diverse
              backgrounds and shared expertise, we aim to bridge the gap between
              complex financial instruments and everyday investors.
            </p>
          </div>
          <div className="w-full sm:w-[488px] h-[598px] bg-gray-500 rounded-3xl ">
            <Image
              src={aboutImg}
              alt="about image"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

            {/* All cards */}
          <div className="absolute top-64 left-4 sm:left-auto sm:top-4 sm:right-96 w-[206px] sm:w-[332px] h-[96px] sm:h-[112px] bg-white rounded-lg p-4 shadow-2xl flex items-start gap-3">
            <span className="p-1 px-2 bg-accentOrange-200 text-white rounded-full font-lato font-semibold">
              01
            </span>
            <div>
              <p className="font-lato font-medium text-sm sm:text-lg text-gray-800">
                Transparency
              </p>
              <p className="font-lato font-semibold text-xs sm:text-sm text-gray-700">
                We believe in clear and open communication
              </p>
            </div>
          </div>

          <div className="absolute top-[480px] -right-4 sm:top-44 sm:-right-20 w-[206px] sm:w-[332px] h-[110px] sm:h-[112px] bg-white rounded-lg p-4 shadow-2xl flex items-start gap-3">
            <span className="p-1 px-2 bg-accentOrange-200 text-white rounded-full font-lato font-semibold">
              02
            </span>
            <div>
              <p className="font-lato font-medium text-sm sm:text-lg text-gray-800">
              Expertise
              </p>
              <p className="font-lato font-semibold text-xs sm:text-sm text-gray-700">
              Our Team’s Varied experience ensure well-rounded financial plan              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-5 sm:left-auto sm:bottom-4 sm:right-96 w-[206px] sm:w-[332px] h-[96px] sm:h-[112px] bg-white rounded-lg p-4 shadow-2xl flex items-start gap-3">
            <span className="p-1 px-2 bg-accentOrange-200 text-white rounded-full font-lato font-semibold">
              03
            </span>
            <div>
              <p className="font-lato font-medium text-sm sm:text-lg text-gray-800">
              Client Centric
              </p>
              <p className="font-lato font-semibold text-xs sm:text-sm text-gray-700">
              We focus on the unique needs and goals of each client.              </p>
            </div>
          </div>

        </div>
      </WidthXL>
    </div>
  );
}

export default AboutSection;
