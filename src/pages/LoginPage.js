import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../parts/Input';
import Button from '../parts/Button';
import ReviewSlider from '../parts/ReviewSlider';
import { useEduca } from '../context/context';

const LoginPage = () => {
  const { signIn } = useEduca();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    signIn(values.email, values.password).catch((err) => {
      console.log(err.message);
    });
  };

  const validate = () => {
    
  }
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
              validate={validate}
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
                      <Button
                        orange
                        full
                        className="mt-6"
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                      >
                        Login
                      </Button>
                      <p className="text-gray-500 text-center mt-2">
                        Don't have an account?{' '}
                        <Link to="/signup">
                          <span className="text-black cursor-pointer">
                            Sign Up
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

export default LoginPage;
