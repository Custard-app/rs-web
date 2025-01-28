import React from 'react';
import Marquee from 'react-fast-marquee';
import axis from '@/assets/rupeestop_assets/Fixed Deposits/Images/axis.png';
import adityabirla from '@/assets/rupeestop_assets/Fixed Deposits/Images/adityabirla.jpeg';
import invesco from '@/assets/rupeestop_assets/Fixed Deposits/Images/Invesco.webp';
import sbi from '@/assets/rupeestop_assets/Fixed Deposits/Images/sbi.jpg';
import navi from '@/assets/rupeestop_assets/Fixed Deposits/Images/navi.png';
import nippon from '@/assets/rupeestop_assets/Fixed Deposits/Images/nippon.png';
import kotak from '@/assets/rupeestop_assets/Fixed Deposits/Images/kotak.png';
import ppfas from '@/assets/rupeestop_assets/Fixed Deposits/Images/ppfas.webp';
import bandhan from '@/assets/rupeestop_assets/Fixed Deposits/Images/bandhan.png';
import icici from '@/assets/rupeestop_assets/Fixed Deposits/Images/icici.jpg';

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
        <img src={invesco.src} alt="Invesco Mutual Fund" className="mx-4 w-40" />
        <img src={sbi.src} alt="SBI Mutual Fund" className="mx-4 w-40" />
        <img src={navi.src} alt="Navi Mutual Fund" className="mx-4 w-40" />
        <img src={nippon.src} alt="Nippon Mutual Fund" className="mx-4 w-40" />
        <img src={kotak.src} alt="Kotak Mutual Fund" className="mx-4 w-40" />
        <img src={ppfas.src} alt="Parag Parikh Mutual Fund" className="mx-4 w-40" />
        <img src={bandhan.src} alt="Bandhan Mutual Fund" className="mx-4 w-40" />
        <img src={icici.src} alt="Icici Mutual Fund" className="mx-4 w-40" />
      </Marquee>
    </div>
  );
}

export default MfMarquee;
