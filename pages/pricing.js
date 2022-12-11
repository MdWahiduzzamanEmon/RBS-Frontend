import axios from "axios";
import React from "react";
import PricingBanner from "../components/Pricing/PricingBanner";
import Pricing from "../components/Pricing/Pricing";
import Policy from "../components/Pricing/Policy/Policy";
import CompareBoard from "../components/compareBoard.js/CompareBoard";

const PricingMain = () => {
  const [pricingData, setPricingData] = React.useState({});
  const [policyData, setPolicyData] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/pricing/pricingapi").then((res) => {
      setPricingData(res.data);
      console.log(pricingData);
    });
    axios.get("/api/pricing/policyapi").then((res) => {
      setPolicyData(res.data);
    });
  }, []);

  return (
    <>
      {/* <PricingBanner /> */}
      <Pricing pricingData={pricingData} />
      {/*//**************Comparing softwares******************/}
      <CompareBoard />
      {/* <Policy policyData={policyData} /> */}
    </>
  );
};

export default PricingMain;
