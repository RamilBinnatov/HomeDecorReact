import React from "react";
import "./productList.scss";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="products">
      <div className="container">
        <div className="sectHead">
          <div className="head">PRODUCTS</div>
          <div className="action">
            {/* <a href="">SEE ALL</a> */}
            <Link to={"/about"}>SEE ALL</Link>
          </div>
        </div>

        <div className="product-grid">
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
          <div className="grid-item">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
