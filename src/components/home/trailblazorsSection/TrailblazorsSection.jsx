import React from 'react';

function TrailblazorsSection() {
  return (
    <div className="my-24 bg-primary py-8 flex flex-col items-center justify-center gap-6">
      <div className="w-full flex flex-col items-center gap-1 ">
        <h2 className="text-5xl font-bold font-poppins text-white">
          Don't Just take our word for it
        </h2>
        <p className="text-2xl font-lato font-medium text-gray-300">
          Listen to what our Finance Trailblazors say.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-60 h-96 bg-gray-500 rounded-2xl"></div>
          <div className="w-64 h-28 p-2 rounded-br-3xl rounded-tl-3xl bg-white flex flex-col justify-center items-center gap-2">
            <h3 className="text-black font-semibold font-lato text-xl text-center">fsddfsdf </h3>
            <p className="font-lato italic text-base text-center text-gray-300">{`"fdfdsfdsfsdfdsf dfdsfd sfsdv sd"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrailblazorsSection;
