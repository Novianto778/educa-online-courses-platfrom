import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Input from '../parts/Input';
import Button from '../parts/Button';
import ReviewSlider from '../parts/ReviewSlider';
import { useEduca } from '../context/context';

const SignupPage = () => {
  const { createUser } = useEduca();

  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password is too short - should be 8 characters minimum.'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const onSubmit = (values) => {
    createUser(values.email, values.password);
  };
  return (
    <>
      <div className="w-full">
        <nav className="mx-auto w-10/12 py-4">
          <Link to="/">
            <h6 className="font-semibold text-xl">Educa</h6>
          </Link>
        </nav>
        <div className="flex mx-auto w-10/12 mt-16 items-center justify-between">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-medium text-3xl">
              Start Learning, <br /> Advance Your Skills
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="sm:w-2/3 w-full">
                      <Input
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="your email address"
                      />
                      <Input
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="password"
                      />
                      <Input
                        name="passwordConfirmation"
                        label="Confirm Password"
                        type="password"
                        placeholder="confirm your password"
                      />
                      <Button
                        orange
                        full
                        className="mt-6"
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                      >
                        Sign Up
                      </Button>
                      <p className="text-gray-500 text-center mt-2">
                        Don't have an account?{' '}
                        <Link to="/login">
                          <span className="text-black cursor-pointer">
                            Sign In
                          </span>
                        </Link>
                      </p>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="w-1/2 hidden lg:block">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
