import React from 'react';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const AllCategories = () => {
  return (
    <section className="w-10/12 mx-auto">
      <h4 className="font-medium text-xl">Browse All Categories</h4>
      <div className="flex lg:justify-between overflow-x-auto scrollbar-hidden md:flex-wrap lg:flex-nowrap md:overflow-none">
        {categories.map((category, idx) => (
          <CategoriesItem key={idx} category={category} />
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
