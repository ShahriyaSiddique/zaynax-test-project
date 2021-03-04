import React from "react";
import img1 from "../Assets/img/asset-4.png";
import img2 from "../Assets/img/asset-5.png";
import img3 from "../Assets/img/asset-6.png";
import img4 from "../Assets/img/asset-7.png";

export default function Product({
  title,
  currentPrice,
  oldPrice,
  discount,
  img,
}) {
  let productImg;
  switch (img) {
    case 1:
      productImg = img1;
      break;
    case 2:
      productImg = img2;
      break;
    case 3:
      productImg = img3;
      break;
    case 4:
      productImg = img4;
      break;
    default:
    // code block
  }
  return (
    <>
      <div className="col-3 p-1">
        <div
          className="d-flex flex-column border px-3"
          style={{ borderRadius: "15px", maxWidth: "97%" }}
        >
          <img className="mx-auto" width="200" alt="" />
          <h5 className="pb-2">{title}</h5>
          {/* {title.length < 31 ? <br /> : ""} */}

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
