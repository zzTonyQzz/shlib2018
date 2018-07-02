/*! vue-cli-xiaxs */
webpackJsonp([8],{

/***/ "0ubi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gcoG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("79c2cd68", content, true, {});

/***/ }),

/***/ "2HvE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('search-key',{attrs:{"words":_vm.keywords},on:{"search-key":_vm.search}}),_vm._v(" "),_c('div',{staticClass:"title"},[_c('div',[_vm._v("共检索到"),_c('span',[_vm._v(_vm._s(_vm.searchlength))]),_vm._v("条结果")])]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"list"},_vm._l((_vm.issueList),function(item){return _c('li',{key:item.id},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.goToIssueDetail(item.id)}}},[_c('p',[_vm._v(_vm._s(item.v2))])])])}))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}],staticClass:"paging"},[_c('pagination',{ref:"issuePager",attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}]},[_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}})],1),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading&&_vm.searchlength<=0),expression:"!loading&&searchlength<=0"}]},[_c('no-more')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CRqm":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("NXlk"), __webpack_require__("LxRC"), __webpack_require__("J/VT"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/loadMore'), require('../components/noMore'), require('../components/searchKey'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loadMore, global.noMore, global.searchKey, global.api);
    global.serviceIssueSearch = mod.exports;
  }
})(this, function (module, exports, _loadMore, _noMore, _searchKey, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _loadMore2 = _interopRequireDefault(_loadMore);

  var _noMore2 = _interopRequireDefault(_noMore);

  var _searchKey2 = _interopRequireDefault(_searchKey);

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "serviceIssueSearch",

    data: function data() {
      return {
        allIssueList: [], // 所有数据缓存列表
        issueList: [], // 页面显示显示的list
        // issueIDList: [], // 缓存id列表，用于在详情页导航
        // keywords: {
        //   k: this.$route.query.kw || ''
        // },   // 搜索关键字
        keywords: this.$route.query.kw || '',
        searchlength: 0, // 总搜索数量
        curr: 1,
        totalNumb: 0,
        loading: true, // 正在搜索
        perPage: 30 // 每页显示
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      loadMore: _loadMore2.default,
      searchKey: _searchKey2.default,
      noMore: _noMore2.default
    },

    computed: {},

    mounted: function mounted() {
      this.getAllSearchIssueList(this.keywords, 1);
    },


    methods: {
      pageChange: function pageChange(index) {
        // pc换页 
        window.scrollTo(0, 0);
        this.issueList = this.getSearchIssueList(index);
      },
      loadMore: function loadMore(index) {
        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          return;
          // this.newsList = this.newsList.concat([]);
        } else {
          // this.loading = true;
          this.issueList = this.issueList.concat(this.getSearchIssueList(index));
        }
      },
      getSearchIssueList: function getSearchIssueList(index) {
        // 获取每页数据
        this.curr = index;
        return this.allIssueList.slice((index - 1) * this.perPage, index * this.perPage);
      },
      getAllSearchIssueList: function getAllSearchIssueList(keywords, index) {
        var _this = this;

        // 获取关键字搜索新闻列表，并缓存起来
        // this.ls.removeItem('issueList');
        this.loading = true;
        _api.IssueService.getSearchIssueList(keywords, index, 10000).then(function (data) {
          _this.searchlength = data.result.totalrows <= 0 ? 0 : data.result.totalrows;
          _this.totalNumb = Math.ceil(_this.searchlength / _this.perPage);
          _this.loading = false;
          _this.allIssueList = data.result.datas;
          // this.allIssueList.map((item) => {
          //   this.issueIDList.push(item.id);  // 存储id列表
          // });
          _this.issueList = _this.getSearchIssueList(1);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getAllSearchIssueList(keywords, index);
              clearTimeout(t);
            }, 500);
          } else {
            _this.loading = false;
          }
        });
      },
      search: function search(words) {
        // 搜索
        this.$router.replace({
          query: { kw: words }
        });

        if (!words || !words.trim()) {
          // 如果没有输入关键词
          // this.keywords.k = "";
          // this.loading = true;
          // this.loading = false;
          // return;
          words = '';
        }
        this.keywords = words.trim();
        this.loading = true;
        this.getAllSearchIssueList(words, 1);
        this.$refs.issuePager.init();
        // this.searchIssueList(this.keywords.k);
      },
      goToIssueDetail: function goToIssueDetail(id) {
        // this.ls.setItem('issueList', this.issueIDList);
        this.$router.push({
          name: 'serviceIssueDetails',
          query: {
            f: '3',
            kw: this.keywords,
            issue: id
          }
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "Et7p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue__ = __webpack_require__("CRqm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37d6c3f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueSearch_vue__ = __webpack_require__("2HvE");
function injectStyle (ssrContext) {
  __webpack_require__("bp4E")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37d6c3f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueSearch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37d6c3f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LxRC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue__ = __webpack_require__("U5ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17f62372_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noMore_vue__ = __webpack_require__("lO9D");
function injectStyle (ssrContext) {
  __webpack_require__("0ubi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17f62372"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noMore_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17f62372_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noMore_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "U5ku":
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
    global.noMore = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "noMore",
    data: function data() {
      return {};
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "bp4E":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("nrx6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6bae2419", content, true, {});

/***/ }),

/***/ "gcoG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".nomore[data-v-17f62372]{text-align:center}.nomore .nonore-ico[data-v-17f62372]{display:inline-block;width:167px;height:260px;background:url(\"/static/images/no-more.png\") no-repeat 50%;background-size:100%}@media only screen and (max-width:767px){.nomore .nonore-ico[data-v-17f62372]{width:100px;height:140px}}.nomore .nomore-words[data-v-17f62372]{margin-top:20px;font-size:20px;color:#666}@media only screen and (max-width:767px){.nomore .nomore-words[data-v-17f62372]{font-size:13px}}", ""]);

// exports


/***/ }),

/***/ "lO9D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nomore"},[_c('div',{staticClass:"nonore-ico"}),_vm._v(" "),_c('div',{staticClass:"nomore-words"},[_vm._v("试着搜索其它检索词")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "nrx6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".title[data-v-37d6c3f0]{position:relative;height:40px;line-height:40px;font-size:14px;color:#999}.title span[data-v-37d6c3f0]{color:#5c7bc8;font-size:16px;padding:0 4px}.list[data-v-37d6c3f0]{box-sizing:border-box;padding-left:0}.list li[data-v-37d6c3f0]:first-child{border-top:1px solid #e0e5e8}.list li[data-v-37d6c3f0]{position:relative;border-bottom:1px solid #e0e5e8;line-height:60px;height:60px}@media only screen and (max-width:767px){.list li[data-v-37d6c3f0]{line-height:40px;height:40px}}.list li a[data-v-37d6c3f0]{display:inline-block;text-decoration:none;width:100%;height:100%;color:#666}.list li a p[data-v-37d6c3f0]{display:inline-block;width:100%;font-size:16px;color:#666;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.list li a p[data-v-37d6c3f0]{font-size:14px}}.paging[data-v-37d6c3f0]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-37d6c3f0]{display:none}}li[data-v-37d6c3f0]{list-style:none}@media only screen and (min-width:768px){.lend-loading[data-v-37d6c3f0]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-37d6c3f0]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ })

});
//# sourceMappingURL=8.093fd642825a1895ba73.js.map