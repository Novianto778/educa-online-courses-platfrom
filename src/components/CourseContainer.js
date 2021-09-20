import React from 'react';
import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';
import { useEduca } from '../context/context';
import { firestore } from '../firebase';

const CourseContainer = ({ sectionTitle }) => {
  const {
    state: { popular },
  } = useEduca();


  return (
    <section className="w-10/12 mx-auto mb-20">
      <h4 className="font-medium text-xl">{sectionTitle}</h4>
      <div className="flex lg:justify-between mt-6 overflow-x-auto scrollbar-hidden lg:overflow-none">
        {popular.map((course, idx) => {
          const title = course.title.toLowerCase().split(' ').join('-');
          return (
            <Link
              to={{
                pathname: `/course/${title}`,
                state: {
                  data: course,
                },
              }}
              key={idx}
            >
              <CourseItem data={course} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CourseContainer;
