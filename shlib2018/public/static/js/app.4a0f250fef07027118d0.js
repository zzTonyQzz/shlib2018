/*! vue-cli-xiaxs */
webpackJsonp([28],{

/***/ "++3x":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "#app{height:100%}", ""]);

// exports


/***/ }),

/***/ "+6nJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "+G6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue__ = __webpack_require__("S6Qc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70e5bb6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ebookSearch_vue__ = __webpack_require__("61cr");
function injectStyle (ssrContext) {
  __webpack_require__("NqWf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-70e5bb6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ebookSearch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70e5bb6e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ebookSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "+YqJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cal-wrapper"},[_c('div',{staticClass:"cal-header"},[_c('div',{staticClass:"l",on:{"click":_vm.preMonth}},[_c('div',{staticClass:"arrow-left icon"},[_vm._v(" ")])]),_vm._v(" "),_c('div',{staticClass:"title"},[_c('span',{ref:"monthsList",staticClass:"cal-title",on:{"click":function($event){_vm.showMonthList()}}},[_vm._v(_vm._s(_vm.curYearMonth.cn))]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.showmonth),expression:"showmonth"}],staticClass:"month-list"},_vm._l((_vm.months),function(m,i){return _c('li',{key:i,class:{active: i === _vm.curIndex},on:{"click":function($event){_vm.chouseMonth(i)}}},[_vm._v(_vm._s(m))])}))]),_vm._v(" "),_c('div',{staticClass:"back",attrs:{"title":"返到当前年月"},on:{"click":_vm.backToCurrent}}),_vm._v(" "),_c('div',{staticClass:"r",on:{"click":_vm.nextMonth}},[_c('div',{staticClass:"arrow-right icon"},[_vm._v(" ")])])]),_vm._v(" "),_c('div',{staticClass:"cal-body"},[(_vm.showWeeks)?_c('div',{staticClass:"weeks"},_vm._l((_vm.i18n[_vm.calendar.options.locale].dayNames),function(dayName,dayIndex){return _c('span',{key:dayIndex,staticClass:"item"},[_vm._v("\n        "+_vm._s(_vm.i18n[_vm.calendar.options.locale].dayNames[(dayIndex + _vm.calendar.options.weekStartOn) % 7])+"\n      ")])})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dates",class:{special: _vm.specialList}},_vm._l((_vm.dayList),function(date,dindex){return _c('div',{key:date.date,staticClass:"item",class:[( _obj = {
          today: date.status ? (_vm.today == date.date) : false,
          event: date.status ? (date.eventCount != undefined) : false
        }, _obj[_vm.calendar.options.className] = (date.date == _vm.selectedDay), _obj ) ].concat( date.customClass)},[_c('p',{staticClass:"date-num",on:{"click":function($event){_vm.handleChangeCurday(date,dindex)}}},[_vm._v("\n          "+_vm._s(date.status ? _vm.initToday(date.date.split('-')) : ' '))]),_vm._v(" "),(date.status ? (_vm.today == date.date) : false)?_c('span',{staticClass:"is-today",style:({backgroundColor: _vm.customColor })}):_vm._e(),_vm._v(" "),(date.status ? (date.eventCount != undefined) : false)?_c('span',{staticClass:"is-event"},[_vm._v(_vm._s(date.eventCount))]):_vm._e()])
var _obj;}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "+f0D":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".simplebook .cover[data-v-73f35286]{width:100%;box-shadow:0 0 35px rgba(0,0,0,.15)}.simplebook .cover img[data-v-73f35286]{display:inline-block;width:100%;height:200px;object-fit:cover}@media only screen and (max-width:767px){.simplebook .cover img[data-v-73f35286]{height:120px}}.simplebook .about .title[data-v-73f35286]{font-size:18px;color:#333;margin:20px 0 8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-height:25px}@media only screen and (max-width:767px){.simplebook .about .title[data-v-73f35286]{font-size:13px;margin:10px 0 2px;min-height:18px}}.simplebook .about .pace[data-v-73f35286],.simplebook .about .type[data-v-73f35286]{font-size:12px;color:#959ca5;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.simplebook .about .pace[data-v-73f35286]{color:#baa37d}}", ""]);

// exports


/***/ }),

/***/ "/KgX":
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
        global.simpleBook = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "simpleBook",

        data: function data() {
            return {
                defaultCover: 'http://e.library.sh.cn/elib.jpg'
            };
        },


        props: ['bookinfo'],

        methods: {}
    };
    module.exports = exports['default'];
});

/***/ }),

/***/ "/hFP":
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
    global.newsBulletin = mod.exports;
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

  exports.default = {
    name: "newsBulletin",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "/vNK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0RN9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("8366ebc0", content, true, {});

/***/ }),

/***/ "/zbv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-index",style:({'padding-bottom': _vm.footerHeight})},[_c('header',{staticClass:"header"},[_c('site-header'),_vm._v(" "),_c('search-area')],1),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('modal-login'),_vm._v(" "),_c('lib-info'),_vm._v(" "),_c('footer',{staticClass:"footer"},[_c('site-footer',{ref:"sitefooter",attrs:{"each-height":_vm.eachHeight},on:{"tabChange":_vm.tabChangeHandler}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("j1ja");
module.exports = __webpack_require__("NHnr");


/***/ }),

/***/ "0JLP":
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
    global.loading = mod.exports;
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
    name: "loading",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "0RN9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-af2dc0ac]{float:left!important}.pull-right[data-v-af2dc0ac]{float:right!important}.show[data-v-af2dc0ac]{display:block!important}.hidden[data-v-af2dc0ac]{display:none!important;visibility:hidden!important}.invisible[data-v-af2dc0ac]{visibility:hidden}.loading[data-v-af2dc0ac]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-af2dc0ac 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-af2dc0ac{0%{width:2px}to{width:15px}}a[data-v-af2dc0ac]{text-decoration:none}ol[data-v-af2dc0ac],ul[data-v-af2dc0ac]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-af2dc0ac],input[data-v-af2dc0ac]{-webkit-appearance:none}button[data-v-af2dc0ac]{border:none;background:none}input[data-v-af2dc0ac],input[data-v-af2dc0ac]:focus{outline:none}.none-data[data-v-af2dc0ac]{position:relative}.none-data[data-v-af2dc0ac]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-af2dc0ac]{border:1px solid #5390d7;color:#5390d7}.return[data-v-af2dc0ac]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-af2dc0ac]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-af2dc0ac]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-af2dc0ac]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-af2dc0ac]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-af2dc0ac]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-af2dc0ac]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-af2dc0ac]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-af2dc0ac]{color:#42a8dd}.not-overdue[data-v-af2dc0ac]{color:#5dc9a8}.overdue[data-v-af2dc0ac]{color:#f97f50}.overlay[data-v-af2dc0ac]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-af2dc0ac]{padding-left:15px}.padMargin[data-v-af2dc0ac]{padding-right:15px;padding-left:15px}}.white-bg[data-v-af2dc0ac]{background-color:#fff}.vertical-top[data-v-af2dc0ac]{vertical-align:top}.vertical-middle[data-v-af2dc0ac]{vertical-align:middle}.vertical-center[data-v-af2dc0ac]{font-size:0;text-align:left}.vertical-center[data-v-af2dc0ac]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-af2dc0ac]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-af2dc0ac]{color:#fff}.swiper-button-next[data-v-af2dc0ac],.swiper-button-prev[data-v-af2dc0ac]{background-image:none}.swiper-button-next .iconfont[data-v-af2dc0ac],.swiper-button-prev .iconfont[data-v-af2dc0ac]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-af2dc0ac],.swiper-button-prev .iconfont[data-v-af2dc0ac]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-af2dc0ac],.swiper-button-prev .iconfont[data-v-af2dc0ac]{font-size:11px}}.list-container>li[data-v-af2dc0ac]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-af2dc0ac]{padding-bottom:31px}.list-container>li+li[data-v-af2dc0ac]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-af2dc0ac]{padding-bottom:15px}.list-container>li+li[data-v-af2dc0ac]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-af2dc0ac]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-af2dc0ac]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-af2dc0ac]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-af2dc0ac]{padding-bottom:16px}.has-right-column .calendar[data-v-af2dc0ac]{width:280px;height:254px}}.view-more[data-v-af2dc0ac]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-af2dc0ac]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-af2dc0ac]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-af2dc0ac]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-af2dc0ac]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-af2dc0ac]{display:none}.view-more .iconfont[data-v-af2dc0ac]{font-size:10px}}.about-content[data-v-af2dc0ac]{color:#666}.about-content>p[data-v-af2dc0ac]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-af2dc0ac]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-af2dc0ac]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-af2dc0ac]{padding-right:10px;padding-left:10px}.about-content>p[data-v-af2dc0ac]{font-size:13px;line-height:25px}.about-content>p+p[data-v-af2dc0ac]{margin-top:12px}}.component-menuInner.last1>a[data-v-af2dc0ac]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-af2dc0ac]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-af2dc0ac]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-af2dc0ac]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-af2dc0ac]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-af2dc0ac]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-af2dc0ac]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-af2dc0ac]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-af2dc0ac]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-af2dc0ac]{color:#5cc8a8}.component-menuInner a[data-v-af2dc0ac]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-af2dc0ac]{color:#4daada}.component-menuInner a p[data-v-af2dc0ac]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-af2dc0ac]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-af2dc0ac]{margin-top:20px}.component-menuInner a[data-v-af2dc0ac]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-af2dc0ac]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-af2dc0ac]{font-size:34px}.component-menuInner a p[data-v-af2dc0ac]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-af2dc0ac]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-af2dc0ac]{margin-top:10px}.component-menuInner a[data-v-af2dc0ac]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-af2dc0ac]{font-size:19px}.component-menuInner a p[data-v-af2dc0ac]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-af2dc0ac]{padding-right:15px;padding-left:15px}}.footer[data-v-af2dc0ac]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-af2dc0ac{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-af2dc0ac]{position:relative}.eventAction[data-v-af2dc0ac]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-af2dc0ac .75s 0s linear infinite;animation:rotate-data-v-af2dc0ac .75s 0s linear infinite}.component-search[data-v-af2dc0ac]{background-color:#4573ab}.search-area[data-v-af2dc0ac]{color:#fff}.search-area .book-search[data-v-af2dc0ac]{position:relative;padding-right:18px;font-weight:400;font-size:13px;cursor:pointer}.search-area .book-search.active[data-v-af2dc0ac]:after{margin-top:-7px;border-color:transparent transparent #fff;border-style:dashed dashed solid}.search-area .book-search[data-v-af2dc0ac]:after{content:\"\";position:absolute;top:50%;right:3px;width:0;height:0;border-width:5px;margin-top:-2px;border-color:#fff transparent transparent;border-style:solid dashed dashed}.search-area .search-select-item[data-v-af2dc0ac]{position:relative}.search-area .search-select-item>.search-list[data-v-af2dc0ac]{position:absolute;left:0;z-index:15;margin-top:5px;margin-bottom:0;background-color:#fff;border-radius:3px;box-shadow:0 10px 24px 0 rgba(115,163,218,.14)}.search-area .search-select-item>.search-list>li[data-v-af2dc0ac]{min-width:88px;padding:8px 7.5px;line-height:19px;color:#666;font-size:13px;cursor:pointer}.search-area .search-select-item>.search-list>li.active[data-v-af2dc0ac],.search-area .search-select-item>.search-list>li[data-v-af2dc0ac]:hover{color:#4d7eb5}.search-area .search-select-item>.search-list>li+li[data-v-af2dc0ac]{border-top:1px solid #eee}.search-area .search-input[data-v-af2dc0ac]{position:relative;padding-left:7px}.search-area .search-input .clear-input[data-v-af2dc0ac],.search-area .search-input .search-icon[data-v-af2dc0ac]{position:absolute;top:50%}.search-area .search-input>input[data-v-af2dc0ac]{width:100%;height:30px;padding:8px 35px 8px 32px;border-radius:30px;font-size:13px;color:#999;line-height:13px;border:none}.search-area .search-btn[data-v-af2dc0ac]{margin-left:3px;outline:none}@media only screen and (min-width:768px){.search-area[data-v-af2dc0ac]{display:table-cell;width:1%;padding-top:20px;padding-bottom:20px}.search-area>.search-btn[data-v-af2dc0ac],.search-area>.search-select-item[data-v-af2dc0ac]{float:left}.search-area .book-search[data-v-af2dc0ac]{font-size:14px}.search-area .book-search.active[data-v-af2dc0ac]:after{margin-top:-10px}.search-area .book-search[data-v-af2dc0ac]:after{right:-2px;border-width:7px}.search-area .search-select-item[data-v-af2dc0ac]{top:8px;z-index:4}.search-area .search-select-item>.search-list>li[data-v-af2dc0ac]{font-size:14px}.search-area .search-input[data-v-af2dc0ac]{padding-left:101px}.search-area .search-input>input[data-v-af2dc0ac]{height:40px;padding:11px 140px 11px 22px}.search-area .search-input .search-icon[data-v-af2dc0ac]{right:0;width:122px;height:40px;padding-left:24px;font-size:14px;line-height:40px;-ms-transform:translateY(-52%);transform:translateY(-52%);cursor:pointer}.search-area .search-input .search-icon[data-v-af2dc0ac]:before{content:\"\";position:absolute;top:7px;bottom:6px;left:0;width:1px;background-color:#c7c7c7}.search-area .search-input .search-icon>i[data-v-af2dc0ac]{color:#4474ac;font-size:18px;vertical-align:middle}.search-area .search-input .search-icon>span[data-v-af2dc0ac]{margin-left:12px;color:#49709c;vertical-align:middle}.search-area .search-input .clear-input[data-v-af2dc0ac]{right:135px;color:#c7ccd0;top:8px;font-size:18px}.search-area .search-btn[data-v-af2dc0ac]{position:absolute;border:none;background-color:none}}@media only screen and (max-width:767px){.search-area[data-v-af2dc0ac]{display:flex;height:55px;padding-right:10px;padding-left:10px;align-items:center;justify-content:space-between;font-size:13px}.search-area .search-input[data-v-af2dc0ac]{flex:1}.search-area .search-input .search-icon[data-v-af2dc0ac]{left:18px;transform:translateY(-40%);font-size:11px;color:#c7c7c7}.search-area .search-input .clear-input[data-v-af2dc0ac]{right:9px;color:#c7ccd0;transform:translateY(-50%)}}@media only screen and (min-width:768px) and (max-width:1024px){.search-area .search-input[data-v-af2dc0ac]{padding-right:15px}}", ""]);

// exports


/***/ }),

/***/ "0eTh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-waterfall-easy",class:_vm.isMobile?'clearfix':'',style:(_vm.isMobile? '':{width:_vm.colWidth*_vm.columnCount+'px',height:_vm.fullHeight+'px',left:'50%',marginLeft: -1*_vm.colWidth*_vm.columnCount/2 +'px'})},_vm._l((_vm.imgsArrC),function(v,i){return _c('div',{key:i,staticClass:"img-box clearfix",style:({padding:_vm.gap/2+'px',width: _vm.isMobile ? '' : _vm.colWidth+'px'})},[_c('div',{staticClass:"img-inner-box"},[_c('a',{attrs:{"href":v.link,"target":"_blank"}},[_c('div',{staticClass:"img-wraper",style:({width:_vm.imgWidthC+'px',height:v.height?v.height+'px':''})},[_c('img',{attrs:{"src":v.src}})]),_vm._v(" "),_c('div',{staticClass:"img-title"},[_c('h3',[_c('a',{attrs:{"href":v.hlink}},[_vm._v(_vm._s(v.head))])])])]),_vm._v(" "),_c('div',{staticClass:"img-info"},[_vm._t("default",null,{index:i,value:v})],2)])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "0nDf":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("7QTg"), __webpack_require__("9IHT"), __webpack_require__("jF92"), __webpack_require__("Oqyz"), __webpack_require__("cn6v"), __webpack_require__("I3lG"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vue-awesome-swiper'), require('../components/vue-event-calendar'), require('../components/activityItem'), require('../components/bookInfo'), require('../components/vue-waterfall-easy.vue'), require('../components/headInfo.vue'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vueAwesomeSwiper, global.vueEventCalendar, global.activityItem, global.bookInfo, global.vueWaterfallEasy, global.headInfo, global.api);
    global.homePage = mod.exports;
  }
})(this, function (module, exports, _vueAwesomeSwiper, _vueEventCalendar, _activityItem, _bookInfo, _vueWaterfallEasy, _headInfo, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _vueEventCalendar2 = _interopRequireDefault(_vueEventCalendar);

  var _activityItem2 = _interopRequireDefault(_activityItem);

  var _bookInfo2 = _interopRequireDefault(_bookInfo);

  var _vueWaterfallEasy2 = _interopRequireDefault(_vueWaterfallEasy);

  var _headInfo2 = _interopRequireDefault(_headInfo);

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

  var self = null; // 自定义变量存储实例this

  // components


  // api request
  exports.default = {
    name: "homePage",

    data: function data() {
      return {
        online: this.$store.state.online,
        isMob: this.$store.state.isMobile,
        swiperOption: {
          loop: true,
          // notNextTick: true,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          },
          paginationClickable: true
        },
        carouselList: [], // 轮播列表

        // 活动中心
        activityTitle: '活动中心',
        activityList: [],
        // allActivityList: [],
        eventsList: [],
        clPanelInit: false,
        loading: true,
        // 活动中心 - End

        weeklyTitle: '每周推荐',
        weeklyList: [],

        moreService: '更多服务',
        imgsArr: [], // 瀑布流
        allImgsArr: [],
        // 默认图书封面图片
        defaultCover: 'http://e.library.sh.cn/elib.jpg'
      };
    },
    created: function created() {
      self = this;

      // 首页设置显示全部footer
      self.commitEvent('changeIsIndexPage', true);
    },
    destroyed: function destroyed() {
      self.commitEvent('changeIsIndexPage', false);
    },


    components: {
      swiper: _vueAwesomeSwiper.swiper,
      swiperSlide: _vueAwesomeSwiper.swiperSlide,
      vueEventCalendar: _vueEventCalendar2.default,
      activityItem: _activityItem2.default,
      bookInfo: _bookInfo2.default,
      vueWaterfallEasy: _vueWaterfallEasy2.default,
      headInfo: _headInfo2.default
    },

    computed: {
      swiper: function swiper() {
        return this.$refs.indexSwiper.swiper;
      }
    },

    mounted: function mounted() {
      this.$EventCalendar.resetCurrMonth();
      self.checkLoginTick();
      self.getCarouselFigure();
      self.getEventInfo();
      self.getResommended();
      self.getWaterFallFlow();
    },


    methods: {
      checkLoginTick: function checkLoginTick() {
        // 检查地址栏的登录标记
        // console.log(this.$route.query)
        if (this.$route.query.login) {
          self.checkLogin('/index/myLibrary');
          // return;
        }
      },
      getCarouselFigure: function getCarouselFigure() {
        _api.serverInfo.swiper().then(function (data) {
          self.carouselList = data.datas;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getCarouselFigure();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getWaterFallFlow: function getWaterFallFlow() {
        var _this = this;

        _api.serverInfo.waterFallFlow().then(function (data) {
          _this.allImgsArr = _this.initImgsArr(data.datas);
          self.fetchImgsData(1, 9);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getWaterFallFlow();
              clearTimeout(t);
            }, 500);
          }
        });
      },

      /** 
       * [getEventInfo 活动列表查询]
       * @param {String, Date} start 开始时间
       * @param {String, Date} end 结束时间
       */
      getEventInfo: function getEventInfo() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.utils.getFirstEndDay();
        var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        self.loading = true;
        // 清空活动内容列表
        self.activityList = [];

        _api.activityCenter.getEventsMonth(date.firstDay, date.nextMonthFirstDay).then(function (res) {
          var data = res.result.datas;
          if (!data.length) {
            self.loading = false;
            return;
          }
          self.dataHandle(data, maxLength);
          self.loading = false;
          if (self.clPanelInit) return;
          self.clPanelInit = true;

          self.eventsList = self.utils.getEventsData(data, {
            start: date.firstDay,
            end: date.nextMonthFirstDay
          });
          // console.log(self.eventsList)
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getEventInfo(date);
              clearTimeout(t);
            }, 500);
          } else {
            self.loading = false;
          }
        });
      },

      /** 
       * [dataHandle 统一处理活动数据]
       * @param {Array} data 活动内容列表
       * @param {Number} maxLength 显示活动内容数量, default: 2
       */
      dataHandle: function dataHandle(data) {
        var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        var tempList = [];
        data.forEach(function (item, index) {
          // 首页取两条活动内容展示
          if (index < maxLength) {
            tempList.push({
              id: item.id,
              cover: item.v7,
              title: item.v1,
              type: item.v5,
              isFocus: item.v8 ? item.v8 === 'false' ? false : true : false, // 判断是否已经关注
              organizers: '', // 活动举办单位暂无
              location: item.v6,
              time: self.utils.timerHandle(item.v3, item.v4)
            });
          }
        });

        self.activityList = tempList;
        // self.allActivityList = tempList;
      },

      /** 
       * [getResommended 获取每周推荐内容, 获取默认期数, 一般为7本]
       */
      getResommended: function getResommended() {
        _api.resommended.getWeeklyInfos(7).then(function (res) {
          var data = res.result.datas;
          if (!data.length) return;

          // 筛选最新季期 - 暂使用多次请求的方式
          var lastest = data[0].v2;
          var bookidList = [];
          data.map(function (item) {
            if (item.v2 === lastest) {
              bookidList.push(item.v4);
            }
          });
          var bookidStr = bookidList.join(',');
          // let bookidStr = bookidList.slice(0, 4).join(',');
          _api.bookInfoApi.epubinfo(bookidStr).then(function (res) {
            var inner = res.result.datas;
            if (!self.utils.isEmpty(inner)) {
              var tempArr = inner.map(function (item, index) {
                return {
                  fcover: item.v14 || self.$store.state.defaultBookCover,
                  ftitle: item.v9.replace('=', ' '),
                  fbookid: item.v7,
                  fauthor: item.v13,
                  fpublisher: item.v15,
                  fsummary: decodeURIComponent(item.v24) || '暂无简介信息',
                  fcommonclass: item.v17
                };
              });

              self.weeklyList = tempArr;
            }
          });
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getResommended();
              clearTimeout(t);
            }, 500);
          }
        });
      },

      /** 
       * [handleMonthChanged 事件日历 - 选择日]
       * @param {String, Date} day 日期
       */
      handleDayChanged: function handleDayChanged(day) {
        // 选择 'day'
        var selectDay = day.date;
        // console.log(day)
        var nextDay = self.utils.getDateStr(selectDay, 1);
        // console.log(nextDay);
        // console.dir({
        //   firstDay: selectDay,
        //   nextMonthFirstDay: nextDay
        // })
        self.getEventInfo({
          firstDay: selectDay,
          nextMonthFirstDay: nextDay
        }, 5);
      },

      // 返回当前年月
      backToCurrent: function backToCurrent(month) {
        self.clPanelInit = false;
        self.eventsList = [];
        self.getEventInfo();
      },

      /** 
       * [handleMonthChanged 事件日历 - 选择月]
       * @param {String, Date} month 月份
       */
      handleMonthChanged: function handleMonthChanged(month) {
        // 选择 'month'
        self.clPanelInit = false;
        self.eventsList = [];
        var selectMonth = self.utils.getFirstEndDay(month.en);

        self.getEventInfo({
          firstDay: selectMonth.firstDay,
          nextMonthFirstDay: selectMonth.nextMonthFirstDay
        });
      },
      goToCurrntLending: function goToCurrntLending() {
        // 借阅历史
        if (!self.checkLogin('/index/fullMenu/currentLending', { isActive: 0 })) {
          return;
        }
        self.openNewPage({
          path: '/index/fullMenu/currentLending',
          query: { isActive: 0 }
        });
      },
      goToMyActiveCenter: function goToMyActiveCenter() {
        // 我的活动中心
        if (!self.checkLogin('/index/activityCenter', { isActive: 2 })) {
          return;
        }
        self.openNewPage({
          path: '/index/activityCenter',
          query: { isActive: 2 }
        });
      },

      // 瀑布流数据处理
      initImgsArr: function initImgsArr(data) {
        //num 图片数量
        var arr = [];
        for (var index = 0; index < data.length; index++) {
          var item = data[index];
          var tempObj = {
            src: item.v3 || '/static/images/200-1.png',
            link: item.v4,
            head: item.v5,
            hlink: item.v6,
            info: []
          };
          for (var j = 7; j < 21; j += 2) {
            var element = item['v' + j];
            if (element) {
              tempObj.info.push({
                title: element,
                url: item['v' + (j + 1)]
              });
            }
          }
          arr.push(tempObj);
          // console.log(arr)
        }
        return arr;
      },
      fetchImgsData: function fetchImgsData(index, count) {
        this.imgsArr = this.imgsArr.concat(this.allImgsArr.slice((index - 1) * count, index * count));
      },

      /**
       * 检查登录
       */
      checkLogin: function checkLogin(path, query) {
        // let isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        if (!self.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: path,
            query: query
          });
          self.utils.modalOpenEvent(true);
          return false;
        }
        return true;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "0oWt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loadmore"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currIndex<_vm.total&&_vm.load==false),expression:"currIndex<total&&load==false"}],staticClass:"load",on:{"click":function($event){_vm.loadMore(_vm.currIndex)}}},[_vm._v("加载更多")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.load),expression:"load"}],staticClass:"loading"},[_vm._v("加载...")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currIndex>=_vm.total&&_vm.load==false),expression:"currIndex>=total&&load==false"}],staticClass:"nomore"},[_vm._v("没有更多数据")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "1JPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__("Ne1P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a7252fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__("ArPQ");
function injectStyle (ssrContext) {
  __webpack_require__("H/O1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a7252fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a7252fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1hAg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-title"},[_c('h2',{staticClass:"column-title",class:_vm.customerClass},[_c('span',[_vm._v(_vm._s(_vm.columnTitle))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "26+q":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-f344925c]{float:left!important}.pull-right[data-v-f344925c]{float:right!important}.show[data-v-f344925c]{display:block!important}.hidden[data-v-f344925c]{display:none!important;visibility:hidden!important}.invisible[data-v-f344925c]{visibility:hidden}.loading[data-v-f344925c]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-f344925c 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-f344925c{0%{width:2px}to{width:15px}}a[data-v-f344925c]{text-decoration:none}ol[data-v-f344925c],ul[data-v-f344925c]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-f344925c],input[data-v-f344925c]{-webkit-appearance:none}button[data-v-f344925c]{border:none;background:none}input[data-v-f344925c],input[data-v-f344925c]:focus{outline:none}.none-data[data-v-f344925c]{position:relative}.none-data[data-v-f344925c]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-f344925c]{border:1px solid #5390d7;color:#5390d7}.return[data-v-f344925c]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-f344925c]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-f344925c]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-f344925c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-f344925c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-f344925c]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-f344925c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-f344925c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-f344925c]{color:#42a8dd}.not-overdue[data-v-f344925c]{color:#5dc9a8}.overdue[data-v-f344925c]{color:#f97f50}.overlay[data-v-f344925c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-f344925c]{padding-left:15px}.padMargin[data-v-f344925c]{padding-right:15px;padding-left:15px}}.white-bg[data-v-f344925c]{background-color:#fff}.vertical-top[data-v-f344925c]{vertical-align:top}.vertical-middle[data-v-f344925c]{vertical-align:middle}.vertical-center[data-v-f344925c]{font-size:0;text-align:left}.vertical-center[data-v-f344925c]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-f344925c]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-f344925c]{color:#fff}.swiper-button-next[data-v-f344925c],.swiper-button-prev[data-v-f344925c]{background-image:none}.swiper-button-next .iconfont[data-v-f344925c],.swiper-button-prev .iconfont[data-v-f344925c]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-f344925c],.swiper-button-prev .iconfont[data-v-f344925c]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-f344925c],.swiper-button-prev .iconfont[data-v-f344925c]{font-size:11px}}.list-container>li[data-v-f344925c]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-f344925c]{padding-bottom:31px}.list-container>li+li[data-v-f344925c]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-f344925c]{padding-bottom:15px}.list-container>li+li[data-v-f344925c]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-f344925c]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-f344925c]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-f344925c]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-f344925c]{padding-bottom:16px}.has-right-column .calendar[data-v-f344925c]{width:280px;height:254px}}.view-more[data-v-f344925c]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-f344925c]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-f344925c]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-f344925c]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-f344925c]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-f344925c]{display:none}.view-more .iconfont[data-v-f344925c]{font-size:10px}}.about-content[data-v-f344925c]{color:#666}.about-content>p[data-v-f344925c]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-f344925c]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-f344925c]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-f344925c]{padding-right:10px;padding-left:10px}.about-content>p[data-v-f344925c]{font-size:13px;line-height:25px}.about-content>p+p[data-v-f344925c]{margin-top:12px}}.component-menuInner.last1>a[data-v-f344925c]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-f344925c]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-f344925c]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-f344925c]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-f344925c]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-f344925c]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-f344925c]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-f344925c]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-f344925c]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-f344925c]{color:#5cc8a8}.component-menuInner a[data-v-f344925c]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-f344925c]{color:#4daada}.component-menuInner a p[data-v-f344925c]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-f344925c]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-f344925c]{margin-top:20px}.component-menuInner a[data-v-f344925c]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-f344925c]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-f344925c]{font-size:34px}.component-menuInner a p[data-v-f344925c]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-f344925c]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-f344925c]{margin-top:10px}.component-menuInner a[data-v-f344925c]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-f344925c]{font-size:19px}.component-menuInner a p[data-v-f344925c]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-f344925c]{padding-right:15px;padding-left:15px}}.footer[data-v-f344925c]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-f344925c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-f344925c]{position:relative}.eventAction[data-v-f344925c]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-f344925c .75s 0s linear infinite;animation:rotate-data-v-f344925c .75s 0s linear infinite}.component-index[data-v-f344925c]{position:relative;min-height:100%}@media only screen and (min-width:768px){.component-index[data-v-f344925c]{padding-bottom:493px}}@media only screen and (max-width:767px){.component-index[data-v-f344925c]{padding-bottom:15px}}@media only screen and (max-width:768px){.header[data-v-f344925c]{position:fixed;top:0;z-index:13;width:100%}}", ""]);

// exports


/***/ }),

/***/ "2Y27":
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
    global.pagination = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: function data() {
      return {
        currentPage: this.current,
        skipPageNum: ''
      };
    },


    props: ['current', 'total'], // `current` - 当前页码, `total` 总页数

    computed: {
      isMobileView: function isMobileView() {
        return this.$store.state.isMobile ? false : true;
      },
      totalPages: function totalPages() {
        // 计算总页数
        var left = 1,
            right = this.total,
            pageList = [],
            currentPage = this.currentPage,
            total = this.total;
        if (total >= 11) {
          if (currentPage > 5 && currentPage < total - 4) {
            left = currentPage - 5;
            right = currentPage + 4;
          } else {
            if (currentPage <= 5) {
              left = 1;
              right = 8;
            } else {
              right = total;
              left = total - 9;
            }
          }
        }
        while (left <= right) {
          pageList.push(left);
          left++;
        }
        if (pageList[0] > 1) {
          pageList[0] = 1;
          pageList[1] = -1;
        }

        var last = pageList.length - 1;
        if (pageList[last] < total) {
          pageList[last] = total;
          pageList[pageList.length - 2] = 0;
        }
        return pageList;
      }
    },

    methods: {
      init: function init() {
        this.currentPage = 1;
      },
      setPage: function setPage(page) {
        this.currentPage = page;
      },
      isSymbol: function isSymbol(index) {
        // 显示省略号 or 页码
        return index < 1 ? '...' : index;
      },
      paginationClick: function paginationClick(index) {
        // 点击页码
        if (index < 1) return;
        if (index != this.currentPage) {
          this.currentPage = index;
          this.$emit('page-change', index);
        }
      },
      nextPage: function nextPage(index) {
        // 下一页
        if (this.currentPage >= this.total) return;

        this.paginationClick(this.currentPage + 1);
      },
      prevPage: function prevPage(index) {
        // 上一页
        if (this.currentPage <= 1) return;

        this.paginationClick(this.currentPage - 1);
      },
      skipPage: function skipPage(num) {
        // 跳转页码(Enter事件)
        var pageNum = parseInt(num);
        if (pageNum < 1 || pageNum > this.total) {
          // 如果输入页码过大/过小，则不跳转
          return;
        }
        this.paginationClick(pageNum);
        this.skipPageNum = '';
      },
      setButtonClass: function setButtonClass(currentBtnType) {
        // 设置 `上一页`、`下一页` 是否可点击
        switch (currentBtnType) {
          case 'prev':
            return this.currentPage <= 1 ? "page-button-disabled" : "";
            break;
          case 'next':
            return this.currentPage >= this.total ? "page-button-disabled" : "";
            break;
          default:
            break;
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "2cIp":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("//Fk"), __webpack_require__("mtWM"), __webpack_require__("mw3O"), __webpack_require__("BlK1"), __webpack_require__("YaEn")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('axios'), require('qs'), require('../utils/ls'), require('../router'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.axios, global.qs, global.ls, global.router);
    global.index = mod.exports;
  }
})(this, function (exports, _promise, _axios, _qs, _ls, _router) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Axios = undefined;

  var _promise2 = _interopRequireDefault(_promise);

  var _axios2 = _interopRequireDefault(_axios);

  var _qs2 = _interopRequireDefault(_qs);

  var _ls2 = _interopRequireDefault(_ls);

  var _router2 = _interopRequireDefault(_router);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * vue-axios 封装(报错/权限/跳转/拦截/提示)
   * 基础需求:
   *    统一捕获接口报错 => axiso 内置拦截器
   *    弹窗提示 => 自定义(如: `Element-ui Message` 组件)
   *    报错重定向 => 路由钩子(根据实际需要配置)
   *    基础权限 => 服务端过期时间戳和token, 以及借助路由钩子(根据实际需要决定是否配置)
   *    表单序列化 => npm 模块 qs
   * 
   * 使用:
   * // 服务层, import默认会找该目录下 `index.js` 的文件
   * import Axios from './index';
   * Vue.use(Axios);
   * 
   * Edit by xiaxiansheng@adinnet.cn
   */

  var Axios = exports.Axios = _axios2.default.create({
    baseURL: '/', // 反向代理配置
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许携带cookie等
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });

  // POST传参序列化(添加请求拦截器)
  Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做的事情
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      // 序列化
      config.data = _qs2.default.stringify(config.data);
    }

    // 若是有权限token, 则给请求头加上token
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  }, function (error) {
    // 错误提示信息, 可以自定义, 如 `Element-ui Message` 弹窗组件
    // `error.data.error.message` 根据实际返回错误数据信息调整
    console.error(error.data.error.message);
  });

  // 返回状态判断(添加响应拦截器)
  Axios.interceptors.response.use(function (res) {
    var data = res.data;
    var code = data.code;
    if (code) {
      /**
       * code - 状态码
       *  10001 => 缺少AAT
       *  10002 => 缺少UAT
       *  10010 => AAT无效
       *  10012 => UAT无效
       *  10040 => 令牌过期
       */
      if (code === '10001') {
        _ls2.default.removeList(['UAT', 'URT', 'loginUserInfo']);
        return _promise2.default.reject('10001');
      }
      if (code === '10010') {
        _ls2.default.removeList(['AAT', 'UAT', 'URT', 'loginUserInfo']);
        location.reload();
        // return Promise.reject('10002');
      }
      if (code === '10040') {
        _ls2.default.removeList(['AAT', 'UAT', 'URT', 'loginUserInfo']);
        location.reload();
      }
      if (code === '10002' || code === '10012') {
        // 登录失效清除所有本地存储信息
        _ls2.default.removeList(['UAT', 'URT', 'loginUserInfo']);
        return _promise2.default.reject('登录失效, 请重新登录');
      }
      if (code === '13000') {
        // 登录失败，用户名或密码错误
        return _promise2.default.reject('13000');
      }
    }
    return data;
  }, function (error) {
    // 返回 response 里的错误信息
    // `error.data.error.message` 根据实际返回错误数据信息调整
    console.log(error);
    var errorInfo = error.data.error ? error.data.error.message : error.data;
    return _promise2.default.reject(errorInfo);
  });

  // 对axios的实例重新封装成一个plugin, 方便 Vue.use(xxxx)
  exports.default = {
    install: function install(Vue, Option) {
      Object.defineProperty(Vue.prototype, "$http", { value: Axios });
    }
  };
});

/***/ }),

/***/ "2tr2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Epci");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("740e73ff", content, true, {});

/***/ }),

/***/ "39XT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-header"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('router-link',{staticClass:"logo vertical-top",attrs:{"to":"/eBook"}}),_vm._v(" "),_c('div',{staticClass:"header-items vertical-top"},[_c('div',{staticClass:"login"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.logIn}},[_c('i',{staticClass:"iconfont icon-user-avatar"}),_c('span',[_vm._v(_vm._s(_vm.username))])])]),_vm._v(" "),_c('router-link',{staticClass:"bookclass",attrs:{"to":{path: '/eBook/bookClassification'}}},[_c('i',{staticClass:"iconfont icon-classifission"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("图书分类")])]),_vm._v(" "),_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.goToMyShelf}},[_c('i',{staticClass:"iconfont icon-my-shelf2"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("我的书架")])]),_vm._v(" "),_c('a',{class:{active: _vm.isActive},attrs:{"href":"javascript:;"},on:{"click":function($event){$event.stopPropagation();_vm.showSearchBar(0)}}},[_c('i',{staticClass:"iconfont icon-search2"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("搜索")])])],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "39hq":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("++3x");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("27297372", content, true, {});

/***/ }),

/***/ "3C0P":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7AnW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c742d584", content, true, {});

/***/ }),

/***/ "4fwm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue__ = __webpack_require__("/KgX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73f35286_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_simpleBook_vue__ = __webpack_require__("nHkn");
function injectStyle (ssrContext) {
  __webpack_require__("UeUF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73f35286"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simpleBook_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73f35286_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_simpleBook_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5sp4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "61cr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchArea),expression:"showSearchArea"}],staticClass:"component-search",on:{"click":function($event){$event.stopPropagation();return _vm.searchBarClick($event)}}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"search-area unityPadding clearfix"},[_c('div',{ref:"sitem",staticClass:"search-select-item"},[_c('strong',{staticClass:"book-search",class:{active: _vm.showSearchList},on:{"click":function($event){_vm.searchListAction()}}},[_vm._v(_vm._s(_vm.currentSearchType))]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchList),expression:"showSearchList"}],staticClass:"search-list"},_vm._l((_vm.searchList),function(item,index){return _c('li',{key:item.name,class:{active: index === _vm.currentSelect},on:{"click":function($event){_vm.chooseSearchType(index, item.sty, item.name, $event)}}},[_vm._v(_vm._s(item.name))])}))]),_vm._v(" "),_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"search-icon",on:{"click":_vm.searchAction}},[_c('i',{staticClass:"iconfont icon-search2"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("搜索")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],attrs:{"type":"text","placeholder":"搜索关键字","autofocus":true},domProps:{"value":(_vm.keyword)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.searchAction($event)},"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-close-bg clear-input",on:{"click":_vm.clearKeyWord}})]),_vm._v(" "),_c('button',{staticClass:"search-btn visible-xs",on:{"click":_vm.searchAction}},[_vm._v("检索")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6WXk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "6s/J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue__ = __webpack_require__("7keK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bca4d65_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_libInfo_vue__ = __webpack_require__("PuBw");
function injectStyle (ssrContext) {
  __webpack_require__("HfIH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0bca4d65"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_libInfo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bca4d65_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_libInfo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "7AnW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-6f0b805c]{float:left!important}.pull-right[data-v-6f0b805c]{float:right!important}.show[data-v-6f0b805c]{display:block!important}.hidden[data-v-6f0b805c]{display:none!important;visibility:hidden!important}.invisible[data-v-6f0b805c]{visibility:hidden}.loading[data-v-6f0b805c]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-6f0b805c 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-6f0b805c{0%{width:2px}to{width:15px}}a[data-v-6f0b805c]{text-decoration:none}ol[data-v-6f0b805c],ul[data-v-6f0b805c]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-6f0b805c],input[data-v-6f0b805c]{-webkit-appearance:none}button[data-v-6f0b805c]{border:none;background:none}input[data-v-6f0b805c],input[data-v-6f0b805c]:focus{outline:none}.none-data[data-v-6f0b805c]{position:relative}.none-data[data-v-6f0b805c]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-6f0b805c]{border:1px solid #5390d7;color:#5390d7}.return[data-v-6f0b805c]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-6f0b805c]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-6f0b805c]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-6f0b805c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-6f0b805c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-6f0b805c]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-6f0b805c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-6f0b805c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-6f0b805c]{color:#42a8dd}.not-overdue[data-v-6f0b805c]{color:#5dc9a8}.overdue[data-v-6f0b805c]{color:#f97f50}.overlay[data-v-6f0b805c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-6f0b805c]{padding-left:15px}.padMargin[data-v-6f0b805c]{padding-right:15px;padding-left:15px}}.white-bg[data-v-6f0b805c]{background-color:#fff}.vertical-top[data-v-6f0b805c]{vertical-align:top}.vertical-middle[data-v-6f0b805c]{vertical-align:middle}.vertical-center[data-v-6f0b805c]{font-size:0;text-align:left}.vertical-center[data-v-6f0b805c]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-6f0b805c]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-6f0b805c]{color:#fff}.swiper-button-next[data-v-6f0b805c],.swiper-button-prev[data-v-6f0b805c]{background-image:none}.swiper-button-next .iconfont[data-v-6f0b805c],.swiper-button-prev .iconfont[data-v-6f0b805c]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-6f0b805c],.swiper-button-prev .iconfont[data-v-6f0b805c]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-6f0b805c],.swiper-button-prev .iconfont[data-v-6f0b805c]{font-size:11px}}.list-container>li[data-v-6f0b805c]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-6f0b805c]{padding-bottom:31px}.list-container>li+li[data-v-6f0b805c]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-6f0b805c]{padding-bottom:15px}.list-container>li+li[data-v-6f0b805c]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-6f0b805c]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-6f0b805c]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-6f0b805c]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-6f0b805c]{padding-bottom:16px}.has-right-column .calendar[data-v-6f0b805c]{width:280px;height:254px}}.view-more[data-v-6f0b805c]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-6f0b805c]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-6f0b805c]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-6f0b805c]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-6f0b805c]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-6f0b805c]{display:none}.view-more .iconfont[data-v-6f0b805c]{font-size:10px}}.about-content[data-v-6f0b805c]{color:#666}.about-content>p[data-v-6f0b805c]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-6f0b805c]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-6f0b805c]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-6f0b805c]{padding-right:10px;padding-left:10px}.about-content>p[data-v-6f0b805c]{font-size:13px;line-height:25px}.about-content>p+p[data-v-6f0b805c]{margin-top:12px}}.component-menuInner.last1>a[data-v-6f0b805c]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-6f0b805c]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-6f0b805c]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-6f0b805c]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-6f0b805c]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-6f0b805c]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-6f0b805c]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-6f0b805c]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-6f0b805c]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-6f0b805c]{color:#5cc8a8}.component-menuInner a[data-v-6f0b805c]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-6f0b805c]{color:#4daada}.component-menuInner a p[data-v-6f0b805c]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-6f0b805c]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-6f0b805c]{margin-top:20px}.component-menuInner a[data-v-6f0b805c]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-6f0b805c]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-6f0b805c]{font-size:34px}.component-menuInner a p[data-v-6f0b805c]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-6f0b805c]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-6f0b805c]{margin-top:10px}.component-menuInner a[data-v-6f0b805c]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-6f0b805c]{font-size:19px}.component-menuInner a p[data-v-6f0b805c]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-6f0b805c]{padding-right:15px;padding-left:15px}}.footer[data-v-6f0b805c]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-6f0b805c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-6f0b805c]{position:relative}.eventAction[data-v-6f0b805c]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-6f0b805c .75s 0s linear infinite;animation:rotate-data-v-6f0b805c .75s 0s linear infinite}.top-swiper-news .img-responsive[data-v-6f0b805c]{width:100%;object-fit:cover}@media only screen and (min-width:768px){.top-swiper-news[data-v-6f0b805c]{height:620px;margin-top:20px}.top-swiper-news>.news-aside[data-v-6f0b805c],.top-swiper-news>.news-main[data-v-6f0b805c]{height:100%}.top-swiper-news .img-responsive[data-v-6f0b805c]{height:620px}}@media only screen and (min-width:768px) and (max-width:1023px){.top-swiper-news .img-responsive[data-v-6f0b805c],.top-swiper-news[data-v-6f0b805c]{height:360px}}@media only screen and (max-width:767px){.top-swiper-news .img-responsive[data-v-6f0b805c],.top-swiper-news[data-v-6f0b805c]{height:250px}}.index-swiper[data-v-6f0b805c]{position:relative;margin-right:0;margin-left:0;width:100%;height:auto;overflow:hidden}.index-swiper img[data-v-6f0b805c]{object-fit:cover;width:100%}.index-swiper .swiper-news-title[data-v-6f0b805c]{color:#fff;font-size:24px;font-weight:400;position:absolute;left:30px;top:50%}.index-swiper .swiper-container[data-v-6f0b805c]{width:100%}@media only screen and (max-width:767px){.index-swiper[data-v-6f0b805c]{width:100%}.index-swiper .swiper-news-title[data-v-6f0b805c]{top:40%}}.index-swiper .swiper-button-next[data-v-6f0b805c],.index-swiper .swiper-button-prev[data-v-6f0b805c]{width:50px}.index-swiper .icon-arrow-left2[data-v-6f0b805c],.index-swiper .icon-arrow-right2[data-v-6f0b805c]{font-size:48px;font-weight:700}.main-content .book-center[data-v-6f0b805c]{padding-bottom:40px;border-bottom:1px solid #e0e5e8}.main-content .book-center[data-v-6f0b805c]:last-child{border-bottom:none}.main-content .weekly-recommended[data-v-6f0b805c]{padding-bottom:40px;border-bottom:1px solid #e0e5e8}.main-content .booklist[data-v-6f0b805c]{padding-left:0;margin-left:-25px;margin-right:-25px}.main-content .booklist .book[data-v-6f0b805c]{float:left;width:20%;margin-bottom:40px;padding:0 25px}@media only screen and (max-width:767px){.main-content .booklist .book[data-v-6f0b805c]{width:33.333333%;margin-bottom:20px;padding:0 12px;margin-left:0;margin-right:0}}@media only screen and (max-width:767px){.main-content .booklist[data-v-6f0b805c]{margin-left:-10px;margin-right:-10px}}@media only screen and (max-width:767px){.main-content[data-v-6f0b805c]{padding:0 10px 10px}}.main-content .view-more[data-v-6f0b805c]{margin-top:0}.quick-entrance[data-v-6f0b805c]{font-size:0}.quick-entrance>.links-item[data-v-6f0b805c]{text-align:center}.quick-entrance>.links-item>a[data-v-6f0b805c]{color:#fff}.quick-entrance>.links-item>a[data-v-6f0b805c]:hover{opacity:.8}.quick-entrance>.links-item span[data-v-6f0b805c]{display:block}.quick-entrance .link-news[data-v-6f0b805c]{background-color:#5c7bc8}.quick-entrance .link-guide[data-v-6f0b805c]{background-color:#5390d7}.quick-entrance .link-online[data-v-6f0b805c]{background-color:#42a8dd}.quick-entrance .link-borrowed[data-v-6f0b805c]{background-color:#64c1cf}.quick-entrance .link-activities[data-v-6f0b805c]{background-color:#5dc9a8}@media only screen and (min-width:768px){.quick-entrance[data-v-6f0b805c]{padding-top:17px}.quick-entrance>.links-item[data-v-6f0b805c]{float:left;width:20%;padding-right:10px;vertical-align:top}.quick-entrance>.links-item[data-v-6f0b805c]:last-child{padding-right:0}.quick-entrance>.links-item>a[data-v-6f0b805c]{display:table-cell;width:1%;height:100px;vertical-align:middle;font-size:18px}.quick-entrance>.links-item .link-en[data-v-6f0b805c]{font-size:10px;opacity:.5}}@media only screen and (max-width:767px){.quick-entrance[data-v-6f0b805c]{display:flex;padding:5px 5px 0;justify-content:space-between}.quick-entrance>.links-item[data-v-6f0b805c]{flex:1}.quick-entrance>.links-item[data-v-6f0b805c]:not(:last-child){padding-right:5.5px}.quick-entrance>.links-item>a[data-v-6f0b805c]{display:flex;justify-content:center;align-items:center;width:100%;height:40.5px;font-size:12px}}@media only screen and (max-width:768px){.weekly-recommended[data-v-6f0b805c]{overflow:hidden}}.book-container>div[data-v-6f0b805c]:nth-child(n+3){padding-top:30px;border-top:1px solid #eee}@media only screen and (max-width:768px){.book-container>div[data-v-6f0b805c]:nth-child(n+3){border-top:none;padding-top:0}}@media only screen and (min-width:768px){.book-container .even[data-v-6f0b805c]{padding-left:56px}}.external-links[data-v-6f0b805c]{margin-bottom:-10px;font-size:0}.external-links>a[data-v-6f0b805c]{position:relative;color:#fff}.external-links .none-padding[data-v-6f0b805c]{padding-right:0;padding-bottom:0}.external-links .none-padding .links-inner[data-v-6f0b805c]{right:0}.external-links .links-inner[data-v-6f0b805c]{position:absolute;top:0;left:0;background-color:#64c1cf}.external-links .links-inner>strong[data-v-6f0b805c],.external-links .links-inner span[data-v-6f0b805c]{display:block}@media only screen and (min-width:768px){.external-links[data-v-6f0b805c]{margin-top:40px}.external-links>a[data-v-6f0b805c]{display:inline-block;width:20%;height:119px;padding-right:10px;padding-bottom:10px;font-size:14px}.external-links .links-inner[data-v-6f0b805c]{right:10px;bottom:10px;padding-top:20px;padding-left:7px}.external-links .links-inner>strong[data-v-6f0b805c]{font-size:16px;color:#ebe9e3}.external-links .links-inner>span[data-v-6f0b805c]{margin-top:-2px;opacity:.4;text-transform:uppercase}}@media only screen and (max-width:767px){.external-links[data-v-6f0b805c]{margin-top:25px}.external-links>a[data-v-6f0b805c]{display:inline-block;width:50%;height:117px;font-size:8px}.external-links>a:nth-child(odd) .links-inner[data-v-6f0b805c]{right:5px}.external-links>a:nth-child(2n) .links-inner[data-v-6f0b805c]{left:5px;right:0}.external-links .links-inner[data-v-6f0b805c]{bottom:10px;padding-top:21px;padding-left:20px}.external-links .links-inner>strong[data-v-6f0b805c]{font-size:13px}.external-links .links-inner>span[data-v-6f0b805c]{text-transform:uppercase}}", ""]);

// exports


/***/ }),

/***/ "7biW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__("CNvo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af2dc0ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__("n9rH");
function injectStyle (ssrContext) {
  __webpack_require__("/vNK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-af2dc0ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_search_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af2dc0ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_search_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "7egr":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-70e5bb6e]{float:left!important}.pull-right[data-v-70e5bb6e]{float:right!important}.show[data-v-70e5bb6e]{display:block!important}.hidden[data-v-70e5bb6e]{display:none!important;visibility:hidden!important}.invisible[data-v-70e5bb6e]{visibility:hidden}.loading[data-v-70e5bb6e]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-70e5bb6e 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-70e5bb6e{0%{width:2px}to{width:15px}}a[data-v-70e5bb6e]{text-decoration:none}ol[data-v-70e5bb6e],ul[data-v-70e5bb6e]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-70e5bb6e],input[data-v-70e5bb6e]{-webkit-appearance:none}button[data-v-70e5bb6e]{border:none;background:none}input[data-v-70e5bb6e],input[data-v-70e5bb6e]:focus{outline:none}.none-data[data-v-70e5bb6e]{position:relative}.none-data[data-v-70e5bb6e]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-70e5bb6e]{border:1px solid #5390d7;color:#5390d7}.return[data-v-70e5bb6e]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-70e5bb6e]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-70e5bb6e]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-70e5bb6e]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-70e5bb6e]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-70e5bb6e]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-70e5bb6e]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-70e5bb6e]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-70e5bb6e]{color:#42a8dd}.not-overdue[data-v-70e5bb6e]{color:#5dc9a8}.overdue[data-v-70e5bb6e]{color:#f97f50}.overlay[data-v-70e5bb6e]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-70e5bb6e]{padding-left:15px}.padMargin[data-v-70e5bb6e]{padding-right:15px;padding-left:15px}}.white-bg[data-v-70e5bb6e]{background-color:#fff}.vertical-top[data-v-70e5bb6e]{vertical-align:top}.vertical-middle[data-v-70e5bb6e]{vertical-align:middle}.vertical-center[data-v-70e5bb6e]{font-size:0;text-align:left}.vertical-center[data-v-70e5bb6e]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-70e5bb6e]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-70e5bb6e]{color:#fff}.swiper-button-next[data-v-70e5bb6e],.swiper-button-prev[data-v-70e5bb6e]{background-image:none}.swiper-button-next .iconfont[data-v-70e5bb6e],.swiper-button-prev .iconfont[data-v-70e5bb6e]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-70e5bb6e],.swiper-button-prev .iconfont[data-v-70e5bb6e]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-70e5bb6e],.swiper-button-prev .iconfont[data-v-70e5bb6e]{font-size:11px}}.list-container>li[data-v-70e5bb6e]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-70e5bb6e]{padding-bottom:31px}.list-container>li+li[data-v-70e5bb6e]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-70e5bb6e]{padding-bottom:15px}.list-container>li+li[data-v-70e5bb6e]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-70e5bb6e]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-70e5bb6e]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-70e5bb6e]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-70e5bb6e]{padding-bottom:16px}.has-right-column .calendar[data-v-70e5bb6e]{width:280px;height:254px}}.view-more[data-v-70e5bb6e]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-70e5bb6e]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-70e5bb6e]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-70e5bb6e]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-70e5bb6e]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-70e5bb6e]{display:none}.view-more .iconfont[data-v-70e5bb6e]{font-size:10px}}.about-content[data-v-70e5bb6e]{color:#666}.about-content>p[data-v-70e5bb6e]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-70e5bb6e]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-70e5bb6e]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-70e5bb6e]{padding-right:10px;padding-left:10px}.about-content>p[data-v-70e5bb6e]{font-size:13px;line-height:25px}.about-content>p+p[data-v-70e5bb6e]{margin-top:12px}}.component-menuInner.last1>a[data-v-70e5bb6e]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-70e5bb6e]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-70e5bb6e]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-70e5bb6e]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-70e5bb6e]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-70e5bb6e]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-70e5bb6e]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-70e5bb6e]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-70e5bb6e]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-70e5bb6e]{color:#5cc8a8}.component-menuInner a[data-v-70e5bb6e]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-70e5bb6e]{color:#4daada}.component-menuInner a p[data-v-70e5bb6e]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-70e5bb6e]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-70e5bb6e]{margin-top:20px}.component-menuInner a[data-v-70e5bb6e]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-70e5bb6e]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-70e5bb6e]{font-size:34px}.component-menuInner a p[data-v-70e5bb6e]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-70e5bb6e]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-70e5bb6e]{margin-top:10px}.component-menuInner a[data-v-70e5bb6e]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-70e5bb6e]{font-size:19px}.component-menuInner a p[data-v-70e5bb6e]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-70e5bb6e]{padding-right:15px;padding-left:15px}}.footer[data-v-70e5bb6e]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-70e5bb6e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-70e5bb6e]{position:relative}.eventAction[data-v-70e5bb6e]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-70e5bb6e .75s 0s linear infinite;animation:rotate-data-v-70e5bb6e .75s 0s linear infinite}.component-search[data-v-70e5bb6e]{background-color:#4573ab}.search-area[data-v-70e5bb6e]{color:#fff}.search-area .book-search[data-v-70e5bb6e]{position:relative;padding-right:18px;font-weight:400;font-size:13px;cursor:pointer}.search-area .book-search.active[data-v-70e5bb6e]:after{margin-top:-7px;border-color:transparent transparent #fff;border-style:dashed dashed solid}.search-area .book-search[data-v-70e5bb6e]:after{content:\"\";position:absolute;top:50%;right:3px;width:0;height:0;border-width:5px;margin-top:-2px;border-color:#fff transparent transparent;border-style:solid dashed dashed}.search-area .search-select-item[data-v-70e5bb6e]{position:relative}.search-area .search-select-item>.search-list[data-v-70e5bb6e]{position:absolute;left:0;z-index:15;margin-top:5px;margin-bottom:0;background-color:#fff;border-radius:3px;box-shadow:0 10px 24px 0 rgba(115,163,218,.14)}.search-area .search-select-item>.search-list>li[data-v-70e5bb6e]{min-width:88px;padding:8px 7.5px;line-height:19px;color:#666;font-size:13px;cursor:pointer}.search-area .search-select-item>.search-list>li.active[data-v-70e5bb6e],.search-area .search-select-item>.search-list>li[data-v-70e5bb6e]:hover{color:#4d7eb5}.search-area .search-select-item>.search-list>li+li[data-v-70e5bb6e]{border-top:1px solid #eee}.search-area .search-input[data-v-70e5bb6e]{position:relative;padding-left:7px}.search-area .search-input .clear-input[data-v-70e5bb6e],.search-area .search-input .search-icon[data-v-70e5bb6e]{position:absolute;top:50%}.search-area .search-input>input[data-v-70e5bb6e]{width:100%;height:30px;padding:8px 35px 8px 32px;border-radius:30px;font-size:13px;color:#999;line-height:13px;border:none}.search-area .search-btn[data-v-70e5bb6e]{margin-left:3px;outline:none}@media only screen and (min-width:768px){.search-area[data-v-70e5bb6e]{display:table-cell;width:1%;padding-top:20px;padding-bottom:20px}.search-area>.search-btn[data-v-70e5bb6e],.search-area>.search-select-item[data-v-70e5bb6e]{float:left}.search-area .book-search[data-v-70e5bb6e]{font-size:14px}.search-area .book-search.active[data-v-70e5bb6e]:after{margin-top:-10px}.search-area .book-search[data-v-70e5bb6e]:after{right:-2px;border-width:7px}.search-area .search-select-item[data-v-70e5bb6e]{top:8px;z-index:4}.search-area .search-select-item>.search-list>li[data-v-70e5bb6e]{font-size:14px}.search-area .search-input[data-v-70e5bb6e]{padding-left:101px}.search-area .search-input>input[data-v-70e5bb6e]{height:40px;padding:11px 140px 11px 22px}.search-area .search-input .search-icon[data-v-70e5bb6e]{right:0;width:122px;height:40px;padding-left:24px;font-size:14px;line-height:40px;-ms-transform:translateY(-52%);transform:translateY(-52%);cursor:pointer}.search-area .search-input .search-icon[data-v-70e5bb6e]:before{content:\"\";position:absolute;top:7px;bottom:6px;left:0;width:1px;background-color:#c7c7c7}.search-area .search-input .search-icon>i[data-v-70e5bb6e]{color:#4474ac;font-size:18px;vertical-align:middle}.search-area .search-input .search-icon>span[data-v-70e5bb6e]{margin-left:12px;color:#49709c;vertical-align:middle}.search-area .search-input .clear-input[data-v-70e5bb6e]{right:135px;color:#c7ccd0;top:8px;font-size:18px}.search-area .search-btn[data-v-70e5bb6e]{position:absolute;border:none;background-color:none}}@media only screen and (max-width:767px){.search-area[data-v-70e5bb6e]{display:flex;height:55px;padding-right:10px;padding-left:10px;align-items:center;justify-content:space-between;font-size:13px}.search-area .search-input[data-v-70e5bb6e]{flex:1}.search-area .search-input .search-icon[data-v-70e5bb6e]{left:18px;transform:translateY(-40%);font-size:11px;color:#c7c7c7}.search-area .search-input .clear-input[data-v-70e5bb6e]{right:9px;color:#c7ccd0;transform:translateY(-50%)}}@media only screen and (min-width:768px) and (max-width:1024px){.search-area .search-input[data-v-70e5bb6e]{padding-right:15px}}", ""]);

// exports


/***/ }),

/***/ "7keK":
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
        global.libInfo = mod.exports;
    }
})(this, function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "libInfo",
        // data () {},
        methods: {
            goToTop: function goToTop() {
                window.scrollTo(0, 0);
            }
        }
    };
    module.exports = exports["default"];
});

/***/ }),

/***/ "7wqO":
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
    global.recommendedPast = mod.exports;
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

  exports.default = {
    name: "recommendedPast",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "8/c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("cVso");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f344925c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("/zbv");
function injectStyle (ssrContext) {
  __webpack_require__("wd/M")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f344925c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f344925c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "86b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue__ = __webpack_require__("hJep");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_242dd42f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBook_vue__ = __webpack_require__("BZKX");
function injectStyle (ssrContext) {
  __webpack_require__("Dtax")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-242dd42f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBook_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_242dd42f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBook_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "8FcW":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kP+G");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3949619e", content, true, {});

/***/ }),

/***/ "8goA":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("//Fk"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("babel-runtime/core-js/promise"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.promise, global.api);
    global.modalLogin = mod.exports;
  }
})(this, function (module, exports, _promise, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _promise2 = _interopRequireDefault(_promise);

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

  var self = null; // 自定义变量存储实例this

  // api request
  exports.default = {
    name: "modalLogin",

    data: function data() {
      return {
        username: '', // 用户名 | 卡号
        password: '', // 密码
        verifyCode: '', // 验证码
        lossAndFindLink: '', // 挂失 | 找回url
        remember: false, // 记住一周
        verifyCodeImage: '/static/images/temp/verify-code.jpg',
        noteMsg: '', // 登陆框提示信息
        showNote: false, // 显示登陆框提示框
        // homePage: 'http://www.baidu.com'
        homePage: window.location.origin
      };
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {
      showLoginModal: function showLoginModal() {
        var state = self.$store.state.showLoginModal;
        if (state) {
          self.lossAndFind();
          self.getVerifyCode();
        }
        return state;
      }
    },

    mounted: function mounted() {
      self.checkThirdPartLogIn();
    },


    methods: {
      closeModal: function closeModal() {
        // 关闭登录Modal
        if (this.$route.query.login) {
          // 如果当前页面有登录标记，点击关闭登陆框时，清除登录标记
          this.$router.replace({
            query: {}
          });
        }
        self.commitEvent('changeshowLoginModal', false);
        // self.commitEvent('changeTempPath', {
        //   path: '/index/myLibrary'
        // });
        self.utils.modalOpenEvent(false);
      },
      getVerifyCode: function (_getVerifyCode) {
        function getVerifyCode() {
          return _getVerifyCode.apply(this, arguments);
        }

        getVerifyCode.toString = function () {
          return _getVerifyCode.toString();
        };

        return getVerifyCode;
      }(function () {
        var _this = this;

        // 获取验证码图片 - 暂缺接口
        _api.yzmHandle.yzmFetch().then(function (data) {
          //console.log(data);
          var yzmimg = data;
          if (data.code) {
            self.showMsg(data.msg, 4000);
            return false;
          }
          if (data.length < 100) {
            getVerifyCode();
            return false;
          }
          _this.verifyCodeImage = yzmimg;
        }).catch(function (error) {
          console.warn(error);
        });
      }),
      checkYzm: function checkYzm() {
        var _this2 = this;

        //
        return new _promise2.default(function (resolve, reject) {
          var yzminput = _this2.verifyCode;
          console.log(yzminput);
          _api.yzmHandle.yzmCheck({ value: yzminput }).then(function (data) {
            console.log(data.result);
            if (data.result === "true") {
              //console.warn(true);
              resolve(true);
            } else {
              //console.warn(false);
              _this2.getVerifyCode();
              resolve(false);
            }
          }).catch(function (error) {
            reject(error);
            console.warn(error);
          });
        });
      },

      /**
       * 第三方登录，检测code，登录
       */
      checkThirdPartLogIn: function checkThirdPartLogIn() {
        // let codeIndex = this.$route.path.indexOf("&code");
        // let stateIndex = this.$route.path.indexOf("&state");

        // if (codeIndex !== -1 && stateIndex !== -1) {
        //   let isLogin = self.ls.getItem('loginUserInfo');
        //   if (!isLogin) {
        //     // console.log('reload');
        //     // self.openNewPage('homePage');
        //     let code = window.location.href.slice(codeIndex + 6, stateIndex);
        //     modalLogin.otherLoginMethods(code).then(() => {
        //       // location.reload();
        //       self.openNewPage('homePage');
        //     }).catch(error => {
        //       console.log(error);
        //     })
        //   }
        // }
        function getUrlSearch(key) {
          var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
          var search = window.location.search.substr(1).match(reg);
          return search ? search[2] : '';
        }
        var code = getUrlSearch('code'),
            state = getUrlSearch('state');
        if (code && state) {
          var isLogin = self.ls.getItem('loginUserInfo');
          if (!isLogin) {
            // console.log('reload');
            // self.openNewPage('homePage');
            _api.modalLogin.otherLoginMethods(code).then(function () {
              // location.reload();
              self.openNewPage('homePage');
            }).catch(function (error) {
              console.log(error);
            });
          }
        }
      },
      loginAction: function loginAction() {
        var _this3 = this;

        // 登录
        if (!self.checkLogInfo()) {
          self.showMsg('请输入用户名和密码', 4000);
          return;
        }

        if (!self.verifyCode) {
          self.showMsg('请输入验证码', 4000);
          return;
        }

        self.checkYzm().then(function (data) {
          // 成功訊息 (需要 3 秒)
          console.log("promise done", data);
          //console.log(data);
          if (data == true) {
            _api.tokenHandle.getUATURT({
              username: self.username,
              password: self.password,
              tokentype: self.remember ? 'uat_7' : 'uat_1'
            }).then(function (res) {
              self.closeModal();
              // 清空登录信息
              self.username = '';
              self.password = '';
              self.verifyCode = '';
              self.remember = false;
              var temp = _this3.$store.state.tempPath;
              self.commitEvent("changeshowLoginIcon", true);
              if (temp.path === 'reload') {
                location.reload();
              } else if (temp.path === 'done') {
                // location.reload();
              } else {
                // 登录成功跳转
                self.openNewPage(temp);
              }
            }).catch(function (error) {
              if (error === '13000') {
                self.showMsg('用户名或密码错误', 4000);
              }
            });
          } else {
            self.verifyCode = '';
            self.$refs.yzm.focus();
            self.showMsg('验证码有误', 4000);
            return;
          }
        }).catch(function (err) {
          // 失敗訊息 (立即)
          //console.log("promise done",err);
          console.log(err);
        });
      },
      lossAndFind: function lossAndFind() {
        // 获取挂失 | 找回链接
        // 已获取过不再重新获取
        var lossAndFindUrl = self.ls.getItem('lossAndFindUrl');
        if (lossAndFindUrl) {
          self.lossAndFindLink = lossAndFindUrl;
          return;
        }

        // 初次操作获取链接
        _api.modalLogin.lossAndFind().then(function (res) {
          self.ls.setItem('lossAndFindUrl', res.LossAndFindUrl);
          self.lossAndFindLink = res.LossAndFindUrl;
        });
      },
      checkLogInfo: function checkLogInfo() {
        // 检查用户名和密码是否完整
        if (self.username.trim() === '' || self.password.trim() === '') {
          // console.log('请输入完整用户名和密码');
          self.showMsg('用户名和密码不能为空', 2000);
          return false;
        }
        return true;
      },
      showMsg: function showMsg(msg, time) {
        self.noteMsg = msg;
        self.showNote = true;
        var t = setTimeout(function () {
          self.showNote = false;
          clearTimeout(t);
        }, time);
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "8ml0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-91d367d0]{float:left!important}.pull-right[data-v-91d367d0]{float:right!important}.show[data-v-91d367d0]{display:block!important}.hidden[data-v-91d367d0]{display:none!important;visibility:hidden!important}.invisible[data-v-91d367d0]{visibility:hidden}.loading[data-v-91d367d0]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-91d367d0 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-91d367d0{0%{width:2px}to{width:15px}}a[data-v-91d367d0]{text-decoration:none}ol[data-v-91d367d0],ul[data-v-91d367d0]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-91d367d0],input[data-v-91d367d0]{-webkit-appearance:none}button[data-v-91d367d0]{border:none;background:none}input[data-v-91d367d0],input[data-v-91d367d0]:focus{outline:none}.none-data[data-v-91d367d0]{position:relative}.none-data[data-v-91d367d0]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-91d367d0]{border:1px solid #5390d7;color:#5390d7}.return[data-v-91d367d0]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-91d367d0]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-91d367d0]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-91d367d0]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-91d367d0]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-91d367d0]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-91d367d0]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-91d367d0]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-91d367d0]{color:#42a8dd}.not-overdue[data-v-91d367d0]{color:#5dc9a8}.overdue[data-v-91d367d0]{color:#f97f50}.overlay[data-v-91d367d0]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-91d367d0]{padding-left:15px}.padMargin[data-v-91d367d0]{padding-right:15px;padding-left:15px}}.white-bg[data-v-91d367d0]{background-color:#fff}.vertical-top[data-v-91d367d0]{vertical-align:top}.vertical-middle[data-v-91d367d0]{vertical-align:middle}.vertical-center[data-v-91d367d0]{font-size:0;text-align:left}.vertical-center[data-v-91d367d0]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-91d367d0]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-91d367d0]{color:#fff}.swiper-button-next[data-v-91d367d0],.swiper-button-prev[data-v-91d367d0]{background-image:none}.swiper-button-next .iconfont[data-v-91d367d0],.swiper-button-prev .iconfont[data-v-91d367d0]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-91d367d0],.swiper-button-prev .iconfont[data-v-91d367d0]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-91d367d0],.swiper-button-prev .iconfont[data-v-91d367d0]{font-size:11px}}.list-container>li[data-v-91d367d0]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-91d367d0]{padding-bottom:31px}.list-container>li+li[data-v-91d367d0]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-91d367d0]{padding-bottom:15px}.list-container>li+li[data-v-91d367d0]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-91d367d0]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-91d367d0]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-91d367d0]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-91d367d0]{padding-bottom:16px}.has-right-column .calendar[data-v-91d367d0]{width:280px;height:254px}}.view-more[data-v-91d367d0]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-91d367d0]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-91d367d0]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-91d367d0]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-91d367d0]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-91d367d0]{display:none}.view-more .iconfont[data-v-91d367d0]{font-size:10px}}.about-content[data-v-91d367d0]{color:#666}.about-content>p[data-v-91d367d0]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-91d367d0]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-91d367d0]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-91d367d0]{padding-right:10px;padding-left:10px}.about-content>p[data-v-91d367d0]{font-size:13px;line-height:25px}.about-content>p+p[data-v-91d367d0]{margin-top:12px}}.component-menuInner.last1>a[data-v-91d367d0]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-91d367d0]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-91d367d0]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-91d367d0]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-91d367d0]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-91d367d0]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-91d367d0]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-91d367d0]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-91d367d0]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-91d367d0]{color:#5cc8a8}.component-menuInner a[data-v-91d367d0]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-91d367d0]{color:#4daada}.component-menuInner a p[data-v-91d367d0]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-91d367d0]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-91d367d0]{margin-top:20px}.component-menuInner a[data-v-91d367d0]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-91d367d0]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-91d367d0]{font-size:34px}.component-menuInner a p[data-v-91d367d0]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-91d367d0]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-91d367d0]{margin-top:10px}.component-menuInner a[data-v-91d367d0]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-91d367d0]{font-size:19px}.component-menuInner a p[data-v-91d367d0]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-91d367d0]{padding-right:15px;padding-left:15px}}.footer[data-v-91d367d0]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-91d367d0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-91d367d0]{position:relative}.eventAction[data-v-91d367d0]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-91d367d0 .75s 0s linear infinite;animation:rotate-data-v-91d367d0 .75s 0s linear infinite}.component-miniFooter .visit-total[data-v-91d367d0]{margin-top:20px;margin-bottom:2px;font-size:12px}.component-miniFooter .visit-total .total-num[data-v-91d367d0]{margin-left:8px;font-size:18px;vertical-align:-2px}@media only screen and (min-width:768px){.component-miniFooter .visit-total[data-v-91d367d0]{margin-bottom:12px;font-size:16px}.component-miniFooter .visit-total .total-num[data-v-91d367d0]{margin-left:19px;font-size:24px}}.component-miniFooter .copyright[data-v-91d367d0]{padding-top:2px;font-size:10px;line-height:20px}@media only screen and (min-width:768px){.component-miniFooter .copyright[data-v-91d367d0]{font-size:12px}.component-miniFooter .copyright>li+li[data-v-91d367d0]{margin-top:4px}}", ""]);

// exports


/***/ }),

/***/ "91Bt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-fullMenu"},[_c('bread-crumb'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "93Yh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__vev_calendar-wrapper"},[_c('cal-panel',{attrs:{"events":_vm.events,"calendar":_vm.calendarOptions,"selectedDay":_vm.selectedDayEvents.date},on:{"cur-day-changed":_vm.handleChangeCurDay,"month-changed":_vm.handleMonthChanged,"back-current":_vm.backToCurrent}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "9IHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue__ = __webpack_require__("WOd9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6c43588_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_event_calendar_vue__ = __webpack_require__("93Yh");
function injectStyle (ssrContext) {
  __webpack_require__("Xf6d")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_event_calendar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6c43588_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_event_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9g9h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue__ = __webpack_require__("hR89");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2cac9e0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookClassificationList_vue__ = __webpack_require__("dHjQ");
function injectStyle (ssrContext) {
  __webpack_require__("U6xV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2cac9e0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassificationList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2cac9e0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookClassificationList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Aqh4":
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
    global.bookInfo = mod.exports;
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
  //
  //
  //
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
    name: "bookInfo",

    data: function data() {
      return {};
    },


    props: {
      bookInfo: {
        type: Object,
        default: function _default() {
          return {};
        },

        required: true
      }
    },

    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "ArPQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb hidden-xs"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('ul',[_vm._l((_vm.breadList),function(item,index){return (item.meta.breadcrumbName)?_c('li',{key:index},[_c('router-link',{style:({color: _vm.color}),attrs:{"to":item.path}},[_vm._v(_vm._s(item.meta.breadcrumbName))])],1):_vm._e()}),_vm._v(" "),_c('li',[_c('span',{style:({color: _vm.color})},[_vm._v(_vm._s(_vm.lastBread))])])],2)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BSiz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qxF/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9247c2e0", content, true, {});

/***/ }),

/***/ "BZKX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-index",style:({'padding-bottom': _vm.footerHeight})},[_c('header',{staticClass:"header"},[_c('eBook-header'),_vm._v(" "),_c('ebook-search')],1),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('modal-login'),_vm._v(" "),_c('footer',{staticClass:"footer"},[_c('site-footer',{ref:"sitefooter",attrs:{"each-height":_vm.eachHeight},on:{"tabChange":_vm.tabChangeHandler}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BlK1":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("mvHQ"), __webpack_require__("pFYg")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/json/stringify'), require('babel-runtime/helpers/typeof'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.stringify, global._typeof);
    global.ls = mod.exports;
  }
})(this, function (module, exports, _stringify, _typeof2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stringify2 = _interopRequireDefault(_stringify);

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @name: [ls localStorage存储方法]
   * @author: Xiaxs(xiaxiansheng@adinnet.cn)
   * @date: 2018-03-19
   * @more: https://github.com/tsironis/lockr
   *        https://github.com/nbubna/store
   */

  var LS = window.localStorage;

  exports.default = {
    getItem: function getItem(key) {
      // 获取 localStorage
      try {
        if ((typeof key === 'undefined' ? 'undefined' : (0, _typeof3.default)(key)) === 'object') {
          return JSON.parse(LS.getItem(key));
        }
        return LS.getItem(key);
      } catch (err) {
        return null;
      }
    },
    setItem: function setItem(key, val) {
      if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
        val = (0, _stringify2.default)(val);
      }
      LS.setItem(key, val);
    },
    setKeysList: function setKeysList(data) {
      // 批量保存, data是一个字典
      for (var i in data) {
        LS.setItem(i, data[i]);
      }
    },
    removeItem: function removeItem(key) {
      LS.removeItem(key);
    },
    removeList: function removeList(list) {
      // 批量删除, list是一个数组
      list.forEach(function (item) {
        LS.removeItem(item);
      });
    },
    clear: function clear() {
      LS.clear();
    },
    keys: function keys() {
      return LS.keys();
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "CNvo":
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
    global.search = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "searchArea",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,

        // 检索类型选择
        showSearchList: false,
        currentSelect: 0,
        searchList: [{
          name: '书目检索',
          order: 0,
          sty: 'pbook'
        }, {
          name: '电子书检索',
          order: 1,
          sty: 'ebook'
        }, {
          name: '资源发现',
          order: 2,
          sty: ''
        }],
        currentSize: null,

        // 搜索关键字
        keyword: ''
      };
    },
    created: function created() {
      self = this;

      // let sty = self.ls.getItem('searchType');
      // self.currentSelect = sty === 'ebook' ? 1 : 0;
    },


    computed: {
      /** 
       * [showSearchArea 显示检索输入框]
       */
      showSearchArea: function showSearchArea() {
        return self.$store.state.showSearchBar;
      },

      /**
       * [currentSearchType 当前选择检索类型]
       */
      currentSearchType: function currentSearchType() {
        return self.searchList[self.currentSelect].name;
      }
    },

    mounted: function mounted() {
      // 隐藏搜索栏
      document.addEventListener('click', function (e) {
        var currentPage = self.$route.name;
        // 搜索页不隐藏搜索框
        if (currentPage === 'pBookSearch' || currentPage === 'eBookSearch') {
          if (self.showSearchList) {
            self.showSearchList = false;
          }

          return;
        }
        if (!self.$store.state.showSearchBar) {
          return;
        }
        if (!self.$el.contains(e.target)) {
          self.showSearchList = false;
          self.commitEvent('changeSearchBar', false);
        }
      });
    },


    methods: {
      searchBarClick: function searchBarClick(e) {
        // 隐藏检索类型
        if (!self.showSearchList) {
          return;
        }
        if (!self.$refs.sitem.contains(e.target)) {
          self.showSearchList = false;
        }
      },

      /** 
       * [searchListAction 检索类型展开事件]
       */
      searchListAction: function searchListAction() {
        self.showSearchList = !self.showSearchList;
        // console.log(self.showSearchList);
      },

      /** 
       * [chooseSearchType 选择搜索类型]
       * @param {Int} index 当前选择类型的索引
       * @param {Int} type 类型表示
       * @param {String} name 所选类型中文名
       * @param {Object} ev 当前事件对象
       */
      chooseSearchType: function chooseSearchType(index, sty, name, ev) {
        self.currentSelect = index;
        self.searchListAction();
        // self.ls.setItem('searchType', sty);

        // if ( !self.isMobile ) {
        //   self.currentSize = `${ev.target.offsetWidth + 13}px`;
        // }
      },

      /**
       * 清除关键词
       */
      clearKeyWord: function clearKeyWord() {
        self.keyword = '';
        self.commitEvent('changeSearchEvent', '');
      },

      /** 
       * [searchAction 检索按钮事件]
       */
      searchAction: function searchAction() {
        if (self.keyword === '') {
          alert('搜索关键字不能为空');
          return;
        }
        if (self.currentSelect === 2) {
          // 资源发现 - 跳转外链
          // location.href = `http://en.shl.findplus.cn/?h=search_list&query=${self.keyword}`;
          // 中英文跳转
          var zw_yw = "cn";
          if (/[\u4e00-\u9fa5]/.test(self.keyword)) {
            zw_yw = "cn";
          } else {
            zw_yw = "en";
          }
          var url = "http://" + zw_yw + ".shl.findplus.cn/?h=search_list&query=" + encodeURIComponent(self.keyword) + "&action[addexpander][]=fulltext";
          window.open(url);

          return;
        }

        var currentPage = self.$route.name; // 当前页面名
        // 传递搜索按钮事件
        self.commitEvent('changeSearchEvent', new String(self.keyword));

        // 当选择搜索类型为 `电子书检索`, `书目检索` 时, 跳转 电子书检索结果页, 其他跳转第三方页面
        if (self.currentSelect === 0) {
          if (currentPage === 'pBookSearch') return;
          self.openNewPage({
            path: '/index/pBookSearch'
          });

          return;
        }

        if (self.currentSelect === 1) {
          if (currentPage === 'eBookSearch') return;
          self.openNewPage({
            path: '/eBook/eBookSearch'
          });

          return;
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "Cz8s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("wqBJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d36a2bce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("Zafb");
function injectStyle (ssrContext) {
  __webpack_require__("camZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d36a2bce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d36a2bce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "D0Ye":
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
    global.bookClassification = mod.exports;
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

  exports.default = {
    name: "bookClassification",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "Dgri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Dtax":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vwOt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5d2969d3", content, true, {});

/***/ }),

/***/ "Epci":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-3cbeb0fd]{float:left!important}.pull-right[data-v-3cbeb0fd]{float:right!important}.show[data-v-3cbeb0fd]{display:block!important}.hidden[data-v-3cbeb0fd]{display:none!important;visibility:hidden!important}.invisible[data-v-3cbeb0fd]{visibility:hidden}.loading[data-v-3cbeb0fd]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-3cbeb0fd 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-3cbeb0fd{0%{width:2px}to{width:15px}}a[data-v-3cbeb0fd]{text-decoration:none}ol[data-v-3cbeb0fd],ul[data-v-3cbeb0fd]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-3cbeb0fd],input[data-v-3cbeb0fd]{-webkit-appearance:none}button[data-v-3cbeb0fd]{border:none;background:none}input[data-v-3cbeb0fd],input[data-v-3cbeb0fd]:focus{outline:none}.none-data[data-v-3cbeb0fd]{position:relative}.none-data[data-v-3cbeb0fd]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-3cbeb0fd]{border:1px solid #5390d7;color:#5390d7}.return[data-v-3cbeb0fd]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-3cbeb0fd]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-3cbeb0fd]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-3cbeb0fd]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-3cbeb0fd]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-3cbeb0fd]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-3cbeb0fd]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-3cbeb0fd]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-3cbeb0fd]{color:#42a8dd}.not-overdue[data-v-3cbeb0fd]{color:#5dc9a8}.overdue[data-v-3cbeb0fd]{color:#f97f50}.overlay[data-v-3cbeb0fd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-3cbeb0fd]{padding-left:15px}.padMargin[data-v-3cbeb0fd]{padding-right:15px;padding-left:15px}}.white-bg[data-v-3cbeb0fd]{background-color:#fff}.vertical-top[data-v-3cbeb0fd]{vertical-align:top}.vertical-middle[data-v-3cbeb0fd]{vertical-align:middle}.vertical-center[data-v-3cbeb0fd]{font-size:0;text-align:left}.vertical-center[data-v-3cbeb0fd]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-3cbeb0fd]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-3cbeb0fd]{color:#fff}.swiper-button-next[data-v-3cbeb0fd],.swiper-button-prev[data-v-3cbeb0fd]{background-image:none}.swiper-button-next .iconfont[data-v-3cbeb0fd],.swiper-button-prev .iconfont[data-v-3cbeb0fd]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-3cbeb0fd],.swiper-button-prev .iconfont[data-v-3cbeb0fd]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-3cbeb0fd],.swiper-button-prev .iconfont[data-v-3cbeb0fd]{font-size:11px}}.list-container>li[data-v-3cbeb0fd]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-3cbeb0fd]{padding-bottom:31px}.list-container>li+li[data-v-3cbeb0fd]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-3cbeb0fd]{padding-bottom:15px}.list-container>li+li[data-v-3cbeb0fd]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-3cbeb0fd]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-3cbeb0fd]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-3cbeb0fd]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-3cbeb0fd]{padding-bottom:16px}.has-right-column .calendar[data-v-3cbeb0fd]{width:280px;height:254px}}.view-more[data-v-3cbeb0fd]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-3cbeb0fd]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-3cbeb0fd]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-3cbeb0fd]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-3cbeb0fd]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-3cbeb0fd]{display:none}.view-more .iconfont[data-v-3cbeb0fd]{font-size:10px}}.about-content[data-v-3cbeb0fd]{color:#666}.about-content>p[data-v-3cbeb0fd]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-3cbeb0fd]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-3cbeb0fd]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-3cbeb0fd]{padding-right:10px;padding-left:10px}.about-content>p[data-v-3cbeb0fd]{font-size:13px;line-height:25px}.about-content>p+p[data-v-3cbeb0fd]{margin-top:12px}}.component-menuInner.last1>a[data-v-3cbeb0fd]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-3cbeb0fd]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-3cbeb0fd]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-3cbeb0fd]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-3cbeb0fd]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-3cbeb0fd]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-3cbeb0fd]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-3cbeb0fd]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-3cbeb0fd]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-3cbeb0fd]{color:#5cc8a8}.component-menuInner a[data-v-3cbeb0fd]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-3cbeb0fd]{color:#4daada}.component-menuInner a p[data-v-3cbeb0fd]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-3cbeb0fd]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-3cbeb0fd]{margin-top:20px}.component-menuInner a[data-v-3cbeb0fd]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-3cbeb0fd]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-3cbeb0fd]{font-size:34px}.component-menuInner a p[data-v-3cbeb0fd]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-3cbeb0fd]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-3cbeb0fd]{margin-top:10px}.component-menuInner a[data-v-3cbeb0fd]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-3cbeb0fd]{font-size:19px}.component-menuInner a p[data-v-3cbeb0fd]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-3cbeb0fd]{padding-right:15px;padding-left:15px}}.footer[data-v-3cbeb0fd]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-3cbeb0fd{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-3cbeb0fd]{position:relative}.eventAction[data-v-3cbeb0fd]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-3cbeb0fd .75s 0s linear infinite;animation:rotate-data-v-3cbeb0fd .75s 0s linear infinite}.copy-action-tips[data-v-3cbeb0fd]{position:fixed;top:50%;left:50%;padding:3px 6px;font-size:14px;color:#fff;background-color:rgba(0,0,0,.8);transform:translate3d(-50%,-50%,0);border-radius:4px;transition:all .5s}.component-footer[data-v-3cbeb0fd]{padding:0 0 19px;background-color:#49709c}@media only screen and (min-width:768px){.component-footer[data-v-3cbeb0fd]{height:433px;padding:25px 0 30px 17px}}.switch-info[data-v-3cbeb0fd]{padding-bottom:18px}@media only screen and (min-width:768px){.switch-info[data-v-3cbeb0fd]{height:184px}}@media only screen and (max-width:768px){.switch-info[data-v-3cbeb0fd]{padding-right:25px;padding-left:25px}}.title-tab[data-v-3cbeb0fd]{position:relative}.title-tab>li[data-v-3cbeb0fd]{position:relative;color:hsla(0,0%,100%,.6);cursor:pointer}.title-tab>li>.iconfont[data-v-3cbeb0fd]{margin-right:4px;font-size:12px}@media only screen and (min-width:768px){.title-tab[data-v-3cbeb0fd]{float:left;padding:13px 30px 13px 17px;margin-bottom:0;border-right:1px solid hsla(0,0%,100%,.1)}.title-tab>li[data-v-3cbeb0fd]{font-size:16px}.title-tab>li[data-v-3cbeb0fd]:after{opacity:0;content:\"\";position:absolute;width:2px;height:40px;margin-top:0;background-color:#fff;top:-7px;right:-30px}.title-tab>li.active[data-v-3cbeb0fd]{color:#fff}.title-tab>li.active[data-v-3cbeb0fd]:after{opacity:1}.title-tab>li+li[data-v-3cbeb0fd]{margin-top:28px}.title-tab>li>.iconfont[data-v-3cbeb0fd]{margin-right:19px;font-size:20px;vertical-align:-2px}.title-tab>li>.iconfont.icon-friend-link[data-v-3cbeb0fd]{font-size:17px}}@media only screen and (max-width:767px){.title-tab[data-v-3cbeb0fd]{display:flex;margin:0 -25px;justify-content:space-between;padding:16px 25px 13px}.title-tab[data-v-3cbeb0fd]:after{content:\"\";position:absolute;right:0;bottom:0;left:0;height:1px;background-color:#fff;transform:scaleY(.5);opacity:.1}.title-tab>li[data-v-3cbeb0fd]{line-height:18px;text-align:center;font-size:13px}.title-tab>li.active[data-v-3cbeb0fd]{color:#fff}}.tab-content[data-v-3cbeb0fd]{height:100%;color:#fff;font-size:12px}.tab-content-item[data-v-3cbeb0fd]{position:relative;height:100%}.tab-content li[data-v-3cbeb0fd]{overflow:hidden}.tab-content li>span[data-v-3cbeb0fd]{display:block;float:left;white-space:nowrap}.tab-content li>p[data-v-3cbeb0fd]{margin:0}@media only screen and (min-width:768px){.tab-content[data-v-3cbeb0fd]{margin-left:156px;padding-left:30px}.tab-content li+li[data-v-3cbeb0fd]{margin-top:10px}.tab-content li>span[data-v-3cbeb0fd]{width:40px}.tab-content li>p[data-v-3cbeb0fd]{margin-left:40px}.tab-content-item[data-v-3cbeb0fd]{padding-top:13px}}@media only screen and (max-width:767px){.tab-content li+li[data-v-3cbeb0fd]{margin-top:3px}.tab-content li>span[data-v-3cbeb0fd]{width:32px}.tab-content li>p[data-v-3cbeb0fd]{margin-left:32px}.tab-content-item[data-v-3cbeb0fd]{padding-top:10px}}.no-padding-top[data-v-3cbeb0fd]{padding-top:0}.open-time[data-v-3cbeb0fd]{font-size:14px}@media only screen and (min-width:768px){.friend-link>li[data-v-3cbeb0fd],.open-time>li[data-v-3cbeb0fd]{margin-top:10px}}@media only screen and (max-width:767px){.friend-link>li[data-v-3cbeb0fd],.friend-link li+li[data-v-3cbeb0fd],.open-time>li[data-v-3cbeb0fd],.open-time li+li[data-v-3cbeb0fd]{margin-top:8px;font-size:12px}}.footer-bottom[data-v-3cbeb0fd]{color:#fff;text-align:center}@media only screen and (min-width:768px){.footer-bottom[data-v-3cbeb0fd]{padding-top:21px;border-top:1px solid hsla(0,0%,100%,.1)}}@media only screen and (max-width:767px){.footer-bottom[data-v-3cbeb0fd]{margin-top:-8px;padding-right:25px;padding-left:25px}}.internet-contact[data-v-3cbeb0fd]{position:relative;font-size:0}.internet-contact>li[data-v-3cbeb0fd]{position:relative;cursor:pointer}.internet-contact>li[data-v-3cbeb0fd]:not(.mobile-text):hover{background-color:#5b7ea6}.internet-contact>li:not(.mobile-text):hover .qrcode-container[data-v-3cbeb0fd]{display:block}.internet-contact>li .iconfont[data-v-3cbeb0fd]{color:#fff;font-size:28px}@media only screen and (min-width:768px){.internet-contact[data-v-3cbeb0fd]{text-align:center}.internet-contact>li[data-v-3cbeb0fd]{display:inline-block;width:48px;height:48px;margin:0 24.5px;line-height:48px;font-size:28px;text-align:center}}@media only screen and (max-width:767px){.internet-contact[data-v-3cbeb0fd]{display:flex;justify-content:space-between;flex-wrap:wrap;text-align:center}.internet-contact[data-v-3cbeb0fd]:after{content:\"\";position:absolute;right:-25px;bottom:23px;left:-25px;height:1px;background-color:hsla(0,0%,100%,.1)}.internet-contact>li[data-v-3cbeb0fd]{display:flex;align-items:center;width:calc(50% - 9px);font-size:13px;line-height:14px}.internet-contact>li[data-v-3cbeb0fd]:nth-child(-n+2){height:57px;padding-left:12px;background-color:hsla(0,0%,100%,.1);border-radius:4px}.internet-contact>li[data-v-3cbeb0fd]:nth-child(-n+2):before{content:\"\";position:absolute;top:0;bottom:0;left:0;width:40.5px;background-color:#f8f8f8;opacity:.1}.internet-contact>li>.iconfont[data-v-3cbeb0fd]{margin-left:-1px;font-size:20px}.internet-contact>li .icon-sina-weibo[data-v-3cbeb0fd],.internet-contact>li>.icon-weichat[data-v-3cbeb0fd]{font-size:13px}.internet-contact>li>.client[data-v-3cbeb0fd]{margin-top:-13px;margin-left:21px}.internet-contact .last[data-v-3cbeb0fd]{padding-left:14.5px}.internet-contact .last[data-v-3cbeb0fd]:before{content:\"\";position:absolute;top:3px;left:0;width:1.5px;height:12.5px;background-color:hsla(0,0%,100%,.5)}.internet-contact .market-name[data-v-3cbeb0fd]{margin-top:19px;margin-bottom:26px;font-size:11px;line-height:14px}.internet-contact .mobile-name[data-v-3cbeb0fd]{margin-left:6px;font-size:13px;vertical-align:middle}.internet-contact .mobile-name>.copy-text[data-v-3cbeb0fd]{padding:1px 3px 0;margin-left:5px;font-size:10px;background-color:hsla(0,0%,100%,.1);border:none;outline:none}}.qrcode-container[data-v-3cbeb0fd]{display:none;position:absolute;top:-123px;left:50%;width:92px;height:114px;margin-left:-46px;padding-top:10px;padding-bottom:8px;font-size:14px;color:#666;text-align:center;background-color:#fff;border-radius:2px;box-shadow:0 6px 15px 0 #3b618c}.qrcode-container[data-v-3cbeb0fd]:after{content:\"\";position:absolute;bottom:-8px;left:50%;margin-left:-4px;width:0;height:0;border-width:4px;border-style:solid dashed dashed;border-color:#fff transparent transparent;border-radius:1px}.qrcode-container>img[data-v-3cbeb0fd]{max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto}.qrcode-container>span[data-v-3cbeb0fd]{display:block;margin-top:-7px}", ""]);

// exports


/***/ }),

/***/ "Ergs":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-7ce699b0]{float:left!important}.pull-right[data-v-7ce699b0]{float:right!important}.show[data-v-7ce699b0]{display:block!important}.hidden[data-v-7ce699b0]{display:none!important;visibility:hidden!important}.invisible[data-v-7ce699b0]{visibility:hidden}.loading[data-v-7ce699b0]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-7ce699b0 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-7ce699b0{0%{width:2px}to{width:15px}}a[data-v-7ce699b0]{text-decoration:none}ol[data-v-7ce699b0],ul[data-v-7ce699b0]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-7ce699b0],input[data-v-7ce699b0]{-webkit-appearance:none}button[data-v-7ce699b0]{border:none;background:none}input[data-v-7ce699b0],input[data-v-7ce699b0]:focus{outline:none}.none-data[data-v-7ce699b0]{position:relative}.none-data[data-v-7ce699b0]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-7ce699b0]{border:1px solid #5390d7;color:#5390d7}.return[data-v-7ce699b0]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-7ce699b0]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-7ce699b0]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-7ce699b0]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-7ce699b0]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-7ce699b0]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-7ce699b0]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-7ce699b0]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-7ce699b0]{color:#42a8dd}.not-overdue[data-v-7ce699b0]{color:#5dc9a8}.overdue[data-v-7ce699b0]{color:#f97f50}.overlay[data-v-7ce699b0]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-7ce699b0]{padding-left:15px}.padMargin[data-v-7ce699b0]{padding-right:15px;padding-left:15px}}.white-bg[data-v-7ce699b0]{background-color:#fff}.vertical-top[data-v-7ce699b0]{vertical-align:top}.vertical-middle[data-v-7ce699b0]{vertical-align:middle}.vertical-center[data-v-7ce699b0]{font-size:0;text-align:left}.vertical-center[data-v-7ce699b0]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-7ce699b0]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-7ce699b0]{color:#fff}.swiper-button-next[data-v-7ce699b0],.swiper-button-prev[data-v-7ce699b0]{background-image:none}.swiper-button-next .iconfont[data-v-7ce699b0],.swiper-button-prev .iconfont[data-v-7ce699b0]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-7ce699b0],.swiper-button-prev .iconfont[data-v-7ce699b0]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-7ce699b0],.swiper-button-prev .iconfont[data-v-7ce699b0]{font-size:11px}}.list-container>li[data-v-7ce699b0]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-7ce699b0]{padding-bottom:31px}.list-container>li+li[data-v-7ce699b0]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-7ce699b0]{padding-bottom:15px}.list-container>li+li[data-v-7ce699b0]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-7ce699b0]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-7ce699b0]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-7ce699b0]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-7ce699b0]{padding-bottom:16px}.has-right-column .calendar[data-v-7ce699b0]{width:280px;height:254px}}.view-more[data-v-7ce699b0]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-7ce699b0]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-7ce699b0]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-7ce699b0]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-7ce699b0]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-7ce699b0]{display:none}.view-more .iconfont[data-v-7ce699b0]{font-size:10px}}.about-content[data-v-7ce699b0]{color:#666}.about-content>p[data-v-7ce699b0]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-7ce699b0]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-7ce699b0]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-7ce699b0]{padding-right:10px;padding-left:10px}.about-content>p[data-v-7ce699b0]{font-size:13px;line-height:25px}.about-content>p+p[data-v-7ce699b0]{margin-top:12px}}.component-menuInner.last1>a[data-v-7ce699b0]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-7ce699b0]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-7ce699b0]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-7ce699b0]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-7ce699b0]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-7ce699b0]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-7ce699b0]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-7ce699b0]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-7ce699b0]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-7ce699b0]{color:#5cc8a8}.component-menuInner a[data-v-7ce699b0]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-7ce699b0]{color:#4daada}.component-menuInner a p[data-v-7ce699b0]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-7ce699b0]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-7ce699b0]{margin-top:20px}.component-menuInner a[data-v-7ce699b0]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-7ce699b0]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-7ce699b0]{font-size:34px}.component-menuInner a p[data-v-7ce699b0]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-7ce699b0]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-7ce699b0]{margin-top:10px}.component-menuInner a[data-v-7ce699b0]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-7ce699b0]{font-size:19px}.component-menuInner a p[data-v-7ce699b0]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-7ce699b0]{padding-right:15px;padding-left:15px}}.footer[data-v-7ce699b0]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-7ce699b0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-7ce699b0]{position:relative}.eventAction[data-v-7ce699b0]:before{content:\"\"}.ball-clip-rotate[data-v-7ce699b0],.eventAction[data-v-7ce699b0]:before{position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-7ce699b0 .75s 0s linear infinite;animation:rotate-data-v-7ce699b0 .75s 0s linear infinite}", ""]);

// exports


/***/ }),

/***/ "FCHf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-2580a5a2]{float:left!important}.pull-right[data-v-2580a5a2]{float:right!important}.show[data-v-2580a5a2]{display:block!important}.hidden[data-v-2580a5a2]{display:none!important;visibility:hidden!important}.invisible[data-v-2580a5a2]{visibility:hidden}.loading[data-v-2580a5a2]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-2580a5a2 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-2580a5a2{0%{width:2px}to{width:15px}}a[data-v-2580a5a2]{text-decoration:none}ol[data-v-2580a5a2],ul[data-v-2580a5a2]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-2580a5a2],input[data-v-2580a5a2]{-webkit-appearance:none}button[data-v-2580a5a2]{border:none;background:none}input[data-v-2580a5a2],input[data-v-2580a5a2]:focus{outline:none}.none-data[data-v-2580a5a2]{position:relative}.none-data[data-v-2580a5a2]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-2580a5a2]{border:1px solid #5390d7;color:#5390d7}.return[data-v-2580a5a2]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-2580a5a2]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-2580a5a2]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-2580a5a2]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-2580a5a2]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-2580a5a2]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-2580a5a2]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-2580a5a2]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-2580a5a2]{color:#42a8dd}.not-overdue[data-v-2580a5a2]{color:#5dc9a8}.overdue[data-v-2580a5a2]{color:#f97f50}.overlay[data-v-2580a5a2]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-2580a5a2]{padding-left:15px}.padMargin[data-v-2580a5a2]{padding-right:15px;padding-left:15px}}.white-bg[data-v-2580a5a2]{background-color:#fff}.vertical-top[data-v-2580a5a2]{vertical-align:top}.vertical-middle[data-v-2580a5a2]{vertical-align:middle}.vertical-center[data-v-2580a5a2]{font-size:0;text-align:left}.vertical-center[data-v-2580a5a2]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-2580a5a2]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-2580a5a2]{color:#fff}.swiper-button-next[data-v-2580a5a2],.swiper-button-prev[data-v-2580a5a2]{background-image:none}.swiper-button-next .iconfont[data-v-2580a5a2],.swiper-button-prev .iconfont[data-v-2580a5a2]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-2580a5a2],.swiper-button-prev .iconfont[data-v-2580a5a2]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-2580a5a2],.swiper-button-prev .iconfont[data-v-2580a5a2]{font-size:11px}}.list-container>li[data-v-2580a5a2]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-2580a5a2]{padding-bottom:31px}.list-container>li+li[data-v-2580a5a2]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-2580a5a2]{padding-bottom:15px}.list-container>li+li[data-v-2580a5a2]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-2580a5a2]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-2580a5a2]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-2580a5a2]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-2580a5a2]{padding-bottom:16px}.has-right-column .calendar[data-v-2580a5a2]{width:280px;height:254px}}.view-more[data-v-2580a5a2]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-2580a5a2]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-2580a5a2]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-2580a5a2]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-2580a5a2]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-2580a5a2]{display:none}.view-more .iconfont[data-v-2580a5a2]{font-size:10px}}.about-content[data-v-2580a5a2]{color:#666}.about-content>p[data-v-2580a5a2]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-2580a5a2]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-2580a5a2]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-2580a5a2]{padding-right:10px;padding-left:10px}.about-content>p[data-v-2580a5a2]{font-size:13px;line-height:25px}.about-content>p+p[data-v-2580a5a2]{margin-top:12px}}.component-menuInner.last1>a[data-v-2580a5a2]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-2580a5a2]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-2580a5a2]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-2580a5a2]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-2580a5a2]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-2580a5a2]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-2580a5a2]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-2580a5a2]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-2580a5a2]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-2580a5a2]{color:#5cc8a8}.component-menuInner a[data-v-2580a5a2]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-2580a5a2]{color:#4daada}.component-menuInner a p[data-v-2580a5a2]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-2580a5a2]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-2580a5a2]{margin-top:20px}.component-menuInner a[data-v-2580a5a2]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-2580a5a2]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-2580a5a2]{font-size:34px}.component-menuInner a p[data-v-2580a5a2]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-2580a5a2]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-2580a5a2]{margin-top:10px}.component-menuInner a[data-v-2580a5a2]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-2580a5a2]{font-size:19px}.component-menuInner a p[data-v-2580a5a2]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-2580a5a2]{padding-right:15px;padding-left:15px}}.footer[data-v-2580a5a2]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-2580a5a2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-2580a5a2]{position:relative}.eventAction[data-v-2580a5a2]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-2580a5a2 .75s 0s linear infinite;animation:rotate-data-v-2580a5a2 .75s 0s linear infinite}.modal-overlay[data-v-2580a5a2]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10;background-color:rgba(0,0,0,.2)}.modal-container[data-v-2580a5a2]{position:fixed;top:50%;z-index:1000;background-color:#fff;border-radius:8px}.modal-container .icon-close2[data-v-2580a5a2]{position:absolute;top:9px;right:9px;font-size:13px;color:#bec5c9;cursor:pointer;transition:all .5s}.modal-container .icon-close2[data-v-2580a5a2]:hover{opacity:.7}.modal-container>.modal-title[data-v-2580a5a2]{position:relative;margin-top:0;margin-bottom:0;font-size:19px;color:#333;text-align:center;overflow:hidden;font-weight:400}.modal-container>.modal-title>.site-help[data-v-2580a5a2]{position:absolute;right:0;bottom:0;color:#999;font-size:12px}.modal-container>.modal-title .icon-help[data-v-2580a5a2]{margin-right:3px;vertical-align:middle}@media only screen and (min-width:768px){.modal-container[data-v-2580a5a2]{left:50%;width:452px;height:500px;margin-top:-250px;margin-left:-226px;padding:47px 36px 53px}.modal-container .icon-close2[data-v-2580a5a2]{top:18px;right:18px}.modal-container .modal-title[data-v-2580a5a2]{font-size:24px}.modal-container .modal-title>.site-help[data-v-2580a5a2]{bottom:3px;font-size:14px}.modal-container .modal-title .icon-help[data-v-2580a5a2]{margin-right:5px;vertical-align:-1px}}@media only screen and (max-width:767px){.modal-container[data-v-2580a5a2]{right:20px;left:20px;padding:33px 20px 40px;transform:translateY(-50%)}}.user-login-list[data-v-2580a5a2]{margin-top:15px;margin-bottom:20px}.user-login-list>li[data-v-2580a5a2]{position:relative;height:43px;font-size:14px;color:#999}.user-login-list>li>.iconfont[data-v-2580a5a2]{position:absolute;top:11px;left:14px;font-size:16px;vertical-align:middle}.user-login-list>li>input[data-v-2580a5a2]{width:100%;height:100%;padding:12px 14px 11px 40px;border:1px solid #e0e5e8;vertical-align:-3px;border-radius:4px;transition:all .5s}.user-login-list>li>input[data-v-2580a5a2]:focus{border-color:#5390d7}.user-login-list>li>input:focus+.iconfont[data-v-2580a5a2]{color:#5390d7}.user-login-list>li+li[data-v-2580a5a2]{margin-top:15px}.user-login-list .has-verify-code>input[data-v-2580a5a2]{width:calc(100% - 119px)}.user-login-list .verify-code-container[data-v-2580a5a2]{float:right;width:98px;height:43px}.user-login-list .verify-code-container>small[data-v-2580a5a2]{display:inline-block;text-align:justify;width:100%;height:20px;padding:3px 5px;cursor:pointer}.user-login-list .verify-code-container>small[data-v-2580a5a2]:after{display:inline-block;content:\"\";padding-left:100%}.user-login-list .verify-code-container>img[data-v-2580a5a2]{width:100%;height:100%;cursor:pointer}@media only screen and (min-width:768px){.user-login-list[data-v-2580a5a2]{margin-top:40px;margin-bottom:34px}.user-login-list>li[data-v-2580a5a2]{height:45px}.user-login-list>li+li[data-v-2580a5a2]{margin-top:20px}.user-login-list>li .iconfont[data-v-2580a5a2]{top:9px;font-size:20px}.user-login-list>li>input[data-v-2580a5a2]{padding-left:48px}.user-login-list .verify-code-container[data-v-2580a5a2]{width:91px;height:45px}}.login-action[data-v-2580a5a2]{overflow:hidden;line-height:20px;color:#666;font-size:12px}@media only screen and (min-width:768px){.login-action[data-v-2580a5a2]{font-size:14px}.login-action .label-checked .icon-unselected2[data-v-2580a5a2]{font-size:18px}}.find-pwd[data-v-2580a5a2]{float:right;color:#666}.label-checked>input[type=checkbox][data-v-2580a5a2]{position:absolute;left:-9999px}.label-checked>input[type=checkbox]:checked+.icon-unselected2[data-v-2580a5a2]{color:#5390d7}.label-checked>input[type=checkbox]:checked+.icon-unselected2[data-v-2580a5a2]:before{content:\"\\E655\"}.label-checked .icon-unselected2[data-v-2580a5a2]{margin-right:6px;font-size:15px;color:#ccc;border-radius:2px;vertical-align:-1px}.btn-wrap[data-v-2580a5a2]{padding-top:10px}.btn-wrap>.btn-primary[data-v-2580a5a2]{width:100%;height:44px;border:none;line-height:44px;text-align:center;font-size:14px;color:#fff;background-color:#5390d7;border-radius:4px;transition:all .5s}.btn-wrap>.btn-primary[data-v-2580a5a2]:hover{opacity:.8}@media only screen and (min-width:768px){.btn-wrap[data-v-2580a5a2]{padding-top:15px}.btn-wrap>.btn-primary[data-v-2580a5a2]{height:48px;line-height:48px;font-size:18px}}.other-action[data-v-2580a5a2]{padding-top:5px;text-align:center;font-size:13px;color:#666}.other-action>a[data-v-2580a5a2]{color:#666}.other-action .icon-missing[data-v-2580a5a2]{margin-right:4px;color:#888}.other-action .other-login-model[data-v-2580a5a2]{margin-left:17px;color:#4573ab;text-decoration:underline}@media only screen and (min-width:768px){.other-action[data-v-2580a5a2]{padding-top:18px;text-align:center;font-size:14px}}.modal-note[data-v-2580a5a2]{position:absolute;top:16px;left:0;text-align:center;width:100%}.modal-note .modal-msg[data-v-2580a5a2]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}", ""]);

// exports


/***/ }),

/***/ "Fkjb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kRQN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("dc6812d0", content, true, {});

/***/ }),

/***/ "Gd4r":
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
    global.columnTitle = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
    name: "columnTitle",

    data: function data() {
      return {};
    },


    props: {
      columnTitle: {
        type: String,
        default: '栏目标题'
      },
      customerClass: {
        type: String,
        default: ''
      }
    },

    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "H/O1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("RxSc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6b5e041a", content, true, {});

/***/ }),

/***/ "HKo4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kTMG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7a0bb00c", content, true, {});

/***/ }),

/***/ "HfIH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("OPoU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5ced43c1", content, true, {});

/***/ }),

/***/ "Hq/o":
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
    global.fullMenu = mod.exports;
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
  //
  //

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "fullMenu",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {
      self.commitEvent('changeIsHideFullFooter', true);
    },


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "I3lG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue__ = __webpack_require__("MI0i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7943244c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_headInfo_vue__ = __webpack_require__("kYPN");
function injectStyle (ssrContext) {
  __webpack_require__("Fkjb")
  __webpack_require__("uBxM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7943244c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_headInfo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7943244c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_headInfo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "I8tg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue__ = __webpack_require__("/hFP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_166ad2e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsBulletin_vue__ = __webpack_require__("M8w+");
function injectStyle (ssrContext) {
  __webpack_require__("xmYi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-166ad2e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsBulletin_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_166ad2e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newsBulletin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("7+uW"), __webpack_require__("NYxO")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vue'), require('vuex'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vue, global.vuex);
    global.index = mod.exports;
  }
})(this, function (module, exports, _vue, _vuex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _vue2 = _interopRequireDefault(_vue);

  var _vuex2 = _interopRequireDefault(_vuex);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _vue2.default.use(_vuex2.default);

  var store = {
    state: {
      searchEvent: null,
      online: 'http://shlibrary.faqrobot.cn/robot/appChat.html?sysNum=148997688742318882', // 在线咨询
      bookCoverUrl: 'http://e.library.sh.cn/wread2017/_cover/',
      bookCoverLinks: 'http://218.1.116.99/Image/servlet/ImageServlet?bib=',
      defaultBookCover: 'http://e.library.sh.cn/elib.jpg', // 默认图书封面
      isMobile: document.body.clientWidth < 768 ? true : false, // 当前是否为手机版
      isIndexPage: false, // 当前页面是否为首页
      isHideFullFooter: false, // 是否隐藏全部footer
      footerHeight: 0,
      showSearchBar: false, // 显示搜索框
      showLoginModal: false, // 显示登录Modal
      showLoginIcon: localStorage.getItem('loginUserInfo') ? true : false, // 登录完毕显示登录图标
      tempPath: {
        path: '/index/myLibrary',
        query: {} // 登录后的跳转路径
      } },
    mutations: {
      changeIsIndexPage: function changeIsIndexPage(state, payload) {
        state.isIndexPage = payload;
      },
      changeIsHideFullFooter: function changeIsHideFullFooter(state, payload) {
        state.isHideFullFooter = payload;
      },
      changeFooterHeight: function changeFooterHeight(state, payload) {
        state.footerHeight = payload;
      },
      changeSearchBar: function changeSearchBar(state, payload) {
        state.showSearchBar = payload;
      },
      changeshowLoginModal: function changeshowLoginModal(state, payload) {
        state.showLoginModal = payload;
      },
      changeshowLoginIcon: function changeshowLoginIcon(state, payload) {
        state.showLoginIcon = payload;
      },
      changeSearchEvent: function changeSearchEvent(state, payload) {
        state.searchEvent = payload;
      },
      changeTempPath: function changeTempPath(state, payload) {
        // console.log(payload);
        state.tempPath = payload;
      }
    },
    actions: {// 允许包含异步操作
      // context
    },
    getters: {// 可当做是 `store` 的计算属性

    }
  };

  exports.default = new _vuex2.default.Store(store);
  module.exports = exports['default'];
});

/***/ }),

/***/ "Is35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__("W1k5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
function injectStyle (ssrContext) {
  __webpack_require__("8FcW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JA8L":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("woOf"), __webpack_require__("7+uW"), __webpack_require__("2cIp"), __webpack_require__("EKx1"), __webpack_require__("BlK1"), __webpack_require__("oAV5")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/assign'), require('vue'), require('../server'), require('sha256'), require('../utils/ls'), require('../utils/utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assign, global.vue, global.server, global.sha256, global.ls, global.utils);
    global.api = mod.exports;
  }
})(this, function (exports, _assign, _vue, _server, _sha, _ls, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.doubanHandle = exports.yzmHandle = exports.serverInfo = exports.billBoard = exports.Classes = exports.bookInfoApi = exports.lendingInfo = exports.libsQuery = exports.ebookSearch = exports.resommended = exports.activityCenter = exports.IssueService = exports.userprofiles = exports.modalLogin = exports.NewsBulletin = exports.getQrcodeId = exports.logOut = exports.tokenHandle = undefined;

  var _assign2 = _interopRequireDefault(_assign);

  var _vue2 = _interopRequireDefault(_vue);

  var _sha2 = _interopRequireDefault(_sha);

  var _ls2 = _interopRequireDefault(_ls);

  var _utils2 = _interopRequireDefault(_utils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 通用工具方法

  // 今天
  // SHA256加密算法
  var currentDate = _utils2.default.formatDate(new Date(), '-').timerStr; // localStorage
  // Vue-Axios ajax请求
  /**
   * @name: API - 统一管理API请求
   * @author: Xiaxs(xiaxiansheng@adinnet.cn)
   */


  var baseUrl = '/apis/'; // dev模式代理内配置
  // const baseUrl = ''; 

  var config = {
    tokenRequest: baseUrl + 'token?', // token接口http地址
    apiRequest: baseUrl + 'api?', // api接口http地址
    validMethod: 'token_acquire', // 获取 AAT | UAT | URT使用, 固定参数
    unvalidMethod: 'token_nullify', // 注销 AAT | UAT | URT使用, 固定参数
    refreshMethod: 'token_refresh', // 刷新 AAT | UAT | URT使用, 固定参数
    appId: 'shlib.web.h5.1', // app id => 固定
    appsecret: 'FE588C8B064805CF3AF5FB722EAF4419D7B67574', // app secret => 客户提供, 固定
    // deviceId: 'hqxu20171028',             // 访问网站设备id
    deviceId: _utils2.default.guid(), // 访问网站设备id
    aat: _ls2.default.getItem('AAT'), // 获取登录后存储的 AAT 信息
    uat: _ls2.default.getItem('UAT'), // 获取登录后存储的 UAT 信息
    urt: _ls2.default.getItem('URT'), // 获取登录后存储的 URT 信息
    uatexpiretime: 'uat_1' // uat失效时间（1天/7天），不传值默认1天
  };

  /**
   * [tokenHandle 平台令牌]
   * @param getAAT => 生成AAT
   * @param getUATURT => 生成 UAT | URT
   * @param refreshUATURT => 刷新 UAT | URT
   * @param nullifyAATUAT => 注销AAT | UAT
   * @param getUATURTThirdPart => 第三方登录生成 UAT | URT
   * @param validcheckToken => token验证
   * @param lsURTUAT => 本地存储URT | UAT
   */
  var tokenHandle = exports.tokenHandle = {
    getAAT: function getAAT() {
      var self = this;
      var date = _utils2.default.formatDate().timerStr;
      var secret = (0, _sha2.default)(config.appId + date + config.appsecret);
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: config.validMethod,
          type: 'aat',
          appid: config.appId,
          //secret,
          deviceid: config.deviceId
        }
      }).then(function (res) {
        var AAT = res.aat;
        config.aat = AAT;
        self.validcheckToken('aat').then(function (inner) {
          config.aat = AAT;
          _ls2.default.setKeysList({
            AAT: AAT,
            AAT_exptime: Date.parse(res.expiretime_aat)
          });
          //ls.setItem('AAT', AAT); // 存储AAT
          //ls.setItem('AAT_exptime', Date.parse(res.expiretime_aat)); // 存储AAT失效时间
        });
      });
    },
    getUATURT: function getUATURT(_ref) {
      var _ref$username = _ref.username,
          username = _ref$username === undefined ? '' : _ref$username,
          _ref$password = _ref.password,
          password = _ref$password === undefined ? '' : _ref$password,
          _ref$tokentype = _ref.tokentype,
          tokentype = _ref$tokentype === undefined ? '' : _ref$tokentype;

      var self = this;
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: config.validMethod,
          type: 'uat',
          username: username,
          password: password,
          tokentype: tokentype,
          aat: config.aat
        }
      }).then(function (res) {
        config.uat = res.uat;
        config.urt = res.urt;
        // 本地存储UAT | URT
        _ls2.default.setKeysList({
          UAT: res.uat,
          URT: res.urt,
          UAT_exptime: Date.parse(res.expiretime_uat),
          URT_exptime: Date.parse(res.expiretime_urt),
          shlibBorrower: res.us.shlibBorrower, // 用于获取 '我的悦读账单'
          loginUserInfo: {}
        });
      });
    },
    refreshUATURT: function refreshUATURT() {
      var self = this;
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: config.refreshMethod,
          aat: config.aat,
          urt: config.urt
        }
      }).then(function (res) {
        config.urt = res.urt;
        config.uat = res.uat;
        self.lsURTUAT(res);
      });
    },
    lsURTUAT: function lsURTUAT(res) {
      // 本地存储UAT | URT
      _ls2.default.setKeysList({
        UAT: res.uat,
        URT: res.urt,
        UAT_exptime: Date.parse(res.expiretime_uat),
        URT_exptime: Date.parse(res.expiretime_urt)
      });
    },
    nullifyAATUAT: function nullifyAATUAT(tokentype) {
      var self = this;
      // 注销AAT
      var params = {
        method: config.unvalidMethod,
        type: tokentype,
        deviceid: config.deviceId,
        appid: config.appId
      };

      // 注销UAT
      if (tokentype === 'uat') {
        params = (0, _assign2.default)({}, params, {
          uat: config.uat
        });
      }
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: params
      }).then(function () {
        if (tokentype === 'uat') {
          config.uat = null;
          _ls2.default.removeList(['UAT', 'URT', 'loginUserInfo', 'UAT_exptime', 'URT_exptime']);
        } else {
          config.aat = null;
          _ls2.default.removeList(['AAT', 'AAT_exptime']);
        }
      });
    },
    getUATURTThirdPart: function getUATURTThirdPart(code) {
      var self = this;
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: config.validMethod,
          type: 'uat_oauth',
          aat: config.aat,
          code: code,
          tokentype: 'uat_7'
        }
      }).then(function (res) {
        self.lsURTUAT(res);
      });
    },
    validcheckToken: function validcheckToken(tokentype) {
      /**
       * 验证AAT | UAT | URT令牌
       * @param {String} tokentype: 'aat','uat','urt'
       */
      var tokenvalue = '';
      switch (tokentype) {
        case 'aat':
          tokenvalue = config.aat;
          break;
        case 'uat':
          tokenvalue = config.uat;
          break;
        case 'urt':
          tokenvalue = config.urt;
          break;
        default:
          break;
      }

      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: 'token_validcheck',
          tokentype: tokentype,
          tokenvalue: tokenvalue
        }
      }).catch(function (err) {
        console.error('token 不合法!');
      });
    }
  };

  function checkToken() {
    if (!config.aat) {
      tokenHandle.getAAT();
    }
  }

  checkToken();
  /**
   * 退出登录
   */
  var logOut = exports.logOut = function logOut() {
    _ls2.default.removeList(['UAT', 'URT', 'loginUserInfo', 'UAT_exptime', 'URT_exptime', 'exList', 'shlibBorrower', 'lossAndFindUrl']);
    config.uat = '';
    config.urt = '';
  };

  /**
   * api - 获取二维码读者证
   */
  var getQrcodeId = exports.getQrcodeId = function getQrcodeId() {
    var params = {
      apiid: 'shlib.qrid',
      uat: config.uat
    };

    return apiUnityHandle(params);
  };

  /**
   * api - 新闻公告
   *    1. 新闻列表
   *    2. 新闻详情
   *    3. 详情页导航
   */
  var NewsBulletin = exports.NewsBulletin = {
    /**
     * 新闻公告 - 获取新闻公告列表
     * @param {String} type 查询类型 => 新闻 | 公告
     * @param {Number} page 页码
     * @param {Number} pagesize 每页显示, default = 30
     */
    getNewsList: function getNewsList(type) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var assignParams = encodeURIComponent('page=' + page + '&pagesize=' + pagesize + '&type=' + type);
      var params = {
        apiid: 'shlib.news',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 新闻公告 - 获取新闻详情
     * @param {Number} newsid 新闻id
     */
    getNewsDetail: function getNewsDetail(newsid) {
      var assignParams = encodeURIComponent('newsid=' + newsid);
      var params = {
        apiid: 'shlib.newsinfo',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    // 详情页导航
    newsDetailNavi: function newsDetailNavi(newsid) {
      var assignParams = encodeURIComponent('newsid=' + newsid);
      var params = {
        apiid: 'shlib.news.navi',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 登录Modal
   *    1. 挂失 | 找回 => lossAndFind
   *    2. 其他登录方式 => otherLoginMethods
   *    5. 获取验证码图片 => getVerifyCode
   */

  var modalLogin = exports.modalLogin = {
    lossAndFind: function lossAndFind() {
      var params = {
        apiid: 'shlib.auth.lossandfind'
      };

      return apiUnityHandle(params);
    },

    /**
     * 其他登录方式
     * @param {*} code 
     */
    otherLoginMethods: function otherLoginMethods(code) {
      var self = this;
      return (0, _server.Axios)({
        url: config.tokenRequest,
        params: {
          method: config.validMethod,
          type: 'uat_oauth',
          aat: config.aat,
          code: code,
          tokentype: 'uat_7'
        }
      }).then(function (res) {
        config.uat = res.uat;
        config.urt = res.urt;
        // 本地存储UAT | URT
        _ls2.default.setKeysList({
          UAT: res.uat,
          URT: res.urt,
          UAT_exptime: Date.parse(res.expiretime_uat),
          URT_exptime: Date.parse(res.expiretime_urt),
          shlibBorrower: res.us.shlibBorrower, // 用于获取 '我的悦读账单'
          loginUserInfo: {}
        });
      });
    },
    getVerifyCode: function getVerifyCode() {}
  };

  /**
   * api - 获取用户个人信息
   *      1. 获取用户个人信息
   *      2. 获取用户中心功能菜单
   *      3. 获取用户个人图书推荐
   */
  var userprofiles = exports.userprofiles = {
    getUserProfiles: function getUserProfiles(_ref2) {
      var _ref2$uat = _ref2.uat,
          uat = _ref2$uat === undefined ? config.uat : _ref2$uat;

      var params = {
        apiid: 'shlib.auth.getuserinfo',
        uat: uat
      };

      return apiUnityHandle(params);
    },
    getUserCenter: function getUserCenter(_ref3) {
      var _ref3$uat = _ref3.uat,
          uat = _ref3$uat === undefined ? config.uat : _ref3$uat;

      var params = {
        apiid: 'shlib.auth.usercenter',
        uat: uat
      };

      return apiUnityHandle(params);
    },
    getBookrecom: function getBookrecom() {
      var params = {
        apiid: 'shlib.user.bookrecom',
        uat: config.uat
      };

      return apiUnityHandle(params);
    },
    getInfobyids: function getInfobyids(_ref4) {
      var _ref4$idsStr = _ref4.idsStr,
          idsStr = _ref4$idsStr === undefined ? '' : _ref4$idsStr;

      var assignParams = encodeURIComponent('ids=' + idsStr);
      var params = {
        apiid: 'shlib.books.infobyids',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 问答
   *    1. 问答列表
   *    2. 问答列表搜索关键词
   *    3. 问题详情翻页导航
   */
  var IssueService = exports.IssueService = {
    /**
     * 问答 - 获取问答列表
     * @param {String} type 问题类型
     * @param {Number} page 页码
     * @param {Number} pagesize 每页显示条数, default = 30
     */
    getIssueList: function getIssueList(type) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var assignParams = encodeURIComponent('type=' + type + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.qna.info',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    // 问题详情翻页导航
    getIssueListByID: function getIssueListByID(id) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var assignParams = encodeURIComponent('id=' + id + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.qna.navibyid',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 问答 - 搜索问答列表
     * @param {String} keyword 搜索关键词
     * @param {Number} page 页码 default: 1
     * @param {Number} pagesize 每页数量 default: 30
     */
    getSearchIssueList: function getSearchIssueList(keyword) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var assignParams = encodeURIComponent('keyword=' + keyword + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.qna.search',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 活动中心
   *    1. 活动月历查询
   *    2. 单个活动详情查询与活动列表查询
   */

  var activityCenter = exports.activityCenter = {
    /**
     * [getEventsMonth 活动月历查询]
     * @param {Date} date 查询日期
     */
    getEventsMonth: function getEventsMonth() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentDate;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentDate;

      var assignParams = encodeURIComponent('start=' + start + '&end=' + end);
      var params = config.uat ? {
        apiid: 'shlib.events.month',
        uat: config.uat,
        parm: assignParams
      } : {
        apiid: 'shlib.events.month',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * [getEventInfo 单个活动详情查询与活动列表查询]
     * @param {Date} date
     * @param {Int} pagesize
     */
    getEventInfo: function getEventInfo() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentDate;
      var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var assignParams = encodeURIComponent('date=' + date + '&page=1&pagesize=' + pagesize);
      var params = config.uat ? {
        apiid: 'shlib.events.info',
        uat: config.uat,
        parm: assignParams
      } : {
        apiid: 'shlib.events.info',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * [getEventDetailByID 单个活动详情]
     * @param {String} id 活动id
     */
    getEventDetailByID: function getEventDetailByID(id) {
      var assignParams = encodeURIComponent('id=' + id);
      var params = config.uat ? {
        apiid: 'shlib.events.info',
        uat: config.uat,
        parm: assignParams
      } : {
        apiid: 'shlib.events.info',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 获取我的活动收藏
     * @param {Number} page ：页码
     * @param {Number} pagesize ：页大小
     */
    getMyEvents: function getMyEvents() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var assignParams = encodeURIComponent('page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.events.getmyevents',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 加入我的活动收藏
     * @param {Number} eventid ：活动id
     */
    addMyEvents: function addMyEvents(eventid) {
      var assignParams = encodeURIComponent('eventid=' + eventid);
      var params = {
        apiid: 'shlib.events.addmyevents',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 删除我的活动收藏
     * @param {Number} eventid ：活动id
     */
    removeMyEvents: function removeMyEvents(eventid) {
      var assignParams = encodeURIComponent('eventid=' + eventid);
      var params = {
        apiid: 'shlib.events.removemyevents',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 活动详情导航
     * @param {Number} eventid ：活动id
     */
    naviEventsInfo: function naviEventsInfo(eventid) {
      var assignParams = encodeURIComponent('id=' + eventid);
      var params = config.uat ? {
        apiid: 'shlib.events.navi',
        uat: config.uat,
        parm: assignParams
      } : {
        apiid: 'shlib.events.navi',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 每周推荐
   *    1. 根据season id 获取所有该专题图书
   *    2. 顺序浏览所有专题图书
   *    3. 根据图书id获取图书详情
   *    4. 获取每周推荐往期列表
   */
  var resommended = exports.resommended = {
    getWeeklyId: function getWeeklyId() {
      var seasonid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

      var assignParams = encodeURIComponent('seasonid=' + seasonid);
      var params = {
        apiid: 'shlib.eread.weeklyrec.id',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    getWeeklyInfos: function getWeeklyInfos() {
      var maxLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      var assignParams = encodeURIComponent('page=1&pagesize=' + maxLength);
      var params = {
        apiid: 'shlib.eread.weeklyrec.infos',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    getEpubinfo: function getEpubinfo() {
      var bookid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hlibEpub_1501641072';

      var assignParams = encodeURIComponent('bookid=' + bookid);
      var params = {
        apiid: 'shlib.eread.weeklyrec.epubinfo',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 往期查看
     */
    getWeeklyPastList: function getWeeklyPastList() {
      var assignParams = encodeURIComponent('');
      var params = {
        apiid: 'shlib.eread.weeklyrec.titles',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /** 
   * api - 电子书检索, 书目检索, 期刊检索
   *      1. 电子书检索
   *      2. 期刊检索
   *      3. 书目检索
   */
  var ebookSearch = exports.ebookSearch = {
    equbSearch: function equbSearch(_ref5) {
      var _ref5$keyword = _ref5.keyword,
          keyword = _ref5$keyword === undefined ? '' : _ref5$keyword,
          _ref5$clsType = _ref5.clsType,
          clsType = _ref5$clsType === undefined ? '' : _ref5$clsType,
          _ref5$page = _ref5.page,
          page = _ref5$page === undefined ? 1 : _ref5$page,
          _ref5$pagesize = _ref5.pagesize,
          pagesize = _ref5$pagesize === undefined ? 20 : _ref5$pagesize,
          _ref5$classtype = _ref5.classtype,
          classtype = _ref5$classtype === undefined ? '综合性图书' : _ref5$classtype,
          _ref5$level = _ref5.level,
          level = _ref5$level === undefined ? 'simple' : _ref5$level,
          _ref5$source = _ref5.source,
          source = _ref5$source === undefined ? 'wechat' : _ref5$source;

      var assignParams = encodeURIComponent('source=' + source + '&keyword=' + keyword + '&classtype=' + clsType + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.epub.search',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    magazineSearch: function magazineSearch(_ref6) {
      var _ref6$source = _ref6.source,
          source = _ref6$source === undefined ? '' : _ref6$source,
          _ref6$keyword = _ref6.keyword,
          keyword = _ref6$keyword === undefined ? '' : _ref6$keyword,
          _ref6$classtype = _ref6.classtype,
          classtype = _ref6$classtype === undefined ? 'classh' : _ref6$classtype,
          _ref6$page = _ref6.page,
          page = _ref6$page === undefined ? 1 : _ref6$page,
          _ref6$pagesize = _ref6.pagesize,
          pagesize = _ref6$pagesize === undefined ? 20 : _ref6$pagesize,
          _ref6$viewtype = _ref6.viewtype,
          viewtype = _ref6$viewtype === undefined ? '' : _ref6$viewtype,
          _ref6$order = _ref6.order,
          order = _ref6$order === undefined ? 'date' : _ref6$order,
          _ref6$ip = _ref6.ip,
          ip = _ref6$ip === undefined ? '10.1.31.111' : _ref6$ip;

      var assignParams = encodeURIComponent('source=' + source + '&keyword=' + keyword + '&classtype=' + classtype + '&page=' + page + '&pagesize=' + pagesize + '&viewtype=' + viewtype + '&order=' + order + '&ip=' + ip);
      // let params = config.uat ? {
      //   apiid: 'shlib.magazine.search',
      //   uat: config.uat,
      //   parm: assignParams
      // } : {
      //   apiid: 'shlib.magazine.search',
      //   parm: assignParams
      // };
      var params = {
        apiid: 'shlib.magazine.search',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    getIPAC: function getIPAC(_ref7) {
      var _ref7$keywords = _ref7.keywords,
          keywords = _ref7$keywords === undefined ? '' : _ref7$keywords,
          _ref7$page = _ref7.page,
          page = _ref7$page === undefined ? 1 : _ref7$page,
          _ref7$pagesize = _ref7.pagesize,
          pagesize = _ref7$pagesize === undefined ? 20 : _ref7$pagesize;

      var assignParams = encodeURIComponent('query=title:' + keywords + ' or author:' + keywords + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.solr.search',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 分馆导航
   *    1. 列表，距离计算
   *    2. 根据馆ID查询
   */
  var libsQuery = exports.libsQuery = {
    getLibsInfo: function getLibsInfo(_ref8) {
      var _ref8$lng = _ref8.lng,
          lng = _ref8$lng === undefined ? '' : _ref8$lng,
          _ref8$lat = _ref8.lat,
          lat = _ref8$lat === undefined ? '' : _ref8$lat,
          _ref8$district = _ref8.district,
          district = _ref8$district === undefined ? '' : _ref8$district,
          _ref8$level = _ref8.level,
          level = _ref8$level === undefined ? '' : _ref8$level,
          _ref8$page = _ref8.page,
          page = _ref8$page === undefined ? 1 : _ref8$page,
          _ref8$pagesize = _ref8.pagesize,
          pagesize = _ref8$pagesize === undefined ? 20 : _ref8$pagesize;

      var assignParams = encodeURIComponent('x=' + lng + '&y=' + lat + '&district=' + district + '&level=' + level + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.libs.info',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    getLibIdInfo: function getLibIdInfo(id) {
      var assignParams = encodeURIComponent('libid=' + id);
      var params = {
        apiid: 'shlib.libs.libidinfo',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 图书借阅
   *    1. 当前借阅
   *    2. 借阅历史
   *    3. 图书续借
   */
  var lendingInfo = exports.lendingInfo = {
    currentLending: function currentLending() {
      var params = {
        apiid: 'shlib.bookinfo',
        uat: config.uat
      };

      return apiUnityHandle(params);
    },
    bookHistory: function bookHistory() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

      var assignParams = encodeURIComponent('page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.bookhistory',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    bookrenew: function bookrenew() {
      var params = {
        apiid: 'shlib.bookrenew',
        uat: config.uat
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 图书详情
   *    1. 根据图书id获取图书详情接口(电子书)
   *    2. 馆藏信息查询接口
   *    3. 加入我的图书书架
   *    4. 加入我的期刊书架
   *    5. 从书架删除接口&删除阅读进度记录
   *    6. 从期刊架删除接口&删除阅读进度记录
   *    7. 期刊详情
   *    8. 获取我的图书书架
   *    9. 获取我的期刊书架
   */
  var bookInfoApi = exports.bookInfoApi = {
    epubinfo: function epubinfo() {
      var bookid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var assignParams = encodeURIComponent('bookid=' + bookid);
      var params = {
        apiid: 'shlib.eread.epubinfo',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    ipacInfo: function ipacInfo(_ref9) {
      var _ref9$id = _ref9.id,
          id = _ref9$id === undefined ? '' : _ref9$id,
          _ref9$page = _ref9.page,
          page = _ref9$page === undefined ? 1 : _ref9$page,
          _ref9$pagesize = _ref9.pagesize,
          pagesize = _ref9$pagesize === undefined ? 1 : _ref9$pagesize;

      var assignParams = encodeURIComponent('query=id:' + id + '&page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.solr.search',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    bookcollection: function bookcollection() {
      var bib = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var assignParams = encodeURIComponent('bib=' + bib);
      var params = {
        apiid: 'shlib.bookcollection',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 加入书架
     * @param {*} bookid ：图书id
     * @param {*} bookname ：图书名称
     * @param {*} progress ：阅读进度
     */
    addBookshelf: function addBookshelf() {
      var bookid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var bookname = arguments[1];
      var progress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var assignParams = encodeURIComponent('bookid=' + bookid + '&bookname=' + bookname + '&progress=' + progress);
      var params = {
        apiid: 'shlib.eread.addbookshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 加入期刊架
     * @param {*} magid ：期刊id
     * @param {*} progress ：阅读进度
     */
    addMagshelf: function addMagshelf(magid) {
      var progress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var assignParams = encodeURIComponent('magid=' + magid + '&progress=' + progress);
      var params = {
        apiid: 'shlib.eread.addmagshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 从书架删除接口&删除阅读进度记录
     * @param {*} bookid ：图书id
     */
    removeBookShelf: function removeBookShelf(bookid) {
      var assignParams = encodeURIComponent('bookid=' + bookid);
      var params = {
        apiid: 'shlib.eread.removebookshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 从期刊架删除接口&删除阅读进度记录
     * @param {*} magid ：期刊id
     */
    removeMagShelf: function removeMagShelf(magid) {
      var assignParams = encodeURIComponent('magid=' + magid);
      var params = {
        apiid: 'shlib.eread.removemagshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 期刊详情,传递aat会生成期刊外链
     * @param {*} magid ：期刊id
     */
    magazineInfo: function magazineInfo() {
      var magid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var assignParams = encodeURIComponent('magid=' + magid);
      var params = config.aat ? {
        apiid: 'shlib.magazine.infos',
        aat: config.aat,
        parm: assignParams
      } : {
        apiid: 'shlib.magazine.infos',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 获取我的图书书架
     * @param {*} page 
     * @param {*} pagesize 
     */
    getMyBookShelf: function getMyBookShelf() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var assignParams = encodeURIComponent('page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.eread.getmybookshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 获取我的期刊书架
     * @param {*} page 
     * @param {*} pagesize 
     */
    getMyMagShelf: function getMyMagShelf() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      var assignParams = encodeURIComponent('page=' + page + '&pagesize=' + pagesize);
      var params = {
        apiid: 'shlib.eread.getmymagshelf',
        uat: config.uat,
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - 图书/期刊分类
   *    1.获取图书分类
   *    2.获取期刊分类
   * 
   */
  var Classes = exports.Classes = {
    /**
     * 获取图书分类
     */
    epubClasses: function epubClasses() {
      var assignParams = encodeURIComponent('');
      var params = {
        apiid: 'shlib.eread.epub.classes',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 获取期刊分类
     */
    magazineClasses: function magazineClasses() {
      var assignParams = encodeURIComponent('');
      var params = {
        apiid: 'shlib.magazine.classes',
        parm: assignParams
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * api - billBoard
   */
  var billBoard = exports.billBoard = {
    /**
     * 图书排行榜查询
     * @param {*} param0 
     */
    byBook: function byBook(_ref10) {
      var _ref10$type = _ref10.type,
          type = _ref10$type === undefined ? '' : _ref10$type,
          _ref10$clc = _ref10.clc,
          clc = _ref10$clc === undefined ? 'hqxu' : _ref10$clc,
          _ref10$lan = _ref10.lan,
          lan = _ref10$lan === undefined ? 'hqxu' : _ref10$lan,
          _ref10$date = _ref10.date,
          date = _ref10$date === undefined ? _utils2.default.currDates().ym - 1 : _ref10$date;

      var assignParams = encodeURIComponent('type=' + type + '&clc=' + clc + '&lan=' + lan + '&date=' + date);
      var params = {
        apiid: 'shlib.book.billboard',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },

    /**
     * 图书排行榜top3集合
     * @param {*} type 
     * @param {*} date 
     */
    gather: function gather() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils2.default.currDates().ym - 1;

      var assignParams = encodeURIComponent('type=' + type + '&date=' + date);
      var params = {
        apiid: 'shlib.book.billboard.gather',
        parm: assignParams
      };

      return apiUnityHandle(params);
    },
    getClasses: function getClasses() {
      var params = {
        apiid: 'shlib.book.billboard.classes'
      };

      return apiUnityHandle(params);
    }
  };

  /**
   * 轮播图，瀑布流，友情链接，网站计数接口
   */
  var serverInfo = exports.serverInfo = {
    /**
     * 轮播图
     */
    swiper: function swiper() {
      var params = {
        apiid: 'shlib.serverinfo.carouselfigure'
      };

      return apiUnityHandle(params);
    },

    /**
     * 瀑布流
     */
    waterFallFlow: function waterFallFlow() {
      var params = {
        apiid: 'shlib.serverinfo.waterfallflow'
      };

      return apiUnityHandle(params);
    },

    /**
     * 友情链接
     */
    getFurl: function getFurl() {
      var params = {
        apiid: 'shlib.serverinfo.furl'
      };

      return apiUnityHandle(params);
    },

    /**
     * 友情链接
     */
    getWebCounter: function getWebCounter() {
      var params = {
        apiid: 'shlib.serverinfo.webcounter'
      };

      return apiUnityHandle(params);
    }
  };
  /**
   * [apiUnityHandle 统一处理 `api` 接口公用函数]
   * @param {Object} queryParams 接口请求参数对象
   * @return {Object} axios 实例
   */

  var yzmHandle = exports.yzmHandle = {
    yzmFetch: function yzmFetch() {
      var params = {
        apiid: 'shlib.yzm.fetch'
      };
      return apiUnityHandle(params);
    },
    yzmCheck: function yzmCheck(_ref11) {
      var _ref11$value = _ref11.value,
          value = _ref11$value === undefined ? value : _ref11$value,
          _ref11$ip = _ref11.ip,
          ip = _ref11$ip === undefined ? '' : _ref11$ip,
          _ref11$useragent = _ref11.useragent,
          useragent = _ref11$useragent === undefined ? navigator.userAgent : _ref11$useragent;

      var assignParams = encodeURIComponent('ip=' + ip + '&value=' + value + '&useragent=' + useragent);
      var params = {
        apiid: 'shlib.yzm.check',
        parm: assignParams
      };
      return apiUnityHandle(params);
    }
  };
  var doubanHandle = exports.doubanHandle = {
    doubanBookIsbn: function doubanBookIsbn(isbn) {
      var params = "/book/isbn/" + isbn;
      return doubanapiUnityHandle(params);
    }
  };

  function apiUnityHandle(queryParams) {
    var defaultParams = {
      aat: config.aat
    };
    var params = (0, _assign2.default)({}, defaultParams, queryParams);

    return (0, _server.Axios)({
      url: config.apiRequest,
      params: params
    });
  }
  function doubanapiUnityHandle(queryParams) {
    return (0, _server.Axios)({
      url: '/doubanapis' + queryParams
    });
  }
});

/***/ }),

/***/ "JKrY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("md2Q");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7ad4ea46", content, true, {});

/***/ }),

/***/ "JcaI":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("d7EF"), __webpack_require__("VR6R"), __webpack_require__("MRgP")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/slicedToArray'), require('../../static/js/i18n'), require('../../static/js/tools.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.slicedToArray, global.i18n, global.tools);
    global.calPanel = mod.exports;
  }
})(this, function (module, exports, _slicedToArray2, _i18n, _tools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _i18n2 = _interopRequireDefault(_i18n);

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

  var inBrowser = typeof window !== 'undefined';
  exports.default = {
    name: 'calPanel',
    data: function data() {
      return {
        i18n: _i18n2.default,
        isToday: new Date().getDate(),
        isCurrMonth: new Date().getMonth() + 1,
        specialList: false,
        showmonth: false,
        months: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
        curIndex: new Date().getMonth(),
        curDayIndex: null
      };
    },

    props: {
      events: {
        type: Array,
        required: true
      },
      calendar: {
        type: Object,
        required: true
      },
      selectedDay: {
        type: String,
        required: false
      },
      showWeeks: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      dayList: function dayList() {
        var firstDay = new Date(this.calendar.params.curYear, this.calendar.params.curMonth, 1);
        var dayOfWeek = firstDay.getDay();
        // 根据当前日期计算偏移量
        if (this.calendar.options.weekStartOn > dayOfWeek) {
          dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn + 7;
          this.specialList = true;
        } else {
          dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn;
          this.specialList = dayOfWeek === 5 ? true : false;
        }

        var startDate = new Date(firstDay);
        startDate.setDate(firstDay.getDate() - dayOfWeek);
        var item = void 0,
            status = void 0,
            tempArr = [],
            tempItem = void 0;
        for (var i = 0; i < 42; i++) {
          item = new Date(startDate);
          item.setDate(startDate.getDate() + i);

          if (this.calendar.params.curMonth === item.getMonth()) {
            status = 1;
          } else {
            status = 0;
          }
          tempItem = {
            date: item.getFullYear() + '-' + (item.getMonth() + 1) + '-' + item.getDate(),
            status: status,
            customClass: []
          };
          this.events.forEach(function (event) {
            if ((0, _tools.isEqualDateStr)(event.date, tempItem.date)) {
              tempItem.eventCount = event.eventCount;
              tempItem.desc = event.desc || '';
              if (event.customClass) tempItem.customClass.push(event.customClass);
            }
          });
          tempArr.push(tempItem);
        }
        return tempArr;
      },
      today: function today() {
        var dateObj = new Date();
        return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
      },
      curYearMonth: function curYearMonth() {
        var tempDate = Date.parse(new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01'));
        return {
          cn: (0, _tools.dateTimeFormatter)(tempDate, this.i18n[this.calendar.options.locale].format),
          en: this.utils.formatDate(new Date(tempDate), '-').timerStr
        };
      },
      customColor: function customColor() {
        return this.calendar.options.color;
      }
    },
    methods: {
      showMonthList: function showMonthList() {
        this.showmonth = !this.showmonth;
      },
      chouseMonth: function chouseMonth(monthIndex) {
        // 选择月份
        this.$EventCalendar.chouseMonth(monthIndex);
        this.$emit('month-changed', this.curYearMonth);
        this.curIndex = monthIndex;
        // this.curDayIndex = null;
      },
      initToday: function initToday(date) {
        var _date = (0, _slicedToArray3.default)(date, 3),
            y = _date[0],
            m = _date[1],
            d = _date[2];

        return d == this.isToday && m == this.isCurrMonth ? '今天' : d;
      },
      nextMonth: function nextMonth() {
        // 下一个月
        this.$EventCalendar.nextMonth();
        this.$emit('month-changed', this.curYearMonth);
        this.curIndex === 11 ? this.curIndex = 0 : this.curIndex++;
        // this.curDayIndex = null;
      },
      preMonth: function preMonth() {
        // 上一个月
        this.$EventCalendar.preMonth();
        this.$emit('month-changed', this.curYearMonth);
        this.curIndex === 0 ? this.curIndex = 11 : this.curIndex--;
        // this.curDayIndex = null;
      },
      handleChangeCurday: function handleChangeCurday(date, index) {
        // console.log(index)
        // this.curDayIndex = index;
        // 当月且有事件时才允许选择
        if (date.status && date.eventCount) {
          this.$emit('cur-day-changed', date.date);
        }
      },
      backToCurrent: function backToCurrent() {
        // 返回当前年/月
        var done = this.$EventCalendar.resetCurrMonth();
        if (done === false) {
          return;
        }
        this.$emit('back-current', this.curYearMonth);
        this.curIndex = this.isCurrMonth - 1;
      }
    },
    mounted: function mounted() {
      var _this = this;

      document.addEventListener('click', function (e) {
        if (e.target != _this.$refs.monthsList) {
          _this.showmonth = false;
        }
      });
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "JfQZ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ybQm");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("ef74ff18", content, true, {});

/***/ }),

/***/ "JnEe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-book-info clearfix"},[_c('span',{staticClass:"book-cover"},[_c('img',{attrs:{"src":_vm.bookInfo.fcover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"book-about"},[_c('h3',{staticClass:"book-name"},[_vm._v(_vm._s(_vm.bookInfo.ftitle))]),_vm._v(" "),_c('div',{staticClass:"book-type visible-xs"},[_vm._v(_vm._s(_vm.bookInfo.fcommonclass))]),_vm._v(" "),_c('div',{staticClass:"book-author-publish hidden-xs"},[_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(_vm.bookInfo.fauthor))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(_vm.bookInfo.fpublisher)),_c('span',{staticClass:"publish-year"},[_vm._v(_vm._s(_vm.bookInfo.fpublishdate))])])]),_vm._v(" "),_c('p',{staticClass:"book-intro hidden-xs"},[_vm._v("\n      "+_vm._s(_vm.bookInfo.fsummary)+"\n    ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KgXo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__ = __webpack_require__("0JLP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ce699b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__ = __webpack_require__("t+Yj");
function injectStyle (ssrContext) {
  __webpack_require__("ezGO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ce699b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ce699b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LHCK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue__ = __webpack_require__("kf7c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eceb72a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myLibrary_vue__ = __webpack_require__("gLPx");
function injectStyle (ssrContext) {
  __webpack_require__("pGXj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eceb72a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myLibrary_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eceb72a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myLibrary_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LKjS":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6WXk");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f6fecfc8", content, true, {});

/***/ }),

/***/ "M8w+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_625b106b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("ly6s");
function injectStyle (ssrContext) {
  __webpack_require__("39hq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_625b106b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "MI0i":
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
    global.headInfo = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
  //
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
    name: "headInfo",

    data: function data() {
      return {
        // showHeadInfo: true,
        // showFootInfo: true,
        headNotice: '',
        footNotice: ''
      };
    },
    created: function created() {
      self = this;
    },


    components: {},

    // props: {
    //   headNotice: { // 头部信息
    //     type: String,
    //     default: ''
    //   },
    //   footNotice: { // 页脚信息
    //     type: String,
    //     default: ''
    //   },
    // },

    mounted: function mounted() {
      this.headNotice = "<span class=\"cat\">欢迎来到上海图书馆</span>", this.footNotice = "<div style=\"width:100%\"><span style=\"float:left\"><i class=\"iconfont icon-author\"></i>欢迎来到上海图书馆</span><div style=\"float:right\"><a href=\"https://www.baidu.com\" target=\"_blank\">点击就送</a></div></div>";
      // setTimeout(() => {
      //   this.init();
      // }, 1000);
    },


    methods: {
      init: function init() {
        var cat = document.getElementsByClassName('cat');
        var cato = document.getElementsByClassName('info-content');
        console.log(cat[0].offsetWidth);
        console.log(cato[0].offsetWidth);
      },
      closeHeadInfo: function closeHeadInfo() {
        this.headNotice = '';
      },
      closeFootInfo: function closeFootInfo() {
        this.footNotice = '';
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "MOKG":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("NYxO"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vuex'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vuex, global.api);
    global.eBookHeader = mod.exports;
  }
})(this, function (module, exports, _vuex, _api) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

  // vuex


  // api request
  exports.default = {
    name: "eBookHeader",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        menuActive: null,
        username: '登录'
      };
    },
    created: function created() {
      self = this;
    },


    computed: (0, _vuex.mapState)({
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      isActive: function isActive(state) {
        return state.showSearchBar && self.menuActive === 0;
      }
    }),
    mounted: function mounted() {
      this.getUserInfo();
    },

    methods: {
      getUserInfo: function getUserInfo() {
        var _this = this;

        var uat = self.ls.getItem('UAT');
        if (!uat) {
          this.username = '登录';
          return;
        }
        _api.userprofiles.getUserProfiles({ uat: uat }).then(function (res) {
          if (!res || self.utils.isEmpty(res)) return;
          _this.username = res.nameCn;
        });
      },
      showSearchBar: function showSearchBar(index) {
        var currentPage = self.$route.name;
        var currentState = self.$store.state.showSearchBar;
        // 搜索页不隐藏搜索框
        if (currentPage === 'pBookSearch' || currentPage === 'eBookSearch') {
          if (!currentState) {
            self.commitEvent('changeSearchBar', true);
          }
          return;
        }
        self.menuActive = index;
        // console.log(currentState);
        self.commitEvent('changeSearchBar', !currentState); // 显示搜索框
      },
      logIn: function logIn() {
        var isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        if (!isLogin) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: '/index/myLibrary'
          });
          self.utils.modalOpenEvent(true);
          return;
        }
        // 已登录
        self.openNewPage({
          path: '/index/myLibrary'
        });
      },
      goToMyShelf: function goToMyShelf() {
        var isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        if (!isLogin) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: 'reload'
            // path: '/eBook/myBookshelf'
          });
          self.utils.modalOpenEvent(true);
          return;
        }
        self.openNewPage({
          path: '/eBook/myBookshelf'
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "MRgP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["dateTimeFormatter"] = dateTimeFormatter;
/* harmony export (immutable) */ __webpack_exports__["isEqualDateStr"] = isEqualDateStr;
function dateTimeFormatter (date ,format) {
  // 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
  if (!date || date == "") {
    return ""
  }

  if (typeof date === "string") {
    var mts = date.match(/(\/Date\((\d+)\)\/)/)
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2])
    }
  }

  date = new Date(date)
  if (!date || date.toUTCString() == "Invalid Date") {
    return ""
  }

  var map = {
    "M": date.getMonth() + 1, //月份
    "d": date.getDate(), //日
    "h": date.getHours(), //小时
    "m": date.getMinutes(), //分
    "s": date.getSeconds(), //秒
    "q": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  }

  format = format.replace(/([yMdhmsqS])+/g, function(all, t){
    var v = map[t]
    if(v !== undefined){
      if(all.length > 1){
        v = '0' + v
        v = v.substr(v.length-2)
      }
      return v
    }
    else if(t === 'y'){
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })

  return format
}
function isEqualDateStr (dateStr1, dateStr2) {
  let dateArr1 = dateStr1.split('-')
  let dateArr2 = dateStr2.split('-')
  if (parseInt(dateArr1[0], 10) !== parseInt(dateArr2[0], 10)) {
    return false
  }
  if (parseInt(dateArr1[1], 10) !== parseInt(dateArr2[1], 10)) {
    return false
  }
  if (parseInt(dateArr1[2], 10) !== parseInt(dateArr2[2], 10)) {
    return false
  }
  return true
}

/***/ }),

/***/ "Mauw":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-1e9f778a]{float:left!important}.pull-right[data-v-1e9f778a]{float:right!important}.show[data-v-1e9f778a]{display:block!important}.hidden[data-v-1e9f778a]{display:none!important;visibility:hidden!important}.invisible[data-v-1e9f778a]{visibility:hidden}.loading[data-v-1e9f778a]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-1e9f778a 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-1e9f778a{0%{width:2px}to{width:15px}}a[data-v-1e9f778a]{text-decoration:none}ol[data-v-1e9f778a],ul[data-v-1e9f778a]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-1e9f778a],input[data-v-1e9f778a]{-webkit-appearance:none}button[data-v-1e9f778a]{border:none;background:none}input[data-v-1e9f778a],input[data-v-1e9f778a]:focus{outline:none}.none-data[data-v-1e9f778a]{position:relative}.none-data[data-v-1e9f778a]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-1e9f778a]{border:1px solid #5390d7;color:#5390d7}.return[data-v-1e9f778a]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-1e9f778a]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-1e9f778a]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-1e9f778a]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-1e9f778a]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-1e9f778a]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-1e9f778a]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-1e9f778a]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-1e9f778a]{color:#42a8dd}.not-overdue[data-v-1e9f778a]{color:#5dc9a8}.overdue[data-v-1e9f778a]{color:#f97f50}.overlay[data-v-1e9f778a]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-1e9f778a]{padding-left:15px}.padMargin[data-v-1e9f778a]{padding-right:15px;padding-left:15px}}.white-bg[data-v-1e9f778a]{background-color:#fff}.vertical-top[data-v-1e9f778a]{vertical-align:top}.vertical-middle[data-v-1e9f778a]{vertical-align:middle}.vertical-center[data-v-1e9f778a]{font-size:0;text-align:left}.vertical-center[data-v-1e9f778a]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-1e9f778a]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-1e9f778a]{color:#fff}.swiper-button-next[data-v-1e9f778a],.swiper-button-prev[data-v-1e9f778a]{background-image:none}.swiper-button-next .iconfont[data-v-1e9f778a],.swiper-button-prev .iconfont[data-v-1e9f778a]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-1e9f778a],.swiper-button-prev .iconfont[data-v-1e9f778a]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-1e9f778a],.swiper-button-prev .iconfont[data-v-1e9f778a]{font-size:11px}}.list-container>li[data-v-1e9f778a]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-1e9f778a]{padding-bottom:31px}.list-container>li+li[data-v-1e9f778a]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-1e9f778a]{padding-bottom:15px}.list-container>li+li[data-v-1e9f778a]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-1e9f778a]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-1e9f778a]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-1e9f778a]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-1e9f778a]{padding-bottom:16px}.has-right-column .calendar[data-v-1e9f778a]{width:280px;height:254px}}.view-more[data-v-1e9f778a]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-1e9f778a]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-1e9f778a]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-1e9f778a]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-1e9f778a]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-1e9f778a]{display:none}.view-more .iconfont[data-v-1e9f778a]{font-size:10px}}.about-content[data-v-1e9f778a]{color:#666}.about-content>p[data-v-1e9f778a]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-1e9f778a]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-1e9f778a]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-1e9f778a]{padding-right:10px;padding-left:10px}.about-content>p[data-v-1e9f778a]{font-size:13px;line-height:25px}.about-content>p+p[data-v-1e9f778a]{margin-top:12px}}.component-menuInner.last1>a[data-v-1e9f778a]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-1e9f778a]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-1e9f778a]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-1e9f778a]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-1e9f778a]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-1e9f778a]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-1e9f778a]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-1e9f778a]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-1e9f778a]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-1e9f778a]{color:#5cc8a8}.component-menuInner a[data-v-1e9f778a]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-1e9f778a]{color:#4daada}.component-menuInner a p[data-v-1e9f778a]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-1e9f778a]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-1e9f778a]{margin-top:20px}.component-menuInner a[data-v-1e9f778a]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-1e9f778a]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-1e9f778a]{font-size:34px}.component-menuInner a p[data-v-1e9f778a]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-1e9f778a]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-1e9f778a]{margin-top:10px}.component-menuInner a[data-v-1e9f778a]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-1e9f778a]{font-size:19px}.component-menuInner a p[data-v-1e9f778a]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-1e9f778a]{padding-right:15px;padding-left:15px}}.footer[data-v-1e9f778a]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-1e9f778a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-1e9f778a]{position:relative}.eventAction[data-v-1e9f778a]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-1e9f778a .75s 0s linear infinite;animation:rotate-data-v-1e9f778a .75s 0s linear infinite}.column-title[data-v-1e9f778a]{text-align:center;font-weight:400}.column-title>span[data-v-1e9f778a]{display:inline-block;position:relative;color:#333}.column-title>span[data-v-1e9f778a]:after,.column-title>span[data-v-1e9f778a]:before{content:\"\";position:absolute;top:50%;width:20px;height:1px;background-color:#333;transform:translateY(-50%)}.column-title>span[data-v-1e9f778a]:before{left:-20px}.column-title>span[data-v-1e9f778a]:after{right:-20px}@media only screen and (min-width:768px){.column-title[data-v-1e9f778a]{margin-top:40px;margin-bottom:36px}.column-title.about-class[data-v-1e9f778a]{margin-top:26px;margin-bottom:26px}.column-title.about-class>span[data-v-1e9f778a]{font-size:18px}.column-title>span[data-v-1e9f778a]{padding-right:11px;padding-left:11px;font-size:22px}}@media only screen and (max-width:767px){.column-title[data-v-1e9f778a]{margin-top:23px;margin-bottom:16px}.column-title.about-class[data-v-1e9f778a]{margin-top:9px;margin-bottom:0}.column-title.about-class>span[data-v-1e9f778a]{font-size:14px}.column-title>span[data-v-1e9f778a]{font-size:18px;padding-right:8px;padding-left:8px}.column-title>span[data-v-1e9f778a]:after,.column-title>span[data-v-1e9f778a]:before{width:10px}.column-title>span[data-v-1e9f778a]:before{left:-8px}.column-title>span[data-v-1e9f778a]:after{right:-8px}}", ""]);

// exports


/***/ }),

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("7+uW"), __webpack_require__("YaEn"), __webpack_require__("IcnI"), __webpack_require__("2cIp"), __webpack_require__("M93x"), __webpack_require__("7QTg"), __webpack_require__("dAEq"), __webpack_require__("wvfG"), __webpack_require__("Iz3d"), __webpack_require__("lVK7"), __webpack_require__("mgS3"), __webpack_require__("j1ja")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(require('vue'), require('./router'), require('./store'), require('./server'), require('./App.vue'), require('vue-awesome-swiper'), require('vue-baidu-map'), require('vue-clipboard2'), require('easyscroll'), require('./index'), require('swiper/dist/css/swiper.min.css'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.vue, global.router, global.store, global.server, global.App, global.vueAwesomeSwiper, global.vueBaiduMap, global.vueClipboard2, global.easyscroll, global.index, global.swiperMin, global.babelPolyfill);
    global.main = mod.exports;
  }
})(this, function (_vue, _router, _store, _server, _App, _vueAwesomeSwiper, _vueBaiduMap, _vueClipboard, _easyscroll, _index) {
  'use strict';

  var _vue2 = _interopRequireDefault(_vue);

  var _router2 = _interopRequireDefault(_router);

  var _store2 = _interopRequireDefault(_store);

  var _server2 = _interopRequireDefault(_server);

  var _App2 = _interopRequireDefault(_App);

  var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);

  var _vueBaiduMap2 = _interopRequireDefault(_vueBaiduMap);

  var _vueClipboard2 = _interopRequireDefault(_vueClipboard);

  var _easyscroll2 = _interopRequireDefault(_easyscroll);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 使用已注册插件 - 第三方
  // Vue.config.productionTip = false;


  // 自定义注册插件


  // 第三方插件
  _vue2.default.use(_vueAwesomeSwiper2.default); // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.

  _vue2.default.use(_vueClipboard2.default);
  _vue2.default.use(_server2.default);
  _vue2.default.use(_vueBaiduMap2.default, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'QCxLry4y9BjIDRDIsGAerkcHrnrbo55I'
  });
  _vue2.default.use(_easyscroll2.default);

  // 自定义注册
  _vue2.default.use(_index2.default, { locale: 'zh', weekStartOn: 1 });
  _vue2.default.use(_index2.default);
  _vue2.default.use(_index2.default);
  _vue2.default.use(_index2.default);
  _vue2.default.use(_index2.default);
  _vue2.default.use(_index2.default);

  // 时间截取日期，不显示时分秒
  _vue2.default.filter('dateonly', function (value) {
    if (value) {
      return value.trim().split(' ')[0];
    }
  });

  new _vue2.default({
    el: '#app',
    router: _router2.default,
    store: _store2.default,
    Axios: _server2.default,
    template: "<App/>",
    components: { App: _App2.default }
  });
});

/***/ }),

/***/ "NXlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue__ = __webpack_require__("t70u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_489ddd54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loadMore_vue__ = __webpack_require__("0oWt");
function injectStyle (ssrContext) {
  __webpack_require__("x8xb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-489ddd54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadMore_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_489ddd54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loadMore_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Ne1P":
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
    global.breadcrumb = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var self = null;

  exports.default = {
    name: 'breadCrumb',
    data: function data() {
      return {
        breadList: [],
        lastBread: ''
      };
    },


    props: {
      color: {
        type: String,
        default: '#666'
      }
    },

    created: function created() {
      self = this;
      self.getBreadcrumb();
    },


    watch: {
      $route: function $route() {
        self.getBreadcrumb();
      }
    },

    methods: {
      getBreadcrumb: function getBreadcrumb() {
        self.$route.matched.forEach(function (item, index) {
          // 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
          // 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
          item.name === 'index' ? item.path = '/' : self.$route.path === item.path ? self.title = item.meta.breadcrumbName : '';
        });
        var length = self.$route.matched.length;
        // console.log(self.$route.matched);
        if (!self.$route.matched[length - 1].meta.breadcrumbName) {
          self.breadList = self.$route.matched.slice(0, length - 2);
          self.lastBread = self.$route.matched[length - 2].meta.breadcrumbName;
          return;
        }
        // console.log(self.$route.matched);
        self.breadList = self.$route.matched.slice(0, length - 1);
        // console.log(self.breadList);
        self.lastBread = self.$route.matched[length - 1].meta.breadcrumbName;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "NqWf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7egr");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3a72634c", content, true, {});

/***/ }),

/***/ "OECn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".cal-wrapper .cal-header[data-v-77bb57df]{position:relative;width:100%;height:28px;font-size:13px;background-color:#f3f4f6}.cal-wrapper .cal-header>div[data-v-77bb57df]{float:left;line-height:20px}.cal-wrapper .cal-header .title[data-v-77bb57df]{width:60%;line-height:28px;text-align:center;position:relative}.cal-wrapper .cal-header .title .cal-title[data-v-77bb57df]{cursor:pointer}.cal-wrapper .cal-header .title .cal-title[data-v-77bb57df]:after{content:\"\";display:inline-block;height:5px;width:10px;border-width:5px;margin-top:-2px;border-color:#000 transparent transparent;border-style:solid dashed dashed;position:absolute;top:45%}.cal-wrapper .cal-header .title .month-list[data-v-77bb57df]{position:absolute;left:46%;z-index:5;background-color:#fff;box-shadow:0 3px 16px 0 rgba(0,0,0,.05);border-radius:2px;width:60px}.cal-wrapper .cal-header .title .month-list .active[data-v-77bb57df]{color:#4573ab;background-color:#ecf1f6}.cal-wrapper .cal-header .title .month-list li[data-v-77bb57df]{color:#666;height:28px;line-height:28px;cursor:pointer}.cal-wrapper .cal-header .title .month-list li[data-v-77bb57df]:hover{color:#4573ab;background-color:#ecf1f6}.cal-wrapper .cal-header .back[data-v-77bb57df]{cursor:pointer;position:absolute;top:1px;right:20%;width:24px;height:24px;border-radius:12px;background:url(/static/images/goto-libs.png) no-repeat 50%;background-size:100%}.cal-wrapper .cal-header .l[data-v-77bb57df],.cal-wrapper .cal-header .r[data-v-77bb57df]{width:20%;height:100%;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.cal-wrapper .cal-header .l[data-v-77bb57df]{text-align:left}.cal-wrapper .cal-header .r[data-v-77bb57df]{text-align:right}.cal-wrapper .cal-body[data-v-77bb57df]{width:100%}.cal-wrapper .cal-body .weeks[data-v-77bb57df]{width:100%;text-align:center;font-size:1rem;overflow:hidden}.cal-wrapper .cal-body .weeks .item[data-v-77bb57df]{float:left;width:14.285%;height:50px}.cal-wrapper .cal-body .dates[data-v-77bb57df]{width:100%;height:303px;margin-top:24px;padding-right:3px;padding-left:3px;text-align:center;overflow:hidden}.cal-wrapper .cal-body .dates.special[data-v-77bb57df]{margin-top:6px}.cal-wrapper .cal-body .dates.special .date-num[data-v-77bb57df]{line-height:48px}.cal-wrapper .cal-body .dates .item[data-v-77bb57df]{position:relative;float:left;display:block;width:14.285%;height:52px;text-align:center;cursor:default;color:#a4adb6;-webkit-tap-highlight-color:rgba(0,0,0,0)}.cal-wrapper .cal-body .dates .item .date-num[data-v-77bb57df]{position:relative;z-index:2;font-size:14px;width:28px;height:28px;border-radius:50%;line-height:28px;margin:12px 0;display:inline-block}.cal-wrapper .cal-body .dates .item.event[data-v-77bb57df]{cursor:pointer}.cal-wrapper .cal-body .dates .item.event .date-num[data-v-77bb57df]{color:#474e56}.cal-wrapper .cal-body .dates .item.selected-day[data-v-77bb57df]{position:relative}.cal-wrapper .cal-body .dates .item.selected-day .date-num[data-v-77bb57df]{color:#fff;background-color:#4573ab}.cal-wrapper .cal-body .dates .item .is-event[data-v-77bb57df]{position:absolute;top:0;left:50%;z-index:3;width:18px;height:14px;margin-left:-9px;color:#fff;font-size:10px;line-height:13px;background-color:#eda149;border-radius:2px 0 7px 0}.cal-wrapper .cal-body .dates .item .is-today[data-v-77bb57df]{display:none;width:12px;height:4px;position:absolute;left:50%;top:50%;z-index:2;margin-left:-6px;margin-top:8px;border-radius:50%;background-color:#eda149;opacity:.8}.arrow-left.icon[data-v-77bb57df]{position:absolute;height:100%;color:#adadad;left:19px}.arrow-left.icon[data-v-77bb57df]:before{content:\"\";position:absolute;top:50%;width:8px;height:8px;margin-top:-4px;border-top:1px solid currentColor;border-right:1px solid currentColor;transform:rotate(-135deg)}.arrow-right.icon[data-v-77bb57df]{position:absolute;height:100%;color:#adadad;right:21px}.arrow-right.icon[data-v-77bb57df]:before{content:\"\";position:absolute;top:50%;width:8px;height:8px;margin-top:-4px;border-top:1px solid currentColor;border-right:1px solid currentColor;transform:rotate(45deg)}h3[data-v-77bb57df],p[data-v-77bb57df]{margin:0;padding:0}", ""]);

// exports


/***/ }),

/***/ "OPoU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".lib-info[data-v-0bca4d65]{position:fixed;right:100px;top:60%;z-index:200}.lib-info .lib-transportation[data-v-0bca4d65]{overflow:hidden;position:relative;width:46px;height:46px;border-radius:50%;cursor:pointer}.lib-info .lib-transportation .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-location-off.png) no-repeat 50%;background-size:100%}.lib-info .lib-transportation .lib-transportation-box[data-v-0bca4d65]{position:absolute;width:230px;height:174px;left:48px;top:-68px;padding:10px;background:#fff;box-shadow:0 10px 21px 0 hsla(0,0%,54%,.29);border-radius:2px;transition:left .3s}.lib-info .lib-transportation .lib-transportation-box .title[data-v-0bca4d65]{font-size:16px}.lib-info .lib-transportation .lib-transportation-box .left-title[data-v-0bca4d65]{height:26px;line-height:26px;width:45px;vertical-align:top}.lib-info .lib-transportation .lib-transportation-box .item-details[data-v-0bca4d65]{padding:3px 0}.lib-info .lib-transportation .lib-transportation-box .in[data-v-0bca4d65],.lib-info .lib-transportation .lib-transportation-box .out[data-v-0bca4d65]{position:absolute;width:0;height:0}.lib-info .lib-transportation .lib-transportation-box .out[data-v-0bca4d65]{border:10px solid transparent;border-left-color:#fff;top:80px;right:-20px}.lib-info .lib-transportation[data-v-0bca4d65]:hover{overflow:unset}.lib-info .lib-transportation:hover .lib-transportation-box[data-v-0bca4d65]{left:-250px}.lib-info .lib-transportation:hover .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-location-on.png) no-repeat 50%}.lib-info .lib-opentime[data-v-0bca4d65]{overflow:hidden;position:relative;width:46px;height:46px;border-radius:50%;background:#d3d3d3;cursor:pointer}.lib-info .lib-opentime .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-time-off.png) no-repeat 50%;background-size:100%}.lib-info .lib-opentime .lib-time-box[data-v-0bca4d65]{position:absolute;width:200px;left:-200px;height:84px;left:48px;top:-22px;padding:10px;background:#fff;box-shadow:0 10px 21px 0 hsla(0,0%,54%,.29);border-radius:2px;transition:left .3s}.lib-info .lib-opentime .lib-time-box .title[data-v-0bca4d65]{font-size:16px}.lib-info .lib-opentime .lib-time-box .td[data-v-0bca4d65]{height:26px;line-height:26px}.lib-info .lib-opentime .lib-time-box .item-details[data-v-0bca4d65]{padding-left:5px}.lib-info .lib-opentime .lib-time-box .in[data-v-0bca4d65],.lib-info .lib-opentime .lib-time-box .out[data-v-0bca4d65]{position:absolute;width:0;height:0}.lib-info .lib-opentime .lib-time-box .out[data-v-0bca4d65]{border:10px solid transparent;border-left-color:#fff;top:34px;right:-20px}.lib-info .lib-opentime[data-v-0bca4d65]:hover{overflow:unset}.lib-info .lib-opentime:hover .lib-time-box[data-v-0bca4d65]{left:-220px}.lib-info .lib-opentime:hover .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-time-on.png) no-repeat 50%}.lib-info .go-top[data-v-0bca4d65]{cursor:pointer}.lib-info .go-top .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-gotop-off.png) no-repeat 50%;background-size:100%}.lib-info .go-top:hover .lib-circle[data-v-0bca4d65]{background:url(/static/images/info/info-gotop-on.png) no-repeat 50%}.lib-info>div[data-v-0bca4d65]{margin-bottom:24px}@media (min-width:1200px) and (max-width:1366px){.lib-info[data-v-0bca4d65]{right:20px}}@media (min-width:768px) and (max-width:1200px){.lib-info[data-v-0bca4d65]{right:10px}}@media only screen and (max-width:767px){.lib-info[data-v-0bca4d65]{display:none}}.lib-circle[data-v-0bca4d65]{width:46px;height:46px;line-height:46px;border-radius:50%;background:#e4e4e4;position:relative;z-index:210;text-align:center}.lib-circle .iconfont[data-v-0bca4d65]{color:#fff;font-size:20px}", ""]);

// exports


/***/ }),

/***/ "Oqyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue__ = __webpack_require__("Aqh4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_693c877c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookInfo_vue__ = __webpack_require__("JnEe");
function injectStyle (ssrContext) {
  __webpack_require__("tz6R")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookInfo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_693c877c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookInfo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PuBw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lib-info"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"go-top",attrs:{"title":"回到顶部"}},[_c('div',{staticClass:"lib-circle",on:{"click":function($event){_vm.goToTop()}}})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lib-transportation"},[_c('div',{staticClass:"lib-circle"}),_vm._v(" "),_c('div',{staticClass:"lib-transportation-box"},[_c('div',{staticClass:"title"},[_vm._v("交通信息")]),_vm._v(" "),_c('table',[_c('tr',[_c('td',{staticClass:"left-title"},[_vm._v("地址：")]),_vm._v(" "),_c('td',{staticClass:"item-details"},[_vm._v("上海市淮海中路1555号")])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"left-title"},[_vm._v("公交：")]),_vm._v(" "),_c('td',{staticClass:"item-details"},[_vm._v("26、911、926、945、920、830、96、93、15、548等高安路；地铁十号线上海图书馆站、地铁一号线衡山路站")])])]),_vm._v(" "),_c('div',{staticClass:"in"}),_vm._v(" "),_c('div',{staticClass:"out"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lib-opentime"},[_c('div',{staticClass:"lib-circle"}),_vm._v(" "),_c('div',{staticClass:"lib-time-box"},[_c('div',{staticClass:"title"},[_vm._v("开馆时间")]),_vm._v(" "),_c('table',[_c('tr',[_c('td',{staticClass:"left-title"},[_vm._v("周一至周日")]),_vm._v(" "),_c('td',{staticClass:"item-details"},[_vm._v("8:30--20:30")])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"left-title"},[_vm._v("国家法定假日")]),_vm._v(" "),_c('td',{staticClass:"item-details"},[_vm._v("9:00--16:00")])])]),_vm._v(" "),_c('div',{staticClass:"in"}),_vm._v(" "),_c('div',{staticClass:"out"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "R8Nf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue__ = __webpack_require__("Gd4r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e9f778a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_columnTitle_vue__ = __webpack_require__("1hAg");
function injectStyle (ssrContext) {
  __webpack_require__("Y9fH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e9f778a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_columnTitle_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e9f778a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_columnTitle_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Rslm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.footerHideAll),expression:"!footerHideAll"}],staticClass:"component-footer"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[(_vm.showMiddleContent)?_c('div',{staticClass:"switch-info clearfix"},[_c('ul',{staticClass:"title-tab"},[_c('li',{class:{active: _vm.tabActive === 0},on:{"click":function($event){_vm.changeStatus(0)}}},[_c('i',{staticClass:"iconfont icon-traffic-info"}),_vm._v("交通信息")]),_vm._v(" "),_c('li',{class:{active: _vm.tabActive === 1},on:{"click":function($event){_vm.changeStatus(1)}}},[_c('i',{staticClass:"iconfont icon-open-time"}),_vm._v("开馆时间")]),_vm._v(" "),_c('li',{class:{active: _vm.tabActive === 2},on:{"click":function($event){_vm.changeStatus(2)}}},[_c('i',{staticClass:"iconfont icon-friend-link"}),_vm._v("友情链接")])]),_vm._v(" "),_c('div',{staticClass:"tab-content"},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.tabActive === 0),expression:"tabActive === 0"}],staticClass:"tab-content-item"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tabActive === 1),expression:"tabActive === 1"}],staticClass:"tab-content-item vertical-center no-padding-top"},[_vm._m(6)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tabActive === 2),expression:"tabActive === 2"}],staticClass:"tab-content-item vertical-center no-padding-top"},[_c('ul',{staticClass:"friend-link ele-middle"},_vm._l((_vm.fURLList),function(item){return _c('li',{key:item.id,staticClass:"col-md-4 col-xs-6"},[_c('a',{attrs:{"href":item.v2,"target":"_blank"}},[_vm._v(_vm._s(item.v4))])])}))])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"footer-bottom"},[(_vm.showMiddleContent)?_c('ul',{staticClass:"internet-contact"},[_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_c('li',{staticClass:"market-name visible-xs"},[_vm._v("App Store")]),_vm._v(" "),_c('li',{staticClass:"market-name visible-xs"},[_vm._v("Android Market")]),_vm._v(" "),_vm._m(9),_vm._v(" "),_c('li',{staticClass:"mobile-text last"},[_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('span',{staticClass:"mobile-name visible-xs",attrs:{"type":"text"}},[_vm._v(_vm._s(_vm.copyMessage)),_c('button',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.copyMessage),expression:"copyMessage",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopy),expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onError),expression:"onError",arg:"error"}],staticClass:"copy-text"},[_vm._v("复制")])])])]):_vm._e(),_vm._v(" "),_c('mini-footer',{attrs:{"totalVisit":_vm.webCount}})],1)])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.hideCopyTips),expression:"hideCopyTips"}],staticClass:"copy-action-tips"},[_vm._v(_vm._s(_vm.copyTipMessage))])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("地址：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("上海市淮海中路1555号")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("邮编：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("200031")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("电话：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("021-64455555*200或5000")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("传真：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("021-64455001")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("公交：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("26、911、926、945、920、830、96、93、15、548等高安路；地铁十号线上海图书馆站、地铁一号线衡山路站")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"left-title"},[_vm._v("邮箱：")]),_vm._v(" "),_c('p',{staticClass:"item-details"},[_vm._v("service1@libner.sh.cn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"open-time ele-middle"},[_c('li',[_vm._v("周一至周日   8:30--20:30")]),_vm._v(" "),_c('li',[_vm._v("国家法定假日   9:00--16:00")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('i',{staticClass:"iconfont icon-phone"}),_vm._v(" "),_c('div',{staticClass:"qrcode-container hidden-xs"},[_c('img',{attrs:{"src":"/static/images/temp/app.jpg","alt":"iPhone二维码"}}),_c('span',[_vm._v("iPhone")])]),_vm._v(" "),_c('span',{staticClass:"client visible-xs"},[_vm._v("IPHONE客户端")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('i',{staticClass:"iconfont icon-android"}),_vm._v(" "),_c('div',{staticClass:"qrcode-container hidden-xs"},[_c('img',{attrs:{"src":"/static/images/temp/app.jpg","alt":"Android二维码"}}),_c('span',[_vm._v("Android")])]),_vm._v(" "),_c('span',{staticClass:"client visible-xs"},[_vm._v("安卓系统客户端")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('i',{staticClass:"iconfont icon-weichat"}),_vm._v(" "),_c('div',{staticClass:"qrcode-container hidden-xs"},[_c('img',{attrs:{"src":"/static/images/temp/weixin.bmp","alt":"weiChart二维码"}}),_c('span',[_vm._v("weiChat")])]),_vm._v(" "),_c('span',{staticClass:"mobile-name visible-xs"},[_vm._v("上海图书馆信使")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://weibo.com/shlibrary","target":"_blank"}},[_c('i',{staticClass:"iconfont icon-sina-weibo"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode-container hidden-xs"},[_c('img',{attrs:{"src":"/static/images/temp/qrcode.png","alt":"weibo二维码"}}),_c('span',[_vm._v("weibo")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "RxSc":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-5a7252fe]{float:left!important}.pull-right[data-v-5a7252fe]{float:right!important}.show[data-v-5a7252fe]{display:block!important}.hidden[data-v-5a7252fe]{display:none!important;visibility:hidden!important}.invisible[data-v-5a7252fe]{visibility:hidden}.loading[data-v-5a7252fe]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-5a7252fe 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-5a7252fe{0%{width:2px}to{width:15px}}a[data-v-5a7252fe]{text-decoration:none}ol[data-v-5a7252fe],ul[data-v-5a7252fe]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-5a7252fe],input[data-v-5a7252fe]{-webkit-appearance:none}button[data-v-5a7252fe]{border:none;background:none}input[data-v-5a7252fe],input[data-v-5a7252fe]:focus{outline:none}.none-data[data-v-5a7252fe]{position:relative}.none-data[data-v-5a7252fe]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-5a7252fe]{border:1px solid #5390d7;color:#5390d7}.return[data-v-5a7252fe]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-5a7252fe]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-5a7252fe]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-5a7252fe]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-5a7252fe]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-5a7252fe]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-5a7252fe]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-5a7252fe]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-5a7252fe]{color:#42a8dd}.not-overdue[data-v-5a7252fe]{color:#5dc9a8}.overdue[data-v-5a7252fe]{color:#f97f50}.overlay[data-v-5a7252fe]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-5a7252fe]{padding-left:15px}.padMargin[data-v-5a7252fe]{padding-right:15px;padding-left:15px}}.white-bg[data-v-5a7252fe]{background-color:#fff}.vertical-top[data-v-5a7252fe]{vertical-align:top}.vertical-middle[data-v-5a7252fe]{vertical-align:middle}.vertical-center[data-v-5a7252fe]{font-size:0;text-align:left}.vertical-center[data-v-5a7252fe]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-5a7252fe]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-5a7252fe]{color:#fff}.swiper-button-next[data-v-5a7252fe],.swiper-button-prev[data-v-5a7252fe]{background-image:none}.swiper-button-next .iconfont[data-v-5a7252fe],.swiper-button-prev .iconfont[data-v-5a7252fe]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-5a7252fe],.swiper-button-prev .iconfont[data-v-5a7252fe]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-5a7252fe],.swiper-button-prev .iconfont[data-v-5a7252fe]{font-size:11px}}.list-container>li[data-v-5a7252fe]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-5a7252fe]{padding-bottom:31px}.list-container>li+li[data-v-5a7252fe]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-5a7252fe]{padding-bottom:15px}.list-container>li+li[data-v-5a7252fe]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-5a7252fe]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-5a7252fe]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-5a7252fe]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-5a7252fe]{padding-bottom:16px}.has-right-column .calendar[data-v-5a7252fe]{width:280px;height:254px}}.view-more[data-v-5a7252fe]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-5a7252fe]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-5a7252fe]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-5a7252fe]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-5a7252fe]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-5a7252fe]{display:none}.view-more .iconfont[data-v-5a7252fe]{font-size:10px}}.about-content[data-v-5a7252fe]{color:#666}.about-content>p[data-v-5a7252fe]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-5a7252fe]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-5a7252fe]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-5a7252fe]{padding-right:10px;padding-left:10px}.about-content>p[data-v-5a7252fe]{font-size:13px;line-height:25px}.about-content>p+p[data-v-5a7252fe]{margin-top:12px}}.component-menuInner.last1>a[data-v-5a7252fe]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-5a7252fe]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-5a7252fe]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-5a7252fe]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-5a7252fe]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-5a7252fe]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-5a7252fe]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-5a7252fe]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-5a7252fe]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-5a7252fe]{color:#5cc8a8}.component-menuInner a[data-v-5a7252fe]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-5a7252fe]{color:#4daada}.component-menuInner a p[data-v-5a7252fe]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-5a7252fe]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-5a7252fe]{margin-top:20px}.component-menuInner a[data-v-5a7252fe]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-5a7252fe]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-5a7252fe]{font-size:34px}.component-menuInner a p[data-v-5a7252fe]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-5a7252fe]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-5a7252fe]{margin-top:10px}.component-menuInner a[data-v-5a7252fe]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-5a7252fe]{font-size:19px}.component-menuInner a p[data-v-5a7252fe]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-5a7252fe]{padding-right:15px;padding-left:15px}}.footer[data-v-5a7252fe]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-5a7252fe{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-5a7252fe]{position:relative}.eventAction[data-v-5a7252fe]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-5a7252fe .75s 0s linear infinite;animation:rotate-data-v-5a7252fe .75s 0s linear infinite}.breadcrumb[data-v-5a7252fe]{height:40px;padding-top:10px;padding-bottom:10px}@media only screen and (min-width:768px) and (max-width:1024px){.breadcrumb[data-v-5a7252fe]{padding-left:15px}}ul[data-v-5a7252fe]{list-style:none;margin:0;padding:0;clear:both;overflow:hidden}ul li[data-v-5a7252fe]{position:relative;float:left}ul li+li>a[data-v-5a7252fe]:before{content:\">\";display:inline-block;margin-right:2px;margin-left:2px;font-size:12px}ul li+li span[data-v-5a7252fe]{font-size:12px;vertical-align:1px}ul li+li span[data-v-5a7252fe]:before{content:\">\";display:inline-block;margin-right:2px;margin-left:2px;font-size:12px}ul a[data-v-5a7252fe]{text-decoration:none;opacity:.5;font-size:12px;vertical-align:1px}ul a.router-link-exact-active[data-v-5a7252fe],ul a[data-v-5a7252fe]:hover{opacity:1}", ""]);

// exports


/***/ }),

/***/ "S6Qc":
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
    global.ebookSearch = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "ebookSearch",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,

        // 检索类型选择
        showSearchList: false,
        currentSelect: 0,
        searchList: [{
          name: '电子书检索',
          order: 0,
          sty: 'ebook'
        }, {
          name: '书目检索',
          order: 1,
          sty: 'pbook'
        }, {
          name: '资源发现',
          order: 2,
          sty: ''
        }],
        currentSize: null,

        // 搜索关键字
        keyword: ''
      };
    },
    created: function created() {
      self = this;

      // let sty = self.ls.getItem('searchType');
      // self.currentSelect = sty === 'ebook' ? 1 : 0;
    },


    computed: {
      /** 
       * [showSearchArea 显示检索输入框]
       */
      showSearchArea: function showSearchArea() {
        return self.$store.state.showSearchBar;
      },

      /**
       * [currentSearchType 当前选择检索类型]
       */
      currentSearchType: function currentSearchType() {
        return self.searchList[self.currentSelect].name;
      }
    },

    mounted: function mounted() {
      // 隐藏搜索栏
      document.addEventListener('click', function (e) {
        var currentPage = self.$route.name;
        // 搜索页不隐藏搜索框
        if (currentPage === 'pBookSearch' || currentPage === 'eBookSearch') {
          if (self.showSearchList) {
            self.showSearchList = false;
          }

          return;
        }
        if (!self.$store.state.showSearchBar) {
          return;
        }
        if (!self.$el.contains(e.target)) {
          self.showSearchList = false;
          self.commitEvent('changeSearchBar', false);
        }
      });
    },


    methods: {
      searchBarClick: function searchBarClick(e) {
        // 隐藏检索类型
        if (!self.showSearchList) {
          return;
        }
        if (!self.$refs.sitem.contains(e.target)) {
          self.showSearchList = false;
        }
      },

      /** 
       * [searchListAction 检索类型展开事件]
       */
      searchListAction: function searchListAction() {
        self.showSearchList = !self.showSearchList;
        // console.log(self.showSearchList);
      },

      /** 
       * [chooseSearchType 选择搜索类型]
       * @param {Int} index 当前选择类型的索引
       * @param {Int} type 类型表示
       * @param {String} name 所选类型中文名
       * @param {Object} ev 当前事件对象
       */
      chooseSearchType: function chooseSearchType(index, sty, name, ev) {
        self.currentSelect = index;
        self.searchListAction();
        // self.ls.setItem('searchType', sty);

        // if ( !self.isMobile ) {
        //   self.currentSize = `${ev.target.offsetWidth + 13}px`;
        // }
      },

      /**
       * 清除关键词
       */
      clearKeyWord: function clearKeyWord() {
        self.keyword = '';
        self.commitEvent('changeSearchEvent', '');
      },

      /** 
       * [searchAction 检索按钮事件]
       */
      searchAction: function searchAction() {
        if (self.keyword === '') {
          alert('搜索关键字不能为空');
          return;
        }
        if (self.currentSelect === 2) {
          // 资源发现 - 跳转外链
          // location.href = `http://en.shl.findplus.cn/?h=search_list&query=${self.keyword}`;
          // 中英文跳转
          var zw_yw = "cn";
          if (/[\u4e00-\u9fa5]/.test(self.keyword)) {
            zw_yw = "cn";
          } else {
            zw_yw = "en";
          }
          var url = "http://" + zw_yw + ".shl.findplus.cn/?h=search_list&query=" + encodeURIComponent(self.keyword) + "&action[addexpander][]=fulltext";
          window.open(url);

          return;
        }

        var currentPage = self.$route.name; // 当前页面名
        // 传递搜索按钮事件
        self.commitEvent('changeSearchEvent', new String(self.keyword));

        // 当选择搜索类型为 `电子书检索`, `书目检索` 时, 跳转 电子书检索结果页, 其他跳转第三方页面
        if (self.currentSelect === 0) {
          if (currentPage === 'pBookSearch') return;
          self.openNewPage({
            path: '/index/pBookSearch'
          });

          return;
        }

        if (self.currentSelect === 1) {
          if (currentPage === 'eBookSearch') return;
          self.openNewPage({
            path: '/eBook/eBookSearch'
          });

          return;
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "Tkxb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "U6xV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ZQVO");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1e410d3f", content, true, {});

/***/ }),

/***/ "UeUF":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+f0D");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6b8d76a4", content, true, {});

/***/ }),

/***/ "VR6R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  en: {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'All Events',
    notHaveEvents: 'Not Have Events'
  },
  zh: {
    dayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    format : 'yyyy年MM月',
    fullFormat: 'yyyy年MM月dd日',
    dayEventsTitle: '全部事件',
    notHaveEvents: '没有事件'
  },
  us: {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'MM/dd/yyyy',
    dayEventsTitle: 'All Events',
    notHaveEvents: 'Not Have Events'
  },
  es: {
    dayNames: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    format : 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Todos los eventos',
    notHaveEvents: 'Nada'
  },
  'pt-br': {
    dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    format : 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Todos os eventos',
    notHaveEvents: 'Nenhum evento'
  },
  ja: {
    dayNames: ["日", "月", "火", "水", "木", "金", "土"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    format: 'yyyy/MM',
    fullFormat: 'yyyy/MM/dd',
    dayEventsTitle: '全てのイベント',
    notHaveEvents: 'イベントはありません'
  },
  ko: {
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    format: 'yyyy/MM',
    fullFormat: 'yyyy/MM/dd',
    dayEventsTitle: '모든 이벤트',
    notHaveEvents: '일정이 없습니다'
  },
  fr: {
    dayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    format : 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tous les événements',
    notHaveEvents: 'Aucun événement'
  },
  it: {
    dayNames: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    format : 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tutti gli eventi',
    notHaveEvents: 'Nessun evento'
  },
  ru: {
    dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    format: 'MM.yyyy',
    fullFormat: 'dd.MM.yyyy',
    dayEventsTitle: 'Все события',
    notHaveEvents: 'События отсутствуют'
  },
  sv: {
    dayNames: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
    monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Alla händelser',
    notHaveEvents: 'Inga händelser'
  },
  de: {
    dayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    format: 'MM/yyyy',
    fullFormat: 'dd.MM.yyyy',
    dayEventsTitle: 'Alle Veranstaltungen',
    notHaveEvents: 'Keine Veranstaltungen'
  },
  vi: {
    dayNames: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tất cả sự kiện',
    notHaveEvents: 'Không có sự kiện nào'
  },
  ua: {
    dayNames: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    format: 'MM.yyyy',
    fullFormat: 'dd.MM.yyyy',
    dayEventsTitle: 'Усі події',
    notHaveEvents: 'Події відсутні'
  }
});


/***/ }),

/***/ "VUp6":
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
    global.miniFooter = mod.exports;
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
  //
  //
  //
  //

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "miniFooter",

    data: function data() {
      return {};
    },


    props: {
      totalVisit: {
        type: [String, Number],
        default: 12141481840
      }
    },

    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "Vq54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue__ = __webpack_require__("MOKG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cfdfb61_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookHeader_vue__ = __webpack_require__("39XT");
function injectStyle (ssrContext) {
  __webpack_require__("ma1k")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cfdfb61"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cfdfb61_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "W1k5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("woOf"), __webpack_require__("k4bk"), __webpack_require__("6ub1"), __webpack_require__("bKVw"), __webpack_require__("iIOJ")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('./utils/resize-event'), require('./utils/dom'), require('./utils/scrollbar-width'), require('./bar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.resizeEvent, global.dom, global.scrollbarWidth, global.bar);
    global.main = mod.exports;
  }
})(this, function (module, exports, _assign, _resizeEvent, _dom, _scrollbarWidth, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

  var _bar2 = _interopRequireDefault(_bar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    name: 'EasyScrollbar',
    components: { Bar: _bar2.default },
    props: {
      native: Boolean,
      wrapStyle: {},
      wrapClass: {},
      viewClass: {},
      viewStyle: {},
      noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
      tag: {
        type: String,
        default: 'div'
      },
      barOption: {}
    },
    created: function created() {
      this._data.opt = (0, _assign2.default)(this._data.opt, this.barOption);
    },
    data: function data() {
      return {
        sizeWidth: '0',
        sizeHeight: '0',
        moveX: 0,
        moveY: 0,
        preScrollHeigt: 0,
        opt: {
          barColor: "#959595", //滚动条颜色
          barWidth: 6, //滚动条宽度
          railColor: "#eee", //导轨颜色
          barMarginRight: 0, //垂直滚动条距离整个容器右侧距离单位（px）
          barMaginBottom: 0, //水平滚动条距离底部距离单位（px)
          barOpacityMin: 0.3, //滚动条非激活状态下的透明度
          zIndex: "auto", //滚动条z-Index
          autohidemode: true, //自动隐藏模式
          horizrailenabled: true //是否显示水平滚动条
        }
      };
    },


    computed: {
      wrap: function wrap() {
        return this.$refs.wrap;
      }
    },
    render: function render(h) {
      var gutter = (0, _scrollbarWidth2.default)();
      var style = this.wrapStyle;
      var barStyle = { color: this.opt.barColor, width: this.opt.barWidth + "px", barOpacityMin: this.opt.barOpacityMin };
      var railStyle = { zIndex: this.opt.zIndex, color: this.opt.railColor, marginRight: this.opt.barMarginRight + "px", marginBottom: this.opt.barMaginBottom + "px" };
      if (gutter) {
        var gutterWith = "-" + gutter + "px";
        var gutterStyle = "margin-bottom:" + gutterWith + ";" + " margin-right:" + gutterWith;

        if (typeof this.wrapStyle === 'string') {
          style += gutterStyle;
        } else {
          style = gutterStyle;
        }
      }
      var view = h(this.tag, {
        class: ['el-scrollbar__view', this.viewClass],
        style: this.viewStyle,
        ref: 'resize'
      }, this.$slots.default);
      var wrap = h(
        'div',
        {
          ref: 'wrap',
          style: style,
          on: {
            'scroll': this.handleScroll,
            'mouseenter': this.handleMouseEnter,
            'mouseleave': this.handleMouseLeave
          },

          'class': [this.wrapClass, 'easy-scrollbar__wrap', gutter ? '' : 'easy-scrollbar__wrap--hidden-default'] },
        [[view]]
      );
      var nodes = void 0;

      if (!this.native) {
        if (this.opt.horizrailenabled == true) {
          //水平滚动条使能
          nodes = [wrap, h(_bar2.default, {
            ref: 'refHBar',
            attrs: { barStyle: barStyle,
              railStyle: railStyle,
              move: this.moveX,
              size: this.sizeWidth }
          }), h(_bar2.default, {
            ref: 'refVBar',
            attrs: { vertical: true,
              barStyle: barStyle,
              railStyle: railStyle,
              move: this.moveY,
              size: this.sizeHeight }
          })];
        } else {
          //隐藏水平滚动条
          nodes = [wrap, h(_bar2.default, {
            ref: 'refVBar',
            attrs: { vertical: true,
              barStyle: barStyle,
              railStyle: railStyle,
              move: this.moveY,
              size: this.sizeHeight }
          })];
        }
      } else {
        //原生的滚动条
        nodes = [h(
          'div',
          {
            ref: 'wrap',
            'class': [this.wrapClass, 'easy-scrollbar__wrap'],
            style: style },
          [[view]]
        )];
      }
      return h('div', { class: 'easy-scrollbar' }, nodes);
    },


    methods: {
      handleScroll: function handleScroll() {
        var wrap = this.wrap;
        if (this.preScrollHeigt !== wrap.scrollHeight) {
          this.preScrollHeigt = wrap.scrollHeight;
          this.update();
        }
        this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
        this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
      },

      handleMouseEnter: function handleMouseEnter() {
        if (this.$refs.refHBar) {
          this.$refs.refHBar.$el.children[0].style.opacity = 1;
        }
        if (this.$refs.refVBar) {
          this.$refs.refVBar.$el.children[0].style.opacity = 1;
        }
      },
      handleMouseLeave: function handleMouseLeave() {
        if (this.$refs.refHBar) {
          this.$refs.refHBar.$el.children[0].style.opacity = this.opt.barOpacityMin;
        }
        if (this.$refs.refVBar) {
          this.$refs.refVBar.$el.children[0].style.opacity = this.opt.barOpacityMin;
        }
      },
      update: function update() {
        var heightPercentage = void 0,
            widthPercentage = void 0;
        var wrap = this.wrap;
        if (!wrap) return;
        debugger;
        heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
        widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
        this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
        this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
        if (this.$refs.refVBar) {
          if (this.sizeHeight == 0) {
            this.$refs.refVBar.$el.style.display = "none";
          } else {
            this.$refs.refVBar.$el.style.display = "block";
          }
        }
        if (this.$refs.refHBar) {
          //存在水平滚动条的情况下
          if (this.sizeWidth == 0) {
            this.$refs.refHBar.$el.style.display = "none";
          } else {
            this.$refs.refHBar.$el.style.display = "block";
          }
        }
      }
    },

    mounted: function mounted() {
      if (this.native) return;
      this.$nextTick(this.update);
      !this.noresize && (0, _resizeEvent.addResizeListener)(this.$refs.resize, this.update);
    },
    beforeDestroy: function beforeDestroy() {
      if (this.native) return;
      !this.noresize && (0, _resizeEvent.removeResizeListener)(this.$refs.resize, this.update);
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "WOd9":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("MRgP"), __webpack_require__("loPB")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../static/js/tools'), require('./calPanel'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tools, global.calPanel);
    global.vueEventCalendar = mod.exports;
  }
})(this, function (module, exports, _tools, _calPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _calPanel2 = _interopRequireDefault(_calPanel);

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

  /** 
   * [vue事件日历组件]
   *  props(接收参数)
   *    events => 事件数据列表
   *  
   *  Events(抛出事件)
   *    handleChangeCurDay => day-changed => 日期选择事件
   *    handleMonthChanged => month-changed => 月份选择事件
   * 
   * 参考: https://github.com/GeoffZhu/vue-event-calendar
   */
  var inBrowser = typeof window !== 'undefined';
  exports.default = {
    name: 'vueEventCalendar',
    components: {
      calPanel: _calPanel2.default
    },
    data: function data() {
      return {
        selectedDayEvents: {
          date: 'all',
          events: this.events || [] // 默认显示所有事件
        }
      };
    },

    props: {
      events: {
        type: Array,
        required: true,
        default: function _default() {
          return [];
        },
        validator: function validator(events) {
          var validate = true;
          events.forEach(function (event, index) {
            if (!event.date) {
              console.error('Vue-Event-Calendar-Error:' + 'Prop events Wrong at index ' + index);
              validate = false;
            }
          });
          return validate;
        }
      }
    },
    computed: {
      calendarOptions: function calendarOptions() {
        var dateObj = new Date();
        if (inBrowser) {
          return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA;
        } else {
          return {
            options: {
              locale: 'en', // zh
              color: ' #f29543'
            },
            params: {
              curYear: dateObj.getFullYear(),
              curMonth: dateObj.getMonth(),
              curDate: dateObj.getDate(),
              curEventsDate: 'all'
            }
          };
        }
      },
      calendarParams: function calendarParams() {
        var dateObj = new Date();
        if (inBrowser) {
          return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA.params;
        } else {
          return {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          };
        }
      }
    },
    created: function created() {
      if (this.calendarParams.curEventsDate !== 'all') {
        this.handleChangeCurDay(this.calendarParams.curEventsDate);
      }
    },

    methods: {
      handleChangeCurDay: function handleChangeCurDay(date) {
        var events = this.events.filter(function (event) {
          return (0, _tools.isEqualDateStr)(event.date, date);
        });
        if (events.length > 0) {
          this.selectedDayEvents = {
            date: date,
            events: events
          };
        }
        this.$emit('dayChanged', {
          date: date,
          events: events
        });
      },
      handleMonthChanged: function handleMonthChanged(yearMonth) {
        this.$emit('monthChanged', yearMonth);
      },
      backToCurrent: function backToCurrent(yearMonth) {
        this.$emit('backCurrent', yearMonth);
      }
    },
    watch: {
      calendarParams: function calendarParams() {
        var _this = this;

        if (this.calendarParams.curEventsDate !== 'all') {
          var events = this.events.filter(function (event) {
            return (0, _tools.isEqualDateStr)(event.date, _this.calendarParams.curEventsDate);
          });
          this.selectedDayEvents = {
            date: this.calendarParams.curEventsDate,
            events: events
          };
        } else {
          this.selectedDayEvents = {
            date: 'all',
            events: this.events
          };
        }
      },
      events: function events() {
        this.selectedDayEvents = {
          date: 'all',
          events: this.events || []
        };
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "X1r/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-miniFooter"},[_c('p',{staticClass:"visit-total"},[_vm._v("访问次数 "),_c('span',{staticClass:"total-num"},[_vm._v(_vm._s(_vm.totalVisit))])]),_vm._v(" "),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"copyright"},[_c('li',[_vm._v("版权所有©上海图书馆上海科学技术情报研究所 2014-2016")]),_vm._v(" "),_c('li',[_vm._v("沪ICP备050172015   网络视听许可证：0911606")]),_vm._v(" "),_c('li',[_vm._v("广播电视节目制作许可证：沪字第353号")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "X9ty":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isMobileView && _vm.total > 1)?_c('div',{staticClass:"pagination-cpntainer hidden-xs"},[_c('ul',{staticClass:"pagination"},[_c('li',[_c('a',{staticClass:"prev-arrow",class:_vm.setButtonClass('prev'),attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.prevPage(_vm.currentPage)}}},[_c('i',{staticClass:"iconfont icon-arrow-left2"})])]),_vm._v(" "),_vm._l((_vm.totalPages),function(index){return _c('li',{key:index,class:{active: _vm.currentPage == index}},[_c('a',{class:{isSymbol: index < 1},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.paginationClick(index)}}},[_vm._v(_vm._s(_vm.isSymbol(index)))])])}),_vm._v(" "),_c('li',[_c('a',{staticClass:"next-arrow",class:_vm.setButtonClass('next'),attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.nextPage(_vm.currentPage)}}},[_c('i',{staticClass:"iconfont icon-arrow-right2"})])]),_vm._v(" "),_c('li',{staticClass:"skipPage"},[_vm._v("跳至"),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.skipPageNum),expression:"skipPageNum"}],attrs:{"type":"text"},domProps:{"value":(_vm.skipPageNum)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.skipPage(_vm.skipPageNum)},"input":function($event){if($event.target.composing){ return; }_vm.skipPageNum=$event.target.value}}}),_vm._v("页")])],2)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Xf6d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+6nJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("00974555", content, true, {});

/***/ }),

/***/ "XpfL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue__ = __webpack_require__("VUp6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_91d367d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_miniFooter_vue__ = __webpack_require__("X1r/");
function injectStyle (ssrContext) {
  __webpack_require__("cQ1n")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-91d367d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_miniFooter_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_91d367d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_miniFooter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Xwgp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".loadmore[data-v-489ddd54]{margin-top:40px;margin-bottom:10px;text-align:center;color:#999}.loadmore .load[data-v-489ddd54]{cursor:pointer;margin:0 auto;width:90px;height:30px;line-height:30px;border:1px solid #c1c1c1;border-radius:3px}.loadmore .loading[data-v-489ddd54]{height:30px;line-height:30px}@media only screen and (min-width:767px){.loadmore[data-v-489ddd54]{display:none}}", ""]);

// exports


/***/ }),

/***/ "Y/rA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "Y9fH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Mauw");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("25a6b04c", content, true, {});

/***/ }),

/***/ "YaEn":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("7+uW"), __webpack_require__("NYxO"), __webpack_require__("/ocq"), __webpack_require__("8/c5"), __webpack_require__("pC2+"), __webpack_require__("LHCK"), __webpack_require__("fomX"), __webpack_require__("I8tg"), __webpack_require__("rJem"), __webpack_require__("86b6"), __webpack_require__("qGFA"), __webpack_require__("x2iH"), __webpack_require__("9g9h"), __webpack_require__("Zr/k")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vue'), require('vuex'), require('vue-router'), require('@/page/index'), require('@/page/homePage'), require('@/page/myLibrary'), require('@/page/fullMenu'), require('@/page/newsBulletin'), require('@/page/serviceGuide'), require('@/page/eBook'), require('@/page/eBookDefault'), require('@/page/bookClassification'), require('@/page/bookClassificationList'), require('@/page/recommendedPast'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vue, global.vuex, global.vueRouter, global.index, global.homePage, global.myLibrary, global.fullMenu, global.newsBulletin, global.serviceGuide, global.eBook, global.eBookDefault, global.bookClassification, global.bookClassificationList, global.recommendedPast);
    global.index = mod.exports;
  }
})(this, function (module, exports, _vue, _vuex, _vueRouter, _index, _homePage, _myLibrary, _fullMenu, _newsBulletin, _serviceGuide, _eBook, _eBookDefault, _bookClassification, _bookClassificationList, _recommendedPast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _vue2 = _interopRequireDefault(_vue);

  var _vuex2 = _interopRequireDefault(_vuex);

  var _vueRouter2 = _interopRequireDefault(_vueRouter);

  var _index2 = _interopRequireDefault(_index);

  var _homePage2 = _interopRequireDefault(_homePage);

  var _myLibrary2 = _interopRequireDefault(_myLibrary);

  var _fullMenu2 = _interopRequireDefault(_fullMenu);

  var _newsBulletin2 = _interopRequireDefault(_newsBulletin);

  var _serviceGuide2 = _interopRequireDefault(_serviceGuide);

  var _eBook2 = _interopRequireDefault(_eBook);

  var _eBookDefault2 = _interopRequireDefault(_eBookDefault);

  var _bookClassification2 = _interopRequireDefault(_bookClassification);

  var _bookClassificationList2 = _interopRequireDefault(_bookClassificationList);

  var _recommendedPast2 = _interopRequireDefault(_recommendedPast);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 每周推荐查看往期
  // import eBookDetails from '@/page/eBookDetails'; // 图书详情
  // import weiWeek from '@/page/weiWeek'; // 微周刊
  // import digitalReadingList from '@/page/digitalReadingList'; // 排行榜
  // import eBookCommonPage from '@/page/eBookCommonPage'; // 拓展主题

  // 图书分类
  // import bookDefault from '@/page/bookDefault'; // 图书分类默认页面
  // 数字阅读
  // 新闻公告
  // import newsBulletinDefault from '@/page/newsBulletinDefault'; // 新闻公告默认页面
  // import newsDetails from '@/page/newsDetails'; // 新闻详情
  // 我的图书馆
  // import myLibraryDefault from '@/page/myLibraryDefault'; // 我的图书馆默认页面
  // import recommendedBook from '@/page/recommendedBook'; // 图书推荐
  // import museumNavigation from '@/page/museumNavigation'; // 分馆导航
  // 主体框架
  _vue2.default.use(_vueRouter2.default); // 分类书单
  // import myBookshelf from '@/page/myBookshelf'; // 我的书架
  // import eBookSearch from '@/page/eBookSearch'; // 电子书检索
  // import recommended from '@/page/recommended'; // 每周推荐
  // import recommendedPastDefault from '@/page/recommendedPastDefault'; // 每周推荐查看往期
  // 数字阅读
  // 服务指南
  // import serviceGuideDefault from '@/page/serviceGuideDefault'; // 服务指南默认页面
  // import serviceIssueList from '@/page/serviceIssueList'; // 服务指南问题列表
  // import serviceIssueDetails from '@/page/serviceIssueDetails'; // 服务指南问题详情
  // import serviceIssueSearch from '@/page/serviceIssueSearch'; // 服务指南问题检索
  // import pBookDetails from '@/page/pBookDetails'; // 图书详情
  // import pBookSearch from '@/page/pBookSearch'; // 书目检索
  // import activityCenter from '@/page/activityCenter'; // 活动中心
  // import eventDetails from '@/page/eventDetails'; // 活动详情
  // import commonPage from '@/page/commonPage'; // 拓展主题
  // 全部菜单
  // import fullMenuDefault from '@/page/fullMenuDefault'; // 全部菜单默认页面
  // import currentLending from '@/page/currentLending'; // 当前借阅
  // import libraryList from '@/page/libraryList'; // 图书借阅排行榜
  // 首页默认页面

  // pages


  var router = new _vueRouter2.default({
    mode: 'history',
    routes: [{
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      // name: 'index',
      meta: {
        requireAuth: false, // 该字段表示进入这个路由需要登录
        breadcrumbName: '首页' // 用作面包屑导航
      },
      component: _index2.default,
      children: [{
        path: '',
        name: 'homePage',
        component: _homePage2.default
      }, {
        path: 'myLibrary',
        // name: 'myLibrary',
        meta: {
          requireAuth: true,
          breadcrumbName: '我的图书馆'
        },
        component: _myLibrary2.default,
        children: [{
          path: '',
          name: 'myLibraryDefault',
          component: function component(resolve) {
            return __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("qdTn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'recommendedBook',
          name: 'recommendedBook',
          meta: {
            requireAuth: true,
            breadcrumbName: '图书推荐'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(19)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Jwb+")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'museumNavigation',
        name: 'museumNavigation',
        meta: {
          requireAuth: false,
          breadcrumbName: '分馆导航'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("see7")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'fullMenu',
        meta: {
          requireAuth: false,
          breadcrumbName: '全部菜单'
        },
        component: _fullMenu2.default,
        children: [{
          path: '',
          name: 'fullMenuDefault',
          component: function component(resolve) {
            return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("v9IK")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'currentLending',
          name: 'currentLending',
          meta: {
            requireAuth: true,
            breadcrumbName: '我的图书馆'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("FbJ3")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'libraryList',
        name: 'libraryList',
        meta: {
          requireAuth: false,
          breadcrumbName: '图书借阅排行榜'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(11)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("uoPY")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'newsBulletin',
        meta: {
          requireAuth: false,
          breadcrumbName: '新闻公告'
        },
        component: _newsBulletin2.default,
        children: [{
          path: '',
          name: 'newsBulletinDefault',
          component: function component(resolve) {
            return __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Nj+k")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'newsDetails',
          name: 'newsDetails',
          meta: {
            requireAuth: false,
            breadcrumbName: '新闻详情'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(21)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("l9xr")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'serviceGuide',
        meta: {
          requireAuth: false,
          breadcrumbName: '服务指南'
        },
        component: _serviceGuide2.default,
        children: [{
          path: '',
          name: 'serviceGuideDefault',
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(17)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("bguP")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'serviceIssueList',
          name: 'serviceIssueList',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题列表'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(15)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("NacQ")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'serviceIssueDetails',
          name: 'serviceIssueDetails',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题详情'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(16)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ot1H")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'serviceIssueSearch',
          name: 'serviceIssueSearch',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题检索'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(8)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Et7p")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'pBookDetails',
        name: 'pBookDetails',
        meta: {
          requireAuth: false,
          breadcrumbName: '图书详情'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("HYu7")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'pBookSearch',
        name: 'pBookSearch',
        meta: {
          requireAuth: false,
          breadcrumbName: '书目检索'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(6)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("h4gQ")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'activityCenter',
        name: 'activityCenter',
        meta: {
          requireAuth: false,
          breadcrumbName: '活动中心'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Jz0k")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'eventDetails',
        name: 'eventDetails',
        meta: {
          requireAuth: false,
          breadcrumbName: '活动详情'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(24)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("uvvJ")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'commonPage',
        name: 'commonPage',
        meta: {
          requireAuth: false,
          breadcrumbName: '拓展主题'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(26).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("V42O")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }]
    }, {
      path: '/eBook',
      name: '',
      meta: {
        requireAuth: false,
        breadcrumbName: '首页'
      },
      component: _eBook2.default,
      children: [{
        path: '',
        name: 'eBookDefault',
        component: _eBookDefault2.default
      }, {
        path: 'bookClassification',
        meta: {
          requireAuth: false,
          breadcrumbName: '资源分类'
        },
        component: _bookClassification2.default,
        children: [{
          path: '',
          name: 'bookDefault',
          component: function component(resolve) {
            return __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("CpvX")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'bookClassificationList',
          name: 'bookClassificationList',
          meta: {
            requireAuth: false,
            breadcrumbName: '中国文学'
          },
          component: function component(resolve) {
            return new Promise(function(resolve) { resolve(); }).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9g9h")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'myBookshelf',
        name: 'myBookshelf',
        meta: {
          requireAuth: true,
          breadcrumbName: '我的书架'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("52/O")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'eBookSearch',
        name: 'eBookSearch',
        meta: {
          requireAuth: false,
          breadcrumbName: '电子书检索'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(7)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vu7p")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'recommendedPast',
        meta: {
          requireAuth: false,
          breadcrumbName: '每周推荐查看往期'
        },
        component: _recommendedPast2.default,

        children: [{
          path: '',
          name: 'recommendedPastDefault',
          component: function component(resolve) {
            return __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("CAH6")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }, {
          path: 'recommended',
          name: 'recommended',
          meta: {
            requireAuth: false,
            breadcrumbName: '每周推荐'
          },
          component: function component(resolve) {
            return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(20)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("5vdg")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
          }
        }]
      }, {
        path: 'eBookDetails',
        name: 'eBookDetails',
        meta: {
          requireAuth: false,
          breadcrumbName: '图书详情'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Iuox")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'weiWeek',
        name: 'weiWeek',
        meta: {
          requireAuth: false,
          breadcrumbName: '微周刊'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("7CUH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'digitalReadingList',
        name: 'digitalReadingList',
        meta: {
          requireAuth: false,
          breadcrumbName: '排行榜'
        },
        component: function component(resolve) {
          return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(12)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("+JTE")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }, {
        path: 'eBookCommonPage',
        name: 'eBookCommonPage',
        meta: {
          requireAuth: false,
          breadcrumbName: '拓展主题'
        },
        component: function component(resolve) {
          return __webpack_require__.e/* require */(25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Rl8j")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
      }]
    }]
  });

  var _hmt = _hmt || [];
  var _czc = _czc || [];
  router.beforeEach(function (to, from, next) {
    if (_hmt && to.path) {
      _hmt.push(['_trackPageview', to.fullPath]);
      if (console) console.log('百度统计：' + to.fullPath);
    }
    if (_czc) {
      _czc.push(['_trackPageview', to.fullPath]);
      if (console) console.log('友盟统计：' + to.fullPath);
    }
    if (to.matched.some(function (r) {
      return r.meta.requireAuth;
    })) {
      if (_vue2.default.prototype.ls.getItem('loginUserInfo')) {
        next();
      } else {
        // console.log(to);
        // console.log(from);
        // console.log(next);
        // 如果被拦截，会跳转到首页，并且携带需要登录的标记login
        if (to.matched[0]) {
          next({
            path: to.matched[0].path,
            query: {
              login: _vue2.default.prototype.utils.guid()
            }
          });
        } else {
          next({
            path: 'index',
            query: {
              login: _vue2.default.prototype.utils.guid()
            }
          });
        }
      }
    } else {
      next();
    }
  });

  exports.default = router;
  module.exports = exports['default'];
});

/***/ }),

/***/ "ZQVO":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".booklist[data-v-2cac9e0e]{padding-left:0}.booklist .book[data-v-2cac9e0e]{width:20%;margin-bottom:40px;padding:0 16px}@media only screen and (max-width:767px){.booklist .book[data-v-2cac9e0e]{width:33.333333%;margin-bottom:20px}}@media only screen and (max-width:767px){.booklist[data-v-2cac9e0e]{margin-left:-15px;margin-right:-15px}}.paging[data-v-2cac9e0e]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-2cac9e0e]{display:none}}li[data-v-2cac9e0e]{list-style:none;float:left}li a[data-v-2cac9e0e]{text-decoration:none}@media only screen and (min-width:768px){.lend-loading[data-v-2cac9e0e]{position:fixed;top:30%;left:0;right:0;z-index:8}}@media only screen and (max-width:767px){.lend-loading[data-v-2cac9e0e]{position:fixed;top:52px;bottom:0;left:0;right:0;z-index:8}}", ""]);

// exports


/***/ }),

/***/ "Zafb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-header"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('router-link',{staticClass:"logo vertical-top",attrs:{"to":"/index"}}),_vm._v(" "),_c('div',{staticClass:"header-items vertical-top"},[_c('a',{class:{active: _vm.isActive},attrs:{"href":"javascript:;"},on:{"click":function($event){$event.stopPropagation();_vm.showSearchBar(0)}}},[_c('i',{staticClass:"iconfont icon-search2"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("搜索")])]),_vm._v(" "),_c('a',{staticClass:"visible-xs-inline-block",attrs:{"href":"javascript:;"},on:{"click":_vm.getQrcodeId}},[_c('i',{staticClass:"iconfont icon-qrcode"})]),_vm._v(" "),_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.viewMyLibrary}},[_c('i',{staticClass:"iconfont",class:_vm.showLoginIcon?'icon-activity':'icon-user-avatar'}),_c('span',{staticClass:"hidden-xs"},[_vm._v("我的图书馆")])]),_vm._v(" "),_c('router-link',{attrs:{"to":{path: '/index/museumNavigation'}}},[_c('i',{staticClass:"iconfont icon-location3"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("分馆导航")])])],1),_vm._v(" "),_c('router-link',{staticClass:"menu vertical-top",attrs:{"to":{path: '/index/fullMenu'},"tag":"span"}},[_c('i',{staticClass:"iconfont icon-mobile-menu"})])],1)]),_vm._v(" "),(_vm.isMobile && _vm.showQrcode)?_c('div',{staticClass:"modal-qrcode"},[_c('i',{staticClass:"iconfont icon-close-bg",on:{"click":_vm.closeQrcode}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('span',[_c('img',{staticClass:"img-responsive",attrs:{"src":_vm.qrcodeImage}})]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('button',{staticClass:"qrcode-btn",on:{"click":function($event){$event.stopPropagation();return _vm.refreshQrCode($event)}}},[_vm._v("刷新二维码")])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode-note"},[_c('h3',[_vm._v("二维码读者证")]),_vm._v(" "),_c('p',[_vm._v("在上海图书馆，使用自助借还设备进行借书、续借操作时，让自助设备“扫一下”即可。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode-note"},[_c('p',[_vm._v("二维码读者证有效时间1分钟，若失效请手动刷新")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Zr/k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue__ = __webpack_require__("7wqO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b7abe06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedPast_vue__ = __webpack_require__("Dgri");
function injectStyle (ssrContext) {
  __webpack_require__("j7QC")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9b7abe06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommendedPast_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b7abe06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommendedPast_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZxTU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-d36a2bce]{float:left!important}.pull-right[data-v-d36a2bce]{float:right!important}.show[data-v-d36a2bce]{display:block!important}.hidden[data-v-d36a2bce]{display:none!important;visibility:hidden!important}.invisible[data-v-d36a2bce]{visibility:hidden}.loading[data-v-d36a2bce]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-d36a2bce 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-d36a2bce{0%{width:2px}to{width:15px}}a[data-v-d36a2bce]{text-decoration:none}ol[data-v-d36a2bce],ul[data-v-d36a2bce]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-d36a2bce],input[data-v-d36a2bce]{-webkit-appearance:none}button[data-v-d36a2bce]{border:none;background:none}input[data-v-d36a2bce],input[data-v-d36a2bce]:focus{outline:none}.none-data[data-v-d36a2bce]{position:relative}.none-data[data-v-d36a2bce]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-d36a2bce]{border:1px solid #5390d7;color:#5390d7}.return[data-v-d36a2bce]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-d36a2bce]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-d36a2bce]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-d36a2bce]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-d36a2bce]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-d36a2bce]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-d36a2bce]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-d36a2bce]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-d36a2bce]{color:#42a8dd}.not-overdue[data-v-d36a2bce]{color:#5dc9a8}.overdue[data-v-d36a2bce]{color:#f97f50}.overlay[data-v-d36a2bce]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-d36a2bce]{padding-left:15px}.padMargin[data-v-d36a2bce]{padding-right:15px;padding-left:15px}}.white-bg[data-v-d36a2bce]{background-color:#fff}.vertical-top[data-v-d36a2bce]{vertical-align:top}.vertical-middle[data-v-d36a2bce]{vertical-align:middle}.vertical-center[data-v-d36a2bce]{font-size:0;text-align:left}.vertical-center[data-v-d36a2bce]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-d36a2bce]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-d36a2bce]{color:#fff}.swiper-button-next[data-v-d36a2bce],.swiper-button-prev[data-v-d36a2bce]{background-image:none}.swiper-button-next .iconfont[data-v-d36a2bce],.swiper-button-prev .iconfont[data-v-d36a2bce]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-d36a2bce],.swiper-button-prev .iconfont[data-v-d36a2bce]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-d36a2bce],.swiper-button-prev .iconfont[data-v-d36a2bce]{font-size:11px}}.list-container>li[data-v-d36a2bce]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-d36a2bce]{padding-bottom:31px}.list-container>li+li[data-v-d36a2bce]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-d36a2bce]{padding-bottom:15px}.list-container>li+li[data-v-d36a2bce]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-d36a2bce]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-d36a2bce]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-d36a2bce]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-d36a2bce]{padding-bottom:16px}.has-right-column .calendar[data-v-d36a2bce]{width:280px;height:254px}}.view-more[data-v-d36a2bce]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-d36a2bce]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-d36a2bce]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-d36a2bce]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-d36a2bce]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-d36a2bce]{display:none}.view-more .iconfont[data-v-d36a2bce]{font-size:10px}}.about-content[data-v-d36a2bce]{color:#666}.about-content>p[data-v-d36a2bce]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-d36a2bce]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-d36a2bce]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-d36a2bce]{padding-right:10px;padding-left:10px}.about-content>p[data-v-d36a2bce]{font-size:13px;line-height:25px}.about-content>p+p[data-v-d36a2bce]{margin-top:12px}}.component-menuInner.last1>a[data-v-d36a2bce]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-d36a2bce]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-d36a2bce]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-d36a2bce]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-d36a2bce]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-d36a2bce]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-d36a2bce]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-d36a2bce]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-d36a2bce]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-d36a2bce]{color:#5cc8a8}.component-menuInner a[data-v-d36a2bce]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-d36a2bce]{color:#4daada}.component-menuInner a p[data-v-d36a2bce]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-d36a2bce]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-d36a2bce]{margin-top:20px}.component-menuInner a[data-v-d36a2bce]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-d36a2bce]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-d36a2bce]{font-size:34px}.component-menuInner a p[data-v-d36a2bce]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-d36a2bce]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-d36a2bce]{margin-top:10px}.component-menuInner a[data-v-d36a2bce]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-d36a2bce]{font-size:19px}.component-menuInner a p[data-v-d36a2bce]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-d36a2bce]{padding-right:15px;padding-left:15px}}.footer[data-v-d36a2bce]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-d36a2bce{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-d36a2bce]{position:relative}.eventAction[data-v-d36a2bce]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-d36a2bce .75s 0s linear infinite;animation:rotate-data-v-d36a2bce .75s 0s linear infinite}.component-header[data-v-d36a2bce]{position:relative;height:52px;background-color:#fff}.component-header[data-v-d36a2bce]:after{content:\"\";position:absolute;top:auto;right:0;bottom:0;left:0;height:1px;background-color:#eee}.component-header .container[data-v-d36a2bce]{height:100%;font-size:0}.component-header .container .row[data-v-d36a2bce]{height:100%}@media only screen and (max-width:767px){.component-header .container .row[data-v-d36a2bce]{display:flex;align-items:center;justify-content:space-between;padding-left:11px;padding-right:11px}}.component-header .logo[data-v-d36a2bce]{display:inline-block;width:30px;height:22px;background:url(/static/images/logo.png) no-repeat 0;background-size:contain}.component-header .header-items[data-v-d36a2bce]{text-align:right}@media only screen and (max-width:767px){.component-header .header-items[data-v-d36a2bce]{flex:1}}.component-header .header-items>a[data-v-d36a2bce]{height:100%;margin-right:19px;color:#333}@media only screen and (max-width:767px){.component-header .header-items>a[data-v-d36a2bce]{flex:1}.component-header .header-items>a .iconfont[data-v-d36a2bce]{font-size:18px}.component-header .header-items>a .icon-activity[data-v-d36a2bce]{color:#5390d7}}.component-header .menu[data-v-d36a2bce]{height:100%;border-left:1px solid #eee;cursor:pointer}@media only screen and (max-width:767px){.component-header .menu[data-v-d36a2bce]{display:flex;align-items:center;padding-right:14px;padding-left:14px;margin-right:-11px}}.modal-qrcode[data-v-d36a2bce]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10;background-color:#eee;padding-top:40px}.modal-qrcode .iconfont[data-v-d36a2bce]{position:absolute;right:20px;top:20px;font-size:36px;line-height:1}.modal-qrcode .qrcode-note[data-v-d36a2bce]{padding:0 35px}.modal-qrcode .qrcode-note p[data-v-d36a2bce]{color:#999}.modal-qrcode .qrcode-btn[data-v-d36a2bce]{width:280px;height:36px;color:#eee;font-size:16px;margin:0 auto;display:block;background-color:#5f9ce3;border-radius:4px}.modal-qrcode>span[data-v-d36a2bce]{display:block;margin:0 auto;max-width:80%;min-height:280px;padding:10px;background-color:#fff;border-radius:4px}@media (orientation:landscape){.modal-qrcode>span[data-v-d36a2bce]{max-width:280px;max-height:280px;float:left;margin-left:40px}.modal-qrcode .qrcode-note[data-v-d36a2bce]{width:50%;float:right}.modal-qrcode .qrcode-btn[data-v-d36a2bce]{float:right;margin-right:30px}}@media only screen and (min-width:768px){.component-header[data-v-d36a2bce]{height:80px;line-height:80px}.component-header .logo[data-v-d36a2bce]{position:relative;width:310px;height:100%;padding:10px 0;background:url(/static/images/logo-pc.png) no-repeat 0;background-size:100%}.component-header .header-items[data-v-d36a2bce]{display:inline-block;width:calc(100% - 390px);height:80px;font-size:0}.component-header .header-items>a[data-v-d36a2bce]{position:relative;display:inline-block;margin-right:46px;padding-right:10px;padding-left:3px;font-size:18px}.component-header .header-items>a.active[data-v-d36a2bce]:after,.component-header .header-items>a[data-v-d36a2bce]:hover:after{background-color:#4474ac;color:#4474ac}.component-header .header-items>a[data-v-d36a2bce]:after{content:\"\";position:absolute;right:0;bottom:15px;left:0;height:2px;background-color:transparent}.component-header .header-items .iconfont[data-v-d36a2bce]{margin-right:10px;font-size:20px}.component-header .header-items .icon-activity[data-v-d36a2bce]{color:#5390d7}.component-header .menu[data-v-d36a2bce]{display:inline-block;padding-right:26px;padding-left:26px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-header[data-v-d36a2bce]{height:60px;line-height:60px}.component-header .logo[data-v-d36a2bce]{height:50px;margin:5px 0;left:15px;background-size:100%;width:280px}.component-header .header-items>a[data-v-d36a2bce]{margin-right:30px;font-size:16px}.component-header .header-items .iconfont[data-v-d36a2bce]{font-size:16px}.component-header .header-items .icon-activity[data-v-d36a2bce]{color:#5390d7}.component-header .menu[data-v-d36a2bce]{margin-right:-11px}}", ""]);

// exports


/***/ }),

/***/ "bIaK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dTIG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("102315d4", content, true, {});

/***/ }),

/***/ "bOIy":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pagination-cpntainer[data-v-50d0431e]{user-select:none;text-align:center}.pagination-cpntainer .pagination[data-v-50d0431e]{display:inline-block}.pagination-cpntainer .pagination>li[data-v-50d0431e],.pagination-cpntainer .pagination[data-v-50d0431e]{margin:0 5px;list-style:none}.pagination-cpntainer .active a[data-v-50d0431e]{color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination-cpntainer li[data-v-50d0431e]{display:inline-block;vertical-align:top}.pagination-cpntainer li:first-child>a[data-v-50d0431e]{margin-left:0}.pagination-cpntainer li.skipPage[data-v-50d0431e]{margin-left:2px;font-size:12px}.pagination-cpntainer li.skipPage>input[data-v-50d0431e]{width:26px;height:26px;padding:6px;margin-right:5px;margin-left:5px;border:1px solid #e0e5e8;vertical-align:middle;outline:none}.pagination-cpntainer li.skipPage>span[data-v-50d0431e]{margin-left:10px}.pagination-cpntainer a[data-v-50d0431e]{min-width:26px;text-decoration:none;position:relative;float:left;padding:4px 10px 5px 9px;line-height:17px;color:#666;font-size:12px;cursor:pointer;border-radius:2px;background-color:#f0f3f6}.pagination-cpntainer a[data-v-50d0431e]:hover{background-color:#4573ab;color:#fff}.pagination-cpntainer a.page-button-disabled[data-v-50d0431e]:hover{background-color:#f0f3f6;color:#666;cursor:default}.pagination-cpntainer .isSymbol[data-v-50d0431e]{margin:0 -5px;padding:0!important;font-size:18px;background:none!important;cursor:default}.pagination-cpntainer .isSymbol[data-v-50d0431e]:hover{color:#666}.pagination-cpntainer .next-arrow[data-v-50d0431e],.pagination-cpntainer .prev-arrow[data-v-50d0431e]{display:block;width:26px;height:26px;padding:0;text-align:center;line-height:26px;overflow:hidden}.pagination-cpntainer i[data-v-50d0431e]{font-size:12px;font-weight:700}.pagination-cpntainer .page-button-disabled[data-v-50d0431e]{color:#ddd!important}", ""]);

// exports


/***/ }),

/***/ "cHTz":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("6ub1"), __webpack_require__("c8l7")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./utils/dom'), require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dom, global.util);
    global.bar = mod.exports;
  }
})(this, function (module, exports, _dom, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'Bar',

    props: {
      vertical: Boolean,
      size: String,
      move: Number,
      barStyle: Object,
      railStyle: Object
    },

    computed: {
      bar: function bar() {
        return _util.BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
      },
      railStyles: function railStyles() {
        return this.vertical ? "background-color:" + this.railStyle.color + ";z-Index:" + this.railStyle.zIndex + ";width:" + this.barStyle.width + ";right:" + this.railStyle.marginRight : "background-color:" + this.railStyle.color + ";z-Index:" + this.railStyle.zIndex + ";height:" + this.barStyle.width + ";bottom:" + this.railStyle.marginBottom;
      },
      wrap: function wrap() {
        return this.$parent.wrap;
      }
    },

    render: function render(h) {
      var size = this.size,
          move = this.move,
          bar = this.bar,
          barStyle = this.barStyle;

      return h(
        'div',
        {
          ref: 'railway',
          'class': ['esay-scrollbar__bar', 'is-' + bar.key],
          style: this.railStyles,
          on: {
            'mouseenter': this.handleRailMouseEnter,
            'mousedown': this.clickTrackHandler
          }
        },
        [h('div', {
          ref: 'thumb',
          'class': 'easy-scrollbar__thumb',
          on: {
            'mousedown': this.clickThumbHandler
          },

          style: (0, _util.renderThumbStyle)({ size: size, move: move, bar: bar, barStyle: barStyle }) })]
      );
    },


    methods: {
      clickThumbHandler: function clickThumbHandler(e) {
        this.startDrag(e);
        this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
      },

      handleRailMouseEnter: function handleRailMouseEnter() {

        this.$refs.railway.children[0].style.opacity = 1;
      },
      clickTrackHandler: function clickTrackHandler(e) {
        var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
        var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
        var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

        this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
      },
      startDrag: function startDrag(e) {
        e.stopImmediatePropagation();
        this.cursorDown = true;

        (0, _dom.on)(document, 'mousemove', this.mouseMoveDocumentHandler);
        (0, _dom.on)(document, 'mouseup', this.mouseUpDocumentHandler);
        document.onselectstart = function () {
          return false;
        };
      },
      mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
        if (this.cursorDown === false) return;
        var prevPage = this[this.bar.axis];

        if (!prevPage) return;

        var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
        var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
        var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

        this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
      },
      mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
        this.cursorDown = false;
        this[this.bar.axis] = 0;
        (0, _dom.off)(document, 'mousemove', this.mouseMoveDocumentHandler);
        document.onselectstart = null;
      }
    },

    destroyed: function destroyed() {
      (0, _dom.off)(document, 'mouseup', this.mouseUpDocumentHandler);
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "cQ1n":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8ml0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4d808cc2", content, true, {});

/***/ }),

/***/ "cVso":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("7biW"), __webpack_require__("i51E"), __webpack_require__("Cz8s"), __webpack_require__("6s/J")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/search'), require('../components/modalLogin'), require('../components/header'), require('../components/libInfo'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.search, global.modalLogin, global.header, global.libInfo);
    global.index = mod.exports;
  }
})(this, function (module, exports, _search, _modalLogin, _header, _libInfo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _search2 = _interopRequireDefault(_search);

  var _modalLogin2 = _interopRequireDefault(_modalLogin);

  var _header2 = _interopRequireDefault(_header);

  var _libInfo2 = _interopRequireDefault(_libInfo);

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

  var self = null; // 定义保存 Vue `this` 对象

  // 加载组件
  // 搜索框
  // 用户登录Modal
  // 页头
  exports.default = {
    data: function data() {
      return {
        eachHeight: null
      };
    },


    components: {
      searchArea: _search2.default,
      modalLogin: _modalLogin2.default,
      siteHeader: _header2.default,
      libInfo: _libInfo2.default
    },

    computed: {
      footerHeight: function footerHeight() {
        var isMobile = this.$store.state.isMobile,
            isHideFullFooter = this.$store.state.isHideFullFooter;
        if (isMobile && !isHideFullFooter) {
          return self.$store.state.footerHeight + 'px';
        }
      }
    },

    created: function created() {
      self = this; // Vue创建后将 `this` 赋值给定义的变量self
    },


    methods: {
      tabChangeHandler: function tabChangeHandler() {
        // 动态设置padding-bottom值
        self.$nextTick(function () {
          var dynamicHeight = self.$refs.sitefooter.$el.offsetHeight;
          self.eachHeight = dynamicHeight + 15;
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "camZ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ZxTU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9340de60", content, true, {});

/***/ }),

/***/ "ce18":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.api);
    global.footer = mod.exports;
  }
})(this, function (module, exports, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "siteFooter",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        footerHideAll: false,
        tabActive: 0,
        copyMessage: 'shlibrary',
        hideCopyTips: false,
        copyTipMessage: '',
        webCount: 0,
        fURLList: []
      };
    },


    props: ['eachHeight'],

    created: function created() {
      self = this;
    },


    computed: {
      showMiddleContent: function showMiddleContent() {
        /** 
         * Mobile footer 根据不同场景展示不同内容
         *  homePage => 展示全部内容
         *  other => 展示 `访问次数` | `版权信息`...
         */
        if (self.isMobile) {
          var isHideFullFooter = self.$store.state.isHideFullFooter,
              isIndexPage = self.$store.state.isIndexPage;

          // 隐藏全部footer
          if (isHideFullFooter) {
            self.commitEvent('changeFooterHeight', 15);
            self.footerHideAll = true;
            return;
          }

          var showContent = false; // 默认不显示中间内容
          self.footerHideAll = false;
          if (isIndexPage) {
            // 当前是否为首页
            var finalVal = self.eachHeight || 490;
            showContent = true;
            self.commitEvent('changeFooterHeight', finalVal);
          } else {
            self.commitEvent('changeFooterHeight', 135);
          }

          return showContent;
        }

        return true;
      }
    },
    mounted: function mounted() {
      this.initFooter();
    },


    methods: {
      initFooter: function initFooter() {
        this.getWebCounter();
        this.getFurl();
      },
      getFurl: function getFurl() {
        var _this = this;

        // 获取友情链接
        //   this.fURLList = [
        //     {
        //         "v1": "shlib.web.h5.1",
        //         "v2": "http://www.libnet.sh.cn/zxtsg/",
        //         "v3": "102",
        //         "v4": "上海市中心图书馆",
        //         "id": "4"
        //     },
        //     {
        //         "v1": "shlib.web.h5.1",
        //         "v2": "http://www.libnet.sh.cn/",
        //         "v3": "101",
        //         "v4": "上海图书馆专业门户",
        //         "id": "3"
        //     },
        //     {
        //         "v1": "shlib.web.h5.1",
        //         "v2": "http://www.hyqb.sh.cn/",
        //         "v3": "100",
        //         "v4": "上海行业情报服务网",
        //         "id": "2"
        //     },
        //     {
        //         "v1": "shlib.web.h5.1",
        //         "v2": "http://www.istis.sh.cn/",
        //         "v3": "99",
        //         "v4": "情报服务平台",
        //         "id": "1"
        //     }
        // ];
        _api.serverInfo.getFurl().then(function (data) {
          _this.fURLList = data.datas;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getFurl();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getWebCounter: function getWebCounter() {
        var _this2 = this;

        // 获取网站计数
        // this.webCount = 20180420;
        _api.serverInfo.getWebCounter().then(function (data) {
          _this2.webCount = data['shlib.web.h5.1'];
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getWebCounter();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      changeStatus: function changeStatus(index) {
        self.tabActive = index;

        // Mobile 传递事件
        if (self.isMobile) {
          self.$emit('tabChange');
        }
      },
      onCopy: function onCopy(ev) {
        self.hideCopyTips = true;
        self.copyTipMessage = '复制成功';

        setTimeout(function () {
          self.hideCopyTips = false;
        }, 3000);
      },
      onError: function onError(ev) {
        self.copyTipMessage = '复制失败, 请重试';
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "cn6v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue__ = __webpack_require__("hfAu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_289cfe2e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_waterfall_easy_vue__ = __webpack_require__("0eTh");
function injectStyle (ssrContext) {
  __webpack_require__("JfQZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-289cfe2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_waterfall_easy_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_289cfe2e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_waterfall_easy_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "d0vv":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.api);
    global.activityItem = mod.exports;
  }
})(this, function (module, exports, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // 活动中心接口
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
  //
  //
  //
  //
  //
  //

  exports.default = {
    name: "activityCenter",

    data: function data() {
      return {
        isFocus: false // 是否已关注
      };
    },


    props: {
      activityObj: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },

    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {
      setDiffType: function setDiffType(type) {
        var diffClass = '';
        switch (type) {
          case '展览':
            diffClass = 'type-exhibition';
            break;
          case '培训':
            diffClass = 'type-train';
            break;
          case '讲座':
            diffClass = 'type-lecture';
          default:
            break;
        }

        return diffClass;
      },
      focusOn: function focusOn(id) {
        var _this = this;

        // 判断用户是否登录
        if (!self.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: 'reload'
          });
          self.utils.modalOpenEvent(true);
          return;
        }
        _api.activityCenter.addMyEvents(id).then(function () {
          _this.activityObj.isFocus = true;
          _this.$emit('focus-on');
        }).catch(function (error) {
          console.log(error);
        });
      },
      focusOff: function focusOff(id) {
        var _this2 = this;

        _api.activityCenter.removeMyEvents(id).then(function () {
          _this2.activityObj.isFocus = false;
          _this2.$emit('focus-off');
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "dHjQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('column-title',{attrs:{"column-title":_vm.weiTitle}}),_vm._v(" "),_c('div',[_c('ul',{staticClass:"booklist clearfix"},_vm._l((_vm.bookList),function(book,index){return _c('li',{key:index,staticClass:"book"},[_c('router-link',{attrs:{"to":{name: 'eBookDetails',query: {type:_vm.theType,bid:book.bid}},"target":"_blank"}},[_c('simple-book',{attrs:{"bookinfo":book}})],1)],1)}))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalNumb>0),expression:"totalNumb>0"}],staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.totalNumb,"current":_vm.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.curr,"total":_vm.totalNumb,"load":_vm.loading},on:{"more-data":_vm.loadMore}}),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"lend-loading"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dMAz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bOIy");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("37a418d8", content, true, {});

/***/ }),

/***/ "dTIG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".none-data-tip[data-v-367ade80]{text-align:center;color:#999;font-size:14px}.none-data-tip .none-ico[data-v-367ade80]{display:inline-block;width:167px;height:260px;background:url(\"/static/images/none-data.png\") no-repeat 50%;background-size:100%}@media only screen and (max-width:767px){.none-data-tip .none-ico[data-v-367ade80]{width:100px;height:140px}}@media only screen and (max-width:768px){.none-data-tip[data-v-367ade80]{display:table;margin:60px auto 0}}", ""]);

// exports


/***/ }),

/***/ "eUMD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".swiper-pagination-bullets{bottom:0;width:100%;background:rgba(0,0,0,.6)}.swiper-pagination-bullets .swiper-pagination-bullet{width:16px;height:16px;margin:8px 5px 5px;background:#fff}", ""]);

// exports


/***/ }),

/***/ "ebbn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-1cfdfb61]{float:left!important}.pull-right[data-v-1cfdfb61]{float:right!important}.show[data-v-1cfdfb61]{display:block!important}.hidden[data-v-1cfdfb61]{display:none!important;visibility:hidden!important}.invisible[data-v-1cfdfb61]{visibility:hidden}.loading[data-v-1cfdfb61]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-1cfdfb61 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-1cfdfb61{0%{width:2px}to{width:15px}}a[data-v-1cfdfb61]{text-decoration:none}ol[data-v-1cfdfb61],ul[data-v-1cfdfb61]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-1cfdfb61],input[data-v-1cfdfb61]{-webkit-appearance:none}button[data-v-1cfdfb61]{border:none;background:none}input[data-v-1cfdfb61],input[data-v-1cfdfb61]:focus{outline:none}.none-data[data-v-1cfdfb61]{position:relative}.none-data[data-v-1cfdfb61]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-1cfdfb61]{border:1px solid #5390d7;color:#5390d7}.return[data-v-1cfdfb61]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-1cfdfb61]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-1cfdfb61]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-1cfdfb61]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-1cfdfb61]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-1cfdfb61]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-1cfdfb61]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-1cfdfb61]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-1cfdfb61]{color:#42a8dd}.not-overdue[data-v-1cfdfb61]{color:#5dc9a8}.overdue[data-v-1cfdfb61]{color:#f97f50}.overlay[data-v-1cfdfb61]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-1cfdfb61]{padding-left:15px}.padMargin[data-v-1cfdfb61]{padding-right:15px;padding-left:15px}}.white-bg[data-v-1cfdfb61]{background-color:#fff}.vertical-top[data-v-1cfdfb61]{vertical-align:top}.vertical-middle[data-v-1cfdfb61]{vertical-align:middle}.vertical-center[data-v-1cfdfb61]{font-size:0;text-align:left}.vertical-center[data-v-1cfdfb61]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-1cfdfb61]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-1cfdfb61]{color:#fff}.swiper-button-next[data-v-1cfdfb61],.swiper-button-prev[data-v-1cfdfb61]{background-image:none}.swiper-button-next .iconfont[data-v-1cfdfb61],.swiper-button-prev .iconfont[data-v-1cfdfb61]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-1cfdfb61],.swiper-button-prev .iconfont[data-v-1cfdfb61]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-1cfdfb61],.swiper-button-prev .iconfont[data-v-1cfdfb61]{font-size:11px}}.list-container>li[data-v-1cfdfb61]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-1cfdfb61]{padding-bottom:31px}.list-container>li+li[data-v-1cfdfb61]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-1cfdfb61]{padding-bottom:15px}.list-container>li+li[data-v-1cfdfb61]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-1cfdfb61]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-1cfdfb61]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-1cfdfb61]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-1cfdfb61]{padding-bottom:16px}.has-right-column .calendar[data-v-1cfdfb61]{width:280px;height:254px}}.view-more[data-v-1cfdfb61]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-1cfdfb61]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-1cfdfb61]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-1cfdfb61]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-1cfdfb61]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-1cfdfb61]{display:none}.view-more .iconfont[data-v-1cfdfb61]{font-size:10px}}.about-content[data-v-1cfdfb61]{color:#666}.about-content>p[data-v-1cfdfb61]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-1cfdfb61]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-1cfdfb61]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-1cfdfb61]{padding-right:10px;padding-left:10px}.about-content>p[data-v-1cfdfb61]{font-size:13px;line-height:25px}.about-content>p+p[data-v-1cfdfb61]{margin-top:12px}}.component-menuInner.last1>a[data-v-1cfdfb61]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-1cfdfb61]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-1cfdfb61]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-1cfdfb61]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-1cfdfb61]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-1cfdfb61]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-1cfdfb61]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-1cfdfb61]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-1cfdfb61]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-1cfdfb61]{color:#5cc8a8}.component-menuInner a[data-v-1cfdfb61]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-1cfdfb61]{color:#4daada}.component-menuInner a p[data-v-1cfdfb61]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-1cfdfb61]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-1cfdfb61]{margin-top:20px}.component-menuInner a[data-v-1cfdfb61]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-1cfdfb61]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-1cfdfb61]{font-size:34px}.component-menuInner a p[data-v-1cfdfb61]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-1cfdfb61]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-1cfdfb61]{margin-top:10px}.component-menuInner a[data-v-1cfdfb61]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-1cfdfb61]{font-size:19px}.component-menuInner a p[data-v-1cfdfb61]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-1cfdfb61]{padding-right:15px;padding-left:15px}}.footer[data-v-1cfdfb61]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-1cfdfb61{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-1cfdfb61]{position:relative}.eventAction[data-v-1cfdfb61]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-1cfdfb61 .75s 0s linear infinite;animation:rotate-data-v-1cfdfb61 .75s 0s linear infinite}.component-header[data-v-1cfdfb61]{position:relative;height:52px;background-color:#fff}.component-header[data-v-1cfdfb61]:after{content:\"\";position:absolute;top:auto;right:0;bottom:0;left:0;height:1px;background-color:#eee}.component-header .container[data-v-1cfdfb61]{height:100%;font-size:0}.component-header .container .row[data-v-1cfdfb61]{height:100%}@media only screen and (max-width:767px){.component-header .container .row[data-v-1cfdfb61]{display:flex;align-items:center;justify-content:space-between;padding-left:11px;padding-right:11px}}.component-header .logo[data-v-1cfdfb61]{display:inline-block;width:32px;height:32px;background:url(/static/images/elib.jpg) no-repeat 0;background-size:contain}.component-header .header-items[data-v-1cfdfb61]{text-align:right;color:#666}@media only screen and (max-width:767px){.component-header .header-items[data-v-1cfdfb61]{flex:1}.component-header .header-items .login[data-v-1cfdfb61]{display:inline-block;font-size:13px;padding-right:14px;border-right:1px solid #979797}.component-header .header-items .login a[data-v-1cfdfb61]{color:#666}.component-header .header-items .login a .iconfont[data-v-1cfdfb61]{margin-right:5px}}.component-header .header-items>a[data-v-1cfdfb61]{height:100%;margin-left:19px;color:#333}@media only screen and (max-width:767px){.component-header .header-items>a[data-v-1cfdfb61]{flex:1}.component-header .header-items>a .iconfont[data-v-1cfdfb61]{font-size:18px}}.component-header .menu[data-v-1cfdfb61]{height:100%;border-left:1px solid #eee;cursor:pointer}@media only screen and (max-width:767px){.component-header .menu[data-v-1cfdfb61]{display:flex;align-items:center;padding-right:14px;padding-left:14px;margin-right:-11px}}.modal-qrcode[data-v-1cfdfb61]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;background-color:rgba(0,0,0,.3)}.modal-qrcode>span[data-v-1cfdfb61]{position:absolute;top:50%;left:50%;min-width:80%;min-height:280px;padding:10px;background-color:#fff;border-radius:4px;transform:translate3d(-50%,-50%,0)}@media only screen and (min-width:768px){.component-header[data-v-1cfdfb61]{height:80px;line-height:80px}.component-header .logo[data-v-1cfdfb61]{position:relative;width:130px;height:100%;background:url(/static/images/ebook-logo.png) no-repeat 0;background-size:100%}.component-header .header-items[data-v-1cfdfb61]{float:right;width:calc(100% - 235px);height:80px;font-size:0}.component-header .header-items .login[data-v-1cfdfb61]{height:80px;padding:0 50px 0 0;position:relative;display:inline-block;font-size:18px;border-right:1px solid #eee}.component-header .header-items .login a[data-v-1cfdfb61]{color:#333;height:100%;display:inline-block;padding:0 10px}.component-header .header-items .login a.active[data-v-1cfdfb61]:after,.component-header .header-items .login a[data-v-1cfdfb61]:hover:after{background-color:#4474ac;color:#4474ac}.component-header .header-items .login a[data-v-1cfdfb61]:after{content:\"\";position:absolute;right:50px;bottom:15px;left:0;height:2px;background-color:transparent}.component-header .header-items>a[data-v-1cfdfb61]{position:relative;display:inline-block;margin-left:20px;padding-right:10px;padding-left:10px;font-size:18px}.component-header .header-items>a.active[data-v-1cfdfb61]:after,.component-header .header-items>a[data-v-1cfdfb61]:hover:after{background-color:#4474ac;color:#4474ac}.component-header .header-items>a[data-v-1cfdfb61]:after{content:\"\";position:absolute;right:0;bottom:15px;left:0;height:2px;background-color:transparent}.component-header .header-items .bookclass[data-v-1cfdfb61]{margin-left:50px}.component-header .header-items .iconfont[data-v-1cfdfb61]{margin-right:10px;font-size:20px}.component-header .menu[data-v-1cfdfb61]{display:inline-block;padding-right:26px;padding-left:26px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-header[data-v-1cfdfb61]{height:60px;line-height:60px}.component-header .logo[data-v-1cfdfb61]{left:15px;width:110px;height:100%}.component-header .header-items .login[data-v-1cfdfb61],.component-header .header-items[data-v-1cfdfb61]{height:60px}.component-header .header-items>a[data-v-1cfdfb61]{margin-right:30px;font-size:16px}.component-header .header-items .iconfont[data-v-1cfdfb61]{font-size:16px}.component-header .menu[data-v-1cfdfb61]{margin-right:-11px}}", ""]);

// exports


/***/ }),

/***/ "em4H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-homePage"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"top-swiper-news padMargin clearfix"},[_c('div',{staticClass:"news-main"},[_c('div',{staticClass:"index-swiper"},[(_vm.carouselList.length)?_c('swiper',{ref:"indexSwiper",attrs:{"options":_vm.swiperOption}},[_vm._l((_vm.carouselList),function(item){return _c('swiper-slide',{key:item.v4},[_c('a',{attrs:{"href":item.v6,"target":"_blank"}},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.v5,"alt":""}})])])}),_vm._v(" "),_c('div',{staticClass:"swiper-button-prev",attrs:{"slot":"button-prev"},slot:"button-prev"},[_c('i',{staticClass:"iconfont icon-arrow-left2"})]),_vm._v(" "),_c('div',{staticClass:"swiper-button-next",attrs:{"slot":"button-next"},slot:"button-next"},[_c('i',{staticClass:"iconfont icon-arrow-right2"})])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})],1)])]),_vm._v(" "),_c('div',{staticClass:"main-content padMargin"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLogin),expression:"isLogin"}],staticClass:"book-center"},[_c('column-title',{attrs:{"column-title":_vm.mybooksTitle}}),_vm._v(" "),_c('div',{staticClass:"book-list-wrap"},[_c('ul',{staticClass:"booklist clearfix"},_vm._l((_vm.myBooksList),function(book){return _c('li',{key:book.bid,staticClass:"book"},[_c('simple-book',{attrs:{"bookinfo":book}})],1)}))]),_vm._v(" "),_c('a',{staticClass:"view-more",attrs:{"href":"javascript:;"},on:{"click":_vm.goToMyShelf}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"weekly-recommended"},[_c('column-title',{attrs:{"column-title":_vm.weeklyTitle}}),_vm._v(" "),_c('div',{staticClass:"book-container row"},_vm._l((_vm.weeklyList),function(item,index){return _c('div',{key:index,staticClass:"col-xs-4 col-sm-6",class:{even: (index + 1) % 2 === 0}},[_c('router-link',{attrs:{"to":{name: 'eBookDetails',query: {type:'epub',bid:item.fbookid}},"target":"_blank"}},[_c('book-info',{attrs:{"book-info":item}})],1)],1)})),_vm._v(" "),_c('router-link',{staticClass:"view-more",attrs:{"to":{name: 'recommendedPastDefault'}}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"book-center"},[_c('column-title',{attrs:{"column-title":_vm.weiTitle}}),_vm._v(" "),_c('div',{staticClass:"book-list-wrap"},[_c('ul',{staticClass:"booklist clearfix"},_vm._l((_vm.myWeiList),function(book,index){return _c('li',{key:index,staticClass:"book"},[_c('router-link',{attrs:{"to":{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}},"target":"_blank"}},[_c('simple-book',{attrs:{"bookinfo":book}})],1)],1)}))]),_vm._v(" "),_c('router-link',{staticClass:"view-more",attrs:{"to":{name: 'weiWeek'}}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"book-center"},[_c('column-title',{attrs:{"column-title":_vm.rankTitle}}),_vm._v(" "),_c('div',{staticClass:"book-list-wrap"},[_c('ul',{staticClass:"booklist clearfix"},_vm._l((_vm.rankList),function(book){return _c('li',{staticClass:"book"},[_c('simple-book',{attrs:{"bookinfo":book}})],1)}))]),_vm._v(" "),_vm._m(0)],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"view-more",attrs:{"href":"javascript:;"}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ezGO":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Ergs");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1d0712e6", content, true, {});

/***/ }),

/***/ "f7Mm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue__ = __webpack_require__("kQfq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_367ade80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noneData_vue__ = __webpack_require__("weHS");
function injectStyle (ssrContext) {
  __webpack_require__("bIaK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-367ade80"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_noneData_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_367ade80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_noneData_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fEFM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "fomX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue__ = __webpack_require__("Hq/o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34b6e245_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullMenu_vue__ = __webpack_require__("91Bt");
function injectStyle (ssrContext) {
  __webpack_require__("BSiz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34b6e245"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullMenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34b6e245_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "gLPx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-myLibrary"},[_c('bread-crumb',{attrs:{"color":_vm.eachColor}}),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "gYWr":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("7QTg"), __webpack_require__("jF92"), __webpack_require__("Oqyz"), __webpack_require__("4fwm"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vue-awesome-swiper'), require('../components/activityItem'), require('../components/bookInfo'), require('../components/simpleBook'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vueAwesomeSwiper, global.activityItem, global.bookInfo, global.simpleBook, global.api);
    global.eBookDefault = mod.exports;
  }
})(this, function (module, exports, _vueAwesomeSwiper, _activityItem, _bookInfo, _simpleBook, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _activityItem2 = _interopRequireDefault(_activityItem);

  var _bookInfo2 = _interopRequireDefault(_bookInfo);

  var _simpleBook2 = _interopRequireDefault(_simpleBook);

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

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "eBook",

    data: function data() {
      return {
        swiperOption: {
          loop: true,
          notNextTick: true,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // notNextTick: true,
            // prevButton: '.swiper-button-prev', // 上一张
            // nextButton: '.swiper-button-next', // 下一张
          } },
        carouselList: [], // 轮播列表

        mybooksTitle: '我的书架',
        weeklyTitle: '每周推荐',
        weiTitle: '微期刊',
        rankTitle: '排行榜',
        myBooksList: [], // 书架列表
        weeklyList: [], // 每周推荐列表
        myWeiList: [], // 微期刊列表
        rankList: [], // 排行榜列表
        isMob: this.$store.state.isMobile ? 'mobile' : 'all',
        isLogin: this.ls.getItem('loginUserInfo') ? true : false
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      swiper: _vueAwesomeSwiper.swiper,
      swiperSlide: _vueAwesomeSwiper.swiperSlide,
      activityItem: _activityItem2.default,
      bookInfo: _bookInfo2.default,
      simpleBook: _simpleBook2.default
    },

    computed: {
      swiper: function swiper() {
        return this.$refs.indexSwiper.swiper;
      }
    },

    mounted: function mounted() {
      this.checkLoginTick();
      this.getCarouselFigure();
      // this.myBooksList = this.getBookList();
      // this.myWeiList = this.getBookList();
      this.rankList = this.getBookList();
      this.getMyBookShelf();
      this.getResommended();
      this.getWeiList();
    },


    methods: {
      checkLoginTick: function checkLoginTick() {
        // 检查地址栏的登录标记
        if (this.$route.query.login) {
          // let isLogin = self.ls.getItem('loginUserInfo');
          // // 未登录 - 打开登录Modal
          // if ( !isLogin ) {
          //   self.commitEvent('changeshowLoginModal', true);
          //   self.commitEvent('changeTempPath', {
          //     path: '/eBook'
          //   });
          //   self.utils.modalOpenEvent(true);
          //   return;
          // }
          self.checkLogin('/eBook');
        }
      },
      getCarouselFigure: function getCarouselFigure() {
        _api.serverInfo.swiper().then(function (data) {
          self.carouselList = data.datas;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getCarouselFigure();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getBookList: function getBookList() {
        var list = [{ imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集飞鸟集飞鸟集飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }, { imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集", type: "外国文学" }];
        return list;
      },
      getResommended: function getResommended() {
        // 获取每周推荐
        _api.resommended.getWeeklyInfos(7).then(function (res) {
          var data = res.result.datas;
          if (!data.length) return;

          // 筛选最新季期 - 暂使用多次请求的方式
          var lastest = data[0].v2;
          var bookidList = [];
          data.map(function (item) {
            if (item.v2 === lastest) {
              bookidList.push(item.v4);
            }
          });
          var bookidStr = bookidList.slice(0, 7).join(',');
          _api.bookInfoApi.epubinfo(bookidStr).then(function (res) {
            var inner = res.result.datas;
            if (!self.utils.isEmpty(inner)) {
              var tempArr = inner.map(function (item, index) {
                return {
                  fcover: item.v14 || self.$store.state.defaultBookCover,
                  ftitle: item.v9.replace('=', ' '),
                  fbookid: item.v7,
                  fauthor: item.v13,
                  fpublisher: item.v15,
                  fsummary: decodeURIComponent(item.v24) || '暂无简介信息',
                  fcommonclass: item.v17
                };
              });

              self.weeklyList = tempArr;
            }
          });
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getResommended();
              // console.log('000');
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getWeiList: function getWeiList() {
        var _this = this;

        // 获取微期刊
        var k = {
          source: '',
          keyword: '',
          classtype: '',
          page: 1,
          pagesize: 10,
          viewtype: this.isMob
        };
        _api.ebookSearch.magazineSearch(k).then(function (data) {
          _this.myWeiList = _this.weiDataHandel(data.result.mags);
          // console.log(this.myWeiList);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getWeiList();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getMyBookShelf: function getMyBookShelf() {
        var _this2 = this;

        // 获取我的书架，需要登录（uat）
        if (!this.isLogin) {
          return;
        }
        _api.bookInfoApi.getMyBookShelf(1, 10).then(function (data) {
          var mybooks = data.result.datas;
          if (!mybooks.length) {
            return;
          }
          _this2.myBooksList = _this2.bookDataHandel(mybooks);
        }).catch(function (error) {});
      },
      mergeTwoObj: function mergeTwoObj(one, two) {
        for (var i = 0, l = one.length; i < l; i++) {
          var element = one[i];
          for (var j = 0, k = two.length; j < k; j++) {
            var item = two[j];
            if (element.v1 === item.v7) {
              element.cover = item.v14;
              element.v5 = item.v9;
              break;
            }
          }
        }
      },
      weiDataHandel: function weiDataHandel(data) {
        // 微期刊返回数据二次处理，以适合simplebook的格式
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
      },
      bookDataHandel: function bookDataHandel(data) {
        // 我的图书返回数据二次处理，以适合simplebook的格式
        var tempList = [];
        data.forEach(function (item) {
          tempList.push({
            bid: item.v1,
            // fid: item.magid,
            cover: item.v8,
            title: item.v5,
            type: '',
            pace: item.v6 + '%'
          });
        });

        return tempList;
      },
      goToMyShelf: function goToMyShelf() {
        // let isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        // if ( !isLogin ) {
        //   self.commitEvent('changeshowLoginModal', true);
        //   self.commitEvent('changeTempPath', {
        //     path: '/eBook/myBookshelf'
        //   });
        //   self.utils.modalOpenEvent(true);
        //   return;
        // }
        if (!self.checkLogin('/eBook/myBookshelf')) {
          return;
        }
        self.openNewPage({
          path: '/eBook/myBookshelf'
        });
      },

      /**
       * 检查登录
       */
      checkLogin: function checkLogin(path, query) {
        // let isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        if (!self.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: path,
            query: query
          });
          self.utils.modalOpenEvent(true);
          return false;
        }
        return true;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "gtyC":
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
    global.serviceGuide = mod.exports;
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

  exports.default = {
    name: "serviceGuide",

    data: function data() {
      return {};
    },
    created: function created() {
      self = this;
    },


    components: {},

    computed: {},

    mounted: function mounted() {},


    methods: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "hJep":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("+G6C"), __webpack_require__("i51E"), __webpack_require__("Vq54")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/ebookSearch'), require('../components/modalLogin'), require('../components/eBookHeader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.ebookSearch, global.modalLogin, global.eBookHeader);
    global.eBook = mod.exports;
  }
})(this, function (module, exports, _ebookSearch, _modalLogin, _eBookHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ebookSearch2 = _interopRequireDefault(_ebookSearch);

  var _modalLogin2 = _interopRequireDefault(_modalLogin);

  var _eBookHeader2 = _interopRequireDefault(_eBookHeader);

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

  var self = null; // 定义保存 Vue `this` 对象

  // 加载组件
  // 搜索框
  // 用户登录Modal
  exports.default = {
    data: function data() {
      return {
        eachHeight: null
      };
    },


    components: {
      ebookSearch: _ebookSearch2.default,
      modalLogin: _modalLogin2.default,
      eBookHeader: _eBookHeader2.default
    },

    computed: {
      footerHeight: function footerHeight() {
        var isMobile = this.$store.state.isMobile,
            isHideFullFooter = this.$store.state.isHideFullFooter;
        if (isMobile && !isHideFullFooter) {
          return self.$store.state.footerHeight + 'px';
        }
      }
    },

    created: function created() {
      self = this; // Vue创建后将 `this` 赋值给定义的变量self
    },


    methods: {
      tabChangeHandler: function tabChangeHandler() {
        // 动态设置padding-bottom值
        self.$nextTick(function () {
          var dynamicHeight = self.$refs.sitefooter.$el.offsetHeight;
          self.eachHeight = dynamicHeight + 15;
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "hR89":
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
    global.bookClassificationList = mod.exports;
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

  exports.default = {
    name: "bookClassificationList",

    data: function data() {
      return {
        weiTitle: this.$route.query.name || '',
        theType: this.$route.query.type || '',
        isBook: this.$route.query.type === 'epub' ? true : false, // 用于判断是图书还是期刊
        bookList: [],
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
      this.$route.meta.breadcrumbName = this.weiTitle;
      this.search();
      this.pageChange(1);
    },


    methods: {
      search: function search() {
        // 初始化搜索，根据type判断是搜索图书还是期刊
        if (!this.weiTitle) {
          this.$router.push({
            path: '/eBook/bookClassification',
            replace: true
          });
        }
        if (this.theType !== 'epub' && this.theType !== 'magazine') {
          this.$router.push({
            path: '/eBook/bookClassification',
            replace: true
          });
        }
        if (this.isBook) {
          this.search = _api.ebookSearch.equbSearch;
        } else {
          this.search = _api.ebookSearch.magazineSearch;
        }
      },
      getBookList: function getBookList(index) {
        var _this = this;

        // 获取分类图书/期刊
        this.loading = true;
        var k = {
          source: '',
          keyword: '',
          clsType: this.weiTitle,
          classtype: this.weiTitle,
          page: index,
          pagesize: this.perPage,
          viewtype: this.isMob
        };
        return this.search(k).then(function (data) {
          _this.curr = index;
          _this.loading = false;
          return _promise2.default.resolve(_this.resDataHandel(data.result));
        }).catch(function (error) {
          return _promise2.default.reject(error);
        });
      },
      loadMore: function loadMore(index) {
        var _this2 = this;

        // 手机加载更多
        if (this.curr >= this.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.curr = index;
          // this.loading = true;
          this.getBookList(index).then(function (data) {
            _this2.bookList = _this2.bookList.concat(data);
          }).catch(function (error) {
            if (error === '10001') {
              var t = setTimeout(function () {
                self.loadMore(1);
                clearTimeout(t);
              }, 500);
            } else {
              _this2.loading = false;
            }
          });
        }
      },
      pageChange: function pageChange(index) {
        var _this3 = this;

        // pc翻页
        // this.loading = true;
        this.getBookList(index).then(function (data) {
          _this3.bookList = data;
          // this.loading = false;
          window.scrollTo(0, 0);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.pageChange(1);
              clearTimeout(t);
            }, 500);
          } else {
            _this3.loading = false;
          }
        });
      },
      resDataHandel: function resDataHandel(data) {
        // 返回数据二次处理，以适合simplebook的格式
        var tempList = [];
        if (this.isBook) {
          // 如果返回图书数据
          this.totalNumb = Math.ceil(data.maxrows / this.perPage);
          data.lst.forEach(function (item) {
            tempList.push({
              bid: item.fbookid,
              // fid: item.fresid,
              cover: item.fcover || 'http://e.library.sh.cn/wread2017/_cover/cx/' + item.fbookid + '.jpg',
              title: item.ftitle,
              type: '',
              pace: ''
            });
          });
          return tempList;
        } else {
          this.totalNumb = Math.ceil(data.total / this.perPage);
          data.mags.forEach(function (item) {
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
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "hfAu":
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
    global.vueWaterfallEasy = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'vue-waterfall-easy',
    props: {
      gap: {
        type: Number,
        default: 10
      },
      maxCols: {
        type: Number,
        default: 3
      },
      imgsArr: {
        type: Array,
        required: true
      },
      imgWidth: {
        type: Number,
        default: 320
      },
      timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
        type: Number,
        default: 500
      }
    },
    data: function data() {
      return {
        msg: 'this is from vue-waterfall-easy.vue',
        columnCount: NaN, // 列数，根据窗口大小初始化
        isMobile: navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i), // 初始化移动端
        beginIndex: NaN, // 第二列首张图片的index，从这一张开始重新计算图片位置

        colsHeightArr: [], // 每一列的图片总和高度为元素组成的数组
        imgBoxEls: null, // 所有的.img-box元素
        isPreloading: true, // 预加载状态中（1.以等待图片替换 2.图片全部预加载完显示）
        isPreloadingC: true,
        imgsArrC: [], // 预加载完之后再才开始
        loadedCount: 0, // 已经加载图片数量
        isFirstTIme: true, // 首次加载
        fullHeight: 0
      };
    },

    computed: {
      colWidth: function colWidth() {
        // 每一列的宽度
        return this.imgWidth + this.gap;
      },
      imgWidthC: function imgWidthC() {
        // 对于移动端重新计算图片宽度
        return this.isMobile ? window.innerWidth - 30 : this.imgWidth;
      }
    },
    methods: {
      waterfall: function waterfall() {
        // 执行瀑布布局
        if (this.isMobile) {
          return;
        }
        for (var i = this.beginIndex; i < this.imgsArr.length; i++) {
          var minHeight = Math.min.apply(null, this.colsHeightArr); // 最低高低
          var minIndex = this.colsHeightArr.indexOf(minHeight); // 最低高度的索引
          var width = this.imgBoxEls[0].offsetWidth; // 图片的宽度获取
          // 设置元素定位的位置
          this.imgBoxEls[i].style.position = 'absolute';
          this.imgBoxEls[i].style.left = minIndex * width + 'px';
          this.imgBoxEls[i].style.top = minHeight + 'px';

          // 更新colsHeightArr
          this.$set(this.colsHeightArr, minIndex, minHeight + this.imgBoxEls[i].offsetHeight);
        }
        this.beginIndex = this.imgsArr.length;
        // console.log(this.colsHeightArr);
        this.fullHeight = Math.max.apply(null, this.colsHeightArr);
        // console.log(this.fullHeight);
      },
      loadFn: function loadFn(e, oImg, i) {
        var _this = this;

        // 每张图片预加载完成执行函数
        this.loadedCount++;
        if (e.type === 'load') {
          // 使用图片原始宽度计算图片的高度
          this.$set(this.imgsArr[i], 'height', Math.round(this.imgWidthC / (oImg.width / oImg.height)));
        }
        if (this.loadedCount === this.imgsArr.length) {
          this.imgsArrC = this.imgsArr.concat([]);

          this.isPreloading = false;
          this.isFirstTIme = false;

          // 预加载完毕
          this.$nextTick(function () {
            _this.initImgBoxEls();
            _this.$emit('preloaded');
          });
        }
      },
      preload: function preload() {
        var _this2 = this;

        this.imgsArr.forEach(function (v, i) {
          if (i < _this2.loadedCount) return;

          var oImg = new Image();
          oImg.addEventListener('load', function (e) {
            _this2.loadFn(e, oImg, i);
          });
          oImg.src = v.src;
        });
      },


      // -----------------初始化化------------------------

      initColsHeightArr: function initColsHeightArr() {
        // 第一行元素的高度组成的数组-初始化
        this.colsHeightArr = []; // 列数发生变化重新初始化
        for (var i = 0; i < this.columnCount; i++) {
          if (!this.imgBoxEls[i]) {
            return;
          }
          this.imgBoxEls[i].style.position = 'static'; // 重置下position
          var height = this.imgBoxEls[i].offsetHeight;
          this.colsHeightArr.push(height);
        }
      },
      initImgBoxEls: function initImgBoxEls() {
        // 初始化所有装图片的元素集合,注意高度获取需要在图片加载完成之后，所以在window.onload 事件中初始化
        this.imgBoxEls = document.getElementsByClassName('img-box');
      },
      initColumnCount: function initColumnCount() {
        // 列数初始化

        var winWidth = window.innerWidth;
        var columnCount = parseInt(winWidth / this.colWidth);
        columnCount = columnCount === 0 ? 1 : columnCount;
        this.columnCount = this.isMobile ? 2 : columnCount > this.maxCols ? this.maxCols : columnCount;
      }
    },
    mounted: function mounted() {
      var _this3 = this;

      // ==1== 根据窗口大小初始化列数
      this.initColumnCount();
      this.beginIndex = this.columnCount; // 开始排列的元素索引

      // ==2== 根据预加载完成的图片的长宽比，计算图片的高度
      this.preload();

      this.$on('preloaded', function () {
        if (_this3.colsHeightArr.length === 0) _this3.initColsHeightArr(); // 第一次初始化
        _this3.waterfall();
      });

      window.addEventListener('resize', function () {
        var old = _this3.columnCount;
        _this3.initColumnCount();
        if (old === _this3.columnCount) return; // 列数不变直接退出
        _this3.beginIndex = _this3.columnCount; // 开始排列的元素索引

        _this3.initColsHeightArr();
        _this3.waterfall();
      });
      //console.log(this.$el.parentNode)
      //console.log(this.$el.parentNode, this.$el.parentNode.scrollTop + this.$el.parentNode.offsetHeight, this.$el.parentNode.scrollHeight)

      // this.$el.parentNode.addEventListener('scroll', () => {
      //   console.log(22222);
      //   if (this.isPreloading) return
      //   const lastImgHeight = this.imgsArr[this.imgsArr.length - 1].height
      //   console.log(this.$el.parentNode, this.$el.parentNode.scrollTop + this.$el.parentNode.offsetHeight, this.$el.parentNode.scrollHeight)

      //   if (this.$el.parentNode.scrollTop + this.$el.parentNode.offsetHeight > this.$el.parentNode.scrollHeight - lastImgHeight) {
      //     this.$emit('scrollLoadImg')

      //   }
      // })
      window.addEventListener('scroll', function () {
        // console.log(this.isPreloading)
        if (_this3.isPreloading) return;
        // console.log(document.documentElement.scrollTop + window.innerHeight);
        if (document.documentElement.scrollTop + window.innerHeight > document.body.scrollHeight - 30) {
          _this3.$emit('scrollLoadImg');
        }
      });
    },

    watch: {
      imgsArr: function imgsArr(newV, oldV) {
        if (newV.length === oldV.length) return;
        this.isPreloading = true; // 预加载新的图片资源
        this.preload();

        // setTimeout(()=>{ // 模拟图片预加载时间为1s

        // this.preload()
        // },1000)
      },
      isPreloading: function isPreloading(v) {
        var _this4 = this;

        if (v) {
          setTimeout(function () {
            if (!_this4.isPreloading) return; // 500毫秒内预加载完图片则不显示加载动画
            _this4.isPreloadingC = true;
          }, this.timeOut);
        } else {
          this.isPreloadingC = false;
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "ho4/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".swiper-pagination-bullets{bottom:0;width:100%;background:rgba(0,0,0,.6)}.swiper-pagination-bullets .swiper-pagination-bullet{width:16px;height:16px;margin:8px 5px 5px;background:#fff}", ""]);

// exports


/***/ }),

/***/ "hsI3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eUMD");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("d3179be0", content, true, {});

/***/ }),

/***/ "i51E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue__ = __webpack_require__("8goA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2580a5a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modalLogin_vue__ = __webpack_require__("rZOh");
function injectStyle (ssrContext) {
  __webpack_require__("jn5Z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2580a5a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalLogin_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2580a5a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modalLogin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "iHta":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ho4/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("13514a06", content, true, {});

/***/ }),

/***/ "iIOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue__ = __webpack_require__("cHTz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bar_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "j7QC":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fEFM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9be3b852", content, true, {});

/***/ }),

/***/ "jCnD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5sp4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9e9c0edc", content, true, {});

/***/ }),

/***/ "jF92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue__ = __webpack_require__("d0vv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ef20904_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityItem_vue__ = __webpack_require__("kiYE");
function injectStyle (ssrContext) {
  __webpack_require__("HKo4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ef20904"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ef20904_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jn5Z":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("FCHf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4b8a6dc2", content, true, {});

/***/ }),

/***/ "kP+G":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".easy-scrollbar__wrap,.easy-scrollbar__wrap--hidden-default{overflow:scroll}.easy-scrollbar{overflow:hidden;position:relative}.esay-scrollbar__bar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:4px;opacity:0;transition:opacity .12s ease-out}.esay-scrollbar__bar.is-horizontal{height:6px;left:0;right:0;background-color:#eee}.esay-scrollbar__bar.is-vertical{width:6px;top:0;bottom:0;background-color:#eee}.easy-scrollbar__thumb{position:relative;display:block;width:6px;height:6px;cursor:pointer;border-radius:inherit;background-color:#959595;-moz-transition:opacity .34s ease-out;-webkit-transition:opacity .34s ease-out;-o-transition:opacity .34s ease-out}.easy-scrollbar__thumb,.esay-scrollbar__bar{opacity:1;transition:opacity .34s ease-out}", ""]);

// exports


/***/ }),

/***/ "kP4P":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left{float:left!important}.pull-right{float:right!important}.show{display:block!important}.hidden{display:none!important;visibility:hidden!important}.invisible{visibility:hidden}.loading:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis 2s infinite;content:\"\\2026\"}@keyframes ellipsis{0%{width:2px}to{width:15px}}a{text-decoration:none}ol,ul{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button,input{-webkit-appearance:none}button{border:none;background:none}input,input:focus{outline:none}.none-data{position:relative}.none-data:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend{border:1px solid #5390d7;color:#5390d7}.return{border:1px solid #5dc9a0;color:#5dc9a0}.damage{border:1px solid #f6a623;color:#f6a623}.general-lend{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due{color:#42a8dd}.not-overdue{color:#5dc9a8}.overdue{color:#f97f50}.overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.padMargin,.unityPadding{padding-left:15px}.padMargin{padding-right:15px}}.white-bg{background-color:#fff}.vertical-top{vertical-align:top}.vertical-middle{vertical-align:middle}.vertical-center{font-size:0;text-align:left}.vertical-center:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a{color:#fff}.swiper-button-next,.swiper-button-prev{background-image:none}.swiper-button-next .iconfont,.swiper-button-prev .iconfont{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont,.swiper-button-prev .iconfont{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont,.swiper-button-prev .iconfont{font-size:11px}}.list-container>li{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li{padding-bottom:31px}.list-container>li+li{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li{padding-bottom:15px}.list-container>li+li{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container{margin-right:344px;padding-right:40px}.has-right-column .calendar{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container{margin-right:280px;padding-right:20px}.has-right-column .list-container>li{padding-bottom:16px}.has-right-column .calendar{width:280px;height:254px}}.view-more{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data{width:auto;border:none}.view-more.no-more-data .iconfont{display:none}.view-more .iconfont{font-size:10px}}.about-content{color:#666}.about-content>p{margin-top:0;margin-bottom:0}.about-content>p+p{margin-top:25px}@media only screen and (min-width:768px){.about-content{line-height:29px}}@media only screen and (max-width:767px){.about-content{padding-right:10px;padding-left:10px}.about-content>p{font-size:13px;line-height:25px}.about-content>p+p{margin-top:12px}}.component-menuInner.last1>a:nth-last-child(-n+1),.component-menuInner.last2>a:nth-last-child(-n+2),.component-menuInner.last3>a:nth-last-child(-n+3),.component-menuInner.last4>a:nth-last-child(-n+4),.component-menuInner.last5>a:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1{margin-top:0}.component-menuInner.menu1 .iconfont{color:#f7b366}.component-menuInner.menu2 .iconfont{color:#63bfce}.component-menuInner.menu3 .iconfont{color:#5cc8a8}.component-menuInner a{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont{color:#4daada}.component-menuInner a p{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner{margin-top:20px}.component-menuInner a{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a:hover{opacity:.8}.component-menuInner a .iconfont{font-size:34px}.component-menuInner a p{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner{margin-top:10px}.component-menuInner a{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont{font-size:19px}.component-menuInner a p{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner{padding-right:15px;padding-left:15px}}.footer{position:absolute;bottom:0;width:100%}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction{position:relative}.eventAction:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite}.component-book-info{display:block;color:#959ca5}.component-book-info .book-cover{box-shadow:0 0 35px rgba(0,0,0,.13)}.component-book-info .book-cover>img{display:block;width:auto;height:100%;margin:0 auto}.component-book-info .book-about{position:relative}.component-book-info .book-name{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.component-book-info .book-intro{position:absolute;bottom:-2px;margin-top:0;margin-bottom:0}.component-book-info .publish-year{position:relative;padding-left:16px}.component-book-info .publish-year:before{content:\"\";position:absolute;top:50%;left:8px;width:1px;height:12px;margin-top:-6px;background-color:#959ca5}@media only screen and (min-width:768px){.component-book-info{height:200px;margin-bottom:40px;cursor:pointer}.component-book-info .book-cover{float:left;width:161px;height:100%}.component-book-info .book-cover>img{display:block;width:100%;height:100%}.component-book-info .book-about{height:100%;margin-left:191px}.component-book-info .book-name{position:relative;top:-3px;margin-top:0;font-size:18px}.component-book-info .book-author-publish{margin-top:-6px}.component-book-info .book-author-publish>p{margin-top:6px;margin-bottom:0;white-space:nowrap}.component-book-info .book-intro{max-width:100%;max-height:60px;height:60px;overflow:hidden}.component-book-info .iconfont{margin-right:9px}.component-book-info .icon-chubanshe{font-size:13px}}@media only screen and (max-width:767px){.component-book-info{margin-bottom:18px}.component-book-info .book-cover{display:block;width:97px;height:120.5px}.component-book-info .book-name{margin-top:12px;margin-bottom:6px;font-size:13px}.component-book-info .book-type{font-size:11px;color:#959ca5}}", ""]);

// exports


/***/ }),

/***/ "kQfq":
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
    global.noneData = mod.exports;
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

  exports.default = {
    name: "noneDataTip",

    data: function data() {
      return {};
    },


    props: {
      msg: {
        type: String,
        default: '暂无数据'
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

/***/ "kRQN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-7943244c]{float:left!important}.pull-right[data-v-7943244c]{float:right!important}.show[data-v-7943244c]{display:block!important}.hidden[data-v-7943244c]{display:none!important;visibility:hidden!important}.invisible[data-v-7943244c]{visibility:hidden}.loading[data-v-7943244c]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-7943244c 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-7943244c{0%{width:2px}to{width:15px}}a[data-v-7943244c]{text-decoration:none}ol[data-v-7943244c],ul[data-v-7943244c]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-7943244c],input[data-v-7943244c]{-webkit-appearance:none}button[data-v-7943244c]{border:none;background:none}input[data-v-7943244c],input[data-v-7943244c]:focus{outline:none}.none-data[data-v-7943244c]{position:relative}.none-data[data-v-7943244c]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-7943244c]{border:1px solid #5390d7;color:#5390d7}.return[data-v-7943244c]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-7943244c]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-7943244c]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-7943244c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-7943244c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-7943244c]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-7943244c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-7943244c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-7943244c]{color:#42a8dd}.not-overdue[data-v-7943244c]{color:#5dc9a8}.overdue[data-v-7943244c]{color:#f97f50}.overlay[data-v-7943244c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-7943244c]{padding-left:15px}.padMargin[data-v-7943244c]{padding-right:15px;padding-left:15px}}.white-bg[data-v-7943244c]{background-color:#fff}.vertical-top[data-v-7943244c]{vertical-align:top}.vertical-middle[data-v-7943244c]{vertical-align:middle}.vertical-center[data-v-7943244c]{font-size:0;text-align:left}.vertical-center[data-v-7943244c]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-7943244c]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-7943244c]{color:#fff}.swiper-button-next[data-v-7943244c],.swiper-button-prev[data-v-7943244c]{background-image:none}.swiper-button-next .iconfont[data-v-7943244c],.swiper-button-prev .iconfont[data-v-7943244c]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-7943244c],.swiper-button-prev .iconfont[data-v-7943244c]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-7943244c],.swiper-button-prev .iconfont[data-v-7943244c]{font-size:11px}}.list-container>li[data-v-7943244c]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-7943244c]{padding-bottom:31px}.list-container>li+li[data-v-7943244c]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-7943244c]{padding-bottom:15px}.list-container>li+li[data-v-7943244c]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-7943244c]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-7943244c]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-7943244c]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-7943244c]{padding-bottom:16px}.has-right-column .calendar[data-v-7943244c]{width:280px;height:254px}}.view-more[data-v-7943244c]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-7943244c]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-7943244c]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-7943244c]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-7943244c]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-7943244c]{display:none}.view-more .iconfont[data-v-7943244c]{font-size:10px}}.about-content[data-v-7943244c]{color:#666}.about-content>p[data-v-7943244c]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-7943244c]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-7943244c]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-7943244c]{padding-right:10px;padding-left:10px}.about-content>p[data-v-7943244c]{font-size:13px;line-height:25px}.about-content>p+p[data-v-7943244c]{margin-top:12px}}.component-menuInner.last1>a[data-v-7943244c]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-7943244c]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-7943244c]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-7943244c]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-7943244c]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-7943244c]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-7943244c]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-7943244c]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-7943244c]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-7943244c]{color:#5cc8a8}.component-menuInner a[data-v-7943244c]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-7943244c]{color:#4daada}.component-menuInner a p[data-v-7943244c]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-7943244c]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-7943244c]{margin-top:20px}.component-menuInner a[data-v-7943244c]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-7943244c]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-7943244c]{font-size:34px}.component-menuInner a p[data-v-7943244c]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-7943244c]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-7943244c]{margin-top:10px}.component-menuInner a[data-v-7943244c]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-7943244c]{font-size:19px}.component-menuInner a p[data-v-7943244c]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-7943244c]{padding-right:15px;padding-left:15px}}.footer[data-v-7943244c]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-7943244c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-7943244c]{position:relative}.eventAction[data-v-7943244c]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-7943244c .75s 0s linear infinite;animation:rotate-data-v-7943244c .75s 0s linear infinite}.info-noto[data-v-7943244c]{width:100%}.info-noto .info-content[data-v-7943244c]{position:relative;height:48px;margin-right:48px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-decoration:none}@media only screen and (max-width:767px){.info-noto .info-content[data-v-7943244c]{height:36px}}.info-noto .info-note-head[data-v-7943244c]{height:48px;line-height:48px;background:#d1d1d1;overflow:hidden}@media only screen and (max-width:767px){.info-noto .info-note-head[data-v-7943244c]{height:36px;line-height:36px}}.info-noto .info-note-head .container[data-v-7943244c]{position:relative}.info-noto .info-note-footer[data-v-7943244c]{width:100%;position:fixed;bottom:0;height:48px;line-height:48px;background:#102442;z-index:10;overflow:hidden}@media only screen and (max-width:767px){.info-noto .info-note-footer[data-v-7943244c]{height:36px;line-height:36px}}.info-noto .info-note-footer .container[data-v-7943244c]{position:relative}.info-noto .info-note-footer .info-content[data-v-7943244c]{color:#fff}.info-noto .info-close[data-v-7943244c]{position:absolute;right:0;top:0;height:32px;line-height:32px;text-align:center;width:32px;margin:8px;cursor:pointer}@media only screen and (max-width:767px){.info-noto .info-close[data-v-7943244c]{height:24px;line-height:24px;width:24px;margin:6px}}.info-noto .info-foot-close .iconfont[data-v-7943244c]{color:#fff}.info-noto .info-container[data-v-7943244c]{overflow:hidden;height:48px}@media only screen and (max-width:767px){.info-noto .info-container[data-v-7943244c]{height:36px}}", ""]);

// exports


/***/ }),

/***/ "kTMG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-2ef20904]{float:left!important}.pull-right[data-v-2ef20904]{float:right!important}.show[data-v-2ef20904]{display:block!important}.hidden[data-v-2ef20904]{display:none!important;visibility:hidden!important}.invisible[data-v-2ef20904]{visibility:hidden}.loading[data-v-2ef20904]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-2ef20904 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-2ef20904{0%{width:2px}to{width:15px}}a[data-v-2ef20904]{text-decoration:none}ol[data-v-2ef20904],ul[data-v-2ef20904]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-2ef20904],input[data-v-2ef20904]{-webkit-appearance:none}button[data-v-2ef20904]{border:none;background:none}input[data-v-2ef20904],input[data-v-2ef20904]:focus{outline:none}.none-data[data-v-2ef20904]{position:relative}.none-data[data-v-2ef20904]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-2ef20904]{border:1px solid #5390d7;color:#5390d7}.return[data-v-2ef20904]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-2ef20904]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-2ef20904]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-2ef20904]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-2ef20904]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-2ef20904]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-2ef20904]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-2ef20904]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-2ef20904]{color:#42a8dd}.not-overdue[data-v-2ef20904]{color:#5dc9a8}.overdue[data-v-2ef20904]{color:#f97f50}.overlay[data-v-2ef20904]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-2ef20904]{padding-left:15px}.padMargin[data-v-2ef20904]{padding-right:15px;padding-left:15px}}.white-bg[data-v-2ef20904]{background-color:#fff}.vertical-top[data-v-2ef20904]{vertical-align:top}.vertical-middle[data-v-2ef20904]{vertical-align:middle}.vertical-center[data-v-2ef20904]{font-size:0;text-align:left}.vertical-center[data-v-2ef20904]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-2ef20904]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-2ef20904]{color:#fff}.swiper-button-next[data-v-2ef20904],.swiper-button-prev[data-v-2ef20904]{background-image:none}.swiper-button-next .iconfont[data-v-2ef20904],.swiper-button-prev .iconfont[data-v-2ef20904]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-2ef20904],.swiper-button-prev .iconfont[data-v-2ef20904]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-2ef20904],.swiper-button-prev .iconfont[data-v-2ef20904]{font-size:11px}}.list-container>li[data-v-2ef20904]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-2ef20904]{padding-bottom:31px}.list-container>li+li[data-v-2ef20904]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-2ef20904]{padding-bottom:15px}.list-container>li+li[data-v-2ef20904]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-2ef20904]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-2ef20904]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-2ef20904]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-2ef20904]{padding-bottom:16px}.has-right-column .calendar[data-v-2ef20904]{width:280px;height:254px}}.view-more[data-v-2ef20904]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-2ef20904]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-2ef20904]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-2ef20904]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-2ef20904]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-2ef20904]{display:none}.view-more .iconfont[data-v-2ef20904]{font-size:10px}}.about-content[data-v-2ef20904]{color:#666}.about-content>p[data-v-2ef20904]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-2ef20904]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-2ef20904]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-2ef20904]{padding-right:10px;padding-left:10px}.about-content>p[data-v-2ef20904]{font-size:13px;line-height:25px}.about-content>p+p[data-v-2ef20904]{margin-top:12px}}.component-menuInner.last1>a[data-v-2ef20904]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-2ef20904]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-2ef20904]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-2ef20904]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-2ef20904]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-2ef20904]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-2ef20904]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-2ef20904]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-2ef20904]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-2ef20904]{color:#5cc8a8}.component-menuInner a[data-v-2ef20904]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-2ef20904]{color:#4daada}.component-menuInner a p[data-v-2ef20904]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-2ef20904]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-2ef20904]{margin-top:20px}.component-menuInner a[data-v-2ef20904]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-2ef20904]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-2ef20904]{font-size:34px}.component-menuInner a p[data-v-2ef20904]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-2ef20904]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-2ef20904]{margin-top:10px}.component-menuInner a[data-v-2ef20904]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-2ef20904]{font-size:19px}.component-menuInner a p[data-v-2ef20904]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-2ef20904]{padding-right:15px;padding-left:15px}}.footer[data-v-2ef20904]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-2ef20904{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-2ef20904]{position:relative}.eventAction[data-v-2ef20904]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-2ef20904 .75s 0s linear infinite;animation:rotate-data-v-2ef20904 .75s 0s linear infinite}.activity-lists[data-v-2ef20904]{display:block;position:relative;color:#959ca5}.activity-lists>.activity-info[data-v-2ef20904]{height:100%}.activity-lists>.activity-photo[data-v-2ef20904]{float:left}.activity-lists>.activity-photo>img[data-v-2ef20904]{display:block;width:100%;height:100%;object-fit:cover}.activity-lists .activity-title[data-v-2ef20904]{margin-top:-3px;margin-bottom:0;color:#333;font-weight:400}.activity-lists .activity-title em[data-v-2ef20904]{font-style:normal}.activity-lists .activity-type[data-v-2ef20904]{float:right;text-align:center;border-width:1px;border-style:solid;border-radius:3px}.activity-lists .activity-content[data-v-2ef20904]{position:absolute;bottom:-4px}.activity-lists .type-exhibition[data-v-2ef20904]{color:#4bc3ce;border-color:#4bc3ce}.activity-lists .type-train[data-v-2ef20904]{color:#f6a623;border-color:#f6a623}.activity-lists .type-lecture[data-v-2ef20904]{color:#5390d7;border-color:#5390d7}@media only screen and (min-width:768px){.activity-lists[data-v-2ef20904]{height:119px}.activity-lists>.activity-photo[data-v-2ef20904]{width:192px;height:119px;overflow:hidden}.activity-lists .activity-info[data-v-2ef20904]{display:inline-block;position:relative;width:424px;padding-left:30px;font-size:14px}.activity-lists .activity-title[data-v-2ef20904]{display:inline-block;max-width:394px;max-height:46px;font-size:18px;overflow:hidden}.activity-lists .activity-type[data-v-2ef20904]{width:34px;height:19px;margin-top:3px;margin-left:10px;font-size:12px}.activity-lists .activity-content>.content-details[data-v-2ef20904]{margin-top:7px}}@media only screen and (max-width:767px){.activity-lists>.activity-photo[data-v-2ef20904]{width:132px;height:82px;overflow:hidden;border-radius:3px}.activity-lists .activity-info[data-v-2ef20904]{margin-left:142px;font-size:12px}.activity-lists .activity-title[data-v-2ef20904]{width:100%;font-size:16px}.activity-lists .activity-title em[data-v-2ef20904]{display:block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.activity-lists .activity-type[data-v-2ef20904]{width:32px;height:19px;margin-top:-1px;margin-left:5px;font-size:12px}.activity-lists .content-details[data-v-2ef20904]{margin-top:2px}.activity-lists .activity-timer[data-v-2ef20904]{padding-right:65px}}@media only screen and (min-width:768px) and (max-width:1023px){.activity-lists[data-v-2ef20904]{height:94px}.activity-lists>.activity-photo[data-v-2ef20904]{width:150px;height:94px}.activity-lists .activity-info[data-v-2ef20904]{display:block;padding-left:15px;margin-left:150px;width:auto}.activity-lists .activity-title[data-v-2ef20904]{max-height:42px;font-size:15px;overflow:hidden}.activity-lists .activity-content[data-v-2ef20904]{font-size:13px}.activity-lists .activity-content>.content-details[data-v-2ef20904]{margin-top:0}}.focus[data-v-2ef20904]:focus,.focus[data-v-2ef20904]:hover{background-color:#4573ab;color:#fff}.focus:focus>.add-focus[data-v-2ef20904]:after,.focus:focus>.add-focus[data-v-2ef20904]:before,.focus:hover>.add-focus[data-v-2ef20904]:after,.focus:hover>.add-focus[data-v-2ef20904]:before{background-color:#fff}.focus-btn[data-v-2ef20904]{position:absolute;right:0;bottom:0;color:#4573ab;font-size:14px;border:1px solid #4573ab;background:none;border-radius:3px}@media only screen and (min-width:768px){.focus-btn[data-v-2ef20904]{padding:4px 12px}.focus-btn>.iconfont[data-v-2ef20904]{font-size:7px}.focus-btn .add-focus[data-v-2ef20904]{vertical-align:2px}}@media only screen and (max-width:767px){.focus-btn[data-v-2ef20904]{height:26px;padding:3px 6px 4px 5px;font-size:12px;line-height:19px}.focus-btn .add-focus[data-v-2ef20904]{vertical-align:1px}}.focus-btn.focused[data-v-2ef20904]{color:#64c1cf;border-color:#64c1cf}.focus-btn.focused>.icon-correct[data-v-2ef20904]{display:inline-block;font-size:7px;transform:scale(.7)}.focus-btn.focused>.icon-correct[data-v-2ef20904]:before{content:\"\\E64D\"}.focus-btn.focused[data-v-2ef20904]:focus,.focus-btn.focused[data-v-2ef20904]:hover{background-color:#64c1cf;color:#fff}.focus>.add-focus[data-v-2ef20904]{position:relative;display:inline-block;width:7px;height:7px;margin-right:9px}.focus>.add-focus[data-v-2ef20904]:after,.focus>.add-focus[data-v-2ef20904]:before{content:\"\";position:absolute;background-color:#4573ab}.focus>.add-focus[data-v-2ef20904]:before{width:7px;height:1px;top:50%;left:50%;margin-top:-.5px;margin-left:-3px}.focus>.add-focus[data-v-2ef20904]:after{width:1px;height:7px}", ""]);

// exports


/***/ }),

/***/ "kYPN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info-noto"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.headNotice),expression:"headNotice"}],staticClass:"info-note-head"},[_c('div',{staticClass:"container info-container"},[_c('div',{staticClass:"info-content",domProps:{"innerHTML":_vm._s(_vm.headNotice)}}),_vm._v(" "),_c('span',{staticClass:"info-close info-head-close",attrs:{"title":"关闭"},on:{"click":_vm.closeHeadInfo}},[_c('i',{staticClass:"iconfont icon-close2"})])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.footNotice),expression:"footNotice"}],staticClass:"info-note-footer"},[_c('div',{staticClass:"container info-container"},[_c('div',{staticClass:"info-content",domProps:{"innerHTML":_vm._s(_vm.footNotice)}}),_vm._v(" "),_c('span',{staticClass:"info-close info-foot-close",attrs:{"title":"关闭"},on:{"click":_vm.closeFootInfo}},[_c('i',{staticClass:"iconfont icon-close2"})])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "kf7c":
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
    global.myLibrary = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

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
  //
  //
  //

  var self = null; // 自定义变量存储实例this

  exports.default = {
    name: "myLibrary",

    data: function data() {
      return {
        isNextPage: false
      };
    },
    created: function created() {
      self = this;
    },


    computed: {
      eachColor: function eachColor() {
        return this.isNextPage ? '#666' : '#fff';
      }
    },

    destroyed: function destroyed() {
      self.commitEvent('changeIsHideFullFooter', false);
    },
    mounted: function mounted() {
      self.commitEvent('changeIsHideFullFooter', true);
    },


    methods: {}
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "kiYE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"activity-lists clearfix",attrs:{"href":"javascript:;"}},[_c('span',{staticClass:"activity-photo"},[_c('img',{attrs:{"src":_vm.activityObj.cover,"alt":_vm.activityObj.title}})]),_vm._v(" "),_c('div',{staticClass:"activity-info"},[_c('h3',{staticClass:"activity-title"},[_c('span',{staticClass:"activity-type",class:_vm.setDiffType(_vm.activityObj.type)},[_vm._v("\n        "+_vm._s(_vm.activityObj.type)+"\n      ")]),_vm._v(" "),_c('em',[_vm._v(_vm._s(_vm.activityObj.title))])]),_vm._v(" "),_c('div',{staticClass:"activity-content"},[(_vm.activityObj.organizers)?_c('div',{staticClass:"content-details activity-sponsor"},[_vm._v(_vm._s(_vm.activityObj.organizers))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content-details activity-location"},[_vm._v(_vm._s(_vm.activityObj.location))]),_vm._v(" "),_c('div',{staticClass:"content-details activity-timer"},[_vm._v(_vm._s(_vm.activityObj.time))])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.activityObj.isFocus),expression:"!activityObj.isFocus"}],staticClass:"focus-btn focus",on:{"click":function($event){$event.preventDefault();_vm.focusOn(_vm.activityObj.id)}}},[_c('i',{staticClass:"add-focus"}),_vm._v("关注")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.activityObj.isFocus),expression:"activityObj.isFocus"}],staticClass:"focus-btn focused",on:{"click":function($event){$event.preventDefault();_vm.focusOff(_vm.activityObj.id)}}},[_c('i',{staticClass:"iconfont icon-correct"}),_vm._v("已关注")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("pFYg"), __webpack_require__("woOf"), __webpack_require__("9IHT"), __webpack_require__("1JPr"), __webpack_require__("spLH"), __webpack_require__("R8Nf"), __webpack_require__("mzkE"), __webpack_require__("XpfL"), __webpack_require__("f7Mm"), __webpack_require__("KgXo"), __webpack_require__("BlK1"), __webpack_require__("oAV5")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/typeof'), require('babel-runtime/core-js/object/assign'), require('./components/vue-event-calendar.vue'), require('./components/breadcrumb.vue'), require('./components/pagination.vue'), require('./components/columnTitle.vue'), require('./components/footer.vue'), require('./components/miniFooter.vue'), require('./components/noneData.vue'), require('./components/loading.vue'), require('./utils/ls'), require('./utils/utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._typeof, global.assign, global.vueEventCalendar, global.breadcrumb, global.pagination, global.columnTitle, global.footer, global.miniFooter, global.noneData, global.loading, global.ls, global.utils);
    global.index = mod.exports;
  }
})(this, function (module, exports, _typeof2, _assign, _vueEventCalendar, _breadcrumb, _pagination, _columnTitle, _footer, _miniFooter, _noneData, _loading, _ls, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _assign2 = _interopRequireDefault(_assign);

  var _vueEventCalendar2 = _interopRequireDefault(_vueEventCalendar);

  var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

  var _pagination2 = _interopRequireDefault(_pagination);

  var _columnTitle2 = _interopRequireDefault(_columnTitle);

  var _footer2 = _interopRequireDefault(_footer);

  var _miniFooter2 = _interopRequireDefault(_miniFooter);

  var _noneData2 = _interopRequireDefault(_noneData);

  var _loading2 = _interopRequireDefault(_loading);

  var _ls2 = _interopRequireDefault(_ls);

  var _utils2 = _interopRequireDefault(_utils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 使用localStorage
  function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var isVueNext = Vue.version.split('.')[0] === '2';
    var inBrowser = typeof window !== 'undefined';
    var dateObj = new Date();
    var DEFAULT_OPTION = {
      locale: 'zh', // en
      color: ' #f29543',
      className: 'selected-day',
      weekStartOn: 0 // 0 mean sunday
    };
    var Calendar = {
      $vm: null,
      bindEventBus: function bindEventBus(vm) {
        this.$vm = vm;
      },
      toDate: function toDate(dateString) {
        if (dateString === 'all') {
          this.$vm.CALENDAR_EVENTS_DATA.params = {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          };
        } else {
          var dateArr = dateString.split('/');
          dateArr = dateArr.map(function (item) {
            return parseInt(item, 10);
          });
          this.$vm.CALENDAR_EVENTS_DATA.params = {
            curYear: dateArr[0],
            curMonth: dateArr[1] - 1,
            curDate: dateArr[2],
            curEventsDate: dateString
          };
        }
      },
      nextMonth: function nextMonth() {
        if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth < 11) {
          this.$vm.CALENDAR_EVENTS_DATA.params.curMonth++;
        } else {
          this.$vm.CALENDAR_EVENTS_DATA.params.curYear++;
          this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 0;
        }
      },
      preMonth: function preMonth() {
        if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth > 0) {
          this.$vm.CALENDAR_EVENTS_DATA.params.curMonth--;
        } else {
          this.$vm.CALENDAR_EVENTS_DATA.params.curYear--;
          this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 11;
        }
      },
      chouseMonth: function chouseMonth(monthIndex) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = monthIndex;
      },
      resetCurrMonth: function resetCurrMonth() {
        var currentYear = +_utils2.default.currDates().y,
            currentMonth = +_utils2.default.currDates().m - 1;
        if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth === currentMonth && this.$vm.CALENDAR_EVENTS_DATA.params.curYear === currentYear) {
          // 如果年月不变
          return false;
        }
        if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth != currentMonth) {
          this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = currentMonth;
        }

        if (this.$vm.CALENDAR_EVENTS_DATA.params.curYear != currentYear) {
          this.$vm.CALENDAR_EVENTS_DATA.params.curYear = currentYear;
        }
      }
    };

    var calendarOptions = (0, _assign2.default)(DEFAULT_OPTION, options);

    // 事件中心
    var VueCalendarBarEventBus = new Vue({
      data: {
        CALENDAR_EVENTS_DATA: {
          options: calendarOptions,
          params: {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          }
        }
      }
    });

    if (inBrowser) {
      window.VueCalendarBarEventBus = VueCalendarBarEventBus;
      Calendar.bindEventBus(VueCalendarBarEventBus);
    }

    /////////////////////////////////////////////////////////
    // 注册日历组件
    Vue.component('vue-event-calendar', _vueEventCalendar2.default);

    // 注册面包屑组件
    Vue.component('bread-crumb', _breadcrumb2.default);

    // 注册分页组件
    Vue.component('pagination', _pagination2.default);

    // 注册通用标题组件
    Vue.component('column-title', _columnTitle2.default);

    // 注册页脚
    Vue.component('site-footer', _footer2.default);

    Vue.component('mini-footer', _miniFooter2.default);

    Vue.component('none-data', _noneData2.default);

    Vue.component('loading', _loading2.default);
    ////////////////////////////////////////////////////////

    Vue.prototype.$EventCalendar = Calendar;

    // 全局公用方法 - 打开新路由
    Vue.prototype.openNewPage = function (target) {
      this.$router.push({
        path: target.path,
        query: target.query
      });
    };

    // 注册全局 vuex commit 事件
    Vue.prototype.commitEvent = function (eventName, value) {
      this.$store.commit(eventName, value);
    };

    // 全局方法转换 借阅类型 - 普通外借 | 参考外借
    Vue.prototype.revertType = function (type) {
      var typeInfo = {};
      switch (type) {
        case 'pj':
          typeInfo = {
            class: 'general-lend',
            cn: '普通外借'
          };
          break;
        case 'cj':
          typeInfo = {
            class: 'reference-lend',
            cn: '参考外借'
          };
          break;
        default:
          break;
      }

      return typeInfo;
    };

    // 注册全局 `localStorage` 方法
    Vue.prototype.ls = _ls2.default;

    // 注册全局工具方法
    Vue.prototype.utils = _utils2.default;
  }

  exports.default = install;


  if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
    module.exports.install = install;
  }

  //百度统计
  // var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?5baf77ff3c256db2d753d59a23540a6b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  //友盟统计
  // var _czc = _czc || [];
  var cnzz_protocol = "https:" == document.location.protocol ? " https://" : " http://";document.write(unescape("%3Cspan style='display: none;' id='cnzz_stat_icon_1273730526'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273730526' type='text/javascript'%3E%3C/script%3E"));
  module.exports = exports['default'];
});

/***/ }),

/***/ "loPB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue__ = __webpack_require__("JcaI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77bb57df_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calPanel_vue__ = __webpack_require__("+YqJ");
function injectStyle (ssrContext) {
  __webpack_require__("rbT6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77bb57df"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calPanel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77bb57df_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ly6s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('transition',[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ma1k":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ebbn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("68237a6e", content, true, {});

/***/ }),

/***/ "md2Q":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-3c872565]{float:left!important}.pull-right[data-v-3c872565]{float:right!important}.show[data-v-3c872565]{display:block!important}.hidden[data-v-3c872565]{display:none!important;visibility:hidden!important}.invisible[data-v-3c872565]{visibility:hidden}.loading[data-v-3c872565]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-3c872565 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-3c872565{0%{width:2px}to{width:15px}}a[data-v-3c872565]{text-decoration:none}ol[data-v-3c872565],ul[data-v-3c872565]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-3c872565],input[data-v-3c872565]{-webkit-appearance:none}button[data-v-3c872565]{border:none;background:none}input[data-v-3c872565],input[data-v-3c872565]:focus{outline:none}.none-data[data-v-3c872565]{position:relative}.none-data[data-v-3c872565]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-3c872565]{border:1px solid #5390d7;color:#5390d7}.return[data-v-3c872565]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-3c872565]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-3c872565]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-3c872565]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-3c872565]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-3c872565]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-3c872565]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-3c872565]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-3c872565]{color:#42a8dd}.not-overdue[data-v-3c872565]{color:#5dc9a8}.overdue[data-v-3c872565]{color:#f97f50}.overlay[data-v-3c872565]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-3c872565]{padding-left:15px}.padMargin[data-v-3c872565]{padding-right:15px;padding-left:15px}}.white-bg[data-v-3c872565]{background-color:#fff}.vertical-top[data-v-3c872565]{vertical-align:top}.vertical-middle[data-v-3c872565]{vertical-align:middle}.vertical-center[data-v-3c872565]{font-size:0;text-align:left}.vertical-center[data-v-3c872565]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-3c872565]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-3c872565]{color:#fff}.swiper-button-next[data-v-3c872565],.swiper-button-prev[data-v-3c872565]{background-image:none}.swiper-button-next .iconfont[data-v-3c872565],.swiper-button-prev .iconfont[data-v-3c872565]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-3c872565],.swiper-button-prev .iconfont[data-v-3c872565]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-3c872565],.swiper-button-prev .iconfont[data-v-3c872565]{font-size:11px}}.list-container>li[data-v-3c872565]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-3c872565]{padding-bottom:31px}.list-container>li+li[data-v-3c872565]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-3c872565]{padding-bottom:15px}.list-container>li+li[data-v-3c872565]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-3c872565]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-3c872565]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-3c872565]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-3c872565]{padding-bottom:16px}.has-right-column .calendar[data-v-3c872565]{width:280px;height:254px}}.view-more[data-v-3c872565]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-3c872565]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-3c872565]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-3c872565]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-3c872565]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-3c872565]{display:none}.view-more .iconfont[data-v-3c872565]{font-size:10px}}.about-content[data-v-3c872565]{color:#666}.about-content>p[data-v-3c872565]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-3c872565]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-3c872565]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-3c872565]{padding-right:10px;padding-left:10px}.about-content>p[data-v-3c872565]{font-size:13px;line-height:25px}.about-content>p+p[data-v-3c872565]{margin-top:12px}}.component-menuInner.last1>a[data-v-3c872565]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-3c872565]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-3c872565]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-3c872565]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-3c872565]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-3c872565]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-3c872565]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-3c872565]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-3c872565]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-3c872565]{color:#5cc8a8}.component-menuInner a[data-v-3c872565]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-3c872565]{color:#4daada}.component-menuInner a p[data-v-3c872565]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-3c872565]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-3c872565]{margin-top:20px}.component-menuInner a[data-v-3c872565]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-3c872565]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-3c872565]{font-size:34px}.component-menuInner a p[data-v-3c872565]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-3c872565]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-3c872565]{margin-top:10px}.component-menuInner a[data-v-3c872565]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-3c872565]{font-size:19px}.component-menuInner a p[data-v-3c872565]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-3c872565]{padding-right:15px;padding-left:15px}}.footer[data-v-3c872565]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-3c872565{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-3c872565]{position:relative}.eventAction[data-v-3c872565]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-3c872565 .75s 0s linear infinite;animation:rotate-data-v-3c872565 .75s 0s linear infinite}.component-homePage[data-v-3c872565]{position:relative;min-height:100%}@media only screen and (min-width:768px){.top-swiper-news[data-v-3c872565]{height:415px;margin-top:20px}.top-swiper-news>.news-aside[data-v-3c872565],.top-swiper-news>.news-main[data-v-3c872565]{height:100%}}@media only screen and (min-width:768px) and (max-width:1024px){.top-swiper-news[data-v-3c872565]{height:306px}}.index-swiper[data-v-3c872565]{margin-right:-15px;margin-left:-15px;height:100%;overflow:hidden}.index-swiper img[data-v-3c872565]{object-fit:cover;height:100%;width:100%}.index-swiper .swiper-news-title[data-v-3c872565]{color:#fff;font-size:24px;font-weight:400;position:absolute;left:30px;top:50%}.index-swiper .swiper-container[data-v-3c872565]{height:100%}@media only screen and (max-width:767px){.index-swiper[data-v-3c872565]{height:230px}.index-swiper .swiper-news-title[data-v-3c872565]{top:40%}}.index-swiper .swiper-button-next[data-v-3c872565],.index-swiper .swiper-button-prev[data-v-3c872565]{width:50px}.index-swiper .icon-arrow-left2[data-v-3c872565],.index-swiper .icon-arrow-right2[data-v-3c872565]{font-size:48px;font-weight:700}.index-swiper-news[data-v-3c872565]{position:relative;margin-right:-15px;margin-left:-15px;overflow:hidden}.index-swiper-news>a[data-v-3c872565]{display:block;position:relative}.index-swiper-news>a h4[data-v-3c872565]{position:absolute;top:20px;left:20px}.index-swiper-news>a>img[data-v-3c872565]{width:100%;height:100%;object-fit:cover}@media only screen and (min-width:768px){.index-swiper-news[data-v-3c872565]{height:100%;margin-left:-8px}.index-swiper-news>a[data-v-3c872565]{height:203px}.index-swiper-news>a[data-v-3c872565]:last-child{position:absolute;bottom:0}}@media only screen and (min-width:768px) and (max-width:1024px){.index-swiper-news[data-v-3c872565]{width:auto}.index-swiper-news>a[data-v-3c872565]{height:49%}}@media only screen and (max-width:767px){.index-swiper-news>a[data-v-3c872565]{height:230px}}@media only screen and (max-width:767px){.main-content[data-v-3c872565]{padding:0 10px 10px}}.quick-entrance[data-v-3c872565]{font-size:0}.quick-entrance>.links-item[data-v-3c872565]{text-align:center}.quick-entrance>.links-item>a[data-v-3c872565]{color:#fff}.quick-entrance>.links-item>a[data-v-3c872565]:hover{opacity:.8}.quick-entrance>.links-item span[data-v-3c872565]{display:block}.quick-entrance .link-news[data-v-3c872565]{background-color:#5c7bc8}.quick-entrance .link-guide[data-v-3c872565]{background-color:#5390d7}.quick-entrance .link-online[data-v-3c872565]{background-color:#42a8dd}.quick-entrance .link-borrowed[data-v-3c872565]{background-color:#64c1cf}.quick-entrance .link-activities[data-v-3c872565]{background-color:#5dc9a8}@media only screen and (min-width:768px){.quick-entrance[data-v-3c872565]{padding-top:17px}.quick-entrance>.links-item[data-v-3c872565]{float:left;width:20%;padding-right:10px;vertical-align:top}.quick-entrance>.links-item[data-v-3c872565]:last-child{padding-right:0}.quick-entrance>.links-item>a[data-v-3c872565]{display:table-cell;width:1%;height:100px;vertical-align:middle;font-size:18px}.quick-entrance>.links-item .link-en[data-v-3c872565]{font-size:10px;opacity:.5}}@media only screen and (max-width:767px){.quick-entrance[data-v-3c872565]{display:flex;padding:5px 5px 0;justify-content:space-between}.quick-entrance>.links-item[data-v-3c872565]{flex:1}.quick-entrance>.links-item[data-v-3c872565]:not(:last-child){padding-right:5.5px}.quick-entrance>.links-item>a[data-v-3c872565]{display:flex;justify-content:center;align-items:center;width:100%;height:40.5px;font-size:12px}}@media only screen and (min-width:768px){.activity-list-wrap[data-v-3c872565]{min-height:333px}}@media only screen and (max-width:1024px) and (min-width:768px){.activity-list-wrap .calendar[data-v-3c872565]{width:344px;height:333px}}@media only screen and (max-width:1024px) and (min-width:768px){.activity-list-wrap .list-container[data-v-3c872565]{margin-right:344px;padding-right:20px;margin-top:40px}}@media only screen and (max-width:768px){.weekly-recommended[data-v-3c872565]{overflow:hidden}}.book-container[data-v-3c872565]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.book-container .even[data-v-3c872565]{padding-left:56px}}.external-links[data-v-3c872565]{margin-bottom:-10px;font-size:0}.external-links>a[data-v-3c872565]{position:relative;color:#fff}.external-links .none-padding[data-v-3c872565]{padding-right:0;padding-bottom:0}.external-links .none-padding .links-inner[data-v-3c872565]{right:0}.external-links .links-inner[data-v-3c872565]{position:absolute;top:0;left:0;background-color:#64c1cf}.external-links .links-inner>strong[data-v-3c872565],.external-links .links-inner span[data-v-3c872565]{display:block}@media only screen and (min-width:768px){.external-links[data-v-3c872565]{margin-top:40px}.external-links>a[data-v-3c872565]{display:inline-block;width:20%;height:119px;padding-right:10px;padding-bottom:10px;font-size:14px}.external-links .links-inner[data-v-3c872565]{right:10px;bottom:10px;padding-top:20px;padding-left:7px}.external-links .links-inner>strong[data-v-3c872565]{font-size:16px;color:#ebe9e3}.external-links .links-inner>span[data-v-3c872565]{margin-top:-2px;opacity:.4;text-transform:uppercase}}@media only screen and (max-width:767px){.external-links[data-v-3c872565]{margin-top:25px}.external-links>a[data-v-3c872565]{display:inline-block;width:50%;height:117px;font-size:8px}.external-links>a:nth-child(odd) .links-inner[data-v-3c872565]{right:5px}.external-links>a:nth-child(2n) .links-inner[data-v-3c872565]{left:5px;right:0}.external-links .links-inner[data-v-3c872565]{bottom:10px;padding-top:21px;padding-left:20px}.external-links .links-inner>strong[data-v-3c872565]{font-size:13px}.external-links .links-inner>span[data-v-3c872565]{text-transform:uppercase}}.service-links[data-v-3c872565]{margin:40px -15px 0;padding-top:40px;border-top:1px solid #eee}@media only screen and (max-width:767px){.service-links[data-v-3c872565]{margin:25px -10px 0;padding-top:0;border:none;padding:0 10px;background:#f0f3f6}}.service-links .service-header[data-v-3c872565]{font-size:18px;color:#383838;line-height:30px;margin:10px 0;padding-left:5px}.service-links .service-header a[data-v-3c872565]{color:#383838;text-decoration:none}.service-links .service-info[data-v-3c872565]{font-size:14px;color:#959ca5;line-height:21px;list-style:disc}.service-links .service-info li[data-v-3c872565]{height:44px;line-height:22px;padding:9px 0;box-sizing:content-box;border-top:1px solid #eee;display:flex;align-items:center;justify-content:space-around;flex-direction:column}.service-links .service-info a[data-v-3c872565]{font-size:18px;color:#75797f;width:100%;padding-left:20px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#959ca5;text-decoration:none;position:relative}@media only screen and (max-width:767px){.service-links .service-info a[data-v-3c872565]{font-size:17px}}.service-links .service-info a[data-v-3c872565]:before{content:\"\";position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background-color:#afb3b9}", ""]);

// exports


/***/ }),

/***/ "mgS3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mzkE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__("ce18");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cbeb0fd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__("Rslm");
function injectStyle (ssrContext) {
  __webpack_require__("2tr2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cbeb0fd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cbeb0fd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "n9rH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchArea),expression:"showSearchArea"}],staticClass:"component-search",on:{"click":function($event){$event.stopPropagation();return _vm.searchBarClick($event)}}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"search-area unityPadding clearfix"},[_c('div',{ref:"sitem",staticClass:"search-select-item"},[_c('strong',{staticClass:"book-search",class:{active: _vm.showSearchList},on:{"click":function($event){_vm.searchListAction()}}},[_vm._v(_vm._s(_vm.currentSearchType))]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchList),expression:"showSearchList"}],staticClass:"search-list"},_vm._l((_vm.searchList),function(item,index){return _c('li',{key:item.name,class:{active: index === _vm.currentSelect},on:{"click":function($event){_vm.chooseSearchType(index, item.sty, item.name, $event)}}},[_vm._v(_vm._s(item.name))])}))]),_vm._v(" "),_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"search-icon",on:{"click":_vm.searchAction}},[_c('i',{staticClass:"iconfont icon-search2"}),_c('span',{staticClass:"hidden-xs"},[_vm._v("搜索")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],attrs:{"type":"text","placeholder":"搜索关键字","autofocus":true},domProps:{"value":(_vm.keyword)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.searchAction($event)},"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-close-bg clear-input",on:{"click":_vm.clearKeyWord}})]),_vm._v(" "),_c('button',{staticClass:"search-btn visible-xs",on:{"click":_vm.searchAction}},[_vm._v("检索")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "nHkn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"simplebook",attrs:{"title":_vm.bookinfo.title}},[_c('div',{staticClass:"cover"},[_c('img',{attrs:{"src":_vm.bookinfo.cover ? _vm.bookinfo.cover : _vm.defaultCover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"about"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(_vm.bookinfo.title))]),_vm._v(" "),(_vm.bookinfo.type)?_c('p',{staticClass:"type"},[_vm._v(_vm._s(_vm.bookinfo.type))]):_vm._e(),_vm._v(" "),(_vm.bookinfo.pace)?_c('p',{staticClass:"pace"},[_vm._v(_vm._s(_vm.bookinfo.pace))]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oAV5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("fZjL"), __webpack_require__("pFYg"), __webpack_require__("woOf")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("babel-runtime/core-js/object/keys"), require("babel-runtime/helpers/typeof"), require("babel-runtime/core-js/object/assign"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global._typeof, global.assign);
    global.utils = mod.exports;
  }
})(this, function (module, exports, _keys, _typeof2, _assign) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    /**
     * [zeroPadding 数值小于10自动补零]
     * @param {Number, String} num
     * @return {String} 补零后数字值
     */
    zeroPadding: function zeroPadding(num) {
      return num < 10 ? "0" + num : "" + num;
    },

    /**
     * [formatDate 格式化时间]
     * @param {Date} date
     * @return {String} '年月日时'
     * @example
     *    '20180319'
     */
    formatDate: function formatDate() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var self = this;
      var year = date.getFullYear(),
          month = self.zeroPadding(date.getMonth() + 1),
          day = self.zeroPadding(date.getDate()),
          hour = self.zeroPadding(date.getHours()),
          minute = self.zeroPadding(date.getMinutes());

      var dateItemObj = {
        year: year, month: month, day: day, hour: hour, minute: minute
      };
      var finalParams = void 0;
      // 有分隔符
      if (separator) {
        finalParams = (0, _assign2.default)({}, dateItemObj, {
          timerStr: "" + year + separator + month + separator + day
        });
      } else {
        finalParams = (0, _assign2.default)({}, dateItemObj, {
          timerStr: "" + year + month + day + hour
        });
      }

      return finalParams;
    },
    timerHandle: function timerHandle(start, end) {
      var self = this;
      var startTime = new Date(start.replace(/\-/g, "/").slice(0, -2)),
          endTime = new Date(end.replace(/\-/g, "/").slice(0, -2)),
          formatStart = '',
          formatEnd = '';
      // 如果结束日期小于开始日期，交换两个时间
      if (Date.parse(endTime) < Date.parse(startTime)) {
        formatStart = self.formatDate(endTime, '-'), formatEnd = self.formatDate(startTime, '-');
      } else {
        formatStart = self.formatDate(startTime, '-'), formatEnd = self.formatDate(endTime, '-');
      }
      var startHour = formatStart.hour + ":00",
          endHour = formatEnd.hour + ":00";
      var tempDate = void 0;
      if (formatStart.timerStr === formatEnd.timerStr) {
        // 同一天
        tempDate = formatEnd.timerStr + " " + startHour + " - " + endHour;
      } else {
        tempDate = formatStart.timerStr + " " + startHour + " - " + formatEnd.timerStr + " " + endHour;
      }

      return tempDate;
    },

    /**
     * [splitArr 分割数组为指定数量一组]
     * @param {Array} arr 目标数组
     * @param {Int} groupLen 指定数量
     * @return {Array} 分割后的数组
     */
    splitArr: function splitArr() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var groupLen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      if (!arr.length) return;

      var result = [];
      for (var i = 0, len = arr.length; i < len; i += groupLen) {
        result.push(arr.slice(i, i + groupLen));
      }
      return result;
    },

    /**
     * [isEmpty 判断对象对否为空]
     * @param {Object} target
     * @return {Boolean} true - 空对象, false - 非空对象
     */
    isEmpty: function isEmpty(target) {
      if (!target) {
        return true;
      } else if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) === 'object' && !(0, _keys2.default)(target).length) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * [replacePunctuation 替换字符串中的所有标点符号]
     * @param {String} str 目标字符串
     * @return {String} 去除标点符号的字符串
     */
    replacePunctuation: function replacePunctuation(str) {
      if (typeof str !== 'string') {
        str = str.toString();
      }
      return str.replace(/\+/g, ' ');
      // return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " ");
    },

    /** 
     * [currDates 当前日期]
     * @return {Object} y - 年, like => 2018
     *                  m - 月, like => 03
     *                  d - 日, like => 02
     *                  h - 时, like => 09
     *                  M - 分, like => 09
     *                  s - 秒, like => 07
     *                  ym - 年月, like => 201804
     *                  ymd - 年月日, like => 20180402
     */
    currDates: function currDates() {
      var self = this;
      var date = new Date();
      var y = date.getFullYear(),
          m = "" + self.zeroPadding(date.getMonth() + 1),
          d = "" + self.zeroPadding(date.getDate()),
          h = "" + self.zeroPadding(date.getHours()),
          M = "" + self.zeroPadding(date.getMinutes()),
          s = "" + self.zeroPadding(date.getSeconds()),
          ym = "" + y + m,
          ymd = "" + ym + d;
      return {
        y: y, m: m, d: d, h: h, M: M, s: s, ym: ym, ymd: ymd
      };
    },
    getFirstEndDay: function getFirstEndDay() {
      var assignDay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
      var prevMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // console.log(assignDay);
      var self = this;
      var nowdays = new Date(assignDay);
      if (nowdays == 'Invalid Date') {
        console.error('不合法的日期格式');
        return '';
      }
      var y = nowdays.getFullYear();
      var m = self.zeroPadding(prevMonth ? nowdays.getMonth() : nowdays.getMonth() + 1);
      if (m == 0 && prevMonth) {
        m = 12;
        y = y - 1;
      }

      var firstDay = y + "-" + m + "-01";
      var myDate = new Date(y, m, 0);
      var lastDay = y + "-" + m + "-" + myDate.getDate();
      var nextMonthFirstDay = self.getDateStr(lastDay, 1);

      return {
        firstDay: firstDay,
        lastDay: lastDay,
        nextMonthFirstDay: nextMonthFirstDay
      };
    },

    /** 
     * [getDateStr 获取指定日期前后的日期]
     * @param {String, Date} assignDay 指定日期, default: 当前日期
     * @param {Int} addDayCount 指定天数, 0 - 今天, > 0 今天后的日期, < 0 今天前的日期
     * @return {String} 指定日期前后的日期字符串
     */
    getDateStr: function getDateStr(assignDay, addDayCount) {
      // console.log(assignDay);
      var self = this;
      var dd = new Date(assignDay.replace(/\-/g, "/"));
      dd.setDate(dd.getDate() + addDayCount); // 获取 addDayCount 后的日期
      var y = dd.getFullYear(),
          m = self.zeroPadding(dd.getMonth() + 1),
          d = self.zeroPadding(dd.getDate());

      return y + "-" + m + "-" + d;
    },

    /** 
     * [getScrollBarWidth 获取滚动条实际宽度]
     * @return {Int} 滚动条实际宽度
     */
    getScrollBarWidth: function getScrollBarWidth() {
      var noScroll = void 0,
          scroll = void 0,
          oDiv = document.createElement("div");
      oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
      noScroll = document.body.appendChild(oDiv).clientWidth;
      oDiv.style.overflowY = "scroll";
      scroll = oDiv.clientWidth;
      document.body.removeChild(oDiv);

      return noScroll - scroll;
    },

    /** 
     * [modalOpenEvent Modal显示事件]
     * @description Modal显示时禁止浏览器滚动, 同时设置body 'padding-right' 为 '滚动条实际宽度', 防止抖动
     * @param {Boolean} bl 是否显示Modal
     *    true - 显示Modal, 同时禁止浏览器滚动
     *    false - 隐藏Modal, 同时允许浏览器滚动
     */
    modalOpenEvent: function modalOpenEvent(bl) {
      var self = this;
      var oBody = document.body;
      var scrollBarWidth = self.getScrollBarWidth() + "px";

      oBody.className = bl ? 'modal-open' : '';
      oBody.style.cssText = bl ? "padding-right: " + scrollBarWidth : '';
    },

    // 生成唯一id
    guid: function guid() {
      return S4() + S4() + S4() + S4() + S4();
      function S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
      }
    },

    /**
     * 获取每月的活动事件
     * 按月返回数据，由于有跨天的活动，所以需要处理活动日历数据,按日期展开ajax数据
     * @param {*} data :shlib.events.month返回数据 result.datas
     * @param {*} date : 日期对象{start: '2018-03-01',end:'2018-04-01'}
     */
    getEventsData: function getEventsData(data, date) {
      if (data.length === 0) {
        return [];
      }
      var self = this;
      date.start = new Date((date.start + ' 00:00:00').replace(/\-/g, "/"));
      date.end = new Date((date.end + ' 00:00:00').replace(/\-/g, "/"));
      var tempList = [];
      // let events = [];  // 日历活动提示
      // let dates = []; // 保存日期列表

      for (var j = 0, k = data.length; j < k; j++) {
        tempList = tempList.concat(spreadData(data[j]));
      }

      tempList.sort(function (a, b) {
        return a.date < b.date ? 1 : -1;
      });

      return collectEventsData(tempList);

      // 判断活动是否跨天，如果是，则展开数据
      function spreadData(data) {
        // console.log(data);
        var startTime = new Date(data.v3.replace(/\-/g, "/").slice(0, -2)),
            endTime = new Date(data.v4.replace(/\-/g, "/").slice(0, -2)),
            formatStart = '',
            formatEnd = '',
            tempList = [];
        if (Date.parse(endTime) < Date.parse(startTime)) {
          var tempTime = startTime;
          startTime = endTime;
          endTime = tempTime;
          formatStart = self.formatDate(endTime, '-');
          formatEnd = self.formatDate(startTime, '-');
        } else {
          formatStart = self.formatDate(startTime, '-');
          formatEnd = self.formatDate(endTime, '-');
        }
        if (formatStart.timerStr !== formatEnd.timerStr) {
          // 活动跨天
          var s = 0,
              e = 0;
          if (Date.parse(startTime) < Date.parse(date.start)) {
            // 当前活动开始日期小于当前月份的开始日期
            s = date.start;
          } else {
            s = startTime;
          }
          if (Date.parse(endTime) > Date.parse(date.end)) {
            // 当前活动结束日期大于当前月份的结束日期
            e = new Date(date.end);
            e.setDate(0);
          } else {
            e = endTime;
          }
          // 活动跨天，进行展开
          for (var _j = 0, l = e.getDate() - s.getDate() + 1; _j < l; _j++) {
            tempList.push({
              date: Date.parse(s.getFullYear() + '/' + (s.getMonth() + 1) + '/' + (s.getDate() + _j) + ' 00:' + _j + ':00'),
              header: s.getFullYear() + '-' + self.zeroPadding(s.getMonth() + 1) + '-' + self.zeroPadding(s.getDate() + _j)
              // id: data.id, // 活动详情页id
              // cover: data.v7,
              // title: data.v1,
              // type: data.v5,
              // organizers: data.v8 || '', // 实际暂无v8字段
              // location: data.v6,
              // time: self.timerHandle(data.v3, data.v4)
            });
          }
          // console.log(tempList);
          return tempList;
        } else {
          // 同一天
          return [{
            date: Date.parse(data.v3.replace(/\-/g, "/").slice(0, -2)),
            header: startTime.getFullYear() + '-' + self.zeroPadding(startTime.getMonth() + 1) + '-' + self.zeroPadding(startTime.getDate())
            // id: data.id, // 活动详情页id
            // cover: data.v7,
            // title: data.v1,
            // type: data.v5,
            // organizers: data.v8 || '', // 实际暂无v8字段
            // location: data.v6,
            // time: self.timerHandle(data.v3, data.v4)
          }];
        }
      }

      // 收集日历活动事件
      function collectEventsData(data) {
        var events = []; // 日历活动提示
        var dates = []; // 保存日期列表
        for (var _j2 = 0, _k = data.length; _j2 < _k; _j2++) {
          var element = data[_j2];
          var dname = element.header;
          // let dname = element.time.split(' ')[0];
          if (!findDate(dname)) {
            dates.push(dname);
            findObj(dname);
          }
        }
        // console.log(events);
        return events; // 活动日历事件列表

        function findDate(dateName) {
          // 查找日期列表是否已经存储了日期
          if (dates.indexOf(dateName) < 0) {
            return false;
          }
          return true;
        }
        // 遍历列表找对象
        function findObj(dateName) {
          var eventitem = {
            date: dateName,
            eventCount: 0
          };
          for (var i = 0, l = data.length; i < l; i++) {
            var item = data[i];
            if (item.header === dateName) {
              eventitem.eventCount++;
            }
          }
          events.unshift(eventitem);
        }
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "oD/L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "pC2+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue__ = __webpack_require__("0nDf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c872565_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_homePage_vue__ = __webpack_require__("v7pL");
function injectStyle (ssrContext) {
  __webpack_require__("iHta")
  __webpack_require__("JKrY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c872565"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_homePage_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c872565_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_homePage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pGXj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Y/rA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7aeec1a2", content, true, {});

/***/ }),

/***/ "qGFA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue__ = __webpack_require__("gYWr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f0b805c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookDefault_vue__ = __webpack_require__("em4H");
function injectStyle (ssrContext) {
  __webpack_require__("hsI3")
  __webpack_require__("3C0P")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f0b805c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDefault_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f0b805c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookDefault_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qxF/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "rJem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue__ = __webpack_require__("gtyC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cae84138_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceGuide_vue__ = __webpack_require__("oD/L");
function injectStyle (ssrContext) {
  __webpack_require__("jCnD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cae84138"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_serviceGuide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cae84138_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_serviceGuide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "rZOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-login"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLoginModal),expression:"showLoginModal"}],staticClass:"modal-container"},[_c('i',{staticClass:"iconfont icon-close2",on:{"click":_vm.closeModal}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"user-login-list"},[_c('li',{staticClass:"clearfix"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],attrs:{"type":"text","placeholder":"请输入用户名/卡号"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}}),_c('i',{staticClass:"iconfont icon-user"})]),_vm._v(" "),_c('li',{staticClass:"clearfix"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],attrs:{"type":"password","placeholder":"请输入密码"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_c('i',{staticClass:"iconfont icon-password"})]),_vm._v(" "),_c('li',{staticClass:"has-verify-code clearfix"},[_c('span',{staticClass:"verify-code-container",on:{"click":_vm.getVerifyCode}},[_c('img',{staticClass:"verify-code",attrs:{"src":_vm.verifyCodeImage}}),_c('br'),_c('small',[_vm._v("看不清换一张")])]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.verifyCode),expression:"verifyCode"}],ref:"yzm",attrs:{"type":"text","placeholder":"请输入验证码"},domProps:{"value":(_vm.verifyCode)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.loginAction($event)},"input":function($event){if($event.target.composing){ return; }_vm.verifyCode=$event.target.value}}}),_c('i',{staticClass:"iconfont icon-verify-code"})])]),_vm._v(" "),_c('div',{staticClass:"login-action"},[_c('a',{staticClass:"find-pwd",attrs:{"href":"https://passport.library.sh.cn:4430/rs/register/getpass_index","target":"_blank"}},[_vm._v("找回密码")]),_vm._v(" "),_c('label',{staticClass:"label-checked",attrs:{"for":"rememberUser"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.remember),expression:"remember"}],attrs:{"type":"checkbox","id":"rememberUser"},domProps:{"checked":Array.isArray(_vm.remember)?_vm._i(_vm.remember,null)>-1:(_vm.remember)},on:{"change":function($event){var $$a=_vm.remember,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.remember=$$a.concat([$$v]))}else{$$i>-1&&(_vm.remember=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.remember=$$c}}}}),_c('i',{staticClass:"iconfont icon-unselected2"}),_vm._v("记住我一周")])]),_vm._v(" "),_c('div',{staticClass:"btn-wrap"},[_c('button',{staticClass:"btn btn-primary",on:{"click":_vm.loginAction}},[_vm._v("登录")])]),_vm._v(" "),_c('div',{staticClass:"other-action"},[_c('a',{staticClass:"find-wrap",attrs:{"href":_vm.lossAndFindLink,"target":"_blank"}},[_c('i',{staticClass:"iconfont icon-missing"}),_vm._v("挂失/找回\n      ")]),_vm._v(" "),_c('a',{staticClass:"other-login-model",attrs:{"href":("https://passport.library.sh.cn/oauth/authorize?response_type=code&scope=read%20write&client_id=1658887189&redirect_uri=" + _vm.homePage + "/index&state=test&user_type=AA")}},[_vm._v("其他登录方式")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"modal-note"},[_c('span',{staticClass:"modal-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLoginModal),expression:"showLoginModal"}],staticClass:"modal-overlay"})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"modal-title"},[_vm._v("\n      用户登录"),_c('a',{staticClass:"site-help",attrs:{"href":"http://search1.library.sh.cn/mylibrary/html/help/login_help.htm","target":"_blank"}},[_c('i',{staticClass:"iconfont icon-help"}),_vm._v("帮助")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rbT6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("OECn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5aa0eb5a", content, true, {});

/***/ }),

/***/ "spLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__ = __webpack_require__("2Y27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50d0431e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__ = __webpack_require__("X9ty");
function injectStyle (ssrContext) {
  __webpack_require__("dMAz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50d0431e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50d0431e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "t+QB":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "t+Yj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-loading"},[_c('div',{staticClass:"ball-clip-rotate"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "t70u":
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
        global.loadMore = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "loadMore",

        data: function data() {
            return {
                currIndex: this.current
            };
        },


        props: ['current', 'total', 'load'], // 当前页码/总页码/是否加载数据

        methods: {
            loadMore: function loadMore(index) {
                // 加载更多
                // let total = this.total;
                if (this.currIndex >= this.total) {
                    return;
                }
                this.currIndex = index + 1;
                this.$emit('more-data', this.currIndex);
            }
        }
    };
    module.exports = exports['default'];
});

/***/ }),

/***/ "tE0J":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@keyframes scroll{0%{left:100%}to{left:-200%}}.scroll{height:30px;overflow:hidden;position:absolute;animation-name:scroll;animation-duration:30s;animation-delay:1s;animation-timing-function:linear;animation-iteration-count:infinite}", ""]);

// exports


/***/ }),

/***/ "tz6R":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kP4P");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("77532f8a", content, true, {});

/***/ }),

/***/ "uBxM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("tE0J");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("08f37ed8", content, true, {});

/***/ }),

/***/ "v7pL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-homePage"},[_c('head-info'),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"top-swiper-news padMargin clearfix"},[_c('div',{staticClass:"news-main col-sm-8"},[_c('div',{staticClass:"index-swiper"},[(_vm.carouselList.length)?_c('swiper',{ref:"indexSwiper",attrs:{"options":_vm.swiperOption}},[_vm._l(((_vm.isMob ? _vm.carouselList : _vm.carouselList.slice(2))),function(item){return _c('swiper-slide',{key:item.v4},[_c('a',{attrs:{"href":item.v6,"target":"_blank"}},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.v5,"alt":""}})])])}),_vm._v(" "),_c('div',{staticClass:"swiper-button-prev",attrs:{"slot":"button-prev"},slot:"button-prev"},[_c('i',{staticClass:"iconfont icon-arrow-left2"})]),_vm._v(" "),_c('div',{staticClass:"swiper-button-next",attrs:{"slot":"button-next"},slot:"button-next"},[_c('i',{staticClass:"iconfont icon-arrow-right2"})])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})],1)]),_vm._v(" "),(!_vm.isMob)?_c('div',{staticClass:"news-aside col-sm-4"},[_c('div',{staticClass:"index-swiper-news"},_vm._l((_vm.carouselList.slice(0,2)),function(item){return _c('a',{key:item.v4,staticClass:"news-item",attrs:{"href":item.v6,"target":"_blank"}},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.v5,"alt":""}})])}))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"quick-entrance padMargin clearfix"},[_c('div',{staticClass:"links-item"},[_c('router-link',{staticClass:"link-news",attrs:{"to":{path: '/index/newsBulletin'}}},[_c('span',{staticClass:"link-cn"},[_vm._v("新闻公告")]),_c('span',{staticClass:"link-en hidden-xs"},[_vm._v("Library News")])])],1),_vm._v(" "),_c('div',{staticClass:"links-item"},[_c('router-link',{staticClass:"link-guide",attrs:{"to":{path: '/index/serviceGuide'}}},[_c('span',{staticClass:"link-cn"},[_vm._v("服务指南")]),_c('span',{staticClass:"link-en hidden-xs"},[_vm._v("Guidenlines")])])],1),_vm._v(" "),_c('div',{staticClass:"links-item"},[_c('a',{staticClass:"link-online",attrs:{"href":_vm.online,"target":"_blank"}},[_c('span',{staticClass:"link-cn"},[_vm._v("在线咨询")]),_c('span',{staticClass:"link-en hidden-xs"},[_vm._v("Online Q&A")])])]),_vm._v(" "),_c('div',{staticClass:"links-item"},[_c('a',{staticClass:"link-borrowed",attrs:{"href":"javascript:;"},on:{"click":_vm.goToCurrntLending}},[_c('span',{staticClass:"link-cn"},[_vm._v("已借图书")]),_c('span',{staticClass:"link-en hidden-xs"},[_vm._v("Borrowed books")])])]),_vm._v(" "),_c('div',{staticClass:"links-item"},[_c('a',{staticClass:"link-activities",attrs:{"href":"javascript:;"},on:{"click":_vm.goToMyActiveCenter}},[_c('span',{staticClass:"link-cn"},[_vm._v("我的活动")]),_c('span',{staticClass:"link-en hidden-xs"},[_vm._v("My activities")])])])]),_vm._v(" "),_c('div',{staticClass:"main-content padMargin"},[_c('div',{staticClass:"activity-center"},[_c('column-title',{attrs:{"column-title":_vm.activityTitle}}),_vm._v(" "),_c('div',{staticClass:"activity-list-wrap has-right-column"},[_c('div',{staticClass:"calendar hidden-xs"},[_c('vue-event-calendar',{attrs:{"events":_vm.eventsList},on:{"monthChanged":_vm.handleMonthChanged,"dayChanged":_vm.handleDayChanged,"backCurrent":_vm.backToCurrent}})],1),_vm._v(" "),_c('ul',{staticClass:"list-container"},[_c('none-data',{directives:[{name:"show",rawName:"v-show",value:(!_vm.activityList.length && !_vm.loading),expression:"!activityList.length && !loading"}],attrs:{"msg":"当前月暂无活动"}}),_vm._v(" "),_vm._l((_vm.activityList),function(item,index){return _c('router-link',{key:index,attrs:{"to":{path: ("/index/eventDetails?event=" + (item.id))},"tag":"li"}},[_c('activity-item',{attrs:{"activity-obj":item}})],1)})],2)]),_vm._v(" "),_c('router-link',{staticClass:"view-more",attrs:{"to":{path: '/index/activityCenter?isActive=0'}}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"weekly-recommended"},[_c('column-title',{attrs:{"column-title":_vm.weeklyTitle}}),_vm._v(" "),_c('div',{staticClass:"book-container row"},_vm._l((_vm.weeklyList),function(item,index){return _c('div',{key:index,staticClass:"col-xs-4 col-sm-6",class:{even: (index + 1) % 2 === 0}},[_c('router-link',{attrs:{"to":{path: ("eBook/eBookDetails?type=epub&bid=" + (item.fbookid))},"target":"_blank"}},[_c('book-info',{attrs:{"book-info":item}})],1)],1)})),_vm._v(" "),_c('router-link',{staticClass:"view-more",attrs:{"to":{path: 'eBook/recommendedPast'},"target":"_blank"}},[_vm._v("查看更多"),_c('i',{staticClass:"iconfont icon-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"service-links"},[_c('div',[_c('vue-waterfall-easy',{attrs:{"imgsArr":_vm.imgsArr},on:{"scrollLoadImg":_vm.fetchImgsData},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('ul',{staticClass:"service-info"},_vm._l((props.value.info),function(item,index){return _c('li',{key:index},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_vm._v(_vm._s(item.title))])])}))]}}])})],1),_vm._v(" "),_c('a',{staticClass:"view-more visible-xs",attrs:{"href":"javascript:;"},on:{"click":_vm.fetchImgsData}},[_vm._v("点击加载更多")])])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "vwOt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-242dd42f]{float:left!important}.pull-right[data-v-242dd42f]{float:right!important}.show[data-v-242dd42f]{display:block!important}.hidden[data-v-242dd42f]{display:none!important;visibility:hidden!important}.invisible[data-v-242dd42f]{visibility:hidden}.loading[data-v-242dd42f]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-242dd42f 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-242dd42f{0%{width:2px}to{width:15px}}a[data-v-242dd42f]{text-decoration:none}ol[data-v-242dd42f],ul[data-v-242dd42f]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-242dd42f],input[data-v-242dd42f]{-webkit-appearance:none}button[data-v-242dd42f]{border:none;background:none}input[data-v-242dd42f],input[data-v-242dd42f]:focus{outline:none}.none-data[data-v-242dd42f]{position:relative}.none-data[data-v-242dd42f]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-242dd42f]{border:1px solid #5390d7;color:#5390d7}.return[data-v-242dd42f]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-242dd42f]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-242dd42f]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-242dd42f]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-242dd42f]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-242dd42f]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-242dd42f]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-242dd42f]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-242dd42f]{color:#42a8dd}.not-overdue[data-v-242dd42f]{color:#5dc9a8}.overdue[data-v-242dd42f]{color:#f97f50}.overlay[data-v-242dd42f]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-242dd42f]{padding-left:15px}.padMargin[data-v-242dd42f]{padding-right:15px;padding-left:15px}}.white-bg[data-v-242dd42f]{background-color:#fff}.vertical-top[data-v-242dd42f]{vertical-align:top}.vertical-middle[data-v-242dd42f]{vertical-align:middle}.vertical-center[data-v-242dd42f]{font-size:0;text-align:left}.vertical-center[data-v-242dd42f]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-242dd42f]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-242dd42f]{color:#fff}.swiper-button-next[data-v-242dd42f],.swiper-button-prev[data-v-242dd42f]{background-image:none}.swiper-button-next .iconfont[data-v-242dd42f],.swiper-button-prev .iconfont[data-v-242dd42f]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-242dd42f],.swiper-button-prev .iconfont[data-v-242dd42f]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-242dd42f],.swiper-button-prev .iconfont[data-v-242dd42f]{font-size:11px}}.list-container>li[data-v-242dd42f]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-242dd42f]{padding-bottom:31px}.list-container>li+li[data-v-242dd42f]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-242dd42f]{padding-bottom:15px}.list-container>li+li[data-v-242dd42f]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-242dd42f]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-242dd42f]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-242dd42f]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-242dd42f]{padding-bottom:16px}.has-right-column .calendar[data-v-242dd42f]{width:280px;height:254px}}.view-more[data-v-242dd42f]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-242dd42f]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-242dd42f]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-242dd42f]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-242dd42f]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-242dd42f]{display:none}.view-more .iconfont[data-v-242dd42f]{font-size:10px}}.about-content[data-v-242dd42f]{color:#666}.about-content>p[data-v-242dd42f]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-242dd42f]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-242dd42f]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-242dd42f]{padding-right:10px;padding-left:10px}.about-content>p[data-v-242dd42f]{font-size:13px;line-height:25px}.about-content>p+p[data-v-242dd42f]{margin-top:12px}}.component-menuInner.last1>a[data-v-242dd42f]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-242dd42f]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-242dd42f]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-242dd42f]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-242dd42f]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-242dd42f]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-242dd42f]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-242dd42f]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-242dd42f]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-242dd42f]{color:#5cc8a8}.component-menuInner a[data-v-242dd42f]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-242dd42f]{color:#4daada}.component-menuInner a p[data-v-242dd42f]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-242dd42f]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-242dd42f]{margin-top:20px}.component-menuInner a[data-v-242dd42f]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-242dd42f]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-242dd42f]{font-size:34px}.component-menuInner a p[data-v-242dd42f]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-242dd42f]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-242dd42f]{margin-top:10px}.component-menuInner a[data-v-242dd42f]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-242dd42f]{font-size:19px}.component-menuInner a p[data-v-242dd42f]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-242dd42f]{padding-right:15px;padding-left:15px}}.footer[data-v-242dd42f]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-242dd42f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-242dd42f]{position:relative}.eventAction[data-v-242dd42f]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-242dd42f .75s 0s linear infinite;animation:rotate-data-v-242dd42f .75s 0s linear infinite}.component-index[data-v-242dd42f]{position:relative;min-height:100%}@media only screen and (min-width:768px){.component-index[data-v-242dd42f]{padding-bottom:493px}}@media only screen and (max-width:767px){.component-index[data-v-242dd42f]{padding-bottom:15px}}@media only screen and (max-width:768px){.header[data-v-242dd42f]{position:fixed;top:0;z-index:10;width:100%}}", ""]);

// exports


/***/ }),

/***/ "wd/M":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("26+q");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1743594f", content, true, {});

/***/ }),

/***/ "weHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"none-data-tip",style:(_vm.customStyle)},[_c('div',{staticClass:"none-ico"}),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.msg))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wqBJ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("NYxO"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vuex'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vuex, global.api);
    global.header = mod.exports;
  }
})(this, function (module, exports, _vuex, _api) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

  // vuex


  // api request
  exports.default = {
    name: "siteHeader",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        menuActive: null,
        qrcodeImage: '',
        showQrcode: false
      };
    },
    created: function created() {
      self = this;
    },


    computed: (0, _vuex.mapState)({
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      isActive: function isActive(state) {
        return state.showSearchBar && self.menuActive === 0;
      },
      showLoginIcon: function showLoginIcon() {
        var state = void 0;
        // state = self.ls.getItem('loginUserInfo');
        // if (state) {
        //   return true;
        // }
        state = self.$store.state.showLoginIcon;
        return state;
      }
    }),

    methods: {
      showSearchBar: function showSearchBar(index) {
        var currentPage = self.$route.name;
        var currentState = self.$store.state.showSearchBar;
        // 搜索页不隐藏搜索框
        if (currentPage === 'pBookSearch' || currentPage === 'eBookSearch') {
          if (!currentState) {
            self.commitEvent('changeSearchBar', true);
          }
          return;
        }
        self.menuActive = index;
        self.commitEvent('changeSearchBar', !currentState); // 显示搜索框
      },
      getQrcodeId: function getQrcodeId() {
        if (!this.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: 'done'
          });
          self.utils.modalOpenEvent(true);
          return;
        }

        (0, _api.getQrcodeId)().then(function (res) {
          if (res.code && res.code === '-1') {
            return;
          }
          self.showQrcode = true;
          self.qrcodeImage = res.qrurl;
        }).catch(function (error) {});
      },
      viewMyLibrary: function viewMyLibrary() {
        var isLogin = self.ls.getItem('loginUserInfo');
        // 未登录 - 打开登录Modal
        if (!isLogin) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: '/index/myLibrary'
          });
          self.utils.modalOpenEvent(true);
          return;
        }

        // 已登录
        self.openNewPage({
          path: '/index/myLibrary'
        });
      },
      closeQrcode: function closeQrcode() {
        self.showQrcode = false;
        self.qrcodeImage = '';
      },
      refreshQrCode: function refreshQrCode() {
        // 刷新qrcode
        // console.log(111);
        (0, _api.getQrcodeId)().then(function (res) {
          if (res.code && res.code === '-1') {
            return;
          }
          self.qrcodeImage = res.qrurl;
        }).catch(function (error) {});
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "x2iH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue__ = __webpack_require__("D0Ye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c92b7a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookClassification_vue__ = __webpack_require__("Tkxb");
function injectStyle (ssrContext) {
  __webpack_require__("LKjS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c92b7a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bookClassification_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c92b7a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bookClassification_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "x8xb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Xwgp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e26bcf64", content, true, {});

/***/ }),

/***/ "xJD8":
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
    global.App = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'app'
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "xmYi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("t+QB");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("d04c2054", content, true, {});

/***/ }),

/***/ "ybQm":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".vue-waterfall-easy[data-v-289cfe2e]{position:relative;width:100%}.vue-waterfall-easy .img-box[data-v-289cfe2e]{display:inline-block;width:100%;box-sizing:border-box;float:left;transition:left 1s,top 1s}.vue-waterfall-easy .img-box .img-inner-box[data-v-289cfe2e]{border:1px solid #eee;border-radius:6px 6px 2px 2px;overflow:hidden}.vue-waterfall-easy .img-box .img-inner-box .img-wraper[data-v-289cfe2e]{width:100%;background:#fff}.vue-waterfall-easy .img-box .img-inner-box img[data-v-289cfe2e]{width:100%;vertical-align:bottom}.vue-waterfall-easy .img-box .img-inner-box .img-info[data-v-289cfe2e]{background:#fff;padding:0 15px}.vue-waterfall-easy .img-box .img-inner-box a[data-v-289cfe2e]{position:relative;display:inline-block;width:100%}.vue-waterfall-easy .img-box .img-inner-box a .img-title[data-v-289cfe2e]{position:absolute;bottom:0;width:100%}.vue-waterfall-easy .img-box .img-inner-box a .img-title h3[data-v-289cfe2e]{width:100%;margin:0;height:40px;line-height:40px;background-color:rgba(0,0,0,.2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vue-waterfall-easy .img-box .img-inner-box a .img-title h3 a[data-v-289cfe2e]{text-decoration:none;font-size:18px;color:#fff;padding:0 10px}.vue-waterfall-easy .loading[data-v-289cfe2e]{text-align:center;width:100%;position:fixed;bottom:10px;left:50%;margin-left:-15px;width:30px;height:30px}.vue-waterfall-easy .loading.first-loading[data-v-289cfe2e]{top:50%;margin-top:-15px}.vue-waterfall-easy .double-bounce1[data-v-289cfe2e],.vue-waterfall-easy .double-bounce2[data-v-289cfe2e]{width:100%;height:100%;border-radius:50%;background-color:#67cf22;opacity:.6;position:absolute;top:0;left:0;animation:bounce-data-v-289cfe2e 2s infinite ease-in-out}.vue-waterfall-easy .double-bounce2[data-v-289cfe2e]{animation-delay:-1s}@keyframes bounce-data-v-289cfe2e{0%,to{transform:scale(0)}50%{transform:scale(1)}}", ""]);

// exports


/***/ })

},[0]);
//# sourceMappingURL=app.4a0f250fef07027118d0.js.map