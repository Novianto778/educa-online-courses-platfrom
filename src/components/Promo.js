import React from 'react';
import { Link } from 'react-router-dom';
import promoImg from '../assets/img/promo.png';
import Button from '../parts/Button';

const Promo = () => {
  return (
    <section className=" w-full relative flex lg:flex-row flex-col items-center justify-around z-10">
      <div className="bg-primary-lightBlue lg:h-80 h-60 absolute w-full z-minus -top-10 lg:top-10 transform lg:-rotate-1"></div>
      <img
        src={promoImg}
        alt="prmo banner"
        width="520"
        className="hidden lg:block"
      />
      <div className="lg:w-5/12 w-10/12">
        <h2 className="md:text-4xl text-2xl font-semibold mb-6">
          Learn from the best instructor and develop your professional career
        </h2>
        <Link to="/signup">
          <Button orange>Join for Free</Button>
        </Link>
      </div>
    </section>
  );
};

export default Promo;
