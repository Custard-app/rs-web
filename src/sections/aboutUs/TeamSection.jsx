import WidthXL from '@/wrapper/widths/WidthXL';
import TeamCard from './cards/TeamCard';
import team1 from '@/assets/rupeestop_assets/teamsImages/team1_1.jpg';
import team2 from '@/assets/rupeestop_assets/teamsImages/team2.jpg';
import team3 from '@/assets/rupeestop_assets/teamsImages/team3.jpg';
import team4 from '@/assets/rupeestop_assets/teamsImages/team4.jpg';
import team5 from '@/assets/rupeestop_assets/teamsImages/team5_1.jpg';
import team6 from '@/assets/rupeestop_assets/teamsImages/team6.jpg';
import team7 from '@/assets/rupeestop_assets/teamsImages/team7.png';

const teamsData = [
  {
    name: 'Mohit',
    position: 'Position',
    img: team1,
    twitter: '#',
    linkedin: '#',
    description:
      "With over 20 years of experience in the financial sector, Mohit has in-depth knowledge of investment fundamentals and financial markets. Having worked with Nippon India and ICICI Prudential Mutual Fund, he simplifies complex investment strategies to empower clients to make informed decisions aligned with their goals.",
  },
  {
    name: 'Pamita',
    position: 'Position',
    img: team2,
    twitter: '#',
    linkedin: '#',
    description:
      "Pamita, joyful and ever ready to help; make team understand the female perspective. A service enthusiast always working on making investment journey smooth & rewarding for our clients and RupeeStop's Team also.",
  },
  {
    name: 'Dhiraj',
    position: 'Position',
    img: team3,
    twitter: '#',
    linkedin: '#',
    description:
      "With two decades of experience in Financial and hospitality Industry, Dhiraj brings in customer first attitude. His unbiased approach, his illogical questions and novice thinking about the investment products gives us understanding to serve you with our best.",
  },
  {
    name: 'Ujjwal',
    position: 'Position',
    img: team4,
    twitter: '#',
    linkedin: '#',
    description: "Ujjwal brings a unique combination of technical, community-building expertise and finance enthusism to our team, gained through his experience. He is a collaborative and empathetic person, fostering strong relationships and driving collective success.",
  },
  {
    name: 'Pranay',
    position: 'Position',
    img: team5,
    twitter: '#',
    linkedin: '#',
    description: "Pranay is a creative and marketing expert who crafts compelling stories and campaigns. He's a master communicator with a keen understanding of what drives human connection and engagement.",
  },
  {
    name: 'Mohit',
    position: 'Lead SDE',
    img: team6,
    twitter: '#',
    linkedin: '#',
    description: "Mohit serves as the Lead Software Development Engineer, spearheading the development and innovation of our products. With extensive expertise in modern technologies, he leads scalable solutions that drive our company's technological advancement and product excellence.",
  },
  {
    name: 'Divyansh',
    position: 'Operations & Sales Lead',
    img: team7,
    twitter: '#',
    linkedin: '#',
    description: "Divyansh drives business growth through strategic customer management and sales excellence. With several years of experience in business development, he has developed strong expertise in customer relationship management, sales strategies, and operational efficiency.",
  },

]

function TeamSection() {
  return (
    <div className="pb-14 sm:pb-24 px-5 sm:px-0">
      <WidthXL>
        <div className="bg-backgroundLight2 px-2 sm:px-7 py-5 sm:py-7 flex flex-col gap-10 items-center rounded-[20px]">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-poppins font-semibold text-4xl sm:text-[42px] text-gray-900 text-center">
              Meet Our Team
            </h2>
            <p className="font-lato font-medium text-sm sm:text-lg text-gray-800 text-center">
              We are young professionals with extensive experience in
              investments and finance, and we are investors ourselves. Our team
              comprises friends who have worked across diverse fields, including
              investment companies, leading banks, and the hospitality sector.
              This unique combination gives us a holistic understanding of both
              investments and investors, enabling us to offer tailored solutions and services.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 flex-wrap'>
            {
              teamsData.map((team, index) => (
                <TeamCard
                  key={index}
                  team={team}
                />
              ))
            }
          </div>
        </div>
      </WidthXL>
    </div>
  );
}

export default TeamSection;
