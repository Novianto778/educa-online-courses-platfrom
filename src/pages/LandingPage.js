import React from 'react';
import AllCategories from '../components/AllCategories';
import CourseContainer from '../components/CourseContainer';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo';

const LandingPage = ({isLogin}) => {
  return (
    <>
      <Navbar isLogin={isLogin} />
      <Hero />
      <AllCategories />
      <CourseContainer sectionTitle="Popular Courses" />
      <CourseContainer sectionTitle="Learning Path" />
      <Promo />
      <Footer />
    </>
  );
};

export default LandingPage;
