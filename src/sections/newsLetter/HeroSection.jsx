// import heroImage from '@/assets/images/newsletter-hero-image.png';
// import Image from 'next/image';
// import React from 'react';
// import { FiMail } from 'react-icons/fi';

// function HeroSection() {
//   return (
//     <div className="relative h-full sm:h-[100vh] flex flex-col items-center justify-center px-5 sm:px-0 ">
//       <div className="max-w-5xl flex flex-col items-center justify-center gap-3 sm:gap-5 z-10 py-20">
//         <h1 className="font-poppins font-bold text-[32px] sm:text-7xl text-center text-white mt-10 sm:mt-20">
//           Your friendly neighborhood Personal finance advisor
//         </h1>
//         <p className="font-lato font-medium text-[16px] sm:text-[20px] text-wrap text-center text-white">
//           Join 1400+ people who subscribed to get wealthy.
//         </p>
//         <div className="flex items-center gap-4 flex-col sm:flex-row">
//             <div className="flex items-start justify-center backdrop-blur-sm rounded-full border border-white">
//               <div className="relative w-full max-w-md flex items-center justify-between">
//                 {/* Email Icon and Placeholder */}
//                 <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
//                   <FiMail className="text-gray-100" />
//                 </div>

//                 {/* Input Field */}
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="block w-[380px] sm:w-[500px] py-4 pl-10 rounded-full bg-transparent text-white outline-none placeholder-white placeholder-opacity-80"
//                 />
//               </div>
//             </div>
//             <button className="relative flex items-center justify-center w-[80%] sm:w-full bg-[#698f1c] py-[12px] px-5 rounded-full z-5 appearance-none border-transparent border-b-[6px] font-bold text-black text-[20px] capitalize transform transition-transform duration-200">
//               <p>Subscribe to Newsletter</p>
//               <span className="absolute inset-0 rounded-full bg-accentLime border-transparent border-b-4 -z-10"></span>
//             </button>
//           </div>
//       </div>

//       {/*(Image with Overlay) */}
//       <div className=" absolute inset-y-0 right-0 top-0 w-full h-[80vh] sm:h-[100vh] z-0 ">
//         <Image
//           src={heroImage}
//           alt="Background"
//           layout="fill"
//           objectFit='cover'
//           className="z-0 object-cover"
//         />
//         {/* Overlay */}
//         <div className="absolute -inset-0 bg-[#212121] opacity-10"></div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

'use client'
import React, { useRef, useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';

function HeroSection() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = [
    '/videos/video-1.mp4',
    '/videos/video-2.mp4',
    '/videos/video-3.mp4',
  ];

  useEffect(() => {
    // Play the first video when the component loads
    if (videoRefs[0].current) videoRefs[0].current.play();

    // Event listener for handling video transitions
    const handleVideoEnd = (index) => {
      const nextVideo = (index + 1) % videoRefs.length; // Calculate the next video index
      setCurrentVideo(nextVideo);
      videoRefs[nextVideo].current.play();
    };

    // Add event listeners for all videos
    videoRefs.forEach((videoRef, index) => {
      const video = videoRef.current;
      if (video) {
        video.addEventListener('ended', () => handleVideoEnd(index));
      }
    });

    // Cleanup event listeners on unmount
    return () => {
      videoRefs.forEach((videoRef) => {
        const video = videoRef.current;
        if (video) {
          video.removeEventListener('ended', () => handleVideoEnd);
        }
      });
    };
  }, [videoRefs]);

  return (
    <div className="relative h-full sm:h-[100vh] flex flex-col items-center justify-center px-5 sm:px-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSources.map((videoSrc, index) => (
          <video
            key={index}
            ref={videoRefs[index]}
            muted
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              currentVideo === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center justify-center gap-3 sm:gap-5 py-20">
        <h1 className="font-poppins font-bold text-[32px] sm:text-7xl text-center text-white mt-10 sm:mt-20">
          Your friendly neighborhood Personal finance advisor
        </h1>
        <p className="font-lato font-medium text-[16px] sm:text-[20px] text-wrap text-center text-white">
          Join 1400+ people who subscribed to get wealthy.
        </p>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="flex items-start justify-center backdrop-blur-sm rounded-full border border-white">
            <div className="relative w-full max-w-md flex items-center justify-between">
              {/* Email Icon and Placeholder */}
              <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-100" />
              </div>

              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-[380px] sm:w-[500px] py-4 pl-10 rounded-full bg-transparent text-white outline-none placeholder-white placeholder-opacity-80"
              />
            </div>
          </div>
          <button className="relative flex items-center justify-center w-[80%] sm:w-full bg-[#698f1c] py-[12px] px-5 rounded-full z-5 appearance-none border-transparent border-b-[6px] font-bold text-black text-[20px] capitalize transform transition-transform duration-200">
            <p>Subscribe to Newsletter</p>
            <span className="absolute inset-0 rounded-full bg-accentLime border-transparent border-b-4 -z-10"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
