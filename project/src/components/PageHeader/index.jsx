import React from "react";
import classes from "./pageHeader.module.scss";
import IconButton from "../IconButton";

function PageHeader({ title, description, image }) {
  return (
    <>
      <div className="container">
        <div className={classes.pageheader}>
          <div className={classes["pageheader__content"]}>
            <div className={classes["pageheader__content--title"]}>{title}</div>
            <div className={classes["pageheader__content--description"]}>
              {description}
            </div>
            <div className={classes["pageheader__content--button"]}>
              <IconButton children={"Shop Now"} />
            </div>
          </div>
          <div className={classes["pageheader__image"]}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
