import React from "react";
import "./Products.css";
import ProductsItem from "../components/ProductsItem";


let Products = () => {
  let itemNameD = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
  ];
  return (
    <>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <h2>Products</h2>
        <div className="row">
          {itemNameD.map((item) => {
            return <ProductsItem itemName={item} />;
          })}
        </div>
        
      </main>
    </>
  );
};

export default Products;
