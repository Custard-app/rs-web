import WidthXL from '@/wrapper/widths/WidthXL';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/Logo.png';
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className='bg-primary border-b border-black'>
      <WidthXL>
        <div className='flex items-center justify-between py-5'>
          <Link href="/" passHref>
            <Image src={logo} alt="Rupeestop" width={195} height={34} />
          </Link>
          <div className='space-x-4 text-accentGray-100 flex gap-6 items-center text-base font-bold'>
            <Link href="/aboutus">About Us</Link>
            <Link href="/instruments" className='flex items-center gap-2'>Instruments<span><IoIosArrowDown size={20}/></span></Link>
            <Link href="/calculators" className='flex items-center gap-2'>Calculators<span><IoIosArrowDown size={20}/></span></Link>
            <Link href="/community">Community</Link>
            <Link href="/login" className='bg-accentOrange-200 p-2 px-4 text-base font-medium text-white rounded-3xl text-center'>Login</Link>
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default Navbar;
