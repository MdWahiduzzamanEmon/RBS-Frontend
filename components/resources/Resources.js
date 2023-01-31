import Image from "next/image";
import Link from "next/link";
import React from "react";
import { closeNavbar } from "../../reducers/navbarReducer/actions";
import BillingInvoiceSvg from "../../svgComponents/BillingInvoiceSvg";
import CalenderViewSvg from "../../svgComponents/CalenderViewSvg";
import DocumentSvg from "../../svgComponents/DocumentSvg";
import ExternalLinkSvg from "../../svgComponents/externalLinkSvg";
import FeaturesSvg from "../../svgComponents/featuresSvg";
import GanttChartSvg from "../../svgComponents/GanttChartSvg";
import IncomeExpenseSvg from "../../svgComponents/IncomeExpenseSvg";
import IssueTrackingSvg from "../../svgComponents/IssueTrackingSvg";
import KanbanSvg from "../../svgComponents/KanbanSvg";
import LabelBrandingSvg from "../../svgComponents/LabelBrandingSvg";
import LiveChatSvg from "../../svgComponents/LiveChatSvg";
import ProjectBudgetSvg from "../../svgComponents/ProjectBudgetSvg";
import ProjectTaskSvg from "../../svgComponents/ProjectTaskSvg";
import QuerySvg from "../../svgComponents/QuerySvg";
import TimeTracking from "../../svgComponents/TimeTracking";
import resourcesStyles from "./Resources.module.css";

const Resources = ({ navLinks, dispatch }) => {
  const [showLinkIcon, setShowLinkIcon] = React.useState(false);
  const [showListLinkIcon, setShowListLinkIcon] = React.useState(false);
  const [linkId, setLinkId] = React.useState(null);
  const [listLinkId, setListLinkId] = React.useState(null);
  const handleShowLinkIcon = (id) => {
    setLinkId(id);
    setShowLinkIcon(true);
  };
  const handleHideLinkIcon = () => {
    setShowLinkIcon(false);
  };

  // show/hide feature list link
  const handleShowListLinkIcon = (id) => {
    setListLinkId(id);
    setShowListLinkIcon(true);
  };
  const handleHideListLinkIcon = () => {
    setShowListLinkIcon(false);
  };

  // showing list component svg based on title
  const showListSvg = (title) => {
    switch (title) {
      case "Whit label branding": {
        return <LabelBrandingSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Kanban board": {
        return <KanbanSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Gantt chart": {
        return <GanttChartSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Calendar view": {
        return <CalenderViewSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Live chat communication": {
        return <LiveChatSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Project & Task discussion": {
        return <ProjectTaskSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Project & Task budget": {
        return <ProjectBudgetSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Billing & Invoicing": {
        return <BillingInvoiceSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Income & Expense": {
        return <IncomeExpenseSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Issue tracking": {
        return <IssueTrackingSvg width="32px" height="32px" fill="#173465" />;
      }
      case "Time tracking": {
        return <TimeTracking width="32px" height="32px" fill="#173465" />;
      }
      case "Document management": {
        return <DocumentSvg width="32px" height="32px" fill="#173465" />;
      }
      default: {
        return <ProjectTaskSvg width="32px" height="32px" fill="#173465" />;
      }
    }
  };

  // declaring variable
  const category1 = "Learn";
  const category2 = "Premium Features";

  // detect outside click
  // const ref = React.useRef(null);

  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       dispatch(closeNavbar());
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, [ref, dispatch]);

  return (
    <div
      className={`${resourcesStyles.resourcesContainer} container-xl`}
      // ref={ref}
    >
      {navLinks.map((navLink) => (
        <div key={navLink.id}>
          {navLink.text === "Resources" && (
            <div className={`${resourcesStyles.menuItemsContainer}`}>
              <div className={`${resourcesStyles.menuItemContainerLeft}`}>
                {navLink.categories.map((category) => (
                  <div
                    key={category.id}
                    className={`${resourcesStyles.menuItemContainerLeftInner}`}
                  >
                    <h4 className={`${resourcesStyles.menuItemContainerTitle}`}>
                      {category?.title}
                    </h4>
                    <div
                      className={`${resourcesStyles.menuItemLinkContainerLeft}`}
                    >
                      {category.linkList.map((link) => (
                        <>
                          {category.title === category1 && (
                            <div key={link.id}>
                              <Link href="/blog">
                                <div
                                  onMouseOver={() => {
                                    handleShowLinkIcon(link.id);
                                  }}
                                  onMouseLeave={handleHideLinkIcon}
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
                                  className={`${resourcesStyles.menuItem}`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      {link.title === "Blog" && (
                                        <FeaturesSvg
                                          height="32px"
                                          width="32px"
                                          fill="#173465"
                                        />
                                      )}
                                      {link.title === "Vitlous University" && (
                                        <QuerySvg
                                          height="32px"
                                          width="32px"
                                          fill="#173465"
                                          // stroke="green"
                                        />
                                      )}
                                    </div>
                                    {showLinkIcon && linkId === link.id && (
                                      <div
                                        className={`${resourcesStyles.link}`}
                                      >
                                        <ExternalLinkSvg
                                          width="12px"
                                          height="12px"
                                        />
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                    <h4
                                      className={`${resourcesStyles.menuItemHeading}`}
                                    >
                                      {link.title}
                                    </h4>
                                    <p
                                      className={`${resourcesStyles.menuItemDescription}`}
                                    >
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )}
                          <>
                            {category.title === category2 && (
                              <div key={link.id}>
                                <Link href="/pricing">
                                  <div
                                    onMouseOver={() => {
                                      handleShowLinkIcon(link.id);
                                    }}
                                    onMouseLeave={handleHideLinkIcon}
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
                                    className={`${resourcesStyles.menuItem}`}
                                  >
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        {link.title ===
                                          "Professional Services" && (
                                          <FeaturesSvg
                                            height="32px"
                                            width="32px"
                                            fill="#173465"
                                          />
                                        )}
                                        {link.title ===
                                          "Verified Integrations" && (
                                          <QuerySvg
                                            height="32px"
                                            width="32px"
                                            fill="#173465"
                                            // stroke="green"
                                          />
                                        )}
                                      </div>
                                      {showLinkIcon && linkId === link.id && (
                                        <div
                                          className={`${resourcesStyles.link}`}
                                        >
                                          <ExternalLinkSvg
                                            width="12px"
                                            height="12px"
                                          />
                                        </div>
                                      )}
                                    </div>
                                    <div>
                                      <h4
                                        className={`${resourcesStyles.menuItemHeading}`}
                                      >
                                        {link.title}
                                      </h4>
                                      <p
                                        className={`${resourcesStyles.menuItemDescription}`}
                                      >
                                        {link.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )}
                          </>
                        </>
                      ))}
                      {/* {category.linkList.map((link) => (
                        <>
                          {category.title === category2 && (
                            <div key={link.id}>
                              <div>
                                <h4>{link.title}</h4>
                                <p>{link.description}</p>
                              </div>
                            </div>
                          )}
                        </>
                      ))} */}
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className={`${resourcesStyles.menuItemContainerLeft}`}>
                {navLink.allFeatures.map((item) => (
                  <Link
                    key={item.id}
                    href="/pricing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      className={`${resourcesStyles.innerContainerLeft}`}
                      onMouseOver={() => {
                        handleShowLinkIcon(item.id);
                      }}
                      onMouseLeave={handleHideLinkIcon}
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
                      <div>
                        <h4></h4>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          {item.title === "Blog" && (
                            <FeaturesSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                            />
                          )}
                          {item.title === "Vitlous University" && (
                            <QuerySvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                              // stroke="green"
                            />
                          )}
                        </div>
                        {showLinkIcon && linkId === item.id && (
                          <div className={`${resourcesStyles.link}`}>
                            <ExternalLinkSvg width="12px" height="12px" />
                          </div>
                        )}
                      </div>

                      <h4 className={`${resourcesStyles.menuItemHeading}`}>
                        {item.title}
                      </h4>
                      <p className={`${resourcesStyles.menuItemDescription}`}>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div> */}
              {/* features list section */}
              <div className={`${resourcesStyles.menuItemContainerRight}`}>
                {/* <div className={`${resourcesStyles.listContainer}`}> */}
                <h4 className={`${resourcesStyles.rightContainerTitle}`}>
                  {navLink.featuresList.title}
                </h4>
                <div className={`${resourcesStyles.listContainer}`}>
                  {navLink.featuresList.lists.map((list) => (
                    <>
                      <div
                        key={list.id}
                        className={`${resourcesStyles.list}`}
                        onMouseOver={() => handleShowListLinkIcon(list.id)}
                        onMouseLeave={handleHideListLinkIcon}
                      >
                        <div className={`${resourcesStyles.listLeftSide}`}>
                          {/* {showListSvg(list.title)} */}
                          <Image
                            src={list.image}
                            alt="image"
                            width={150}
                            height={50}
                            // layout="respofinsive"
                            objectFit="cover"
                          ></Image>
                          <h1 className={`${resourcesStyles.listTitle}`}>
                            {list.title}
                          </h1>
                        </div>
                        {showListLinkIcon && listLinkId === list.id && (
                          <ExternalLinkSvg width="12px" height="12px" />
                        )}
                      </div>
                    </>
                  ))}
                </div>
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Resources;
