import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import octiconGoal from '@/assets/icons/octicon_goal.png';
import hexagon from '@/assets/icons/mdi_professional-hexagon.png';
import cil_zoom from '@/assets/icons/cil_zoom.png';
import foundation_torso from '@/assets/icons/foundation_torso-business.png';
import ph_fediverse from '@/assets/icons/ph_fediverse-logo-fill.png';

function WhyPmsSection() {
  return (
    <div className="py-14 sm:py-24 px-5 sm:px-0 bg-primary">
      <WidthXL>
        <div className='flex flex-col gap-5 sm:gap-14'>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
            <h1 className="font-poppins font-semibold text-3xl sm:text-5xl text-wrap text-white text-center sm:text-start">
              Why Choose Portfolio Management System?
            </h1>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
              {/* card 1 */}
              <div className="w-[353px] sm:w-[308px] h-[200px] flex items-start gap-4 p-4 rounded-lg bg-[#ECFFFE]">
                <Image
                  src={octiconGoal}
                  alt="icon"
                  className="w-[23px] sm:w-[32px] "
                />
                <div className="flex flex-col items-start gap-3">
                  <p className="font-lato font-bold text-[20px] sm:text-[22px] text-black text-start text-wrap">
                    Customized Investment Solutions
                  </p>
                  <p className="font-lato font-medium text-base sm:text-[20px] text-gray-800 text-wrap text-start">
                    Tailored to meet your unique financial goals.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="w-[353px] sm:w-[308px] h-[200px] flex items-start gap-4 p-4 rounded-lg bg-[#ECFFFE]">
                <Image
                  src={hexagon}
                  alt="icon"
                  className="w-[23px] sm:w-[32px] "
                />
                <div className="flex flex-col items-start gap-3">
                  <p className="font-lato font-bold text-[20px] sm:text-[22px] text-black text-start text-wrap">
                    Expert Management{' '}
                  </p>
                  <p className="font-lato font-medium text-base sm:text-[20px] text-gray-800 text-wrap text-start">
                    Managed by experienced professionals with a deep market
                    insights{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-end gap-5 sm:gap-8'>
            {/* card 3 */}
            <div className="w-[353px] sm:w-[308px] h-[200px] flex items-start gap-4 p-4 rounded-lg bg-[#ECFFFE]">
              <Image
                src={ph_fediverse}
                alt="icon"
                className="w-[23px] sm:w-[32px] "
              />
              <div className="flex flex-col items-start gap-3">
                <p className="font-lato font-bold text-[20px] sm:text-[22px] text-black text-start text-wrap">
                  Diversified Portfolio
                </p>
                <p className="font-lato font-medium text-base sm:text-[20px] text-gray-800 text-wrap text-start">
                  Balanced mix of equity and debt instruments to optimize
                  returns and manage risk.
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="w-[353px] sm:w-[308px] h-[200px] flex items-start gap-4 p-4 rounded-lg bg-[#ECFFFE]">
              <Image
                src={foundation_torso}
                alt="icon"
                className="w-[23px] sm:w-[32px] "
              />
              <div className="flex flex-col items-start gap-3">
                <p className="font-lato font-bold text-[20px] sm:text-[22px] text-black text-start text-wrap">
                  Higher Minimum Investment{' '}
                </p>
                <p className="font-lato font-medium text-base sm:text-[20px] text-gray-800 text-wrap text-start">
                  Ideal for high net worth investors and institutions seeking
                  investement opportunities
                </p>
              </div>
            </div>
            {/* card 5 */}
            <div className="w-[353px] sm:w-[308px] h-[200px] flex items-start gap-4 p-4 rounded-lg bg-[#ECFFFE]">
              <Image
                src={cil_zoom}
                alt="icon"
                className="w-[23px] sm:w-[32px] "
              />
              <div className="flex flex-col items-start gap-3">
                <p className="font-lato font-bold text-[20px] sm:text-[22px] text-black text-start text-wrap">
                  Continuous Monitoring{' '}
                </p>
                <p className="font-lato font-medium text-base sm:text-[20px] text-gray-800 text-wrap text-start">
                  Regular reviews and adjustments to align your portfolio with
                  market conditions and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default WhyPmsSection;
