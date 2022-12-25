import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactUsNav from "../../../components/ContactUsNav/ContactUsNav";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import CButton from "../../../components/utility/buttons/CButton";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = ({
  navLinks,
  state,
  dispatch,
  openNavElements,
  user,
  handleSignOut,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        zIndex: "20000",
        fontFamily: "open sans",
      }}
    >
      <div className={`${styles.mobileNavbarContainer}`}>
        <div>
          <Link href="/">
            {/* {" "} */}
            <h1
              style={{
                fontWeight: "700",
                color: "#fff",
                fontFamily: "open sans",
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
            style={{ zIndex: "2000", fontFamily: "open sans" }}
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
                      style={{ fontFamily: "open sans" }}
                    >
                      {navLink.text}
                    </Accordion.Header>
                  </Link>
                ) : (
                  <Accordion.Header
                    onClick={(e) => {
                      openNavElements(e);
                    }}
                    style={{ fontFamily: "open sans" }}
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
            {user ? (
              <div className="d-flex align-items-center">
                <p style={{ color: "#fff" }}>
                  {/* {auth.currentUser.displayName} */}
                </p>

                <CButton
                  // className={`${navStyles.primaryButton}`}
                  onClick={handleSignOut}
                  style={{ marginTop: "0px" }}
                >
                  Sign out
                </CButton>
              </div>
            ) : (
              <div className="">
                <Link href="/signin">
                  <CButton
                    style={{ marginTop: "0px", marginRight: "10px" }}
                    // className={`${navStyles.primaryButton}`}
                  >
                    Sign in
                  </CButton>
                </Link>
                <Link href="/signup">
                  <CButton
                    style={{ marginTop: "0px" }}
                    // className={`${navStyles.primaryButton}`}
                  >
                    Sign up
                  </CButton>
                </Link>
              </div>
            )}
            {/* <Link href="/signin">
              <CButton
                style={{ marginTop: "0px" }}
                // className={`${styles.primaryButton}`}
              >
                Log in
              </CButton>
            </Link>
            <Link href="/signup">
              <CButton
                style={{ marginTop: "0px" }}
                // className={`${styles.primaryButton}`}
              >
                Sign up
              </CButton>
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
