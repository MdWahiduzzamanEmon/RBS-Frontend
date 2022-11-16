import React from "react";
import styles from "./FeaturesBoard.module.css";
import Aos from "aos";

const FeaturesBoard = ({ featuresData }) => {
  return (
    <section
      style={{
        fontFamily: "Poppins",
        padding: "50px 0",
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        //   "linear-gradient(to right, #24c6dc, #514a9d)",
      }}
    >
      <div
        style={{
          display: featuresData?.titleData?.isShow ? "block" : "none",
        }}
        className={`${styles.description}`}
      >
        {featuresData?.titleData?.titleItems?.map((data) => (
          <div key={data.id} data-aos="zoom-out-right">
            <h1 className="fs-2 text-center fw-bold mb-3">{data.title} </h1>
            <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
          </div>
        ))}
      </div>
      <div className="container ">
        <div
          className="row container justify-content-center text-center"
          // data-layout="masonry"
          // style="overflow: visible"
        >
          {featuresData?.cardItem?.items.map((card) => (
            <div
              className=" col-md-4 col-lg-3 mb-4"
              key={card.id}
              data-aos="zoom-out-right"
            >
              <div className={`${styles.flipCard} text-center`}>
                <div
                  className={`${styles.flipCardFront}`}
                  //   style="background-image: url('demos/business/images/featured/1.jpg')"
                >
                  <div className={`${styles.flipCardInner}`}>
                    <div className="card bg-transparent border-0 text-center">
                      <div className="card-body">
                        <i className="icon-line2-camera h1"></i>
                        <h3 className="fs-6">{card.title}</h3>
                        {/* <p className="card-text fw-normal">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.flipCardBack} ${styles.noAfter}`}>
                  <div className={`${styles.flipCardInner}`}>
                    <p className="mb-2 text-white">{card.description}</p>
                    {/* <button
                      type="button"
                      className="btn btn-outline-light mt-2"
                    >
                      View Details
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-lg-4 mb-4">
          <div
            className={`${styles.flipCard} ${styles.topToBottom} text-center`}
          >
            <div
              className={`${styles.flipCardFront} dark`}
              //   style="background-image: url('demos/business/images/featured/2.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <div className="card bg-transparent border-0 text-center">
                  <div className="card-body">
                    <h3 className="card-title">Special title treatment</h3>
                    <p className="card-text fw-normal">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.flipCardBack}`}
              //   style="background-image: url('demos/business/images/featured/3.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <p className="mb-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit.
                </p>
                <button type="button" className="btn btn-outline-light mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div className="col-lg-4 mb-4">
          <div className={`${styles.flipCard} text-center`}>
            <div
              className={`${styles.flipCardFront} dark `}
              //   style="background-image: url('demos/ecommerce/images/catagories/1.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <div className="card bg-transparent border-0 text-center">
                  <div className="card-body">
                    <i className="icon-line2-briefcase h1"></i>
                    <h3 className="card-title">Special title treatment</h3>
                    <p className="card-text fw-normal">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.flipCardBack}`}
              data-height-xl="505"
              //   style="background-image: url('demos/ecommerce/images/catagories/2.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <p className="mb-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit.
                </p>
                <button type="button" className="btn btn-outline-light mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div className="col-lg-4 mb-4">
          <div
            className={`${styles.flipCard} ${styles.topToBottom} text-center`}
          >
            <div
              className={`${styles.flipCardFront} bg-info dark`}
              data-height-xl="200"
            >
              <div className={`${styles.flipCardInner}`}>
                <div className="card bg-transparent border-0 text-center">
                  <div className="card-body">
                    <i className="icon-line2-check h1"></i>
                    <h3 className="card-title">Special title treatment</h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.flipCardBack}`}
              data-height-xl="200"
              //   style="background-image: url('demos/ecommerce/images/catagories/3.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <p className="mb-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit.
                </p>
                <button type="button" className="btn btn-outline-light mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div className="col-lg-4 mb-4">
          <div className={`${styles.flipCard} ${styles.topToBottom}`}>
            <div
              className={`${styles.flipCardFront} dark`}
              data-height-xl="200"
              //   style="background-image: url('demos/photography/images/items/3.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <div className="card bg-transparent border-0">
                  <div className="card-body">
                    <h3 className="card-title mb-0">Beautiful Nature</h3>
                    <span className="fst-italic">New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.flipCardBack}`}
              data-height-xl="200"
              //   style="background-image: url('demos/photography/images/items/2.jpg');"
            >
              <div className={`${styles.flipCardInner}`}>
                <p className="mb-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit.
                </p>
                <button type="button" className="btn btn-outline-light mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBoard;
