/*! vue-cli-xiaxs */
webpackJsonp([17],{

/***/ "4HiQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('search-key',{on:{"search-key":_vm.search}}),_vm._v(" "),_c('div',{staticClass:"serverguide"},[_c('ul',_vm._l((_vm.guideList),function(item){return _c('li',{key:item.id,staticClass:"guideitem"},[_c('div',{staticClass:"guidedetail"},[_c('div',{staticClass:"guidetitle"},[_c('span',[_vm._v(_vm._s(item.title))]),_vm._v(" "),(item.total>_vm.perPage)?_c('div',{staticClass:"guideall"},[_c('router-link',{attrs:{"to":{name: 'serviceIssueList',query: {n:item.title,q: item.id}}}},[_vm._v("查看全部")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-arrow-right2"})],1):_vm._e()]),_vm._v(" "),_c('ul',{staticClass:"guidelist"},_vm._l((item.guides),function(guide){return _c('li',{key:guide.id},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.goToIssueDetails(guide)}}},[_c('p',[_vm._v(_vm._s(guide.v2))])])])}))])])}))]),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6Lre":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".serverguide[data-v-7e38b0dc]{margin-top:15px}.serverguide>ul[data-v-7e38b0dc]{padding:0}.serverguide .guideitem[data-v-7e38b0dc]{padding-bottom:20px;float:left;list-style:none;width:50%}.serverguide .guideitem[data-v-7e38b0dc]:nth-child(odd){padding-right:10px}.serverguide .guideitem[data-v-7e38b0dc]:nth-child(2n){padding-left:10px}@media only screen and (max-width:767px){.serverguide .guideitem[data-v-7e38b0dc]{background-color:#eef1f3;min-height:60px;width:100%}.serverguide .guideitem[data-v-7e38b0dc]:nth-child(odd){padding-right:0}.serverguide .guideitem[data-v-7e38b0dc]:nth-child(2n){padding-left:0}}.serverguide .guideitem .guidedetail[data-v-7e38b0dc]{min-height:382px;border:1px solid #eee;padding:0 20px 20px}@media only screen and (max-width:767px){.serverguide .guideitem .guidedetail[data-v-7e38b0dc]{padding:0;min-height:40px;border:none;background-color:#fff;padding-left:15px;padding-right:15px}}.serverguide .guideitem .guidedetail .guidetitle[data-v-7e38b0dc]{position:relative;height:60px;line-height:60px}@media only screen and (max-width:767px){.serverguide .guideitem .guidedetail .guidetitle[data-v-7e38b0dc]{height:45px;line-height:45px}}.serverguide .guideitem .guidedetail .guidetitle span[data-v-7e38b0dc]{display:inline-block;width:100%;font-size:20px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:80px}.serverguide .guideitem .guidedetail .guidetitle .guideall[data-v-7e38b0dc]{position:absolute;top:0;right:0}.serverguide .guideitem .guidedetail .guidetitle .guideall a[data-v-7e38b0dc]{text-decoration:none;color:#959ca5}@media only screen and (max-width:767px){.serverguide .guideitem .guidedetail .guidetitle span[data-v-7e38b0dc]{font-size:18px;color:#4474ac}}.serverguide .guideitem .guidedetail .guidelist[data-v-7e38b0dc]{padding:0}.serverguide .guideitem .guidedetail .guidelist li[data-v-7e38b0dc]{list-style:none;border-bottom:1px solid #e0e5e8;line-height:50px;height:50px}@media only screen and (max-width:767px){.serverguide .guideitem .guidedetail .guidelist li[data-v-7e38b0dc]{height:40px;line-height:40px}}.serverguide .guideitem .guidedetail .guidelist li[data-v-7e38b0dc]:first-child{border-top:1px solid #e0e5e8}.serverguide .guideitem .guidedetail .guidelist li a[data-v-7e38b0dc]{display:inline-block;text-decoration:none;width:100%;height:100%}.serverguide .guideitem .guidedetail .guidelist li a p[data-v-7e38b0dc]{display:inline-block;color:#666;margin:0;width:100%;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.serverguide .guideitem .guidedetail .guidelist li a p[data-v-7e38b0dc]{font-size:14px;display:block;height:40px;line-height:40px}}@media only screen and (max-width:767px){.serverguide[data-v-7e38b0dc]{margin-left:-15px;margin-right:-15px}.serverguide>ul li[data-v-7e38b0dc]:last-child{padding-bottom:0}}@media only screen and (min-width:768px){.lend-loading[data-v-7e38b0dc]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-7e38b0dc]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "BXXV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6Lre");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0d13a19b", content, true, {});

/***/ }),

/***/ "bguP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue__ = __webpack_require__("tdnE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e38b0dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceGuideDefault_vue__ = __webpack_require__("4HiQ");
function injectStyle (ssrContext) {
  __webpack_require__("BXXV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e38b0dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuideDefault_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e38b0dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceGuideDefault_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tdnE":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("J/VT"), __webpack_require__("YaEn"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/searchKey"), require("../router"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.searchKey, global.router, global.api);
    global.serviceGuideDefault = mod.exports;
  }
})(this, function (module, exports, _searchKey, _router, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _searchKey2 = _interopRequireDefault(_searchKey);

  var _router2 = _interopRequireDefault(_router);

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
  //
  //
  //
  //
  //
  //

  exports.default = {
    name: "serviceGuideDefault",

    data: function data() {
      return {
        keywords: "", // 搜索关键字
        guideList: [], // 指南列表
        perPage: 6,
        issueList: {}, // 存储指南id信息，从此页跳转到详情时，根据id导航
        loading: true
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      searchKey: _searchKey2.default
    },

    computed: {},

    mounted: function mounted() {
      this.getGuideList();
    },


    methods: {
      search: function search(keywords) {
        // 搜索，跳转到问题搜索页
        // console.log(keywords);
        this.$router.push({
          name: 'serviceIssueSearch',
          query: {
            kw: keywords
          }
        });
      },
      getGuideList: function getGuideList() {
        var _this = this;

        // 获取问题列表，并缓存起来
        // this.ls.removeItem('issueList');
        this.loading = true;
        this.issueList = {};
        var guidelist = [];
        var qid = [{
          id: 'wechat',
          title: '常见问题'
        }, {
          id: '服务需知',
          title: '服务需知'
        }, {
          id: 'wechat',
          title: '常见问题'
        }, {
          id: '服务需知',
          title: '服务需知'
        }];

        var _loop = function _loop(i) {
          _api.IssueService.getIssueList(qid[i].id, 1, 6).then(function (data) {
            var temp = {
              title: qid[i].title,
              total: data.result.totalrows,
              id: qid[i].id,
              guides: data.result.datas
              // this.issueList[temp.id] = [];
              // temp.guides.map((item)=> {
              //   this.issueList[temp.id].push(item.id);
              // })
            };guidelist.push(temp);
          }).catch(function (error) {
            if (error === '10001') {
              var t = setTimeout(function () {
                self.getGuideList();
                clearTimeout(t);
              }, 500);
            } else {
              _this.loading = false;
            }
          });
        };

        for (var i = 0; i < qid.length; i++) {
          _loop(i);
        }
        // console.log(this.issueList);
        this.loading = false;
        this.guideList = guidelist;
      },
      goToIssueDetails: function goToIssueDetails(guide) {
        // 跳转到详情
        // 跳转到详情前，存储导航所需id列表
        // this.issueDetail = {
        //   type: guide.v1
        // };
        // this.ls.setItem('issuedetail', { type: guide.v1 });
        this.$router.push({
          name: 'serviceIssueDetails',
          query: {
            f: '1',
            q: guide.v1,
            issue: guide.id
          }
        });
      }
    }
  };
  module.exports = exports["default"];
});

/***/ })

});
//# sourceMappingURL=17.e090d68f1c12962777e9.js.map