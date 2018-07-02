/*! vue-cli-xiaxs */
webpackJsonp([6],{

/***/ "1E05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-eBookSearch"},[_c('div',{staticClass:"container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.firstIn),expression:"!firstIn"}],staticClass:"search-length padMargin"},[_vm._v("共检索到"),_c('span',[_vm._v(_vm._s(_vm.searchCount))]),_vm._v("条关于 "+_vm._s(_vm.getSearchEvent)+" 的结果")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('ul',{staticClass:"search-result-lists padMargin"},_vm._l((_vm.bookResult),function(item){return _c('li',{key:item.bookName},[_c('router-link',{attrs:{"to":{path: item.skipUrl},"target":"_blank"}},[_c('div',{staticClass:"component-book-info clearfix"},[_c('span',{staticClass:"book-cover"},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.fcover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"book-about"},[_c('h3',{staticClass:"book-name"},[_vm._v(_vm._s(item.ftitle))]),_vm._v(" "),_c('div',{staticClass:"book-author-publish"},[_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(item.fauthor))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(item.fpublisher)+"\n                    "),(item.publishDate)?[_vm._v("\n                      | "+_vm._s(item.publishDate)+"年\n                    ")]:_vm._e()],2)]),_vm._v(" "),_c('p',{staticClass:"book-intro"},[_vm._v(_vm._s(item.fsummary))])])])])],1)})),_vm._v(" "),_c('none-data',{directives:[{name:"show",rawName:"v-show",value:(!_vm.bookResult.length && !_vm.loading && !_vm.firstIn),expression:"!bookResult.length && !loading && !firstIn"}],attrs:{"msg":"请搜索其他关键词"}}),_vm._v(" "),(_vm.firstIn)?_c('none-search'):_vm._e(),_vm._v(" "),_c('load-more',{directives:[{name:"show",rawName:"v-show",value:(_vm.bookResult.length),expression:"bookResult.length"}],attrs:{"current":_vm.currentPage,"total":_vm.totalPage,"load":_vm.loading},on:{"more-data":_vm.viewMore}}),_vm._v(" "),_c('div',{staticClass:"pagination-wrap"},[_c('pagination',{ref:"pbPager",attrs:{"current":_vm.currentPage,"total":_vm.totalPage},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "97oW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".none-data-tip[data-v-a66a86fe]{text-align:center;color:#999;font-size:14px}@media only screen and (max-width:768px){.none-data-tip[data-v-a66a86fe]{display:table;margin:60px auto 0}}", ""]);

// exports


/***/ }),

/***/ "DVTN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-51fc4ddf]{float:left!important}.pull-right[data-v-51fc4ddf]{float:right!important}.show[data-v-51fc4ddf]{display:block!important}.hidden[data-v-51fc4ddf]{display:none!important;visibility:hidden!important}.invisible[data-v-51fc4ddf]{visibility:hidden}.loading[data-v-51fc4ddf]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-51fc4ddf 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-51fc4ddf{0%{width:2px}to{width:15px}}a[data-v-51fc4ddf]{text-decoration:none}ol[data-v-51fc4ddf],ul[data-v-51fc4ddf]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-51fc4ddf],input[data-v-51fc4ddf]{-webkit-appearance:none}button[data-v-51fc4ddf]{border:none;background:none}input[data-v-51fc4ddf],input[data-v-51fc4ddf]:focus{outline:none}.none-data[data-v-51fc4ddf]{position:relative}.none-data[data-v-51fc4ddf]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-51fc4ddf]{border:1px solid #5390d7;color:#5390d7}.return[data-v-51fc4ddf]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-51fc4ddf]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-51fc4ddf]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-51fc4ddf]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-51fc4ddf]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-51fc4ddf]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-51fc4ddf]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-51fc4ddf]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-51fc4ddf]{color:#42a8dd}.not-overdue[data-v-51fc4ddf]{color:#5dc9a8}.overdue[data-v-51fc4ddf]{color:#f97f50}.overlay[data-v-51fc4ddf]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-51fc4ddf]{padding-left:15px}.padMargin[data-v-51fc4ddf]{padding-right:15px;padding-left:15px}}.white-bg[data-v-51fc4ddf]{background-color:#fff}.vertical-top[data-v-51fc4ddf]{vertical-align:top}.vertical-middle[data-v-51fc4ddf]{vertical-align:middle}.vertical-center[data-v-51fc4ddf]{font-size:0;text-align:left}.vertical-center[data-v-51fc4ddf]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-51fc4ddf]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-51fc4ddf]{color:#fff}.swiper-button-next[data-v-51fc4ddf],.swiper-button-prev[data-v-51fc4ddf]{background-image:none}.swiper-button-next .iconfont[data-v-51fc4ddf],.swiper-button-prev .iconfont[data-v-51fc4ddf]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-51fc4ddf],.swiper-button-prev .iconfont[data-v-51fc4ddf]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-51fc4ddf],.swiper-button-prev .iconfont[data-v-51fc4ddf]{font-size:11px}}.list-container>li[data-v-51fc4ddf]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-51fc4ddf]{padding-bottom:31px}.list-container>li+li[data-v-51fc4ddf]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-51fc4ddf]{padding-bottom:15px}.list-container>li+li[data-v-51fc4ddf]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-51fc4ddf]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-51fc4ddf]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-51fc4ddf]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-51fc4ddf]{padding-bottom:16px}.has-right-column .calendar[data-v-51fc4ddf]{width:280px;height:254px}}.view-more[data-v-51fc4ddf]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-51fc4ddf]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-51fc4ddf]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-51fc4ddf]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-51fc4ddf]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-51fc4ddf]{display:none}.view-more .iconfont[data-v-51fc4ddf]{font-size:10px}}.about-content[data-v-51fc4ddf]{color:#666}.about-content>p[data-v-51fc4ddf]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-51fc4ddf]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-51fc4ddf]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-51fc4ddf]{padding-right:10px;padding-left:10px}.about-content>p[data-v-51fc4ddf]{font-size:13px;line-height:25px}.about-content>p+p[data-v-51fc4ddf]{margin-top:12px}}.component-menuInner.last1>a[data-v-51fc4ddf]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-51fc4ddf]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-51fc4ddf]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-51fc4ddf]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-51fc4ddf]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-51fc4ddf]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-51fc4ddf]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-51fc4ddf]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-51fc4ddf]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-51fc4ddf]{color:#5cc8a8}.component-menuInner a[data-v-51fc4ddf]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-51fc4ddf]{color:#4daada}.component-menuInner a p[data-v-51fc4ddf]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-51fc4ddf]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-51fc4ddf]{margin-top:20px}.component-menuInner a[data-v-51fc4ddf]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-51fc4ddf]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-51fc4ddf]{font-size:34px}.component-menuInner a p[data-v-51fc4ddf]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-51fc4ddf]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-51fc4ddf]{margin-top:10px}.component-menuInner a[data-v-51fc4ddf]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-51fc4ddf]{font-size:19px}.component-menuInner a p[data-v-51fc4ddf]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-51fc4ddf]{padding-right:15px;padding-left:15px}}.footer[data-v-51fc4ddf]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-51fc4ddf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-51fc4ddf]{position:relative}.eventAction[data-v-51fc4ddf]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-51fc4ddf .75s 0s linear infinite;animation:rotate-data-v-51fc4ddf .75s 0s linear infinite}.component-book-info[data-v-51fc4ddf]{display:block;color:#959ca5}.component-book-info .book-cover[data-v-51fc4ddf]{box-shadow:0 0 35px rgba(0,0,0,.13)}.component-book-info .book-cover>img[data-v-51fc4ddf]{display:block;width:auto;height:100%;margin:0 auto}.component-book-info .book-about[data-v-51fc4ddf]{position:relative}.component-book-info .book-name[data-v-51fc4ddf]{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.component-book-info .book-intro[data-v-51fc4ddf]{position:absolute;bottom:-2px;margin-top:0;margin-bottom:0}.component-book-info .publish-year[data-v-51fc4ddf]{position:relative;padding-left:16px}.component-book-info .publish-year[data-v-51fc4ddf]:before{content:\"\";position:absolute;top:50%;left:8px;width:1px;height:12px;margin-top:-6px;background-color:#959ca5}@media only screen and (min-width:768px){.component-book-info[data-v-51fc4ddf]{height:200px;margin-bottom:40px;cursor:pointer}.component-book-info .book-cover[data-v-51fc4ddf]{float:left;width:161px;height:100%}.component-book-info .book-cover>img[data-v-51fc4ddf]{display:block;width:100%;height:100%}.component-book-info .book-about[data-v-51fc4ddf]{height:100%;margin-left:191px}.component-book-info .book-name[data-v-51fc4ddf]{position:relative;top:-3px;margin-top:0;font-size:18px}.component-book-info .book-author-publish[data-v-51fc4ddf]{margin-top:-6px}.component-book-info .book-author-publish>p[data-v-51fc4ddf]{margin-top:6px;margin-bottom:0;white-space:nowrap}.component-book-info .book-intro[data-v-51fc4ddf]{max-width:100%;max-height:60px;height:60px;overflow:hidden}.component-book-info .iconfont[data-v-51fc4ddf]{margin-right:9px}.component-book-info .icon-chubanshe[data-v-51fc4ddf]{font-size:13px}}@media only screen and (max-width:767px){.component-book-info[data-v-51fc4ddf]{margin-bottom:18px}.component-book-info .book-cover[data-v-51fc4ddf]{display:block;width:97px;height:120.5px}.component-book-info .book-name[data-v-51fc4ddf]{margin-top:12px;margin-bottom:6px;font-size:13px}.component-book-info .book-type[data-v-51fc4ddf]{font-size:11px;color:#959ca5}}.component-eBookSearch .search-length[data-v-51fc4ddf]{height:30px;line-height:30px;font-size:14px;color:#999}.component-eBookSearch .search-length span[data-v-51fc4ddf]{color:#5c7bc8;font-size:16px;padding:0 4px}@media only screen and (min-width:768px){.component-eBookSearch[data-v-51fc4ddf]{padding-top:19px}.component-eBookSearch .search-result-lists[data-v-51fc4ddf]{margin-top:40px;margin-bottom:60px}.component-eBookSearch .search-result-lists>li+li[data-v-51fc4ddf]{margin-top:30px;padding-top:30px;border-top:1px solid #e0e5e8}.component-eBookSearch .component-book-info[data-v-51fc4ddf]{margin-bottom:0}.component-eBookSearch .component-book-info .img-responsive[data-v-51fc4ddf]{display:block;height:100%;object-fit:cover}}@media only screen and (max-width:768px){.component-eBookSearch[data-v-51fc4ddf]{margin-top:55px}.component-eBookSearch .search-result-lists[data-v-51fc4ddf]{padding-top:19px}.component-eBookSearch .search-result-lists>li[data-v-51fc4ddf]{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e0e5e8}.component-eBookSearch .component-book-info[data-v-51fc4ddf]{display:flex;align-items:center;padding:0 15px;margin-bottom:0}.component-eBookSearch .component-book-info .book-cover[data-v-51fc4ddf]{width:97px;height:120.5px}.component-eBookSearch .component-book-info .book-cover .img-responsive[data-v-51fc4ddf]{display:block;height:100%;object-fit:cover}.component-eBookSearch .component-book-info .book-about[data-v-51fc4ddf]{display:flex;flex-direction:column;justify-content:space-between;flex:1;height:120.5px;padding-left:16px;overflow:hidden}.component-eBookSearch .component-book-info .book-name[data-v-51fc4ddf]{margin-top:0;font-size:15px}.component-eBookSearch .component-book-info .book-intro[data-v-51fc4ddf]{position:static;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.component-eBookSearch .component-book-info p[data-v-51fc4ddf]{margin-top:2px;margin-bottom:2px;font-size:11px}.component-eBookSearch .component-book-info .iconfont[data-v-51fc4ddf]{margin-right:5px;font-size:12px}.component-eBookSearch .component-book-info .icon-user-avatar[data-v-51fc4ddf]{font-size:14px}}@media only screen and (min-width:768px){.lend-loading[data-v-51fc4ddf]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-51fc4ddf]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "RLBg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("97oW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("955134f2", content, true, {});

/***/ }),

/***/ "TFx+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue__ = __webpack_require__("dC1a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a66a86fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noneSearch_vue__ = __webpack_require__("ke6d");
function injectStyle (ssrContext) {
  __webpack_require__("RLBg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a66a86fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneSearch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a66a86fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noneSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dC1a":
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
    global.noneSearch = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  //
  //
  //
  //
  //
  //
  //

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "noneSearch",

    data: function data() {
      return {};
    },


    props: {
      msg: {
        type: String,
        default: '搜索您感兴趣的书名、作者'
      },
      customStyle: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },

    created: function created() {
      self = this;
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "h4gQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue__ = __webpack_require__("lzXc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51fc4ddf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pBookSearch_vue__ = __webpack_require__("1E05");
function injectStyle (ssrContext) {
  __webpack_require__("hlJN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51fc4ddf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookSearch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51fc4ddf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pBookSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hlJN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("DVTN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("042cbf86", content, true, {});

/***/ }),

/***/ "ke6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"none-data-tip",style:(_vm.customStyle)},[_vm._v("\n  "+_vm._s(_vm.msg)+"\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lzXc":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("Gu7T"), __webpack_require__("Oqyz"), __webpack_require__("NXlk"), __webpack_require__("TFx+"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/toConsumableArray'), require('../components/bookInfo'), require('../components/loadMore'), require('../components/noneSearch'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.toConsumableArray, global.bookInfo, global.loadMore, global.noneSearch, global.api);
    global.pBookSearch = mod.exports;
  }
})(this, function (module, exports, _toConsumableArray2, _bookInfo, _loadMore, _noneSearch, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _bookInfo2 = _interopRequireDefault(_bookInfo);

  var _loadMore2 = _interopRequireDefault(_loadMore);

  var _noneSearch2 = _interopRequireDefault(_noneSearch);

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

  // components

  // api request
  exports.default = {
    name: "pBookSearch",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        coverLinks: this.$store.state.bookCoverLinks,

        // 搜索结果列表
        bookResult: [], // 图书
        // magazineResult: [], // 期刊
        firstIn: true, // 刚进入页面
        searchCount: 0,
        // 分页
        currentPage: 1,
        totalPage: 0,
        maxLength: 20,
        loading: true
        // url传参
        // queryparams: {},

        // 无更多数据提示文本
        // noMoreData: false,
      };
    },
    created: function created() {
      self = this;
      // self.queryparams = self.$route.query;
      // 默认显示搜索框
      // self.commitEvent('changeSearchBar', true); // 显示搜索框
    },


    computed: {
      getSearchEvent: function getSearchEvent() {
        return this.$store.state.searchEvent || '';
      }
    },

    watch: {
      getSearchEvent: function getSearchEvent(newVal, oldVal) {
        self.init();
      }
    },

    components: {
      bookInfo: _bookInfo2.default,
      loadMore: _loadMore2.default,
      noneSearch: _noneSearch2.default
    },

    mounted: function mounted() {
      self.commitEvent('changeSearchBar', true);
      self.init();
    },
    destroyed: function destroyed() {
      self.commitEvent('changeSearchBar', false); // 离开检索页即隐藏搜索框
    },


    methods: {
      init: function init() {
        self.initList();
        self.getIPAC(1);
      },
      initList: function initList() {
        // 初始化列表
        self.bookResult.length = 0;
        self.currentPage = 1;
        self.totalPage = 0;

        // 页码初始化
        this.$refs.pbPager.init();
      },
      getIPAC: function getIPAC(pageNum) {
        if (!self.getSearchEvent) {
          // console.log('000');
          self.loading = false;
          return;
        }
        self.firstIn = false;
        self.loading = true;
        _api.ebookSearch.getIPAC({
          keywords: self.getSearchEvent,
          page: pageNum
        }).then(function (res) {
          if (res.code == -1) {
            self.loading = false;
            return;
          }
          var data = res.result.bm;
          if (!data.length) {
            self.loading = false;
            self.searchCount = 0;
            return;
          }

          var tempArr = data.map(function (item, index) {
            return {
              ftitle: item.title,
              fcover: '' + self.coverLinks + item.bookid,
              fauthor: item.author || '暂无作者',
              fpublisher: item.publisher || '暂无出版社信息',
              fpublishdate: item.publishdate,
              fbookid: item.bookid,
              fsummary: self.utils.replacePunctuation(decodeURIComponent(item.summary)) || '暂无简介',
              skipUrl: '/index/pBookDetails?bid=' + item.bookid + '&type=zbook'
            };
          });
          self.loading = false;
          self.currentPage = pageNum;
          self.totalPage = Math.ceil(res.result.maxrows / self.maxLength);
          self.searchCount = res.result.maxrows;
          // Mobile 点击 加载更多 -> 追加数据
          if (self.isMobile) {
            var _self$bookResult;

            // self.commitEvent('changeSearchBar', false); 
            (_self$bookResult = self.bookResult).push.apply(_self$bookResult, (0, _toConsumableArray3.default)(tempArr));
            // if (self.currentPage === self.totalPage) {
            //   self.noMoreData = true;
            // }
            return;
          }
          self.bookResult = tempArr;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getIPAC(1);
              clearTimeout(t);
            }, 500);
          }
        });
      },
      pageChange: function pageChange(pageNum) {
        window.scrollTo(0, 0);
        // self.bookResult.length = 0;
        self.getIPAC(pageNum);
      },
      viewMore: function viewMore() {
        // if (self.noMoreData) {
        //   return;
        // }
        self.currentPage++;
        self.getIPAC(self.currentPage);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ })

});
//# sourceMappingURL=6.b64ca0c722ae7e92343b.js.map