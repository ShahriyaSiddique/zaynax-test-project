import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ratingList from "../Assets/.data/rating";

export default function Rating() {
  const [visibility, setvisibility] = useState(true);

  return (
    <div
      className={`filterCommon mt-3`}
      style={{ borderTop: "2px black dashed", cursor: "pointer" }}
    >
      <div
        className="d-flex justify-content-between p-3"
        onClick={() => setvisibility(!visibility)}
      >
        <h5>Rating</h5>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </div>

      {visibility ? (
        <div className={`filterCommon px-3`}>
          <div
            style={{ height: "150px", overflowY: "scroll" }}
            className="scrollbar"
          >
            <ul>
              {ratingList.map((item, index) => (
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
        </div>
      ) : null}
    </div>
  );
}
