import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filterList from "../Assets/.data/filter";

export default function AllFilters() {
  return (
    <div className="mt-3 p-3">
      <h5 className="pb-2">Filters</h5>

      {filterList.map((filter) => (
        <div>
          <h5
            className="font-weight-normal border rounded-pill px-3 py-1 d-inline-block"
            style={{
              backgroundColor: "rgba(221, 221, 221, 0.376)",
            }}
          >
            {filter}
            <span className="pl-2">
              <FontAwesomeIcon icon={faTimesCircle} size="xs" />
            </span>
          </h5>
        </div>
      ))}

      <h5
        className="font-weight-normal border rounded-pill px-3 py-1 d-inline-block"
        style={{
          backgroundColor: "#26c9776c",
          color: "#00b55b",
        }}
      >
        Clear all
      </h5>
    </div>
  );
}
