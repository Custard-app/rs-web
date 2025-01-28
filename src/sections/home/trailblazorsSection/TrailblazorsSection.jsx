import client1 from '@/assets/rupeestop_assets/clientsImages/client1.jpg';
import client2 from '@/assets/rupeestop_assets/clientsImages/client2.jpg';
import client3 from '@/assets/rupeestop_assets/clientsImages/client3.jpg';
import client4 from '@/assets/rupeestop_assets/clientsImages/client4.jpg';
import client5 from '@/assets/rupeestop_assets/clientsImages/client5.jpg';
import client6 from '@/assets/rupeestop_assets/clientsImages/client6.jpg';
import client7 from '@/assets/rupeestop_assets/clientsImages/client7.jpg';
import client8 from '@/assets/rupeestop_assets/clientsImages/client8.jpg';
import WidthXXL from '@/wrapper/widths/WidthXXL';
import { BsPlay } from 'react-icons/bs';
import './Trailblazors.css';
import Marquee from 'react-fast-marquee';

function TrailblazorsSection() {
  const products = [
    {
      image: client1,
      heading: 'Dr. Aman Setia',
      content:
        "Rupeestop is managed by skilled professionals with expertise in the field. Their dedication and perseverance have helped the firm build a strong reputation and excellent creditworthiness.",
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
    {
      image: client6,
      heading: 'Shradha & Puneet',
      content:
        'The personalized attention I received from Rupeestop is unparalleled. They treat every client like a priority!',
    },
    {
      image: client7,
      heading: 'Sunny ',
      content:
        "Rupeestop's fixed deposit strategies helped me balance risk and returns perfectly. I highly recommend their services.",
    },
    {
      image: client8,
      heading: 'Deepak & Preeti',
      content:
        "Thanks to RupeeStop, we’ve aligned our financial goals and built a strong foundation for our future.",
    },
  ];
  return (
    <div className="my-14 sm:my-24 bg-primary py-12  flex flex-col items-center justify-center gap-6">
      <WidthXXL>
        <div className="w-full flex flex-col items-center gap-1 mb-5">
          <h2 className="text-4xl sm:text-5xl text-center font-bold font-poppins text-white">
            Don&#39;t Just take our word for it
          </h2>
          <p className="text-sm sm:text-2xl font-lato text-center text-gray-300">
            Listen to what our Finance Trailblazers say.
          </p>
        </div>
        {/* Marquee Container */}
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {products.concat(products).map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 mr-5"
              >
                <div
                  className="w-60 h-96 bg-cover bg-center rounded-2xl relative overflow-hidden"
                  style={{ backgroundImage: `url(${product.image.src})` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="w-64 h-52 p-2 rounded-br-3xl rounded-tl-3xl bg-white flex flex-col justify-center items-center gap-2">
                  <h3 className="text-black font-semibold font-lato text-xl text-center">
                    {product.heading}
                  </h3>
                  <p className="font-lato italic text-base text-center text-gray-500">{`"${product.content}"`}</p>
                </div>
              </div>
            ))}
          </Marquee>
          {/* </div>
        </div> */}
      </WidthXXL>
    </div>
  );
}

export default TrailblazorsSection;
