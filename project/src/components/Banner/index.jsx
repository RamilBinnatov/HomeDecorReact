import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./banner.module.scss";
import IconButton from "../IconButton";

function Banner() {
  const urll = "http://localhost:3000"; // JSON verilerinin alınacağı URL

  const [banners, setBanner] = useState([]);

  const getBanner = async () => {
    try {
      const response = await axios.get(`${urll}/banner`);
      setBanner(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div>
      {banners.map((banner, index) => (
        <div className={classes.banner} key={index}>
          <div className={classes["banner--title"]}>{banner.title}</div>
          <div className={classes["banner--description"]}>
            {banner.description}
          </div>
          <IconButton children={"Shop Now"} />
        </div>
      ))}
    </div>
  );
}

export default Banner;
