/*! vue-cli-xiaxs */
webpackJsonp([14],{

/***/ "7CUH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue__ = __webpack_require__("noGF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a59094e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_weiWeek_vue__ = __webpack_require__("QlVp");
function injectStyle (ssrContext) {
  __webpack_require__("z/mW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8a59094e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_weiWeek_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a59094e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_weiWeek_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9MMd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".booklist[data-v-8a59094e]{padding-left:0;margin-left:-25px;margin-right:-25px}.booklist .book[data-v-8a59094e]{width:20%;margin-bottom:40px;padding:0 25px}@media only screen and (max-width:767px){.booklist .book[data-v-8a59094e]{width:33.333333%;margin-bottom:20px;padding:0 15px}}@media only screen and (max-width:767px){.booklist[data-v-8a59094e]{margin-left:-15px;margin-right:-15px}}.paging[data-v-8a59094e]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-8a59094e]{display:none}}li[data-v-8a59094e]{list-style:none;float:left}li a[data-v-8a59094e]{text-decoration:none}@media only screen and (min-width:768px){.lend-loading[data-v-8a59094e]{position:fixed;top:50%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-8a59094e]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "QlVp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('column-title',{attrs:{"column-title":_vm.weiTitle}}),_vm._v(" "),_c('div',[_c('ul',{staticClass:"booklist clearfix"},_vm._l((_vm.weiList),function(book,index){return _c('li',{key:index,staticClass:"book"},[_c('router-link',{attrs:{"to":{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}}}},[_c('simple-book',{attrs:{"bookinfo":book}})],1)],1)}))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}],staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}}),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "noGF":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("//Fk"), __webpack_require__("NXlk"), __webpack_require__("4fwm"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/promise'), require('../components/loadMore'), require('../components/simpleBook'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.promise, global.loadMore, global.simpleBook, global.api);
    global.weiWeek = mod.exports;
  }
})(this, function (module, exports, _promise, _loadMore, _simpleBook, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _promise2 = _interopRequireDefault(_promise);

  var _loadMore2 = _interopRequireDefault(_loadMore);

  var _simpleBook2 = _interopRequireDefault(_simpleBook);

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
    name: "weiWeek",

    data: function data() {
      return {
        weiTitle: "微期刊",
        weiList: [],
        curr: 1,
        totalNumb: 0,
        loading: true,
        perPage: 30,
        isMob: this.$store.state.isMobile ? 'mobile' : 'all'
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      loadMore: _loadMore2.default,
      simpleBook: _simpleBook2.default
    },

    computed: {},

    mounted: function mounted() {
      this.pageChange(1);
    },


    methods: {
      loadMore: function loadMore(index) {
        var _this = this;

        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          return;
        } else {
          this.curr = index;
          // this.loading = true;
          this.getWeiList(index).then(function (data) {
            _this.weiList = _this.weiList.concat(data);
            // this.loading = false;
          }).catch(function (error) {
            if (error === '10001') {
              var t = setTimeout(function () {
                self.loadMore(1);
                clearTimeout(t);
              }, 500);
            } else {
              _this.loading = false;
            }
          });
        }
      },
      pageChange: function pageChange(index) {
        var _this2 = this;

        //PC翻页
        // this.loading = true;
        // window.scrollTo(0,0);
        this.getWeiList(index).then(function (data) {
          _this2.weiList = data;
          window.scrollTo(0, 0);
          // this.loading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.pageChange(1);
              clearTimeout(t);
            }, 500);
          } else {
            _this2.loading = false;
          }
        });
      },
      getWeiList: function getWeiList(index) {
        var _this3 = this;

        // 获取微期刊数据
        this.loading = true;
        var k = {
          source: '',
          keyword: '',
          classtype: '',
          page: index,
          pagesize: this.perPage,
          viewtype: this.isMob
        };
        return _api.ebookSearch.magazineSearch(k).then(function (data) {
          _this3.curr = index;
          _this3.totalNumb = Math.ceil(data.result.total / _this3.perPage);
          _this3.loading = false;
          return _promise2.default.resolve(_this3.resDataHandel(data.result.mags));
        }).catch(function (error) {
          return _promise2.default.reject(error);
        });
      },
      resDataHandel: function resDataHandel(data) {
        // 返回数据二次处理，以适合simplebook的格式
        var tempList = [];
        data.forEach(function (item) {
          tempList.push({
            bid: item.magid,
            // fid: item.magid,
            cover: item.cover,
            title: item.title,
            type: '',
            pace: ''
          });
        });

        return tempList;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "z/mW":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9MMd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("bb6af17c", content, true, {});

/***/ })

});
//# sourceMappingURL=14.892368b526d1e1b5f495.js.map