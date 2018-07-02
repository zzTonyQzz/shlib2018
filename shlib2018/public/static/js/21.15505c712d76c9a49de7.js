/*! vue-cli-xiaxs */
webpackJsonp([21],{

/***/ "2OM/":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("D7Ex"), __webpack_require__("JA8L"), __webpack_require__("YaEn")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/nextPrevious"), require("../server/api"), require("../router"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.nextPrevious, global.api, global.router);
    global.newsDetails = mod.exports;
  }
})(this, function (module, exports, _nextPrevious, _api, _router) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _nextPrevious2 = _interopRequireDefault(_nextPrevious);

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

  exports.default = {
    name: "newsDetails",

    data: function data() {
      return {
        detail: {
          title: '',
          time: '',
          content: '',
          next: 0,
          previous: 0
        },
        showNote: false,
        noteMsg: '',
        loading: true
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
      this.initNewsDetail();
    },


    methods: {
      initNewsDetail: function initNewsDetail() {
        var id = this.$route.query.news;
        if (id) {
          this.getNewsDetail(id);
        } else {
          // this.$router.go(-1);
          this.goToNewsList();
        }
      },
      getNewsDetail: function getNewsDetail(id) {
        var _this = this;

        this.loading = true;
        _api.NewsBulletin.newsDetailNavi(id).then(function (data) {
          var t = data.result.datas;
          if (!t.length) {
            return;
          }
          _this.detail = _this.resDataHandel(_this.DataHandel(id, t));
          _this.loading = false;
          window.scrollTo(0, 0);
        }).catch(function (error) {
          if (error = '10001') {
            var t = setTimeout(function () {
              _this.getNewsDetail(id);
              clearTimeout(t);
            }, 500);
          } else {
            _this.loading = false;
          }
        });
      },
      DataHandel: function DataHandel(id, data) {
        for (var i = 0; i < data.length; i++) {
          var element = data[i];
          if (id === element.id) {
            if (i === 0) {
              this.previous = 'first';
              this.next = data[1].id;
            }
            if (i === 1) {
              this.previous = data[0].id;
              this.next = data.length > 2 ? data[2].id : 'last';
            }
            return element;
          }
        }
      },
      resDataHandel: function resDataHandel(data) {
        // 返回数据二次处理
        return {
          title: data.v1,
          time: data.v3,
          content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
        };
      },
      goToNewsList: function goToNewsList() {
        // 返回列表
        this.$router.push({
          name: 'newsBulletinDefault'
        });
      },
      goToPrevious: function goToPrevious() {
        this.naviByID(this.previous);
      },
      goToNext: function goToNext() {
        this.naviByID(this.next);
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
        this.$router.replace({
          query: { news: id }
        });
        this.getNewsDetail(id);
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

/***/ "Gl/4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"newsdetail"},[_c('div',{staticClass:"newstitle"},[_c('h2',[_vm._v(_vm._s(_vm.detail.title))]),_vm._v(" "),_c('span',{staticClass:"newsdate"},[_vm._v(_vm._s(_vm._f("dateonly")(_vm.detail.time)))])]),_vm._v(" "),_c('div',{staticClass:"newscontent"},[_c('div',{staticClass:"content",domProps:{"innerHTML":_vm._s(_vm.detail.content)}})]),_vm._v(" "),_c('next-previous',{on:{"go-list":_vm.goToNewsList,"go-previous":_vm.goToPrevious,"go-next":_vm.goToNext}}),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"detail-note"},[_c('span',{staticClass:"detail-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "H7l5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kgwn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6717e82a", content, true, {});

/***/ }),

/***/ "kgwn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".newsdetail .newstitle[data-v-dc2ee3d4]{position:relative}@media only screen and (min-width:768px){.newsdetail .newstitle[data-v-dc2ee3d4]{height:60px;line-height:60px;border-bottom:1px solid #e0e5e8}}@media only screen and (max-width:767px){.newsdetail .newstitle[data-v-dc2ee3d4]{margin-top:12px;min-height:40px;line-height:40px;border-bottom:none}}.newsdetail .newstitle h2[data-v-dc2ee3d4]{max-width:100%;display:inline-block;margin:0;font-weight:400}@media only screen and (min-width:768px){.newsdetail .newstitle h2[data-v-dc2ee3d4]{padding-right:80px;height:100%;font-size:22px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}@media only screen and (max-width:767px){.newsdetail .newstitle h2[data-v-dc2ee3d4]{line-height:25px;font-size:16px}}.newsdetail .newstitle .newsdate[data-v-dc2ee3d4]{color:#bfbfbf}@media only screen and (min-width:768px){.newsdetail .newstitle .newsdate[data-v-dc2ee3d4]{position:absolute;right:0;bottom:0}}@media only screen and (max-width:767px){.newsdetail .newstitle .newsdate[data-v-dc2ee3d4]{float:right;width:100%;min-height:20px;line-height:20px;text-align:right;margin-bottom:5px}}.newsdetail .newscontent[data-v-dc2ee3d4]{padding:0 0 5px;font-size:14px;color:#666;line-height:29px}.newsdetail .newscontent[data-v-dc2ee3d4] img{max-width:100%}@media only screen and (max-width:767px){.newsdetail .newscontent .content[data-v-dc2ee3d4]{height:calc(100vh - 215px);width:100%;overflow:scroll}}.newsdetail .detail-note[data-v-dc2ee3d4]{position:fixed;top:50%;left:0;width:100%;text-align:center}.newsdetail .detail-note .detail-msg[data-v-dc2ee3d4]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}@media only screen and (min-width:768px){.newsdetail .lend-loading[data-v-dc2ee3d4]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.newsdetail .lend-loading[data-v-dc2ee3d4]{position:fixed;top:52px;bottom:200px;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "l9xr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue__ = __webpack_require__("2OM/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc2ee3d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetails_vue__ = __webpack_require__("Gl/4");
function injectStyle (ssrContext) {
  __webpack_require__("H7l5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dc2ee3d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetails_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc2ee3d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetails_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=21.15505c712d76c9a49de7.js.map