import React from 'react';
import review1 from '../assets/img/review1.png';
import review2 from '../assets/img/review2.png';
import review3 from '../assets/img/review3.png';
import Slider from 'react-slick';

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };
  return (
    <Slider {...settings}>
      <div className="flex">
        <img src={review1} alt="" width="350" />
      </div>
      <div>
        <img src={review2} alt="" width="350" />
      </div>
      <div>
        <img src={review3} alt="" width="350" />
      </div>
    </Slider>
  );
};

export default ReviewSlider;
