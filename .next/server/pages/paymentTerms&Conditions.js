(() => {
var exports = {};
exports.id = 1369;
exports.ids = [1369,9863,8197,3315,5563,8513];
exports.modules = {

/***/ 3344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ paymentTerms_Conditions),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "daisyui/src/colors/colorNames"
const colorNames_namespaceObject = require("daisyui/src/colors/colorNames");
;// CONCATENATED MODULE: ./public/JSON/paymentTerms/paymentTerms.js

const paymentTerms = {
  title: "Payment Terms & Conditions",
  alert1: "PLEASE READ THE ENTIRE AGREEMENT. THIS IS A LEGAL AGREEMENT BETWEEN YOU AND VITLOUS, YOU ARE AGREEING THAT YOU HAVE READ THIS AGREEMENT AND THAT YOU AGREE TO BE LEGALLY RESPONSIBLE FOR EACH AND EVERY TERM AND CONDITION.",
  alert2: "These Terms and Conditions (“Terms”, “Terms and Conditions”) govern your relationship with https://vitlous.com website (the “Service”) operated by Vitlous (“us”, “we”, or “our”).",
  alert3: "Please read these Terms and Conditions carefully before using the Service.",
  text1: "Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.",
  text2: "Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.",
  text3: "If you have a Vitlous Account, we may display your Profile name, Profile photo, and actions you take on Vitlous or on third-party applications connected to your Vitlous Account in our Services, including displaying in ads and other commercial contexts.",
  text4: "By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
  subscription: {
    title: "Subscription",
    text1: "Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.",
    text2: "At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Vitlous cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Vitlous customer support team.",
    text3: "A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide Vitlous with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Vitlous to charge all Subscription fees incurred through your account to any such payment instruments.",
    text4: "Should automatic billing fail to occur for any reason, Vitlous will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice."
  },
  freeTrial: {
    title: "Free Trial",
    text1: "Vitlous may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (“Free Trial”).",
    text2: "You may be required to enter your billing information in order to sign up for the Free Trial.",
    text3: "If you do enter your billing information when signing up for the Free Trial, you will not be charged by Vitlous until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.",
    text4: "At any time and without notice, Vitlous reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer."
  },
  fees: {
    title: "Fees & Payment Terms",
    text1: "Vitlous, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.",
    text2: "Vitlous will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.",
    text3: "Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.",
    text4: "Payment obligations are non-cancelable and fees, Taxes, and Communications Surcharges (collectively, “Fees”) once paid, are non-refundable, non-cancelable and non-creditable. You agree that we may bill your credit card or other payment methods for renewals, additional users, overages to set limits or scopes of use, expenses, and unpaid fees, as applicable."
  },
  accounts: {
    title: "Accounts",
    text1: "When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
    text2: "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.",
    text3: "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
    text4: "You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene."
  },
  copyrightPolicy: {
    title: "Copyright Policy",
    text1: "We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.",
    text2: "If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of “Copyright Infringement” of customer.service@vitlous.com and include in your notice a detailed description of the alleged Infringement.",
    text3: "You may be held accountable for damages (including costs and attorneys’ fees) for misrepresenting that any Content is infringing your copyright."
  },
  intellectualProperty: {
    title: "Intellectual Property",
    text1: "The Service and its original content, features and functionality are and will remain the exclusive property of Vitlous and its licensors. The Service is protected by copyright, trademark, and other laws of both the Portugal and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Vitlous."
  },
  linksToOtherWebSites: {
    title: "Links To Other Web Sites",
    text1: "Our Service may contain links to third-party web sites or services that are not owned or controlled by Vitlous.",
    text2: "Vitlous has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Vitlous shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.",
    text3: "We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit."
  },
  termination: {
    title: "Termination",
    text1: "The term of this Agreement will commence on the Effective Date and will remain in effect until terminated under all Subscription Terms.",
    secondaryTitle1: "Termination for Convenience",
    text2: "You may terminate this Agreement for any reason by providing us notice and closing your account.",
    secondaryTitle2: "Termination for Cause",
    tertiaryTitle1: "By Either Party: ",
    tertiaryTitleText1: "Either party may terminate these Terms if the other party fails to cure any material breach of these Terms within thirty (30) days after notice; ceases operation without a successor; or seeks protection under any bankruptcy, receivership, trust deed, creditors’ arrangement, composition or comparable proceeding, or if any such proceeding is instituted against that party (and not dismissed within sixty (60) days thereafter).",
    tertiaryTitle2: "By Us: ",
    tertiaryTitleText2: "We may also terminate this Agreement immediately upon notice to you for cause if our relationship with a third-party partner who provides software or other technology we use to provide the Service Offerings expires, terminates or requires us to change the way we provide the software or other technology as part of the Services, or in order to comply with the law or requests of governmental entities.",
    tertiaryTitle3: "Effect of Termination:",
    tertiaryTitleText3: "You remain responsible for all fees and charges you have incurred through the Termination Date and are responsible for any fees and charges you incur during the post-termination period; For any use of the Services after the Termination Date, the terms of this Agreement will apply and you will pay the applicable fees."
  },
  limitationOfLiability: {
    title: "Limitation Of Liability",
    text1: "In no event shall Vitlous, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose."
  },
  disclaimer: {
    title: "Disclaimer",
    text1: "Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.",
    text2: "Vitlous its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."
  },
  governingLaw: {
    title: "Governing Law",
    text1: "These Terms shall be governed and construed in accordance with the laws of Portugal, without regard to its conflict of law provisions.",
    text2: "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service."
  },
  changes: {
    title: "Changes",
    text1: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    text2: "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service."
  },
  contactUs: {
    title: "Contact Us",
    text1: "If you have any questions about these Terms, please ",
    highLightText: "contact us."
  }
};
// EXTERNAL MODULE: ./pages/paymentTerms&Conditions/PaymentTerms.module.css
var PaymentTerms_module = __webpack_require__(3708);
var PaymentTerms_module_default = /*#__PURE__*/__webpack_require__.n(PaymentTerms_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/paymentTerms&Conditions/index.js






const getStaticProps = async () => {
  return {
    props: {
      paymentTermsData: paymentTerms
    }
  };
};

const PaymentTerms = ({
  paymentTermsData
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(PaymentTerms_module_default()).paymentTermsWrapper} container-xl`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: `${(PaymentTerms_module_default()).paymentTermsTitle}`,
          children: paymentTermsData.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: `${(PaymentTerms_module_default()).paymentTermsAlert1}`,
          children: paymentTermsData.alert1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.alert2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.alert3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.text3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.text4
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.subscription.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.subscription.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.subscription.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.subscription.text3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.subscription.text4
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.freeTrial.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.freeTrial.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.freeTrial.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.freeTrial.text3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.freeTrial.text4
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.fees.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.fees.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.fees.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.fees.text3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.fees.text4
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.accounts.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.accounts.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.accounts.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.accounts.text3
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.accounts.text4
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.copyrightPolicy.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.copyrightPolicy.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.copyrightPolicy.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.copyrightPolicy.text3
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.intellectualProperty.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.intellectualProperty.text1
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.linksToOtherWebSites.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.linksToOtherWebSites.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.linksToOtherWebSites.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.linksToOtherWebSites.text3
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.termination.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.termination.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: paymentTermsData.termination.secondaryTitle1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.termination.text2
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: paymentTermsData.termination.secondaryTitle2
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `${(PaymentTerms_module_default()).tertiaryTitle}`,
            children: paymentTermsData.termination.tertiaryTitle1
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: paymentTermsData.termination.tertiaryTitleText1
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `${(PaymentTerms_module_default()).tertiaryTitle}`,
            children: paymentTermsData.termination.tertiaryTitle2
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: paymentTermsData.termination.tertiaryTitleText2
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `${(PaymentTerms_module_default()).tertiaryTitle}`,
            children: paymentTermsData.termination.tertiaryTitle3
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: paymentTermsData.termination.tertiaryTitleText3
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.limitationOfLiability.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.limitationOfLiability.text1
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.disclaimer.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.disclaimer.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.disclaimer.text2
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.governingLaw.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.governingLaw.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.governingLaw.text2
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.changes.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.changes.text1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: paymentTermsData.changes.text2
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: paymentTermsData.contactUs.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [paymentTermsData.contactUs.text1, /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/contactUs",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `${(PaymentTerms_module_default()).highLightedLink}`,
              children: paymentTermsData.contactUs.highLightText
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const paymentTerms_Conditions = (PaymentTerms);

/***/ }),

/***/ 3708:
/***/ ((module) => {

// Exports
module.exports = {
	"paymentTermsWrapper": "PaymentTerms_paymentTermsWrapper__a2Nkf",
	"paymentTermsTitle": "PaymentTerms_paymentTermsTitle__6Ev2Q",
	"paymentTermsAlert1": "PaymentTerms_paymentTermsAlert1__gxK7O",
	"tertiaryTitle": "PaymentTerms_tertiaryTitle__bh41H",
	"highLightedLink": "PaymentTerms_highLightedLink__uFGaq"
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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,1563,2383,1664], () => (__webpack_exec__(3344)));
module.exports = __webpack_exports__;

})();