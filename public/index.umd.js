/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wfui"] = factory();
	else
		root["wfui"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ui/packages/badge/src/main.vue":
/*!****************************************!*\
  !*** ./ui/packages/badge/src/main.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=14784136 */ \"./ui/packages/badge/src/main.vue?vue&type=template&id=14784136\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js */ \"./ui/packages/badge/src/main.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"ui/packages/badge/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://wfui/./ui/packages/badge/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name:'WfBadge',\r\n    props: {\r\n    value: [String, Number],\r\n    max: Number,\r\n    isDot: Boolean,\r\n    hidden: Boolean,\r\n    type: {\r\n      type: String,\r\n      validator(val) {\r\n         // 这个值必须匹配下列字符串中的一个\r\n        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;\r\n      }\r\n    }\r\n  },\r\n\r\n  computed: {\r\n    content() {\r\n      if (this.isDot) return;\r\n      const value = this.value;\r\n      const max = this.max;\r\n      if (typeof value === 'number' && typeof max === 'number') {\r\n        return max < value ? `${max}+` : value;\r\n      }\r\n      return value;\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://wfui/./ui/packages/badge/src/main.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./ui/packages/button/src/main.vue":
/*!*****************************************!*\
  !*** ./ui/packages/button/src/main.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=04264e1c */ \"./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js */ \"./ui/packages/button/src/main.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"ui/packages/button/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://wfui/./ui/packages/button/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"WfButton\",\r\n  props:{\r\n    size:{\r\n      type:String,\r\n      default:'14px',\r\n    },\r\n    type:{\r\n      type:String,\r\n      default:'default',\r\n    },\r\n    plain:{\r\n      type:Boolean,\r\n      default:false\r\n    },\r\n    round:{\r\n      type:Boolean,\r\n      default:false,\r\n    },\r\n    circle:{\r\n      type:Boolean,\r\n      default:false,\r\n    },\r\n    loading:{\r\n      type:Boolean,\r\n      default:false,\r\n    },\r\n    disabled:{\r\n      type:Boolean,\r\n      default:false,\r\n    },\r\n    icon:{\r\n      type:String,\r\n      default:\"\",\r\n    },\r\n    autofocus:{\r\n      type:Boolean,\r\n      default:false,\r\n    }\r\n  },\r\n  methods: {\r\n    handleClick(evt) {\r\n      this.$emit('click', evt);\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://wfui/./ui/packages/button/src/main.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./ui/packages/badge/src/main.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./ui/packages/badge/src/main.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=script&lang=js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://wfui/./ui/packages/badge/src/main.vue?");

/***/ }),

/***/ "./ui/packages/button/src/main.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./ui/packages/button/src/main.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=script&lang=js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://wfui/./ui/packages/button/src/main.vue?");

/***/ }),

/***/ "./ui/packages/badge/src/main.vue?vue&type=template&id=14784136":
/*!**********************************************************************!*\
  !*** ./ui/packages/badge/src/main.vue?vue&type=template&id=14784136 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_14784136__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=14784136 */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=template&id=14784136\");\n\n\n//# sourceURL=webpack://wfui/./ui/packages/badge/src/main.vue?");

/***/ }),

/***/ "./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c":
/*!***********************************************************************!*\
  !*** ./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_04264e1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=04264e1c */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c\");\n\n\n//# sourceURL=webpack://wfui/./ui/packages/button/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=template&id=14784136":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/badge/src/main.vue?vue&type=template&id=14784136 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\n    \"div\",\n    { staticClass: \"wf-badge\" },\n    [\n      _vm._t(\"default\"),\n      _vm._v(\" \"),\n      _c(\"sup\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value:\n              !_vm.hidden && (_vm.content || _vm.content === 0 || _vm.isDot),\n            expression: \"!hidden && (content || content === 0 || isDot)\",\n          },\n        ],\n        staticClass: \"wf-badge__content\",\n        class: [\n          \"wf-badge__content--\" + _vm.type,\n          {\n            \"is-fixed\": _vm.$slots.default,\n            \"is-dot\": _vm.isDot,\n          },\n        ],\n        domProps: { textContent: _vm._s(_vm.content) },\n      }),\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://wfui/./ui/packages/badge/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./ui/packages/button/src/main.vue?vue&type=template&id=04264e1c ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\n    \"button\",\n    {\n      staticClass: \"wf-button\",\n      class: [\n        `wf-button--${_vm.type}`,\n        `wf-button--${_vm.size}`,\n        { \"is-plain\": _vm.plain },\n        { \"is-round\": _vm.round },\n        { \"is-circle\": _vm.circle },\n        { \"is-disabled\": _vm.disabled },\n        { \"is-loading\": _vm.loading },\n      ],\n      attrs: { disabled: _vm.disabled || _vm.loading, loading: _vm.loading },\n      on: { click: _vm.handleClick },\n    },\n    [\n      _vm.loading ? _c(\"i\", { staticClass: \"wf-icon-loading\" }) : _vm._e(),\n      _vm._v(\" \"),\n      _vm.icon && !_vm.loading\n        ? _c(\"i\", { class: `iconfont icon-${_vm.icon} ` })\n        : _vm._e(),\n      _vm._v(\" \"),\n      _vm.$slots.default ? _c(\"span\", [_vm._t(\"default\")], 2) : _vm._e(),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://wfui/./ui/packages/button/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ normalizeComponent; }\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://wfui/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./ui/packages/badge/index.js":
/*!************************************!*\
  !*** ./ui/packages/badge/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./ui/packages/badge/src/main.vue\");\n\r\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\r\n  Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://wfui/./ui/packages/badge/index.js?");

/***/ }),

/***/ "./ui/packages/button/index.js":
/*!*************************************!*\
  !*** ./ui/packages/button/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main */ \"./ui/packages/button/src/main.vue\");\n\r\n\r\n_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\r\n  Vue.component(_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://wfui/./ui/packages/button/index.js?");

/***/ }),

/***/ "./ui/packages/index.js":
/*!******************************!*\
  !*** ./ui/packages/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./ui/packages/button/index.js\");\n/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge */ \"./ui/packages/badge/index.js\");\n\r\n\r\n\r\nlet components = {\r\n  Button: _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  Badge: _badge__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n}\r\n\r\nfunction install (Vue) {\r\n  Object.keys(components).forEach(key => {\r\n    Vue.component(components[key].name, components[key])\r\n  })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  install\r\n});\n\n//# sourceURL=webpack://wfui/./ui/packages/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ui/packages/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});