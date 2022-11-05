import Image from "next/image";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import image1 from "../../public/image/todoBoard5.png";
import styles from "./CVerticalTab.module.css";

const CVerticalTab = () => {
  return (
    <>
      <style>
        {`
           .tab-content>.active  {height:500px; padding-left: 0px; padding-right: 20px   }

           .nav-pills .nav-link.active {
            // background-color: #fff;
           }

           .nav-pills .nav-item  {
                position: relative;
           }
            
    
           .nav-pills .nav-item .nav-link::before {
                content: "";
                position: absolute;
                left:0;
                top: 46px;
                height: 2px;
                width: 0%;
                background-color: #2a75d1;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: transform 0.5s ease-in-out;
            }

            .nav-pills .nav-item .nav-link:hover::before {
                content: "";
                position: absolute;
                left:0;
                top: 46px;
                height: 2px;
                width: 100%;
                background-color: #2a75d1;
                transform: scaleX(1);
                transform-origin: bottom left;
                transition: transform 0.5s ease-in-out;
            }
           
        `}
      </style>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ gap: "0px" }}>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane
                eventKey="first"
                style={{ backgroundColor: "#fff", padding: "30px" }}
              >
                <Image
                  src={image1}
                  alt="tabImage"
                  height={300}
                  weight="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">{/* <Sonnet /> */}</Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <div style={{ paddingTop: "30px" }}>
                <Nav.Item
                  style={{
                    display: "inline-block",
                  }}
                >
                  <Nav.Link eventKey="first">
                    <div>
                      <h6>Marketing Executive</h6>
                      {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, suscipit distinctio sapiente dolorum illum quisquam?
                    </p> */}
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div style={{ paddingTop: "10px" }}>
                <Nav.Item
                  style={{
                    display: "inline-block",
                  }}
                >
                  <Nav.Link eventKey="second">
                    {" "}
                    <div>
                      <h6>Marketing Director</h6>
                      {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, suscipit distinctio sapiente dolorum illum quisquam?
                    </p> */}
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default CVerticalTab;
