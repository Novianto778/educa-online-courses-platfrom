import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../parts/Button';
import { useEduca } from '../context/context';
import CartItem from '../components/CartItem';
import { ReactComponent as CartImg } from '../assets/img/empty-cart.svg';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, addTotal } = useEduca();

  useEffect(() => {
    addTotal();
  }, [state.cart]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto w-10/12 mt-10">
        <h1 className="text-3xl text-semibold">
          Shopping Cart: {state.cart.length}{' '}
          {state.cart.length > 1 ? 'courses' : 'course'}
        </h1>
        {state.cart.length ? (
          <div className="flex justify-between">
            <div className="lg:w-8/12 md:7/12 w-full">
              {state.cart.map((item) => (
                <CartItem data={item} key={item.id} />
              ))}
            </div>
            <div className="md:block hidden lg:w-3/12 md:w-5/12">
              <div className="bg-white shadow-lg p-6">
                <h6 className="text-xl border-b-2 border-gray-200">
                  Order Summary
                </h6>
                <p className="mt-2">Total:</p>
                <h3 className="text-2xl mt-1 text-primary-darkBlue">
                  Rp. {state.total}
                </h3>
                <Button orange full className="mt-4">
                  Checkout
                </Button>
              </div>
              {state.coupon ? (
                <p className="text-red-600 text-lg">{state.coupon.code} x</p>
              ) : (
                <div className="flex mt-4 w-auto">
                  <input
                    type="text"
                    className="border-2 w-8/12 border-gray-300"
                  />
                  <p className="text-yellow-500 ml-2">Apply</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center mt-20 flex-col">
            <h1 className="text-4xl">No Item</h1>
            <CartImg width="250" height="250" />
            <Link to="/">
              <h4 className="text-2xl text-primary-darkBlue">Browse Courses</h4>
            </Link>
          </div>
        )}
      </div>

      {state.cart.length > 0 && (
        <div className="w-full md:hidden block bg-gray-900 text-white py-3 fixed bottom-0">
          <div className="flex w-10/12 mx-auto items-center justify-between">
            <h6 className="text-xl">Total: Rp. {state.total}</h6>
            <Button orange>Checkout</Button>
          </div>
        </div>
      )}
      <Footer marginTop="12" />
    </div>
  );
};

export default Cart;
