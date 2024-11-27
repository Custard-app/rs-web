import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';
import React from 'react';
import usephcimage from '@/assets/images/usephcimage.png';

function UsePhcSection() {
  return (
    <div className="py-14 sm:py-24 px-5 sm:px-0 bg-white">
      <WidthXL>
        <h1 className="font-poppins font-semibold text-[32px] sm:text-5xl text-center mb-10 sm:mb-20 text-wrap">
          Why Use the Portfolio Health Checker?
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex gap-3">
            {/* card 1 */}
            <div className="bg-backgroundLight3 p-3 sm:p-4 rounded-[12px] flex flex-col items-center justify-center gap-2 w-[168px] sm:w-[210px] h-[176px] sm:h-[252px]">
              <h2 className="font-lato font-bold text-lg sm:text-2xl text-center">
                Optimize Returns
              </h2>
              <p className="font-lato font-medium text-sm sm:text-lg text-center">
                Ensure you&#39;re getting the best possible returns based on your
                risk tolerance and investment goals.
              </p>
            </div>

            {/* card 2 */}
            <div className="bg-backgroundLight3 p-3 sm:p-4 rounded-[12px] flex flex-col items-center justify-center gap-2 w-[168px] sm:w-[210px] h-[176px] sm:h-[252px]">
              <h2 className="font-lato font-bold text-lg sm:text-2xl text-center">
                Identify Gaps
              </h2>
              <p className="font-lato font-medium text-sm sm:text-lg text-center">
                Find out where your portfolio might be lacking and get
                recommendations for balancing your investments.
              </p>
            </div>
          </div>

          <Image
            src={usephcimage}
            alt="image"
            className="object-cover w-[353px] sm:w-[281px] h-[331px] sm:h-[421px] rounded-[20px]"
          />

          <div className="flex gap-3">
            {/* card 3 */}
            <div className="bg-backgroundLight3 p-3 sm:p-4 rounded-[12px] flex flex-col items-center justify-center gap-2 w-[168px] sm:w-[210px] h-[176px] sm:h-[252px]">
              <h2 className="font-lato font-bold text-lg sm:text-2xl text-center">
                Stay Updated
              </h2>
              <p className="font-lato font-medium text-sm sm:text-lg text-center">
                Monitor market trends closely to understand their influence on
                your portfolio&#39;s performance
              </p>
            </div>

            {/* card 4 */}
            <div className="bg-backgroundLight3 p-3 sm:p-4 rounded-[12px] flex flex-col items-center justify-center gap-2 w-[168px] sm:w-[210px] h-[176px] sm:h-[252px]">
              <h2 className="font-lato font-bold text-lg sm:text-2xl text-center">
                Comprehensive Analysis
              </h2>
              <p className="font-lato font-medium text-sm sm:text-lg text-center">
                Receive an in-depth analysis of your portfolio&#39;s overall
                performance and growth potential.
              </p>
            </div>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default UsePhcSection;
