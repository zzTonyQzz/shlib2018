/*! vue-cli-xiaxs */
webpackJsonp([2],{

/***/ "/p5J":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("UaV9"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/rate'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.rate, global.api);
    global.bookDetailsHeader = mod.exports;
  }
})(this, function (module, exports, _rate, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _rate2 = _interopRequireDefault(_rate);

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

  var self = null; // 自定义变量存储实例this

  // components


  // api request
  exports.default = {
    name: "bookDetailsHeader",

    data: function data() {
      return {
        routeParams: {},
        showNote: false,
        noteMsg: '',
        type: this.$route.query.type
      };
    },


    props: {
      summaryInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      showLendType: {
        type: Boolean,
        default: false
      },
      showActionBtn: {
        type: Boolean,
        default: false
      }
    },

    created: function created() {
      self = this;
      self.routeParams = self.$route.query;
    },


    components: {
      rate: _rate2.default
    },

    methods: {
      addToShelf: function addToShelf() {
        if (!self.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: 'reload'
          });
          self.utils.modalOpenEvent(true);
          return;
        }
        if (!self.summaryInfo.bookName) {
          return;
        }
        // let type = self.routeParams.type;
        if (this.type === 'epub') {
          _api.bookInfoApi.addBookshelf(self.routeParams.bid, self.summaryInfo.bookName).then(function (res) {
            // alert('已加入书架');
            self.showMsg('已加入书架');
          }).catch(function (error) {
            self.showMsg('添加失败');
          });
        } else if (this.type === 'magazine') {
          _api.bookInfoApi.addMagshelf(self.routeParams.bid).then(function (res) {
            self.showMsg('已加入书架');
          }).catch(function (error) {
            self.showMsg('添加失败');
          });
        }
      },
      showMsg: function showMsg(msg) {
        // 显示提示信息
        self.noteMsg = msg;
        self.showNote = true;
        var t = setTimeout(function () {
          self.showNote = false;
          clearTimeout(t);
        }, 2000);
      },
      lendType: function lendType(type) {
        // revertType 为全局注册组件, 位置: /index.js
        return self.revertType(type);
      },
      goToRead: function goToRead() {
        if (self.routeParams.type === 'magazine') {
          if (!self.ls.getItem('loginUserInfo')) {
            self.commitEvent('changeshowLoginModal', true);
            self.commitEvent('changeTempPath', {
              path: 'done'
            });
            self.utils.modalOpenEvent(true);
            return;
          }
        }
        var url = self.summaryInfo.readUrl;
        if (!url) {
          self.showMsg('暂无阅读地址');
          return;
        }
        window.open(url, '_blank').location;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "3qTy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-pBookDetails"},[_c('bread-crumb'),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('book-details-header',{attrs:{"show-lend-type":_vm.showLendType,"summary-info":_vm.summaryInfo}}),_vm._v(" "),_c('div',{staticClass:"book-about-container padMargin"},[_c('column-title',{attrs:{"column-title":_vm.aboutTitle,"customer-class":_vm.aboutClass}}),_vm._v(" "),_c('div',{staticClass:"about-content",domProps:{"innerHTML":_vm._s(_vm.summaryContent)}})],1),_vm._v(" "),_c('div',{staticClass:"collection padMargin"},[_c('column-title',{attrs:{"column-title":_vm.collectionTitle,"customer-class":_vm.aboutClass}}),_vm._v(" "),_c('div',{staticClass:"collection-container"},[_c('div',{staticClass:"collection-switch"},[_vm._l((_vm.collectionTab),function(item,index){return [_c('a',{key:item.name,class:{active: index === _vm.activeIndex},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.changeStatus(index)}}},[_c('span',[_vm._v(_vm._s(item.name))])])]}),_vm._v(" "),_c('span',{staticClass:"collection-filter",on:{"click":_vm.filterModalHandler}},[_c('i',{staticClass:"iconfont icon-filter"})])],2),_vm._v(" "),_c('div',{staticClass:"collection-state"},[_vm._v("复本／藏书记录")]),_vm._v(" "),_c('table',{staticClass:"table-collection"},[_c('thead',[_c('tr',{class:{'show-header-content': _vm.headerOtherShow}},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('th',[_vm._v("状态")]),_vm._v(" "),_c('th',[_vm._v("应还日期")]),_vm._v(" "),(_vm.isMobile)?_c('th',{staticClass:"mobile-view-more",on:{"click":_vm.showHeaderOther}},[_c('i',{staticClass:"iconfont icon-arrow-down2"})]):_vm._e(),_vm._v(" "),(!_vm.isMobile)?_c('th',[_vm._v("馆藏地")]):_vm._e(),_vm._v(" "),(!_vm.isMobile)?_c('th',[_vm._v("条形码")]):_vm._e()])]),_vm._v(" "),_c('tbody',[_vm._l((_vm.museumList),function(item,index){return [_c('tr',{key:index,class:{'show-hide-content': _vm.tdIndex === index}},[_c('td',[_vm._v("\n                    "+_vm._s(item.address)+"\n                    "),_vm._v(" "),_c('div',{staticClass:"mobile-view-content"},[_vm._v(_vm._s(item.location))])]),_vm._v(" "),_c('td',[_vm._v("\n                    "+_vm._s(item.type)+"\n                    "),_vm._v(" "),_c('div',{staticClass:"mobile-view-content"},[_vm._v(_vm._s(item.barcode))])]),_vm._v(" "),_c('td',[_c('span',{staticClass:"current-collection-state",class:item.className},[_vm._v(_vm._s(item.status))])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.returnDate))]),_vm._v(" "),(_vm.isMobile)?_c('td',{staticClass:"mobile-view-more",on:{"click":function($event){_vm.showTdHandler(index)}}},[_c('i',{staticClass:"iconfont icon-arrow-down2"})]):_vm._e(),_vm._v(" "),(!_vm.isMobile)?_c('td',[_vm._v(_vm._s(item.location))]):_vm._e(),_vm._v(" "),(!_vm.isMobile)?_c('td',[_vm._v(_vm._s(item.barcode))]):_vm._e()])]})],2)]),_vm._v(" "),(!_vm.museumList.length&&!_vm.loading)?_c('none-data',{attrs:{"msg":"暂无馆藏信息","custom-style":{'padding-top': '15px'}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pagination-wrap"},[_c('pagination',{ref:"pagination",attrs:{"current":_vm.currentPage,"total":_vm.totalPage},on:{"page-change":_vm.pageChangeHandle}})],1)],1)],1)],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showFilterModal),expression:"showFilterModal"}],staticClass:"collection-filter-modal"},[_c('div',{staticClass:"filter-item"},[_c('div',{staticClass:"filter-type"},[_vm._v("状态")]),_vm._v(" "),_c('div',{staticClass:"allow-select-item"},[_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.state),expression:"state"}],attrs:{"type":"radio","name":"state","value":""},domProps:{"checked":_vm._q(_vm.state,"")},on:{"change":function($event){_vm.state=""}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("全部")])]),_vm._v(" "),_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.state),expression:"state"}],attrs:{"type":"radio","name":"state","value":"i"},domProps:{"checked":_vm._q(_vm.state,"i")},on:{"change":function($event){_vm.state="i"}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("可借")])])])]),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('div',{staticClass:"filter-type"},[_vm._v("馆藏状态")]),_vm._v(" "),_c('div',{staticClass:"allow-select-item"},[_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.collectionState),expression:"collectionState"}],attrs:{"type":"radio","name":"collection-state","value":""},domProps:{"checked":_vm._q(_vm.collectionState,"")},on:{"change":function($event){_vm.collectionState=""}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("全部副本")])]),_vm._v(" "),_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.collectionState),expression:"collectionState"}],attrs:{"type":"radio","name":"collection-state","value":"pj"},domProps:{"checked":_vm._q(_vm.collectionState,"pj")},on:{"change":function($event){_vm.collectionState="pj"}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("普通外借资料")])]),_vm._v(" "),_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.collectionState),expression:"collectionState"}],attrs:{"type":"radio","name":"collection-state","value":"cj"},domProps:{"checked":_vm._q(_vm.collectionState,"cj")},on:{"change":function($event){_vm.collectionState="cj"}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("参考外借资料")])]),_vm._v(" "),_c('label',{staticClass:"label-checked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.collectionState),expression:"collectionState"}],attrs:{"type":"radio","name":"collection-state","value":"yl"},domProps:{"checked":_vm._q(_vm.collectionState,"yl")},on:{"change":function($event){_vm.collectionState="yl"}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-unselected2"}),_c('span',[_vm._v("仅供阅览资料")])])])]),_vm._v(" "),_c('div',{staticClass:"action-btn"},[_c('button',{staticClass:"btn btn-reset",on:{"click":_vm.resetSelect}},[_vm._v("重置")]),_c('button',{staticClass:"btn btn-confirm",on:{"click":_vm.confirmSelect}},[_vm._v("确认")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showFilterModal),expression:"showFilterModal"}],staticClass:"overlay",on:{"click":_vm.hideFilterModal}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',[_vm._v("\n                  馆址\n                  "),_vm._v(" "),_c('div',{staticClass:"mobile-view-content"},[_vm._v("馆藏地")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',[_vm._v("\n                  馆藏类型\n                  "),_vm._v(" "),_c('div',{staticClass:"mobile-view-content"},[_vm._v("条形码")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "FP/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue__ = __webpack_require__("/p5J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e0a005_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookDetailsHeader_vue__ = __webpack_require__("Oxtg");
function injectStyle (ssrContext) {
  __webpack_require__("MnKA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09e0a005"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookDetailsHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e0a005_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookDetailsHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GmKA":
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
    global.rate = mod.exports;
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
  //

  var self = null; // 自定义变量存储实例this

  var LENGTH = 5;
  var CLS_ON = "on";
  var CLS_HALF = "half";
  var CLS_OFF = "off";

  exports.default = {
    name: "rate",

    data: function data() {
      return {};
    },


    props: {
      score: {
        type: Number,
        default: 0
      }
    },

    created: function created() {
      self = this;
    },


    computed: {
      rateClasses: function rateClasses() {
        var result = [];
        var score = Math.floor(self.score * 2) / 4; // 将数值调整为整数及.5的形式, 例如: 4.3 => 4, 4.6 => 4.5
        var hasDecimal = score % 1 !== 0;
        var integer = Math.floor(score);

        for (var i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }

        if (hasDecimal) {
          result.push(CLS_HALF);
        }

        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }

        return result;
      }
    },

    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "HYu7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue__ = __webpack_require__("MDa7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57957eab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pBookDetails_vue__ = __webpack_require__("3qTy");
function injectStyle (ssrContext) {
  __webpack_require__("Linc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57957eab"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pBookDetails_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57957eab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pBookDetails_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JEVF":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-57957eab]{float:left!important}.pull-right[data-v-57957eab]{float:right!important}.show[data-v-57957eab]{display:block!important}.hidden[data-v-57957eab]{display:none!important;visibility:hidden!important}.invisible[data-v-57957eab]{visibility:hidden}.loading[data-v-57957eab]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-57957eab 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-57957eab{0%{width:2px}to{width:15px}}a[data-v-57957eab]{text-decoration:none}ol[data-v-57957eab],ul[data-v-57957eab]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-57957eab],input[data-v-57957eab]{-webkit-appearance:none}button[data-v-57957eab]{border:none;background:none}input[data-v-57957eab],input[data-v-57957eab]:focus{outline:none}.none-data[data-v-57957eab]{position:relative}.none-data[data-v-57957eab]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-57957eab]{border:1px solid #5390d7;color:#5390d7}.return[data-v-57957eab]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-57957eab]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-57957eab]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-57957eab]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-57957eab]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-57957eab]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-57957eab]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-57957eab]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-57957eab]{color:#42a8dd}.not-overdue[data-v-57957eab]{color:#5dc9a8}.overdue[data-v-57957eab]{color:#f97f50}.overlay[data-v-57957eab]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-57957eab]{padding-left:15px}.padMargin[data-v-57957eab]{padding-right:15px;padding-left:15px}}.white-bg[data-v-57957eab]{background-color:#fff}.vertical-top[data-v-57957eab]{vertical-align:top}.vertical-middle[data-v-57957eab]{vertical-align:middle}.vertical-center[data-v-57957eab]{font-size:0;text-align:left}.vertical-center[data-v-57957eab]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-57957eab]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-57957eab]{color:#fff}.swiper-button-next[data-v-57957eab],.swiper-button-prev[data-v-57957eab]{background-image:none}.swiper-button-next .iconfont[data-v-57957eab],.swiper-button-prev .iconfont[data-v-57957eab]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-57957eab],.swiper-button-prev .iconfont[data-v-57957eab]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-57957eab],.swiper-button-prev .iconfont[data-v-57957eab]{font-size:11px}}.list-container>li[data-v-57957eab]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-57957eab]{padding-bottom:31px}.list-container>li+li[data-v-57957eab]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-57957eab]{padding-bottom:15px}.list-container>li+li[data-v-57957eab]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-57957eab]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-57957eab]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-57957eab]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-57957eab]{padding-bottom:16px}.has-right-column .calendar[data-v-57957eab]{width:280px;height:254px}}.view-more[data-v-57957eab]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-57957eab]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-57957eab]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-57957eab]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-57957eab]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-57957eab]{display:none}.view-more .iconfont[data-v-57957eab]{font-size:10px}}.about-content[data-v-57957eab]{color:#666}.about-content>p[data-v-57957eab]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-57957eab]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-57957eab]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-57957eab]{padding-right:10px;padding-left:10px}.about-content>p[data-v-57957eab]{font-size:13px;line-height:25px}.about-content>p+p[data-v-57957eab]{margin-top:12px}}.component-menuInner.last1>a[data-v-57957eab]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-57957eab]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-57957eab]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-57957eab]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-57957eab]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-57957eab]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-57957eab]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-57957eab]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-57957eab]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-57957eab]{color:#5cc8a8}.component-menuInner a[data-v-57957eab]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-57957eab]{color:#4daada}.component-menuInner a p[data-v-57957eab]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-57957eab]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-57957eab]{margin-top:20px}.component-menuInner a[data-v-57957eab]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-57957eab]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-57957eab]{font-size:34px}.component-menuInner a p[data-v-57957eab]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-57957eab]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-57957eab]{margin-top:10px}.component-menuInner a[data-v-57957eab]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-57957eab]{font-size:19px}.component-menuInner a p[data-v-57957eab]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-57957eab]{padding-right:15px;padding-left:15px}}.footer[data-v-57957eab]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-57957eab{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-57957eab]{position:relative}.eventAction[data-v-57957eab]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-57957eab .75s 0s linear infinite;animation:rotate-data-v-57957eab .75s 0s linear infinite}.overlay[data-v-57957eab]{z-index:10}@media only screen and (max-width:768px){.collection[data-v-57957eab]{padding-right:10px;padding-left:10px}}.collection-switch[data-v-57957eab]{position:relative;border-bottom:1px solid #e0e5e8}.collection-switch>a[data-v-57957eab]{display:inline-block;color:#999}.collection-switch>a span[data-v-57957eab]{display:block;border-bottom:2px solid transparent}.collection-switch>a.active[data-v-57957eab]{color:#4474ac}.collection-switch>a.active span[data-v-57957eab]{border-bottom-color:#4474ac}.collection-switch .collection-filter[data-v-57957eab]{position:absolute;top:0;right:0;width:40px;height:100%;text-align:right;cursor:pointer}.collection-switch .collection-filter .iconfont[data-v-57957eab]{color:#999}@media only screen and (min-width:768px){.collection-switch[data-v-57957eab]{font-size:16px}.collection-switch>a[data-v-57957eab]{position:relative;padding-right:30px;padding-left:30px}.collection-switch>a[data-v-57957eab]:after{content:\"\";position:absolute;top:6px;right:0;width:2px;height:12px;background-color:#979797;opacity:.5}.collection-switch>a[data-v-57957eab]:last-of-type:after{display:none}.collection-switch>a span[data-v-57957eab]{padding-bottom:9px}.collection-switch .collection-filter .iconfont[data-v-57957eab]{font-size:14px}}@media only screen and (max-width:767px){.collection-switch[data-v-57957eab]{margin-top:5px;font-size:13px}.collection-switch>a[data-v-57957eab]:not(:last-of-type){margin-right:18px}.collection-switch>a span[data-v-57957eab]{padding-bottom:6px}.collection-switch .collection-filter .iconfont[data-v-57957eab]{font-size:10px}}.collection-state[data-v-57957eab]{color:#666;text-align:center;background-color:#f2f6fa}@media only screen and (min-width:768px){.collection-state[data-v-57957eab]{height:40px;line-height:40px}}@media only screen and (max-width:767px){.collection-state[data-v-57957eab]{height:29px;line-height:29px;font-size:13px}}.table-collection[data-v-57957eab]{width:100%;color:#666}.table-collection th[data-v-57957eab]{font-weight:400;color:#333}.table-collection td[data-v-57957eab],.table-collection th[data-v-57957eab]{text-align:left}.table-collection thead[data-v-57957eab]{background-color:#f7fafc}.table-collection td span[data-v-57957eab]{padding:1px 3px;font-size:12px;border-radius:3px}.table-collection .mobile-view-content[data-v-57957eab]{display:none}@media only screen and (min-width:768px){.table-collection tbody tr[data-v-57957eab]:nth-child(2n){background-color:#fafcfe}.table-collection td[data-v-57957eab],.table-collection th[data-v-57957eab]{padding:15px 0 15px 40px;border-bottom:1px solid #e0e5e8}}@media only screen and (max-width:767px){.table-collection[data-v-57957eab]{margin-bottom:10px}.table-collection .show-header-content td[data-v-57957eab],.table-collection .show-header-content th[data-v-57957eab],.table-collection .show-hide-content td[data-v-57957eab],.table-collection .show-hide-content th[data-v-57957eab]{padding-bottom:28px}.table-collection .show-header-content .mobile-view-content[data-v-57957eab],.table-collection .show-hide-content .mobile-view-content[data-v-57957eab]{display:block}.table-collection .show-header-content .icon-arrow-down2[data-v-57957eab],.table-collection .show-hide-content .icon-arrow-down2[data-v-57957eab]{font-size:14px}.table-collection .show-header-content .icon-arrow-down2[data-v-57957eab]:before,.table-collection .show-hide-content .icon-arrow-down2[data-v-57957eab]:before{content:\"\\E638\"}.table-collection .mobile-view-content[data-v-57957eab]{position:absolute;margin-top:6px;padding-right:5px}.table-collection tbody[data-v-57957eab]{border-bottom:1px solid #ededed}.table-collection tbody tr[data-v-57957eab]:nth-child(odd){background-color:#fafcfe}.table-collection td[data-v-57957eab],.table-collection th[data-v-57957eab]{padding:8px 0 7px 9.5px;border-top:1px solid #ededed}.table-collection td .iconfont[data-v-57957eab],.table-collection th .iconfont[data-v-57957eab]{color:#999;font-size:13px}.table-collection th[data-v-57957eab]{font-size:12px}.table-collection td[data-v-57957eab]{font-size:11px}.table-collection td span[data-v-57957eab]{padding:0;font-size:11px;border:none}}.none-collection-data[data-v-57957eab]{padding-top:15px}@media only screen and (min-width:768px){.pagination-wrap[data-v-57957eab]{margin-top:61px}}.collection-filter-modal[data-v-57957eab]{position:fixed;top:50%;left:50%;z-index:11;color:#666;background-color:#fff;box-shadow:0 17px 19px 0 rgba(89,99,146,.12)}.collection-filter-modal .filter-type[data-v-57957eab]{color:#999}.collection-filter-modal .filter-item+.filter-item[data-v-57957eab]{border-top:1px solid #eef1f2}.collection-filter-modal .allow-select-item[data-v-57957eab]{overflow:hidden}.collection-filter-modal .label-checked[data-v-57957eab]{float:left;width:50%}.collection-filter-modal .label-checked>input[data-v-57957eab]{position:absolute;left:-9999em;opacity:0}.collection-filter-modal .label-checked>input:checked+i[data-v-57957eab]{color:#5390d7}.collection-filter-modal .label-checked>input:checked+i[data-v-57957eab]:before{content:\"\\E655\"}.collection-filter-modal .label-checked .iconfont[data-v-57957eab]{color:#c1c1c1;vertical-align:middle}.collection-filter-modal .action-btn[data-v-57957eab]{overflow:hidden}.collection-filter-modal .action-btn>.btn[data-v-57957eab]{color:#49709c;border:1px solid #49709c;text-align:center;border-radius:4px}.collection-filter-modal .action-btn .btn-confirm[data-v-57957eab]{background-color:#5390d7;border-color:#5390d7;color:#fff}@media only screen and (min-width:768px){.collection-filter-modal[data-v-57957eab]{width:538px;height:380px;margin-top:-190px;margin-left:-269px;padding:30px 82px 32px;font-size:16px;border-radius:6px}.collection-filter-modal .filter-type[data-v-57957eab]{font-size:22px}.collection-filter-modal .filter-item+.filter-item[data-v-57957eab]{margin-top:1px;padding-top:16px}.collection-filter-modal .allow-select-item[data-v-57957eab]{margin-top:19px}.collection-filter-modal .label-checked[data-v-57957eab]{margin-bottom:11px}.collection-filter-modal .label-checked .iconfont[data-v-57957eab]{font-size:22px;margin-right:11px}.collection-filter-modal .action-btn[data-v-57957eab]{margin-top:25px}.collection-filter-modal .action-btn>.btn[data-v-57957eab]{width:169px;height:48px;line-height:44px;font-size:18px}.collection-filter-modal .action-btn .btn-confirm[data-v-57957eab]{float:right}}@media only screen and (max-width:767px){.collection-filter-modal[data-v-57957eab]{width:85%;padding:12px 20px 15px;transform:translate3d(-50%,-50%,0);border-radius:3px}.collection-filter-modal .filter-type[data-v-57957eab]{margin-bottom:9px;font-size:13px;line-height:15px}.collection-filter-modal .allow-select-item[data-v-57957eab]{padding-bottom:5px;font-size:11px}.collection-filter-modal .filter-item+.filter-item[data-v-57957eab]{padding-top:8px}.collection-filter-modal .label-checked[data-v-57957eab]{margin-bottom:5px}.collection-filter-modal .label-checked>.iconfont[data-v-57957eab]{margin-right:4px;font-size:11px}.collection-filter-modal .action-btn[data-v-57957eab]{margin-top:12px;text-align:center}.collection-filter-modal .action-btn>.btn[data-v-57957eab]{width:88px;height:25px;margin-right:5px;margin-left:5px;line-height:21px}}", ""]);

// exports


/***/ }),

/***/ "KzMr":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dyjH");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("10d1d39a", content, true, {});

/***/ }),

/***/ "Linc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("JEVF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5de18990", content, true, {});

/***/ }),

/***/ "MDa7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("FP/n"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/bookDetailsHeader'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.bookDetailsHeader, global.api);
    global.pBookDetails = mod.exports;
  }
})(this, function (module, exports, _bookDetailsHeader, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bookDetailsHeader2 = _interopRequireDefault(_bookDetailsHeader);

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "pBookDetails",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        routeParams: {},
        showLendType: true,
        aboutTitle: '简介',
        collectionTitle: '馆藏',
        aboutClass: 'about-class',

        // 图书摘要
        summaryInfo: {},

        // 馆藏地切换
        collectionTab: [{
          name: '上海图书馆',
          method: ''
        }, {
          name: '其他馆址',
          method: ''
        }],
        activeIndex: 0,

        // 分页组件配置
        currentPage: 1,
        totalPage: 0,
        pageSize: 30,

        // 馆藏列表
        allData: [],
        museumList: [],
        showFilterModal: false,
        state: '',
        collectionState: '',
        tdIndex: null,
        headerOtherShow: false,
        summaryContent: '',
        loading: true
      };
    },
    created: function created() {
      self = this;
      self.routeParams = self.$route.query;
    },


    components: {
      bookDetailsHeader: _bookDetailsHeader2.default
    },

    mounted: function mounted() {
      self.getIPACInfo();
      self.getBookCollection();
    },


    methods: {
      /** 
       * [getIPACInfo IPAC书目检索]
       * @param {String} id 图书id(bookid)
       */
      getIPACInfo: function getIPACInfo() {
        var bid = self.routeParams.bid;
        if (!bid) {
          this.$router.push({
            name: 'homePage'
          });
          return;
        }
        _api.bookInfoApi.ipacInfo({
          id: bid
        }).then(function (res) {
          var data = res.result.bm[0] || {};
          var imgPath = 'http://218.1.116.104:8080/Image/servlet/ImageServlet?bib=';
          self.summaryInfo = {
            cover: data.bookid ? '' + imgPath + data.bookid : self.$store.state.defaultBookCover,
            bookName: data.title || '暂无书名',
            author: data.author || '暂无作者',
            publish: data.publisher || '暂无出版社',
            publishDate: data.publishdate,
            isbn: data.isbn,
            doubanScore: 0,
            douUrl: 'http://e.library.sh.cn'
          };
          self.summaryContent = data.summary || '暂无简介';
          var isbn = self.summaryInfo.isbn;
          _api.doubanHandle.doubanBookIsbn(isbn).then(function (res) {
            var doubanSummary = res.summary;
            var doubanAlt = res.alt;
            var doubanRating = res.rating;
            var doubanCover = res.image;
            self.summaryInfo.douUrl = doubanAlt;
            if (doubanRating.average != "0.0") self.summaryInfo.doubanScore = doubanRating.average * 1;
            if (doubanSummary) self.summaryContent = doubanSummary + "[<a href='" + doubanAlt + "' target='_blank'>豆瓣数据</a>]";
            if (doubanCover && !self.summaryInfo.cover) self.summaryInfo.cover = doubanCover;
          }).catch(function (error) {
            console.log(error);
          });
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getIPACInfo();
              clearTimeout(t);
            }, 500);
          }
        });
      },

      /** 
       * [getBookCollection 馆藏列表]
       *  返回字段说明:
       *    location: 'sl' => 上海图书馆, 其他非 sl 的为 '其他馆址' 列表
       */
      getBookCollection: function getBookCollection() {
        _api.bookInfoApi.bookcollection(self.routeParams.bid).then(function (res) {
          self.allData = res.result.collections;
          if (!self.allData.length) return;
          self.loading = false;
          // 筛选过滤数据
          self.collectionDataHandle();
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getBookCollection();
              clearTimeout(t);
            }, 500);
          }
        });
      },

      /** 
       * [collectionDataHandle 馆藏列表数据处理]
       * @param {Int} index 0 - 上海图书馆 | 1 - 其他馆址, default = 0
       * @param {String} state
       *   'i' - 可借
       *   '' - 全部
       * 
       * 备注: 暂缺 '馆藏状态' 筛选条件
       */
      collectionDataHandle: function collectionDataHandle() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.activeIndex;

        var clcList = [];
        if (index === 0) {
          clcList = self.allData.filter(function (item) {
            // state 见上方注释说明
            return self.state === 'i' ? self.collectionState === '' ? item.location === 'sl' && item.itemstatus === 'i' : item.location === 'sl' && item.itemstatus === 'i' && item.itemtype === self.collectionState : self.collectionState === '' ? item.location === 'sl' : item.location === 'sl' && item.itemtype === self.collectionState;
          });
        } else {
          clcList = self.allData.filter(function (item) {
            return self.state === 'i' ? self.collectionState === '' ? item.location !== 'sl' && item.itemstatus === 'i' : item.location !== 'sl' && item.itemstatus === 'i' && item.itemtype === self.collectionState : self.collectionState === '' ? item.location !== 'sl' : item.location !== 'sl' && item.itemtype === self.collectionState;
          });
        }
        // console.log(clcList)
        // 计算分页数
        self.totalPage = Math.ceil(clcList.length / self.pageSize);

        var tempList = [];
        var pageData = clcList.slice((self.currentPage - 1) * self.pageSize, self.currentPage * self.pageSize);
        pageData.forEach(function (item) {
          tempList.push({
            address: item.locationcn,
            type: item.itemtypecn,
            status: item.itemstatuscn,
            statusCode: item.itemstatus,
            returnDate: item.duedate && item.duedate.split(' ')[0],
            location: item.collectioncn,
            barcode: item.barcode,
            itemstatus: item.itemstatus,
            className: self.setCurrentState(item.itemstatus)
          });
        });
        // console.log(tempList);
        self.museumList = tempList;
      },

      /** 
       * [pageChangeHandle 分页事件]
       * @param {Int} pageNum 当前页数
       */
      pageChangeHandle: function pageChangeHandle(pageNum) {
        self.currentPage = pageNum;
        self.collectionDataHandle();
      },

      /** 
       * [changeStatus 当前选择馆藏类型]
       * @param {Int} index
       *   0 - 上海图书馆
       *   1 - 其他馆址
       */
      changeStatus: function changeStatus(index) {
        self.activeIndex = index;
        // 重置筛选条件, 如不需要可删除
        // self.resetSelect();
        // 初始化插件默认页码
        self.currentPage = 1;
        self.$refs.pagination.init();
        // 筛选过滤数据
        self.collectionDataHandle(index);
      },

      /** 
       * [setCurrentState 设置当前图书状态]
       * @param {String} status
       *   'i' - 归还
       *   'o' - 借出
       *   '' - 其他统一状态
       */
      setCurrentState: function setCurrentState(status) {
        var state = '';
        switch (status) {
          case 'i':
            state = 'return';
            break;
          case 'o':
            state = 'lend';
            break;
          default:
            state = 'damage';
            break;
        }

        return state;
      },

      /** 
       * [filterModalHandler 显示馆藏筛选Modal]
       */
      filterModalHandler: function filterModalHandler() {
        self.showFilterModal = true;
      },
      resetSelect: function resetSelect() {
        // 重置筛选
        self.state = '';
        self.collectionState = '';
      },
      confirmSelect: function confirmSelect() {
        // 确认选择
        // console.log(this.collectionState);
        // console.log(this.state);
        self.hideFilterModal();
        // 初始化插件默认页码
        self.currentPage = 1;
        self.$refs.pagination.init();
        // 过滤数据
        self.collectionDataHandle();
      },
      hideFilterModal: function hideFilterModal() {
        self.showFilterModal = false;
      },
      showHeaderOther: function showHeaderOther() {
        self.headerOtherShow = !self.headerOtherShow;
      },
      showTdHandler: function showTdHandler(index) {
        var initIndex = self.tdIndex;
        self.tdIndex = initIndex || initIndex === 0 ? null : index;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "MnKA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("yqyU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5378e78a", content, true, {});

/***/ }),

/***/ "Oxtg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"book-intro clearfix"},[_c('dt',[_c('img',{staticClass:"img-responsive",attrs:{"src":_vm.summaryInfo.cover}})]),_vm._v(" "),_c('dd',[_c('p',{staticClass:"book-title"},[_c('em',[_vm._v(_vm._s(_vm.summaryInfo.bookName))]),_vm._v(" "),(_vm.summaryInfo.bookType && _vm.showLendType)?_c('span',{class:_vm.lendType(_vm.summaryInfo.bookType).class},[_vm._v(_vm._s(_vm.lendType(_vm.summaryInfo.bookType).cn))]):_vm._e()]),_vm._v(" "),(_vm.type === 'epub')?_c('div',{staticClass:"view-count-score"},[_c('p',{staticStyle:{"display":"none"}},[_vm._v("点击量 :"),_c('span',[_vm._v(_vm._s(_vm.summaryInfo.viewCount))])]),_vm._v(" "),_c('p',[_vm._v("豆瓣评分 :"),_c('rate',{attrs:{"score":_vm.summaryInfo.doubanScore}})],1),_vm._v(" "),_c('a',{staticClass:"gotoDou",attrs:{"target":"_blank","href":_vm.summaryInfo.douUrl}},[_vm._v("前往豆瓣")])]):_vm._e(),_vm._v(" "),(_vm.type === 'zbook')?_c('div',{staticClass:"view-count-score"},[_c('p',[_vm._v("豆瓣评分 :"),_c('rate',{attrs:{"score":_vm.summaryInfo.doubanScore}})],1),_vm._v(" "),_c('a',{staticClass:"gotoDou",attrs:{"target":"_blank","href":_vm.summaryInfo.douUrl}},[_vm._v("前往豆瓣")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"author-publish-info"},[(_vm.summaryInfo.author)?_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(_vm.summaryInfo.author))]):_vm._e(),_vm._v(" "),(_vm.summaryInfo.publish)?_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(_vm.summaryInfo.publish)+" \n      "),(_vm.summaryInfo.publishDate)?[_vm._v("\n        | "+_vm._s(_vm.summaryInfo.publishDate)+"年\n      ")]:_vm._e()],2):_vm._e()]),_vm._v(" "),(_vm.showActionBtn)?_c('div',{staticClass:"action-btn"},[_c('button',{staticClass:"btn add-shelf",on:{"click":_vm.addToShelf}},[_c('i',{staticClass:"iconfont icon-add-shelf"}),_vm._v("加入书架")]),_c('button',{staticClass:"btn to-read",on:{"click":_vm.goToRead}},[_c('i',{staticClass:"iconfont icon-go-read"}),_vm._v("前往阅读")])]):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"add-note"},[_c('span',{staticClass:"add-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UaV9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue__ = __webpack_require__("GmKA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d8ad437_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_rate_vue__ = __webpack_require__("oVjZ");
function injectStyle (ssrContext) {
  __webpack_require__("KzMr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d8ad437"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_rate_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d8ad437_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_rate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dyjH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".component-rate[data-v-1d8ad437]{display:inline-block;margin-left:5px;font-size:0;vertical-align:-1px}.component-rate .rate-item[data-v-1d8ad437]{display:inline-block;width:12px;height:12px;margin-right:1px;background-repeat:no-repeat;background-size:12px 12px}.component-rate .rate-item[data-v-1d8ad437]:last-child{margin-right:0}.component-rate .rate-item.on[data-v-1d8ad437]{background-image:url(/static/images/rate-full.png)}.component-rate .rate-item.off[data-v-1d8ad437]{background-image:url(/static/images/rate-zero.png)}.component-rate .rate-item.half[data-v-1d8ad437]{background-image:url(/static/images/rate-half.png)}.component-rate .score-num[data-v-1d8ad437]{margin-left:10px;font-size:12px;color:#ffbd3f;vertical-align:1px}", ""]);

// exports


/***/ }),

/***/ "oVjZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-rate"},[_vm._l((_vm.rateClasses),function(itemClass,index){return _c('span',{key:index,staticClass:"rate-item",class:itemClass})}),_vm._v(" "),(_vm.score)?_c('span',{staticClass:"score-num"},[_vm._v(_vm._s(_vm.score.toFixed(1)))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "yqyU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-09e0a005]{float:left!important}.pull-right[data-v-09e0a005]{float:right!important}.show[data-v-09e0a005]{display:block!important}.hidden[data-v-09e0a005]{display:none!important;visibility:hidden!important}.invisible[data-v-09e0a005]{visibility:hidden}.loading[data-v-09e0a005]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-09e0a005 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-09e0a005{0%{width:2px}to{width:15px}}a[data-v-09e0a005]{text-decoration:none}ol[data-v-09e0a005],ul[data-v-09e0a005]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-09e0a005],input[data-v-09e0a005]{-webkit-appearance:none}button[data-v-09e0a005]{border:none;background:none}input[data-v-09e0a005],input[data-v-09e0a005]:focus{outline:none}.none-data[data-v-09e0a005]{position:relative}.none-data[data-v-09e0a005]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-09e0a005]{border:1px solid #5390d7;color:#5390d7}.return[data-v-09e0a005]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-09e0a005]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-09e0a005]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-09e0a005]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-09e0a005]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-09e0a005]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-09e0a005]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-09e0a005]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-09e0a005]{color:#42a8dd}.not-overdue[data-v-09e0a005]{color:#5dc9a8}.overdue[data-v-09e0a005]{color:#f97f50}.overlay[data-v-09e0a005]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-09e0a005]{padding-left:15px}.padMargin[data-v-09e0a005]{padding-right:15px;padding-left:15px}}.white-bg[data-v-09e0a005]{background-color:#fff}.vertical-top[data-v-09e0a005]{vertical-align:top}.vertical-middle[data-v-09e0a005]{vertical-align:middle}.vertical-center[data-v-09e0a005]{font-size:0;text-align:left}.vertical-center[data-v-09e0a005]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-09e0a005]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-09e0a005]{color:#fff}.swiper-button-next[data-v-09e0a005],.swiper-button-prev[data-v-09e0a005]{background-image:none}.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{font-size:11px}}.list-container>li[data-v-09e0a005]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-09e0a005]{padding-bottom:31px}.list-container>li+li[data-v-09e0a005]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-09e0a005]{padding-bottom:15px}.list-container>li+li[data-v-09e0a005]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-09e0a005]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-09e0a005]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-09e0a005]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-09e0a005]{padding-bottom:16px}.has-right-column .calendar[data-v-09e0a005]{width:280px;height:254px}}.view-more[data-v-09e0a005]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-09e0a005]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-09e0a005]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-09e0a005]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-09e0a005]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-09e0a005]{display:none}.view-more .iconfont[data-v-09e0a005]{font-size:10px}}.about-content[data-v-09e0a005]{color:#666}.about-content>p[data-v-09e0a005]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-09e0a005]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-09e0a005]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-09e0a005]{padding-right:10px;padding-left:10px}.about-content>p[data-v-09e0a005]{font-size:13px;line-height:25px}.about-content>p+p[data-v-09e0a005]{margin-top:12px}}.component-menuInner.last1>a[data-v-09e0a005]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-09e0a005]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-09e0a005]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-09e0a005]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-09e0a005]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-09e0a005]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-09e0a005]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-09e0a005]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-09e0a005]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-09e0a005]{color:#5cc8a8}.component-menuInner a[data-v-09e0a005]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-09e0a005]{color:#4daada}.component-menuInner a p[data-v-09e0a005]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-09e0a005]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-09e0a005]{margin-top:20px}.component-menuInner a[data-v-09e0a005]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-09e0a005]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-09e0a005]{font-size:34px}.component-menuInner a p[data-v-09e0a005]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-09e0a005]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-09e0a005]{margin-top:10px}.component-menuInner a[data-v-09e0a005]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-09e0a005]{font-size:19px}.component-menuInner a p[data-v-09e0a005]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-09e0a005]{padding-right:15px;padding-left:15px}}.footer[data-v-09e0a005]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-09e0a005{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-09e0a005]{position:relative}.eventAction[data-v-09e0a005]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-09e0a005 .75s 0s linear infinite;animation:rotate-data-v-09e0a005 .75s 0s linear infinite}.book-intro[data-v-09e0a005]{position:relative;margin-bottom:0;border-bottom:1px solid #e0e5e8}.book-intro .img-responsive[data-v-09e0a005]{display:block;height:100%;object-fit:cover}.book-intro>dt[data-v-09e0a005]{float:left;overflow:hidden}.book-intro>dd[data-v-09e0a005]{position:relative}.book-intro>dd p[data-v-09e0a005]{margin-top:0;margin-bottom:0}.book-intro>dd p+p[data-v-09e0a005]{margin-top:3px}.book-intro .book-title[data-v-09e0a005]{color:#333;font-size:0}.book-intro .view-count-score[data-v-09e0a005]{color:#666}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{color:#fff;display:inline-block;background:#5f9ce3;text-align:center}.book-intro .author-publish-info[data-v-09e0a005]{color:#959ca5}@media only screen and (min-width:768px){.book-intro[data-v-09e0a005]{height:231px;margin-top:4px;padding-bottom:30px}.book-intro>dt[data-v-09e0a005]{width:161px;height:200px}.book-intro>dd[data-v-09e0a005]{height:100%;padding-top:9px;margin-left:191px}.book-intro .book-title>em[data-v-09e0a005]{font-size:18px;font-style:normal}.book-intro .view-count-score[data-v-09e0a005]{margin-top:17px}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{margin-top:16px;width:100px;height:30px;line-height:30px}.book-intro .view-count-score span[data-v-09e0a005]{margin-left:8px}.book-intro .author-publish-info[data-v-09e0a005]{position:absolute;bottom:0}.book-intro .author-publish-info>p[data-v-09e0a005]{margin-bottom:8px}.book-intro .author-publish-info .iconfont[data-v-09e0a005]{margin-right:7px}.book-intro .author-publish-info .icon-chubanshe[data-v-09e0a005]{font-size:13px}}@media only screen and (min-width:768px) and (max-width:1024px){.book-intro[data-v-09e0a005]{margin-right:15px;margin-left:15px}}@media only screen and (max-width:767px){.book-intro[data-v-09e0a005]{padding:14px 10px}.book-intro>dt[data-v-09e0a005]{width:98px;height:121.5px}.book-intro>dd[data-v-09e0a005]:not(.action-btn){margin-left:111px}.book-intro>dd:not(.action-btn) p[data-v-09e0a005]{font-size:11px}.book-intro>dd:not(.action-btn) span[data-v-09e0a005]{margin-left:6px}.book-intro .book-title[data-v-09e0a005]{margin-top:4px}.book-intro .book-title>em[data-v-09e0a005]{font-size:15px;font-style:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.book-intro .view-count-score[data-v-09e0a005]{margin-top:3px}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{width:66px;height:24px;line-height:24px}.book-intro .author-publish-info[data-v-09e0a005]{margin-top:16px}.book-intro .iconfont[data-v-09e0a005]{margin-right:5px;font-size:12px}.book-intro .icon-user-avatar[data-v-09e0a005]{font-size:15px}}.action-btn[data-v-09e0a005]{position:absolute;right:0}.action-btn .btn[data-v-09e0a005]{color:#fff;background-color:#5f9ce3}.action-btn .to-read[data-v-09e0a005]{background-color:#5390d7}@media only screen and (min-width:768px){.action-btn[data-v-09e0a005]{bottom:0}.action-btn .btn[data-v-09e0a005]{width:100px;height:30px;margin-left:20px;line-height:26px;font-size:14px}.action-btn .btn[data-v-09e0a005]:focus,.action-btn .btn[data-v-09e0a005]:hover{opacity:.8}.action-btn .iconfont[data-v-09e0a005]{margin-right:9px;font-size:14px;vertical-align:-1px}}@media only screen and (max-width:767px){.action-btn[data-v-09e0a005]{position:fixed;right:0;bottom:0;left:0;z-index:2}.action-btn .btn[data-v-09e0a005]{width:50%;height:47px;line-height:47px;font-size:15px}.action-btn .btn .iconfont[data-v-09e0a005]{font-size:15px;vertical-align:-1px}}.add-note[data-v-09e0a005]{position:fixed;left:0;width:100%;text-align:center}.add-note .add-msg[data-v-09e0a005]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}", ""]);

// exports


/***/ })

});
//# sourceMappingURL=2.014d7f774c27094d80e1.js.map