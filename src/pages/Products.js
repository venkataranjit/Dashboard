import React from "react";
import "./Products.css";
import ProductsItem from "../components/ProductsItem";
import products from "./productsdata";

let Products = () => {
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ marginBottom: "60px" }}
      >
        <h2>Products</h2>
        <div className="row">
          {products.map((item) => {
            return (
              <ProductsItem
                key={item.id}
                itemId={item.id}
                itemTitle={item.title}
                itemDescription={item.description}
                itemPrice={item.price}
                itemBrand={item.brand}
                itemCategory={item.category}
                itemThumbnail={item.thumbnail}
                itemRating={item.rating}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Products;
