import React from "react";
import facebook from "../Assets/img/social/facebook.png";
import instagram from "../Assets/img/social/instagram.png";
import linkedin from "../Assets/img/social/linkedin.png";
import twitter from "../Assets/img/social/twitter.png";
import youtube from "../Assets/img/social/youtube.png";
import footerImg from "../Assets/img/footer-img.png";
import rocket from "../Assets/img/payment/rocket.png";
import visa from "../Assets/img/payment/visa.png";
import Mastercard from "../Assets/img/payment/Mastercard.png";
import nagad from "../Assets/img/payment/nagad.png";
import bKash from "../Assets/img/payment/bKash.png";
import amex from "../Assets/img/payment/amex.png";
import sendBtn from "../Assets/img/enter.png";
import email from "../Assets/img/Contact/mail-send-line.png";
import hotline from "../Assets/img/Contact/customer-service-2-line.png";
import wholesale from "../Assets/img/Contact/phone-line.png";

export default function Footer() {
  return (
    <section className="container-fluid">
      <hr />
      <div className="social-media-icons min-content mx-auto d-flex pt-3">
        <a href="!#" className="px-4" style={{ transform: "scale(1.1)" }}>
          <img src={facebook} alt="" />
        </a>
        <a href="!#" className="px-4" style={{ transform: "scale(1.1)" }}>
          <img src={twitter} alt="" />
        </a>
        <a href="!#" className="px-4 " style={{ transform: "scale(1.1)" }}>
          <img src={linkedin} alt="" />
        </a>
        <a href="!#" className="px-4 " style={{ transform: "scale(1.1)" }}>
          <img src={instagram} alt="" />
        </a>
        <a href="!#" className="px-4" style={{ transform: "scale(1.1)" }}>
          <img src={youtube} alt="" />
        </a>
      </div>

      <div className="footer">
        <div className="row">
          <div className="offset-1"></div>
          <div className="col-3">
            <div>
              <img src={footerImg} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column h-100 justify-content-center">
              <div className="subscribe w-75 mx-auto">
                <h5>SUBSCRIBE</h5>
                <p>Get the latest news from zDrop</p>
                <input type="text" placeholder="Email address" value="" />
                <button>
                  <img src={sendBtn} alt="" />
                </button>
              </div>
              <div className="footer-menu py-4">
                <ul className="nav">
                  <li className="nav-link">
                    <a href="!#">About zDrop</a>
                  </li>
                  <li className="nav-link">
                    <a href="!#">FAQ & Support</a>
                  </li>
                  <li className="nav-link">
                    <a href="!#">Terms & Conditions</a>
                  </li>
                  <li className="nav-link">
                    <a href="!#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="payment-method d-flex justify-content-around w-75 mx-auto">
                <div className="border px-3 py-2 my-auto mr-2">
                  <img src={bKash} alt="" />
                </div>
                <div className="border px-3 py-2 my-auto mr-2">
                  <img src={nagad} alt="" />
                </div>
                <div className="border px-3 py-2 my-auto mr-2">
                  <img src={rocket} alt="" />
                </div>
                <div className="border px-3 py-2 my-auto mr-2">
                  <img src={visa} alt="" />
                </div>
                <div className="border px-3 py-1 my-auto mr-2">
                  <img src={Mastercard} alt="" />
                </div>

                <div className="border px-3 py-2 my-auto">
                  <img src={amex} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="contact-us mt-5">
              <h5>CONTACT US</h5>
              <ul>
                <li className="d-flex">
                  <div className="mr-2">
                    <img src={hotline} alt="" />
                  </div>
                  <p>
                    <span>Hotline :</span>
                    <br />
                    +8801929459195 (10am-10pm/Sat-Thur)
                  </p>
                </li>
                <li className="d-flex">
                  <div className="mr-2">
                    <img src={wholesale} alt="" />
                  </div>
                  <p>
                    <span>Whole Sales :</span> <br /> 01929459195 (10am-12pm)
                  </p>
                </li>
                <li className="d-flex">
                  <div className="mr-2">
                    <img src={email} alt="" />
                  </div>
                  <p>
                    <span>Email :</span>
                    <br />
                    support.example@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="offset-1"></div>
        </div>
      </div>
    </section>
  );
}
