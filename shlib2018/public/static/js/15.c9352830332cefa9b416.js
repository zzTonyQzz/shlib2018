/*! vue-cli-xiaxs */
webpackJsonp([15],{

/***/ "8snM":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("NXlk"), __webpack_require__("J/VT"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/loadMore'), require('../components/searchKey'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loadMore, global.searchKey, global.api);
    global.serviceIssueList = mod.exports;
  }
})(this, function (module, exports, _loadMore, _searchKey, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _loadMore2 = _interopRequireDefault(_loadMore);

  var _searchKey2 = _interopRequireDefault(_searchKey);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var self = null; // 自定义变量存储实例this

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  exports.default = {
    name: "serviceIssueList",

    data: function data() {
      return {
        title: this.$route.query.n || '',
        qid: this.$route.query.q || '',
        allIssueList: [], // 缓存所有问题列表数据
        issueList: [], // 界面显示的数据
        // issueIDList: [], // 缓存id列表，用于在详情页导航
        // keywords: this.$route.query.kw || "",
        curr: 1,
        totalNumb: 0,
        loading: true,
        perPage: 30
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      loadMore: _loadMore2.default,
      searchKey: _searchKey2.default
    },

    computed: {},

    mounted: function mounted() {
      this.getAllIssueList(1);
    },


    methods: {
      pageChange: function pageChange(index) {
        // pc换页
        window.scrollTo(0, 0);
        this.issueList = this.getIssueList(index);
      },
      loadMore: function loadMore(index) {
        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          return;
        } else {
          // this.loading = true;
          this.issueList = this.issueList.concat(this.getIssueList(index));
        }
      },
      getIssueList: function getIssueList(index) {
        // 获取每页数据
        this.curr = index;
        return this.allIssueList.slice((index - 1) * this.perPage, index * this.perPage);
      },
      getAllIssueList: function getAllIssueList(index) {
        var _this = this;

        // 获取所有问题列表，缓存起来
        // this.ls.removeItem('issueList');
        this.loading = true;
        _api.IssueService.getIssueList(this.qid, index, 10000).then(function (data) {
          _this.totalNumb = Math.ceil(data.result.totalrows / _this.perPage);
          _this.loading = false;
          _this.allIssueList = data.result.datas;
          // this.allIssueList.map((item) => {
          //   this.issueIDList.push(item.id);  // 存储id列表
          // });
          _this.issueList = _this.getIssueList(1);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getAllIssueList(1);
              clearTimeout(t);
            }, 500);
          } else {
            _this.loading = false;
          }
        });
      },
      search: function search(keywords) {
        // 搜索，跳转到问题搜索页
        this.$router.push({
          name: 'serviceIssueSearch',
          query: {
            kw: keywords
          }
        });
      },
      goToIssueDetail: function goToIssueDetail(id) {
        // this.ls.setItem('issueList', this.issueIDList);
        this.$router.push({
          name: 'serviceIssueDetails',
          query: {
            f: '2',
            n: this.title,
            q: this.qid,
            issue: id
          }
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "BMqL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('search-key',{on:{"search-key":_vm.search}}),_vm._v(" "),_c('div',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"list"},_vm._l((_vm.issueList),function(item){return _c('li',{key:item.id},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.goToIssueDetail(item.id)}}},[_c('p',[_vm._v(_vm._s(item.v2))])])])}))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}],staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}}),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NacQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue__ = __webpack_require__("8snM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b9d7076_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueList_vue__ = __webpack_require__("BMqL");
function injectStyle (ssrContext) {
  __webpack_require__("OllL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b9d7076"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b9d7076_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "OllL":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aLRl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e12a6032", content, true, {});

/***/ }),

/***/ "aLRl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".title[data-v-3b9d7076]{position:relative;height:60px;line-height:60px;font-size:20px}.title .iconfont[data-v-3b9d7076]{font-size:22px;color:#5c7bc8}@media only screen and (max-width:767px){.title[data-v-3b9d7076]{height:50px;line-height:50px}}.list[data-v-3b9d7076]{box-sizing:border-box;padding-left:0}.list li[data-v-3b9d7076]:first-child{border-top:1px solid #e0e5e8}.list li[data-v-3b9d7076]{position:relative;border-bottom:1px solid #e0e5e8;line-height:60px;height:60px}@media only screen and (max-width:767px){.list li[data-v-3b9d7076]{line-height:40px;height:40px}}.list li a[data-v-3b9d7076]{display:inline-block;text-decoration:none;width:100%;height:60px;color:#666}@media only screen and (max-width:767px){.list li a[data-v-3b9d7076]{line-height:40px;height:40px}}.list li a p[data-v-3b9d7076]{display:inline-block;width:100%;padding-right:20px;font-size:16px;color:#666;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.list li a p[data-v-3b9d7076]{padding-right:0;font-size:14px}}.paging[data-v-3b9d7076]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-3b9d7076]{display:none}}li[data-v-3b9d7076]{list-style:none}@media only screen and (min-width:768px){.lend-loading[data-v-3b9d7076]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-3b9d7076]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ })

});
//# sourceMappingURL=15.c9352830332cefa9b416.js.map