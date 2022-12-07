import Link from "next/link";
import React from "react";
import { closeNavbar } from "../../../reducers/navbarReducer/actions";
import AllTopicsSvg from "../../../svgComponents/AllTopicsSvg";
import FeaturesSvg from "../../../svgComponents/featuresSvg";
import MarketingSvg from "../../../svgComponents/marketingSvg";
import QuerySvg from "../../../svgComponents/QuerySvg";
import TimeSvg from "../../../svgComponents/TimeSvg";
import styles from "./Manage.module.css";

const Manage = ({ navItems, dispatch }) => {
  console.log(navItems);
  const navItemNames = {
    project: "Project Management",
    product: "Product Management",
    time: "Time Management",
    marketing: "Marketing",
    allTopics: "All Topics",
  };
  return (
    <div className={`${styles.container} container-xl`}>
      {navItems?.map((navItem) => (
        <div key={navItem.id}>
          {navItem.text === "Manage" && (
            <div className={`${styles.productMenuItemsContainer}`}>
              <div className={`${styles.menuItemContainerLeft}`}>
                {navItem?.allFeatures?.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.name}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      className={`${styles.innerContainerLeft}`}
                      //   onMouseOver={() => {
                      //     handleShowLinkIcon(item.id);
                      //   }}
                      //   onMouseLeave={handleHideLinkIcon}
                      onClick={() => {
                        dispatch(closeNavbar());
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div>
                          {item.title === navItemNames.project && (
                            <FeaturesSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                            />
                          )}
                          {item.title === navItemNames.product && (
                            <QuerySvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                              // stroke="green"
                            />
                          )}
                          {item.title === navItemNames.time && (
                            <TimeSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                              // stroke="green"
                            />
                          )}
                          {item.title === navItemNames.marketing && (
                            <MarketingSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                            />
                          )}
                          {item.title === navItemNames.allTopics && (
                            <AllTopicsSvg
                              height="32px"
                              width="32px"
                              fill="#173465"
                            />
                          )}
                        </div>
                        {/* {showLinkIcon && linkId === item.id && (
                          <div className={`${styles.link}`}>
                            <ExternalLinkSvg width="12px" height="12px" />
                          </div>
                        )} */}
                      </div>

                      <h4 className={`${styles.menuItemHeading}`}>
                        {item.title}
                      </h4>
                      <p className={`${styles.menuItemDescription}`}>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {/* features list section */}
              {/* <div className={`${styles.menuItemContainerRight}`}>
                <div className={`${styles.listContainer}`}>
                  <h4 className={`${styles.rightContainerTitle}`}>
                    {navItem.featuresList.title}
                  </h4>
                  <div className={`${styles.listContainer}`}>
                    {navItem.featuresList.lists.map((list) => (
                      <Link href={"/allFeatures/" + list.name} key={list.id}>
                        <div
                          className={`${styles.list}`}
                          onMouseOver={() => handleShowListLinkIcon(list.id)}
                          onMouseLeave={handleHideListLinkIcon}
                          onClick={() => dispatch(closeNavbar())}
                        >
                          <div className={`${styles.listLeftSide}`}>
                            {showListSvg(list.title)}
                            <h1 className={`${styles.listTitle}`}>
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
                </div>
              </div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Manage;
