import React from 'react';

const DetailCard = ({ data: { title, content, icon }}) => {
  return (
    <div className="bg-white shadow py-4 px-6 w-60 flex">
      <i className={`fas fa-${icon} text-3xl text-secondary-lightBlue`}></i>
      <div className="ml-6">
        <p className="font-light text-gray-500 text-md uppercase">{title}</p>
        <h6 className="font-medium text-2xl">{content}</h6>
      </div>
    </div>
  );
};

export default DetailCard;
