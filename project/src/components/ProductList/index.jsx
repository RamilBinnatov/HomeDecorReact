import React, { Children } from "react";
import "./productList.scss";
import { Link } from "react-router-dom";

function ProductList({ children, count = 4 }) {
  return (
    <div className="products">
      <div className="container">
        {(() => {
          if (window.location.pathname === "/home") {
            return (
              <div className="sectHead">
                <div className="head">PRODUCTS</div>
                <div className="action">
                  <Link to={"/about"}>SEE ALL</Link>
                </div>
              </div>
            );
          }
        })()}

        <div
          className="product-grid"
          style={{ "grid-template-columns": `repeat(${count}, 1fr)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
