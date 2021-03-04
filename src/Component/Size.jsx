import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import sizeList from "../Assets/.data/size";

export default function Size() {
  const [visibility, setvisibility] = useState(true);
  return (
    <div
      className={"filterCommon mt-3 p-3"}
      style={{ borderTop: "2px black dashed", cursor: "pointer" }}
    >
      <div
        className="d-flex justify-content-between"
        onClick={() => setvisibility(!visibility)}
      >
        <h5>Size</h5>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </div>

      {visibility ? (
        <div className="d-flex justify-content-between mt-2">
          {sizeList.map((size) => (
            <div className="border border-darken-2 text-center w-100 p-1 mr-2 text-center">
              <h5>{size}</h5>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
