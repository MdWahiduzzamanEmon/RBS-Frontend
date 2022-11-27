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
import productStyles from "./Product.module.css";

const Product = ({ navLinks, dispatch }) => {
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
  return (
    <div className={`${productStyles.productContainer} container-xl`}>
      {navLinks.map((navLink) => (
        <div key={navLink.id}>
          {navLink.text === "Product" && (
            <div className={`${productStyles.productMenuItemsContainer}`}>
              <div className={`${productStyles.menuItemContainerLeft}`}>
                {navLink.allFeatures.map((item) => (
                  <Link
                    key={item.id}
                    href="/allFeatures"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      className={`${productStyles.innerContainerLeft}`}
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
                      <div className="d-flex justify-content-between">
                        <div>
                          {item.title === "All features" && (
                            <FeaturesSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                            />
                          )}
                          {item.title === "Why us" && (
                            <QuerySvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                              // stroke="green"
                            />
                          )}
                        </div>
                        {showLinkIcon && linkId === item.id && (
                          <div className={`${productStyles.link}`}>
                            <ExternalLinkSvg width="12px" height="12px" />
                          </div>
                        )}
                      </div>

                      <h4 className={`${productStyles.menuItemHeading}`}>
                        {item.title}
                      </h4>
                      <p className={`${productStyles.menuItemDescription}`}>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {/* features list section */}
              <div className={`${productStyles.menuItemContainerRight}`}>
                {/* <div className={`${productStyles.listContainer}`}> */}
                <h4 className={`${productStyles.rightContainerTitle}`}>
                  {navLink.featuresList.title}
                </h4>
                <div className={`${productStyles.listContainer}`}>
                  {navLink.featuresList.lists.map((list) => (
                    <Link href={"/allFeatures/" + list.name} key={list.id}>
                      <div
                        className={`${productStyles.list}`}
                        onMouseOver={() => handleShowListLinkIcon(list.id)}
                        onMouseLeave={handleHideListLinkIcon}
                        onClick={() => dispatch(closeNavbar())}
                      >
                        <div className={`${productStyles.listLeftSide}`}>
                          {showListSvg(list.title)}
                          <h1 className={`${productStyles.listTitle}`}>
                            {list.title}
                          </h1>
                        </div>
                        {showListLinkIcon && listLinkId === list.id && (
                          <ExternalLinkSvg width="12px" height="12px" />
                        )}
                      </div>
                    </Link>
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

export default Product;
