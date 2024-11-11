import React from 'react';
import Image from 'next/image';
import './QuickCards.css';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

const QuickCards = ({ product }) => {
  return (
    <div className="peer group relative w-full sm:w-[290px] h-[200px] sm:h-[376px] rounded-tr-[50px] rounded-br-[30px] rounded-bl-[30px] text-black  overflow-hidden transform transition-all duration-300 sm:hover:w-[330px] hover:animate-wiggle py-8 px-5 flex flex-row sm:flex-col justify-between sm:justify-center items-center gap-6">
      <div className="absolute w-full inset-0 bg-accentGray-400 rounded-tr-md rounded-br-md rounded-bl-md"></div>
      <div className="z-10">
        <Image
          src={product.image}
          alt="Product Image"
          width={120}
          height={120}
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center text-black h-full gap-4">
        <h3 className="text-xl font-semibold font-lato text-center">{product.heading}</h3>
        <p className="text-base font-lato italic text-center">{product.content}</p>
        <Link href="#" className='w-full flex justify-end items-center text-primary font-lato font-medium italic text-base gap-2'>Learn More <span><GoArrowRight size={30}/></span></Link>
      </div>
    </div>
  );
};

export default QuickCards;
