import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-gray-200 w-72 rounded-full relative h-10 items-center flex p-4 cursor-pointer">
      <input
        type="text"
        className="bg-transparent text-sm text-gray-600 outline-none"
        placeholder="Search courses..."
      />

      <div className="absolute p-3 bg-primary-darkBlue text-white right-0 rounded-full">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
