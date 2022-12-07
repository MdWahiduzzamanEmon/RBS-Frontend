import Link from "next/link";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import navbarBlogReducer, {
  initialState,
} from "../../../reducers/navbarBlog/navbarBlogReducer";
import styles from "./NavbarBlog.module.css";
import { navbarBlogDemoData } from "../../../public/JSON/navbarBlog/navbarBlogJson";
import Manage from "../Manage/Manage";
import MobileNavbarBlog from "./MobileNavBarBlog/MobileNavbarBlog";
import useViewport from "../../../hooks/useViewport";
import { closeNavbar } from "../../../reducers/navbarReducer/actions";

const NavbarBlog = () => {
  const [state, dispatch] = React.useReducer(navbarBlogReducer, initialState);
  const [stickyClass, setStickyClass] = React.useState("");

  const openNavElements = (e) => {
    let navItemName = e.target.innerText;
    if (navItemName === "Manage") {
      dispatch({
        type: "OPEN_MANAGE",
        payload: {
          openManage: !state.openManage,
          innerText: navItemName,
        },
      });
    } else {
      console.log("No match");
    }
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(styles.stickyNav)
        : setStickyClass("");
    }
  };
  // for small devices navbar
  const { width } = useViewport();
  const breakpoint = 992;

  return (
    <>
      {width > breakpoint ? (
        <div>
          <div
            style={{
              background: "linear-gradient(90deg, #faebeb 0%, #dde6fd 100%)",
            }}
          >
            {/* ${
                  (state?.showActiveInnerText && state.openProduct) ||
                  (state?.showActiveInnerText && state.openResources)
                } */}
            <div
              className={`${styles.navbarContainer}`}
              style={{
                position: "fixed",
                // state?.openProduct || state?.openResources
                //   ? "fixed"
                //   : "relative",
              }}
            >
              <div
                className="container-lg d-flex align-items-center justify-content-lg-between"
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <div
                  className={`${styles.navbarBrand}`}
                  onClick={() => {
                    dispatch(closeNavbar());
                  }}
                >
                  <Link href="/blog">
                    <p className={`${styles.navbarBrandText}`}>
                      Vitlous{" "}
                      <span className={`${styles.navbarBrandTextSecondary}`}>
                        Blog
                      </span>
                    </p>
                  </Link>
                </div>
                <div>
                  {navbarBlogDemoData.map((navItem) => (
                    <>
                      {navItem.href ? (
                        <Link href={navItem.href} key={navItem.id}>
                          <p
                            className={`${styles.navbarMainItems} ${
                              navItem.text === state?.showActiveInnerText &&
                              state.openManage
                                ? `${styles.active}`
                                : ""
                            }`}
                            onClick={(e) => {
                              openNavElements(e);
                            }}
                            // style={{
                            //   borderBottom: state?.isActive ? {navStyles.active} : "",
                            // }}
                          >
                            {/* {faChevronUp} */}
                            {/* <FaChevronUp style={{ color: "green" }} />  */}
                            {navItem.text}
                            {/* <FaChevronUp style={{ color: "green" }} /> */}
                          </p>
                        </Link>
                      ) : (
                        <p
                          key={navItem.id}
                          className={`${styles.navbarMainItems} ${
                            navItem.text === state?.showActiveInnerText &&
                            state.openManage
                              ? `${styles.active}`
                              : ""
                          }`}
                          onClick={(e) => {
                            openNavElements(e);
                          }}
                        >
                          {navItem.text}
                          {/* {navItem.icon} */}
                          {navItem.text === state?.showActiveInnerText &&
                          state.openManage ? (
                            <FaChevronUp
                              style={{
                                fontSize: "12px",
                                marginLeft: "3px",
                                fontWeight: "normal",
                                opacity: ".5",
                              }}
                              className={`${styles.navChevronIcons}`}
                            />
                          ) : (
                            <FaChevronDown
                              style={{
                                fontSize: "12px",
                                marginLeft: "3px",
                                opacity: ".5",
                              }}
                              className={`${styles.navChevronIcons}`}
                            />
                          )}
                          {/* <FaChevronUp style={{ color: "green" }} /> */}
                        </p>
                      )}
                    </>
                  ))}
                </div>
                <div className="">
                  <button className={`${styles.primaryButton}`}>Log in</button>
                  <button className={`${styles.primaryButton2}`}>
                    Sign up
                  </button>
                </div>
              </div>
              {/* <Product></Product> */}
            </div>
            {state?.openManage && (
              <div
                className={`${styles.navbarItemsContainer}`}
                // style={{
                //   position: state?.showActiveInnerText ? "fixed" : "absolute",
                // }}
                style={{
                  position: "fixed",
                  // state?.openProduct || state?.openResources
                  //   ? "fixed"
                  //   : "absolute",
                }}
              >
                <div
                  className={`${styles.navbarItemsInnerContainer} ${stickyClass}`}
                >
                  <div className={`${styles.navbarItemsContainerLeft}`}>
                    {state?.openManage && (
                      <Manage
                        navItems={navbarBlogDemoData}
                        dispatch={dispatch}
                      />
                    )}

                    {/* hello */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <MobileNavbarBlog
          navItems={navbarBlogDemoData}
          dispatch={dispatch}
          state={state}
          openNavElements={openNavElements}
        />
      )}
    </>
  );
};

export default NavbarBlog;
