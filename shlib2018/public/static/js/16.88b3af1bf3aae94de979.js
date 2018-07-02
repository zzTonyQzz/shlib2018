/*! vue-cli-xiaxs */
webpackJsonp([16],{

/***/ "4Gva":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("D7Ex"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/nextPrevious"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.nextPrevious, global.api);
    global.serviceIssueDetails = mod.exports;
  }
})(this, function (module, exports, _nextPrevious, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _nextPrevious2 = _interopRequireDefault(_nextPrevious);

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "serviceIssueDetails",

    data: function data() {
      return {
        issueDetail: {
          v2: '',
          v21: ''
        },
        allIssueList: [], // 缓存问题列表
        idList: [], // 用于导航的id列表
        next: 0, // 下一个id
        previous: 0, // 上一个id
        loading: true,
        showNote: false,
        noteMsg: ''
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      nextPrevious: _nextPrevious2.default
    },

    computed: {},

    mounted: function mounted() {
      this.initIssueDetail();
    },


    methods: {
      initIssueDetail: function initIssueDetail() {
        var id = this.$route.query.issue; // 问题id
        var qid = this.$route.query.q; // 类型
        var kw = this.$route.query.kw; // 搜索关键词
        // console.log(kw);
        if (qid && id) {
          this.getAllIssueList(qid, id);
        } else if (kw || kw === '' && id) {
          this.getAllSearchIssueList(kw, id);
        } else {
          this.$router.push({
            name: 'serviceGuideDefault'
          });
        }
      },
      getIssueDetail: function getIssueDetail(id) {
        // 返回数据
        this.issueDetail = this.resDataHandel(this.DataHandel(id, this.allIssueList));
        window.scrollTo(0, 0);
      },
      getAllIssueList: function getAllIssueList(qid, id) {
        var _this = this;

        // 获取所有问题列表，缓存起来
        this.loading = true;
        _api.IssueService.getIssueList(qid, 1, 10000).then(function (data) {
          _this.loading = false;
          _this.allIssueList = data.result.datas;
          _this.allIssueList.map(function (item) {
            _this.idList.push(item.id);
          });
          _this.getIssueDetail(id);
        }).catch(function (error) {
          console.log(error);
        });
      },
      getAllSearchIssueList: function getAllSearchIssueList(keywords, id) {
        var _this2 = this;

        // 获取关键字搜索新闻列表，并缓存起来
        this.loading = true;
        _api.IssueService.getSearchIssueList(keywords, 1, 10000).then(function (data) {
          _this2.loading = false;
          _this2.allIssueList = data.result.datas;
          _this2.allIssueList.map(function (item) {
            _this2.idList.push(item.id);
          });
          _this2.getIssueDetail(id);
        });
      },
      DataHandel: function DataHandel(id, data) {
        var i = this.idList.indexOf(id + '');
        this.previous = this.idList[i - 1] ? this.idList[i - 1] : 'first';
        this.next = this.idList[i + 1] ? this.idList[i + 1] : 'last';
        return data[i];
      },
      resDataHandel: function resDataHandel(data) {
        // 返回数据二次处理
        return {
          title: data.v2,
          content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
        };
      },
      goToIssueList: function goToIssueList() {
        // 返回列表页
        if (!this.$route.query.f) {
          // 跳转到服务指南页
          this.$router.push({
            name: 'serviceGuideDefault'
          });
          return;
        }
        if (this.$route.query.f === '1') {
          // 跳转到服务指南页
          this.$router.push({
            name: 'serviceGuideDefault'
          });
        } else if (this.$route.query.f === '2') {
          // 跳转到服务指南问题列表页
          this.$router.push({
            name: 'serviceIssueList',
            query: {
              n: this.$route.query.n,
              q: this.$route.query.q
            }
          });
        } else if (this.$route.query.f === '3') {
          // 跳转到服务指南问题检索页
          this.$router.push({
            name: 'serviceIssueSearch',
            query: {
              kw: this.$route.query.kw
            }
          });
        } else {
          this.$router.push({
            name: 'serviceGuideDefault'
          });
        }
        // this.$router.go(-1);
      },
      goToNext: function goToNext() {
        // 下一个
        this.naviByID(this.next);
      },
      goToPrevious: function goToPrevious() {
        // 上一个
        this.naviByID(this.previous);
      },
      naviByID: function naviByID(id) {
        if (this.loading) {
          return;
        }
        if (id === 'first') {
          self.showMsg('已经是第一条了');
          return;
        }
        if (id === 'last') {
          self.showMsg('已经是最后一条了');
          return;
        }
        if (this.$route.query.f === '1') {
          this.$router.replace({
            query: {
              f: this.$route.query.f,
              q: this.$route.query.q,
              issue: id
            }
          });
        } else if (this.$route.query.f === '2') {
          this.$router.replace({
            query: {
              f: this.$route.query.f,
              n: this.$route.query.n,
              q: this.$route.query.q,
              issue: id
            }
          });
        } else if (this.$route.query.f === '3') {
          this.$router.replace({
            query: {
              f: this.$route.query.f,
              kw: this.$route.query.kw,
              issue: id
            }
          });
        }
        this.getIssueDetail(id);
      },
      showMsg: function showMsg(msg) {
        // 显示提示信息
        self.noteMsg = msg;
        self.showNote = true;
        var t = setTimeout(function () {
          self.showNote = false;
          clearTimeout(t);
        }, 2000);
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "I1n+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ilmV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("dd71b20a", content, true, {});

/***/ }),

/***/ "ilmV":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".detailtitle[data-v-485aa078]{border-bottom:1px solid #e0e5e8;position:relative}@media only screen and (min-width:768px){.detailtitle[data-v-485aa078]{height:60px;line-height:60px}}@media only screen and (max-width:767px){.detailtitle[data-v-485aa078]{min-height:40px;line-height:40px}}.detailtitle h2[data-v-485aa078]{max-width:100%;display:inline-block;margin:0;padding-right:10px;font-weight:400}@media only screen and (min-width:768px){.detailtitle h2[data-v-485aa078]{height:60px;font-size:22px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}@media only screen and (max-width:767px){.detailtitle h2[data-v-485aa078]{line-height:25px;font-size:16px}}.detailtitle .detaildate[data-v-485aa078]{position:absolute;right:0;top:0;color:#bfbfbf}.content[data-v-485aa078]{padding:20px 0 0;font-size:14px;line-height:28px;color:#666}.content .detailcontent[data-v-485aa078]{height:calc(100vh - 600px);min-height:200px}@media only screen and (max-width:767px){.content .detailcontent[data-v-485aa078]{height:calc(100vh - 198px);overflow:scroll}}.detail-note[data-v-485aa078]{position:fixed;top:50%;left:0;width:100%;text-align:center}.detail-note .detail-msg[data-v-485aa078]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}@media only screen and (min-width:768px){.lend-loading[data-v-485aa078]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-485aa078]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "jxHb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"detailtitle"},[_c('h2',[_vm._v(_vm._s(_vm.issueDetail.title))])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"detailcontent",domProps:{"innerHTML":_vm._s(_vm.issueDetail.content)}})]),_vm._v(" "),_c('next-previous',{on:{"go-list":_vm.goToIssueList,"go-previous":_vm.goToPrevious,"go-next":_vm.goToNext}}),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"detail-note"},[_c('span',{staticClass:"detail-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ot1H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue__ = __webpack_require__("4Gva");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485aa078_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueDetails_vue__ = __webpack_require__("jxHb");
function injectStyle (ssrContext) {
  __webpack_require__("I1n+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-485aa078"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceIssueDetails_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485aa078_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceIssueDetails_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=16.88b3af1bf3aae94de979.js.map