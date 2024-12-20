// 'use client';
// import WidthXL from '@/wrapper/widths/WidthXL';
// import React, { useEffect, useRef, useState } from 'react';
// import './JourneyMFSection.css';

// const cards = [
//   {
//     title: 'Assess Your Goals',
//     description: 'Determine your investment objectives and risk tolerance.',
//   },
//   {
//     title: 'Choose the Right Fund',
//     description:
//       'Select from debt, liquid, equity, or gold funds based on your goals.',
//   },
//   {
//     title: 'Start Investing',
//     description:
//       'Begin with a minimum amount and increase as you gain confidence.',
//   },
// ];

// function JourneyMFSection() {
//   const sectionRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         } else {
//           setIsInView(false);
//         }
//       },
//       {
//         threshold: 0.5, 
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-primary py-14 sm:py-24 px-5 sm:px-0" ref={sectionRef}>
//       <WidthXL>
//         <div className="flex flex-col sm:flex-row items-center justify-between relative gap-16">
//           {/* Left Text Section */}
//           <div className="w-full sm:w-1/2">
//             <h1 className="font-poppins font-semibold text-[32px] sm:text-[42px] text-white mb-3 text-center sm:text-start">
//               Start Your Mutual Fund Journey in 3 Easy Steps!
//             </h1>
//             <p className="font-lato font-medium text-sm sm:text-lg text-gray-200 text-center sm:text-start">
//               Get started with mutual fund investing through Rupeestop’s easy
//               process. It’s simple, smart, and secure with us by your side.
//             </p>
//           </div>

//           {/* Right Card Section */}
//           <div className={`w-full sm:w-1/2 relative flex flex-col items-center gap-10 ${
//                   isInView ? 'timeline' : ''}`} >
//             {/* Cards */}
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`relative flex items-center gap-4 opacity-0 ${
//                   isInView ? 'container' : ''
//                 }`}
//               >
//                 <div className='w-3 h-3 rounded-full bg-white'></div>
//                 <div className=' px-6 py-[10px] w-[323px] sm:w-[535px] h-[125px] sm:h-[120px] bg-[#FFFBF7] rounded-[12px] flex items-center gap-4'>
//                   <p className="p-1 px-2 bg-accentOrange-200 text-white rounded-full font-lato font-semibold">
//                     0{index + 1}
//                   </p>
//                   <div className="w-full ">
//                     <p className="font-lato font-medium text-[20px] text-start text-black">
//                       {card.title}
//                     </p>
//                     <p className="font-lato text-lg text-gray-600 text-start">
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </WidthXL>
//     </div>
//   );
// }

// export default JourneyMFSection;



'use client';
import WidthXL from '@/wrapper/widths/WidthXL';
import { useEffect, useRef, useState } from 'react';
import './JourneyMFSection.css';

const cards = [
  {
    title: 'Assess Your Goals',
    description: 'Determine your investment objectives and risk tolerance.',
  },
  {
    title: 'Choose the Right Fund',
    description:
      'Select from debt, liquid, equity, or gold funds based on your goals.',
  },
  {
    title: 'Start Investing',
    description:
      'Begin with a minimum amount and increase as you gain confidence.',
  },
];

function JourneyMFSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);  

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setIsInView(true);
          setHasBeenSeen(true);  
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasBeenSeen]);  

  return (
    <div className="bg-primary py-14 sm:py-24 px-5 sm:px-0" ref={sectionRef}>
      <WidthXL>
        <div className="flex flex-col sm:flex-row items-center justify-between relative gap-16">
          {/* Left Text Section */}
          <div className="w-full sm:w-1/2">
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[42px] text-white mb-3 text-center sm:text-start">
              Start Your Mutual Fund Journey in 3 Easy Steps!
            </h1>
            <p className="font-lato font-medium text-sm sm:text-lg text-gray-200 text-center sm:text-start">
              Get started with mutual fund investing through Rupeestop’s easy
              process. It’s simple, smart, and secure with us by your side.
            </p>
          </div>

          {/* Right Card Section */}
          <div className={`w-full sm:w-1/2 relative flex flex-col items-center gap-10 ${isInView ? 'timeline' : ''}`}>
            {/* Cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-4 ${isInView ? 'container' : ''}`}
              >
                <div className='w-3 h-3 rounded-full bg-white'></div>
                <div className='px-6 py-[10px] w-[323px] sm:w-[535px] h-[125px] sm:h-[120px] bg-[#FFFBF7] rounded-[12px] flex items-center gap-4'>
                  <p className="p-1 px-2 bg-accentOrange-200 text-white rounded-full font-lato font-semibold">
                    0{index + 1}
                  </p>
                  <div className="w-full">
                    <p className="font-lato font-medium text-[20px] text-start text-black">
                      {card.title}
                    </p>
                    <p className="font-lato text-lg text-gray-600 text-start">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default JourneyMFSection;
