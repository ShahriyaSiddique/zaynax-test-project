import React from "react";

const Pagination = ({
  productsPerPage,
  totalproducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      className="px-4 py-3 mt-4 d-flex border border-light shadow-sm rounded-pill justify-content-center align-items-center mx-auto"
      style={{ width: "min-content" }}
    >
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`px-3 py-2 ${
            currentPage === number ? "current-page" : ""
          }`}
        >
          <a
            onClick={() => paginate(number)}
            href="!#"
            className="text-decoration-none text-black-50"
          >
            {number}
          </a>
        </div>
      ))}
      <a
        onClick={() =>
          paginate(
            pageNumbers.length < currentPage + 1 ? currentPage : ++currentPage
          )
        }
        href="!#"
        className="text-decoration-none next-btn px-3 py-2"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
