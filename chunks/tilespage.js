var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["tilespage"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/titleStyle.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/titleStyle.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n::-webkit-scrollbar {\n    width: 10px;\n    padding-left: 5px;\n    display: none;\n  }\n\n::-webkit-scrollbar-track{\n    background-color: aqua;\n}\n\n::-webkit-scrollbar-thumb {\n    background: whitesmoke; \n    border-radius: 10px;\n  }\n\n::-webkit-scrollbar-thumb:hover {\n    background: #fff; \n  }\n\nbody {\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-size: 14px;\n   \n    color: #333;\n    \n     overflow-y: scroll;\n    \n}\n       \n ", ""]);

// exports


/***/ }),

/***/ "./src/playground/img/Lock.svg":
/*!*************************************!*\
  !*** ./src/playground/img/Lock.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/67825def3e8626dc5557bdbf0fecbed5.svg";

/***/ }),

/***/ "./src/playground/img/Unlock.svg":
/*!***************************************!*\
  !*** ./src/playground/img/Unlock.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/8e06b478fc561c2e2eba0fe654d832e7.svg";

/***/ }),

/***/ "./src/playground/img/ninja1.jpg":
/*!***************************************!*\
  !*** ./src/playground/img/ninja1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/43f32f883678e8989a5ca9689dc2c048.jpg";

/***/ }),

/***/ "./src/playground/tilespage.jsx":
/*!**************************************!*\
  !*** ./src/playground/tilespage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tilespage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseurl */ "./src/baseurl.js");
/* harmony import */ var _img_ninja1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ninja1.jpg */ "./src/playground/img/ninja1.jpg");
/* harmony import */ var _img_ninja1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ninja1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_Lock_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Lock.svg */ "./src/playground/img/Lock.svg");
/* harmony import */ var _img_Lock_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Lock_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Unlock_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Unlock.svg */ "./src/playground/img/Unlock.svg");
/* harmony import */ var _img_Unlock_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Unlock_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _titleStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./titleStyle.css */ "./src/playground/titleStyle.css");
/* harmony import */ var _titleStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_titleStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/cjs/index.js");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_slider__WEBPACK_IMPORTED_MODULE_11__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function Tilespage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      percent = _useState4[0],
      setPercent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      barCount = _useState6[0],
      setBarCount = _useState6[1];

  var loc1 = window.location.href.toString();
  var loc = loc1.replace("tiles.html", "");
  var projectHost = window.location.host.toString().split(":");
  var hostlink = projectHost[1] ? window.location.host : window.location.hostname;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      gameList = _useState8[0],
      setGameList = _useState8[1];

  var userId = localStorage.getItem("UserId");
  var userRole = localStorage.getItem("UserRole");
  var userToken = localStorage.getItem("UserToken");
  var CouserId = localStorage.getItem("CourseId");
  var CouserName = localStorage.getItem("CourseName");
  var beltlist = ["White", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Red", "Black"];
  var URL;

  if (userRole == "student") {
    URL = "/game";
  }

  if (userRole == "admin") {
    URL = "/master/game";
  }

  var scrollProgress = function scrollProgress() {
    var scrollPx = document.documentElement.scrollTop;
    var winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = "".concat(scrollPx / winHeightPx * 100, "%");
    setValue(scrolled);
  };

  var stagesnumber = gameList.map(function (item) {
    return item.stage_number;
  });
  var stagelen = stagesnumber.filter(function (item, index) {
    return stagesnumber.indexOf(item) === index;
  });

  var getTilesList = function getTilesList() {
    _baseurl__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(URL, "/").concat(CouserId), {
      headers: {
        Authorization: "".concat(userToken)
      }
    }).then(function (res) {
      return setGameList(res.data.games);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollProgress);
    getTilesList();
  }, [gameList]);

  function createProject(item) {
    if (item && userRole == "student") {
      _baseurl__WEBPACK_IMPORTED_MODULE_2__["default"].post("/u_game/".concat(item.id), {
        user_id: userId,
        json: item.json,
        name: item.name
      }, {
        headers: {
          Authorization: "".concat(userToken)
        }
      }).then(function (response) {
        if (response.data.success == true) {
          var id = response.data.update.id;
          window.location.href = "http://".concat(hostlink, "/editor.html?project_file=").concat(id);
        }
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    } else {
      window.location.href = "http://".concat(hostlink, "/editor.html?project_file=").concat(item.id);
    }
  }

  var list = [];

  for (var i = 0; i < beltlist.length; i++) {
    var _ref;

    list.push(
    /*#__PURE__*/
    // gameList.filter(s => s.stage_number.includes(`0${i}`)).map((item) => (
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      id: "tile".concat(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: (_ref = {
        textAlign: "left",
        fontWeight: 700,
        fontSize: "42px",
        paddingLeft: "28px"
      }, _defineProperty(_ref, "fontWeight", "bold"), _defineProperty(_ref, "fontFamily", "Montserrat"), _ref)
    }, beltlist[i] + ' belt'), gameList.map(function (item) {
      // const lockimage = item.status ? unlock : lock
      if (beltlist[i] == item.belt.name) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-xs-2 col-sm-2 col-md-2 col-lg-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box",
          onClick: function onClick() {
            if (item.status == true) {
              createProject(item);
            } else {
              showAlert();
            }
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _img_Lock_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
          className: "clearance",
          style: {
            display: item.status ? "none" : "unset"
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "stageNumber"
        }, "".concat(item.stage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "https://pluspng.com/img-png/png-video-game-open-1000.png",
          style: {
            height: "57px",
            marginTop: "0px"
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "stageName"
        }, "".concat(item.name, " "))));
      }
    })));
  }
  /* jquery */


  var jcode = function jcode(id) {
    jquery__WEBPACK_IMPORTED_MODULE_9___default()("html,body").animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_9___default()("#tile".concat(id)).offset().top
    }, "slow");
  };

  var up = function up() {
    var value = Math.max(percent - 1, 0);
    setPercent(value);
  };

  var down = function down() {
    var value = Math.min(percent + 1, stagelen.length);
    setPercent(value);
  };

  var changeCallback = function changeCallback(e) {
    setBarCount(e);

    if (barCount != "") {
      jcode(barCount);
    }
  };

  var myComponent = {
    width: "100px",
    height: "320px",
    paddingTop: "20px",
    overflowY: "scroll",
    marginTop: "144px",
    position: "fixed"
  };

  var demoChange = function demoChange() {
    var slider = document.getElementById("range");
    slider.addEventListener("wheel", function (e) {
      if (e.deltaY < 0) {
        slider.valueAsNumber += 3;
      } else {
        slider.value -= 3;
      }

      e.preventDefault();
      e.stopPropagation();
    });
  };

  var showAlert = function showAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
      title: "Stage Locked",
      text: "Complete Previous lesson to unlock",
      // icon: "success",
      confirmButtonText: "OK"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
    strength: 500,
    className: "scroll",
    bgImage: _img_ninja1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bgImageAlt: "images",
    bgImageStyle: {
      width: "100%",
      height: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-10 col-sm-10 col-md-10 col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,300,700,600|Ubuntu:400,300,500,700",
    rel: "stylesheet",
    type: "text/css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "  .BsFillArrowUpCircleFill.hover{\n            {\n              background-color:'lightgrey'\n              \n            }\n        }\n              .scrollbar {\n                margin-left: 30px;\n                float: left;\n                height: 300px;\n                width: 65px;\n                background: #fff;\n                overflow-y: scroll;\n                margin-bottom: 25px;\n              }\n              .force-overflow {\n                min-height: 450px;\n              }\n              \n              .scrollbar-info::-webkit-scrollbar {\n                width: 12px;\n                background-color: #F5F5F5;\n              }\n              \n              .scrollbar-info::-webkit-scrollbar-thumb {\n                border-radius: 10px;\n                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n                background-color: #4285F4;\n              }\n              \n              .scrollbar-info {\n                scrollbar-color: #4285F4 #F5F5F5;\n              }\n              body {\n                font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n                font-size: 14px;\n               \n                color: #333;\n                \n                // overflow-y: hidden;\n                \n            }\n                 \n                           \n                #cards_landscape_wrap-2{\n                  text-align: center;\n                  \n                }\n                #cards_landscape_wrap-2 .container{\n                  padding-top: 15px; \n                  padding-bottom: 100px;\n                }\n                #cards_landscape_wrap-2 a{\n                  text-decoration: none;\n                  outline: none;\n                }\n                #cards_landscape_wrap-2 .card-flyer {\n                  border-radius: 5px;\n                }\n                #cards_landscape_wrap-2 .card-flyer .image-box{\n                  background:  rgba(255,255,255,.2);\n                  overflow: hidden;\n                  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.50);\n                  border-radius: 5px;\n                }\n                #cards_landscape_wrap-2 .card-flyer .image-box img{\n                  -webkit-transition:all .9s ease; \n                  -moz-transition:all .9s ease; \n                  -o-transition:all .9s ease;\n                  -ms-transition:all .9s ease; \n                  width: 100%;\n                  height: 200px;\n                }\n                #cards_landscape_wrap-2 .card-flyer:hover .image-box img{\n                  opacity: 0.7;\n                  -webkit-transform:scale(1.15);\n                  -moz-transform:scale(1.15);\n                  -ms-transform:scale(1.15);\n                  -o-transform:scale(1.15);\n                  transform:scale(1.15);\n                }\n                #cards_landscape_wrap-2 .card-flyer .text-box{\n                  text-align: center;\n                  width:100%;\n                  height:40vh;\n                }\n                #cards_landscape_wrap-2 .card-flyer .text-box .text-container{\n                  padding: 8px 18px;\n                }\n                #cards_landscape_wrap-2 .card-flyer{\n                  background: rgba(255,255,255,.2);\n                  margin-top: 50px;\n                  -webkit-transition: all 0.2s ease-in;\n                  -moz-transition: all 0.2s ease-in;\n                  -ms-transition: all 0.2s ease-in;\n                  -o-transition: all 0.2s ease-in;\n                  transition: all 0.2s ease-in;\n                  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);\n                }\n                #cards_landscape_wrap-2 .card-flyer:hover{\n                  background: rgba(255,255,255,.2);\n                  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);\n                  -webkit-transition: all 0.2s ease-in;\n                  -moz-transition: all 0.2s ease-in;\n                  -ms-transition: all 0.2s ease-in;\n                  -o-transition: all 0.2s ease-in;\n                  transition: all 0.2s ease-in;\n                  margin-top: 50px;\n                }\n                #cards_landscape_wrap-2 .card-flyer .text-box p{\n                  margin-top: 10px;\n                  margin-bottom: 0px;\n                  padding-bottom: 0px; \n                  font-size: 14px;\n                  letter-spacing: 1px;\n                  color: #000000;\n                }\n                #cards_landscape_wrap-2 .card-flyer .text-box h6{\n                  margin-top: 0px;\n                  margin-bottom: 4px; \n                  font-size: 18px;\n                  font-weight: bold;\n                  text-transform: uppercase;\n                  font-family: 'Roboto Black', sans-serif;\n                  letter-spacing: 1px;\n                  color: #00acc1;\n                }\n                #sticky{\n                  position:'-webkit-sticky',\n                  position:'sticky'\n                }\n                  $title-font: 500 18px/1.2 'Ubuntu', sans-serif;\n                  $cool-grey: #555;\n                  $box-shadow-bottom-heavy: 0 15px 20px rgba(0, 0, 0, 0.1);\n                  $transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n                 \n\n                  .img {\n                    margin: 0 auto;\n                    padding: 0;\n                  }\n\n                  hr {\n                    margin-top: 20px;\n                    margin-bottom: 20px;\n                    border: 0;\n                    border-top: 1px solid #b5b5b5;\n                }\n\n                  .clearance,\n                  .lastfew {\n                    position: absolute;\n                    top: 6px;\n                    left: 123px;\n                    width: 35px;\n                    height: 35px;\n                  }\n\n                  .clearance {\n                   \n                        background-repeat: no-repeat;\n                  }\n\n                  .lastfew {\n                    background: url(https://www.dropbox.com/s/11uedn6mffchd9z/lastfew-crcl.png?raw=1);\n                  }\n\n                  .box h3 {\n                    font: $title-font;\n                    color: $cool-grey;\n                    padding: 1px 0 0 0;\n                  }\n\n                  \n                  .stageName{\n                    font-family: 'Open Sans';\n                    color: #555;\n                    margin: 3px 8px 0 8px;\n                    font-weight: 800;\n                    font-size: 16px;\n                    margin-top: -16px;\n                    text-overflow: ellipsis;\n                    white-space: nowrap;\n                    overflow: hidden;\n                  }\n                  .stageNumber{\n                    font-family: 'Open Sans';\n                    Font-weight: 800;\n                    color: #555;\n                    padding: 1px 0 0 0;\n                    margin-top: -25px;\n                   \n                    font-size: 2.3em;\n                    margin-right: 66px;\n                  }\n\n                  .box p span {\n                    color: #45A8D6;\n                  }\n\n                  ul.colourswatches {\n                    height: 20px;\n                    margin: 0;\n                    padding: 20px 0 0 0;\n                    list-style: none;\n                    text-align: center;\n                    line-height: 20px;\n                  }\n\n                  ul.colourswatches li {\n                    color: transparent;\n                    text-shadow: none;\n                    display: inline-block;\n                    overflow: hidden;\n                    width: 20px;\n                    height: 20px;\n                    margin: 0 3px;\n                    vertical-align: top;\n                  }\n\n                 \n\n                  .box {\n                    position: relative;\n                    display: inline-block;\n                    width: 160px;\n                    height: 160px;\n                    margin-left: -24px;\n                    margin: 10px 15px;\n                    padding: 20px 0;\n                    text-align: center;\n                    background-color: #eaeaea85;\n                    border-radius: 5px;\n                    -webkit-transition: $transition;\n                    transition: $transition;\n                    cursor: pointer;\n                    border: solid 1px #b3a2a2;\n                  }\n\n                  .box::after {\n                    content: \"\";\n                    border-radius: 5px;\n                    position: absolute;\n                    z-index: -1;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    box-shadow: $box-shadow-bottom-heavy;\n                    opacity: 0;\n                    -webkit-transition: $transition;\n                    transition: $transition;\n                  }\n\n                  .box:hover {\n                    -webkit-transform: scale(1.05, 1.05);\n                    transform: scale(1.05, 1.05);\n                  }\n\n                  .box:hover::after {\n                    opacity: 1;\n                  }\n                  .center-col {\n                    flex: 1;\n                    background: #aaa;\n                    overflow-y: scroll;\n                  }\n                  .vertical-slider{\n                    width: 20px;\n                    height: 200px;\n                    background-color: #ccc;\n                    margin-left: 44px;              \n                  }\n                  .example-thumb{\n                    background-color: white;\n                    width: 12px;\n                    border-radius: 20px;\n                    margin: 4px 4px;\n                    text-align: center;  \n                }\n                  \n\n                "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cards_landscape_wrap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontWeight: 700,
      fontSize: "42px",
      fontFamily: "Montserrat",
      letterSpacing: "7px"
    }
  }, "TILES PAGE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    style: {
      width: "83%"
    }
  }, list)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-2 col-sm-2 col-md-2 col-lg-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "200px",
      overflow: "hidden"
    }
  }))));
}
var appTarget = document.createElement("div");
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tilespage, null), appTarget);

/***/ }),

/***/ "./src/playground/titleStyle.css":
/*!***************************************!*\
  !*** ./src/playground/titleStyle.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./titleStyle.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/titleStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

},[["./src/playground/tilespage.jsx","lib.min"]]]);
//# sourceMappingURL=tilespage.js.map