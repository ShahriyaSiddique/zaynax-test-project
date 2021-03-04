import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import searchBtn from "../Assets/img/search.png";

export default function FilterCommon({
  name,
  items,
  more,
  search,
  show,
  scrollbar,
}) {
  const [visibility, setvisibility] = useState(show);

  return (
    <div
      className={`filterCommon mt-3`}
      style={{ borderTop: "2px black dashed", cursor: "pointer" }}
    >
      <div
        className="d-flex justify-content-between p-3"
        onClick={() => setvisibility(!visibility)}
      >
        <h5>{name}</h5>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </div>

      {visibility ? (
        <div className={`filterCommon px-3`}>
          {search ? (
            <div className="search py-2">
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
          ) : null}
          <div
            style={{ height: "150px", overflowY: scrollbar ? "scroll" : "" }}
            className="scrollbar"
          >
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <input
                    name={item}
                    type="checkbox"
                    className="checkbox-round mr-2"
                  ></input>
                  <label htmlFor={item}>{item}</label>
                </li>
              ))}
            </ul>
          </div>
          {more ? (
            <h5 className="font-weight-normal pt-3">{more} MORE</h5>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
