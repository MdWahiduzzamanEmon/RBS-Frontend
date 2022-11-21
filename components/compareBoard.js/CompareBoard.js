import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./CompareBoard.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiXCircle } from "react-icons/hi2";

const CompareBoard = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("");
  const compareDemoData = {
    id: 1,
    title: "Analyzing Project Management Software?",
    description:
      "See our comparison to other well-known solutions to learn why Vitlous is the best option.",
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
            title1: "Board view",
            title2: "Portfolio Management",
            title3: "Project time budget",
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
            title1: "Burndown reporting",
            title2: "Utilization reports",
            title3: "Workload resource management",
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
            title1: "Billing and invoicing",
            title2: "Resource scheduling",
            title3: "Budgeting",
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
                  title: "Budgeting",
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
            title1: "Dependencies",
            title2: "Time tracking",
            title3: "Workload",
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
            title1: "2FA",
            title2: "Custom domain with SSL",
            title3: "Phone, live chat, and email support",
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
            title1: "Use intake forms",
            title2: "Add unlimited clients",
            title3: "Custom branding",
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
        headings: {
          id: 1,
          title1: "Vitlous",
          title2: "Asana",
        },
        challenges: [
          {
            id: 1,
            title1: "Assign tasks to more than one person",
            title2: "Use project tags",
            title3: "Set a project time budget",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Assign tasks to more than one person",
                },
                {
                  id: 2,
                  title: "Use project tags",
                },
                {
                  id: 3,
                  title: "Set a project time budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Assign tasks to more than one person",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Use project tags",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Set a project time budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Burndown reporting",
            title2: "Utilization reports",
            title3: "Workload resource management",
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
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Burndown reporting",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Utilization reports",
                  isAvailable: true,
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
            title1: "Billing and invoicing",
            title2: "Resource scheduling",
            title3: "Budgeting",
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
                  title: "Budgeting",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Billing and invoicing",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Resource scheduling",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Budgeting",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 4,
            title1: "Dependencies",
            title2: "Time tracking",
            title3: "Workload",
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
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Dependencies",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Time tracking",
                  isAvailable: false,
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
            title1: "2FA",
            title2: "Custom domain with SSL",
            title3: "Phone, live chat, and email support",
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
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "2FA",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Custom domain with SSL",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Phone, live chat, and email support",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 6,
            title1: "Custom branding",
            title2: "Add companies",
            title3: "See what’s coming next",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Custom branding",
                },
                {
                  id: 2,
                  title: "Add companies",
                },
                {
                  id: 3,
                  title: "See what’s coming next",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Custom branding",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Add companies",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "See what’s coming next",
                  isAvailable: false,
                },
              ],
            },
          },
        ],
      },
      {
        id: 3,
        name: "ClickUp",
        headings: {
          id: 1,
          title1: "Vitlous",
          title2: "ClickUp",
        },
        challenges: [
          {
            id: 1,
            title1: "Board view",
            title2: "Portfolio",
            title3: "Project time budget",
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
                  title: "Portfolio",
                },
                {
                  id: 3,
                  title: "Project time budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Board view",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Portfolio",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Project time budget",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Burndown reporting",
            title2: "Utilization reports",
            title3: "Workload resource management",
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
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Burndown reporting",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Utilization reports",
                  isAvailable: true,
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
            title1: "Billing and invoicing",
            title2: "Resource scheduling",
            title3: "Budgeting",
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
                  title: "Budgeting",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
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
            title1: "Dependencies",
            title2: "Time tracking",
            title3: "Workload",
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
              title: "ClickUp",
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
            title1: "2FA",
            title2: "Custom domain with SSL",
            title3: "Phone, live chat, and email support",
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
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "2FA",
                  isAvailable: true,
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
            title1: "Use intake forms",
            title2: "Add unlimited clients",
            title3: "Custom branding",
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
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Use intake forms",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Add unlimited clients",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Custom branding",
                  isAvailable: false,
                },
              ],
            },
          },
        ],
      },
      {
        id: 4,
        name: "Monday",
        headings: {
          id: 1,
          title1: "Vitlous",
          title2: "Monday",
        },
        challenges: [
          {
            id: 1,
            title1: "Board view",
            title2: "Portfolio Management",
            title3: "Project time budget",
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
              title: "Monday",
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
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Critical path",
            title2: "Utilization reports",
            title3: "Workload resource management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Critical path",
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
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Critical path",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Utilization reports",
                  isAvailable: true,
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
            title1: "Integrated team chat",
            title2: "Easy document management",
            title3: "Built-in CRM",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Integrated team chat",
                },
                {
                  id: 2,
                  title: "Easy document management",
                },
                {
                  id: 3,
                  title: "Built-in CRM",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Integrated team chat",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Easy document management",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Built-in CRM",
                  isAvailable: true,
                },
              ],
            },
          },
        ],
      },
      // {
      //   id: 5,
      //   name: "Asana",
      // },
    ],
  };
  return (
    <section
      style={{
        background: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      <div className={`${styles.container} container`}>
        <div
          className={`${styles.compareHeadingContainer}`}
          data-aos="zoom-in-down"
        >
          <h1 className={`${styles.compareHeading} fs-2 mb-3`}>
            {compareDemoData.title}
          </h1>
          <p className={`${styles.compareShortDetails} fs-6`}>
            {compareDemoData.description}
          </p>
        </div>
        <div data-aos="zoom-in-down">
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
                // data-aos="zoom-in-down"
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
                  {showDetails && competitor.name === selectedTab ? (
                    <>
                      {competitor?.challenges?.map((challenge) => (
                        <>
                          <div
                            className={`${styles.featuresContainer}`}
                            key={challenge.id}
                          >
                            <div className={`${styles.featuresTitle}`}>
                              <p>{challenge.title1}</p>
                              <p>{challenge.title2}</p>
                              <p>{challenge.title3}</p>
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
                                      style={{
                                        marginRight: "10px",
                                      }}
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
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {competitor?.challenges?.slice(0, 3).map((challenge) => (
                        <>
                          <div
                            className={`${styles.featuresContainer}`}
                            key={challenge.id}
                          >
                            <div className={`${styles.featuresTitle}`}>
                              <p>{challenge.title1}</p>
                              <p>{challenge.title2}</p>
                              <p>{challenge.title3}</p>
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
                        </>
                      ))}
                    </>
                  )}
                </div>
                {/* {chall} */}
                <div
                  className={`${styles.buttonsContainer} mt-5`}
                  // style={{
                  //   display:
                  //     showDetails && competitor.name === selectedTab
                  //       ? "none"
                  //       : "block",
                  // }}
                >
                  {showDetails && competitor.name === selectedTab ? (
                    <button
                      className={`${styles.comparisonCollapseButton}`}
                      onClick={() => {
                        setShowDetails(!showDetails);
                        setSelectedTab(competitor.name);
                      }}
                    >
                      Collapse full comparison
                    </button>
                  ) : (
                    <button
                      className={`${styles.comparisonShowButton}`}
                      onClick={() => {
                        setShowDetails(true);
                        setSelectedTab(competitor.name);
                      }}
                      style={{
                        display:
                          competitor?.challenges?.length > 3 ? "block" : "none",
                      }}
                    >
                      View full comparison
                    </button>
                  )}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CompareBoard;
