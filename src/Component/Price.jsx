import { faAngleDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Price() {
  return (
    <div
      className="filterCommon mt-3 p-3 price"
      style={{ borderTop: "2px black dashed", cursor: "pointer" }}
    >
      <div className="d-flex justify-content-between p-3">
        <h5>Price</h5>
      </div>

      <div className="row px-3 d-flex">
        <div className="col-4 pr-1">
          <input type="text" className="w-100" placeholder="Min" />
        </div>
        <span>-</span>
        <div className="col-4 pl-1">
          <input type="text" className="w-100" placeholder="Max" />
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="border-0 priceBtn">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
