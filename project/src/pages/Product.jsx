import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../components/BreadCrumbs";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import "./ProductPage.scss";
import CollectionHead from "../components/CollectionHead";

function Product() {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState({
    filterKey: "",
    filterVal: [],
    sortingKey: "",
    sortingType: "asc",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // handle error
      }
    };
    const fetchCollections = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Collection");
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // handle error
      }
    };

    fetchCategories();
    fetchCollections();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { filterVal, filterKey, sortingKey, sortingType } = sortingOption;
        // filtering logic
        let filter = "";
        filterVal.length &&
          filterVal.forEach((val) => {
            filter += `&${filterKey}=${val}`;
          });

        const res = await axios(
          `http://localhost:3000/products?_sort=${sortingKey}&_order=${sortingType}${filter}`
        );

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    })();
  }, [sortingOption]);

  return (
    // <main className="container">
    //   <div className="pahehead">
    //     <Breadcrumbs />
    //   </div>
    //   <div className="all">
    //     <div className="filters">
    //       <Filter
    //         setSortingOption={setSortingOption}
    //         filterKey="category"
    //         filters={categories}
    //         title="Categories"
    //         currentFilterKey={sortingOption.filterKey}
    //       />
    // <Filter
    //   setSortingOption={setSortingOption}
    //   filterKey="collection"
    //   filters={collections}
    //   title="Collections"
    //   currentFilterKey={sortingOption.filterKey}
    // />
    //     </div>
    //     <div className="productarea">
    //       <Sort sortingOption={sortingOption} onSortChange={setSortingOption} />
    // <ProductList count={3}>
    //   {products.map((product) => {
    //     return (
    //       <ProductCard
    //         key={product.id}
    //         img={product.img}
    //         name={product.name}
    //         price={product.price}
    //       />
    //     );
    //   })}
    //       </ProductList>
    //     </div>
    //   </div>
    // </main>

    <main className="container">
      <div className="pagehead">
        <div className="breadCrumps">
          <Breadcrumbs />
        </div>
        <div className="onPage">
          <div className="head">
            <CollectionHead />
          </div>
          <div className="sort">
            <Sort />
          </div>
        </div>
      </div>

      <div className="pageMain">
        <div className="filter">
          <div className="category">
            <Filter
              setSortingOption={setSortingOption}
              filterKey="category"
              filters={categories}
              title="Categories"
              currentFilterKey={sortingOption.filterKey}
            />
          </div>
          <div className="collection">
            {" "}
            <Filter
              setSortingOption={setSortingOption}
              filterKey="collection"
              filters={collections}
              title="Collections"
              currentFilterKey={sortingOption.filterKey}
            />
          </div>
        </div>
        <div className="productPageContent">
          <ProductList count={3}>
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </ProductList>
        </div>
      </div>
    </main>
  );
}

export default Product;
