(() => {
var exports = {};
exports.id = 7068;
exports.ids = [7068,541,8612,2937,9863,7848,8197,5563,8513,3315];
exports.modules = {

/***/ 8517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ watchDemo),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/watchDemos/DemoVideoCard/DemoVideoCard.module.css
var DemoVideoCard_module = __webpack_require__(9999);
var DemoVideoCard_module_default = /*#__PURE__*/__webpack_require__.n(DemoVideoCard_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/watchDemos/DemoVideoCard/DemoVideoCard.js






const DemoVideoCard = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(DemoVideoCard_module_default()).wrap}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(DemoVideoCard_module_default()).blankWrapper}`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(DemoVideoCard_module_default()).text}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
          width: "100%",
          height: "100%",
          src: "https://www.youtube-nocookie.com/embed/q6LMjurECZM",
          title: "YouTube video player",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "how to use vitlous dashboard "
      })]
    })]
  });
};

/* harmony default export */ const DemoVideoCard_DemoVideoCard = (DemoVideoCard);
// EXTERNAL MODULE: ./components/watchDemos/DemoCards/DemoCards.module.css
var DemoCards_module = __webpack_require__(9983);
var DemoCards_module_default = /*#__PURE__*/__webpack_require__.n(DemoCards_module);
;// CONCATENATED MODULE: ./components/watchDemos/DemoCards/DemoCards.js






const DemoCards = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container-xl",
    style: {
      marginTop: "150px",
      color: "rgb(23, 52, 101)"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Tutorial Lists"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(DemoCards_module_default()).demoCardsContainer}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(DemoVideoCard_DemoVideoCard, {}), /*#__PURE__*/jsx_runtime_.jsx(DemoVideoCard_DemoVideoCard, {}), /*#__PURE__*/jsx_runtime_.jsx(DemoVideoCard_DemoVideoCard, {})]
    })]
  });
};

/* harmony default export */ const DemoCards_DemoCards = (DemoCards);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/watchDemos/watchDemosBanner/WatchDemosBanner.module.css
var WatchDemosBanner_module = __webpack_require__(817);
var WatchDemosBanner_module_default = /*#__PURE__*/__webpack_require__.n(WatchDemosBanner_module);
;// CONCATENATED MODULE: ./components/watchDemos/watchDemosBanner/WatchDemosBanner.js







const WatchDemosBanner = data => {
  const {
    title,
    description,
    image
  } = data.data;
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `${(WatchDemosBanner_module_default()).banner}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(WatchDemosBanner_module_default()).bannerContainer} container-xl`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${(WatchDemosBanner_module_default()).bannerTitleContainer}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: `${(WatchDemosBanner_module_default()).bannerTitle}`,
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(WatchDemosBanner_module_default()).bannerDescription}`,
            children: description
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(WatchDemosBanner_module_default()).bannerImageContainer}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
            width: "100%",
            height: "500px",
            src: "https://www.youtube-nocookie.com/embed/q6LMjurECZM",
            title: "YouTube video player",
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: true
          })
        })]
      })
    })
  });
};

/* harmony default export */ const watchDemosBanner_WatchDemosBanner = (WatchDemosBanner);
;// CONCATENATED MODULE: ./public/JSON/watchDemos/watchDemosDemoData.js
const watchDemosDemoData = {
  banner: {
    id: 1,
    title: "Learn how to use our software",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: "/pageImages/pageImage1.png"
  },
  featureLists: [{
    id: 1,
    title: "Reporting",
    features: [{
      id: 1,
      title: "Whit Label Branding",
      name: "Whit-Label-Branding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nisl eget "
    }, {
      id: 2,
      title: "Kanban Board",
      name: "Kanban-Board",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nisl eget "
    }, {
      id: 3,
      title: "Gantt Chart",
      name: "Gantt-Chart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nislc nisl, egeisl."
    }, {
      id: 4,
      title: "Gantt Chart",
      name: "Gantt-Chart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nislc nisl, egeisl."
    }, {
      id: 5,
      title: "Vendor/Contractor Control Panel",
      name: "Vendor-Contractor-Control-Panel",
      description: "Organizations use to manage vendors and monitor projects which are developing by them."
    }, {
      id: 6,
      title: "In depth Program Management System",
      name: "In-depth-Program-Management-System",
      description: "That shows the detail overview of the project, tasks, expense, income, budget, loss-profit briefly."
    }, {
      id: 7,
      title: "In depth Task  Management System",
      name: "In-depth-Program-Management-System",
      description: "That shows the detail overview of the project, tasks, expense, income, budget, loss-profit briefly."
    }, {
      id: 8,
      title: "User Role Based Permission ",
      name: "User-Role-Based-Permission",
      description: "Shows actionable and useful information at a glance of complex data and helps stakeholders understand, analyze, and present key insights."
    }, {
      id: 9,
      title: "Client Control Panel",
      name: "Client-Control-Panel",
      description: "Our client control panel enables our customers to login to their account 24 hours a day, 7 days a week to monitor the project in detail."
    }, {
      id: 10,
      isShow: true,
      title: "Approval Management System",
      name: "Approval-Management-System",
      description: "That helps organizations reduce operational costs and improve employee satisfaction by approval workflow automation, and process visibility."
    }]
  }, {
    id: 2,
    title: "Collaboration",
    features: [{
      id: 1,
      title: "Project Budget Management System",
      name: "Project-Budget-Management-System",
      description: "A project without a budget is like a car without fuel. creating a project budget and helping those wheels spin will most likely be your full responsibility."
    }, {
      id: 2,
      title: "Budget & Cost Comparison",
      name: "Budget-Cost-Comparison",
      description: "It will help you to monitor your expense in regard to budget that will make direct impact to make maximum profit."
    }, {
      id: 3,
      title: "Project-Discussion",
      name: "Project-Discussion",
      description: "An effective discussion informs members what can be done in next which contains the results and outcomes of the project."
    }, {
      id: 4,
      title: "Task-Discussion",
      name: "Task-Discussion",
      description: "Create discussions about your tasks and projects to improve team collaboration for the ongoing & next tasks."
    }, {
      id: 5,
      title: "Task-Budget Management System",
      name: "Task-Budget-Management-System",
      description: "View your task's budget in hours or money. Keep track of your progress as you work and ensure your finances don't take you by surprise."
    }, {
      id: 6,
      title: "One 2 One & One 2 Many Chat",
      name: "One-2-One-Many-Chat",
      description: "This is easier when working together in the same physical office space or communicating remotely or working with freelancers around the world?"
    }, {
      id: 7,
      title: "Work Board Check List",
      name: "Work-Board-Check-List",
      description: "The Checklist Item of Kanban Board enables you to visualize all of your Checklist Items based on their current ‘Status’."
    }]
  }, {
    id: 3,
    title: "Docs",
    features: [{
      id: 1,
      title: "Time Tracking Management System",
      name: "Time-Tracking-Management-System",
      description: "It helps to track a time that will save you and your company precious time - and money."
    }, {
      id: 2,
      title: "Requisition Management System",
      name: "Requisition-Management-System",
      description: "It helps the process of creating, processing, authorizing, and tracking purchase requests within an organization."
    }, {
      id: 3,
      title: "Expense Management System",
      name: "Expense-Management-System",
      description: "It helps the systems deployed by a business to process, pay, and audit employee-initiated expenses."
    }, {
      id: 4,
      title: "Income Management System",
      name: "Income-Management-System",
      description: "Effectively manage your income stream with our all-in-one financial management solution."
    }, {
      id: 5,
      title: "Invoice Management System",
      name: "Invoice-Management-System",
      description: "It has been designed to automate your accounts receivable process. Connect and sync invoices and start chasing down unpaid bills."
    }, {
      id: 6,
      title: "VAT -TAX Management System",
      name: "VAT-TAX-Management-System",
      description: "The Tax Management module provides organizations with centralized tax configuration, management, and reporting."
    }, {
      id: 7,
      title: "LOS-Profit Management System",
      name: "LOS-Profit-Management-System",
      description: "It helps to manage income and expenses to ensure that a business earns a net operating profit."
    }, {
      id: 8,
      title: "All types of Approval",
      name: "All-types-of-Approval",
      description: "It provides a system to manage approval workflow transparently, effectively, and accurately."
    }]
  }]
};
;// CONCATENATED MODULE: ./pages/watchDemo/index.js






const getStaticProps = async () => {
  return {
    props: {
      watchDemosData: watchDemosDemoData // allFeaturesMainPageData,

    }
  };
};

const WatchDemos = ({
  watchDemosData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    // style={{ background: "linear-gradient(45deg,#140c1f 0%,#24c6dc 100%)" }}
    style: {
      backgroundImage: "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(watchDemosBanner_WatchDemosBanner, {
      data: watchDemosData.banner
    }), /*#__PURE__*/jsx_runtime_.jsx(DemoCards_DemoCards, {})]
  });
};

/* harmony default export */ const watchDemo = (WatchDemos);

/***/ }),

/***/ 9983:
/***/ ((module) => {

// Exports
module.exports = {
	"demoCardsContainer": "DemoCards_demoCardsContainer__6EVm7"
};


/***/ }),

/***/ 9999:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "DemoVideoCard_wrap__IxwGO",
	"text": "DemoVideoCard_text__S8RuG",
	"description": "DemoVideoCard_description__iczim",
	"cardButton": "DemoVideoCard_cardButton__xilCF"
};


/***/ }),

/***/ 817:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "WatchDemosBanner_banner__DqS5t",
	"bannerContainer": "WatchDemosBanner_bannerContainer__pWsB3",
	"bannerTitleContainer": "WatchDemosBanner_bannerTitleContainer__GWm0S",
	"bannerTitle": "WatchDemosBanner_bannerTitle__gavDM",
	"bannerDescription": "WatchDemosBanner_bannerDescription__l3EZY",
	"bannerButtonContainer": "WatchDemosBanner_bannerButtonContainer__wyvTv",
	"bannerButtonLeft": "WatchDemosBanner_bannerButtonLeft__lWF3X",
	"bannerButtonRight": "WatchDemosBanner_bannerButtonRight__g4uUA",
	"bannerImageContainer": "WatchDemosBanner_bannerImageContainer__8YptH",
	"bannerImage": "WatchDemosBanner_bannerImage__E4dz7"
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,1563,5675,2383,1664], () => (__webpack_exec__(8517)));
module.exports = __webpack_exports__;

})();