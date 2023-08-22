import React from "react";
import classes from "./sliderCard.module.scss";
import image from "../../assets/image/61edb8ef-b312-4376-b699-a77dbe9dd4c6.png";

function SliderCard() {
  return (
    <>
      {/* <div className={classes.sliderCard}>
        <img className={classes["sliderCard--image"]} src={image} alt="" />
        <div className={classes["sliderCard--title"]}>Sofas</div>
      </div> */}

      <div className={classes.sliderCard}>
        <img src={image} alt="" />
        <p className={classes["sliderCard--title"]}>CUSHIONS</p>
      </div>
    </>
  );
}

export default SliderCard;
