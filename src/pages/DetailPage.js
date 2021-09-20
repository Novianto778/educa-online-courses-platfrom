import React from 'react';
import { useLocation } from 'react-router-dom';
import BuyCard from '../components/BuyCard';
import CourseContent from '../components/CourseContent';
import DetailCard from '../components/DetailCard';
import DetailHeader from '../components/DetailHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseReview from '../components/CourseReview';
import MenuBottom from '../components/MenuBottom';
import DetailSectionContainer from '../components/DetailSectionContainer';

const DetailPage = () => {
  const {
    state: { data },
  } = useLocation();
  return (
    <>
      <Navbar />
      <DetailHeader data={data} />
      <MenuBottom data={data} />
      <div className="mx-auto lg:w-8/12 w-11/12 justify-between -mt-24 md:flex hidden">
        {data.card.map((item, idx) => {
          return <DetailCard key={idx} data={item} />;
        })}
      </div>
      <div className="mx-auto flex justify-between w-10/12">
        {/* Left Content */}
        <div className="md:w-7/12 w-full">
          <DetailSectionContainer title="About Course">
            <p className="text-gray-500">{data.description}</p>
          </DetailSectionContainer>

          <DetailSectionContainer title="You Will Learn">
            {data.willLearn.map((item, idx) => (
              <div className="flex items-center mb-2" key={idx}>
                <i className="fas fa-check-circle text-secondary-lightBlue text-xl mr-2"></i>
                <p className="text-gray-600 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </DetailSectionContainer>

          <DetailSectionContainer title="Course Content">
            {data.content.map((item, idx) => (
              <CourseContent key={idx} data={item} />
            ))}
          </DetailSectionContainer>

          <DetailSectionContainer title="Instructor">
            <div className="flex items-center">
              <img
                src={data.img}
                alt={data.title}
                className="rounded-full w-10 h-10 bg-center bg-cover"
              />
              <div className="ml-4">
                <h6>{data.tutor}</h6>
                <p>Web Developer</p>
              </div>
            </div>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              autem eum blanditiis architecto hic odit! Quae eos suscipit quo
              distinctio minus repellat, eaque beatae qui amet sit ex
              consequuntur ab!
            </p>
          </DetailSectionContainer>

          <DetailSectionContainer title="Review">
            <CourseReview data={data} />
            <CourseReview data={data} />
            <CourseReview data={data} />
          </DetailSectionContainer>
        </div>
        <BuyCard data={data} />
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
