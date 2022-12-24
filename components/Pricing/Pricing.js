import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
  Tooltip,
} from "react-bootstrap";
import {
  FaChevronDown,
  FaChevronUp,
  FaExclamationCircle,
} from "react-icons/fa";
import useViewport from "../../hooks/useViewport";
import CButton from "../utility/buttons/CButton";
import CompleteFeaturesList from "./CompleteFeaturesList";
import styles from "./Pricing.module.css";
import PricingForSD from "./pricingForSmallDevices/PricingForSD";

const Pricing = ({ pricingData }) => {
  const [isShow, setIsShow] = React.useState(false);
  const changePriceColor = (itemName) => {
    if (itemName === "Basic") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftPurple}`;
    } else if (itemName === "Individual") {
      return `${styles.rateContainerTopItemLeft}`;
    } else if (itemName === "Standard") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftBlue}`;
    } else if (itemName === "Premium") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftGreen}`;
    } else if (itemName === "Enterprise") {
      return `${styles.rateContainerTopItemLeft} `;
    }
  };

  const { width } = useViewport();
  const breakpoint = 992;

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "150px 35px 50px",
        fontFamily: "open sans",
      }}
    >
      <div className={`${styles.mainTitleContainer}`}>
        <h1 className={`${styles.mainTitle}`}>
          Supercharge your teamwork. Start free.
        </h1>
        <p className={`${styles.details}`}>
          Unlimited boards and workflows. No credit card needed.
        </p>
      </div>
      {width > breakpoint ? (
        <>
          <div className={`${styles.container}`}>
            {pricingData?.items?.map((item, index) => (
              <div className={`${styles.pricingCard}`} key={item.id}>
                <div className={`${styles.pricingTopContainer}`}>
                  <h5 className={`${styles.heading}`}>{item.title}</h5>
                  <div className={`${styles.rateContainer}`}>
                    <div className={`${styles.rateContainerTop}`}>
                      {item.title == "Basic" && (
                        <>
                          <p className={changePriceColor(item.title)}>
                            ${item.price}
                          </p>
                          <div
                            className={`${styles.rateContainerTopItemRight}`}
                          >
                            <p className="mb-0">user/</p>
                            <p>month</p>
                          </div>
                        </>
                      )}

                      {item.title !== "Enterprise" &&
                        item.title !== "Basic" && (
                          <>
                            <p className={changePriceColor(item.title)}>
                              ${item.price}
                            </p>
                            <div
                              className={`${styles.rateContainerTopItemRight}`}
                            >
                              <p className="mb-0">company/</p>
                              <p>month</p>
                            </div>
                          </>
                        )}
                      {/* {item.title !== "Enterprise" && (
                        <>
                          <p className={changePriceColor(item.title)}>
                            ${item.price}
                          </p>
                          <div
                            className={`${styles.rateContainerTopItemRight}`}
                          >
                            <p className="mb-0">company/</p>
                            <p>month</p>
                          </div>
                        </>
                      )} */}
                    </div>
                    <div className={`${styles.rateContainerBottom}`}>
                      {item.title === "Enterprise" ? (
                        <Image
                          src={item?.icon}
                          alt="enterprise image"
                          width={80}
                          height={130}
                          objectFit="contain"
                          // layout="responsive"
                          style={{
                            width: "30px",
                            height: "30px",
                            margin: "0 auto",
                          }}
                        ></Image>
                      ) : (
                        <>
                          {/* <p className={`${styles.rateContainerBottomItemTop}`}>
                            Total ${item.monthlyPrice} / month
                          </p> */}
                          <p
                            className={`${styles.rateContainerBottomItemBottom}`}
                          >
                            <small>{item.billingDuration}</small>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  {item.title === "Enterprise" ? (
                    // <button className={`${styles.primaryButton}`}>
                    //   Contact us
                    // </button>
                    <CButton>Contact us</CButton>
                  ) : (
                    // <button className={`${styles.primaryButton}`}>
                    //   Try for free
                    // </button>
                    <CButton> Try for free</CButton>
                  )}
                  <p className={`${styles.shortIntro}`}>{item.shortIntro}</p>
                </div>

                <div className={`${styles.divider}`}></div>

                <div>
                  <h3 className={`${styles.includesTitle}`}>
                    {item.features.title}
                  </h3>
                  <div>
                    {item.features.lists.map((list) => (
                      <div
                        className={`${styles.rateIncludePart}`}
                        key={list.id}
                      >
                        <p className={`${styles.features}`}>
                          <small>{list.title}</small>
                        </p>
                        {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptas, aut.
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <PricingForSD pricingData={pricingData} />
      )}
      {width > 768 && (
        <div
          style={{
            textAlign: "center",
            padding: "30px",
            fontWeight: "400",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => setIsShow(!isShow)}
        >
          Complete features list{" "}
          {<>{isShow ? <FaChevronUp /> : <FaChevronDown />}</>}
        </div>
      )}
      {/* )} */}
      {isShow && width > 768 && (
        <CompleteFeaturesList pricingData={pricingData} />
      )}
    </section>
  );
};

export default Pricing;
