import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { EducaProvider } from './context/context';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import ClassDashboard from './pages/ClassDashboard';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import SignupPage from './pages/SignupPage';
import ScrollTop from './parts/ScrollTop';

// const LazyMyClass = React.lazy(() => import('./components/MyClass'));
// const LazyPoints = React.lazy(() => import('./components/Points'));
// const LazyChallenges = React.lazy(() => import('./components/Challenges'));

function App() {
  return (
    <>
      <EducaProvider>
        <Router>
          <ScrollTop>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route path="/course/:title">
                <DetailPage />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/class/:title">
                <ClassDashboard />
              </Route>
              <Route path="/courses/:categories">
                <Categories />
              </Route>

              <Route path="/:dashboard">
                <Dashboard />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </ScrollTop>
        </Router>
      </EducaProvider>
    </>
  );
}

export default App;
