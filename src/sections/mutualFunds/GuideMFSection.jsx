import WidthXL from '@/wrapper/widths/WidthXL';
import { RiDoubleQuotesL } from 'react-icons/ri';
import FeedbackTestimonials from './testimonials/FeedbackTestimonials';

const GuideMFSection = () => {
  const articles = [
    {
      title: 'Understanding the Basics of Mutual Funds',
      author: 'Catherine',
      readTime: '10 Mins Read',
    },
    {
      title: 'Debt Funds vs. Equity Funds: Which One Should You Choose?',
      author: 'Catherine',
      readTime: '10 Mins Read',
    },
    {
      title: 'How to Choose the Right Mutual Fund for Your Goals',
      author: 'Catherine',
      readTime: '10 Mins Read',
    },
    {
      title: 'Top 10 Mutual Funds to Invest in 2024',
      author: 'Catherine',
      readTime: '10 Mins Read',
    },
    {
      title: 'Benefits of Investing in Mutual Funds',
      author: 'Catherine',
      readTime: '10 Mins Read',
    },
  ];

  return (
    <div className="w-full bg-white py-14 sm:py-24 px-5 sm:px-0">
      <WidthXL>
        <h1 className="text-[32px] sm:text-[42px] font-poppins font-semibold text-center mb-4">
          Your Guide to Smart Mutual Fund Investing
        </h1>
        <p className="text-center font-lato font-medium text-sm sm:text-lg text-gray-600 mb-8">
          Get expert tips and insights to make smart mutual fund investments and
          boost your returns.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-100 w-full sm:w-[373px] h-[116px] sm:h-[308px] p-5 rounded-[12px] flex flex-row sm:flex-col gap-4"
            >
              <div className="bg-gray-300 w-1/3 sm:w-full h-[84px] sm:h-40 rounded-md"></div>

              <div className="w-2/3 sm:w-full flex flex-col items-start gap-2 sm:gap-4">
                <h2 className="text-sm sm:text-[20px] font-lato font-medium text-wrap">
                  {article.title}
                </h2>
                <p className="text-gray-600 font-lato font-medium text-xs sm:text-sm flex gap-4">
                  By {article.author} <span> &bull; {article.readTime}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* //Client says */}
        <div className="mt-14">
          <div>
            <RiDoubleQuotesL className="text-6xl sm:text-8xl text-start text-primary" />
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[42px] text-wrap text-primary text-start">
              What our Client says<br></br> about Rupeestop
            </h1>
            <FeedbackTestimonials/>
          </div>
        </div>
      </WidthXL>
    </div>
  );
};

export default GuideMFSection;
