import assets from '@/assets/images/assets.png'
import calender from '@/assets/images/calender.png'
import client from '@/assets/images/client.png'
import mapIndia from '@/assets/images/mapIndia.png'
import WidthXL from '@/wrapper/widths/WidthXL'
import Image from 'next/image'


function MapDataSection() {
  return (
    <div className='bg-primary px-5 sm:px-0 py-10'>
        <WidthXL>
            <div className='w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-0'>

                {/* card */}
                <div className='flex flex-col gap-4 sm:gap-5'>
                    {/* Card-1 */}
                    <div className='w-[353px] sm:w-[483px] h-[141px] sm:h-[190px] flex items-center gap-6 py-5 sm:py-10  px-5 sm:px-12 rounded-[10px] bg-[#FFF9F2]'>
                        <Image src={assets} alt="total assets" className='w-20 sm:w-32'/>
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <p className='font-lato font-bold text-5xl text-accentOrange-200'>$50M</p>
                            <p className='font-lato font-semibold text-lg'>Total Assets Managed</p>
                        </div>
                    </div>

                    {/* Card-2 */}
                    <div className='w-[353px] sm:w-[483px] h-[141px] sm:h-[190px] flex items-center gap-6 py-5 sm:py-10  px-5 sm:px-12 rounded-[10px] bg-[#FFF9F2]'>
                        <Image src={calender} alt="total assets" className='w-20 sm:w-32'/>
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <p className='font-lato font-bold text-5xl text-accentOrange-200'>10+</p>
                            <p className='font-lato font-semibold text-lg'>Years of Experience </p>
                        </div>
                    </div>

                    {/* Card-3 */}
                    <div className='w-[353px] sm:w-[483px] h-[141px] sm:h-[190px] flex items-center gap-6 py-5 sm:py-10  px-5 sm:px-12 rounded-[10px] bg-[#FFF9F2]'>
                        <Image src={client} alt="total assets" className='w-20 sm:w-32'/>
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <p className='font-lato font-bold text-5xl text-accentOrange-200'>500+</p>
                            <p className='font-lato font-semibold text-lg'>Total Happy Clients</p>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div>
                    <Image src={mapIndia} alt="India map"/>
                </div>
            </div>
        </WidthXL>
    </div>
  )
}

export default MapDataSection