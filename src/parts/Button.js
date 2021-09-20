import React from 'react';

const Button = ({
  children,
  className,
  large,
  hover,
  darkBlue,
  orange,
  outline,
  full,
  small,
  ...rest
}) => {
  const classNames = [
    'shadow cursor-pointer transition duration-200 ease-in-out',
    className,
  ];
  if (large) {
    classNames.push('px-20');
  } else if (full) {
    classNames.push('w-full');
  } else if (small) {
    classNames.push('px-4');
  } else {
    classNames.push('px-8');
  }
  if (hover)
    classNames.push(
      `hover:${hover} cursor-pointer transition duration-200 ease-in-out`
    );
  if (darkBlue)
    classNames.push('bg-primary-darkBlue text-white hover:bg-blue-800 py-2');
  if (orange)
    classNames.push('bg-primary-orange text-white hover:bg-red-500 py-2');
  if (outline)
    classNames.push('bg-white border-2 border-black text-black py-1.5');

  return (
    <button className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  );
};

export default Button;
