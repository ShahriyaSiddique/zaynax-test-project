import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filter from "../Assets/.data/filter";
import filterList from "../Assets/.data/filter";

export default function AllFilters() {
  return (
    <div className="mt-3 p-3">
      <h5 className="pb-2">Filters</h5>

      {filterList.map((filter) => (
        <h5
          className="font-weight-normal border rounded-pill p-2 min-content bg-blue"
          style={{ backgroundColor: "rgba(221, 221, 221, 0.376)" }}
        >
          {filter}
          <span className="pl-2">
            <FontAwesomeIcon icon={faTimesCircle} size="xs" />
          </span>
        </h5>
      ))}
    </div>
  );
}
