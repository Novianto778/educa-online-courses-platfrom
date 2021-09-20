import React from 'react';
import { useLocation } from 'react-router-dom';

import reactImg from '../assets/img/react.png';
import { popularcourse } from '../data';

const CategoriesCourse = () => {
  const state = useLocation();
  let imgSrc;
  switch (state.pathname) {
    case '/course/businness':
      break;

    default:
      break;
  }
  return (
    <>
      <div className="flex items-center">
        <img src={reactImg} alt="image" className="md:w-52 w-20" />
        <div className="flex justify-between w-full ml-6 md:flex-row flex-col">
          <div className="flex flex-col">
            <h4 className="font-medium text-lg">
              React Js Web Development Complete Guide
            </h4>
            <p className="mt-1 text-gray-500">By John Cena</p>
            <p className="text-secondary-yellow">4.5 0 0 0 0 0</p>
            <div className="flex mt-2">
              <p>20 hours . 22 lectures . All level</p>
            </div>
          </div>
          <p className="text-primary-darkBlue font-medium">Rp. 240.000</p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
};

export default CategoriesCourse;
