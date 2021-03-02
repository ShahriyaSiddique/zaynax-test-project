import React, { useState } from "react";
import ProductsList from "../Assets/.data/productsConstant";
import Pagination from "../Component/Pagination";
import Products from "../Component/Products";

export default function ProductsPage() {
  console.log(ProductsList.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <section style={{ padding: "0 30px" }}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <div className="row">
              <Products ProductsList={currentProducts} />
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalproducts={ProductsList.length}
            />
          </div>
        </div>
      </section>
    </>
  );
}
