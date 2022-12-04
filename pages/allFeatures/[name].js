import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import { Accordion } from "react-bootstrap";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures";
import ScrollFeatures from "./components/ScrollFeatures/ScrollFeatures";
import styles from "./SingleFeature.module.css";

export const getStaticPaths = async () => {
  const paths = allFeaturesDemoData.map((feature) => ({
    params: { name: feature.name.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const featuresData = allFeaturesDemoData.filter(
    (feature) => feature.name.toString() === params.name
  );
  return {
    props: {
      feature: featuresData,
    },
  };
};

const SingleFeature = ({ feature }) => {
  const [stepId, setStepId] = React.useState(0);
  return (
    <section className="">
      {feature.map((item) => (
        <div key={item.id}>
          {/* banner */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
            }}
          >
            <div
              className={`${styles.bannerContainer} container-xl flex-md-column flex-sm-column flex-lg-row flex-column align-items-center justify-content-center`}
            >
              <div
                className={`${styles.bannerInnerContainerTop} p-5 text-justify`}
              >
                <p className={`${styles.bannerInnerContainerPath}`}>
                  <Link href="/allFeatures">
                    <span className={`${styles.bannerInnerContainerPathLeft}`}>
                      Features
                    </span>
                  </Link>
                  <span style={{ color: "#888fb1" }}> / </span>
                  <span className={`${styles.bannerInnerContainerPathRight}`}>
                    {item.banner.title}
                  </span>
                </p>
                <h3 className={`${styles.bannerInnerContainerTitle}`}>
                  {item.banner.title}
                </h3>
                <p className={`${styles.bannerInnerContainerDetails}`}>
                  {item.banner.description}
                </p>
              </div>
              <div className={`${styles.bannerInnerContainerBottom}`}>
                <video
                  autoPlay
                  loop
                  muted
                  src={item?.banner?.video}
                  className={`${styles.bannerInnerContainerVideo}`}
                ></video>
              </div>
            </div>
          </div>
          {/* large image with features in two columns */}
          <div style={{ background: "rgb(226, 246, 254)" }}>
            <div className={`${styles.largeImageWithFeatures} container-xl`}>
              <div className={`${styles.largeImageWithFeaturesTitleContainer}`}>
                <h3 className={`${styles.largeImageWithFeaturesTitle}`}>
                  {item.details.title}
                </h3>
                <p className={`${styles.largeImageWithFeaturesInfos}`}>
                  {item.details.description}
                </p>
              </div>
              <div className={`${styles.largeImageWithFeaturesImage}`}>
                {item.details.image && (
                  <Image
                    src={item?.details?.image}
                    alt=""
                    width={1200}
                    height={600}
                  ></Image>
                )}
              </div>
              <div className={`${styles.largeImageWithFeaturesList}`}>
                {item.details?.featuresDetails?.map((sFeature) => (
                  <div key={sFeature.id}>
                    <h5 className={`${styles.largeImageWithFeaturesListTitle}`}>
                      {sFeature.title}
                    </h5>
                    <p
                      className={`${styles.largeImageWithFeaturesListDetails}`}
                    >
                      {sFeature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* accordion with image ---tutorials steps */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
            }}
          >
            <div className={`${styles.tutorialsContainer} p-5 container-xl`}>
              <h3 className={`${styles.tutorialsContainerTitle}`}>
                {item.tutorials.title}
              </h3>
              <div className={`${styles.tutorialsStepsContainer}`}>
                <div className={`${styles.tutorialsStepsAccordionContainer}`}>
                  <Accordion
                    defaultActiveKey="1"
                    flush
                    className={`${styles.tutorialsStepsAccordion}`}
                  >
                    {item.tutorials.steps.map((step) => (
                      <Accordion.Item
                        eventKey={`${step.id}`}
                        key={step.id}
                        className={`${styles.tutorialsStepsAccordionItem}`}
                        onClick={() => setStepId(step.id)}
                      >
                        <Accordion.Header
                          className={`${styles.tutorialsStepsTitle}`}
                        >
                          {step.title}
                        </Accordion.Header>
                        <Accordion.Body
                          className={`${styles.tutorialsStepsDescription}`}
                        >
                          {step.description}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                    {/* <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item> */}
                  </Accordion>
                </div>
                <div className={`${styles.tutorialsImageContainer}`}>
                  {item.tutorials.steps[0].image && !stepId && (
                    <Image
                      src={item.tutorials.steps[0].image}
                      alt=""
                      width={500}
                      height={500}
                      className={`${styles.tutorialsImage}`}
                    ></Image>
                  )}
                  <>
                    {item.tutorials.steps.map((sImage) => (
                      <>
                        {sImage.id === stepId && (
                          <Image
                            key={sImage.id}
                            src={sImage.image}
                            alt=""
                            width={500}
                            height={500}
                            className={`${styles.tutorialsImage}`}
                          ></Image>
                        )}
                      </>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>
          {/* showing features with scroll */}
          <ScrollFeatures items={item} />
        </div>
      ))}
    </section>
  );
};

export default SingleFeature;
