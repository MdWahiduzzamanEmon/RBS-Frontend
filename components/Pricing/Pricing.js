import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./Pricing.module.css";

const Pricing = ({ pricingData }) => {
  console.log(pricingData);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px  20px",
        fontFamily: "Poppins",
      }}
    >
      <div className={`${styles.container}`}>
        {pricingData?.items?.map((item, index) => (
          <div className={`${styles.pricingCard}`} key={item.id}>
            <h5 className={`${styles.heading}`}>{item.title}</h5>
            <div className={`${styles.rateContainer}`}>
              <div className={`${styles.rateContainerTop}`}>
                <p className={`${styles.rateContainerTopItemLeft}`}>
                  ${item.price}
                </p>
                <div className={`${styles.rateContainerTopItemRight}`}>
                  <p className="mb-0">seat/</p>
                  <p>month</p>
                </div>
              </div>
              <div className={`${styles.rateContainerBottom}`}>
                <p className={`${styles.rateContainerBottomItemTop}`}>
                  <small>Total ${item.monthlyPrice} / month</small>
                </p>
                <p className={`${styles.rateContainerBottomItemBottom}`}>
                  <small>{item.billingDuration}</small>
                </p>
              </div>
            </div>
            <button className={`${styles.primaryButton}`}>Try for free</button>
            <p className={`${styles.shortIntro}`}>{item.shortIntro}</p>

            <div className={`${styles.divider}`}></div>

            <div>
              <h3 className={`${styles.includesTitle}`}>
                {item.features.title}
              </h3>
              <div>
                {item.features.lists.map((list) => (
                  <div className={`${styles.rateIncludePart}`} key={list.id}>
                    <p>
                      <small>{list.title}</small>
                    </p>
                    <FaExclamationCircle color="#A0A1AC" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

{
  /* <section
style={{
  display: pricingData?.isShow ? "block" : "none",
  backgroundImage:
    "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
  padding: "50px  0",
}}
>
<Card className={`${pricingStyles.priceCard} mx-auto  p-3 border-0`}>
  <Card.Body>
    <Card.Title className="fs-2 fw-bold pt-3">
      {pricingData?.title}
    </Card.Title>
    <Card.Subtitle className="fw-normal my-3">
      {pricingData?.description}
    </Card.Subtitle>
    <div>
      <Row className="g-4">
        {pricingData?.items?.map((data, index) => (
          <Col key={index} sm={1} md={3}>
            <Card
              className={`${pricingStyles.singlePriceCard} my-2 my-lg-5 py-2 border-0`}
              style={{
                backgroundColor: data?.status === "active" && "#353B80",
                color: data?.status === "active" && "#FFF",
                display: data?.isShow ? "block" : "none",
              }}
            >
              <Card.Body>
                <h1 className="fs-4 fw-bold py-3">{data?.title}</h1>
                <h1 className="">
                  <span className="fs-1 fw-bold">${data?.price}</span>
                  <span className="fs-6 fw-normal">/month</span>
                </h1>
                <p className="fs-6 py-3 fw-normal">{data?.description}</p>
                <ul className="list-unstyled">
                  {data?.features?.map((item, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        color={
                          data?.status === "active" ? "#FFF" : "#353B80"
                        }
                        className="me-1"
                      />
                      {item?.name}
                    </li>
                  ))}
                </ul>
                <button
                  className={`${pricingStyles.buttonGradientOutline} my-3`}
                  style={{
                    backgroundColor: data?.status === "active" && "#FFF",
                  }}
                >
                  <span className="fw-bold">Choose plan</span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Card.Body>
</Card>
</section> */
}
