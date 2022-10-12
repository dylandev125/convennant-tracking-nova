/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {//
  },
  methods: {
    handleFilesUpload: function handleFilesUpload(e) {
      var files = e.target.files || e.dataTransfer.files;
      papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(files[0], {
        header: true,
        complete: this.onComplete,
        // error: undefined,
        skipEmptyLines: true,
        delimitersToGuess: [",", "\t", "|", ";", (papaparse__WEBPACK_IMPORTED_MODULE_0___default().RECORD_SEP), (papaparse__WEBPACK_IMPORTED_MODULE_0___default().UNIT_SEP)]
      });
    },
    onComplete: function onComplete(results, file) {
      console.log(results.data);
      var data_fields = ['clcode', 'isin', 'clientReference', 'secured', 'frequency', 'startDate', 'dueDate', 'type', 'subType', 'comments', 'targetValue', 'priority', 'mailCC', 'user', 'organization', 'docName', 'description', 'isCustomCovenant'];
      var mandatory_fields = ['clcode', 'clientReference', 'secured', 'frequency', 'startDate', 'dueDate', 'type', 'subType', 'targetValue', 'user', 'organization', 'docName', 'isCustomCovenant'];
      var formDataObj = Object.fromEntries(results.data.entries());
      var form_data = new FormData();
      var result = {};

      var _iterator = _createForOfIteratorHelper(results.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;

          var _iterator2 = _createForOfIteratorHelper(mandatory_fields),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var key2 = _step2.value;

              if (row[key2] === '') {
                return;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = _createForOfIteratorHelper(data_fields),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var key = _step3.value;

              if (!Array.isArray(result[key])) {
                result[key] = [];
              }

              result[key].push(row[key]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      for (var _i = 0, _data_fields = data_fields; _i < _data_fields.length; _i++) {
        var field = _data_fields[_i];
        form_data.append(field, JSON.stringify(result[field]));
      }

      form_data.append('length', results.data.length);
      Nova.request().post('/nova-vendor/bulkimport/insertdata', form_data).then(function (res) {
        console.log(res.data);
      });
    }
  },
  data: function data() {
    return {
      'files': ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "field-wrapper flex flex-col border-b border-gray-100 dark:border-gray-700 md:flex-row",
  index: "0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-6 md:px-8 mt-2 md:mt-0 w-full md:py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "inline-block pt-2 leading-tight"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Upload Document(s) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500 text-sm"
}, "*")])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mt-1 md:mt-0 pb-5 px-6 md:px-8 w-full md:py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");

  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Bulkimport"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    "class": "mb-6"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bulk Import")];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Card, {
    "class": "flex flex-col items-center justify-center",
    style: {
      "min-height": "300px"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        multiple: "",
        "class": "w-full form-control form-input form-input-bordered",
        id: "name-create-documentUpload-text-field",
        name: "documentUpload[]",
        dusk: "documentUpload",
        list: "name-list",
        required: "required",
        ref: "files",
        onChange: _cache[0] || (_cache[0] = function () {
          return $options.handleFilesUpload && $options.handleFilesUpload.apply($options, arguments);
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      )])])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Tool */ "./resources/js/pages/Tool.vue");

Nova.booting(function (app, store) {
  Nova.inertia('Bulkimport', _pages_Tool__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Scoped Styles */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;M(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!M(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=_,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=M(t.step),t.chunk=M(t.chunk),t.complete=M(t.complete),t.error=M(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&M(e.read)&&M(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,i=!1,r=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}();var h=new RegExp(j(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||r),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=v(e[a],a);0<t.length&&(r+=y)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=m);var g=n&&s?e[p]:p;r+=v(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=y)}}return r}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;o&&"string"==typeof e&&o.test(e)&&(e="'"+e,i=!0);var r=e.toString().replace(h,a);return(i=i||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(r,b.BAD_DELIMITERS)||-1<r.indexOf(m)||" "===r.charAt(0)||" "===r.charAt(r.length-1))?s+r+s:r}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(M(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(M(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){M(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else M(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&M(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(M(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!M(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){M(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=v(this._chunkLoaded,this),r.onerror=v(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=v(this._chunkLoaded,this),r.onerror=v(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(m){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(M(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;i+=e.data.length,m.preview&&i>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){return c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){M(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var i,r=m.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];m.header&&(n=i>=l.length?"__parsed_extra":l[i]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return m.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return i=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[i]&&(m.dynamicTyping[i]=m.dynamicTypingFunction(i)),!0===(m.dynamicTyping[i]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(j(t)+"([^]*?)"+j(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,m.delimiter)M(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(h=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=M(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,M(m.complete)&&m.complete(c),a=""}}function j(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var S,O=(e=e||{}).delimiter,x=e.newline,I=e.comments,T=e.step,D=e.preview,A=e.fastMode,L=S=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<b.BAD_DELIMITERS.indexOf(O))&&(O=","),I===O)throw new Error("Comment character same as delimiter");!0===I?I="#":("string"!=typeof I||-1<b.BAD_DELIMITERS.indexOf(I))&&(I=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var F=0,z=!1;this.parse=function(r,t,i){if("string"!=typeof r)throw new Error("Input must be a string");var n=r.length,e=O.length,s=x.length,a=I.length,o=M(T),h=[],u=[],f=[],d=F=0;if(!r)return C();if(A||!1!==A&&-1===r.indexOf(S)){for(var l=r.split(x),c=0;c<l.length;c++){if(f=l[c],F+=f.length,c!==l.length-1)F+=x.length;else if(i)return C();if(!I||f.substring(0,a)!==I){if(o){if(h=[],k(f.split(O)),R(),z)return C()}else k(f.split(O));if(D&&D<=c)return h=h.slice(0,D),C(!0)}}return C()}for(var p=r.indexOf(O,F),g=r.indexOf(x,F),_=new RegExp(j(L)+j(S),"g"),m=r.indexOf(S,F);;)if(r[F]!==S)if(I&&0===f.length&&r.substring(F,F+a)===I){if(-1===g)return C();F=g+s,g=r.indexOf(x,F),p=r.indexOf(O,F)}else if(-1!==p&&(p<g||-1===g))f.push(r.substring(F,p)),F=p+e,p=r.indexOf(O,F);else{if(-1===g)break;if(f.push(r.substring(F,g)),w(g+s),o&&(R(),z))return C();if(D&&h.length>=D)return C(!0)}else for(m=F,F++;;){if(-1===(m=r.indexOf(S,m+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:F}),E();if(m===n-1)return E(r.substring(F,m).replace(_,S));if(S!==L||r[m+1]!==L){if(S===L||0===m||r[m-1]!==L){-1!==p&&p<m+1&&(p=r.indexOf(O,m+1)),-1!==g&&g<m+1&&(g=r.indexOf(x,m+1));var y=b(-1===g?p:Math.min(p,g));if(r.substr(m+1+y,e)===O){f.push(r.substring(F,m).replace(_,S)),r[F=m+1+y+e]!==S&&(m=r.indexOf(S,F)),p=r.indexOf(O,F),g=r.indexOf(x,F);break}var v=b(g);if(r.substring(m+1+v,m+1+v+s)===x){if(f.push(r.substring(F,m).replace(_,S)),w(m+1+v+s),p=r.indexOf(O,F),m=r.indexOf(S,F),o&&(R(),z))return C();if(D&&h.length>=D)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:F}),m++}}else m++}return E();function k(e){h.push(e),d=F}function b(e){var t=0;if(-1!==e){var i=r.substring(m+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=r.substring(F)),f.push(e),F=n,k(f),o&&R()),C()}function w(e){F=e,k(f),f=[],g=r.indexOf(x,F)}function C(e){return{data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:z,truncated:!!e,cursor:d+(t||0)}}}function R(){T(C()),h=[],u=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return F}}function _(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(M(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else M(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&m(t.workerId,t.results)}function m(e,t){var i=a[e];M(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=w(e[i]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function M(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/pages/Tool.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Tool.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=ef10eebe */ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/pages/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");
/* harmony import */ var E_Chandrika_covenantTracking_nova_components_Bulkimport_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_Chandrika_covenantTracking_nova_components_Bulkimport_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=ef10eebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");


/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaxistrustee_bulkimport"] = self["webpackChunkaxistrustee_bulkimport"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;