import React from 'react';

const Button = ({ children, large, hover, darkBlue, orange }) => {
  const classNames = ['px-8 py-2 text-white shadow'];
  if (large) classNames.push('text-xl');
  if (hover) classNames.push(`hover:${hover} cursor-pointer transition duration-200 ease-in-out`);
  if(darkBlue) classNames.push('bg-primary-darkBlue')
  if(orange) classNames.push('bg-primary-orange')

  return <button className={classNames.join(' ')}>{children}</button>;
};

export default Button;
