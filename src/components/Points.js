import React from 'react';

const Points = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-primary-darkBlue font-medium text-2xl">
          My Points
        </h1>
        <h1 className="text-primary-orange font-medium text-xl">
          Your Points: 0 point
        </h1>
      </div>
      <div className="flex mt-6">
        <div className="px-4 py-2 mr-4 bg-yellow-400">History</div>
        <div className="px-4 py-2 mr-4 bg-yellow-200">Redeem a Reward</div>
      </div>
      <div className="mt-2 flex flex-col-reverse">
        <div className="flex w-1/2 justify-between mt-4 pb-2 border-b-2 border-gray-300">
          <div>
            <h4 className="text-lg">Winner of Javascript Challenges</h4>
            <p className="text-gray-500">24 Januari 2021 - 27 Januari 2021</p>
          </div>
          <p className="text-lg text-primary-darkBlue">80 points</p>
        </div>
        <div className="flex w-1/2 justify-between mt-4 pb-2 border-b-2 border-gray-300">
          <div>
            <h4 className="text-lg">Winner of PHP Challenges</h4>
            <p className="text-gray-500">29 Januari 2021 - 31 Januari 2021</p>
          </div>
          <p className="text-lg text-primary-darkBlue">80 points</p>
        </div>
        <div className="flex w-1/2 justify-between mt-4 pb-2 border-b-2 border-gray-300">
          <div>
            <h4 className="text-lg">Redeem Educa Clothes</h4>
            <p className="text-gray-500">4 February 2021</p>
          </div>
          <p className="text-lg text-primary-darkBlue">-150 points</p>
        </div>
      </div>
    </>
  );
};

export default Points;
