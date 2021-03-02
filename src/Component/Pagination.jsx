import React from "react";

const Pagination = ({ productsPerPage, totalproducts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div
      className="d-flex border justify-content-center mx-auto p-3"
      style={{ width: "min-content" }}
    >
      {pageNumbers.map((number) => (
        <div key={number} className="px-2">
          <a href="!#">{number}</a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
