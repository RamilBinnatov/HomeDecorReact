import React from "react";
import classes from "./collectionHead.module.scss";

function CollectionHead() {
  return (
    <div className={classes.collectionHead}>
      <div className="container">
        <h2 className={classes["collectionHead--title"]}>COLLECTIONS</h2>

        <p className={classes["collectionHead--description"]}>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime
        </p>
      </div>
    </div>
  );
}

export default CollectionHead;
