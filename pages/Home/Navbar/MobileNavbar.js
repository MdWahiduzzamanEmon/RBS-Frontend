import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = ({ navLinks, state, dispatch, openNavElements }) => {
  return (
    <>
      <style>
        {`
       
        .accordion-item:nth-child(3) .accordion-button::after {
          width: 0;
        }
        .accordion-item:nth-child(4) .accordion-button::after {
          width: 0;
        }

        .accordion-button:focus {
          box-shadow: none;
        }
    }
    `}
      </style>
      <div className={`${styles.mobileNavbarContainer}`}>
        <div>
          <Link href="/">
            {/* {" "} */}
            <h1>Vitlous</h1>
          </Link>
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
                {navLink.href ? (
                  <Link href={navLink.href}>
                    <Accordion.Header
                      onClick={(e) => {
                        openNavElements(e);
                      }}
                      // style={{ padding: "0px" }}
                    >
                      {navLink.text}
                    </Accordion.Header>
                  </Link>
                ) : (
                  <Accordion.Header
                    onClick={(e) => {
                      openNavElements(e);
                    }}
                    // style={{ padding: "0px" }}
                  >
                    {navLink.text}
                  </Accordion.Header>
                )}
                {!navLink.href && (
                  <Accordion.Body style={{ padding: "0px" }}>
                    <div className={`${styles.navbarItemsInnerContainer}`}>
                      <div>
                        {" "}
                        {state?.openProduct && (
                          <Product navLinks={navLinks} dispatch={dispatch} />
                        )}
                        {state?.openResources && (
                          <Resources navLinks={navLinks} dispatch={dispatch} />
                        )}
                      </div>
                      <div className={`${styles.navbarItemsContainerRight}`}>
                        {/* <img src="" alt="" /> */}
                        hello
                      </div>
                    </div>
                  </Accordion.Body>
                )}
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
