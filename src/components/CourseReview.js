import React from 'react';

const CourseReview = ({ data }) => {
  return (
    <div className="mb-6 border-b-2 border-gray-200">
      <div className="flex items-center">
        <img
          src={data.img}
          alt=""
          className="rounded-full w-10 h-10 bg-center bg-cover"
        />
        <div className="ml-4">
          <h6>{data.tutor}</h6>
          <i className="fas fa-star text-secondary-yellow mr-2"></i>
          <i className="fas fa-star text-secondary-yellow mr-2"></i>
          <i className="fas fa-star text-secondary-yellow mr-2"></i>
          <i className="fas fa-star text-secondary-yellow mr-2"></i>
          <i className="fas fa-star text-secondary-yellow mr-2"></i>
        </div>
      </div>
      <p className="mt-2">
        In general, this is a very good course. A lot of different concepts and
        you end up deploying an app into the real world using the state of the
        art in terms of tecnologies.
      </p>
    </div>
  );
};

export default CourseReview;
