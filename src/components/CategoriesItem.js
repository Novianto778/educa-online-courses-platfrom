import React from 'react';

const CategoriesItem = ({category: {title, total, icon},}) => {
  return (
    <div className="bg-white md:mr-4 mr-6 shadow-md px-6 py-4 h-52 my-8 inline-flex categories-hover flex-col hover:bg-primary-darkBlue  cursor-pointer transition duration-500 ease-in-out">
      <i className={`fas fa-${icon} text-gray-500 text-4xl`}></i>
      <h4 className="text-lg mt-6 w-28 ">{title}</h4>
      <p className="text-sm text-gray-500 mt-auto">{total} Courses</p>
    </div>
  );
};

export default CategoriesItem;
