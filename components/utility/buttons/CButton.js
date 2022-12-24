import React from "react";
import styles from "./CButton.module.css";

const CButton = ({ children, ...rest }) => {
  return (
    <button className={`${styles.button}`} {...rest}>
      {children}
    </button>
  );
};

export default CButton;
