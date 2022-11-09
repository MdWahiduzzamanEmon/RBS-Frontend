import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import NavBar from "../../pages/Home/Navbar/NavBar";
import styles from "./CompleteFeaturesList.module.css";

const CompleteFeaturesList = ({ pricingData }) => {
  console.log(pricingData);
  const [stickyClass, setStickyClass] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 820
        ? setStickyClass(styles.stickyNav)
        : setStickyClass("");
    }
  };
  return (
    <div>
      <table className={`${styles.tableContainer}`}>
        <thead
          className={`${styles.tableHeadContainer} ${stickyClass}`}
          // style={{ borderBottom: "1px solid #ced4da" }}
        >
          <tr
          // className={`${styles.tableHeadContainer} ${stickyClass}`}
          // style={{ borderBottom: "1px solid #ced4da" }}
          >
            <th>{/* <p>Individual</p> */}</th>
            <th>
              <p> Individual</p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
            </th>
            <th>
              <p>Basic</p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
            </th>
            <th>
              <p>Standard</p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
            </th>
            <th>
              <p>Pro</p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
            </th>
            <th>
              <p>Enterprise</p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
            </th>
          </tr>
        </thead>
        <tbody className={`${styles.tableBody}`}>
          <tr
            className={`${styles.tableRow}`}
            // style={{ borderBottom: "1px solid #6c757d)" }}
          >
            <td
              colSpan={6}
              style={{ fontWeight: 500, fontSize: "20px", marginTop: "43px" }}
            >
              Essentials
            </td>
          </tr>

          <tr>
            <td>
              <p>Maximum number of seats</p>
              <p>
                <FaExclamationCircle />
              </p>
            </td>
            <td>Upto 2 seats</td>
            <td>1 board per dashboard</td>
            <td>Upto 2 seats</td>
            <td>1 board per dashboard</td>
            <td>Upto 2 seats</td>
          </tr>
          <tr>
            <td>
              <p>Maximum number of seats</p>
              <p>
                <FaExclamationCircle />
              </p>
            </td>
          </tr>
          <tr>
            <td>Items</td>
          </tr>
          <tr>
            <td>File storage</td>
          </tr>
          <tr>
            <td>Activity log</td>
          </tr>
          <tr>
            <td>Unlimited boards</td>
          </tr>
          <tr>
            <td>Unlimited docs</td>
          </tr>

          <tr className={`${styles.tableRow}`}>
            <td colSpan={6} style={{ fontWeight: 500, fontSize: "20px" }}>
              Collaboration
            </td>
          </tr>

          <tr>
            <td>
              <p>Essentials</p>
              <p>
                <FaExclamationCircle />
              </p>
            </td>
            <td>Upto 2 seats</td>
            <td>1 board per dashboard</td>
            <td>Upto 2 seats</td>
          </tr>
          <tr>
            <td>
              <p>Maximum number of seats</p>
              <p>
                <FaExclamationCircle />
              </p>
            </td>
          </tr>
          <tr>
            <td>Items</td>
          </tr>
          <tr>
            <td>File storage</td>
          </tr>
          <tr>
            <td>Activity log</td>
            <td>1 board per dashboard</td>
          </tr>
          <tr>
            <td>Unlimited boards</td>
          </tr>
          <tr>
            <td>Unlimited docs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompleteFeaturesList;
