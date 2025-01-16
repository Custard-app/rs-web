import moneyBonds from '@/assets/images/bonds-money.png';
import building from '@/assets/images/building.png';
import pexels from '@/assets/images/pexels-rdne.png';
import WidthXL from '@/wrapper/widths/WidthXL';
import Image from 'next/image';

export default function BasicbondSection() {
  return (
    <div className="py-14 sm:py-24 px-5 sm:px-0 bg-white">
        <WidthXL>
            <h1 className='font-poppins font-bold text-[32px] sm:text-[52px] text-start mb-10'>Basics of Bond</h1>
            <div className='flex gap-10 flex-col-reverse sm:flex-row'>
                <div className='bg-noen sm:bg-backgroundLight3 py-10 sm:py-20 px-5 sm:px-10 rounded-[20px] font-lato font-semibold text-lg sm:text-[20px]'>
                    <p>You can invest in fixed income instruments issued by various financial institutions, banks, corporations, state and municipal corporations, or the central government, with the promise of getting your principal back along with <strong>regular interest payments.</strong></p>

                    <p>These bonds also trade in the secondary market, where you can <strong>buy and sell them even before maturity.</strong> Their prices may be impacted by interest rate movements; as interest rates rise, bond prices fall, and vice versa. However, if you hold your bond until maturity, the principal along with the <strong>promised interest will be paid in full.</strong></p>
                </div>
                <div className='bg-primary py-5 sm:py-12 px-5 sm:px-7 flex flex-col gap-[26px] rounded-[20px]'>
                    <div className='w-full sm:w-[427px] h-full sm:h-[300px] flex gap-3'>
                        <Image src={moneyBonds} alt='images' className='h-[214px] sm:h-full w-[143px] sm:w-[195px] rounded-[10px]'/>
                        <div className='flex flex-col gap-3'>
                            <Image src={building} alt='images' className='w-[175px] sm:w-[222px] h-[102px] sm:h-[140px] rounded-[10px]'/>
                            <Image src={pexels} alt='images' className='w-[175px] sm:w-[222px] h-[102px] sm:h-[140px] rounded-[10px]'/>
                        </div>
                    </div>
                    <p className='font-lato font-extrabold text-[32px] sm:text-[38px] text-start text-white italic'>Steady returns, guaranteed principal!</p>
                </div>
            </div>
        </WidthXL>
    </div>
  )
}
