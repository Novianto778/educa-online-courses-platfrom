import React from 'react';

const ClassItem = ({ data }) => {
  return (
    <div className="bg-white shadow w-60 mr-6 mb-6">
      <img src={data.img} alt="" />
      <div className="px-4 py-2">
        <h6 className="text-base">{data.title}</h6>
        <p className="text-gray-500 text-sm mt-1">By {data.tutor}</p>
      </div>
    </div>
  );
};

export default ClassItem;
