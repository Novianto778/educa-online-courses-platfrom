import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextError = ({children}) => {
  return <div className="text-red-500">{children}</div>
}

const Input = ({ label, name, ...rest }) => {
  
  return (
    <div className="mt-6">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <Field
        name={name}
        // type={type}
        // placeholder="your email address"
        className="block pl-2 h-10 border-blue-700 outline-none bg-gray-100 mb-2 w-full"
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
