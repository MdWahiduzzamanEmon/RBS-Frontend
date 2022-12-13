import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactUsNav from "../../../components/ContactUsNav/ContactUsNav";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = ({ navLinks, state, dispatch, openNavElements }) => {
  return (
    <div style={{ position: "fixed", width: "100vw", zIndex: "20000" }}>
      <div className={`${styles.mobileNavbarContainer}`}>
        <div>
          <Link href="/">
            {/* {" "} */}
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#fff",
                // color: "#173465",
              }}
            >
              Vitlous
            </h1>
          </Link>
        </div>
        <div>
          {state.mobileNavbarOpen ? (
            <FaTimes
              style={{ color: "#fff" }}
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
              style={{ color: "#fff" }}
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
          <Accordion
            defaultActiveKey="0"
            style={{ zIndex: "2000" }}
            className={`${styles.accordionParent}`}
          >
            {navLinks.map((navLink) => (
              <Accordion.Item
                eventKey={navLink.id}
                key={navLink.id}
                className={`${styles.accordionChildren}`}
              >
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
                        {state?.openContactUs && (
                          <ContactUsNav
                            navLinks={navLinks}
                            dispatch={dispatch}
                          />
                        )}
                      </div>
                    </div>
                  </Accordion.Body>
                )}
              </Accordion.Item>
            ))}
          </Accordion>
          <div className={`${styles.buttonsContainer}`}>
            <Link href="/signin">
              <button className={`${styles.primaryButton}`}>Log in</button>
            </Link>
            <Link href="/signup">
              <button className={`${styles.primaryButton}`}>Sign up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
