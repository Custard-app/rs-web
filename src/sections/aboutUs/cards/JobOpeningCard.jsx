
function JobOpeningCard({ data }) {
  return (
    <div className="bg-white w-full sm:w-[285px] h-[240px] sm:h-[262px] p-5 flex flex-col gap-4 rounded-[12px]">
      <p className="font-lato font-semibold text-lg text-gray-800">
        {data.title}
      </p>
      <p className="font-lato text-sm text-gray-700">{data.description}</p>
      <div className='flex items-center justify-end'>
        <button className=" bg-accentOrange-200 text-white rounded-full p-2 px-4 outline-none">
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobOpeningCard;
