import Image from "next/image";
import React from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Home7th from "../../pages/Home/Home7th/Home7th";
import EngineeringTeam from "./mpComponents/EngineeringTeam";
import CVerticalTab from "./CVerticalTab/CVerticalTab";
import styles from "./ManagePlatform.module.css";
import image from "../../public/image/todoBoard5.png";
import ManagePlatformDetailInformation from "./managePlatformDetailInformation/ManagePlatformDetailInformation";

const ManagePlatform = ({ managePlatformData }) => {
  return (
    <>
      <section
        style={
          {
            // background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)",
            // background: "rgb(226, 246, 254)",
            // fontFamily: "open sans",
            // marginBottom: "200px",
          }
        }
        className={`${styles.managePlatformContainer}`}
      >
        <div className="container">
          <div data-aos="zoom-in-down">
            {managePlatformData?.titleData?.map((data, index) => (
              <div key={data?.id}>
                <h1 className="text-center fw-bold my-3">{data?.title}</h1>
                <p className="text-center mb-5" style={{ fontSize: "20px" }}>
                  {data?.description}
                </p>
              </div>
            ))}
            <Tabs
              defaultActiveKey="engineering-team"
              id="fill-tab-example"
              fill
              // style={{ color: "#2a75d1" }}
              className={`${styles.managePlatformTabs}`}
              // style={{}}
              // data-aos="zoom-out-down"
            >
              {managePlatformData?.items?.map((data, index) => (
                <Tab
                  eventKey={data.eventKey}
                  title={data.title}
                  key={data.id}
                  className={`${styles.managePlatformTab}`}
                >
                  <ManagePlatformDetailInformation platformInformation={data} />
                </Tab>
              ))}
              {/* <Tab eventKey="real-state" title="Real Estate & Construction Project">
            <Home7th />
          </Tab>
          <Tab eventKey="it" title="IT">
            hello
          </Tab>
          <Tab eventKey="sales-marketing" title="Sales and Marketing"></Tab>
          <Tab eventKey="others" title="Others"></Tab> */}
              {/* <Tab eventKey="contact" title="Contact" disabled></Tab> */}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagePlatform;
