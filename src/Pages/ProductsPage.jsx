import React, { useState } from "react";
import ProductsList from "../Assets/.data/productsConstant";
import Footer from "../Component/Footer";
import Pagination from "../Component/Pagination";
import Products from "../Component/Products";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Get current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section style={{ width: "90%" }} className="mx-auto">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <div className="row">
              <Products ProductsList={currentProducts} />
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalproducts={ProductsList.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
