import React, { useState } from "react";
import ProductsList from "../Assets/.data/productsConstant";
import Footer from "../Component/Footer";
import Pagination from "../Component/Pagination";
import Products from "../Component/Products";
import searchBtn from "../Assets/img/search.png";
import Filter from "../Component/Filter";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

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
      <section style={{ width: "80%" }} className="mx-auto py-5">
        <div className="page-title pb-2">
          <h5>
            <span className="text-black-50 pr-4">Homepage</span>{" "}
            <span>All Products</span>
          </h5>
        </div>
        <hr />
        <div className="filter-search d-flex py-4 align-items-center justify-content-between">
          <div className="search-result">
            <h5 className="font-weight-normal">
              Showing 1 – <span>40</span> of <span>80,068</span> products
            </h5>
          </div>
          <div className="refine-by">
            <h5>
              <span className="pr-3">Refine By</span>
              <span className="pr-3">|</span>
              <span>
                <select>
                  <option selected value="price">
                    Price
                  </option>
                  <option value="price">Price</option>
                  <option value="price">Price</option>
                  <option value="price">Price</option>
                </select>
              </span>
            </h5>
          </div>
          <div className="sort-by">
            <h5>
              <span className="pr-3">Sort by</span>
              <span className="pr-3">|</span>
              <span>
                <select>
                  <option selected value="bestsellers">
                    Best Sellers
                  </option>
                  <option value="bestsellers">Best Sellers</option>
                  <option value="bestsellers">Best Sellers</option>
                  <option value="bestsellers">Best Sellers</option>
                </select>
              </span>
            </h5>
          </div>
          <div className="offset-1"></div>
          <div className="search w-25">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-right-0 py-4 px-3"
                placeholder="Search"
              />
              <div class="input-group-append ">
                <button
                  class="btn btn-outline-secondary border-left-0 "
                  type="button"
                >
                  <img src={searchBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
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
