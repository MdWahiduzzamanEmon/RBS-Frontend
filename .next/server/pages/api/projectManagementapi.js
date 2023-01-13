"use strict";
(() => {
var exports = {};
exports.id = 6414;
exports.ids = [6414];
exports.modules = {

/***/ 3319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/pm.png
/* harmony default export */ const pm = ({"src":"/_next/static/media/pm.573ff875.png","height":1131,"width":1260,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAuklEQVR42gGvAFD/AKnB97/Q9O7y9+vv9uXr9fr7++bo7eLk6ADQ2/LM1OXS2+jf5e7c3+Xk6O3j5+3g5u8A8vX35eru4+Tj2NnV2tzY5ebl6e3z8vT4AKOnrqmvvsvO2bLB0JugppaZmaKpr77FzQAnJzd8cXmhlqJ3h55WX29kYF94c22MjIsANjY6UVBUQktUbW1xfnh8hISIqrHEjpy7AFxZWSgwN0NQWTw8RaeNi5iRj5qq0JSv6dCTcarDu6g2AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/JSON/projectManagementJson.js

const projectManagementJson = {
  id: 1,
  title: "Project Management",
  description: "Manage your projects with ease. Create and assign tasks, set due dates, and track progress with ease.",
  image: "/pm.png",
  keyPoints: [{
    id: 1,
    title: "Project",
    description: "On Kanban-style boards, keep track of tasks and optimize processes by moving from to-do to doing to done."
  }, {
    id: 2,
    title: "Task",
    description: "Specify requirements in tasks, collaborate with others, and link to resources."
  }, {
    id: 3,
    title: "Issue Tracking",
    description: "Track issues and bugs with ease. Assign issues to team members and keep track of progress."
  }]
};
;// CONCATENATED MODULE: ./pages/api/projectManagementapi.js

function handler(req, res) {
  res.status(200).json(projectManagementJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3319));
module.exports = __webpack_exports__;

})();