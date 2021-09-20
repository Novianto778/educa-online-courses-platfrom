import React, { useState, useEffect } from 'react';
import Button from '../parts/Button';
import { useEduca } from '../context/context';
import { Link } from 'react-router-dom';

const BuyCard = ({ data }) => {
  const [sticky, setSticky] = useState('');
  const { state, addToCart } = useEduca();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setSticky(
        'fixed top-0 left-1/2 z-8 mt-0 transform translate-x-32 translate-y-4'
      );
    } else {
      setSticky('');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`text-center w-4/12 mt-20 md:block hidden ${sticky}`}>
      <div className="bg-white shadow-md inline-flex flex-col pb-4">
        <img src={data.img} alt={data.title} className="w-72" />
        <div className="px-6 text-left mt-3">
          <h5 className="font-medium text-2xl mb-4">Rp. {data.price}</h5>
          {data.inCart ? (
            <Link to="/cart">
              <Button orange full>
                Already in Cart
              </Button>
            </Link>
          ) : (
            <Button darkBlue full onClick={() => addToCart(data)}>
              Add to Cart
            </Button>
          )}

          <Button outline full className="mt-2">
            Buy Now
          </Button>

          <p className="mt-6">This course includes:</p>
          {data.includes.map((item, idx) => (
            <div className="flex items-center mt-1" key={idx}>
              <i className="fas fa-check text-sm mr-2 text-primary-orange"></i>
              <p className="text-sm text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
