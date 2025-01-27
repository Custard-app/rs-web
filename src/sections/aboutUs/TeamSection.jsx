import WidthXL from '@/wrapper/widths/WidthXL';
import TeamCard from './cards/TeamCard';
import team1 from '@/assets/rupeestop_assets/teamsImages/team1.jpg';
import team2 from '@/assets/rupeestop_assets/teamsImages/team2.jpg';
import team3 from '@/assets/rupeestop_assets/teamsImages/team3.jpg';

const teamsData = [
  {
    name: 'Mohit Sharma',
    position: 'Position',
    img: team1,
    twitter: '#',
    linkedin: '#',
    description:
      "Mohit, with his sharp analytical mind and a passion for simplifying finance, ensures that RupeeStop’s strategies are both insightful and effective. His deep understanding of investment trends, combined with a practical approach, helps clients make informed financial decisions with confidence. Always eager to innovate, Mohit brings clarity and structure to the team, making wealth-building an achievable goal for all.",
  },
  {
    name: 'Pamita Sharma',
    position: 'Position',
    img: team2,
    twitter: '#',
    linkedin: '#',
    description:
      "Pamita, joyful and ever ready to help; make team understand the female perspective. A service enthusiast always working on making investment journey smooth & rewarding for our clients and RupeeStop's Team also.",
  },
  {
    name: 'Dhiraj Sharma',
    position: 'Position',
    img: team3,
    twitter: '#',
    linkedin: '#',
    description:
      "With two decades of experience in Financial and hospitality Industry, Dhiraj brings in customer first attitude. His unbiased approach, his illogical questions and novice thinking about the investment products gives us understanding to serve you with our best.",
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
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
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
