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
      />
      <FilterCommon
        name="Country"
        items={countryList}
        more="2"
        search={true}
        show={true}
      />
      <Size />
      <Color />
      <FilterCommon name="Discount" items={discountList} show={true} />
      <Rating />
      <FilterCommon name="Fabric" items={fabricList} more="5" show={true} />
      <FilterCommon name="Pattern" items={patternList} more="26" show={true} />
      <FilterCommon name="Service" items={serviceList} show={true} />
      <FilterCommon name="Clothing Style" items={[]} show={false} />
      <FilterCommon name="Men's Trend" items={[]} show={false} />
      <FilterCommon name="Fit Type" items={[]} show={false} />
    </div>
  );
}
