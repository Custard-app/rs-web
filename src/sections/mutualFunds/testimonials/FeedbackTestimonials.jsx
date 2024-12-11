'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeedbackTestimonials = () => {
  const testimonials = [
    {
      message:
        'Rupeestop made it so easy to start investing in mutual funds. The advisors are knowledgeable and always available to help.',
      name: 'Client Name 1',
      image: 'https://via.placeholder.com/40',
    },
    {
      message:
        "I've seen great returns on my investments thanks to the expert advice from Rupeestop. Highly recommend their services!",
      name: 'Client Name 2',
      image: 'https://via.placeholder.com/40',
    },
    {
      message: 'Rupeestop is the best investment platform out there!',
      name: 'Client Name 3',
      image: 'https://via.placeholder.com/40',
    },
  ];

  return (
    <div className="pt-8">
      {/* Static Layout for Larger Screens */}
      <div className="hidden sm:flex gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[387px] h-[244px] bg-backgroundLight p-5 rounded-[20px] flex flex-col justify-between"
            style={{ flex: '1 1 45%' }}
          >
            <p className="text-gray-700 font-lato text-lg">
              {testimonial.message}
            </p>
            <div className="flex items-center gap-3 border-t pt-1">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-lato text-[20px] font-medium">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel for Mobile Screens */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          onAutoplayStop={() => console.log('Autoplay stopped')}
          onAutoplayStart={() => console.log('Autoplay started')}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Current Card */}
              <div className="w-[320px] h-[240px] bg-backgroundLight p-6 rounded-[20px] flex flex-col justify-between z-10 relative">
                <p className="text-gray-700 font-lato text-lg">
                  {testimonial.message}
                </p>
                <div className="flex items-center gap-3 border-t pt-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-lato text-[20px] font-medium">
                    {testimonial.name}
                  </span>
                </div>
              </div>

              {/* Background (Next Card) */}
              {/* {index < testimonials.length - 1 && (
                <div className="absolute right-4 top-4 bg-gray-200 p-5 rounded-lg shadow-lg flex flex-col justify-between z-0 opacity-50 scale-95">
                  <p className="text-gray-500 mb-4">
                    {testimonials[(index + 1) % testimonials.length].message}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        testimonials[(index + 1) % testimonials.length].image
                      }
                      alt={testimonials[(index + 1) % testimonials.length].name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-xs font-semibold text-gray-500">
                      {testimonials[(index + 1) % testimonials.length].name}
                    </span>
                  </div>
                </div>
              )} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackTestimonials;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const FeedbackTestimonials = () => {
//   const testimonials = [
//     {
//       message:
//         'Rupeestop made it so easy to start investing in mutual funds. The advisors are knowledgeable and always available to help.',
//       name: 'Client Name 1',
//       image: 'https://via.placeholder.com/40',
//     },
//     {
//       message:
//         "I've seen great returns on my investments thanks to the expert advice from Rupeestop. Highly recommend their services!",
//       name: 'Client Name 2',
//       image: 'https://via.placeholder.com/40',
//     },
//     {
//       message: 'Rupeestop is the best investment platform out there!',
//       name: 'Client Name 3',
//       image: 'https://via.placeholder.com/40',
//     },
//   ];

//   return (
//     <div className="pt-8">
//       {/* Static Layout for Larger Screens */}
//       <div className="hidden sm:flex gap-6">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="w-[387px] h-[244px] bg-backgroundLight p-5 rounded-[20px] flex flex-col justify-between"
//             style={{ flex: '1 1 45%' }}
//           >
//             <p className="text-gray-700 font-lato text-lg">{testimonial.message}</p>
//             <div className="flex items-center gap-3 border-t pt-1">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="font-lato text-[20px] font-medium">{testimonial.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Carousel for Mobile Screens */}
//       <div className="sm:hidden">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1.2} // Allow partial view of the next slide
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: true, // Stop autoplay when user interacts
//           }}
//           modules={[Autoplay]}
//           onAutoplayStop={() => console.log('Autoplay stopped')}
//           onAutoplayStart={() => console.log('Autoplay started')}
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index} className="relative">
//               {/* Current Card */}
//               <div className="w-[320px] h-[240px] bg-backgroundLight p-6 rounded-[20px] flex flex-col justify-between z-10 relative">
//                 <p className="text-gray-700 font-lato text-lg">{testimonial.message}</p>
//                 <div className="flex items-center gap-3 border-t pt-1">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <span className="font-lato text-[20px] font-medium">{testimonial.name}</span>
//                 </div>
//               </div>

//               {/* Next Card Preview */}
//               {index < testimonials.length - 1 && (
//                 <div className="absolute right-[-100px] top-0 bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between z-0 opacity-50 scale-95">
//                   <p className="text-gray-500 mb-4">
//                     {testimonials[(index + 1) % testimonials.length].message}
//                   </p>
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={testimonials[(index + 1) % testimonials.length].image}
//                       alt={testimonials[(index + 1) % testimonials.length].name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="text-xs font-semibold text-gray-500">
//                       {testimonials[(index + 1) % testimonials.length].name}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default FeedbackTestimonials;
