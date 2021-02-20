(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Layout */ "./resources/js/Components/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Layout: _Components_Layout__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      times: [],
      isUserMode: false,
      isAdminMode: true,
      date: window.moment().format("ddd, D/MMM/YY"),
      user: {
        name: '',
        email: '',
        is_admin: false
      }
    };
  },
  methods: {
    getAdminTimes: function getAdminTimes() {
      var _this = this;

      axios.get('/api/attendance', {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('jwt'))
        }
      }).then(function (response) {
        _this.isUserMode = false;
        _this.isAdminMode = true;
        _this.times = response.data;
      })["catch"](function (error) {
        if (error.response.status === 403) {
          console.log("Forbidden");
        } else if (error.response.status === 401) {
          localStorage.clear();

          _this.$router.push('home');
        }
      });
    },
    getUserTimes: function getUserTimes() {
      var _this2 = this;

      axios.get('/api/attendance/user-time', {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('jwt'))
        }
      }).then(function (response) {
        _this2.isUserMode = true;
        _this2.isAdminMode = false;
        _this2.times = response.data;
        console.log(_this2.times);
      })["catch"](function (error) {
        if (error.response.status === 403) {
          console.log("Forbidden");
        } else if (error.response.status === 401) {
          localStorage.clear();

          _this2.$router.push('home');
        }
      });
    },
    getCurrentUser: function getCurrentUser() {
      var _this3 = this;

      axios.get('/api/users/me', {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('jwt'))
        }
      }).then(function (response) {
        _this3.user = response.data.user;
      })["catch"](function (error) {
        if (error.response.status === 403) {
          console.log("Forbidden");
        } else if (error.response.status === 401) {
          localStorage.clear();

          _this3.$router.push('home');
        }
      });
    },
    getFullRoute: function getFullRoute(id) {
      return "/user/" + id;
    }
  },
  mounted: function mounted() {
    if (this.user.is_admin) {
      this.getAdminTimes();
    } else {
      this.getUserTimes();
    }
  },
  created: function created() {
    this.getCurrentUser();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-container {\n    /*background-color: #2d3748;*/\n    display: flex;\n    flex-direction: row;\n    align-content: space-between;\n    width: 100%;\n    height: 90vh;\n    padding: 5%;\n}\n.left {\n    height: 100%;\n}\n.right {\n    width: 80%;\n    height: 100%;\n}\ntable td, table th {\n    border-top: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Pages/Report.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Report.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=44c39bc6& */ "./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Report.vue?vue&type=script&lang=js&");
/* harmony import */ var _Report_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Report.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Report.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Report.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_44c39bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=template&id=44c39bc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Report.vue?vue&type=template&id=44c39bc6& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", [
    _c("div", { staticClass: "user-container" }, [
      _c("div", { staticClass: "left" }, [
        _c("h2", [_vm._v("Users")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card mr-5", staticStyle: { width: "18rem" } },
          [
            _c("ul", { staticClass: "list-group list-group-flush" }, [
              _vm.user.is_admin
                ? _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      class: { "bg-primary text-light": _vm.isAdminMode },
                      staticStyle: { color: "black" },
                      on: { click: _vm.getAdminTimes }
                    },
                    [
                      _c("h3", [_vm._v("Admin")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.user.email))])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "list-group-item",
                  class: { "bg-primary text-light": _vm.isUserMode },
                  staticStyle: { color: "black" },
                  on: { click: _vm.getUserTimes }
                },
                [
                  _c("h3", [_vm._v("Trail Support")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.user.email))])
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right" }, [
        _c("h2", [_vm._v("Log for " + _vm._s(_vm.date))]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header pt-4" }),
          _vm._v(" "),
          _c("table", { staticClass: "table table-borderless" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
                _vm._v(" "),
                _vm.isAdminMode
                  ? _c("th", { attrs: { scope: "col" } }, [_vm._v("User ID")])
                  : _vm._e(),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Time In")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Time Out")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.times, function(time) {
                  return _c("tr", { key: time.id }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(time.date))
                    ]),
                    _vm._v(" "),
                    _vm.isAdminMode
                      ? _c(
                          "th",
                          { attrs: { scope: "row" } },
                          [
                            _c(
                              "router-link",
                              { attrs: { to: _vm.getFullRoute(time.user_id) } },
                              [_vm._v(_vm._s(time.user_id))]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(time.time_in) + " Hrs")]),
                    _vm._v(" "),
                    time.time_out
                      ? _c("td", [_vm._v(_vm._s(time.time_out) + " Hrs")])
                      : _vm._e()
                  ])
                }),
                _vm._v(" "),
                _vm.times.length === 0
                  ? _c("tr", [_c("th", [_vm._v("No Records")])])
                  : _vm._e()
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);