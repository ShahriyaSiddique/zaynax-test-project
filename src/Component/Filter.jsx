import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Catagory from "./Catagory";
import FilterCommon from "./FilterCommon";
import brandList from "../Assets/.data/brand";
import countryList from "../Assets/.data/country";
import discountList from "../Assets/.data/discount";
import fabricList from "../Assets/.data/fabric";
import patternList from "../Assets/.data/pattern";
import serviceList from "../Assets/.data/service";
import Size from "./Size";
import Color from "./Color";
import Rating from "./Rating";
import AllFilters from "./AllFilters";
import Price from "./Price";

export default function Filter() {
  return (
    <div className="filter border h-100" style={{ borderRadius: "15px" }}>
      <AllFilters />
      <Catagory />
      <FilterCommon
        name="Brand"
        items={brandList}
        more="236"
        search={true}
        show={true}
        scrollbar={true}
      />
      <FilterCommon
        name="Country"
        items={countryList}
        more="2"
        search={true}
        show={true}
        scrollbar={true}
      />
      <Size />
      <Color />
      <FilterCommon
        name="Discount"
        items={discountList}
        show={true}
        scrollbar={false}
      />
      <Price />
      <Rating />
      <FilterCommon
        name="Fabric"
        items={fabricList}
        more="5"
        show={true}
        scrollbar={true}
      />
      <FilterCommon
        name="Pattern"
        items={patternList}
        more="26"
        show={true}
        scrollbar={true}
      />
      <FilterCommon
        name="Service"
        items={serviceList}
        show={true}
        scrollbar={false}
      />
      <FilterCommon
        name="Clothing Style"
        items={[]}
        show={false}
        scrollbar={true}
      />
      <FilterCommon
        name="Men's Trend"
        items={[]}
        show={false}
        scrollbar={true}
      />
      <FilterCommon name="Fit Type" items={[]} show={false} scrollbar={true} />
    </div>
  );
}
