import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import colorList from "../Assets/.data/color";

export default function Color() {
  const [visibility, setvisibility] = useState(true);
  console.log(colorList);
  return (
    <div
      className={"filterCommon mt-3 p-3"}
      style={{ borderTop: "2px black dashed", cursor: "pointer" }}
    >
      <div
        className="d-flex justify-content-between "
        onClick={() => setvisibility(!visibility)}
      >
        <h5>Color</h5>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </div>

      {visibility ? (
        <div className="d-flex justify-content-between mt-2">
          {colorList.map((color) => (
            <div className="border border-darken-2 text-center w-100 p-2 mr-2 text-center">
              <div
                style={{ backgroundColor: `${color}`, height: "30px" }}
              ></div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
