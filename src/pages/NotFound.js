import React from 'react';
import { ReactComponent as Logo } from '../assets/img/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo width="400" height="300" />
      <Link to="/">
        <h6 className="text-primary-darkBlue text-xl">Back to Home</h6>
      </Link>
    </div>
  );
};

export default NotFound;
