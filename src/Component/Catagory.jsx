import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Catagory() {
  const [visibility, setvisibility] = useState(true);

  const Data = [
    {
      key: "0",
      label: "Men's Clothing",
      nodes: [
        {
          key: "1",
          label: "Casual Wear",
          nodes: [
            {
              key: "2",
              label: "Shirts",
            },
          ],
        },
      ],
    },
  ];
  const designItem = Data.map((item, index) => (
    <ul>
      <li>
        <span>{item.label}</span>
        {item.nodes &&
          item.nodes.map((subItem, index) => (
            <ul>
              <li>
                <span className="font-weight-bold pl-2">{subItem.label}</span>
                {subItem.nodes &&
                  subItem.nodes.map((nested, index) => (
                    <ul>
                      <li>
                        <span className="pl-4">{nested.label}</span>
                      </li>
                    </ul>
                  ))}
              </li>
            </ul>
          ))}
      </li>
    </ul>
  ));

  return (
    <>
      <div
        className="catagory mt-3 p-3"
        style={{ borderTop: "2px black dashed", cursor: "pointer" }}
      >
        <div
          className="d-flex justify-content-between "
          onClick={() => setvisibility(!visibility)}
        >
          <h5>Catagory</h5>
          <FontAwesomeIcon icon={faAngleDown} size="2x" />
        </div>
        {visibility ? <div class="tree well">{designItem}</div> : null}
      </div>
    </>
  );
}
