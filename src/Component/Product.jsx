import React from "react";
import img from "../Assets/img/asset-4.png";

export default function Product({ title, currentPrice, oldPrice, discount }) {
  return (
    <>
      <div className="col-3 p-1">
        <div
          className="d-flex flex-column border px-4"
          style={{ borderRadius: "15px", maxWidth: "97%" }}
        >
          <img className="mx-auto" width="200" src={img} alt="" />
          <h5 className="pr-4 pb-2">{title}</h5>
          {title.length < 31 ? <br /> : ""}

          <h4 className="pb-3">BDT. {currentPrice}</h4>
          <div
            className="d-flex justify-content-between pb-3"
            style={{ color: "rgba(181, 181, 181,.8)", fontWeight: "400" }}
          >
            <h5 className="font-weight-normal text-decoration-line-through">
              BDT. {oldPrice}
            </h5>
            <h5 className="font-weight-normal">{discount}% Off</h5>
          </div>
        </div>
      </div>
    </>
  );
}
