import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../components/BreadCrumbs";
import changeTitle from "../helpers/change";
import CollectionHead from "../components/CollectionHead";
import ProductList from "../components/ProductList";
import SliderCard from "../components/SliderCard";

function Collection() {
  const url = "http://localhost:3000";

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    changeTitle("Collection");
  }, []);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const apiUrl = `${url}/Collection`;
        const response = await axios.get(apiUrl);

        setCollections(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCollections();
  }, []);
  return (
    <div>
      <Breadcrumbs />
      <CollectionHead />
      <ProductList count={3}>
        {collections.map((collection) => (
          <SliderCard img={collection.img} title={collection.name} />
        ))}
      </ProductList>
    </div>
  );
}

export default Collection;
