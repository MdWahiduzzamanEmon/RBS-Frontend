import React from "react";
import DemoVideoCard from "../DemoVideoCard/DemoVideoCard";
import styles from "./DemoCards.module.css";

const DemoCards = () => {
  return (
    <div
      className="container-xl"
      style={{
        paddingTop: "130px",
        paddingBottom: "130px",
        color: "rgb(23, 52, 101)",
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>Tutorial Lists</h1>
      <div className={`${styles.demoCardsContainer}`}>
        <DemoVideoCard />
        <DemoVideoCard />
        <DemoVideoCard />
      </div>
    </div>
  );
};

export default DemoCards;
