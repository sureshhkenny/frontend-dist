var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["coursespage"],{

/***/ "./src/playground/coursepage.jsx":
/*!***************************************!*\
  !*** ./src/playground/coursepage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _img_ninja3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/ninja3.png */ "./src/playground/img/ninja3.png");
/* harmony import */ var _img_ninja3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_ninja3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_wizard2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/wizard2.png */ "./src/playground/img/wizard2.png");
/* harmony import */ var _img_wizard2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_wizard2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Cubs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/Cubs.png */ "./src/playground/img/Cubs.png");
/* harmony import */ var _img_Cubs_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Cubs_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/LAYER-1_Background.png */ "./src/playground/img/LAYER-1_Background.png");
/* harmony import */ var _img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_9__);











function CoursePage(props) {
  var userToken = localStorage.getItem("UserToken");
  var projectHost = window.location.host.toString().split(":");
  var hostlink = projectHost[1] ? window.location.host : window.location.hostname;

  if (userToken) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
      integrity: "sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi",
      crossorigin: "anonymous"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "body {\n                       overflow: hidden;        \n                    }\n                   \n                    .container:hover{\n                        transition: 0.3s;\n                        opacity:1\n                    }\n                    .testimonial-card .card-up {\n                        height: 120px;\n                        overflow: hidden;\n                        border-top-left-radius: .25rem;\n                        border-top-right-radius: .25rem;\n                        }\n    \n                    .aqua-gradient {\n                    background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n                    }\n                    .aqua-gradient2 {\n                        background: linear-gradient(40deg, #d10ef5, #f6cb13) !important;\n                        }\n                        .aqua-gradient3 {\n                            background: linear-gradient(40deg, #f51648, #16f5c3) !important;\n                            }\n                    .testimonial-card .avatar {\n                        width: 120px;\n                        margin-top: -60px;\n                        overflow: hidden;\n                        border: 5px solid #fff;\n                        border-radius: 50%;\n                        }\n                        .img {\n                            // width: 211vh;\n                            height: 105vh;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                            background-size: cover;\n                          }\n                          .photocat {\n                            height: 280px;\n                            width: 290px;\n                          }\n                          .photoninja {\n                            height: 280px;\n                            width: 326px;\n                          }\n                          .photowiz {\n                            height: 280px;\n                            width: 326px;\n                          }\n                          * {\n                          box-sizing: border-box;\n                        }\n                        \n                        .zoom {\n                          transition: transform .2s;\n                          margin: 0 auto;\n                        }\n                        \n                        .zoom:hover {\n                          -ms-transform: scale(1.2); /* IE 9 */\n                          -webkit-transform: scale(1.2); /* Safari 3-8 */\n                          transform: scale(1.2); \n                          border: dotted 1px black;\n                          border-radius:20px;\n                          background-color:#8080803d;\n                        }\n                        @media only screen and (min-width: 1024px) {\n                            body {\n                              overflow: hidden;\n                              // font-family: var(--mdb-font-roboto);\n                              line-height: 1.6;\n                              color: #4f4f4f;\n                          }\n                            .img{\n                              display: flex;\n                              justify-content: center;\n                              // width: 132.6vh;\n                            //   height: 126vh;\n                            }\n                        }\n\n                        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: "url(".concat(_img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_9___default.a, ")")
      },
      className: "img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      xs: 2,
      md: 3,
      className: "g-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      class: "mx-auto my-5",
      style: {
        maxWidth: "23rem"
      } // onClick={() =>{
      //     window.location.href = `http://${hostlink}/tiles.html`
      //     localStorage.setItem("CourseId","")
      //     localStorage.setItem("CourseName","Path of the Cat")
      // }}

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: " mt-2 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "zoom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_Cubs_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      className: "photocat",
      alt: "woman avatar"
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      class: "mx-auto my-5",
      style: {
        maxWidth: "23rem"
      },
      onClick: function onClick() {
        window.location.href = "http://".concat(hostlink, "/tiles.html");
        localStorage.setItem("CourseId", "d2882ea2-810e-46f9-914a-32989ff30580");
        localStorage.setItem("CourseName", "Path of the Ninja");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: " mt-2 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "zoom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_ninja3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      className: "photoninja",
      alt: "woman avatar"
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      class: "mx-auto my-5",
      style: {
        maxWidth: "23rem"
      } // onClick={() =>{
      //     window.location.href = `http://${hostlink}/tiles.html`
      //     localStorage.setItem("CourseId","")
      //     localStorage.setItem("CourseName","Path of the Wizard")
      // }}

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: " mt-2 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "zoom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_wizard2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      className: "photowiz",
      alt: "woman avatar"
    })))))))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CoursePage);
var appTarget = document.createElement("div");
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CoursePage, null), appTarget);

/***/ }),

/***/ "./src/playground/img/Cubs.png":
/*!*************************************!*\
  !*** ./src/playground/img/Cubs.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/8134e4f05e49623ec84bd2fe457324fd.png";

/***/ }),

/***/ "./src/playground/img/ninja3.png":
/*!***************************************!*\
  !*** ./src/playground/img/ninja3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/53891dd2ef9ff097a2dd97bc9b5b6636.png";

/***/ }),

/***/ "./src/playground/img/wizard2.png":
/*!****************************************!*\
  !*** ./src/playground/img/wizard2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/088fca19104420317a43d76f3da05f55.png";

/***/ })

},[["./src/playground/coursepage.jsx","lib.min"]]]);
//# sourceMappingURL=coursespage.js.map