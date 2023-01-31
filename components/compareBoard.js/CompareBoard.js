import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./CompareBoard.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiXCircle } from "react-icons/hi2";
import CButton from "../utility/buttons/CButton";

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
            title1: "Whit Label Branding",
            title2: "Kanban Board",
            title3: "Dashboard",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                },
                {
                  id: 2,
                  title: "Kanban Board",
                },
                {
                  id: 3,
                  title: "Dashboard",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Kanban Board",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Dashboard",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Calendar View",
            title2: "Live Chat Communication",
            title3: "Bill & Invoice Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 3,
            title1: "Expense Management",
            title2: "Issue Tracking",
            title3: "Time Tracking",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                },
                {
                  id: 3,
                  title: "Time Tracking",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Time Tracking",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 4,
            title1: "Document Management",
            title2: "Program Details",
            title3: "Project Details",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                },
                {
                  id: 2,
                  title: "Program Details",
                },
                {
                  id: 3,
                  title: "Project Details",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Program Details",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Project Details",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 5,
            title1: "Task Details",
            title2: "Project Budget",
            title3: "Task Budget",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                },
                {
                  id: 2,
                  title: "Project Budget",
                },
                {
                  id: 3,
                  title: "Task Budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Project Budget",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Task Budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 6,
            title1: "Project Discussion",
            title2: "Task Discussion",
            title3: "VAT-TAX Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                },
                {
                  id: 2,
                  title: "Task Discussion",
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Task Discussion",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 7,
            title1: "Income Management",
            title2: "Los-Profit Calculation",
            title3: "Budget-Cost Comparison",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 8,
            title1: "Requisition Management",
            title2: "Client Control Panel",
            title3: "Vendor Control Panel",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 9,
            title1: "Notification",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Notification",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Wrike",
              items: [
                {
                  id: 1,
                  title: "Notification",
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
            title1: "Whit Label Branding",
            title2: "Kanban Board",
            title3: "Dashboard",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                },
                {
                  id: 2,
                  title: "Kanban Board",
                },
                {
                  id: 3,
                  title: "Dashboard",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Kanban Board",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Dashboard",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Calendar View",
            title2: "Live Chat Communication",
            title3: "Bill & Invoice Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 3,
            title1: "Expense Management",
            title2: "Issue Tracking",
            title3: "Time Tracking",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                },
                {
                  id: 3,
                  title: "Time Tracking",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Time Tracking",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 4,
            title1: "Document Management",
            title2: "Program Details",
            title3: "Project Details",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                },
                {
                  id: 2,
                  title: "Program Details",
                },
                {
                  id: 3,
                  title: "Project Details",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Program Details",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Project Details",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 5,
            title1: "Task Details",
            title2: "Project Budget",
            title3: "Task Budget",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                },
                {
                  id: 2,
                  title: "Project Budget",
                },
                {
                  id: 3,
                  title: "Task Budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Project Budget",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Task Budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 6,
            title1: "Project Discussion",
            title2: "Task Discussion",
            title3: "VAT-TAX Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                },
                {
                  id: 2,
                  title: "Task Discussion",
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Task Discussion",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 7,
            title1: "Income Management",
            title2: "Los-Profit Calculation",
            title3: "Budget-Cost Comparison",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 8,
            title1: "Requisition Management",
            title2: "Client Control Panel",
            title3: "Vendor Control Panel",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 9,
            title1: "Notification",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Notification",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Asana",
              items: [
                {
                  id: 1,
                  title: "Notification",
                  isAvailable: true,
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
            title1: "Whit Label Branding",
            title2: "Kanban Board",
            title3: "Dashboard",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                },
                {
                  id: 2,
                  title: "Kanban Board",
                },
                {
                  id: 3,
                  title: "Dashboard",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Kanban Board",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Dashboard",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Calendar View",
            title2: "Live Chat Communication",
            title3: "Bill & Invoice Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 3,
            title1: "Expense Management",
            title2: "Issue Tracking",
            title3: "Time Tracking",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                },
                {
                  id: 3,
                  title: "Time Tracking",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Time Tracking",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 4,
            title1: "Document Management",
            title2: "Program Details",
            title3: "Project Details",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                },
                {
                  id: 2,
                  title: "Program Details",
                },
                {
                  id: 3,
                  title: "Project Details",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Program Details",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Project Details",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 5,
            title1: "Task Details",
            title2: "Project Budget",
            title3: "Task Budget",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                },
                {
                  id: 2,
                  title: "Project Budget",
                },
                {
                  id: 3,
                  title: "Task Budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Project Budget",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Task Budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 6,
            title1: "Project Discussion",
            title2: "Task Discussion",
            title3: "VAT-TAX Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                },
                {
                  id: 2,
                  title: "Task Discussion",
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Task Discussion",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 7,
            title1: "Income Management",
            title2: "Los-Profit Calculation",
            title3: "Budget-Cost Comparison",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 8,
            title1: "Requisition Management",
            title2: "Client Control Panel",
            title3: "Vendor Control Panel",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 9,
            title1: "Notification",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Notification",
                },
              ],
            },
            company2: {
              id: 1,
              title: "ClickUp",
              items: [
                {
                  id: 1,
                  title: "Notification",
                  isAvailable: true,
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
            title1: "Whit Label Branding",
            title2: "Kanban Board",
            title3: "Dashboard",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                },
                {
                  id: 2,
                  title: "Kanban Board",
                },
                {
                  id: 3,
                  title: "Dashboard",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Whit Label Branding",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Kanban Board",
                  isAvailable: true,
                },
                {
                  id: 3,
                  title: "Dashboard",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 2,
            title1: "Calendar View",
            title2: "Live Chat Communication",
            title3: "Bill & Invoice Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Calendar View",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Live Chat Communication",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Bill & Invoice Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 3,
            title1: "Expense Management",
            title2: "Issue Tracking",
            title3: "Time Tracking",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                },
                {
                  id: 3,
                  title: "Time Tracking",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Expense Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Issue Tracking",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Time Tracking",
                  isAvailable: true,
                },
              ],
            },
          },
          {
            id: 4,
            title1: "Document Management",
            title2: "Program Details",
            title3: "Project Details",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                },
                {
                  id: 2,
                  title: "Program Details",
                },
                {
                  id: 3,
                  title: "Project Details",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Document Management",
                  isAvailable: true,
                },
                {
                  id: 2,
                  title: "Program Details",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Project Details",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 5,
            title1: "Task Details",
            title2: "Project Budget",
            title3: "Task Budget",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                },
                {
                  id: 2,
                  title: "Project Budget",
                },
                {
                  id: 3,
                  title: "Task Budget",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Task Details",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Project Budget",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Task Budget",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 6,
            title1: "Project Discussion",
            title2: "Task Discussion",
            title3: "VAT-TAX Management",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                },
                {
                  id: 2,
                  title: "Task Discussion",
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Project Discussion",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Task Discussion",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "VAT-TAX Management",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 7,
            title1: "Income Management",
            title2: "Los-Profit Calculation",
            title3: "Budget-Cost Comparison",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Income Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Los-Profit Calculation",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Budget-Cost Comparison",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 8,
            title1: "Requisition Management",
            title2: "Client Control Panel",
            title3: "Vendor Control Panel",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Requisition Management",
                  isAvailable: false,
                },
                {
                  id: 2,
                  title: "Client Control Panel",
                  isAvailable: false,
                },
                {
                  id: 3,
                  title: "Vendor Control Panel",
                  isAvailable: false,
                },
              ],
            },
          },
          {
            id: 9,
            title1: "Notification",
            company1: {
              id: 1,
              title: "Vitlous",
              items: [
                {
                  id: 1,
                  title: "Notification",
                },
              ],
            },
            company2: {
              id: 1,
              title: "Monday",
              items: [
                {
                  id: 1,
                  title: "Notification",
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
                                <p
                                  key={item.id}
                                  style={{
                                    textDecoration: !item.isAvailable
                                      ? "line-through"
                                      : "",
                                  }}
                                >
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
                                <p
                                  key={item.id}
                                  style={{
                                    textDecoration: !item.isAvailable
                                      ? "line-through"
                                      : "",
                                  }}
                                >
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
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </div>

                <div className={`${styles.buttonsContainer} mt-5`}>
                  {showDetails && competitor.name === selectedTab ? (
                    <CButton
                      onClick={() => {
                        setShowDetails(!showDetails);
                        setSelectedTab(competitor.name);
                      }}
                      style={{
                        width: "250px",
                      }}
                    >
                      Collapse full comparison
                    </CButton>
                  ) : (
                    <CButton
                      onClick={() => {
                        setShowDetails(true);
                        setSelectedTab(competitor.name);
                      }}
                      style={{
                        display:
                          competitor?.challenges?.length > 3 ? "block" : "none",
                        width: "210px",
                      }}
                    >
                      View full comparison
                    </CButton>
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
