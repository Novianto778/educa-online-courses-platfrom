import React from 'react';
import Button from '../parts/Button';
import SearchBar from '../parts/SearchBar';

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between w-10/12 mx-auto h-20">
        <h6 className="font-semibold text-xl">Educa</h6>
        <ul className="flex items-center">
          <li className="header-menu">Home</li>
          <li className="header-menu">Courses</li>
          <li className="header-menu">Pricing</li>
          <li className="header-menu">Features</li>
          <SearchBar />
        </ul>
        <Button darkBlue hover="bg-blue-800">
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
