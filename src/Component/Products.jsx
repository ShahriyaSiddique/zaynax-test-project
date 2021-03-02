import React from "react";
import Product from "./Product";

export default function Products({ ProductsList }) {
  return (
    <>
      {ProductsList.map(
        ({ title, currentPrice, oldPrice, discount }, index) => (
          <Product
            key={index}
            title={title}
            currentPrice={currentPrice}
            oldPrice={oldPrice}
            discount={discount}
          />
        )
      )}
    </>
  );
}
