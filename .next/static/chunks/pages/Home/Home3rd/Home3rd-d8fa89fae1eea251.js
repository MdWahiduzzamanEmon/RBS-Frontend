(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3990],{2711:function(e){var t;t=function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),r=(o(a),n(6)),s=o(r),c=n(7),u=o(c),l=n(8),d=o(l),f=n(9),m=o(f),p=n(10),b=o(p),v=n(11),h=o(v),y=n(14),g=o(y),w=[],x=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(x=!0),x)return w=(0,h.default)(w,k),(0,b.default)(w,k.once),w},O=function(){w=(0,g.default)(),j()},N=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},_=function(e){k=i(k,e),w=(0,g.default)();var t,n=document.all&&!window.atob;return!0===(t=k.disable)||"mobile"===t&&m.default.mobile()||"phone"===t&&m.default.phone()||"tablet"===t&&m.default.tablet()||"function"==typeof t&&!0===t()||n?N():(k.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,function(){j(!0)}):document.addEventListener(k.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,u.default)(j,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(j,k.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,b.default)(w,k.once)},k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||(o=t)&&"object"==(void 0===o?"undefined":i(o))&&v.call(t)==s)return r;if(n(e)){var t,o,a="function"==typeof e.valueOf?e.valueOf():e;e=n(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var m=l.test(e);return m||d.test(e)?f(e.slice(2),m?2:8):u.test(e)?r:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",r=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,b=m||p||Function("return this")(),v=Object.prototype.toString,h=Math.max,y=Math.min,g=function(){return b.Date.now()};e.exports=function(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return n(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),function(e,t,i){function r(t){var n=d,o=f;return d=f=void 0,w=t,p=e.apply(o,n)}function s(e){var n=e-v,o=e-w;return void 0===v||n>=t||n<0||k&&o>=m}function c(){var e,n,o,i,a=g();return s(a)?u(a):void(b=setTimeout(c,(n=a-v,o=a-w,i=t-n,k?y(i,m-o):i)))}function u(e){return b=void 0,j&&d?r(e):(d=f=void 0,p)}function l(){var e,n=g(),o=s(n);if(d=arguments,f=this,v=n,o){if(void 0===b)return w=e=v,b=setTimeout(c,t),x?r(e):p;if(k)return b=setTimeout(c,t),r(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,f,m,p,b,v,w=0,x=!1,k=!1,j=!0;if("function"!=typeof e)throw TypeError(a);return t=o(t)||0,n(i)&&(x=!!i.leading,m=(k="maxWait"in i)?h(o(i.maxWait)||0,t):m,j="trailing"in i?!!i.trailing:j),l.cancel=function(){void 0!==b&&clearTimeout(b),w=0,d=v=f=b=void 0},l.flush=function(){return void 0===b?p:u(g())},l}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||(o=t)&&"object"==(void 0===o?"undefined":i(o))&&b.call(t)==r)return a;if(n(e)){var t,o,f="function"==typeof e.valueOf?e.valueOf():e;e=n(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var m=u.test(e);return m||l.test(e)?d(e.slice(2),m?2:8):c.test(e)?a:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=f||m||Function("return this")(),b=Object.prototype.toString,v=Math.max,h=Math.min,y=function(){return p.Date.now()};e.exports=function(e,t,i){function a(t){var n=l,o=d;return l=d=void 0,g=t,m=e.apply(o,n)}function r(e){var n=e-b,o=e-g;return void 0===b||n>=t||n<0||x&&o>=f}function s(){var e,n,o,i,a=y();return r(a)?c(a):void(p=setTimeout(s,(n=a-b,o=a-g,i=t-n,x?h(i,f-o):i)))}function c(e){return p=void 0,k&&l?a(e):(l=d=void 0,m)}function u(){var e,n=y(),o=r(n);if(l=arguments,d=this,b=n,o){if(void 0===p)return g=e=b,p=setTimeout(s,t),w?a(e):m;if(x)return p=setTimeout(s,t),a(b)}return void 0===p&&(p=setTimeout(s,t)),m}var l,d,f,m,p,b,g=0,w=!1,x=!1,k=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=o(t)||0,n(i)&&(w=!!i.leading,f=(x="maxWait"in i)?v(o(i.maxWait)||0,t):f,k="trailing"in i?!!i.trailing:k),u.cancel=function(){void 0!==p&&clearTimeout(p),g=0,l=b=d=p=void 0},u.flush=function(){return void 0===p?m:c(y())},u}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1)if((o=t[n]).dataset&&o.dataset.aos||o.children&&e(o.children))return!0;return!1}(t.concat(n)))return i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var a=window.document,r=new(n())(o);i=t,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===o||"false"!==o&&(n||"true"===o)||e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=(o=n(12))&&o.__esModule?o:{default:o},a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=(o=n(13))&&o.__esModule?o:{default:o},a=function(e,t){var n=0,o=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(o=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])},e.exports=t()},9776:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(5675),i=n.n(o),a=n(9603),r=n(9417),s=n(7294),c=n(2711),u=n.n(c),l=n(5893),d=function(e){var t,n,o=e.home3rdData;return s.useEffect(function(){u().init({duration:1500,easing:"ease-in-out-quart"})},[]),(0,l.jsx)("div",{style:{padding:"130px 0"},children:(0,l.jsxs)("div",{className:"d-flex flex-column-reverse flex-lg-row align-items-center container-lg gap-5",children:[(0,l.jsx)("div",{className:" w-100 w-lg-50","data-aos":"zoom-in-down",children:null==o?void 0:null===(t=o.items)||void 0===t?void 0:t.map(function(e,t){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:" fw-bold mb-3",children:null==e?void 0:e.title}),(0,l.jsx)("p",{className:"fs-6 mb-4",style:{textAlign:"justify"},children:null==e?void 0:e.description}),(0,l.jsxs)("h3",{className:"fs-5 fw-bold d-flex align-items-center",children:[(0,l.jsx)("span",{className:"me-2",children:(0,l.jsx)(a.G,{icon:r.f8k,color:"#00D2D2"})}),null==e?void 0:e.subTitle1]}),(0,l.jsx)("p",{className:"fs-6",style:{textAlign:"justify"},children:null==e?void 0:e.subTitle1Description}),(0,l.jsxs)("h3",{className:"fs-5 fw-bold d-flex align-items-center",children:[(0,l.jsx)("span",{className:"me-2",children:(0,l.jsx)(a.G,{icon:r.f8k,color:"#FF9900"})}),null==e?void 0:e.subTitle2]}),(0,l.jsx)("p",{className:"fs-6",style:{textAlign:"justify"},children:null==e?void 0:e.subTitle2Description}),(0,l.jsxs)("h3",{className:"fs-5 fw-bold d-flex align-items-center",children:[(0,l.jsx)("span",{className:"me-2",children:(0,l.jsx)(a.G,{icon:r.f8k,color:"#FF7575"})}),null==e?void 0:e.subTitle3]}),(0,l.jsx)("p",{className:"fs-6 ",style:{textAlign:"justify"},children:null==e?void 0:e.subTitle3Description})]},null==e?void 0:e.id)})}),(0,l.jsx)("div",{className:" w-100 w-lg-50","data-aos":"zoom-in-down",children:null==o?void 0:null===(n=o.items)||void 0===n?void 0:n.map(function(e,t){return(0,l.jsx)(i(),{src:e.image,alt:" ",objectFit:"contain",width:500,height:450,layout:"responsive",className:"rounded-5 p-2"},null==e?void 0:e.id)})})]})})}},2727:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Home/Home3rd/Home3rd",function(){return n(9776)}])}},function(e){e.O(0,[4976,9603,9774,2888,179],function(){return e(e.s=2727)}),_N_E=e.O()}]);