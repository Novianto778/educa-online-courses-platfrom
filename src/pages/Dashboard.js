import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Challenges from '../components/Challenges';
import MyClass from '../components/MyClass';
import Points from '../components/Points';

const Dashboard = ({ children }) => {
  const userSvg = (
    <svg
      className="w-20 h-20 mx-auto"
      fill="none"
      stroke="white"
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

  const state = useLocation();

  const clickedIndex = 0;

  const dashboardMenu = [
    { url: '/my-class', title: 'My Class', icon: 'chalkboard-teacher' },
    { url: '/points', title: 'Points', icon: 'award' },
    { url: '/challenges', title: 'Challenges', icon: 'trophy' },
    { url: '/settings', title: 'Settings', icon: 'cog' },
  ];

  return (
    <div className="w-full flex">
      <div className="w-60 bg-blue-900 h-screen md:flex hidden flex-col justify-evenly sticky top-0">
        <div className="text-center text-white">
          {userSvg}
          <p className="text-xl mt-2">Nama User</p>
        </div>
        <ul className="text-gray-300 dashboard-menu">
          {dashboardMenu.map((menu, idx) => (
            <Link to={menu.url} key={idx}>
              <li
                className={
                  state.pathname === menu.url ? 'bg-blue-700 text-white' : ''
                }
              >
                {menu.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="cursor-pointer px-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
      <div className="w-full mx-12 mt-12">
        <Route path="/my-class">
          <MyClass />
        </Route>
        <Route path="/points">
          <Points />
        </Route>
        <Route path="/challenges">
          <Challenges />
        </Route>
      </div>
      <div className="bg-gray-900 w-full md:hidden block fixed bottom-0">
        <div className="flex text-gray-300 justify-evenly">
          {dashboardMenu.map((menu, idx) => {
            const baseClass = 'flex flex-col items-center py-2 ';
            return (
              <Link to={menu.url} key={idx}>
                <div
                  className={
                    baseClass +
                    (state.pathname === menu.url ? 'text-primary-orange' : '')
                  }
                >
                  <i className={`fas fa-${menu.icon} text-xl`}></i>
                  <p className="text-sm">{menu.title}</p>
                </div>
              </Link>
            );
          })}
          {/* <Link to="my-class">
            <div className="flex flex-col items-center text-primary-orange py-2">
              <i className="fas fa-chalkboard-teacher text-xl"></i>
              <p className="text-sm">My Class</p>
            </div>
          </Link>
          <Link to="/points">
            <div className="flex flex-col items-center py-2">
              <i className="fas fa-award text-xl"></i>
              <p className="text-sm">Points</p>
            </div>
          </Link>
          <Link to="/challenges">
            <div className="flex flex-col items-center py-2">
              <i className="fas fa-trophy text-xl"></i>
              <p className="text-sm">Challenges</p>
            </div>
          </Link>

          <Link to="/settings">
            <div className="flex flex-col items-center py-2">
              <i className="fas fa-cog text-xl"></i>
              <p className="text-sm">Settings</p>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
