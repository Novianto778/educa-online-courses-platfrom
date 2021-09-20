import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import ClassFrame from '../components/ClassFrame';

const ClassDashboard = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    state: { data },
  } = location;

  const initialVid = data.content[0].videos[0].url;

  const title = data.title.toLowerCase().split(' ').join('-');

  useEffect(() => {
    history.push({
      pathname: `/class/${title}/00`,
      state: {
        data: data,
        vid: initialVid
      },
    });
  }, []);

  return (
    <div className="w-full flex overflow-hidden">
      <div className="w-72 bg-blue-900 overflow-y-scroll overflow-x-hidden h-screen md:flex hidden flex-col sticky top-0">
        <div className="text-center text-white flex justify-around mb-12 items-center py-2">
          <Link to="/my-class">
            <div className="flex items-center">
              <i className="fas fa-arrow-left text-lg mr-2"></i>
              <p className="text-lg">Back To Class</p>
            </div>
          </Link>
          <i className="fas fa-list text-lg"></i>
        </div>
        <ul className="text-gray-300 dashboard-menu class-menu">
          {data.content.map((item, idx) => {
            return (
              <div className="mb-6" key={idx}>
                <h6 className="text-white font-medium px-4">{item.title}</h6>
                {item.videos.map((vid, index) => {
                  const path = `/class/${title}/${idx}${index}`;
                  return (
                    <Link
                      to={{
                        pathname: path,
                        state: {
                          data: data,
                          vid: vid.url,
                        },
                      }}
                      key={index}
                    >
                      <li
                        className={
                          location.pathname === path
                            ? 'bg-blue-700 text-white'
                            : ''
                        }
                      >
                        {vid.title}
                      </li>
                    </Link>
                  );
                })}
              </div>
            );
          })}
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
      <div className="w-full h-full mr-12">
        <Route path={`/class/${title}/:id`}>
          <ClassFrame />
        </Route>
      </div>
      {/* <div className="bg-gray-900 w-full md:hidden block fixed bottom-0">
        <div className="flex text-gray-300 justify-evenly">
          <div className="flex flex-col items-center py-2">
            <i className="fas fa-chalkboard-teacher text-xl"></i>
            <p className="text-sm">My Class</p>
          </div>
          <div className="flex flex-col items-center py-2">
            <i className="fas fa-award text-xl"></i>
            <p className="text-sm">Points</p>
          </div>
          <div className="flex flex-col items-center py-2">
            <i className="fas fa-trophy text-xl"></i>
            <p className="text-sm">Challenges</p>
          </div>
          <div className="flex flex-col items-center py-2">
            <i className="fas fa-cog text-xl"></i>
            <p className="text-sm">Setting</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ClassDashboard;
