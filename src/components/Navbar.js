import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEduca } from '../context/context';
import Button from '../parts/Button';
import LoginedHeader from '../parts/LoginedHeader';
import SearchBar from '../parts/SearchBar';
import { categories } from '../data';

const Navbar = () => {
  const { state } = useEduca();
  const [sticky, setSticky] = useState('');
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setSticky('fixed top-0 shadow-lg z-40');
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
    <header className={`w-full bg-white ${sticky}`}>
      <nav className="flex items-center justify-between w-10/12 mx-auto h-20">
        <i className="fas fa-bars lg:hidden block text-3xl"></i>
        <Link to="/">
          <h6 className="font-semibold text-xl">Educa</h6>
        </Link>
        <ul className="lg:flex hidden items-center">
          <li className="header-menu">Home</li>
          <li className="mr-8">
            <div className="tooltip delay-1000 py-8">
              Courses
              <div className="tooltip-content -left-12 absolute top-20 bg-white w-64 p-4">
                {categories.map((item) => {
                  const path = item.title.toLowerCase().split(' ').join('-');
                  return (
                    <div className="mt-4 flex items-center justify-between">
                      <Link to={`/courses/${path}`}>
                        <p>{item.title}</p>
                      </Link>
                      <i className="fas fa-angle-right"></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="header-menu">Pricing</li>
          <li className="header-menu">Features</li>
          <SearchBar />
        </ul>
        {state.isLogin ? (
          <LoginedHeader />
        ) : (
          <Link to="/login">
            <Button darkBlue className="md:block hidden">
              Login
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
