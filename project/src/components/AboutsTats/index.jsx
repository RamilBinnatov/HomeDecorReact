import React from "react";
import classes from "./aboutStats.module.scss";

function AboutStats() {
  return (
    <div className="container">
      <div className={classes.stats}>
        <div className={classes["stats__item"]}>
          <div className={classes["stats__item--number"]}>500+</div>
          <div className={classes["stats__item--text"]}>PROJECTS</div>
        </div>
        <div className={classes["stats__item"]}>
          <div className={classes["stats__item--number"]}>70+</div>
          <div className={classes["stats__item--text"]}>PARTNERS</div>
        </div>
        <div className={classes["stats__item"]}>
          <div className={classes["stats__item--number"]}>30K+</div>
          <div className={classes["stats__item--text"]}>FOLLOWERS</div>
        </div>
        <div className={classes["stats__item"]}>
          <div className={classes["stats__item--number"]}>25+</div>
          <div className={classes["stats__item--text"]}>YEARS</div>
        </div>
      </div>
    </div>
  );
}

export default AboutStats;
