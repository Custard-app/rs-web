// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import lumsum from '@/assets/icons/lumsum.png';
// import sip from '@/assets/icons/sip.png';
// import swp from '@/assets/icons/swp.png';
// import stp from '@/assets/icons/stp.png';
// import clsx from 'clsx';

// const AnimatedCards = () => {
//   const cardsRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // Detect when cards come into view using IntersectionObserver
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.5 },
//     );
//     if (cardsRef.current) {
//       observer.observe(cardsRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   const cardData = [
//     {
//       title: 'Systematic Transfer Plan (STP)',
//       image: lumsum,
//       description: 'Transfer funds from one scheme to another.',
//     },
//     {
//       title: 'Systematic Investment Plan (SIP)',
//       image:sip,
//       description: 'Regular investments in fixed amounts.',
//     },
//     {
//       title: 'Systematic Withdrawal Plan (SWP)',
//       image:swp,
//       description: 'Regular withdrawals from your investment.',
//     },
//     {
//       title: 'Systematic Transfer Plan (STP)',
//       image:stp,
//       description: 'Transfer of funds from one scheme to another.',
//     },
//   ];

//   return (
//     <div
//       ref={cardsRef}
//       className="relative w-full h-auto flex flex-col sm:flex-row justify-start items-center overflow-hidden gap-4"
//     >
//       {cardData.map((card, index) => (
//         <div
//           key={index}
//           className={clsx(
//             'transition-all duration-1000 ease-in-out',
//             inView
//               ? `translate-x-0 sm:translate-y-0 translate-x-[${
//                   (index + 1) * 20
//                 }rem]`
//               : 'translate-x-[-100%] sm:translate-y-[-100%]',
//           )}
//           style={{ transitionDelay: `${index * 100}ms` }}
//         >
//           <div className="w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5">
//             <Image src={card.image.src} alt={card.title} className=' object-contain' width={70} height={70}/>
//             <div>
//             <h2 className="text-xl fonla font-semibold text-gray-50 mb-2 text-center sm:text-start">
//               {card.title}
//             </h2>
//             <p className="font-lato text-lg text-gray-100 text-center sm:text-start">
//               {card.description}
//             </p>
//             </div>
//             <div className="flex justify-center items-center">
//               <button className="px-8 py-2 bg-[#C1F558] font-lato font-semibold text-[20px] text-black rounded-3xl">
//                 Invest Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedCards;

'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import lumsum from '@/assets/icons/lumsum.png';
import sip from '@/assets/icons/sip.png';
import swp from '@/assets/icons/swp.png';
import stp from '@/assets/icons/stp.png';
import clsx from 'clsx';

const AnimatedCards = () => {
  const cardsRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Detect when cards come into view using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 },
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const cardData = [
    {
      title: 'Systematic Transfer Plan (STP)',
      image: lumsum,
      description: 'Transfer funds from one scheme to another.',
    },
    {
      title: 'Systematic Investment Plan (SIP)',
      image: sip,
      description: 'Regular investments in fixed amounts.',
    },
    {
      title: 'Systematic Withdrawal Plan (SWP)',
      image: swp,
      description: 'Regular withdrawals from your investment.',
    },
    {
      title: 'Systematic Transfer Plan (STP)',
      image: stp,
      description: 'Transfer of funds from one scheme to another.',
    },
  ];

  return (
    <div
      ref={cardsRef}
      className="relative w-full h-auto flex flex-col sm:flex-row justify-start items-center overflow-hidden gap-4 sm:gap-8"
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          className={clsx(
            'transition-all duration-1000 ease-in-out',
            inView
              ? `translate-y-[${(index + 1) * 20}rem] sm:translate-x-[${
                  (index + 1) * 20
                }rem]`
              : 'translate-y-[-420%] sm:translate-x-[-420%]',
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="w-[280px] h-[360px] bg-primary rounded-[12px] flex flex-col items-center gap-4 py-10 px-5">
            <Image
              src={card.image.src}
              alt={card.title}
              className="object-contain"
              width={70}
              height={70}
            />
            <div>
              <h2 className="text-xl fonla font-semibold text-gray-50 mb-2 text-center sm:text-start">
                {card.title}
              </h2>
              <p className="font-lato text-lg text-gray-100 text-center sm:text-start">
                {card.description}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-8 py-2 bg-[#C1F558] font-lato font-semibold text-[20px] text-black rounded-3xl">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCards;
