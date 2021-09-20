import React from 'react';

const DetailHeader = ({ data }) => {
  return (
    <div className="relative h-screen z-minus">
      <img
        src={data.img}
        alt={data.title}
        className="w-full h-coverlg bg-cover bg-norepeat bg-center"
      />
      <div className="absolute top-0 bg-black w-full opacity-60 h-coverlg"></div>
      <h2 className="absolute md:left-1/2 left-0 top-1/2 text-secondary-lightBlue font-semibold md:text-5xl text-3xl text-center transform md:-translate-x-1/2 -translate-y-1/2 translate-x-0 px-6">
        {data.title}
      </h2>
    </div>
  );
};

export default DetailHeader;
