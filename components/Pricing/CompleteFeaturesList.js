import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import NavBar from "../../pages/Home/Navbar/NavBar";
import styles from "./CompleteFeaturesList.module.css";

const CompleteFeaturesList = ({ pricingData }) => {
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
    <div className={`${styles.cFContainer} container`}>
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
            {pricingData?.completeFeatures?.categories?.map((category) => (
              <th key={category?.id}>
                {category.title === "Individual" && (
                  <p className={`${styles.titleNormal}`}>{category?.title}</p>
                )}
                {category.title === "Basic" && (
                  <p className={`${styles.titlePurple}`}>{category?.title}</p>
                )}
                {category.title === "Standard" && (
                  <p className={`${styles.titleBlue}`}>{category?.title}</p>
                )}
                {category.title === "Premium" && (
                  <p className={`${styles.titleGreen}`}>{category?.title}</p>
                )}
                {category.title === "Enterprise" && (
                  <p className={`${styles.titleNormal}`}>{category?.title}</p>
                )}
                <button className={`${styles.primaryButton}`}>
                  Try for free
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`${styles.tableBody}`}>
          {pricingData?.completeFeatures?.subCategories?.map((sCatergory) => (
            <>
              {/* <tr key={sCatergory?.id} className={`${styles.tableRow}`}>
                <td
                  colSpan={6}
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    marginTop: "43px",
                  }}
                >
                  <p>{sCatergory.title}</p>
                </td>
              </tr> */}
              {sCatergory?.lists?.map((list) => (
                <>
                  <tr key={list?.id}>
                    <td>
                      <p>{list?.title}</p>
                      {["top"].map((placement) => (
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptas, aut.
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="secondary"
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          >
                            <FaExclamationCircle
                              color="#A0A1AC"
                              // title="Within boards we have rows, or 'Items' - An Item can be anything you want it to be - Task, project, customer, etc. Each free account starts with 200 free Items. You can get more Items by referring friends to create their own accounts."
                              style={{ cursor: "pointer" }}
                            ></FaExclamationCircle>
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </td>
                    {list.items.map((item) => (
                      <>
                        {item.isAvailable && item.id ? (
                          <td key={item?.id}>
                            {item?.id === 1 && (
                              <FaCheckCircle color="#173465" />
                            )}
                            {item?.id === 2 && (
                              <FaCheckCircle color="#a25ddc" />
                            )}
                            {item?.id === 3 && (
                              <FaCheckCircle color="#0085ff" />
                            )}
                            {item?.id === 4 && (
                              <FaCheckCircle color="#00ca72" />
                            )}
                            {item?.id === 5 && (
                              <FaCheckCircle color="#173465" />
                            )}
                          </td>
                        ) : (
                          <td key={item?.id}>{item?.title}</td>
                        )}
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompleteFeaturesList;
