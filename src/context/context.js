import React, { useReducer, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { popularcourse } from '../data';
import { auth, firestore } from '../firebase';

const EducaContext = React.createContext();

const initialState = {
  isLogin: false,
  cart: [],
  total: 0,
  user: null,
  popular: [...popularcourse],
  points: 0,
  coupon: { code: '2021newyear', disc: 100 },
  pointHistory: [
    {
      title: 'React Js Frontend Challenges',
      date: '4 February 2021 - 10 Februari 2021',
      point: 80,
      type: 'get',
    },
    {
      title: 'React Js Frontend Challenges',
      date: '4 February 2021 - 10 Februari 2021',
      point: 80,
      type: 'get',
    },
    {
      title: 'Redeem Educa T-Shirt',
      date: '4 February 2021 - 10 Februari 2021',
      point: 80,
      type: 'redeem',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newCart = action.payload;
      newCart.inCart = true;
      firestore.collection('cart').add(newCart);
      return {
        ...state,
        cart: [...state.cart, newCart],
      };
    }
    case 'ADD_TOTAL': {
      let totalPrice = state.cart
        .map((item) => item.price)
        .reduce((a, b) => a + b, 0);
      if (state.coupon) {
        totalPrice -= totalPrice * (state.coupon.disc / 100);
      }
      return {
        ...state,
        total: totalPrice,
      };
    }
    case 'REMOVE_CART': {
      const filteredCart = state.cart.filter((item) => item.id !== action.id);
      const deletedCart = state.popular.find((item) => item.id === action.id);
      deletedCart.inCart = false;
      return {
        ...state,
        cart: filteredCart,
      };
    }
    case 'SET_USER': {
      if (action.payload) {
        return { ...state, isLogin: true };
      } else {
        return { ...state, isLogin: false };
      }
    }
    case 'SET_POPULAR': {
      return {
        ...state,
        popular: action.payload,
      };
    }
  }
};

export function EducaProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <EducaContext.Provider value={value} {...props} />;
}

export function useEduca() {
  const context = useContext(EducaContext);
  if (!context) {
    throw new Error(`useCount must be used within a EducaProvider`);
  }
  const [state, dispatch] = context;
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: 'SET_USER', payload: user });
    });
  }, []);

  // firestore.collection('cafes').onSnapshot((snapshot) => {
  //   let changes = snapshot.docChanges();
  //   console.log(changes);
  //   changes.forEach((change) => {
  //     if (change.type == 'added') {
  //       console.log(change.doc.id)
  //     } else if (change.type == 'removed') {
  //       // let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
  //       // cafeList.removeChild(li)
  //     }
  //   });
  // });

  // useEffect(() => {
  //   // firestore.collection('popularcourse').add({ popular: popularcourse });
  //   // setPopularData();
  // }, []);

  // firestore
  // .collection('cart')
  // .doc('5vHq8gfIRnWArZ8G2Dvn')
  // .update({ inCart: false });

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });

  const addTotal = () => dispatch({ type: 'ADD_TOTAL' });

  const removeCart = (id) => dispatch({ type: 'REMOVE_CART', id: id });

  const createUser = async (email, password) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      history.push('/');

      // generateUserDocument(user, {displayName});
    } catch (error) {
      // setError('Error Signing up with email and password');
      console.log(error);
    }
  };

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch(() => console.log('no user'));
  };

  const signOut = () => {
    auth.signOut();
  };

  // const setPopularData = async () => {
  //   const response = firestore.collection('popularcourse');
  //   const data = await response.get();

  //   dispatch({type: 'SET_POPULAR', payload: data.docs[0].data().popular})

  //   // data.forEach((item) => {
  //   //   dispatch({ type: 'SET_POPULAR', payload: item.data().popular });
  //   // });
  // };

  return {
    state,
    dispatch,
    addToCart,
    addTotal,
    removeCart,
    createUser,
    signIn,
    signOut,
  };
}
