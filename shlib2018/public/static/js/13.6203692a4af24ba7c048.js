/*! vue-cli-xiaxs */
webpackJsonp([13],{

/***/ "/YVm":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.bookSort = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "bookSort",

        data: function data() {
            return {
                defaultCover: 'http://e.library.sh.cn/elib.jpg'
            };
        },


        props: ['sortinfo'],

        methods: {}
    };
    module.exports = exports['default'];
});

/***/ }),

/***/ "1jDJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".booksort[data-v-2000fad0]{display:flex;align-items:center;width:100%}.booksort .cover[data-v-2000fad0]{float:left;width:50%;box-shadow:0 0 35px rgba(0,0,0,.15)}.booksort .cover img[data-v-2000fad0]{display:inline-block;width:100%;height:170px;object-fit:cover}@media only screen and (max-width:767px){.booksort .cover img[data-v-2000fad0]{display:inline-block;width:100%;height:100px}}.booksort .about[data-v-2000fad0]{float:left;width:50%;padding-left:20px}@media only screen and (max-width:767px){.booksort .about[data-v-2000fad0]{padding-left:15px}}.booksort .about .title[data-v-2000fad0]{font-size:18px;font-weight:400;color:#333;margin:20px 0 8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.booksort .about .title[data-v-2000fad0]{font-size:15px;margin:10px 0 4px}}.booksort .about .type[data-v-2000fad0]{font-size:12px;color:#baa37d;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.booksort .about .type[data-v-2000fad0]{color:#959ca5}}", ""]);

// exports


/***/ }),

/***/ "CpvX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue__ = __webpack_require__("aFTv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_574a9d6b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookDefault_vue__ = __webpack_require__("U7oG");
function injectStyle (ssrContext) {
  __webpack_require__("ojkP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-574a9d6b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDefault_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_574a9d6b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookDefault_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Nv6E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue__ = __webpack_require__("/YVm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2000fad0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookSort_vue__ = __webpack_require__("rHqM");
function injectStyle (ssrContext) {
  __webpack_require__("ji7y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2000fad0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookSort_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2000fad0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookSort_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PMO0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".bookssort[data-v-574a9d6b]{border-bottom:1px solid #e0e5e8}.bookssort .iconfont[data-v-574a9d6b]{color:#5c7bc8}@media only screen and (max-width:767px){.bookssort[data-v-574a9d6b]{border-bottom:none}}.publicationssort[data-v-574a9d6b]{position:relative}.publicationssort .pub-ico[data-v-574a9d6b]{display:none;width:17px;height:40px;background:url(/static/images/pub-ico.png) no-repeat 50%;background-size:100%}@media only screen and (max-width:767px){.publicationssort .pub-ico[data-v-574a9d6b]{display:inline-block;float:left}}.bookssort .title[data-v-574a9d6b],.publicationssort .title[data-v-574a9d6b]{height:100px;line-height:100px}@media only screen and (max-width:767px){.bookssort .title[data-v-574a9d6b],.publicationssort .title[data-v-574a9d6b]{height:40px;line-height:40px}}.bookssort .title .iconfont[data-v-574a9d6b],.publicationssort .title .iconfont[data-v-574a9d6b]{display:none;font-size:16px}@media only screen and (max-width:767px){.bookssort .title .iconfont[data-v-574a9d6b],.publicationssort .title .iconfont[data-v-574a9d6b]{display:inline}}.bookssort .title span[data-v-574a9d6b],.publicationssort .title span[data-v-574a9d6b]{font-size:18px;color:#333;padding-left:10px;border-left:5px solid #49709c}@media only screen and (max-width:767px){.bookssort .title span[data-v-574a9d6b],.publicationssort .title span[data-v-574a9d6b]{border-left:none;font-size:15px;padding-left:5px}}.list[data-v-574a9d6b]{padding-left:0;margin-bottom:0;min-height:190px}.list li[data-v-574a9d6b]{width:25%;list-style:none;float:left;margin-bottom:40px}.list li[data-v-574a9d6b]:nth-child(4n+0){padding-right:0}@media only screen and (max-width:767px){.list li[data-v-574a9d6b]{width:50%;margin-bottom:20px}.list li[data-v-574a9d6b]:nth-child(odd){padding:0 10px 0 0}.list li[data-v-574a9d6b]:nth-child(2n){padding:0 0 0 10px}}.list li a[data-v-574a9d6b]{text-decoration:none}@media only screen and (min-width:768px){.lend-loading[data-v-574a9d6b]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-574a9d6b]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "U7oG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"bookssort"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"list clearfix"},_vm._l((_vm.bookList),function(book,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{path: ("bookClassification/bookClassificationList?type=epub&name=" + (book.name))}}},[_c('book-sort',{attrs:{"sortinfo":book}})],1)],1)}))]),_vm._v(" "),_c('div',{staticClass:"publicationssort"},[_vm._m(1),_vm._v(" "),_c('ul',{staticClass:"list clearfix"},_vm._l((_vm.publicationList),function(publication,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{path: ("bookClassification/bookClassificationList?type=magazine&name=" + (publication.name))}}},[_c('book-sort',{attrs:{"sortinfo":publication}})],1)],1)}))]),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.bookloading || _vm.magloading),expression:"bookloading || magloading"}],staticClass:"lend-loading"})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('i',{staticClass:"iconfont icon-book"}),_vm._v(" "),_c('span',[_vm._v("图书")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('div',{staticClass:"pub-ico"}),_vm._v(" "),_c('span',[_vm._v("期刊")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "aFTv":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("Nv6E"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/bookSort"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.bookSort, global.api);
    global.bookDefault = mod.exports;
  }
})(this, function (module, exports, _bookSort, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bookSort2 = _interopRequireDefault(_bookSort);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "bookDefault",

    data: function data() {
      return {
        bookList: [],
        publicationList: [],
        bookloading: true,
        magloading: true
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      bookSort: _bookSort2.default
    },

    computed: {},

    mounted: function mounted() {
      this.getBookClassList();
      this.getPublicClassList();
    },


    methods: {
      getBookClassList: function getBookClassList() {
        var _this = this;

        // 获取图书列表
        _api.Classes.epubClasses().then(function (data) {
          _this.bookList = data.result;
          _this.bookloading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getBookClassList();
              clearTimeout(t);
            }, 500);
          } else {
            _this.bookloading = false;
          }
        });
      },
      getPublicClassList: function getPublicClassList() {
        var _this2 = this;

        // 获取期刊列表
        _api.Classes.magazineClasses().then(function (data) {
          _this2.publicationList = data.result[0].concat(data.result[1]);
          _this2.magloading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getPublicClassList();
              clearTimeout(t);
            }, 500);
          } else {
            _this2.magloading = false;
          }
        });
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "ji7y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1jDJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("45a299bd", content, true, {});

/***/ }),

/***/ "ojkP":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("PMO0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5b944ca1", content, true, {});

/***/ }),

/***/ "rHqM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"booksort clearfix",attrs:{"title":_vm.sortinfo.name}},[_c('div',{staticClass:"cover"},[_c('img',{attrs:{"src":_vm.sortinfo.cover ? _vm.sortinfo.cover : _vm.defaultCover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"about"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(_vm.sortinfo.name))]),_vm._v(" "),_c('p',{staticClass:"type"},[_vm._v(_vm._s(_vm.sortinfo.cnt)+"本")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=13.6203692a4af24ba7c048.js.map