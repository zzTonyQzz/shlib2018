/*! vue-cli-xiaxs */
webpackJsonp([22],{

/***/ "8+sl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a1Ek");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4954d056", content, true, {});

/***/ }),

/***/ "Nj+k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue__ = __webpack_require__("ZCcp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1996aba6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsBulletinDefault_vue__ = __webpack_require__("dzYo");
function injectStyle (ssrContext) {
  __webpack_require__("8+sl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1996aba6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletinDefault_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1996aba6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsBulletinDefault_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZCcp":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("//Fk"), __webpack_require__("NXlk"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("babel-runtime/core-js/promise"), require("../components/loadMore"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.promise, global.loadMore, global.api);
    global.newsBulletinDefault = mod.exports;
  }
})(this, function (module, exports, _promise, _loadMore, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _promise2 = _interopRequireDefault(_promise);

  var _loadMore2 = _interopRequireDefault(_loadMore);

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "newsBulletinDefault",

    data: function data() {
      return {
        newsList: [],
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
      loadMore: _loadMore2.default
    },

    computed: {},

    mounted: function mounted() {
      this.pageChange(1);
    },


    methods: {
      pageChange: function pageChange(index) {
        var _this = this;

        // pc换页
        this.getNewsList(index).then(function (data) {
          _this.newsList = data;
          window.scrollTo(0, 0);
        });
      },
      loadMore: function loadMore(index) {
        var _this2 = this;

        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          // this.loading = true;
          this.getNewsList(index).then(function (data) {
            _this2.newsList = _this2.newsList.concat(data);
          });
        }
      },
      getNewsList: function getNewsList(index) {
        var _this3 = this;

        // pc获取新闻列表
        this.loading = true;
        return _api.NewsBulletin.getNewsList('新闻', index, this.perPage).then(function (data) {
          _this3.totalNumb = Math.ceil(data.result.totalrows / _this3.perPage);
          _this3.curr = index;
          _this3.loading = false;
          // this.newsList = data.result.datas;
          return _promise2.default.resolve(data.result.datas);
        }).catch(function (error) {
          if (error = '10001') {
            var t = setTimeout(function () {
              _this3.pageChange(1);
              clearTimeout(t);
            }, 500);
          } else {
            _this3.loading = false;
          }
        });
      },

      // getNewsListMob (index) {  // 手机获取新闻列表
      //   NewsBulletin.getNewsList(index, this.perPage, '新闻').then((data) => {
      //         this.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
      //         this.curr = index;
      //         this.newsList = this.newsList.concat(data.result.datas);
      //         this.loading = false;
      //         // return Promise.resolve(data);
      //       }).catch((error) => {
      //         console.log(error);
      //       });
      // },
      goToDetail: function goToDetail(nid) {
        this.$router.push({
          name: 'newsDetails',
          query: { news: nid }
        });
        // this.$router.push("newsBulletin/newsDetails?news=" + id);
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "a1Ek":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".title[data-v-1996aba6]{position:relative;height:60px;line-height:60px;font-size:20px;border-bottom:1px solid #eee}.title .iconfont[data-v-1996aba6]{font-size:22px;color:#5c7bc8}@media only screen and (max-width:767px){.title[data-v-1996aba6]{height:50px;line-height:50px}}.newsList[data-v-1996aba6]{position:relative}.bulletin[data-v-1996aba6]{box-sizing:border-box;padding-left:0}.bulletin li[data-v-1996aba6]{position:relative;border-bottom:1px solid #e0e5e8;line-height:60px;height:60px}.bulletin li a[data-v-1996aba6]{display:inline-block;text-decoration:none;width:100%;height:100%}.bulletin li a p[data-v-1996aba6]{display:inline-block;width:100%;font-size:16px;color:#666;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:100px}@media only screen and (max-width:767px){.bulletin li a p[data-v-1996aba6]{font-size:14px;display:block;height:36px;line-height:36px;padding-right:20px}}.bulletin li a span[data-v-1996aba6]{position:absolute;bottom:0;right:0;color:#bfbfbf;margin-right:25px}@media only screen and (max-width:767px){.bulletin li a span[data-v-1996aba6]{left:0;height:30px;line-height:30px;font-size:13px}}.bulletin li a .iconfont[data-v-1996aba6]{position:absolute;right:0;top:0;color:#999}.paging[data-v-1996aba6]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-1996aba6]{display:none}}li[data-v-1996aba6]{list-style:none}@media only screen and (min-width:768px){.lend-loading[data-v-1996aba6]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-1996aba6]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "dzYo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newsList"},[_c('ul',{staticClass:"bulletin"},_vm._l((_vm.newsList),function(item){return _c('li',{key:item.id},[_c('router-link',{attrs:{"to":{name: 'newsDetails', query: {news:item.id}}}},[_c('p',[_vm._v(_vm._s(item.v1))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm._f("dateonly")(item.v3)))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-arrow-right2"})])],1)})),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}],staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('i',{staticClass:"iconfont icon-bulletin"}),_vm._v(" "),_c('span',[_vm._v("新闻公告")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=22.2ee669205724f2cc5fa7.js.map