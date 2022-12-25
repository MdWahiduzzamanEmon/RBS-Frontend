import React from "react";
import DemoVideoCard from "../DemoVideoCard/DemoVideoCard";
import styles from "./DemoCards.module.css";

const DemoCards = () => {
  return (
    <div
      className="container-xl"
      style={{ marginTop: "150px", color: "rgb(23, 52, 101)" }}
    >
      <h1>Tutorial Lists</h1>
      <div className={`${styles.demoCardsContainer}`}>
        <DemoVideoCard />
        <DemoVideoCard />
        <DemoVideoCard />
      </div>
    </div>
  );
};

export default DemoCards;
