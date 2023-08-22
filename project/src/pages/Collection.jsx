import React, { useEffect } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import changeTitle from "../helpers/change";
import CollectionHead from "../components/CollectionHead";
import ProductList from "../components/ProductList";
import SliderCard from "../components/SliderCard";

function Collection() {
  useEffect(() => {
    changeTitle("Collection");
  }, []);
  return (
    <div>
      <Breadcrumbs />
      <CollectionHead />
      <ProductList count={3}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </ProductList>
    </div>
  );
}

export default Collection;
