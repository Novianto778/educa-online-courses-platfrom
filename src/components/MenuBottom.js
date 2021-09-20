import React from 'react';
import Button from '../parts/Button';

const MenuBottom = ({ data }) => {
  return (
    <div className="bg-gray-900 w-full md:hidden block fixed bottom-0">
      <div className="p-4 flex text-white justify-between">
        <div className="sm:block hidden">
          <h6 className="text-sm">{data.title}</h6>
          <div className="flex items-center">
            <p className="mr-1">{data.rating}</p>
            <i className="fas fa-star text-sm text-secondary-yellow"></i>
            <p className="ml-3 text-sm">{data.students} students</p>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-auto sm:justify-start justify-between">
          <h6 className="text-xl text-white mr-2">Rp. {data.price}</h6>
          <Button darkBlue small>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuBottom;
