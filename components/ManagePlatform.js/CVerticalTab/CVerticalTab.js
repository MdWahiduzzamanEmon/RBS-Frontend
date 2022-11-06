import Image from "next/image";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import {
  initialStateMp,
  managePlatformReducer,
} from "../../../reducers/managePlatformReducer";
import styles from "./CVerticalTab.module.css";

const CVerticalTab = ({ cVerticalTabData }) => {
  console.log(cVerticalTabData);

  const [state, dispatch] = React.useReducer(
    managePlatformReducer,
    initialStateMp
  );
  console.log(state);
  // const [fistSubmenuOpen, setFirstSubmenuOpen] = React.useState(false);

  //************* For showing submenu details************* */
  const handleOpenSubmenu = (eventKey) => {
    if (eventKey === "first") {
      dispatch({
        type: "OPEN_FIRST_SUBMENU",
        payload: {
          firstSubmenuOpen: true,
          secondSubmenuOpen: false,
        },
      });
    } else if (eventKey === "second") {
      dispatch({
        type: "OPEN_SECOND_SUBMENU",
        payload: {
          firstSubmenuOpen: false,
          secondSubmenuOpen: true,
        },
      });
    }
  };

  //******************************************** */
  const changeBackgroundColor = (eventKey) => {
    if (eventKey === "first") {
      return `${styles.submenuDetailsContainer}`;
    } else if (eventKey === "second") {
      return `${styles.submenuDetailsContainer2}`;
    }
  };
  return (
    <>
      <style>
        {`
           .tab-content>.active  {height:550px; padding-left: 0px; padding-right: 20px;   
          }

           .nav-pills .nav-link.active {
            color: #2a75d1;
            background-color: rgb(249, 236, 248);
            transition: all.5s ease-in;
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

            .nav-pills .nav-item .nav-link:not(.active):hover::before {
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

            @media (max-width: 600px){
              .tab-content>.active {

                height: 320px;
                margin: 0 auto;
              }


            }

           
        `}
      </style>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ gap: "0px" }}>
          <Col sm={12} md={9}>
            <Tab.Content>
              {cVerticalTabData?.submenus?.map((data) => (
                <Tab.Pane
                  key={data.id}
                  eventKey={data.eventKey}
                  style={{
                    backgroundColor: "#fff",
                    padding: "30px",
                    // height: "550px",
                  }}
                >
                  <>
                    {data.eventKey === "first" && (
                      <Image
                        src={data?.images?.src}
                        height={250}
                        // width={300}
                        alt="tabImage"
                        // height={300}
                        width={500}
                        layout="responsive"
                        objectFit="cover"
                      />
                    )}
                    {data.eventKey === "second" && (
                      <Image
                        src={data?.images?.src}
                        height={250}
                        // width={300}
                        alt="tabImage"
                        // height={300}
                        width={500}
                        layout="responsive"
                        objectFit="cover"
                      />
                    )}
                  </>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
          <Col sm={12} md={3}>
            {cVerticalTabData?.submenus?.map((data) => (
              <Nav
                variant="pills"
                key={data.id}
                className="flex-column"
                style={{ marginTop: "30px" }}
              >
                <div>
                  <Nav.Item
                    onClick={() => {
                      handleOpenSubmenu(data.eventKey);

                      console.log(data.eventKey);
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <Nav.Link eventKey={data.eventKey}>
                      <div onClick={(e) => console.log(e.target.innerText)}>
                        <h6>{data.title}</h6>
                        {data.eventKey === "first" &&
                          !state?.secondSubmenuOpen && (
                            <div style={{ color: "#000" }}>
                              <p>{data.description}</p>
                            </div>
                          )}
                        {state?.secondSubmenuOpen &&
                          data.eventKey === "second" && (
                            <div style={{ color: "#000" }}>
                              <p>{data.description}</p>
                            </div>
                          )}

                        {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde, suscipit distinctio sapiente dolorum illum quisquam?
            </p> */}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </div>
                {/* <div style={{ paddingTop: "10px" }}>
                  <Nav.Item
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <Nav.Link eventKey="second">
                      {" "}
                      <div>
                        <h6>Marketing Director</h6>
                        <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde, suscipit distinctio sapiente dolorum illum quisquam?
            </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </div> */}
              </Nav>
            ))}
          </Col>
        </Row>
      </Tab.Container>
      {
        // <div>
        //   <p>
        //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        //     fugiat similique nihil aut eius corrupti? Magni blanditiis vel
        //     cupiditate sapiente.
        //   </p>
        // </div>
      }
    </>
  );
};

export default CVerticalTab;
