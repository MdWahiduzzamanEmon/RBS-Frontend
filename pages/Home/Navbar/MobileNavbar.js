import React from "react";
import { Accordion } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = ({ navLinks, state, dispatch, openNavElements }) => {
  return (
    <>
      <div className={`${styles.mobileNavbarContainer}`}>
        <div>
          <h1>RBS Tech</h1>
        </div>
        <div>
          {state.mobileNavbarOpen ? (
            <FaTimes
              onClick={() => {
                dispatch({
                  type: "MOBILE_NAVBAR_OPEN",
                  payload: {
                    mobileNavbarOpen: false,
                  },
                });
              }}
            />
          ) : (
            <FaBars
              onClick={() => {
                dispatch({
                  type: "MOBILE_NAVBAR_OPEN",
                  payload: {
                    mobileNavbarOpen: true,
                  },
                });
              }}
            />
          )}
        </div>
      </div>
      {state.mobileNavbarOpen && (
        <div>
          <Accordion defaultActiveKey="0">
            {navLinks.map((navLink) => (
              <Accordion.Item eventKey={navLink.id} key={navLink.id}>
                <Accordion.Header
                  onClick={(e) => {
                    openNavElements(e);
                  }}
                  // style={{ padding: "0px" }}
                >
                  {navLink.text}
                </Accordion.Header>
                <Accordion.Body style={{ padding: "0px" }}>
                  <div className={`${styles.navbarItemsInnerContainer}`}>
                    <div>
                      {" "}
                      {state?.openProduct && <Product navLinks={navLinks} />}
                      {state?.openResources && (
                        <Resources navLinks={navLinks} />
                      )}
                    </div>
                    <div className={`${styles.navbarItemsContainerRight}`}>
                      {/* <img src="" alt="" /> */}
                      hello
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
            {/* <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
