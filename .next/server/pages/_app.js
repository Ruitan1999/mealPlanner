(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,266];
exports.modules = {

/***/ 9810:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP"
};


/***/ }),

/***/ 8249:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "NavBar_header__M5PKn",
	"list": "NavBar_list__jjA0M",
	"active": "NavBar_active__fH8GQ",
	"mainLogo": "NavBar_mainLogo__uUeDW"
};


/***/ }),

/***/ 7236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(9810);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./Components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "This website is designed by Ruitan Huang Experience Design"
        })
    });
};
/* harmony default export */ const Components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(2612);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/NavBar.module.css
var NavBar_module = __webpack_require__(8249);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(6595);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.661f907d.png","height":490,"width":516,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXESEhIAAAAAAAACAgIICAgAAAAAAAAVFRUAAAACAgITExNmZmYAAACPj48AAAAAAAAAAAD///8nJydpaWmioqJ3d3d5Jvj6AAAAF3RSTlMANtmlVCRr/g7hQntC6rq1w4ovuLGNeNAs1AsAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/SURBVAiZDcXJAcAgCADBFUHwirn7LzWZz0CSPUuD5tnscEX6ORi9MiNdz0alRru3F6GWMAudqJcI9QLqa/1/RZcB9BmPUIcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./Components/NavBar.tsx







const NavBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: (NavBar_module_default()).header,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NavBar_module_default()).mainLogo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Meal Plan Helper"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (NavBar_module_default()).list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                href: "/",
                                label: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                href: "/getMealPlans",
                                label: "Meal Planner"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const NavItem = (props)=>{
    const router = (0,router_.useRouter)();
    const style = router.pathname === props.href ? (NavBar_module_default()).active : (NavBar_module_default()).inactive;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            className: style,
            href: props.href,
            children: props.label
        })
    });
};
/* harmony default export */ const Components_NavBar = (NavBar);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(4472);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 4472:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [612,151,595], () => (__webpack_exec__(7236)));
module.exports = __webpack_exports__;

})();