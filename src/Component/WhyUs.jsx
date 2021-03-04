import React from "react";
import Brands from "../Assets/img/Whyus/Brands.png";
import Delivery from "../Assets/img/Whyus/Delivery.png";
import Payment from "../Assets/img/Whyus/Payment.png";
import Quality from "../Assets/img/Whyus/Quality.png";
import Service from "../Assets/img/Whyus/Service.png";

export default function WhyUs() {
  return (
    <div style={{ width: "80%" }} className="mx-auto py-5 my-5">
      <div className="why-us d-flex text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={Quality} alt="" />
          </div>
          <h5>Quality and Saving</h5>
          <h5>Comprehensive quality control and affordable prices</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={Brands} alt="" />
          </div>
          <h5>Global Brands</h5>
          <h5>Buy you favorite items from your favorite global brands</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={Delivery} alt="" />
          </div>
          <h5>Fast Delivery</h5>
          <h5>Fast and convenient door to door delivery</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={Payment} alt="" />
          </div>
          <h5>Secure Payment</h5>
          <h5>Different secure payment methods</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={Service} alt="" />
          </div>
          <h5>Professional Service</h5>
          <h5>Efficient customer support from passionate team</h5>
        </div>
      </div>
    </div>
  );
}
