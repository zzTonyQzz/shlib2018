/*! vue-cli-xiaxs */
webpackJsonp([19],{

/***/ "+A7E":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vxxa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4b83781a", content, true, {});

/***/ }),

/***/ "G69C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-recommendedBook"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('ul',{staticClass:"search-result-lists padMargin clearfix"},_vm._l((_vm.bookList),function(item){return _c('router-link',{key:item.title,attrs:{"tag":"li","to":{path: ("/index/pBookDetails?bid=" + (item.fbookid))}}},[_c('div',{staticClass:"component-book-info clearfix"},[_c('span',{staticClass:"book-cover"},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.fcover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"book-about"},[_c('h3',{staticClass:"book-name"},[_vm._v(_vm._s(item.ftitle))]),_vm._v(" "),_c('div',{staticClass:"book-author-publish"},[_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(item.fauthor))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(item.fpublisher)+"\n                  "),(item.publishDate)?[_vm._v("\n                    | "+_vm._s(item.publishDate)+"年\n                  ")]:_vm._e()],2)]),_vm._v(" "),_c('p',{staticClass:"book-intro"},[_vm._v(_vm._s(item.fsummary))])])])])}))])]),_vm._v(" "),(_vm.delayShowPagination)?_c('a',{staticClass:"view-more visible-xs",class:{'no-more-data': _vm.noMoreData},attrs:{"href":"javascript:;"},on:{"click":_vm.viewMore}},[_vm._v("\n    "+_vm._s(_vm.tips)),_c('i',{staticClass:"iconfont icon-arrow-right"})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pagination-wrap"},[_c('pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.delayShowPagination),expression:"delayShowPagination"}],attrs:{"current":_vm.currentpage,"total":_vm.totalPage},on:{"page-change":_vm.pageChange}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Jwb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue__ = __webpack_require__("h3WW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d88d540_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedBook_vue__ = __webpack_require__("G69C");
function injectStyle (ssrContext) {
  __webpack_require__("+A7E")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d88d540"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedBook_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d88d540_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedBook_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "h3WW":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("Gu7T"), __webpack_require__("Oqyz"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/toConsumableArray'), require('../components/bookInfo'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.toConsumableArray, global.bookInfo, global.api);
    global.recommendedBook = mod.exports;
  }
})(this, function (module, exports, _toConsumableArray2, _bookInfo, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _bookInfo2 = _interopRequireDefault(_bookInfo);

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

  var self = null; // 自定义变量存储实例this

  // components


  // apis
  exports.default = {
    name: "recommendedBook",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        coverLinks: this.$store.state.bookCoverLinks,
        currentpage: 1,
        totalPage: 0,
        maxLength: 20,

        saveData: [],
        bookList: [],

        // 无更多数据提示文本
        noMoreData: false,

        delayShowPagination: false
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      bookInfo: _bookInfo2.default
    },

    computed: {
      tips: function tips() {
        return this.noMoreData ? '没有更多数据了' : '加载更多';
      }
    },

    mounted: function mounted() {
      self.getBookrecom();

      self.$parent.isNextPage = true;
    },
    destroyed: function destroyed() {
      self.$parent.isNextPage = false;
    },


    methods: {
      getBookrecom: function getBookrecom() {
        _api.userprofiles.getBookrecom().then(function (res) {
          var data = res.result;
          self.totalPage = Math.ceil(data.length / self.maxLength);

          var idsStr = data.join(',');
          _api.userprofiles.getInfobyids({
            idsStr: idsStr
          }).then(function (res) {
            if (res.code == -1) return;
            var data = res.result.bm;
            if (!data.length) return;
            self.saveData = data;
            self.dataHandle();
          });
        });
      },
      dataHandle: function dataHandle() {
        var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.currentpage;

        var data = self.saveData.slice((pageNum - 1) * self.maxLength, pageNum * self.maxLength);
        var tempArr = data.map(function (item) {
          return {
            ftitle: item.title,
            fcover: '' + self.coverLinks + item.bookid,
            fauthor: item.author || '暂无作者',
            fpublisher: item.publisher,
            fpublishdate: item.publishdate,
            fsummary: item.summary || '暂无书籍简介',
            fbookid: item.bookid
          };
        });

        setTimeout(function (item) {
          self.delayShowPagination = true;
        }, 300);

        if (self.isMobile) {
          var _self$bookList;

          (_self$bookList = self.bookList).push.apply(_self$bookList, (0, _toConsumableArray3.default)(tempArr));

          if (pageNum === self.totalPage) {
            self.noMoreData = true;
          }
          return;
        }

        self.bookList = tempArr;
      },
      pageChange: function pageChange(pageNum) {
        self.currentpage = pageNum;
        self.dataHandle();
        window.scroll(0, 0);
      },
      viewMore: function viewMore() {
        if (self.noMoreData) {
          return;
        }
        self.currentpage++;
        self.dataHandle();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "vxxa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-2d88d540]{float:left!important}.pull-right[data-v-2d88d540]{float:right!important}.show[data-v-2d88d540]{display:block!important}.hidden[data-v-2d88d540]{display:none!important;visibility:hidden!important}.invisible[data-v-2d88d540]{visibility:hidden}.loading[data-v-2d88d540]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-2d88d540 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-2d88d540{0%{width:2px}to{width:15px}}a[data-v-2d88d540]{text-decoration:none}ol[data-v-2d88d540],ul[data-v-2d88d540]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-2d88d540],input[data-v-2d88d540]{-webkit-appearance:none}button[data-v-2d88d540]{border:none;background:none}input[data-v-2d88d540],input[data-v-2d88d540]:focus{outline:none}.none-data[data-v-2d88d540]{position:relative}.none-data[data-v-2d88d540]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-2d88d540]{border:1px solid #5390d7;color:#5390d7}.return[data-v-2d88d540]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-2d88d540]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-2d88d540]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-2d88d540]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-2d88d540]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-2d88d540]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-2d88d540]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-2d88d540]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-2d88d540]{color:#42a8dd}.not-overdue[data-v-2d88d540]{color:#5dc9a8}.overdue[data-v-2d88d540]{color:#f97f50}.overlay[data-v-2d88d540]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-2d88d540]{padding-left:15px}.padMargin[data-v-2d88d540]{padding-right:15px;padding-left:15px}}.white-bg[data-v-2d88d540]{background-color:#fff}.vertical-top[data-v-2d88d540]{vertical-align:top}.vertical-middle[data-v-2d88d540]{vertical-align:middle}.vertical-center[data-v-2d88d540]{font-size:0;text-align:left}.vertical-center[data-v-2d88d540]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-2d88d540]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-2d88d540]{color:#fff}.swiper-button-next[data-v-2d88d540],.swiper-button-prev[data-v-2d88d540]{background-image:none}.swiper-button-next .iconfont[data-v-2d88d540],.swiper-button-prev .iconfont[data-v-2d88d540]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-2d88d540],.swiper-button-prev .iconfont[data-v-2d88d540]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-2d88d540],.swiper-button-prev .iconfont[data-v-2d88d540]{font-size:11px}}.list-container>li[data-v-2d88d540]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-2d88d540]{padding-bottom:31px}.list-container>li+li[data-v-2d88d540]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-2d88d540]{padding-bottom:15px}.list-container>li+li[data-v-2d88d540]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-2d88d540]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-2d88d540]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-2d88d540]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-2d88d540]{padding-bottom:16px}.has-right-column .calendar[data-v-2d88d540]{width:280px;height:254px}}.view-more[data-v-2d88d540]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-2d88d540]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-2d88d540]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-2d88d540]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-2d88d540]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-2d88d540]{display:none}.view-more .iconfont[data-v-2d88d540]{font-size:10px}}.about-content[data-v-2d88d540]{color:#666}.about-content>p[data-v-2d88d540]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-2d88d540]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-2d88d540]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-2d88d540]{padding-right:10px;padding-left:10px}.about-content>p[data-v-2d88d540]{font-size:13px;line-height:25px}.about-content>p+p[data-v-2d88d540]{margin-top:12px}}.component-menuInner.last1>a[data-v-2d88d540]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-2d88d540]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-2d88d540]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-2d88d540]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-2d88d540]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-2d88d540]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-2d88d540]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-2d88d540]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-2d88d540]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-2d88d540]{color:#5cc8a8}.component-menuInner a[data-v-2d88d540]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-2d88d540]{color:#4daada}.component-menuInner a p[data-v-2d88d540]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-2d88d540]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-2d88d540]{margin-top:20px}.component-menuInner a[data-v-2d88d540]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-2d88d540]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-2d88d540]{font-size:34px}.component-menuInner a p[data-v-2d88d540]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-2d88d540]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-2d88d540]{margin-top:10px}.component-menuInner a[data-v-2d88d540]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-2d88d540]{font-size:19px}.component-menuInner a p[data-v-2d88d540]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-2d88d540]{padding-right:15px;padding-left:15px}}.footer[data-v-2d88d540]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-2d88d540{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-2d88d540]{position:relative}.eventAction[data-v-2d88d540]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-2d88d540 .75s 0s linear infinite;animation:rotate-data-v-2d88d540 .75s 0s linear infinite}.component-book-info[data-v-2d88d540]{display:block;color:#959ca5}.component-book-info .book-cover[data-v-2d88d540]{box-shadow:0 0 35px rgba(0,0,0,.13)}.component-book-info .book-cover>img[data-v-2d88d540]{display:block;width:auto;height:100%;margin:0 auto;object-fit:cover}.component-book-info .book-about[data-v-2d88d540]{position:relative}.component-book-info .book-name[data-v-2d88d540]{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.component-book-info .book-intro[data-v-2d88d540]{position:absolute;bottom:-2px;margin-top:0;margin-bottom:0}.component-book-info .publish-year[data-v-2d88d540]{position:relative;padding-left:16px}.component-book-info .publish-year[data-v-2d88d540]:before{content:\"\";position:absolute;top:50%;left:8px;width:1px;height:12px;margin-top:-6px;background-color:#959ca5}@media only screen and (min-width:768px){.component-book-info[data-v-2d88d540]{height:200px;margin-bottom:40px;cursor:pointer}.component-book-info .book-cover[data-v-2d88d540]{float:left;width:161px;height:100%}.component-book-info .book-cover>img[data-v-2d88d540]{display:block;width:100%;height:100%}.component-book-info .book-about[data-v-2d88d540]{height:100%;margin-left:191px;padding-right:10px}.component-book-info .book-name[data-v-2d88d540]{position:relative;top:-3px;margin-top:0;font-size:18px}.component-book-info .book-author-publish[data-v-2d88d540]{margin-top:-6px}.component-book-info .book-author-publish>p[data-v-2d88d540]{margin-top:6px;margin-bottom:0}.component-book-info .book-intro[data-v-2d88d540]{max-width:100%;height:60px;overflow:hidden;padding-right:10px}.component-book-info .iconfont[data-v-2d88d540]{margin-right:9px}.component-book-info .icon-chubanshe[data-v-2d88d540]{font-size:13px}}@media only screen and (max-width:767px){.component-book-info[data-v-2d88d540]{margin-bottom:18px}.component-book-info .book-cover[data-v-2d88d540]{display:block;width:97px;height:120.5px}.component-book-info .book-name[data-v-2d88d540]{margin-top:12px;margin-bottom:6px;font-size:13px}.component-book-info .book-type[data-v-2d88d540]{font-size:11px;color:#959ca5}}@media only screen and (min-width:768px){.component-recommendedBook[data-v-2d88d540]{padding-top:19px}.component-recommendedBook .search-result-lists[data-v-2d88d540]{margin-bottom:60px}.component-recommendedBook .search-result-lists>li[data-v-2d88d540]{width:50%;float:left;margin-top:30px;padding-bottom:30px;border-bottom:1px solid #e0e5e8}.component-recommendedBook .component-book-info[data-v-2d88d540]{margin-bottom:0}.component-recommendedBook .component-book-info .book-cover img[data-v-2d88d540]{object-fit:cover}}@media only screen and (max-width:768px){.component-recommendedBook .search-result-lists[data-v-2d88d540]{padding-top:19px}.component-recommendedBook .search-result-lists>li[data-v-2d88d540]{width:100%;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e0e5e8}.component-recommendedBook .component-book-info[data-v-2d88d540]{display:flex;align-items:center;padding:0 15px;margin-bottom:0}.component-recommendedBook .component-book-info .book-cover[data-v-2d88d540]{width:97px;height:120.5px}.component-recommendedBook .component-book-info .book-cover img[data-v-2d88d540]{object-fit:cover}.component-recommendedBook .component-book-info .book-about[data-v-2d88d540]{display:flex;flex-direction:column;justify-content:space-between;flex:1;height:120.5px;padding-left:16px;overflow:hidden}.component-recommendedBook .component-book-info .book-name[data-v-2d88d540]{margin-top:0;font-size:15px}.component-recommendedBook .component-book-info .book-intro[data-v-2d88d540]{position:static;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.component-recommendedBook .component-book-info p[data-v-2d88d540]{margin-top:2px;margin-bottom:2px;font-size:11px}.component-recommendedBook .component-book-info .iconfont[data-v-2d88d540]{margin-right:5px;font-size:12px}.component-recommendedBook .component-book-info .icon-user-avatar[data-v-2d88d540]{font-size:14px}}", ""]);

// exports


/***/ })

});
//# sourceMappingURL=19.03df32e0c4361825f2de.js.map