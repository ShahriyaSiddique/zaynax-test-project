import React from "react";
import b from "../Assets/img/Whyus/b.png";
import f from "../Assets/img/Whyus/f.png";
import pay from "../Assets/img/Whyus/pay.png";
import q from "../Assets/img/Whyus/q.png";
import ser from "../Assets/img/Whyus/ser.png";

export default function WhyUs() {
  return (
    <div style={{ width: "80%" }} className="mx-auto py-5 my-5">
      <div className="why-us d-flex">
        <div className="text-center">
          <div>
            <img src={q} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
        <div className="text-center">
          <div>
            <img src={b} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
        <div className="text-center">
          <div>
            <img src={f} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
        <div className="text-center">
          <div>
            <img src={pay} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
        <div className="text-center">
          <div>
            <img src={ser} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
      </div>
    </div>
  );
}
