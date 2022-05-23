"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Web_Pages_Quizz_TakeQuiz_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    quiz: Object
  },
  data: function data() {
    return {
      currentQueston: 0,
      totalQuestions: this.quiz.questions.length - 1,
      userQuiz: [],
      loading: false
    };
  },
  methods: {
    checkAnswer: function checkAnswer(question_id, answer_id, event) {
      var _this = this;

      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route('checkAnswer'), {
        question_id: question_id,
        answer_id: answer_id
      }).then(function (response) {
        _this.userQuiz[question_id] = {
          answer_id: answer_id,
          correct: response.data.answer
        };

        if (response.data.answer) {
          event.target.classList.remove('btn-info');
          event.target.classList.add('btn-success');
        } else {
          event.target.classList.remove('btn-info');
          event.target.classList.add('btn-warning');
          setTimeout(function () {
            event.target.classList.remove('btn-warning');
            event.target.classList.add('btn-info');
          }, 1000);
        }

        _this.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    nextQuestion: function nextQuestion() {
      if (this.currentQueston < this.totalQuestions) {
        console.log(this.currentQueston);
        this.currentQueston++;
      }
    },
    prevQuestion: function prevQuestion() {
      if (this.currentQueston > 0) {
        this.currentQueston--;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9a9307ec"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-xl-6 mx-auto my-4"
};
var _hoisted_4 = {
  "class": "card border-light mb-3"
};
var _hoisted_5 = {
  "class": "card-title text-center"
};
var _hoisted_6 = {
  "class": "card-text grid mb-3"
};
var _hoisted_7 = ["disabled", "onClick"];
var _hoisted_8 = {
  key: 0,
  "class": "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
};
var _hoisted_9 = {
  "class": "card-footer d-flex justify-content-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.quiz.questions, function (question, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "card-body",
      key: question.index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.question), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(question.answers, function (answer, answer_index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: answer.answer_index,
        type: "button",
        "class": "btn btn-info",
        disabled: $data.loading,
        onClick: function onClick($event) {
          return $options.checkAnswer(question.id, answer.id, $event);
        }
      }, [$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer.answer), 1
      /* TEXT */
      )], 8
      /* PROPS */
      , _hoisted_7);
    }), 128
    /* KEYED_FRAGMENT */
    ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-outline-primary",
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.prevQuestion && $options.prevQuestion.apply($options, arguments);
      })
    }, "Prev"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-outline-primary",
      onClick: _cache[1] || (_cache[1] = function () {
        return $options.nextQuestion && $options.nextQuestion.apply($options, arguments);
      })
    }, "Next")])], 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.currentQueston == index]])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.grid[data-v-9a9307ec] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_style_index_0_id_9a9307ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_style_index_0_id_9a9307ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_style_index_0_id_9a9307ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue":
/*!***************************************************!*\
  !*** ./resources/js/Web/Pages/Quizz/TakeQuiz.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TakeQuiz_vue_vue_type_template_id_9a9307ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true */ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true");
/* harmony import */ var _TakeQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TakeQuiz.vue?vue&type=script&lang=js */ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js");
/* harmony import */ var _TakeQuiz_vue_vue_type_style_index_0_id_9a9307ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css */ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css");
/* harmony import */ var G_wamp_www_flat_rock_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,G_wamp_www_flat_rock_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TakeQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TakeQuiz_vue_vue_type_template_id_9a9307ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9a9307ec"],['__file',"resources/js/Web/Pages/Quizz/TakeQuiz.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TakeQuiz.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_template_id_9a9307ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_template_id_9a9307ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=template&id=9a9307ec&scoped=true");


/***/ }),

/***/ "./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TakeQuiz_vue_vue_type_style_index_0_id_9a9307ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Web/Pages/Quizz/TakeQuiz.vue?vue&type=style&index=0&id=9a9307ec&scoped=true&lang=css");


/***/ })

}]);