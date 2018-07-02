/*! vue-cli-xiaxs */
webpackJsonp([18],{

/***/ "/f9N":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("GO0Q");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("064a07cc", content, true, {});

/***/ }),

/***/ "CAH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue__ = __webpack_require__("IZZq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d96b3c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedPastDefault_vue__ = __webpack_require__("lyRZ");
function injectStyle (ssrContext) {
  __webpack_require__("/f9N")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d96b3c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPastDefault_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d96b3c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedPastDefault_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GO0Q":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".list[data-v-2d96b3c6]{box-sizing:border-box;padding-left:0}.list li[data-v-2d96b3c6]{position:relative;border-bottom:1px solid #e0e5e8;line-height:60px;height:60px}@media only screen and (max-width:767px){.list li[data-v-2d96b3c6]{line-height:40px;height:40px}}.list li a[data-v-2d96b3c6]{display:inline-block;text-decoration:none;width:100%;height:60px;color:#666}@media only screen and (max-width:767px){.list li a[data-v-2d96b3c6]{line-height:40px;height:40px}}.list li a .unit[data-v-2d96b3c6]{position:absolute;width:85px;font-size:16px;color:#666;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.list li a .unit[data-v-2d96b3c6]{color:#4474ac;font-size:14px}}.list li a p[data-v-2d96b3c6]{display:inline-block;width:100%;padding-right:20px;padding-left:85px;font-size:16px;color:#666;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list li a p[data-v-2d96b3c6]:before{content:\"|\";padding-right:10px}@media only screen and (max-width:767px){.list li a p[data-v-2d96b3c6]{padding-right:0;font-size:14px}}.paging[data-v-2d96b3c6]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-2d96b3c6]{display:none}}li[data-v-2d96b3c6]{list-style:none}", ""]);

// exports


/***/ }),

/***/ "IZZq":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("NXlk"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/loadMore"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loadMore, global.api);
    global.recommendedPastDefault = mod.exports;
  }
})(this, function (module, exports, _loadMore, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "recommendedPastDefault",

    data: function data() {
      return {
        weeklyTitle: "每周推荐",
        pastList: [], // 页面显示数据
        allPastList: [], // 缓存所有数据，接口没有分页，一次获取所有数据
        curr: 1,
        totalNumb: 0,
        loading: true,
        perPage: 30
        // maxId: 0 // 最新一季id
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
      this.getAllPastList();
    },


    methods: {
      pageChange: function pageChange(index) {
        // pc换页
        this.curr = index;
        this.pastList = this.getPastList(index);
        window.scrollTo(0, 0);
      },
      loadMore: function loadMore(index) {
        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          return;
          // this.pastList = this.pastList.concat([]);
        } else {
          this.curr = index;
          // this.loading = true;
          this.pastList = this.pastList.concat(this.getPastList(index));
          // this.loading = false;
        }
      },
      getPastList: function getPastList(index) {
        // 分页获取列表
        return this.allPastList.slice((index - 1) * this.perPage, index * this.perPage);
      },
      getAllPastList: function getAllPastList() {
        var _this = this;

        // 获取所有数据(接口没有分页)
        this.loading = true;
        _api.resommended.getWeeklyPastList().then(function (data) {
          _this.allPastList = data.result.datas;
          if (!_this.allPastList.length) {
            return;
            //this.maxId = this.allPastList[0].v2;
          }
          _this.totalNumb = Math.ceil(_this.allPastList.length / _this.perPage);
          _this.pastList = _this.getPastList(1); // 初始化第一页数据
          _this.loading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              _this.getAllPastList();
              clearTimeout(t);
            }, 500);
          }
        });
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "lyRZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('column-title',{attrs:{"column-title":_vm.weeklyTitle}}),_vm._v(" "),_c('div',[_c('ul',{staticClass:"list"},_vm._l((_vm.pastList),function(item,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{path: ("/eBook/recommendedPast/recommended?sid=" + (item.v2))}}},[_c('span',{staticClass:"unit"},[_vm._v("\n            第"+_vm._s(item.v2)+"期\n          ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.v3))])])],1)}))]),_vm._v(" "),_c('div',{staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=18.f375ec3ed3ac2bea9f9f.js.map