import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./CompareBoard.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiXCircle } from "react-icons/hi2";

const CompareBoard = () => {
  const compareDemoData = {
    id: 1,
    title: "Comparing Project Management Software",
    description:
      "See why Teamwork is the best choice and how we compare to other popular solutions.",
    competitors: [
      {
        name: "Wrike",
        headings: {
          id: 1,
          title1: "Vitlous",
          title2: "Wrike",
        },
        challenges: [
          {
            id: 1,
            title: "See challenges before they cause problems",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Board view",
                },
                {
                  id: 2,
                  title: "Portfolio Management",
                },
                {
                  id: 3,
                  title: "Project time budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Board view",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Portfolio Management",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Project time budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 2,
            title: "Full visibility into performance and profitability",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Burndown reporting",
                },
                {
                  id: 2,
                  title: "Utilization reports",
                },
                {
                  id: 3,
                  title: "Workload resource management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Burndown reporting",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Utilization reports",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Workload resource management",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 3,
            title: "Manage financial obligations",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Billing and invoicing",
                },
                {
                  id: 2,
                  title: "Resource scheduling",
                },
                {
                  id: 3,
                  title: "Workload resource management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Billing and invoicing",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Resource scheduling",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Budgeting",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 4,
            title: "Manage people",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Dependencies",
                },
                {
                  id: 2,
                  title: "Time tracking",
                },
                {
                  id: 3,
                  title: "Workload",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Dependencies",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Time tracking",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Workload",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 5,
            title: "Protect your data and support your team",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "2FA",
                },
                {
                  id: 2,
                  title: "Custom domain with SSL",
                },
                {
                  id: 3,
                  title: "Phone, live chat, and email support",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "2FA",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Custom domain with SSL",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Phone, live chat, and email support",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 6,
            title: "Create a Dependencies",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Use intake forms",
                },
                {
                  id: 2,
                  title: "Add unlimited clients",
                },
                {
                  id: 3,
                  title: "Custom branding",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Use intake forms",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Add unlimited clients",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Custom branding",
                  isAvailable: true,
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        name: "Asana",
        // headings: {
        //   id: 1,
        //   title1: "Vitlous",
        //   title2: "Wrike",
        // },
        // challenges: [
        //   {
        //     id: 1,
        //     title: "See challenges before they cause problems",
        //     company1: {
        //       id: 1,
        //       title: "Vitlous",
        //       items: [
        //         {
        //           id: 1,
        //           title: "Board view",
        //         },
        //         {
        //           id: 2,
        //           title: "Portfolio",
        //         },
        //         {
        //           id: 3,
        //           title: "Project time budget",
        //         },
        //       ],
        //     },
        //     company2: {
        //       id: 2,
        //       title: "Wrike",
        //       items: [
        //         {
        //           id: 1,
        //           title: "Board view",
        //         },
        //         {
        //           id: 2,
        //           title: "Portfolio",
        //         },
        //         {
        //           id: 3,
        //           title: "Project time budget",
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
      {
        id: 3,
        name: "ClickUp",
      },
      {
        id: 4,
        name: "Monday",
      },
      // {
      //   id: 5,
      //   name: "Asana",
      // },
    ],
  };

  return (
    <section
      style={{ background: "rgb(226, 246, 254)", fontFamily: "Poppins" }}
    >
      <div className={`${styles.container} container`}>
        <Tabs
          defaultActiveKey="Wrike"
          id="uncontrolled-tab-example"
          // className="mb-3"
          className={`${styles.compareTabs} mb-3`}
        >
          {compareDemoData.competitors.map((competitor) => (
            <Tab
              eventKey={competitor.name}
              title={competitor.name}
              key={competitor.id}
              className={`${styles.compareTab}`}
            >
              <div>
                <div className={`${styles.titleContainer}`}>
                  <p className={`${styles.title} ${styles.titleBlank}`}></p>
                  <p className={`${styles.title}`}>
                    {competitor?.headings?.title1}
                  </p>
                  <p className={`${styles.title} ${styles.titleCompetitor}`}>
                    {competitor?.headings?.title2}
                  </p>
                </div>
                {competitor?.challenges?.map((challenge) => (
                  <div
                    className={`${styles.featuresContainer}`}
                    key={challenge.id}
                  >
                    <div className={`${styles.featuresTitle}`}>
                      <p>{challenge.title}</p>
                    </div>
                    <div className={`${styles.featuresOwnCompany}`}>
                      {challenge?.company1?.items?.map((item) => (
                        <p key={item.id}>
                          <FaCheckCircle
                            color="#519e7d"
                            style={{ marginRight: "10px" }}
                          />
                          {item.title}
                        </p>
                      ))}
                    </div>
                    <div className={`${styles.featuresOtherCompany}`}>
                      {challenge?.company2?.items?.map((item) => (
                        <p key={item.id}>
                          {item.isAvailable ? (
                            <FaCheckCircle
                              color="#519e7d"
                              style={{ marginRight: "10px" }}
                            />
                          ) : (
                            <FaTimesCircle
                              color="#d45a5a"
                              style={{ marginRight: "10px" }}
                            />
                          )}
                          {item.title}
                        </p>
                      ))}
                    </div>

                    {/* <div key={item.id}>
                            
                             <p>Portfolio</p>
                             <p>Project time budget</p>
                          </div> */}

                    {/* {challenge?.company2?.items?.map((item) => (
                          <div key={item.id}>
                            <p>
                              <FaCheckCircle color="#134d34" />
                              Board view
                            </p>
                            <p>Portfolio</p>
                            <p>Project time budget</p>
                          </div>
                        ))} */}
                    {/* <div>
                          <p>Board view</p>
                          <p>
                            <HiXCircle />
                            Portfolio
                          </p>
                          <p>Project time budget</p>
                        </div> */}
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CompareBoard;
