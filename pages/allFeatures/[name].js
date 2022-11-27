import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import { Accordion } from "react-bootstrap";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures";
import styles from "./SingleFeature.module.css";

export const getStaticPaths = async () => {
  const paths = allFeaturesDemoData.map((feature) => ({
    params: { name: feature.name.toString() },
  }));
  console.log(allFeaturesDemoData);
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
  console.log(feature);
  const [stepId, setStepId] = React.useState(0);
  console.log(stepId);
  return (
    <div className="container-xl">
      {feature.map((item) => (
        <div key={item.id}>
          {/* banner */}
          <div
            className={`${styles.bannerContainer} flex-md-column flex-sm-column flex-lg-row flex-column align-items-center justify-content-center`}
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
          {/* large image with features in two columns */}
          <div className={`${styles.largeImageWithFeatures}`}>
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
                  <p className={`${styles.largeImageWithFeaturesListDetails}`}>
                    {sFeature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* accordion with image ---tutorials steps */}
          <div className={`${styles.tutorialsContainer} p-5`}>
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
      ))}
    </div>
  );
};

export default SingleFeature;
