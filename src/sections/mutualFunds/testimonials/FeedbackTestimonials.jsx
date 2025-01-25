'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '@/assets/clientsImages/client1.jpg';
import client2 from '@/assets/clientsImages/client2.jpg';
import client3 from '@/assets/clientsImages/client3.jpg';
import client4 from '@/assets/clientsImages/client4.jpg';
import client5 from '@/assets/clientsImages/client5.jpg';

const FeedbackTestimonials = () => {
  const testimonials = [
    {
          image: client1,
          heading: 'Dr. Aman Setia',
          content:
            'Rupeestop simplified my investment journey and helped me achieve consistent growth. Their personalized advice is top-notch!',
        },
        {
          image: client2,
          heading: 'Dharmendra Shekhar',
          content:
            'Thanks to Rupeestop, my portfolio is diversified and aligned with my long-term financial goals. I feel confident about my future.',
        },
        {
          image: client3,
          heading: 'Neha Jhunjhunwala',
          content:
            'The team at Rupeestop is knowledgeable and approachable. They made wealth management easy to understand for someone like me.',
        },
        {
          image: client4,
          heading: 'Rohit',
          content:
            "With Rupeestop's guidance, I’ve seen significant returns on my investments. Their expertise in mutual funds and bonds is exceptional!",
        },
        {
          image: client5,
          heading: 'Shakti Singh',
          content:
            'I was new to investing, but Rupeestop walked me through every step. Their portfolio health checker gave me a clear roadmap to improve my finances.',
        },
  ];

  return (
    <div className="pt-8">
      {/* Static Layout for Larger Screens */}
      <div className="hidden sm:flex gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" bg-backgroundLight p-5 rounded-[20px] flex flex-col justify-between"
            style={{ flex: '1 1 45%' }}
          >
            <p className="text-gray-700 font-lato text-lg">
              {testimonial.content}
            </p>
            <div className="flex items-center gap-3 border-t pt-1">
              <img
                src={testimonial.image.src}
                alt={testimonial.heading}
                className="w-10 h-10 rounded-full flex-shrink-0 object-cover origin-center"
              />
              <span className="font-lato text-[20px] font-medium">
                {testimonial.heading}
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
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3 border-t pt-1">
                  <img
                    src={testimonial.image.src}
                    alt={testimonial.heading}
                    className="w-10 h-10 rounded-full object-cover origin-center"
                  />
                  <span className="font-lato text-[20px] font-medium">
                    {testimonial.heading}
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
