import React from 'react';
import CategoriesCourse from '../components/CategoriesCourse';
import Navbar from '../components/Navbar';

const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto mt-4">
        <h1 className="text-2xl font-semibold">All Business Courses</h1>
        <div className="flex mt-4 items-center justify-between">
          <select
            name="filter"
            id="filter"
            className="border-gray-300 border-2"
          >
            <option value="most-popular">Most Popular</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="newest">Newest</option>
          </select>
          <p>5763 courses</p>
        </div>
        <div className="mt-12">
          <CategoriesCourse />
          <CategoriesCourse />
          <CategoriesCourse />
          <CategoriesCourse />
          <CategoriesCourse />
        </div>
      </div>
    </>
  );
};

export default Categories;
