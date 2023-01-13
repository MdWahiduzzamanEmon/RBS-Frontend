import React from "react";
import { FaArrowUp } from "react-icons/fa";
import CButton from "../utility/buttons/CButton";
import styles from "./GoToTop.module.css";

const GoToTop = ({ handleScrollToTop }) => {
  return (
    <div className={`${styles.goToTopContainer}`}>
      <button className={`${styles.goToTopButton}`} onClick={handleScrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default GoToTop;
