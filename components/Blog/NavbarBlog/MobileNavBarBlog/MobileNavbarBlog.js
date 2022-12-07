import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import Manage from "../../Manage/Manage";
import styles from "./MobileNavbarBlog.module.css";

const MobileNavbarBlog = ({ navItems, state, dispatch, openNavElements }) => {
  console.log(state.mobileNavbarOpen);
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
                color: "#173465",
              }}
            >
              Vitlous
              <span className={`${styles.navbarBrandTextSecondary}`}>Blog</span>
            </h1>
          </Link>
        </div>
        <div>
          {state.mobileNavbarOpen ? (
            <FaTimes
              onClick={() => {
                dispatch({
                  type: "MOBILE_NAVBAR_OPEN",
                  payload: {
                    mobileNavbarOpen: !state.mobileNavbarOpen,
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
                    mobileNavbarOpen: !state.mobileNavbarOpen,
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
            {navItems.map((navItem) => (
              <Accordion.Item
                eventKey={navItem.id}
                key={navItem.id}
                className={`${styles.accordionChildren}`}
              >
                {navItem.href ? (
                  <Link href={navItem.href}>
                    <Accordion.Header
                      onClick={(e) => {
                        openNavElements(e);
                      }}
                      // style={{ padding: "0px" }}
                    >
                      {navItem.text}
                    </Accordion.Header>
                  </Link>
                ) : (
                  <Accordion.Header
                    onClick={(e) => {
                      openNavElements(e);
                    }}
                    // style={{ padding: "0px" }}
                  >
                    {navItem.text}
                  </Accordion.Header>
                )}

                {!navItem.href && (
                  <Accordion.Body style={{ padding: "0px" }}>
                    <div className={`${styles.navbarItemsInnerContainer}`}>
                      <div>
                        {state?.openManage && (
                          <Manage navItems={navItems} dispatch={dispatch} />
                        )}
                      </div>
                    </div>
                  </Accordion.Body>
                )}
              </Accordion.Item>
            ))}
          </Accordion>
          <div className={`${styles.buttonsContainer}`}>
            <button className={`${styles.primaryButton}`}>Log in</button>
            <button className={`${styles.primaryButton}`}>Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbarBlog;
