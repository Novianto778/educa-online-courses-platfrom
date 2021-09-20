import React from 'react';
import reactImg from '../assets/img/react.png';

const Challenges = () => {
  return (
    <>
      <h1 className="text-primary-darkBlue font-medium text-2xl">
        My Challenges
      </h1>
      <div className="flex flex-col-reverse mt-6 md:w-11/12 w-9/12">
        <div className="flex md:flex-row flex-col items-center bg-white shadow-md">
          <div className="lg:w-7/12 w-full">
            <img
              src={reactImg}
              alt=""
              className="max-h-36 w-full bg-cover bg-center"
            />
          </div>
          <div className="ml-4 py-1 pr-4">
            <h6 className="text-xl">React Js Front End Challenges</h6>
            <p className="text-gray-500 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis enim eaque consequuntur quae placeat alias velit
              maxime ex culpa ad!
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-primary-darkBlue ">
                2 Februari 2020 - 10 Februari 2020
              </p>
              <p className="text-primary-orange">Details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenges;
