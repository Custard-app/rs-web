import React from 'react';
import Marquee from 'react-fast-marquee';
import axis from '@/assets/rupeestop_assets/Fixed Deposits/Images/axis.png';
import adityabirla from '@/assets/rupeestop_assets/Fixed Deposits/Images/adityabirla.jpeg';
import shriram from '@/assets/rupeestop_assets/Fixed Deposits/Images/shriram.png';
import sbi from '@/assets/rupeestop_assets/Fixed Deposits/Images/sbi.jpg';
import navi from '@/assets/rupeestop_assets/Fixed Deposits/Images/navi.png';
import nippon from '@/assets/rupeestop_assets/Fixed Deposits/Images/nippon.png';
import kotak from '@/assets/rupeestop_assets/Fixed Deposits/Images/kotak.png';
import jm from '@/assets/rupeestop_assets/Fixed Deposits/Images/jm.jpg';
import bandhan from '@/assets/rupeestop_assets/Fixed Deposits/Images/bandhan.png';
import pnb from '@/assets/rupeestop_assets/Fixed Deposits/Images/pnb.png';

function MfMarquee() {
  return (
    <div className="relative overflow-hidden">
      {/* Left Gradient */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      {/* Right Gradient */}
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Marquee Component */}
      <Marquee speed={50} gradient={false} >
        <img src={axis.src} alt="Axis Mutual Fund" className="mx-4 w-40" />
        <img src={adityabirla.src} alt="Aditya Birla Mutual Fund" className="mx-4 w-40" />
        <img src={shriram.src} alt="Shriram Mutual Fund" className="mx-4 w-40" />
        <img src={sbi.src} alt="SBI Mutual Fund" className="mx-4 w-40" />
        <img src={navi.src} alt="Navi Mutual Fund" className="mx-4 w-40" />
        <img src={nippon.src} alt="Nippon Mutual Fund" className="mx-4 w-40" />
        <img src={kotak.src} alt="Kotak Mutual Fund" className="mx-4 w-40" />
        <img src={jm.src} alt="JM Mutual Fund" className="mx-4 w-40" />
        <img src={bandhan.src} alt="Bandhan Mutual Fund" className="mx-4 w-40" />
        <img src={pnb.src} alt="PNB Mutual Fund" className="mx-4 w-40" />
      </Marquee>
    </div>
  );
}

export default MfMarquee;
