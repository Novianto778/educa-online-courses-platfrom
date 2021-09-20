import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactImg from '../assets/img/react.png';
import Button from './Button';
import { useEduca } from '../context/context';

const LoginedHeader = () => {
  const {
    state: { cart, total },
    addTotal,
    signOut,
  } = useEduca();

  useEffect(() => {
    addTotal();
  }, [cart]);
  const userSvg = (
    <svg
      className="w-8 h-8 mx-3 my-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const cartSvg = (
    <svg
      className="w-8 h-8 mx-3 my-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );

  const notifSvg = (
    <svg
      className="w-8 h-8 mx-3 my-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );

  const settingsSvg = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const profileMenu = [
    { name: 'My Class', url: '/my-class' },
    { name: 'My Cart', url: '/cart' },
    { name: 'Points', url: '/points' },
    { name: 'Help', url: '/my-class' },
  ];

  const UserMenu = () => (
    <div className="tooltip delay-1000">
      {userSvg}
      <div className="tooltip-content py-4 w-60 absolute top-24 -right-2 bg-white">
        <div className="flex items-center px-6">
          <img src={reactImg} alt="" className="rounded-full h-12 w-12" />
          <div className="ml-2">
            <h6>Novianto</h6>
            <p className="text-xs text-gray-500">novianto@email.com</p>
          </div>
        </div>
        <div className="border-b-2 mt-2 border-gray-200"></div>
        <div className="px-6">
          {profileMenu.map((menu, idx) => (
            <Link to={menu.url} key={idx}>
              <p className="text-gray-500 mt-2">{menu.name}</p>
            </Link>
          ))}
          <p className="text-gray-500 mt-2 cursor-pointer" onClick={signOut}>
            Log Out
          </p>
        </div>
      </div>
    </div>
  );

  const NotifMenu = () => (
    <div className="tooltip delay-1000">
      {notifSvg}
      <div className="tooltip-content py-4 w-80 absolute top-24 -right-20 bg-white">
        <div className="flex items-center justify-between mb-6 px-6">
          <h6 className="text-lg font-medium">Notifications</h6>
          {settingsSvg}
        </div>
        <div className="flex flex-col-reverse">
          <div className="mb-4">
            <p className="px-6 text-sm">
              New Year Sale. Get 50% discount for all courses
            </p>
            <div className="border-b-2 px-0 border-gray-200 mt-2"></div>
          </div>
          <div className="mb-4">
            <p className="px-6 text-sm">
              You have purchased React Js Complete Guide. Go to course.
            </p>
            <div className="border-b-2 px-0 border-gray-200 mt-2"></div>
          </div>
        </div>
        <div className="flex px-8 items-center justify-between">
          <h6>Mark all as read</h6>
          <Button small outline>
            See All
          </Button>
        </div>
      </div>
    </div>
  );

  const CartMenu = () => (
    <div className="tooltip delay-1000">
      <Link to="/cart">{cartSvg}</Link>
      <div
        className={`tooltip-content py-4 w-${
          cart.length > 0 ? '96' : '60'
        } absolute top-24 -right-20 bg-white`}
      >
        {cart.length > 0 ? (
          <>
            <div className="flex flex-col-reverse px-6">
              {cart.map((item) => (
                <div
                  className="border-b-2 pb-2 border-gray-200 mb-4"
                  key={item.id}
                >
                  <div className="flex items-center">
                    <img src={item.img} alt="" className="w-16 h-16 rounded" />
                    <div className="ml-4">
                      <p className="text-sm">{item.title}</p>
                      <p className="text-sm text-gray-600">Rp. {item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 mt-4">
              <h6 className="text-xl">
                Total:{' '}
                <span className="text-primary-darkBlue">Rp. {total}</span>
              </h6>
              <Link to="/cart">
                <Button full darkBlue>
                  Go to Cart
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col justify-center">
            <h1>No item in the cart</h1>
            <Link to="/">
              <Button outline>Browse Course</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex items-center">
      <CartMenu />
      <NotifMenu />
      <UserMenu />
    </div>
  );
};

export default LoginedHeader;
