
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function TeamCard({ team }) {
  const hasDescription = team?.description?.toString().length > 0;

  return (
    <div className="w-full sm:w-[300px] rounded-[20px] bg-white p-5 flex flex-col items-center gap-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-full">
          <p className="font-lato font-medium text-[22px] text-center">
            {team.name}
          </p>
          {/* <p className="font-lato text-base text-primary">{team.position}</p> */}
        </div>
        {/* <div className="flex items-center gap-2">
          <Link href={team.twitter}>
            <FaTwitter size={20} />
          </Link>
          <Link href={team.linkedin}>
            <FaLinkedin size={20} />
          </Link>
        </div> */}
      </div>
      <div
        className={`w-full flex flex-row sm:flex-col items-center sm:justify-center gap-4 `}
      >
        <Image
          src={team.img}
          alt={team.name}
          className={`w-[100px] sm:w-40 aspect-square object-cover rounded-full object-center ${!hasDescription && 'mx-auto'}`}
        />

        {hasDescription ? (
          <p className="font-lato italic text-xs sm:text-base text-center text-gray-800">
            {team.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default TeamCard;
