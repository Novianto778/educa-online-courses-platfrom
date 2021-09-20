import React from 'react';
import Button from '../parts/Button';

const Hero = () => {
  return (
    <div className="w-full bg-hero bg-no-repeat lg:bg-cover">
      <div className="mx-auto w-10/12 lg:py-36 py-20">
        <h1 className="md:text-5xl text-4xl font-semibold lg:w-1/2 leading-snug">
          <span className="text-primary-darkBlue">The New</span> Ways to Advance
          Your <span className="text-primary-darkBlue">Skills</span>
        </h1>
        <p className="text-gray-500 mt-4 mb-10 lg:w-1/2 text-md md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          error iusto tempore provident voluptatum. Vero?
        </p>
        <Button orange>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
