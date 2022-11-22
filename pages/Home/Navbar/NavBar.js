import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navStyles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useReducer } from "react";
import { Col, Dropdown, NavDropdown, Row } from "react-bootstrap";
import navbarReducer, { initialState } from "../../../reducers/navbarReducer";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useViewport from "../../../hooks/useViewport";
import dynamic from "next/dynamic";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  //***navbarReducer */
  const [state, dispatch] = useReducer(navbarReducer, initialState);
  const navLinks = [
    {
      id: 1,
      text: "Product",
      items: {
        id: 1,
        text: "Overview",
        title: "RBS Platform",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
      },
      subItems: [
        {
          id: 1,
          text: "Capabilities",
          options: [
            {
              id: 1,
              title: "Project Management",
            },
            {
              id: 2,
              title: "IT & Ops",
            },
            {
              id: 3,
              title: "Marketing",
            },
            {
              id: 4,
              title: "Construction",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      text: "Resources",
      items: {
        id: 2,
        text: "Overview re",
        title: "RBS Platform",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
      },
      subItems: [
        {
          id: 2,
          text: "Capabilities",
          options: [
            {
              id: 1,
              title: "Free classes",
            },
            {
              id: 2,
              title: "Tutorial videos",
            },
            {
              id: 3,
              title: "Blog",
            },
            {
              id: 4,
              title: "Tutorial",
            },
            {
              id: 5,
              title: "Social Community",
            },
            {
              id: 6,
              title: "Success Stories",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      text: "Pricing",
      href: "/pricing",
      items: {},
    },
    {
      id: 4,
      text: "Watch a demo",
      href: "/watchDemo",
      items: {},
    },
  ];

  const openNavElements = (e) => {
    let navItemName = e.target.innerText;
    if (navItemName === "Product") {
      dispatch({
        type: "OPEN_PRODUCT",
        payload: {
          openProduct: !state.openProduct,
          openResources: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Resources") {
      dispatch({
        type: "OPEN_RESOURCES",
        payload: {
          openResources: !state.openResources,
          openProduct: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Pricing") {
      dispatch({
        type: "OPEN_PRICING",
        payload: {
          // openPricing: !state.openPricing,
          openProduct: false,
          openResources: false,
          // openWatchADemo: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Watch a demo") {
      dispatch({
        type: "OPEN_WATCH_A_DEMO",
        payload: {
          // openWatchADemo: true,
          // openPricing: false,
          openProduct: false,
          openResources: false,
          innerText: navItemName,
        },
      });
    } else {
      console.log("No match");
    }
  };

  const router = useRouter();

  const [stickyClass, setStickyClass] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(navStyles.stickyNav)
        : setStickyClass("");
    }
  };

  const { width } = useViewport();
  const breakpoint = 800;

  console.log("activeInnerText", state?.showActiveInnerText);
  console.log("openProduct", state?.openProduct);
  console.log("openResources", state?.openResources);
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
              className={`${navStyles.navbarContainer}`}
              style={{
                position:
                  state?.openProduct || state?.openResources
                    ? "fixed"
                    : "relative",
              }}
            >
              <div className="container-lg d-flex align-items-center justify-content-lg-between">
                <div
                  className={`${navStyles.navbarBrand}`}
                  onClick={() => {
                    dispatch({
                      type: "CLOSE_NAVBAR",
                      payload: {
                        openProduct: false,
                        openResources: false,
                        openPricing: false,
                        openWatchADemo: false,
                        innerText: "",
                      },
                    });
                  }}
                >
                  <Link href="/">
                    {/* {" "} */}
                    <p className={`${navStyles.navbarBrandText}`}>Vitlous</p>
                  </Link>
                </div>
                <div>
                  {navLinks.map((navLink) => (
                    <>
                      {navLink.href ? (
                        <Link href={navLink.href} key={navLink.id}>
                          <p
                            className={`${navStyles.navbarMainItems} ${
                              (navLink.text === state?.showActiveInnerText &&
                                state.openProduct) ||
                              (navLink.text === state?.showActiveInnerText &&
                                state.openResources)
                                ? `${navStyles.active}`
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
                            {navLink.text}
                            {/* <FaChevronUp style={{ color: "green" }} /> */}
                          </p>
                        </Link>
                      ) : (
                        <p
                          key={navLink.id}
                          className={`${navStyles.navbarMainItems} ${
                            (navLink.text === state?.showActiveInnerText &&
                              state.openProduct) ||
                            (navLink.text === state?.showActiveInnerText &&
                              state.openResources)
                              ? `${navStyles.active}`
                              : ""
                          }`}
                          onClick={(e) => {
                            openNavElements(e);
                          }}
                        >
                          {navLink.text}
                          {/* {navLink.icon} */}
                          {(navLink.text === state?.showActiveInnerText &&
                            state.openProduct) ||
                          (navLink.text === state?.showActiveInnerText &&
                            state.openResources) ? (
                            <FaChevronDown
                              style={{
                                fontSize: "12px",
                                marginLeft: "3px",
                                fontWeight: "normal",
                                opacity: ".5",
                              }}
                              className={`${navStyles.navChevronIcons}`}
                            />
                          ) : (
                            <FaChevronUp
                              style={{
                                fontSize: "12px",
                                marginLeft: "3px",
                                opacity: ".5",
                              }}
                              className={`${navStyles.navChevronIcons}`}
                            />
                          )}
                          {/* <FaChevronUp style={{ color: "green" }} /> */}
                        </p>
                      )}
                    </>
                  ))}
                </div>
                <div className="">
                  <button className={`${navStyles.primaryButton}`}>
                    Log in
                  </button>
                  <button className={`${navStyles.primaryButton}`}>
                    Sign up
                  </button>
                </div>
              </div>
              {/* <Product></Product> */}
            </div>
            {(state?.openProduct || state?.openResources) && (
              <div
                className={`${navStyles.navbarItemsContainer}`}
                // style={{
                //   position: state?.showActiveInnerText ? "fixed" : "absolute",
                // }}
                style={{
                  position:
                    state?.openProduct || state?.openResources
                      ? "fixed"
                      : "absolute",
                }}
              >
                <div
                  className={`${navStyles.navbarItemsInnerContainer} ${stickyClass}`}
                >
                  <div className={`${navStyles.navbarItemsContainerLeft}`}>
                    {state?.openProduct && (
                      <Product navLinks={navLinks} dispatch={dispatch} />
                    )}
                    {state?.openResources && (
                      <Resources navLinks={navLinks} dispatch={dispatch} />
                    )}

                    {/* hello */}
                  </div>
                  <div className={`${navStyles.navbarItemsContainerRight}`}>
                    {/* <img src="" alt="" /> */}
                    hello
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <MobileNavbar
          navLinks={navLinks}
          state={state}
          dispatch={dispatch}
          openNavElements={openNavElements}
        />
      )}
    </>
  );
};
export default NavBar;
