// import WidthXL from '@/wrapper/widths/WidthXL';
// import React from 'react';
// import { RxTriangleRight } from 'react-icons/rx';
// import './GetstartSection.css';

// export default function GetstartSection() {
//   return (
//     <div className="py-14 sm:py-24 bg-white px-5 sm:px-0">
//       <WidthXL>
//         <div>
//           <h1 className="font-poppins font-semibold text-5xl text-center mb-10">
//             How to Get Started?
//           </h1>

//           <div className="flex justify-between relative">
//             {/* Arrow 1 */}
//             <div className="absolute left-40 top-2 flex items-center text-xl whitespace-nowrap">
//               {`-------------------------`}
//               <RxTriangleRight className="mt-[5px] -ml-1" />
//             </div>
//             <div className="absolute top-4 w-[224px] left-40 h-3 arrow-timeline"></div>

//             {/* Arrow 2 */}
//             <div className="absolute flex items-center text-xl left-[510px] top-2">
//               {`-------------------------`}
//               <RxTriangleRight className="mt-[5px] -ml-1" />
//             </div>
//             <div className="absolute top-4 w-[224px] left-[510px] h-3 arrow-timeline2" style={{ '--animation-delay': '4s' }}></div>

//             {/* Arrow 3 */}
//             <div className="absolute flex items-center text-xl right-40 top-2">
//               {`-------------------------`}
//               <RxTriangleRight className="mt-[5px] -ml-1" />
//             </div>

//             {/* card 1 */}
//             <div className="flex flex-col gap-4 items-center w-[200px] ">
//               <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
//                 01
//               </p>
//               <div className="animate-text">
//                 <p className="font-lato font-bold text-lg text-center text-black">
//                   Asses your Goals
//                 </p>
//                 <p className="font-lato font-medium text-base text-gray-800 text-center">
//                   Understand your financial objectives, risk tolerance, and
//                   investment horizon
//                 </p>
//               </div>
//             </div>

//             {/* card 2 */}
//             <div className="flex flex-col gap-4 items-center w-[200px] ">
//               <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
//                 02
//               </p>
//               <p className="font-lato font-bold text-lg text-center text-black">
//                 Choose your PMS type
//               </p>
//               <p className="font-lato font-medium text-base text-gray-800 text-center">
//                 Decide between customized or pre-designed PMS based on your
//                 preferences.
//               </p>
//             </div>

//             {/* card 3 */}
//             <div className="flex flex-col gap-4 items-center w-[200px] ">
//               <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
//                 03
//               </p>
//               <p className="font-lato font-bold text-lg text-center text-black">
//                 Consult with Experts
//               </p>
//               <p className="font-lato font-medium text-base text-gray-800 text-center">
//                 Talk to our advisors to select the best portfolio manager and
//                 investment strategy.
//               </p>
//             </div>

//             {/* card 4 */}
//             <div className="flex flex-col gap-4 items-center w-[200px] ">
//               <p className="w-12 h-12 rounded-full text-lg font-lato font-bold bg-accentOrange-200 flex items-center justify-center text-white">
//                 04
//               </p>
//               <p className="font-lato font-bold text-lg text-center text-black">
//                 Start Investing
//               </p>
//               <p className="font-lato font-medium text-base text-gray-800 text-center">
//                 Begin with a minimum investment of ₹25 lakhs and monitor your
//                 portfolio's performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </WidthXL>
//     </div>
//   );
// }



import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function GetstartSection() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
