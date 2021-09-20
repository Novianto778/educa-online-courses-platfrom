import React from 'react';
import Button from '../parts/Button';

const Footer = ({marginTop = "28"}) => {
  return (
    <div className={`w-full bg-blue-900 mt-${marginTop}`}>
      <div className="flex w-10/12 mx-auto py-16 lg:flex-row flex-col">
        <div className="flex flex-col sm:flex-row lg:w-4/12 w-full lg:justify-around ">
          <div className="w-1/2 mt-8 lg:mt-0 ">
            <h6 className="text-white">Company</h6>
            <p className="text-gray-400 mt-2 text-sm">API Developer</p>
            <p className="text-gray-400 mt-2 text-sm">Career</p>
            <p className="text-gray-400 mt-2 text-sm">Our Story</p>
            <p className="text-gray-400 mt-2 text-sm">New Soon</p>
          </div>
          <div className="w-1/2 mt-8 lg:mt-0 ">
            <h6 className="text-white">Students</h6>
            <p className="text-gray-400 mt-2 text-sm">Get Schoolarship</p>
            <p className="text-gray-400 mt-2 text-sm">Our Pathskills</p>
            <p className="text-gray-400 mt-2 text-sm">All Features</p>
            <p className="text-gray-400 mt-2 text-sm">Refund Policy</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:w-8/12 w-full lg:justify-around ">
          <div className="lg:w-1/3 w-1/2 lg:mt-0 mt-8">
            <h6 className="text-white">Touch Us</h6>
            <p className="text-gray-400 mt-2 text-sm">Educa Center</p>
            <p className="text-gray-400 mt-2 text-sm">Gangnam Block No.17</p>
            <p className="text-gray-400 mt-2 text-sm">Bandung, Indonesia</p>
            <p className="text-gray-400 mt-2 text-sm">+1234567</p>
          </div>
          <div className="lg:w-2/3 w-1/2 lg:mt-0 mt-8">
            <h6 className="text-white">Promotion</h6>
            <p className="text-gray-400 mt-2 text-sm">
              Submit your email for new updates
            </p>
            <div className="flex mt-2">
              <input
                type="text"
                className="pl-2 md:w-60 w-40"
                placeholder="email address"
              />
              <Button orange>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
