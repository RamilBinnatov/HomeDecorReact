import React, { useState, useEffect } from "react";
import "./slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = ({ children, count = 4 }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    rules: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider className="slider" {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default MySlider;
