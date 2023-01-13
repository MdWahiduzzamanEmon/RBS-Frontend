exports.id = 6703;
exports.ids = [6703];
exports.modules = {

/***/ 6703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5774);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(693);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const CompareBoard = () => {
  const [showDetails, setShowDetails] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [selectedTab, setSelectedTab] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const compareDemoData = {
    id: 1,
    title: "Analyzing Project Management Software?",
    description: "See our comparison to other well-known solutions to learn why Vitlous is the best option.",
    competitors: [{
      name: "Wrike",
      headings: {
        id: 1,
        title1: "Vitlous",
        title2: "Wrike"
      },
      challenges: [{
        id: 1,
        title1: "Whit Label Branding",
        title2: "Kanban Board",
        title3: "Dashboard",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Whit Label Branding"
          }, {
            id: 2,
            title: "Kanban Board"
          }, {
            id: 3,
            title: "Dashboard"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Whit Label Branding",
            isAvailable: false
          }, {
            id: 2,
            title: "Kanban Board",
            isAvailable: true
          }, {
            id: 3,
            title: "Dashboard",
            isAvailable: true
          }]
        }
      }, {
        id: 2,
        title1: "Calendar View",
        title2: "Live Chat Communication",
        title3: "Bill & Invoice Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Calendar View"
          }, {
            id: 2,
            title: "Live Chat Communication"
          }, {
            id: 3,
            title: "Bill & Invoice Management"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Calendar View",
            isAvailable: true
          }, {
            id: 2,
            title: "Live Chat Communication",
            isAvailable: false
          }, {
            id: 3,
            title: "Bill & Invoice Management",
            isAvailable: false
          }]
        }
      }, {
        id: 3,
        title1: "Expense Management",
        title2: "Issue Tracking",
        title3: "Time Tracking",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Expense Management"
          }, {
            id: 2,
            title: "Issue Tracking"
          }, {
            id: 3,
            title: "Time Tracking"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Expense Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Issue Tracking",
            isAvailable: false
          }, {
            id: 3,
            title: "Time Tracking",
            isAvailable: true
          }]
        }
      }, {
        id: 4,
        title1: "Document Management",
        title2: "Program Details",
        title3: "Project Details",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Document Management"
          }, {
            id: 2,
            title: "Program Details"
          }, {
            id: 3,
            title: "Project Details"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Document Management",
            isAvailable: true
          }, {
            id: 2,
            title: "Program Details",
            isAvailable: false
          }, {
            id: 3,
            title: "Project Details",
            isAvailable: false
          }]
        }
      }, {
        id: 5,
        title1: "Task Details",
        title2: "Project Budget",
        title3: "Task Budget",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Task Details"
          }, {
            id: 2,
            title: "Project Budget"
          }, {
            id: 3,
            title: "Task Budget"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Task Details",
            isAvailable: false
          }, {
            id: 2,
            title: "Project Budget",
            isAvailable: false
          }, {
            id: 3,
            title: "Task Budget",
            isAvailable: false
          }]
        }
      }, {
        id: 6,
        title1: "Project Discussion",
        title2: "Task Discussion",
        title3: "VAT-TAX Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Project Discussion"
          }, {
            id: 2,
            title: "Task Discussion"
          }, {
            id: 3,
            title: "VAT-TAX Management"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Project Discussion",
            isAvailable: false
          }, {
            id: 2,
            title: "Task Discussion",
            isAvailable: false
          }, {
            id: 3,
            title: "VAT-TAX Management",
            isAvailable: false
          }]
        }
      }, {
        id: 7,
        title1: "Income Management",
        title2: "Los-Profit Calculation",
        title3: "Budget-Cost Comparison",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Income Management"
          }, {
            id: 2,
            title: "Los-Profit Calculation"
          }, {
            id: 3,
            title: "Budget-Cost Comparison"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Income Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Los-Profit Calculation",
            isAvailable: false
          }, {
            id: 3,
            title: "Budget-Cost Comparison",
            isAvailable: false
          }]
        }
      }, {
        id: 8,
        title1: "Requisition Management",
        title2: "Client Control Panel",
        title3: "Vendor Control Panel",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Requisition Management"
          }, {
            id: 2,
            title: "Client Control Panel"
          }, {
            id: 3,
            title: "Vendor Control Panel"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Requisition Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Client Control Panel",
            isAvailable: false
          }, {
            id: 3,
            title: "Vendor Control Panel",
            isAvailable: false
          }]
        }
      }, {
        id: 9,
        title1: "Notification",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Notification"
          }]
        },
        company2: {
          id: 1,
          title: "Wrike",
          items: [{
            id: 1,
            title: "Notification",
            isAvailable: true
          }]
        }
      }]
    }, {
      id: 2,
      name: "Asana",
      headings: {
        id: 1,
        title1: "Vitlous",
        title2: "Asana"
      },
      challenges: [{
        id: 1,
        title1: "Whit Label Branding",
        title2: "Kanban Board",
        title3: "Dashboard",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Whit Label Branding"
          }, {
            id: 2,
            title: "Kanban Board"
          }, {
            id: 3,
            title: "Dashboard"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Whit Label Branding",
            isAvailable: false
          }, {
            id: 2,
            title: "Kanban Board",
            isAvailable: true
          }, {
            id: 3,
            title: "Dashboard",
            isAvailable: true
          }]
        }
      }, {
        id: 2,
        title1: "Calendar View",
        title2: "Live Chat Communication",
        title3: "Bill & Invoice Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Calendar View"
          }, {
            id: 2,
            title: "Live Chat Communication"
          }, {
            id: 3,
            title: "Bill & Invoice Management"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Calendar View",
            isAvailable: true
          }, {
            id: 2,
            title: "Live Chat Communication",
            isAvailable: false
          }, {
            id: 3,
            title: "Bill & Invoice Management",
            isAvailable: false
          }]
        }
      }, {
        id: 3,
        title1: "Expense Management",
        title2: "Issue Tracking",
        title3: "Time Tracking",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Expense Management"
          }, {
            id: 2,
            title: "Issue Tracking"
          }, {
            id: 3,
            title: "Time Tracking"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Expense Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Issue Tracking",
            isAvailable: false
          }, {
            id: 3,
            title: "Time Tracking",
            isAvailable: true
          }]
        }
      }, {
        id: 4,
        title1: "Document Management",
        title2: "Program Details",
        title3: "Project Details",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Document Management"
          }, {
            id: 2,
            title: "Program Details"
          }, {
            id: 3,
            title: "Project Details"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Document Management",
            isAvailable: true
          }, {
            id: 2,
            title: "Program Details",
            isAvailable: false
          }, {
            id: 3,
            title: "Project Details",
            isAvailable: false
          }]
        }
      }, {
        id: 5,
        title1: "Task Details",
        title2: "Project Budget",
        title3: "Task Budget",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Task Details"
          }, {
            id: 2,
            title: "Project Budget"
          }, {
            id: 3,
            title: "Task Budget"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Task Details",
            isAvailable: false
          }, {
            id: 2,
            title: "Project Budget",
            isAvailable: false
          }, {
            id: 3,
            title: "Task Budget",
            isAvailable: false
          }]
        }
      }, {
        id: 6,
        title1: "Project Discussion",
        title2: "Task Discussion",
        title3: "VAT-TAX Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Project Discussion"
          }, {
            id: 2,
            title: "Task Discussion"
          }, {
            id: 3,
            title: "VAT-TAX Management"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Project Discussion",
            isAvailable: false
          }, {
            id: 2,
            title: "Task Discussion",
            isAvailable: false
          }, {
            id: 3,
            title: "VAT-TAX Management",
            isAvailable: false
          }]
        }
      }, {
        id: 7,
        title1: "Income Management",
        title2: "Los-Profit Calculation",
        title3: "Budget-Cost Comparison",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Income Management"
          }, {
            id: 2,
            title: "Los-Profit Calculation"
          }, {
            id: 3,
            title: "Budget-Cost Comparison"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Income Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Los-Profit Calculation",
            isAvailable: false
          }, {
            id: 3,
            title: "Budget-Cost Comparison",
            isAvailable: false
          }]
        }
      }, {
        id: 8,
        title1: "Requisition Management",
        title2: "Client Control Panel",
        title3: "Vendor Control Panel",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Requisition Management"
          }, {
            id: 2,
            title: "Client Control Panel"
          }, {
            id: 3,
            title: "Vendor Control Panel"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Requisition Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Client Control Panel",
            isAvailable: false
          }, {
            id: 3,
            title: "Vendor Control Panel",
            isAvailable: false
          }]
        }
      }, {
        id: 9,
        title1: "Notification",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Notification"
          }]
        },
        company2: {
          id: 1,
          title: "Asana",
          items: [{
            id: 1,
            title: "Notification",
            isAvailable: true
          }]
        }
      }]
    }, {
      id: 3,
      name: "ClickUp",
      headings: {
        id: 1,
        title1: "Vitlous",
        title2: "ClickUp"
      },
      challenges: [{
        id: 1,
        title1: "Whit Label Branding",
        title2: "Kanban Board",
        title3: "Dashboard",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Whit Label Branding"
          }, {
            id: 2,
            title: "Kanban Board"
          }, {
            id: 3,
            title: "Dashboard"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Whit Label Branding",
            isAvailable: true
          }, {
            id: 2,
            title: "Kanban Board",
            isAvailable: true
          }, {
            id: 3,
            title: "Dashboard",
            isAvailable: true
          }]
        }
      }, {
        id: 2,
        title1: "Calendar View",
        title2: "Live Chat Communication",
        title3: "Bill & Invoice Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Calendar View"
          }, {
            id: 2,
            title: "Live Chat Communication"
          }, {
            id: 3,
            title: "Bill & Invoice Management"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Calendar View",
            isAvailable: true
          }, {
            id: 2,
            title: "Live Chat Communication",
            isAvailable: false
          }, {
            id: 3,
            title: "Bill & Invoice Management",
            isAvailable: false
          }]
        }
      }, {
        id: 3,
        title1: "Expense Management",
        title2: "Issue Tracking",
        title3: "Time Tracking",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Expense Management"
          }, {
            id: 2,
            title: "Issue Tracking"
          }, {
            id: 3,
            title: "Time Tracking"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Expense Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Issue Tracking",
            isAvailable: false
          }, {
            id: 3,
            title: "Time Tracking",
            isAvailable: true
          }]
        }
      }, {
        id: 4,
        title1: "Document Management",
        title2: "Program Details",
        title3: "Project Details",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Document Management"
          }, {
            id: 2,
            title: "Program Details"
          }, {
            id: 3,
            title: "Project Details"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Document Management",
            isAvailable: true
          }, {
            id: 2,
            title: "Program Details",
            isAvailable: false
          }, {
            id: 3,
            title: "Project Details",
            isAvailable: false
          }]
        }
      }, {
        id: 5,
        title1: "Task Details",
        title2: "Project Budget",
        title3: "Task Budget",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Task Details"
          }, {
            id: 2,
            title: "Project Budget"
          }, {
            id: 3,
            title: "Task Budget"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Task Details",
            isAvailable: false
          }, {
            id: 2,
            title: "Project Budget",
            isAvailable: false
          }, {
            id: 3,
            title: "Task Budget",
            isAvailable: false
          }]
        }
      }, {
        id: 6,
        title1: "Project Discussion",
        title2: "Task Discussion",
        title3: "VAT-TAX Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Project Discussion"
          }, {
            id: 2,
            title: "Task Discussion"
          }, {
            id: 3,
            title: "VAT-TAX Management"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Project Discussion",
            isAvailable: false
          }, {
            id: 2,
            title: "Task Discussion",
            isAvailable: false
          }, {
            id: 3,
            title: "VAT-TAX Management",
            isAvailable: false
          }]
        }
      }, {
        id: 7,
        title1: "Income Management",
        title2: "Los-Profit Calculation",
        title3: "Budget-Cost Comparison",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Income Management"
          }, {
            id: 2,
            title: "Los-Profit Calculation"
          }, {
            id: 3,
            title: "Budget-Cost Comparison"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Income Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Los-Profit Calculation",
            isAvailable: false
          }, {
            id: 3,
            title: "Budget-Cost Comparison",
            isAvailable: false
          }]
        }
      }, {
        id: 8,
        title1: "Requisition Management",
        title2: "Client Control Panel",
        title3: "Vendor Control Panel",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Requisition Management"
          }, {
            id: 2,
            title: "Client Control Panel"
          }, {
            id: 3,
            title: "Vendor Control Panel"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Requisition Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Client Control Panel",
            isAvailable: false
          }, {
            id: 3,
            title: "Vendor Control Panel",
            isAvailable: false
          }]
        }
      }, {
        id: 9,
        title1: "Notification",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Notification"
          }]
        },
        company2: {
          id: 1,
          title: "ClickUp",
          items: [{
            id: 1,
            title: "Notification",
            isAvailable: true
          }]
        }
      }]
    }, {
      id: 4,
      name: "Monday",
      headings: {
        id: 1,
        title1: "Vitlous",
        title2: "Monday"
      },
      challenges: [{
        id: 1,
        title1: "Whit Label Branding",
        title2: "Kanban Board",
        title3: "Dashboard",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Whit Label Branding"
          }, {
            id: 2,
            title: "Kanban Board"
          }, {
            id: 3,
            title: "Dashboard"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Whit Label Branding",
            isAvailable: false
          }, {
            id: 2,
            title: "Kanban Board",
            isAvailable: true
          }, {
            id: 3,
            title: "Dashboard",
            isAvailable: true
          }]
        }
      }, {
        id: 2,
        title1: "Calendar View",
        title2: "Live Chat Communication",
        title3: "Bill & Invoice Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Calendar View"
          }, {
            id: 2,
            title: "Live Chat Communication"
          }, {
            id: 3,
            title: "Bill & Invoice Management"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Calendar View",
            isAvailable: true
          }, {
            id: 2,
            title: "Live Chat Communication",
            isAvailable: false
          }, {
            id: 3,
            title: "Bill & Invoice Management",
            isAvailable: false
          }]
        }
      }, {
        id: 3,
        title1: "Expense Management",
        title2: "Issue Tracking",
        title3: "Time Tracking",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Expense Management"
          }, {
            id: 2,
            title: "Issue Tracking"
          }, {
            id: 3,
            title: "Time Tracking"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Expense Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Issue Tracking",
            isAvailable: false
          }, {
            id: 3,
            title: "Time Tracking",
            isAvailable: true
          }]
        }
      }, {
        id: 4,
        title1: "Document Management",
        title2: "Program Details",
        title3: "Project Details",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Document Management"
          }, {
            id: 2,
            title: "Program Details"
          }, {
            id: 3,
            title: "Project Details"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Document Management",
            isAvailable: true
          }, {
            id: 2,
            title: "Program Details",
            isAvailable: false
          }, {
            id: 3,
            title: "Project Details",
            isAvailable: false
          }]
        }
      }, {
        id: 5,
        title1: "Task Details",
        title2: "Project Budget",
        title3: "Task Budget",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Task Details"
          }, {
            id: 2,
            title: "Project Budget"
          }, {
            id: 3,
            title: "Task Budget"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Task Details",
            isAvailable: false
          }, {
            id: 2,
            title: "Project Budget",
            isAvailable: false
          }, {
            id: 3,
            title: "Task Budget",
            isAvailable: false
          }]
        }
      }, {
        id: 6,
        title1: "Project Discussion",
        title2: "Task Discussion",
        title3: "VAT-TAX Management",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Project Discussion"
          }, {
            id: 2,
            title: "Task Discussion"
          }, {
            id: 3,
            title: "VAT-TAX Management"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Project Discussion",
            isAvailable: false
          }, {
            id: 2,
            title: "Task Discussion",
            isAvailable: false
          }, {
            id: 3,
            title: "VAT-TAX Management",
            isAvailable: false
          }]
        }
      }, {
        id: 7,
        title1: "Income Management",
        title2: "Los-Profit Calculation",
        title3: "Budget-Cost Comparison",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Income Management"
          }, {
            id: 2,
            title: "Los-Profit Calculation"
          }, {
            id: 3,
            title: "Budget-Cost Comparison"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Income Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Los-Profit Calculation",
            isAvailable: false
          }, {
            id: 3,
            title: "Budget-Cost Comparison",
            isAvailable: false
          }]
        }
      }, {
        id: 8,
        title1: "Requisition Management",
        title2: "Client Control Panel",
        title3: "Vendor Control Panel",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Requisition Management"
          }, {
            id: 2,
            title: "Client Control Panel"
          }, {
            id: 3,
            title: "Vendor Control Panel"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Requisition Management",
            isAvailable: false
          }, {
            id: 2,
            title: "Client Control Panel",
            isAvailable: false
          }, {
            id: 3,
            title: "Vendor Control Panel",
            isAvailable: false
          }]
        }
      }, {
        id: 9,
        title1: "Notification",
        company1: {
          id: 1,
          title: "Vitlous",
          items: [{
            id: 1,
            title: "Notification"
          }]
        },
        company2: {
          id: 1,
          title: "Monday",
          items: [{
            id: 1,
            title: "Notification",
            isAvailable: true
          }]
        }
      }]
    } // {
    //   id: 5,
    //   name: "Asana",
    // },
    ]
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    style: {
      // background: "rgb(226, 246, 254)",
      padding: "50px 0"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().container)} container`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().compareHeadingContainer)}`,
        "data-aos": "zoom-in-down",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
          className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().compareHeading)} fs-2 mb-3`,
          children: compareDemoData.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().compareShortDetails)} fs-6`,
          children: compareDemoData.description
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        "data-aos": "zoom-in-down",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
          defaultActiveKey: "Wrike",
          id: "uncontrolled-tab-example" // className="mb-3"
          ,
          className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().compareTabs)} mb-3`,
          children: compareDemoData.competitors.map(competitor => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab, {
            eventKey: competitor.name,
            title: competitor.name,
            className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().compareTab)}` // data-aos="zoom-in-down"
            ,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleContainer)}`,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().title)} ${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleBlank)}`
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().title)}`,
                  children: competitor?.headings?.title1
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().title)} ${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleCompetitor)}`,
                  children: competitor?.headings?.title2
                })]
              }), showDetails && competitor.name === selectedTab ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: competitor?.challenges?.map(challenge => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresContainer)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresTitle)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title1
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title2
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title3
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresOwnCompany)}`,
                      children: challenge?.company1?.items?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheckCircle, {
                          color: "#519e7d",
                          style: {
                            marginRight: "10px"
                          }
                        }), item.title]
                      }, item.id))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresOtherCompany)}`,
                      children: challenge?.company2?.items?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        style: {
                          textDecoration: !item.isAvailable ? "line-through" : ""
                        },
                        children: [item.isAvailable ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheckCircle, {
                          color: "#519e7d",
                          style: {
                            marginRight: "10px"
                          }
                        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimesCircle, {
                          color: "#d45a5a",
                          style: {
                            marginRight: "10px"
                          }
                        }), item.title]
                      }, item.id))
                    })]
                  }, challenge.id)
                }))
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: competitor?.challenges?.slice(0, 3).map(challenge => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresContainer)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresTitle)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title1
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title2
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        children: challenge.title3
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresOwnCompany)}`,
                      children: challenge?.company1?.items?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheckCircle, {
                          color: "#519e7d",
                          style: {
                            marginRight: "10px"
                          }
                        }), item.title]
                      }, item.id))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresOtherCompany)}`,
                      children: challenge?.company2?.items?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        style: {
                          textDecoration: !item.isAvailable ? "line-through" : ""
                        },
                        children: [item.isAvailable ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheckCircle, {
                          color: "#519e7d",
                          style: {
                            marginRight: "10px"
                          }
                        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimesCircle, {
                          color: "#d45a5a",
                          style: {
                            marginRight: "10px"
                          }
                        }), item.title]
                      }, item.id))
                    })]
                  }, challenge.id)
                }))
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: `${(_CompareBoard_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonsContainer)} mt-5` // style={{
              //   display:
              //     showDetails && competitor.name === selectedTab
              //       ? "none"
              //       : "block",
              // }}
              ,
              children: showDetails && competitor.name === selectedTab ?
              /*#__PURE__*/
              // <button
              //   className={`${styles.comparisonCollapseButton}`}
              //   onClick={() => {
              //     setShowDetails(!showDetails);
              //     setSelectedTab(competitor.name);
              //   }}
              // >
              //   Collapse full comparison
              // </button>
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setSelectedTab(competitor.name);
                },
                style: {
                  width: "250px"
                },
                children: "Collapse full comparison"
              }) :
              /*#__PURE__*/
              //  )}
              // <button
              //   className={`${styles.comparisonShowButton}`}
              //   onClick={() => {
              //     setShowDetails(true);
              //     setSelectedTab(competitor.name);
              //   }}
              //   style={{
              //     display:
              //       competitor?.challenges?.length > 3 ? "block" : "none",
              //   }}
              // >
              //   View full comparison
              // </button>
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: () => {
                  setShowDetails(true);
                  setSelectedTab(competitor.name);
                },
                style: {
                  display: competitor?.challenges?.length > 3 ? "block" : "none",
                  width: "210px"
                },
                children: "View full comparison"
              })
            })]
          }, competitor.id))
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompareBoard);

/***/ }),

/***/ 539:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CompareBoard_container__48ea1",
	"compareHeadingContainer": "CompareBoard_compareHeadingContainer__KU3vL",
	"compareHeading": "CompareBoard_compareHeading__FbblF",
	"compareShortDetails": "CompareBoard_compareShortDetails__h3R5z",
	"compareTabs": "CompareBoard_compareTabs__vtbTt",
	"titleContainer": "CompareBoard_titleContainer__Gq1Et",
	"title": "CompareBoard_title__PDpqV",
	"titleBlank": "CompareBoard_titleBlank__zIjrP",
	"titleCompetitor": "CompareBoard_titleCompetitor__EQeoK",
	"featuresContainer": "CompareBoard_featuresContainer__9T5OI",
	"featuresTitle": "CompareBoard_featuresTitle__TGuHR",
	"featuresOwnCompany": "CompareBoard_featuresOwnCompany__DbP9H",
	"featuresOtherCompany": "CompareBoard_featuresOtherCompany__C3Sc5",
	"buttonsContainer": "CompareBoard_buttonsContainer__A5ClQ"
};


/***/ })

};
;