/*! vue-cli-xiaxs */
webpackJsonp([7],{

/***/ "8jpb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("EZvR"), __webpack_require__("Oqyz"), __webpack_require__("4fwm"), __webpack_require__("NXlk"), __webpack_require__("TFx+"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/tabMenu"), require("../components/bookInfo"), require("../components/simpleBook"), require("../components/loadMore"), require("../components/noneSearch"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tabMenu, global.bookInfo, global.simpleBook, global.loadMore, global.noneSearch, global.api);
    global.eBookSearch = mod.exports;
  }
})(this, function (module, exports, _tabMenu, _bookInfo, _simpleBook, _loadMore, _noneSearch, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tabMenu2 = _interopRequireDefault(_tabMenu);

  var _bookInfo2 = _interopRequireDefault(_bookInfo);

  var _simpleBook2 = _interopRequireDefault(_simpleBook);

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
    name: "eBookSearch",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        coverLinks: this.$store.state.bookCoverLinks,
        maxLength: 20, // 每页显示条数/每次加载条数
        // tab
        menuList: [{
          tabName: "图书",
          count: 0
        }, {
          tabName: "期刊",
          count: 0
        }],
        currentActive: 0, // 激活标签
        firstIn: true,
        searchCount: 0,
        keywords: this.getSearchEvent,

        // 搜索结果列表
        bookResult: {
          // 图书
          list: [],
          currentPage: 1, // 当前页
          totalPage: 0, // 总页数
          loading: true, // 正在搜索
          searchCount: 0
          // noMoreData: false, // 无更多数据提示文本
        },
        magazineResult: {
          // 期刊
          list: [],
          currentPage: 1,
          totalPage: 0,
          loading: true,
          searchCount: 0
          // noMoreData: false
        }

        // url传参
        // queryparams: {},
      };
    },
    created: function created() {
      self = this;
      // self.queryparams = self.$route.query;
      // 默认显示搜索框
      console.log('ebook show');
      // self.commitEvent("changeSearchBar", true); // 显示搜索框
    },


    computed: {
      getSearchEvent: function getSearchEvent() {
        return this.$store.state.searchEvent || "";
      }
    },

    watch: {
      getSearchEvent: function getSearchEvent(newVal, oldVal) {
        self.init();
      }
    },

    components: {
      tabMenu: _tabMenu2.default,
      bookInfo: _bookInfo2.default,
      simpleBook: _simpleBook2.default,
      loadMore: _loadMore2.default,
      noneSearch: _noneSearch2.default
    },

    mounted: function mounted() {
      self.commitEvent('changeSearchBar', true);
      self.init();
    },
    destroyed: function destroyed() {
      // console.log('ebook hide')
      self.commitEvent("changeSearchBar", false); // 离开检索页即隐藏搜索框
    },


    methods: {
      init: function init() {
        self.initList();
        self.getEqubSearch();
        self.getMagazineSearch();
      },
      initList: function initList() {
        // 初始化列表
        self.bookResult.list.length = 0;
        self.bookResult.currentPage = 1;
        self.bookResult.totalPage = 0;

        self.magazineResult.list.length = 0;
        self.magazineResult.currentPage = 1;
        self.magazineResult.totalPage = 0;

        // 页码初始化
        this.$refs.bsPager.init();
        this.$refs.msPager.init();
      },
      getEqubSearch: function getEqubSearch() {
        var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (!self.getSearchEvent) {
          self.bookResult.loading = false;
          return;
        }
        self.firstIn = false;
        self.bookResult.loading = true;
        self.bookResult.searchCount = 0;
        // 图书搜索
        _api.ebookSearch.equbSearch({
          keyword: self.getSearchEvent,
          clsType: "",
          page: pageNum
        }).then(function (res) {
          var data = res.result.lst;
          // 获取搜索结果总数量
          self.menuList[0].count = res.result.maxrows;
          if (!data.length) {
            self.bookResult.loading = false;
            self.bookResult.searchCount = 0;
            return;
          }

          var tempArr = [];
          data.forEach(function (item) {
            tempArr.push({
              ftitle: item.ftitle,
              fcover: item.fcover || self.$store.state.defaultBookCover,
              fauthor: item.fauthor,
              fpublisher: item.fpublisher || "暂无出版社信息",
              fpublishdate: item.fpublishdate,
              fbookid: item.fbookid,
              fsummary: self.utils.replacePunctuation(decodeURIComponent(item.fsummary)) || "暂无简介",
              fcommonclass: item.fcommonclass,
              skipUrl: "/eBook/eBookDetails?type=epub&bid=" + item.fbookid
            });
          });
          self.bookResult.loading = false;
          self.bookResult.currentPage = pageNum;
          self.bookResult.totalPage = Math.ceil(res.result.maxrows / self.maxLength);
          self.bookResult.searchCount = res.result.maxrows;
          // Mobile 点击 加载更多 -> 追加数据
          if (self.isMobile) {
            var _self$bookResult$list;

            // self.commitEvent("changeSearchBar", false);
            (_self$bookResult$list = self.bookResult.list).push.apply(_self$bookResult$list, tempArr);
            // if (self.bookResult.currentPage === totalList) {
            //   self.bookResult.noMoreData = true;
            // }
            return;
          }
          self.bookResult.list = tempArr;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getEqubSearch(1);
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getMagazineSearch: function getMagazineSearch(pageNum) {
        if (!self.getSearchEvent) {
          self.magazineResult.loading = false;
          return;
        }
        self.firstIn = false;
        self.magazineResult.loading = true;
        self.magazineResult.searchCount = 0;
        // 期刊搜索
        _api.ebookSearch.magazineSearch({
          source: '',
          classtype: '',
          keyword: self.getSearchEvent,
          viewtype: "all",
          page: pageNum
        }).then(function (res) {
          var data = res.result.mags;
          // 获取搜索结果总数量
          self.menuList[1].count = res.result.total;
          if (!data.length) {
            self.magazineResult.loading = false;
            self.magazineResult.searchCount = 0;
            return;
          }

          // 统一处理搜索结果数据列表
          var tempArr = [];
          data.forEach(function (item) {
            tempArr.push({
              bid: item.magid,
              title: item.title,
              cover: item.cover,
              type: '',
              pace: ''
            });
          });
          self.magazineResult.loading = false;
          self.magazineResult.currentPage = pageNum;
          self.magazineResult.totalPage = Math.ceil(res.result.total / self.maxLength);
          self.magazineResult.searchCount = res.result.total;
          if (self.isMobile) {
            var _self$magazineResult$;

            // self.commitEvent("changeSearchBar", false);
            (_self$magazineResult$ = self.magazineResult.list).push.apply(_self$magazineResult$, tempArr);
            return;
          }
          self.magazineResult.list = tempArr;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getMagazineSearch(1);
              clearTimeout(t);
            }, 500);
          }
        });
      },
      currentHandle: function currentHandle(index) {
        self.currentActive = index;
      },
      pageChange: function pageChange(pageNum) {
        window.scrollTo(0, 0);
        self.tabAction(pageNum);
      },
      tabAction: function tabAction(pageNum) {
        // 电子书, 期刊检索
        switch (self.currentActive) {
          case 0:
            self.getEqubSearch(pageNum);
            break;
          case 1:
            self.getMagazineSearch(pageNum);
            break;
          default:
            break;
        }
      },
      viewMore: function viewMore() {
        self.currentPage++;
        self.getEqubSearch(self.currentPage);
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "97oW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".none-data-tip[data-v-a66a86fe]{text-align:center;color:#999;font-size:14px}@media only screen and (max-width:768px){.none-data-tip[data-v-a66a86fe]{display:table;margin:60px auto 0}}", ""]);

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

/***/ "iiQl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-eBookSearch"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('tab-menu',{attrs:{"menu-list":_vm.menuList,"default-active":_vm.currentActive,"customer-class":"e-book-search"},on:{"currentActive":_vm.currentHandle}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentActive===0),expression:"currentActive===0"}],staticClass:"book"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.firstIn),expression:"!firstIn"}],staticClass:"search-length padMargin"},[_vm._v("共检索到"),_c('span',[_vm._v(_vm._s(_vm.bookResult.searchCount))]),_vm._v("本关于 "+_vm._s(_vm.getSearchEvent)+" 的图书")]),_vm._v(" "),_c('ul',{staticClass:"search-result-lists padMargin clearfix"},_vm._l((_vm.bookResult.list),function(item,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{path: item.skipUrl},"target":"_blank"}},[_c('div',{staticClass:"component-book-info clearfix"},[_c('span',{staticClass:"book-cover"},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.fcover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"book-about"},[_c('h3',{staticClass:"book-name"},[_vm._v(_vm._s(item.ftitle))]),_vm._v(" "),_c('div',{staticClass:"book-author-publish"},[_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(item.fauthor))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(item.fpublisher)+"\n                      "),(item.publishDate)?[_vm._v("\n                        | "+_vm._s(item.publishDate)+"年\n                      ")]:_vm._e()],2)]),_vm._v(" "),_c('p',{staticClass:"book-intro"},[_vm._v(_vm._s(item.fsummary))])])])])],1)})),_vm._v(" "),_c('none-data',{directives:[{name:"show",rawName:"v-show",value:(!_vm.bookResult.list.length && !_vm.bookResult.loading && !_vm.firstIn),expression:"!bookResult.list.length && !bookResult.loading && !firstIn"}],attrs:{"msg":"请搜索其他关键词"}}),_vm._v(" "),(_vm.firstIn)?_c('none-search'):_vm._e(),_vm._v(" "),_c('load-more',{directives:[{name:"show",rawName:"v-show",value:(_vm.bookResult.list.length),expression:"bookResult.list.length"}],attrs:{"current":_vm.bookResult.currentPage,"total":_vm.bookResult.totalPage,"load":_vm.bookResult.loading},on:{"more-data":_vm.viewMore}}),_vm._v(" "),_c('div',{staticClass:"pagination-wrap"},[_c('pagination',{ref:"bsPager",attrs:{"current":_vm.bookResult.currentPage,"total":_vm.bookResult.totalPage},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.bookResult.loading),expression:"bookResult.loading"}],staticClass:"lend-loading"})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentActive===1),expression:"currentActive===1"}],staticClass:"magazine"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.firstIn),expression:"!firstIn"}],staticClass:"search-length padMargin"},[_vm._v("共检索到"),_c('span',[_vm._v(_vm._s(_vm.magazineResult.searchCount))]),_vm._v("本关于 "+_vm._s(_vm.getSearchEvent)+" 的期刊")]),_vm._v(" "),_c('ul',{staticClass:"padMargin search-result-lists clearfix"},_vm._l((_vm.magazineResult.list),function(book){return _c('li',{key:book.bid,staticClass:"mag"},[_c('router-link',{attrs:{"to":{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}},"target":"_blank"}},[_c('simple-book',{attrs:{"bookinfo":book}})],1)],1)})),_vm._v(" "),(!_vm.magazineResult.list.length && !_vm.magazineResult.loading && !_vm.firstIn)?_c('none-data',{attrs:{"msg":"请搜索其他关键词"}}):_vm._e(),_vm._v(" "),(_vm.firstIn)?_c('none-search',{attrs:{"msg":"搜索您感兴趣的期刊"}}):_vm._e(),_vm._v(" "),_c('load-more',{directives:[{name:"show",rawName:"v-show",value:(_vm.magazineResult.list.length),expression:"magazineResult.list.length"}],attrs:{"current":_vm.magazineResult.currentPage,"total":_vm.magazineResult.totalPage,"load":_vm.magazineResult.loading},on:{"more-data":_vm.viewMore}}),_vm._v(" "),_c('div',{staticClass:"pagination-wrap"},[_c('pagination',{ref:"msPager",attrs:{"current":_vm.magazineResult.currentPage,"total":_vm.magazineResult.totalPage},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.magazineResult.loading),expression:"magazineResult.loading"}],staticClass:"lend-loading"})],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ke6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"none-data-tip",style:(_vm.customStyle)},[_vm._v("\n  "+_vm._s(_vm.msg)+"\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qT58":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("te2W");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0d152fa0", content, true, {});

/***/ }),

/***/ "te2W":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-7c29531e]{float:left!important}.pull-right[data-v-7c29531e]{float:right!important}.show[data-v-7c29531e]{display:block!important}.hidden[data-v-7c29531e]{display:none!important;visibility:hidden!important}.invisible[data-v-7c29531e]{visibility:hidden}.loading[data-v-7c29531e]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-7c29531e 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-7c29531e{0%{width:2px}to{width:15px}}a[data-v-7c29531e]{text-decoration:none}ol[data-v-7c29531e],ul[data-v-7c29531e]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-7c29531e],input[data-v-7c29531e]{-webkit-appearance:none}button[data-v-7c29531e]{border:none;background:none}input[data-v-7c29531e],input[data-v-7c29531e]:focus{outline:none}.none-data[data-v-7c29531e]{position:relative}.none-data[data-v-7c29531e]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-7c29531e]{border:1px solid #5390d7;color:#5390d7}.return[data-v-7c29531e]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-7c29531e]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-7c29531e]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-7c29531e]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-7c29531e]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-7c29531e]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-7c29531e]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-7c29531e]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-7c29531e]{color:#42a8dd}.not-overdue[data-v-7c29531e]{color:#5dc9a8}.overdue[data-v-7c29531e]{color:#f97f50}.overlay[data-v-7c29531e]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-7c29531e]{padding-left:15px}.padMargin[data-v-7c29531e]{padding-right:15px;padding-left:15px}}.white-bg[data-v-7c29531e]{background-color:#fff}.vertical-top[data-v-7c29531e]{vertical-align:top}.vertical-middle[data-v-7c29531e]{vertical-align:middle}.vertical-center[data-v-7c29531e]{font-size:0;text-align:left}.vertical-center[data-v-7c29531e]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-7c29531e]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-7c29531e]{color:#fff}.swiper-button-next[data-v-7c29531e],.swiper-button-prev[data-v-7c29531e]{background-image:none}.swiper-button-next .iconfont[data-v-7c29531e],.swiper-button-prev .iconfont[data-v-7c29531e]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-7c29531e],.swiper-button-prev .iconfont[data-v-7c29531e]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-7c29531e],.swiper-button-prev .iconfont[data-v-7c29531e]{font-size:11px}}.list-container>li[data-v-7c29531e]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-7c29531e]{padding-bottom:31px}.list-container>li+li[data-v-7c29531e]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-7c29531e]{padding-bottom:15px}.list-container>li+li[data-v-7c29531e]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-7c29531e]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-7c29531e]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-7c29531e]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-7c29531e]{padding-bottom:16px}.has-right-column .calendar[data-v-7c29531e]{width:280px;height:254px}}.view-more[data-v-7c29531e]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-7c29531e]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-7c29531e]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-7c29531e]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-7c29531e]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-7c29531e]{display:none}.view-more .iconfont[data-v-7c29531e]{font-size:10px}}.about-content[data-v-7c29531e]{color:#666}.about-content>p[data-v-7c29531e]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-7c29531e]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-7c29531e]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-7c29531e]{padding-right:10px;padding-left:10px}.about-content>p[data-v-7c29531e]{font-size:13px;line-height:25px}.about-content>p+p[data-v-7c29531e]{margin-top:12px}}.component-menuInner.last1>a[data-v-7c29531e]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-7c29531e]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-7c29531e]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-7c29531e]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-7c29531e]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-7c29531e]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-7c29531e]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-7c29531e]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-7c29531e]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-7c29531e]{color:#5cc8a8}.component-menuInner a[data-v-7c29531e]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-7c29531e]{color:#4daada}.component-menuInner a p[data-v-7c29531e]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-7c29531e]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-7c29531e]{margin-top:20px}.component-menuInner a[data-v-7c29531e]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-7c29531e]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-7c29531e]{font-size:34px}.component-menuInner a p[data-v-7c29531e]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-7c29531e]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-7c29531e]{margin-top:10px}.component-menuInner a[data-v-7c29531e]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-7c29531e]{font-size:19px}.component-menuInner a p[data-v-7c29531e]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-7c29531e]{padding-right:15px;padding-left:15px}}.footer[data-v-7c29531e]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-7c29531e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-7c29531e]{position:relative}.eventAction[data-v-7c29531e]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-7c29531e .75s 0s linear infinite;animation:rotate-data-v-7c29531e .75s 0s linear infinite}.component-book-info[data-v-7c29531e]{display:block;color:#959ca5}.component-book-info .book-cover[data-v-7c29531e]{box-shadow:0 0 35px rgba(0,0,0,.13)}.component-book-info .book-cover>img[data-v-7c29531e]{display:block;width:auto;height:100%;margin:0 auto}.component-book-info .book-about[data-v-7c29531e]{position:relative}.component-book-info .book-name[data-v-7c29531e]{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.component-book-info .book-intro[data-v-7c29531e]{position:absolute;bottom:-2px;margin-top:0;margin-bottom:0}.component-book-info .publish-year[data-v-7c29531e]{position:relative;padding-left:16px}.component-book-info .publish-year[data-v-7c29531e]:before{content:\"\";position:absolute;top:50%;left:8px;width:1px;height:12px;margin-top:-6px;background-color:#959ca5}@media only screen and (min-width:768px){.component-book-info[data-v-7c29531e]{height:200px;margin-bottom:40px;cursor:pointer}.component-book-info .book-cover[data-v-7c29531e]{float:left;width:161px;height:100%}.component-book-info .book-cover>img[data-v-7c29531e]{display:block;width:100%;height:100%}.component-book-info .book-about[data-v-7c29531e]{height:100%;margin-left:191px}.component-book-info .book-name[data-v-7c29531e]{position:relative;top:-3px;margin-top:0;font-size:18px}.component-book-info .book-author-publish[data-v-7c29531e]{margin-top:-6px}.component-book-info .book-author-publish>p[data-v-7c29531e]{margin-top:6px;margin-bottom:0;white-space:nowrap}.component-book-info .book-intro[data-v-7c29531e]{max-width:100%;max-height:60px;height:60px;overflow:hidden}.component-book-info .iconfont[data-v-7c29531e]{margin-right:9px}.component-book-info .icon-chubanshe[data-v-7c29531e]{font-size:13px}}@media only screen and (max-width:767px){.component-book-info[data-v-7c29531e]{margin-bottom:18px}.component-book-info .book-cover[data-v-7c29531e]{display:block;width:97px;height:120.5px}.component-book-info .book-name[data-v-7c29531e]{margin-top:12px;margin-bottom:6px;font-size:13px}.component-book-info .book-type[data-v-7c29531e]{font-size:11px;color:#959ca5}}.component-eBookSearch .search-length[data-v-7c29531e]{height:30px;line-height:30px;font-size:14px;color:#999}.component-eBookSearch .search-length span[data-v-7c29531e]{color:#5c7bc8;font-size:16px;padding:0 4px}@media only screen and (min-width:768px){.component-eBookSearch[data-v-7c29531e]{padding-top:19px}.component-eBookSearch .search-result-lists[data-v-7c29531e]{margin-top:40px;margin-bottom:60px}.component-eBookSearch .search-result-lists>li+li[data-v-7c29531e]{margin-top:30px;padding-top:30px;border-top:1px solid #e0e5e8}.component-eBookSearch .magazine .mag[data-v-7c29531e]{float:left;width:20%;margin-top:0;margin-bottom:40px;padding:0 25px}.component-eBookSearch .component-book-info[data-v-7c29531e]{margin-bottom:0}}@media only screen and (max-width:768px){.component-eBookSearch .row[data-v-7c29531e]{padding-top:55px}.component-eBookSearch .row .tab-menu[data-v-7c29531e]{position:fixed;left:0;width:100%;z-index:8;background-color:#fff}.component-eBookSearch .row .book[data-v-7c29531e],.component-eBookSearch .row .magazine[data-v-7c29531e]{margin-top:34px;height:calc(100vh - 100px);overflow:scroll}.component-eBookSearch .search-result-lists[data-v-7c29531e]{padding-top:19px}.component-eBookSearch .search-result-lists>li[data-v-7c29531e]{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e0e5e8}.component-eBookSearch .magazine .mag[data-v-7c29531e]{float:left;width:33.333333%;margin-bottom:20px;padding:0 15px}.component-eBookSearch .component-book-info[data-v-7c29531e]{display:flex;align-items:center;padding:0 15px;margin-bottom:0}.component-eBookSearch .component-book-info .book-cover[data-v-7c29531e]{width:97px;height:120.5px}.component-eBookSearch .component-book-info .book-about[data-v-7c29531e]{display:flex;flex-direction:column;justify-content:space-between;flex:1;height:120.5px;padding-left:16px;overflow:hidden}.component-eBookSearch .component-book-info .book-name[data-v-7c29531e]{margin-top:0;font-size:15px}.component-eBookSearch .component-book-info .book-intro[data-v-7c29531e]{position:static;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.component-eBookSearch .component-book-info p[data-v-7c29531e]{margin-top:2px;margin-bottom:2px;font-size:11px}.component-eBookSearch .component-book-info .iconfont[data-v-7c29531e]{margin-right:5px;font-size:12px}.component-eBookSearch .component-book-info .icon-user-avatar[data-v-7c29531e]{font-size:14px}}@media only screen and (min-width:768px){.lend-loading[data-v-7c29531e]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-7c29531e]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "vu7p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue__ = __webpack_require__("8jpb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c29531e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookSearch_vue__ = __webpack_require__("iiQl");
function injectStyle (ssrContext) {
  __webpack_require__("qT58")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c29531e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookSearch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c29531e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=7.387ce59a19034b2607d4.js.map