import React from 'react';
import {useLocation} from 'react-router-dom'

const ClassFrame = () => {
  const {state: {vid}} = useLocation()

  return (
    <div className="relative pt-responsive w-11/12">
      <iframe
        // width="920"
        // height="500"
        className="w-full h-responsive top-8 bottom-0 left-16 right-0 absolute"
        src={vid}
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ClassFrame;
