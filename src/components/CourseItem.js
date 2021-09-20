import React from 'react';

const CourseItem = ({ data: { title, tutor, rating, price, img } }) => {
  return (
    <div className="bg-white shadow-sm pb-4 max-w-card px-2 lg:mr-4 mr-8 cursor-pointer transition duration-500 ease-in-out hover:shadow-xl">
      <img src={img} alt={title} />
      <h4 className="lg:text-lg text-base mt-4">{title}</h4>
      <p className="lg:text-md text-sm text-gray-500 mt-1">{tutor}</p>
      <div className="flex items-center">
        <i className="fas fa-star text-secondary-yellow mr-2"></i>
        <i className="fas fa-star text-secondary-yellow mr-2"></i>
        <i className="fas fa-star text-secondary-yellow mr-2"></i>
        <i className="fas fa-star text-secondary-yellow mr-2"></i>
        <i className="fas fa-star text-secondary-yellow mr-2"></i>
        <p className="mr-4">{rating}</p>
      </div>
      <p className="text-lg text-gray-600 mt-1">Rp. {price}</p>
    </div>
  );
};

export default CourseItem;
