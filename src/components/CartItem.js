import React from 'react';
import { Link } from 'react-router-dom';
import { useEduca } from '../context/context';

const CartItem = ({ data }) => {
  const { removeCart } = useEduca();
  const title = data.title.toLowerCase().split(' ').join('-');
  return (
    <div className="mt-6 flex items-center">
      <div className="flex lg:flex-row flex-col  w-full">
        <div className="flex lg:w-8/12 w-full">
          <img src={data.img} alt={data.title} width="150" />
          <div className="ml-4 lg:w-7/12 w-full">
            <h6 className="">{data.title}</h6>
            <p className="mt-2 text-gray-500">By {data.tutor}</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-lg ml-2 text-primary-darkBlue">Rp. {data.price}</p>
          <div className="ml-4 flex lg:flex-col flex-row">
            <p
              className="text-red-500 cursor-pointer"
              onClick={() => removeCart(data.id)}
            >
              Remove
            </p>
            <Link
              to={{
                pathname: `/course/${title}`,
                state: {
                  data: data,
                },
              }}
            >
              <p className="text-green-500 lg:mt-2 lg:ml-0 mt-0 ml-2 cursor-pointer">
                View Detail
              </p>
            </Link>
          </div>
        </div>
      </div>
            
      {/* <img src={data.img} alt={data.title} width="150" />
      <div className="ml-6 w-full flex">
        <div className="flex flex-col w-7/12">
          <h6 className="">{data.title}</h6>
          <p className="mt-2 text-gray-500">By {data.tutor}</p>
        </div>
        <p className="text-lg ml-2 text-primary-darkBlue">Rp. {data.price}</p>
        <div className="ml-auto">
          <p
            className="text-red-500 cursor-pointer"
            onClick={() => removeCart(data.id)}
          >
            Remove
          </p>
          <Link
            to={{
              pathname: `/course/${title}`,
              state: {
                data: data,
              },
            }}
          >
            <p className="text-green-500 mt-2 cursor-pointer">Go to Course</p>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default CartItem;
