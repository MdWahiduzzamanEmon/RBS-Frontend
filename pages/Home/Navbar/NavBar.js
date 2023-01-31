import Link from "next/link";
import { useRouter } from "next/router";
import React, { useReducer, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ContactUsNav from "../../../components/ContactUsNav/ContactUsNav";
import Product from "../../../components/product/Product";
import Resources from "../../../components/resources/Resources";
import useViewport from "../../../hooks/useViewport";
import whyImage from "../../../public/svg/query-icon.svg";
import allFeaturesImage from "../../../public/svg/right-file-icon.svg";
import { closeNavbar } from "../../../reducers/navbarReducer/actions";
import navbarReducer, {
  initialState,
} from "../../../reducers/navbarReducer/navbarReducer";
import MobileNavbar from "./MobileNavbar";
import navStyles from "./Navbar.module.css";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Image from "next/image";
import CButton from "../../../components/utility/buttons/CButton";

const NavBar = (props) => {
  //***navbarReducer */
  const [state, dispatch] = useReducer(navbarReducer, initialState);
  const navLinks = [
    {
      id: 1,
      text: "Product",
      allFeatures: [
        {
          id: 1,
          title: "All features",
          name: "allFeatures",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? ",
          image: allFeaturesImage,
        },
        {
          id: 2,
          title: "Why us",
          name: "whyUs",
          description: "Lorem ipsum dolor sit amet.",
          image: whyImage,
        },
      ],
      featuresList: {
        id: 1,
        title: "Features",
        lists: [
          {
            id: 1,
            title: "Whit label branding",
            name: "Whit-Label-Branding",
          },
          {
            id: 2,
            title: "Kanban board",
            name: "Kanban-Board",
          },
          {
            id: 3,
            title: "Gantt chart",
            name: "Gantt-Chart",
          },
          {
            id: 4,
            title: "Calendar view",
            name: "Calendar-View",
          },
          {
            id: 5,
            title: "Live chat communication",
            name: "Live-Chat-Communication",
          },
          {
            id: 6,
            title: "Project & Task discussion",
            name: "Project-Task-Discussion",
          },
          {
            id: 7,
            title: "Project & Task budget",
            name: "Project-Task-Budget",
          },
          {
            id: 8,
            title: "Billing & Invoicing",
            name: "Billing-Invoicing",
          },
          {
            id: 9,
            title: "Income & Expense",
            name: "Income-Expense",
          },
          {
            id: 10,
            title: "Issue tracking",
            name: "Issue-Tracking",
          },
          {
            id: 11,
            title: "Time tracking",
            name: "Time-Tracking",
          },
          {
            id: 12,
            title: "Document management",
            name: "Document-Management",
          },
        ],
      },
    },
    {
      id: 2,
      text: "Resources",
      categories: [
        {
          id: 1,
          title: "Learn",

          linkList: [
            {
              id: 1,
              title: "Blog",
              description: "Latest stories on how to use vitlous",
              image: allFeaturesImage,
            },
            {
              id: 2,
              title: "Vitlous University",
              description: "Lorem ipsum dolor sit amet.",
              image: whyImage,
            },
          ],
        },
        {
          id: 2,
          title: "Premium Features",

          linkList: [
            {
              id: 3,
              title: "Professional Services",
              description: "Latest stories on how to use vitlous",
              image: allFeaturesImage,
            },
            {
              id: 4,
              title: "Verified Integrations",
              description: "Lorem ipsum dolor sit amet.",
              image: whyImage,
            },
          ],
        },
      ],
      featuresList: {
        id: 1,
        title: "Latest From Blog",
        lists: [
          {
            id: 1,
            title: "Whit label branding",
            image: "/product-Banner.png",
          },
          {
            id: 2,
            title: "Kanban board",
            image: "/product-Banner.png",
          },
          {
            id: 3,
            title: "Gantt chart",
            image: "/product-Banner.png",
          },
          {
            id: 4,
            title: "Calendar view",
            image: "/product-Banner.png",
          },
          // {
          //   id: 5,
          //   title: "Live chat communication",
          // },
          // {
          //   id: 6,
          //   title: "Project & Task discussion",
          // },
          // {
          //   id: 7,
          //   title: "Project & Task budget",
          // },
          // {
          //   id: 8,
          //   title: "Billing & Invoicing",
          // },
          // {
          //   id: 9,
          //   title: "Income & Expense",
          // },
          // {
          //   id: 10,
          //   title: "Issue tracking",
          // },
          // {
          //   id: 11,
          //   title: "Time tracking",
          // },
          // {
          //   id: 12,
          //   title: "Document management",
          // },
        ],
      },
    },
    {
      id: 3,
      text: "Pricing",
      href: "/pricing",
      items: {},
    },
    {
      id: 4,
      text: "Watch Demo",
      href: "/watchDemo",
      items: {},
    },
    {
      id: 5,
      text: "Contact us",
      items: [
        {
          id: 1,
          title: "Contact support",
          pageName: "support",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum? ",
        },
        {
          id: 2,
          title: "Contact sales",
          pageName: "contactSales",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          id: 3,
          title: "Request training",
          pageName: "productTraining",
          description: "Lorem ipsum dolor sit amet.",
        },
      ],
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
          openContactUs: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Resources") {
      dispatch({
        type: "OPEN_RESOURCES",
        payload: {
          openResources: !state.openResources,
          openProduct: false,
          openContactUs: false,
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
          openContactUs: false,
          // openWatchADemo: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Watch Demo") {
      dispatch({
        type: "OPEN_WATCH_A_DEMO",
        payload: {
          // openWatchADemo: true,
          // openPricing: false,
          openProduct: false,
          openResources: false,
          openContactUs: false,
          innerText: navItemName,
        },
      });
    } else if (navItemName === "Contact us") {
      dispatch({
        type: "OPEN_CONTACT_US",
        payload: {
          openContactUs: !state.openContactUs,
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
  const breakpoint = 992;
  const user = auth?.currentUser;

  // for signing out user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const profileImage = auth?.currentUser?.photoURL;

  return (
    <>
      {width > breakpoint ? (
        <div className="">
          <div
            style={{
              background: "linear-gradient(90deg, #faebeb 0%, #dde6fd 100%)",
              fontFamily: "Ubuntu",
            }}
          >
            {/* ${
                (state?.showActiveInnerText && state.openProduct) ||
                (state?.showActiveInnerText && state.openResources)
              } */}
            <div
              className={`${navStyles.navbarContainer}`}
              style={{
                position: "fixed",
                // state?.openProduct || state?.openResources
                //   ? "fixed"
                //   : "relative",
              }}
            >
              <div
                className="container-lg d-flex align-items-center justify-content-lg-between"
                style={{ height: "100%" }}
                // style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <div
                  className={`${navStyles.navbarBrand}`}
                  onClick={() => {
                    dispatch(closeNavbar());
                  }}
                >
                  <Link href="/">
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
                                state.openResources) ||
                              (navLink.text === state?.showActiveInnerText &&
                                state.openContactUs)
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
                              state.openContactUs)
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
                            state.openResources) ||
                          (navLink.text === state?.showActiveInnerText &&
                            state.openContactUs) ? (
                            <FaChevronUp
                              style={{
                                fontSize: "12px",
                                marginLeft: "3px",
                                fontWeight: "normal",
                                opacity: ".5",
                              }}
                              className={`${navStyles.navChevronIcons}`}
                            />
                          ) : (
                            <FaChevronDown
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
                    <div className="d-flex align-items-center justify-content-center">
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
                </div>
              </div>
              {/* <Product></Product> */}
            </div>
            {(state?.openProduct ||
              state?.openResources ||
              state?.openContactUs) && (
              <div
                className={`${navStyles.navbarItemsContainer}`}
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
                  className={`${navStyles.navbarItemsInnerContainer} ${stickyClass}`}
                >
                  <div className={`${navStyles.navbarItemsContainerLeft}`}>
                    {state?.openProduct && (
                      <Product
                        navLinks={navLinks}
                        dispatch={dispatch}
                        state={state}
                      />
                    )}
                    {state?.openResources && (
                      <Resources navLinks={navLinks} dispatch={dispatch} />
                    )}
                    {state?.openContactUs && (
                      <ContactUsNav navLinks={navLinks} dispatch={dispatch} />
                    )}

                    {/* hello */}
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
          user={user}
          handleSignOut={handleSignOut}
          openNavElements={openNavElements}
        />
      )}
    </>
  );
};
export default NavBar;
