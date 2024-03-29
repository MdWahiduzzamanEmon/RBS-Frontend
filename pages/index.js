import HomePage from "./Home/HomePage";
import axios from "axios";
import React, { useEffect } from "react";
import app from "../firebase.init";
import Head from "next/head";

export default function Home() {
  const [bannerData, setBannerData] = React.useState({});
  const [bannerImagesData, setBannerImagesData] = React.useState({});
  const [home2ndData, setHome2ndData] = React.useState({});
  const [home3rdData, setHome3rdData] = React.useState({});
  const [projectManagementData, setProjectManagementData] = React.useState({});
  const [home5thData, setHome5thData] = React.useState({});
  const [home6thData, setHome6thData] = React.useState({});
  const [home7thData, setHome7thData] = React.useState({});
  const [managePlatformData, setManagePlatformData] = React.useState({});
  const [home8thData, setHome8thData] = React.useState({});
  const [home9thData, setHome9thData] = React.useState({});
  const [home10thData, setHome10thData] = React.useState({});
  const [purchaseCardData, setPurchaseCardData] = React.useState({});
  const [miniPricingData, setMiniPricingData] = React.useState({});
  const [financialManagementData, setFinancialManagementData] = React.useState(
    {}
  );

  useEffect(() => {
    axios.get("/api/banner").then((res) => {
      setBannerData(res.data);
    });
    axios.get("/api/bannerImage").then((res) => {
      setBannerImagesData(res.data);
    });
    axios.get("/api/home2ndapi").then((res) => {
      setHome2ndData(res.data);
    });
    axios.get("/api/home3rdapi").then((res) => {
      setHome3rdData(res.data);
    });
    axios.get("/api/projectManagementapi").then((res) => {
      setProjectManagementData(res.data);
    });
    axios.get("/api/home5thapi").then((res) => {
      setHome5thData(res.data);
    });
    axios.get("/api/home6thapi").then((res) => {
      setHome6thData(res.data);
    });
    axios.get("/api/home7thapi").then((res) => {
      setHome7thData(res.data);
    });
    axios.get("/api/home7thapi").then((res) => {
      setManagePlatformData(res.data);
    });
    axios.get("/api/home8thapi").then((res) => {
      setHome8thData(res.data);
    });
    axios.get("/api/miniPricingapi").then((res) => {
      setMiniPricingData(res.data);
    });
    axios.get("/api/home9thapi").then((res) => {
      setHome9thData(res.data);
    });
    axios.get("/api/home10thapi").then((res) => {
      setHome10thData(res.data);
    });
    axios.get("/api/home10thapi").then((res) => {
      setHome10thData(res.data);
    });
    axios.get("api/purchaseCard").then((res) => {
      setPurchaseCardData(res.data);
    });
    axios.get("api/financialManagementapi").then((res) => {
      setFinancialManagementData(res.data);
    });
  }, []);

  return (
    <div
      style={{
        color: "rgb(23, 52, 101)",
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        fontFamily: "Ubuntu",
      }}
    >
      <Head>
        <title>Vitlous</title>
      </Head>
      <HomePage
        bannerData={bannerData}
        bannerImagesData={bannerImagesData}
        managePlatformData={managePlatformData}
        home2ndData={home2ndData}
        home3rdData={home3rdData}
        projectManagementData={projectManagementData}
        home5thData={home5thData}
        home6thData={home6thData}
        home7thData={home7thData}
        home8thData={home8thData}
        home9thData={home9thData}
        home10thData={home10thData}
        purchaseCardData={purchaseCardData}
        miniPricingData={miniPricingData}
        featuresData={home2ndData}
        financialManagementData={financialManagementData}
      />
    </div>
  );
}
