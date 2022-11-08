import Image from "next/image";
import React from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Home7th from "../../pages/Home/Home7th/Home7th";
import EngineeringTeam from "./mpComponents/EngineeringTeam";
import CVerticalTab from "./CVerticalTab/CVerticalTab";
import styles from "./ManagePlatform.module.css";

const ManagePlatform = ({ managePlatformData }) => {
  console.log(managePlatformData);

  return (
    <>
      <style>
        {`
        .nav-tabs {
            --bs-nav-tabs-border-width: none;
        }

        .nav-item{
         
            position: relative;
            // background-color: green;
          
        }

        .nav-item .nav-link::before {
            content: "";
            position: absolute;
            left:0;
            bottom: 40px;
            height: 2px;
            width: 0%;
            background-color: #2a75d1;
            transform: scaleX(0);
            transform-origin: top right;
            transition: transform 0.5s ease-in-out;
        }

        .nav-item .nav-link:hover::before, .nav-item .nav-link:focus::before {
            content: "";
            position: absolute;
            left:0;
            bottom: 40px;
            height: 2px;
            width: 100%;
            background-color: #2a75d1;
            transform: scaleX(1);
            transform-origin: top left;
        }
            .nav-fill {
                padding-left: 100px;
                padding-right: 100px;
            }

            @media (max-width: 768px) {
              .nav-item .nav-link::before {
                background-color: transparent;
            }
    
            .nav-item .nav-link:hover::before, .nav-item .nav-link:focus::before {
                background-color: transparent;
            }
            }
        `}
      </style>
      <section
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
          // padding: "50px 35px ",
          fontFamily: "Poppins",
          // marginBottom: "200px",
        }}
        className={`${styles.managePlatformContainer}`}
      >
        {managePlatformData?.titleData?.map((data, index) => (
          <div key={data?.id} data-aos="zoom-out-right">
            <h1 className="fs-2 text-center fw-bold my-3">{data?.title}</h1>
            <p className="text-center mb-5 " style={{ fontSize: "20px" }}>
              {data?.description}
            </p>
          </div>
        ))}
        <Tabs
          defaultActiveKey="engineering-team"
          id="fill-tab-example"
          fill
          style={{ color: "#2a75d1" }}
          // style={{}}
        >
          {managePlatformData?.items?.map((data, index) => (
            <Tab eventKey={data.eventKey} title={data.title} key={data.id}>
              {/* <Home7th /> */}
              {/* <EngineeringTeam /> */}
              {/* {data?.submenus?.map((data) => ( */}
              <CVerticalTab cVerticalTabData={data} />
              {/* ))} */}
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
      </section>
    </>
  );
};

export default ManagePlatform;
