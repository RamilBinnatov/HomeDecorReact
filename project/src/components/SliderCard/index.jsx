import React from "react";
import classes from "./sliderCard.module.scss";

function SliderCard({ img, title }) {
  return (
    <>
      <div className={classes.sliderCard}>
        <img src={img} alt="" />
        <p className={classes["sliderCard--title"]}>{title}</p>
      </div>
    </>
  );
}

export default SliderCard;
