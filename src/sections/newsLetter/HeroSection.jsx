'use client'
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';

function HeroSection() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = [
    '/videos/output-1.mp4',
    '/videos/output-2.mp4',
    '/videos/output-3.mp4',
  ];

  useEffect(() => {
   
    if (videoRefs[0].current) videoRefs[0].current.play();

    
    const handleVideoEnd = (index) => {
      const nextVideo = (index + 1) % videoRefs.length; 
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
    <div className="relative h-[100vh] sm:h-[100vh] flex flex-col items-center justify-center px-5 sm:px-0 bg-gray-400">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSources.map((videoSrc, index) => (
          <video
            key={index}
            ref={videoRefs[index]}
            muted
            playsInline
            autoPlay
            preload={currentVideo === index ? "auto" : "none"}
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
          Your Friendly Neighbourhood Personal Finance Specialist.
        </h1>
        <p className="font-lato font-medium text-[16px] sm:text-[20px] text-wrap text-center text-white">
          Join 1400+ people who subscribed to get wealthy.
        </p>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="flex items-start justify-center backdrop-blur-sm rounded-full border border-white">
            <div className="relative w-full max-w-md  items-center justify-between hidden">
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
          <Link
          href="https://rupeesorted.substack.com/"
          target='_blank'
          className="relative flex items-center justify-center w-[100%] sm:w-full bg-[#698f1c] py-[12px] px-5 rounded-full z-5 appearance-none border-transparent border-b-[6px] font-semibold text-black text-base sm:text-[20px] capitalize transform transition-transform duration-200 text-center
          ">

            <p>Subscribe to Newsletter</p>
            <span className="absolute inset-0 rounded-full bg-accentLime border-transparent border-b-4 -z-10"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
