import React, { useState, useEffect } from "react";
import "./slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = ({ children, head, count = 4 }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    // autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="sliderSection">
      <div className="container">
        <div className="pageHead">
          <div className="head">{head}</div>
        </div>
        <Slider className="slider" {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default MySlider;
