import React, { useState } from 'react';

const CourseContent = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const playSvg = (
    <svg
      className="w-6 h-6 cursor-pointer"
      fill="none"
      stroke="#36C2CF"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const lockSvg = (
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
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  const dropdownSvg = (
    <svg
      onClick={() => setIsOpen((o) => !o)}
      className="w-6 h-6 cursor-pointer"
      fill="none"
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const dropupSvg = (
    <svg
      onClick={() => setIsOpen((o) => !o)}
      className="w-6 h-6 cursor-pointer"
      fill="none"
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );

  return (
    <>
      <div className="bg-white shadow px-6 border-b-2 border-gray-100 py-3 flex items-center justify-between">
        <p>{data.title}</p>
        {isOpen ? dropupSvg : dropdownSvg}
      </div>

      {isOpen &&
        data.videos.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="bg-gray-200 border-b-2 border-gray-300 px-6 py-3 flex justify-between items-center">
              <p>{item.title}</p>
              {idx === 0 ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {playSvg}
                </a>
              ) : (
                lockSvg
              )}
            </div>
          </React.Fragment>
        ))}
    </>
  );
};

export default CourseContent;
