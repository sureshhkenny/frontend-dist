var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["login"],{

/***/ "./src/playground/img/logo.png":
/*!*************************************!*\
  !*** ./src/playground/img/logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e7dc8e4a70988dcf7d0258076334ce9f.png";

/***/ }),

/***/ "./src/playground/login.jsx":
/*!**********************************!*\
  !*** ./src/playground/login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseurl */ "./src/baseurl.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/logo.png */ "./src/playground/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/LAYER-1_Background.png */ "./src/playground/img/LAYER-1_Background.png");
/* harmony import */ var _img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify_dist_inject_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/inject-style */ "./node_modules/react-toastify/dist/inject-style.js");
/* harmony import */ var react_toastify_dist_inject_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_inject_style__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











if (typeof window !== "undefined") {
  Object(react_toastify_dist_inject_style__WEBPACK_IMPORTED_MODULE_8__["injectStyle"])();
}

function LoginComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.matchMedia("(max-width: 1024px)").matches),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatches = _useState2[1];

  var projectHost = window.location.host.toString().split(":");
  var hostlink = projectHost[1] ? window.location.host : window.location.hostname;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      status = _useState8[0],
      setStatus = _useState8[1];

  var demo;

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function setIncorrect() {
    setStatus(false);
  }

  function setCorrect() {
    setStatus(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    _baseurl__WEBPACK_IMPORTED_MODULE_2__["default"].post("/signin/", {
      username: username,
      password: password
    }).then(function (response) {
      demo = response.data.success;

      if (demo == true) {
        localStorage.setItem("UserId", response.data.user_id);
        localStorage.setItem("UserRole", response.data.role);
        localStorage.setItem("UserToken", response.data.token);
        window.location.href = "http://".concat(hostlink, "/courses.html");
      } else {
        document.getElementById("error").innerHTML = "Invalid Credentials";
      }
    }).catch(function (error) {
      console.log(error);
      setIncorrect();
    });
  }

  var myStyle = {
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');\n                * {\n                  margin: 0;\n                  box-sizing: border-box;\n                  font-family: --e-global-typography-text-font-family: \"Montserrat\";\n                }\n                :root {\n                  --colour-one: #ffd1b7;\n                  --colour-two: #fee4d4;\n                  --colour-three: #fdb493;\n                  --colour-four: #fb966f;\n                  --colour-five: #f45f34;\n                  --colour-six: #302825;\n                  --colour-seven: #a69f9c;\n                  --colour-eight: #707e8d;\n                }\n                \n                body {\n                  overflow: hidden;\n                  height: 100vh;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  // background-image: image-url('bg.jpg');\n                  // background: url(bg.jpg');\n                  // background-image: url(\"./img/bg.jpg\");\n                  background-size: cover;\n                }\n                .img {\n                  width:1280px;\n                  height: 100vh;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  background-size: cover;\n                }\n                .login_form {\n                  position: relative;\n                  background: #fff;\n                  height: 469px;\n                  width: 990px;\n                  overflow: hidden;\n                }\n                .details {\n                  position: relative;\n                  background: white;\n                  height: 400px;\n                  width: 350px;\n                }\n                .welcome {\n                  position: absolute;\n                  color: var(--colour-six);\n                  left: 23%;\n                  top: 23%;\n                  font-size: 45px;\n                  font-weight: 600;\n                }\n                .wrap:nth-child(1) {\n                  position: absolute;\n                  top: 35%;\n                  left: 20%;\n                  margin: 12px;\n                  margin-top: 57px;\n                }\n                .wrap:nth-child(2) {\n                  position: absolute;\n                  top: 55%;\n                  left: 20%;\n                  font-size: 15px;\n                  margin: 12px;\n                  margin-top: 55px;\n                }\n                .wrap:nth-child(3) {\n                  position: absolute;\n                  top: 78%;\n                  left: 22%;\n                  font-size: 15px;\n                  margin: 12px;\n                  margin-top: 57px;\n                }\n                .input {\n                  border: 1px solid #8080807d;\n                  margin: 5px;\n                  border-radius: 5px;\n                  background: none;\n                  width :120%;\n                 /* box-shadow: inset 10px 10px 6px -5px rgba(255,209,183,1);*/\n                }\n                .inputpwd {\n                  border: 1px solid #8080807d;\n                  margin: 5px;\n                  border-radius: 5px;\n                  background: none;\n                  width :150%;\n                 /* box-shadow: inset 10px 10px 6px -5px rgba(255,209,183,1);*/\n                }\n                label {\n                  color: var(--colour-eight);\n                  display: block;\n                  font-size: 13px;\n                }\n                .button {\n                  background: #5bcfff;\n                  position: absolute;\n                  width: 80px;\n                  top: 77%;\n                  right: 10%;\n                  padding: 5px;\n                  font-color: var(--colour-one);\n                  border-radius: 10px;\n                  border: none;\n                }\n                .button .sign {\n                  color: #fff;\n                  font-size: 15px;\n                }\n                .fox {\n                  position: absolute;\n                  top: 25%;\n                  left: 55%;\n                  height: 18%;\n                }\n                .back {\n                  position: absolute;\n                  top: 43%;\n                  left: 56%;\n                  font-size: 13px;\n                  font-weight: 400;\n                }\n                .errormsg {\n                  position: absolute;\n                  top: 36%;\n                  left: 56%;\n                  font-size: 20px;\n                  font-color:\"red\";\n                }\n                .log {\n                  position: absolute;\n                  top: 49%;\n                  left: 56%;\n                  font-size: 13px; \n                  font-weight: 400;\n                }\n                .nike {\n                  position: absolute;\n                  top: 66%;\n                  left: 56%;\n                  font-size: 13px; \n                  font-weight: 400;\n                }\n                .acc {\n                  position: absolute;\n                  top: 61%;\n                  left: 56%;\n                  font-size: 13px;\n                  font-weight: 400;\n                }\n                .customer {\n                  position: absolute;\n                  top: 72%;\n                  left: 56%;\n                  font-color: var(--colour-five);\n                  background: var(--colour-four);\n                  border-radius: 5px;\n                  border: none;\n                }\n                .res {\n                  position: absolute;\n                  top: 72%;\n                  left: 76%;\n                  font-color: var(--colour-five);\n                  background: var(--colour-four);\n                  border-radius: 5px;\n                  border: none;\n                }\n                h3 {\n                  font-size: 14px;\n                  color: var(--colour-five);\n                  padding: 5px;\n                }\n                .image{\n                  height: 40px; \n                  margin-left: 83px;\n                  margin-top: 30px;\n                }\n                .btn-dark {\n                  background: #5bcfff;\n                  position: absolute;\n                  width: 30%;\n                  top: 90%;\n                  right: 10%;\n                  padding: 5px;\n                  font-color: var(--colour-one);\n                  border-radius: 10px;\n                  border: none;\n                 }\n                 a {\n                  color: #3b71ca;\n                  text-decoration: underline;\n                }\n                .tipblock1{\n                  margin-top:132px;\n                  border-right :2px solid black;\n                  height :50px;\n                  margin-right : -65px;\n                  border-color: #8080807d;\n                }\n                .tipblock2{\n                  margin-top:32px;\n                  border-right :2px solid black;\n                  height :50px;\n                  margin-right : -65px;\n                  border-color: #8080807d;\n                }\n                @media only screen and (min-width: 1024px) {\n                  body {\n                    overflow: hidden;\n                    // font-family: var(--mdb-font-roboto);\n                    line-height: 1.6;\n                    color: #4f4f4f;\n                }\n                  .img{\n                    display: flex;\n                    justify-content: center;\n                    height: 126vh;\n                  }\n                  .login_form{\n                    width: 790px;\n                  }\n                  .welcome{\n                    color:'red';\n                  }\n                 \n                }\n                "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(_img_LAYER_1_Background_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    className: "img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login_form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome"
  }, "Class Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tipblock1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      color: "black",
      fontWeight: "bold"
    }
  }, "Please enter your teachers credentials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "input",
    id: "username",
    placeholder: "Username",
    autoFocus: true,
    onChange: function onChange(e) {
      setUsername(e.target.value);
      setCorrect();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      color: "black",
      fontWeight: "bold"
    }
  }, "Please enter your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "password",
    placeholder: "Password",
    className: "inputpwd",
    "data-type": "password",
    onChange: function onChange(e) {
      setPassword(e.target.value);
      setCorrect();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Help with Login?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "button",
    class: " btn btn-dark btn-rounded",
    disabled: !validateForm()
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tipblock2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details-two"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "error",
    className: "errormsg",
    style: {
      color: "red"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "back"
  }, "Tip :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "log"
  }, "Press the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: "#5bcfff"
    }
  }, "Tab"), " ", "key to enter your Pasword", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "acc"
  }, "Tip :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "nike"
  }, "Press the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: " #5bcfff"
    }
  }, "Login"), " ", "button to Login", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))));
}
var appTarget = document.createElement("div");
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginComponent, null), appTarget);

/***/ })

},[["./src/playground/login.jsx","lib.min"]]]);
//# sourceMappingURL=login.js.map