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
    // {
    //   id: 1,
    //   text: "RBS Tech",
    //   href: "/",
    //   items: {},
    // },
    // {
    //   id: 2,
    //   text: "Home",
    //   href: "/",
    // },
    {
      id: 3,
      text: "Product",
      // icon: <FaChevronUp />,
      // href: "/product",
      items: {
        id: 1,
        text: "Overview",
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
              title: "Project Management",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 2,
              title: "IT & Ops",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 3,
              title: "Marketing",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 4,
              title: "Construction",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 1,
              title: "Project Management",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 2,
              title: "IT & Ops",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 3,
              title: "Marketing",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 4,
              title: "Construction",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "Resources",
      // href: "/resources",
      items: {
        id: 1,
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
              title: "Project Management",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 2,
              title: "IT & Ops",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 3,
              title: "Marketing",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 4,
              title: "Construction",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 1,
              title: "Project Management",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 2,
              title: "IT & Ops",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 3,
              title: "Marketing",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
            {
              id: 4,
              title: "Construction",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? Suscipit veritatis exercitationem nemo facere accusantium error ullam quasi nulla!",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      text: "Pricing",
      href: "/pricing",
      items: {},
    },
    {
      id: 6,
      text: "Watch a demo",
      href: "/watchDemo",
      items: {},
    },
  ];

  const openNavElements = (e) => {
    // console.log(e.target.innerText);
    let navItemName = e.target.innerText;
    // console.log(navItemName);
    if (navItemName === "Product") {
      dispatch({
        type: "OPEN_PRODUCT",
        payload: {
          openProduct: !state.openProduct,
          openResources: false,
          openPricing: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Resources") {
      dispatch({
        type: "OPEN_RESOURCES",
        payload: {
          openResources: !state.openResources,
          openProduct: false,
          openPricing: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Pricing") {
      dispatch({
        type: "OPEN_PRICING",
        payload: {
          openPricing: !state.openPricing,
          openProduct: false,
          openResources: false,
          openWatchADemo: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Watch a demo") {
      dispatch({
        type: "OPEN_WATCH_A_DEMO",
        payload: {
          openWatchADemo: !state.openWatchADemo,
          openPricing: false,
          openProduct: false,
          openResources: false,
          innerText: navItemName,
        },
      });
    } else {
      console.log("No match");
    }
  };

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
  const breakpoint = 600;

  return (
    <>
      {width > breakpoint ? (
        <div>
          <div>
            <div
              className={`${navStyles.navbarContainer} ${
                (state?.showActiveInnerText && state.openProduct) ||
                (state?.showActiveInnerText && state.openResources)
              }`}
              style={{
                position: state?.showActiveInnerText ? "fixed" : "relative",
              }}
            >
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
                  <p className={`${navStyles.navbarBrandText}`}>RBS Tech</p>
                </Link>
              </div>
              {navLinks.map((navLink) => (
                <>
                  {navLink.href ? (
                    <Link href={navLink.href}>
                      <p
                        key={navLink.id}
                        className={`${navStyles.navbarMainItems} ${
                          (navLink.text === state?.showActiveInnerText &&
                            state.openProduct) ||
                          (navLink.text === state?.showActiveInnerText &&
                            state.openResources) ||
                          (navLink.text === state?.showActiveInnerText &&
                            state.openPricing) ||
                          (navLink.text === state?.showActiveInnerText &&
                            state.openWatchADemo)
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
                          state.openResources) ||
                        (navLink.text === state?.showActiveInnerText &&
                          state.openPricing) ||
                        (navLink.text === state?.showActiveInnerText &&
                          state.openWatchADemo)
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

              {/* <Product></Product> */}
            </div>
            {(state?.openProduct || state?.openResources) && (
              <div
                className={`${navStyles.navbarItemsContainer}`}
                style={{
                  position: state?.showActiveInnerText ? "fixed" : "absolute",
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
