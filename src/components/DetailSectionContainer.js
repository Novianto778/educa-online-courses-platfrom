import React from 'react';

const DetailSectionContainer = ({ title, children }) => {
  return (
    <div className="mt-16">
      <h2 className="font-medium text-xl mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default DetailSectionContainer;
