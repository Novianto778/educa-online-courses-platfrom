import React from 'react';
import ClassItem from './ClassItem';
import { useEduca } from '../context/context';
import { ReactComponent as Logo } from '../assets/img/no-course.svg';
import Button from '../parts/Button';
import { Link } from 'react-router-dom';

const MyClass = () => {
  const {
    state: { cart },
  } = useEduca();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-primary-darkBlue font-medium text-2xl">My Class</h1>
        <Link to="/">
          <Button orange>Add a Course</Button>
        </Link>
      </div>
      <div className="flex mt-6 mb-20 flex-wrap">
        {cart.length ? (
          cart.map((item) => {
            const title = item.title.toLowerCase().split(' ').join('-');
            return (
              <Link
                to={{
                  pathname: `/class/${title}`,
                  state: {
                    data: item,
                  },
                }}
                key={item.id}
              >
                <ClassItem data={item} />
              </Link>
            );
          })
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <Logo className="w-11/12 max-h-96" />
            <h1 className="text-primary-darkBlue text-xl">Find a Course</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MyClass;
