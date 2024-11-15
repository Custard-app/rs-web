import React from 'react';
import Image from 'next/image';
import profileImg from '@/assets/images/profile1.png';
import { FaTwitter,FaLinkedin  } from 'react-icons/fa';
import Link from 'next/link';

function TeamCard() {
  return (
    <div className="w-full sm:w-[300px] h-[227px] sm:h-[400px] rounded-[20px] bg-white p-5 flex flex-col items-center gap-4">
      <div className='w-full flex items-start justify-between'>
        <div>
          <p className="font-lato font-medium text-[22px]">Full Name</p>
          <p className="font-lato text-base text-primary">Position</p>
        </div>
        <div className='flex items-center gap-2'>
            <Link href="#"><FaTwitter size={20}/></Link>
            <Link href="#"><FaLinkedin size={20}/></Link>
            
        </div>
      </div>
      <div className='w-full flex flex-row sm:flex-col items-center sm:justify-center gap-4'>
        <Image src={profileImg} alt="Full name" className='w-[100px] sm:w-40 h-[100px] sm:h-40' />
        <p className="font-lato italic text-xs sm:text-base text-center text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui
          libero, rhoncus in ullamcorper vitae, pharetra vel nisl. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere 
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
