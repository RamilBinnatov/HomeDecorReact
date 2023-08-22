import React from "react";
import "./pageHeader.scss";
import IconButton from "../IconButton";

function PageHeader({ title, description, image }) {
  return (
    <>
      <div className="container">
        <div className="main-header">
          <div className="main-header__left">
            <h1 className="main-header__left--title">{title}</h1>
            <p className="main-header__left--description">{description}</p>
            <IconButton />
          </div>
          <div className="main-header__right">
            <div className="main-header__right--image">
              <img style={{ borderRadius: "1rem" }} src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
