import client1 from '@/assets/clientsImages/client1.jpg';
import client2 from '@/assets/clientsImages/client2.jpg';
import client3 from '@/assets/clientsImages/client3.jpg';
import client4 from '@/assets/clientsImages/client4.jpg';
import client5 from '@/assets/clientsImages/client5.jpg';
import client6 from '@/assets/clientsImages/client6.jpg';
import client7 from '@/assets/clientsImages/client7.jpg';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { BsPlay } from 'react-icons/bs';
import './Trailblazors.css';

function TrailblazorsSection() {
  const products = [
    {
      image: client1,
      heading: 'Dr. Aman Setia',
      content:
        'CA. ,CS.',
    },
    {
      image: client2,
      heading: 'Dharmendra Shekhar',
      content:
        'CA',
    },
    {
      image: client3,
      heading: 'Neha Jhunjhunwala',
      content:
        ' Energy consultant',
    },
    {
      image: client4,
      heading: 'Rohit',
      content:
        'Silver Jeweller in Jaipur and have passion to travel.',
    },
    {
      image: client5,
      heading: 'Shakti Singh',
      content:
        'A young business guy dealing in medical equipment supplies.',
    },
    {
      image: client6,
      heading: 'Shardha',
      content:
        'CA works in mnc and Puneet marketing Personal in Big Indian company.',
    },
    {
      image: client7,
      heading: 'Sunny ',
      content:
        ' IT professional in Delhi.',
    },
  ];
  return (
    <div className="my-14 sm:my-24 bg-primary py-12  flex flex-col items-center justify-center gap-6">
      <WidthXXL>
      <div className="w-full flex flex-col items-center gap-1">
        <h2 className="text-4xl sm:text-5xl text-center font-bold font-poppins text-white">
          Don&#39;t Just take our word for it
        </h2>
        <p className="text-sm sm:text-2xl font-lato text-center text-gray-300">
          Listen to what our Finance Trailblazors say.
        </p>
      </div>
      {/* Wrapper for hiding overflow */}
      <div className="w-full overflow-hidden mt-10">
        {/* Animated container with products */}
        <div
          className="flex items-center justify-center gap-10 animate-slide-back-and-forth"
          style={{
            animation: 'slide-pendulum 10s ease-in-out infinite',
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div
                className="w-60 h-96 bg-cover bg-center rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${product.image.src})` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <button className="absolute bottom-2 right-2 border-2 border-white w-9 h-9 rounded-full text-white flex items-center justify-center font-bold">
                  <BsPlay size={20} />
                </button>
              </div>
              <div className="w-64 h-28 p-2 rounded-br-3xl rounded-tl-3xl bg-white flex flex-col justify-center items-center gap-2">
                <h3 className="text-black font-semibold font-lato text-xl text-center">
                  {product.heading}
                </h3>
                <p className="font-lato italic text-base text-center text-gray-500">{`"${product.content}"`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </WidthXXL>
    </div>
  );
}

export default TrailblazorsSection;
