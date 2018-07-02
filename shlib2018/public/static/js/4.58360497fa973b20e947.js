/*! vue-cli-xiaxs */
webpackJsonp([4],{

/***/ "+/St":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bXdR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3894b03e", content, true, {});

/***/ }),

/***/ "0zE7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-lists clearfix"},[_c('span',{staticClass:"activity-photo"},[_c('img',{staticClass:"img-responsive ac-img",attrs:{"src":_vm.activityObj.cover,"alt":_vm.activityObj.title}})]),_vm._v(" "),_c('div',{staticClass:"activity-info"},[_c('h3',{staticClass:"activity-title"},[_c('span',{staticClass:"activity-type",class:_vm.setDiffType(_vm.activityObj.type)},[_vm._v(_vm._s(_vm.activityObj.type))]),_vm._v(_vm._s(_vm.activityObj.title))]),_vm._v(" "),_c('div',{staticClass:"activity-content"},[_c('div',{staticClass:"content-details activity-sponsor"},[_vm._v(_vm._s(_vm.activityObj.organizers))]),_vm._v(" "),_c('div',{staticClass:"content-details activity-location"},[_vm._v(_vm._s(_vm.activityObj.location))]),_vm._v(" "),_c('div',{staticClass:"content-details activity-timer"},[_c('span',{staticClass:"ac-timer"},[_vm._v(_vm._s(_vm.activityObj.time))])])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.activityObj.isFocus),expression:"!activityObj.isFocus"}],staticClass:"focus-btn focus",on:{"click":function($event){$event.preventDefault();_vm.focusOn(_vm.activityObj.id)}}},[_c('i',{staticClass:"add-focus"}),_vm._v("关注")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.activityObj.isFocus),expression:"activityObj.isFocus"}],staticClass:"focus-btn focused",on:{"click":function($event){$event.preventDefault();_vm.focusOff(_vm.activityObj.id)}}},[_c('i',{staticClass:"iconfont icon-correct"}),_vm._v("已关注")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "I9Gm":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-be86b192]{float:left!important}.pull-right[data-v-be86b192]{float:right!important}.show[data-v-be86b192]{display:block!important}.hidden[data-v-be86b192]{display:none!important;visibility:hidden!important}.invisible[data-v-be86b192]{visibility:hidden}.loading[data-v-be86b192]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-be86b192 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-be86b192{0%{width:2px}to{width:15px}}a[data-v-be86b192]{text-decoration:none}ol[data-v-be86b192],ul[data-v-be86b192]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-be86b192],input[data-v-be86b192]{-webkit-appearance:none}button[data-v-be86b192]{border:none;background:none}input[data-v-be86b192],input[data-v-be86b192]:focus{outline:none}.none-data[data-v-be86b192]{position:relative}.none-data[data-v-be86b192]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-be86b192]{border:1px solid #5390d7;color:#5390d7}.return[data-v-be86b192]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-be86b192]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-be86b192]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-be86b192]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-be86b192]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-be86b192]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-be86b192]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-be86b192]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-be86b192]{color:#42a8dd}.not-overdue[data-v-be86b192]{color:#5dc9a8}.overdue[data-v-be86b192]{color:#f97f50}.overlay[data-v-be86b192]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-be86b192]{padding-left:15px}.padMargin[data-v-be86b192]{padding-right:15px;padding-left:15px}}.white-bg[data-v-be86b192]{background-color:#fff}.vertical-top[data-v-be86b192]{vertical-align:top}.vertical-middle[data-v-be86b192]{vertical-align:middle}.vertical-center[data-v-be86b192]{font-size:0;text-align:left}.vertical-center[data-v-be86b192]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-be86b192]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-be86b192]{color:#fff}.swiper-button-next[data-v-be86b192],.swiper-button-prev[data-v-be86b192]{background-image:none}.swiper-button-next .iconfont[data-v-be86b192],.swiper-button-prev .iconfont[data-v-be86b192]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-be86b192],.swiper-button-prev .iconfont[data-v-be86b192]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-be86b192],.swiper-button-prev .iconfont[data-v-be86b192]{font-size:11px}}.list-container>li[data-v-be86b192]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-be86b192]{padding-bottom:31px}.list-container>li+li[data-v-be86b192]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-be86b192]{padding-bottom:15px}.list-container>li+li[data-v-be86b192]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-be86b192]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-be86b192]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-be86b192]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-be86b192]{padding-bottom:16px}.has-right-column .calendar[data-v-be86b192]{width:280px;height:254px}}.view-more[data-v-be86b192]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-be86b192]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-be86b192]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-be86b192]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-be86b192]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-be86b192]{display:none}.view-more .iconfont[data-v-be86b192]{font-size:10px}}.about-content[data-v-be86b192]{color:#666}.about-content>p[data-v-be86b192]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-be86b192]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-be86b192]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-be86b192]{padding-right:10px;padding-left:10px}.about-content>p[data-v-be86b192]{font-size:13px;line-height:25px}.about-content>p+p[data-v-be86b192]{margin-top:12px}}.component-menuInner.last1>a[data-v-be86b192]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-be86b192]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-be86b192]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-be86b192]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-be86b192]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-be86b192]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-be86b192]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-be86b192]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-be86b192]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-be86b192]{color:#5cc8a8}.component-menuInner a[data-v-be86b192]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-be86b192]{color:#4daada}.component-menuInner a p[data-v-be86b192]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-be86b192]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-be86b192]{margin-top:20px}.component-menuInner a[data-v-be86b192]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-be86b192]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-be86b192]{font-size:34px}.component-menuInner a p[data-v-be86b192]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-be86b192]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-be86b192]{margin-top:10px}.component-menuInner a[data-v-be86b192]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-be86b192]{font-size:19px}.component-menuInner a p[data-v-be86b192]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-be86b192]{padding-right:15px;padding-left:15px}}.footer[data-v-be86b192]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-be86b192{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-be86b192]{position:relative}.eventAction[data-v-be86b192]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-be86b192 .75s 0s linear infinite;animation:rotate-data-v-be86b192 .75s 0s linear infinite}.activity-lists[data-v-be86b192]{display:block;position:relative;color:#959ca5}.activity-lists>.activity-info[data-v-be86b192]{height:100%}.activity-lists>.activity-photo[data-v-be86b192]{float:left}.activity-lists>.activity-photo .ac-img[data-v-be86b192]{height:100%;object-fit:cover}.activity-lists .activity-title[data-v-be86b192]{width:100%;margin-top:-3px;margin-bottom:0;color:#333;font-weight:400}.activity-lists .activity-type[data-v-be86b192]{float:right;text-align:center;border-width:1px;border-style:solid;border-radius:3px}.activity-lists .type-exhibition[data-v-be86b192]{color:#4bc3ce;border-color:#4bc3ce}.activity-lists .type-train[data-v-be86b192]{color:#f6a623;border-color:#f6a623}.activity-lists .type-lecture[data-v-be86b192]{color:#5390d7;border-color:#5390d7}@media only screen and (min-width:768px){.activity-lists[data-v-be86b192]{height:86px}.activity-lists>.activity-photo[data-v-be86b192]{width:139px;height:86px;overflow:hidden}.activity-lists .activity-info[data-v-be86b192]{max-width:320px;display:block;margin-left:139px;position:relative;padding-left:20px;font-size:14px}.activity-lists .activity-title[data-v-be86b192]{display:inline-block;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.activity-lists .activity-type[data-v-be86b192]{width:34px;height:19px;margin-top:3px;margin-left:10px;font-size:12px}.activity-lists .activity-sponsor[data-v-be86b192]{min-height:20px}.activity-lists .activity-timer[data-v-be86b192]{padding-right:70px;height:24px;line-height:24px}.activity-lists .activity-timer .ac-timer[data-v-be86b192]{display:inline-block;line-height:12px}}@media only screen and (max-width:767px){.activity-lists>.activity-photo[data-v-be86b192]{width:132px;height:82px;border-radius:3px;overflow:hidden}.activity-lists .activity-info[data-v-be86b192]{margin-left:142px;font-size:12px}.activity-lists .activity-title[data-v-be86b192]{width:100%;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.activity-lists .activity-type[data-v-be86b192]{width:32px;height:19px;margin-left:5px;font-size:12px}.activity-lists .content-details[data-v-be86b192]{margin-top:2px}.activity-lists .activity-sponsor[data-v-be86b192]{min-height:20px}.activity-lists .activity-timer[data-v-be86b192]{padding-right:65px;height:24px;line-height:24px}.activity-lists .activity-timer .ac-timer[data-v-be86b192]{display:inline-block;line-height:12px}}@media only screen and (min-width:768px) and (max-width:1023px){.activity-lists[data-v-be86b192]{height:94px}.activity-lists>.activity-photo[data-v-be86b192]{width:150px;height:94px}.activity-lists .activity-info[data-v-be86b192]{display:block;padding-left:15px;margin-left:150px}.activity-lists .activity-title[data-v-be86b192]{max-height:42px;font-size:15px;overflow:hidden}.activity-lists .activity-content[data-v-be86b192]{font-size:13px}.activity-lists .activity-content>.content-details[data-v-be86b192]{margin-top:0}}.focus[data-v-be86b192]:focus,.focus[data-v-be86b192]:hover{background-color:#4573ab;color:#fff}.focus:focus>.add-focus[data-v-be86b192]:after,.focus:focus>.add-focus[data-v-be86b192]:before,.focus:hover>.add-focus[data-v-be86b192]:after,.focus:hover>.add-focus[data-v-be86b192]:before{background-color:#fff}.focus-btn[data-v-be86b192]{position:absolute;right:0;bottom:0;color:#4573ab;font-size:14px;border:1px solid #4573ab;background:none;border-radius:3px}@media only screen and (min-width:768px){.focus-btn[data-v-be86b192]{padding:4px}.focus-btn>.iconfont[data-v-be86b192]{font-size:7px}.focus-btn .add-focus[data-v-be86b192]{vertical-align:2px}}@media only screen and (max-width:767px){.focus-btn[data-v-be86b192]{padding:3px 6px 4px 5px;font-size:12px}.focus-btn .add-focus[data-v-be86b192]{vertical-align:1px}}.focus-btn.focused[data-v-be86b192]{color:#64c1cf;border-color:#64c1cf}.focus-btn.focused>.icon-correct[data-v-be86b192]{display:inline-block;font-size:7px;transform:scale(.7)}.focus-btn.focused>.icon-correct[data-v-be86b192]:before{content:\"\\E64D\"}.focus-btn.focused[data-v-be86b192]:focus,.focus-btn.focused[data-v-be86b192]:hover{background-color:#64c1cf;color:#fff}.focus>.add-focus[data-v-be86b192]{position:relative;display:inline-block;width:7px;height:7px;margin-right:9px}.focus>.add-focus[data-v-be86b192]:after,.focus>.add-focus[data-v-be86b192]:before{content:\"\";position:absolute;background-color:#4573ab}.focus>.add-focus[data-v-be86b192]:before{width:7px;height:1px;top:50%;left:50%;margin-top:-.5px;margin-left:-3px}.focus>.add-focus[data-v-be86b192]:after{width:1px;height:7px}", ""]);

// exports


/***/ }),

/***/ "Jz0k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue__ = __webpack_require__("QwqM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77dbc260_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityCenter_vue__ = __webpack_require__("Vr7L");
function injectStyle (ssrContext) {
  __webpack_require__("d3TQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77dbc260"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityCenter_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77dbc260_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityCenter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "On4r":
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
    global.activityMine = mod.exports;
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

  exports.default = {
    name: "activityMine",

    data: function data() {
      return {
        // isFocus: false // 是否已关注
        isLogin: this.ls.getItem('loginUserInfo') ? true : false
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
      goToDetail: function goToDetail(nid) {
        this.$router.push({
          name: 'eventDetails',
          query: {
            event: nid
          }
        });
      },
      focusOn: function focusOn(id) {
        var _this = this;

        // 判断用户是否登录
        if (!this.isLogin) {
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

/***/ "PCIh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-lists clearfix"},[_c('span',{staticClass:"activity-photo"},[_c('img',{staticClass:"img-responsive ac-img",attrs:{"src":_vm.activityObj.cover,"alt":_vm.activityObj.title}})]),_vm._v(" "),_c('div',{staticClass:"activity-info"},[_c('h3',{staticClass:"activity-title"},[_c('span',{staticClass:"activity-type",class:_vm.setDiffType(_vm.activityObj.type)},[_vm._v(_vm._s(_vm.activityObj.type))]),_vm._v(_vm._s(_vm.activityObj.title))]),_vm._v(" "),_c('div',{staticClass:"activity-content"},[_c('div',{staticClass:"content-details activity-sponsor"},[_vm._v(_vm._s(_vm.activityObj.organizers))]),_vm._v(" "),_c('div',{staticClass:"content-details activity-location"},[_vm._v(_vm._s(_vm.activityObj.location))]),_vm._v(" "),_c('div',{staticClass:"content-details activity-timer"},[_c('span',{staticClass:"ac-timer"},[_vm._v(_vm._s(_vm.activityObj.time))])])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.activityObj.isFocus),expression:"!activityObj.isFocus"}],staticClass:"focus-btn focus",on:{"click":function($event){$event.preventDefault();_vm.focusOn(_vm.activityObj.id)}}},[_c('i',{staticClass:"add-focus"}),_vm._v("关注")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.activityObj.isFocus),expression:"activityObj.isFocus"}],staticClass:"focus-btn focused",on:{"click":function($event){$event.preventDefault();_vm.focusOff(_vm.activityObj.id)}}},[_c('i',{staticClass:"iconfont icon-correct"}),_vm._v("取消关注")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "QwqM":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("//Fk"), __webpack_require__("EZvR"), __webpack_require__("NXlk"), __webpack_require__("jF92"), __webpack_require__("cXRq"), __webpack_require__("fc4D"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/promise'), require('../components/tabMenu'), require('../components/loadMore'), require('../components/activityItem'), require('../components/activitySmall'), require('../components/activityMine'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.promise, global.tabMenu, global.loadMore, global.activityItem, global.activitySmall, global.activityMine, global.api);
    global.activityCenter = mod.exports;
  }
})(this, function (module, exports, _promise, _tabMenu, _loadMore, _activityItem, _activitySmall, _activityMine, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _promise2 = _interopRequireDefault(_promise);

  var _tabMenu2 = _interopRequireDefault(_tabMenu);

  var _loadMore2 = _interopRequireDefault(_loadMore);

  var _activityItem2 = _interopRequireDefault(_activityItem);

  var _activitySmall2 = _interopRequireDefault(_activitySmall);

  var _activityMine2 = _interopRequireDefault(_activityMine);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 活动中心接口
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

  // tab切换
  exports.default = {
    name: "activityCenter",

    data: function data() {
      return {
        tabs: [{
          method: '',
          tabName: '活动中心'
        }, {
          method: '',
          tabName: '活动日历'
        }, {
          method: '',
          tabName: '我的活动'
        }],
        curtab: this.$route.query.isActive - 0 || 0,
        center: { // 活动中心
          allList: [], // 存储所有活动列表
          list: [], // 分页活动列表
          curr: 1, // 当前页
          totalNumb: 0, // 总页数
          perPage: 20,
          loading: true // 手机端是正否加载
        },
        calendar: { // 活动日历
          allTempList: [], // 缓存所有数据，用于按日筛选
          allList: [],
          list: [],
          curr: 1,
          totalNumb: 0,
          perPage: 16,
          showCal: true,
          showList: document.body.clientWidth < 768 ? false : true,
          calDay: { // 手机端选中日期
            title: '2018年1月1日', // 用于手机端显示
            date: '2018-1-1', // 选中日期
            eventindex: null // 选中日期在日历eventsList中的index
          },
          loading: true
          // centerLoading: true,
        },
        mine: { // 我的活动
          idList: [], // 存储我的活动id列表, 当从我的活动跳转到详情时，使用此id列表导航
          allList: [],
          list: [],
          curr: 1,
          totalNumb: 0,
          loading: true,
          perPage: 20 // 一次获取所有活动
        },
        perPage: 6,
        eventsList: [],
        isMob: this.$store.state.isMobile,
        isLogIn: this.ls.getItem('loginUserInfo')
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      tabMenu: _tabMenu2.default,
      loadMore: _loadMore2.default,
      activityItem: _activityItem2.default,
      activitySmall: _activitySmall2.default,
      activityMine: _activityMine2.default
    },

    computed: {},

    mounted: function mounted() {
      // this.getAllCenterList ();
      this.initActiveList();
    },


    methods: {
      initActiveList: function initActiveList() {
        // 初始化时获取活动中心数据
        this.$EventCalendar.resetCurrMonth();
        var date = this.initDate();
        this.initCenterList(date.monthStart, date.monthEnd);
        this.initCalendarList(date.monthStart, date.monthEnd);
        this.initMyEventsList();
      },
      initCenterList: function initCenterList(start, end) {
        var _this = this;

        // 获取活动中心全部数据
        this.center.loading = true;
        this.getAllCenterListByDate(start, end).then(function (data) {
          _this.center.allList = data;
          _this.center.totalNumb = Math.ceil(data.length / _this.center.perPage);
          _this.center.list = _this.getCenterList(1);
          _this.center.loading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.initCenterList(start, end);
              clearTimeout(t);
            }, 500);
          }
        });
      },
      initCalendarList: function initCalendarList(start, end) {
        var _this2 = this;

        // 获取活动日历全部数据
        this.calendar.loading = true;
        this.getAllCalendarListByDate(start, end).then(function (data) {
          _this2.calendar.allTempList = data;
          _this2.calendar.allList = data;
          _this2.calendar.curr = 1;
          _this2.calendar.totalNumb = Math.ceil(data.length / _this2.calendar.perPage);
          _this2.eventsList = _this2.collectEventsData(data);
          _this2.calendar.list = _this2.getCalendarList(1);
          _this2.$refs.calPager.init();
          _this2.calendar.loading = false;
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.initCalendarList(start, end);
              clearTimeout(t);
            }, 500);
          }
        });
      },
      initCalEventsList: function initCalEventsList(events) {
        // 初始化日历事件列表
        this.eventsList = events;
      },
      initMyEventsList: function initMyEventsList() {
        var _this3 = this;

        // 获取我的活动，需要登录
        if (this.isLogIn) {
          this.mine.loading = true;
          this.getAllMyEventsList().then(function (data) {
            _this3.mine.allList = data;
            _this3.mine.list = _this3.getMyEventsList(1);
            _this3.mine.loading = false;
            _this3.mine.totalNumb = Math.ceil(data.length / _this3.mine.perPage);
          }).catch(function (error) {
            console.log(error);
          });
        }
      },
      initDate: function initDate() {
        // 初始化日期
        var date = new Date();
        var date2 = new Date();
        // 当天日期 2018-03-03
        var curDate = self.utils.formatDate(date, '-').timerStr;
        date.setMonth(date.getMonth() - 1);
        // 距离当前前一个月的日期 2018-02-03
        var monthAgoDate = self.utils.formatDate(date, '-').timerStr;
        // date.setMonth(date.getMonth() + 1);
        // 获取当月长度 30/31/28
        var maxDay = new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
        date2.setDate(1);
        // 获取月初日期
        var monthStart = self.utils.formatDate(date2, '-').timerStr;
        date2.setDate(maxDay + 1);
        // 获取月末日期
        var monthEnd = self.utils.formatDate(date2, '-').timerStr;

        return {
          curDate: curDate,
          monthAgoDate: monthAgoDate,
          monthStart: monthStart,
          monthEnd: monthEnd
        };
      },

      // 关注活动后，更新其他标签
      focusOnUpdateList: function focusOnUpdateList(id) {
        // 活动中心：需要更新活动日历，我的活动
        if (this.curtab === 0) {
          // 如果不在我的活动tab,更新我的活动
          this.initMyEventsList();
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = true;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
        }
        // 活动日历：需要更新活动日历，活动中心，我的活动
        if (this.curtab === 1) {
          // 如果不在我的活动tab,更新我的活动
          this.initMyEventsList();
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = true;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
          this.center.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = true;
            }
          });
          this.center.list = this.getCenterList(this.center.curr);
        }
        // 我的活动：需要更新活动中心，活动日历
        if (this.curtab === 2) {
          this.center.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = true;
            }
          });
          this.center.list = this.getCenterList(this.center.curr);
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = true;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
        }
      },

      // 取消关注活动后，更新其他标签
      focusOffUpdateList: function focusOffUpdateList(id) {
        if (this.curtab === 0) {
          // 如果不在我的活动tab,更新我的活动
          this.initMyEventsList();
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = false;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
        }
        if (this.curtab === 1) {
          // 如果不在我的活动tab,更新我的活动
          this.initMyEventsList();
          this.center.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = false;
            }
          });
          this.center.list = this.getCenterList(this.center.curr);
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = false;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
        }
        if (this.curtab === 2) {
          for (var i = (this.mine.curr - 1) * this.mine.perPage, l = this.mine.allList.length; i < l; i++) {
            var element = this.mine.allList[i];
            if (id === element.id) {
              this.mine.allList.splice(i, 1);
              break;
            }
          }
          this.mine.list = this.getMyEventsList(this.mine.curr);
          this.center.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = false;
            }
          });
          this.center.list = this.getCenterList(this.center.curr);
          this.calendar.allList.map(function (item) {
            if (item.id === id) {
              item.isFocus = false;
            }
          });
          this.calendar.list = this.getCalendarList(this.calendar.curr);
        }
      },

      /**
       * 获取活动中心列表数据
       * @param {String} start: 开始日期 exp: '2018-03-01'
       * @param {String} end: 结束日期 exp: '2018-04-01'
       */
      getAllCenterListByDate: function getAllCenterListByDate(start, end) {
        var _this4 = this;

        return _api.activityCenter.getEventsMonth(start, end).then(function (data) {
          var res = data.result.datas;
          if (!res.length) return _promise2.default.resolve([]);
          return _promise2.default.resolve(_this4.resDataHandel(res));
        }).catch(function (error) {
          return _promise2.default.reject(error);
        });
      },

      /**
       * 获取活动日历列表数据
       * @param {Boolean} ismonth: 是否是按月获取数据
       * @param {String} start: 开始日期 exp: '2018-03-01'
       * @param {String} end: 结束日期 exp: '2018-04-01'
       */
      getAllCalendarListByDate: function getAllCalendarListByDate(start, end) {
        var _this5 = this;

        return _api.activityCenter.getEventsMonth(start, end).then(function (data) {
          var res = data.result.datas;
          if (!res.length) return _promise2.default.resolve([]);
          // 按月获取，需要展开数据
          return _promise2.default.resolve(_this5.calendarMonthDataHandel(res, { start: start, end: end }));
        }).catch(function (error) {
          return _promise2.default.reject(error);
        });
      },

      /**
       * 获取我的活动
       */
      getAllMyEventsList: function getAllMyEventsList() {
        var _this6 = this;

        return _api.activityCenter.getMyEvents(1, 10000).then(function (data) {
          var res = data.result.datas;
          if (!res.length) return _promise2.default.resolve([]);
          return _promise2.default.resolve(_this6.myEventsDataHandel(res));
        }).catch(function (error) {
          return _promise2.default.reject(error);
        });
      },

      /**@augments
       * 活动中心列表分页
       * @param {Number} index: 页码
       */
      getCenterList: function getCenterList(index) {
        this.center.curr = index;
        return this.center.allList.slice((index - 1) * this.center.perPage, index * this.center.perPage);
      },

      /**
       * 活动日期列表分页
       * @param {Number} index: 页码
       */
      getCalendarList: function getCalendarList(index) {
        this.calendar.curr = index;
        // let ls = this.calendar.allList.slice((index - 1) * this.calendar.perPage, index * this.calendar.perPage);
        return this.collectCalendarData(this.calendar.allList.slice((index - 1) * this.calendar.perPage, index * this.calendar.perPage));
      },

      /**
       * 我的活动列表分页
       * @param {Number} index: 页码
       */
      getMyEventsList: function getMyEventsList(index) {
        this.mine.curr = index;
        return this.mine.allList.slice((index - 1) * this.mine.perPage, index * this.mine.perPage);
      },
      loadMore: function loadMore(index) {
        // 手机端加载更多
        if (this.curtab === 0) {
          if (this.center.curr >= this.center.totalNumb) {
            // this.newsList = this.newsList.concat([]);
            return;
          } else {
            this.center.curr = index;
            // this.center.loading = true;
            this.center.list = this.center.list.concat(this.getCenterList(index));
            // this.center.loading = false;  
          }
        }
        if (this.curtab === 1) {
          if (this.calendar.curr >= this.calendar.totalNumb) {
            // this.newsList = this.newsList.concat([]);
            return;
          } else {
            this.calendar.curr = index;
            // this.calendar.loading = true;
            this.calendar.list = this.calendar.list.concat(this.getCalendarList(index));
            // this.calendar.loading = false;
          }
        }
        if (this.curtab === 2) {
          if (this.mine.curr >= this.mine.totalNumb) {
            // this.newsList = this.newsList.concat([]);
            return;
          } else {
            this.mine.curr = index;
            this.mine.loading = true;
            this.mine.list = this.mine.list.concat(this.getMyEventsList(index));
          }
        }
      },
      pageChange: function pageChange(index) {
        // pc分页
        window.scrollTo(0, 0);
        if (this.curtab === 0) {
          this.center.list = this.getCenterList(index);
        }
        if (this.curtab === 1) {
          this.calendar.list = this.getCalendarList(index);
        }
        if (this.curtab === 2) {
          this.mine.curr = index;
          this.mine.list = this.getMyEventsList(index);
        }
      },

      /**
       * Tab切换
       */
      changeTab: function changeTab(index) {
        this.curtab = index;
        // this.$router.push("activityCenter?isActive=" + index);
        this.$router.replace({
          // name: 'activityCenter',
          query: { isActive: index }
        });
      },

      /**
       * 日历换月
       * @param {Array} month: exp: '{cn:2018年03月}'
       */
      handleMonthChanged: function handleMonthChanged(month) {
        this.initCalEventsList([]);
        this.calendar.list.length = 0;
        this.calendar.totalNumb = 0;
        var date = getMonthStartEnd(month.cn);
        this.initCalendarList(date.mstart, date.mend);

        // 获取月初/月末Date
        function getMonthStartEnd(date) {
          // 2018年03月
          var arr = date.split('年');
          var year = arr[0] - 0;
          var mth = arr[1].split('月')[0];
          // let maxDay = (new Date(year, mth, 0)).getDate();
          var mstart = year + '-' + mth + '-' + '01'; // 月初 '2018-02-01'
          var mend = self.utils.formatDate(new Date(year, mth, 1), '-').timerStr; // 月末 '2018-03-01'
          return {
            mstart: mstart,
            mend: mend
          };
        }
      },

      /**
       * 日历点击日期
       * @param {Array} day: exp: '2018-03-03'
       */
      handleDayChanged: function handleDayChanged(day) {
        this.getDailyData(day.date);
      },
      backToCurrent: function backToCurrent(month) {
        var date = this.initDate();
        this.initCalendarList(date.monthStart, date.monthEnd);
      },

      /**
       * 选中日期，不请求服务器，从月数据里筛选
       * @param {Array} dayDate: exp: '2018-3-13'
       */
      getDailyData: function getDailyData(dayDate) {
        this.calendar.loading = true;
        if (this.isMob) {
          this.calendar.calDay.title = this.formateDate(dayDate, '-');
          this.calendar.calDay.date = dayDate;
          this.calendar.calDay.eventindex = this.calendar.calDay.eventindex === null ? this.getIndex(dayDate) : this.calendar.calDay.eventindex;
          this.calendar.showCal = false;
          this.calendar.showList = true;
        }
        this.calendar.allList = this.calendarDailyDataHandel(this.calendar.allTempList, dayDate);
        this.calendar.totalNumb = Math.ceil(this.calendar.allList.length / this.calendar.perPage);
        this.$refs.calPager.init();
        this.calendar.list = this.getCalendarList(1);
        this.calendar.loading = false;
      },

      /**
       * 手机端上一天活动
       */
      previousDay: function previousDay() {
        if (this.calendar.calDay.eventindex <= 0) {
          return;
        }
        this.getDailyData(this.eventsList[--this.calendar.calDay.eventindex].date);
      },

      /**
       * 手机端下一天活动
       */
      nextDay: function nextDay() {
        if (this.calendar.calDay.eventindex >= this.eventsList.length - 1) {
          return;
        }
        this.getDailyData(this.eventsList[++this.calendar.calDay.eventindex].date);
      },
      showCalendar: function showCalendar() {
        // 手机端显示和隐藏日历组件
        if (this.isMob) {
          this.calendar.showCal = true;
          this.calendar.showList = false;
          this.calendar.calDay.eventindex = null;
        }
      },
      formateDate: function formateDate(dateString, separator) {
        var temp = dateString.split(separator);
        return temp[0] + '年' + temp[1] + '月' + temp[2] + '日';
      },

      /**
       * 获取当前选中日期在eventsList中的index
       * @param {String} date: exp: '2018-3-03'
       */
      getIndex: function getIndex(date) {
        for (var i = 0, l = this.eventsList.length; i < l; i++) {
          var element = this.eventsList[i];
          if (date === element.date) {
            // console.log(i);
            return i;
          }
        }
        return false;
      },

      /**
       * 处理返回的数据,将数据转换为activityitem/activitysmall组件适用的对象格式
       * @param {Array} data: res.result.datas
       */
      resDataHandel: function resDataHandel(data) {
        var tempList = [];
        data.forEach(function (item) {
          tempList.push({
            id: item.id, // 活动详情页id
            // id: item.v2,
            cover: item.v7,
            title: item.v1,
            type: item.v5,
            isFocus: item.v8 ? item.v8 === 'false' ? false : true : false, // 判断是否已经关注
            organizers: '', // 实际暂无字段
            location: item.v6,
            time: self.utils.timerHandle(item.v3, item.v4)
          });
        });

        return tempList;
      },

      /**
       * 我的活动返回数据处理,将数据转换为activityitem/activitysmall组件适用的对象格式
       * @param {Array} data: res.result.datas
       */
      myEventsDataHandel: function myEventsDataHandel(data) {
        var _this7 = this;

        var tempList = [];
        this.mine.idList = [];
        this.ls.removeItem('myEvents');
        data.forEach(function (item) {
          _this7.mine.idList.push(item.v2);
          tempList.push({
            id: item.v2, // 活动详情页id
            // id: item.v2,
            cover: item.v11,
            title: item.v1,
            type: item.v5,
            isFocus: item.v8 ? item.v8 === '0' ? true : false : false, // 判断是否已经关注
            organizers: '', // 实际暂无字段
            location: item.v6,
            time: self.utils.timerHandle(item.v3, item.v4)
          });
        });
        // this.ls.setItem('myEvents', this.mine.idList);
        return tempList;
      },

      // 从我的活动跳转到活动详情
      goToMyEventsDetail: function goToMyEventsDetail(id) {
        this.ls.setItem('myEvents', this.mine.idList);
        this.$router.push({
          name: 'eventDetails',
          query: {
            f: '2',
            t: '2',
            event: id
          }
        });
      },

      /**
       *  按月返回的数据处理，由于有跨天的活动，所以需要处理活动日历数据,按日期展开ajax数据
       *  @param {Array} data: res.result.datas
       *  @param {Object} date: exp: {start:'2018-03-01', end:'2018-03-31'}
       */
      calendarMonthDataHandel: function calendarMonthDataHandel(data, date) {
        date.start = new Date((date.start + ' 00:00:00').replace(/\-/g, "/"));
        date.end = new Date((date.end + ' 00:00:00').replace(/\-/g, "/"));
        var temp = [];

        for (var j = 0, k = data.length; j < k; j++) {
          // const element = data[j];
          temp = temp.concat(spreadData(data[j]));
        }

        // temp.sort(function (a ,b) {
        //   return a.date < b.date ? 1 : -1
        // });
        // console.log(temp);
        return temp;

        // 判断活动是否跨天，如果是，则展开数据
        function spreadData(data) {
          var startTime = new Date(data.v3.replace(/\-/g, "/").slice(0, -2)),
              endTime = new Date(data.v4.replace(/\-/g, "/").slice(0, -2)),
              formatStart = '',
              formatEnd = '',
              tempList = [];
          if (Date.parse(endTime) < Date.parse(startTime)) {
            var tempTime = startTime;
            startTime = endTime;
            endTime = tempTime;
            formatStart = self.utils.formatDate(endTime, '-');
            formatEnd = self.utils.formatDate(startTime, '-');
          } else {
            formatStart = self.utils.formatDate(startTime, '-');
            formatEnd = self.utils.formatDate(endTime, '-');
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

            for (var _j = 0, l = e.getDate() - s.getDate() + 1; _j < l; _j++) {
              tempList.push({
                date: Date.parse(s.getFullYear() + '/' + (s.getMonth() + 1) + '/' + (s.getDate() + _j) + ' 00:' + _j + ':00'),
                header: s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + (s.getDate() + _j),
                //header: s.getFullYear() + '-' + self.utils.zeroPadding(s.getMonth() + 1) + '-' + self.utils.zeroPadding(s.getDate() + j),
                id: data.id, // 活动详情页id
                cover: data.v7,
                title: data.v1,
                type: data.v5,
                isFocus: data.v8 ? data.v8 === 'false' ? false : true : false, // 判断是否已经关注
                organizers: '', // 实际暂无v8字段
                location: data.v6,
                time: self.utils.timerHandle(data.v3, data.v4)
              });
            }

            return tempList;
          } else {
            // 同一天
            return [{
              date: Date.parse(data.v3.replace(/\-/g, "/").slice(0, -2)),
              header: startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + startTime.getDate(),
              id: data.id, // 活动详情页id
              cover: data.v7,
              title: data.v1,
              type: data.v5,
              isFocus: data.v8 ? data.v8 === 'false' ? false : true : false, // 判断是否已经关注
              organizers: '', // 实际暂无v8字段
              location: data.v6,
              time: self.utils.timerHandle(data.v3, data.v4)
            }];
          }
        }
      },

      /**
       *  按天返回数据处理, 不再请求服务器，从按月获取的数据中筛选
       *  @param {Array} data: 展开后的数据
       *  @param {Object} date: 2018-3-12'
       */
      calendarDailyDataHandel: function calendarDailyDataHandel(data, date) {
        var tempList = [];
        for (var i = 0, l = data.length; i < l; i++) {
          if (date === data[i].header) {
            tempList.push(data[i]);
          }
        }
        return tempList;
      },

      /**
       *  收集日历活动事件，只在按月查询时调用
       *  @param {Array} data: 展开后的数据
       */
      collectEventsData: function collectEventsData(data) {
        var events = []; // 日历活动提示
        var dates = []; // 保存日期列表
        for (var j = 0, k = data.length; j < k; j++) {
          var element = data[j];
          var dname = element.header;
          // let dname = element.time.split(' ')[0];
          if (!findDate(dname)) {
            dates.push(dname);
            findObj(dname);
          }
        }

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
      },

      /**
       *  活动日历数据按日分类
       *  @param {Array} data: 展开后的数据
       */
      collectCalendarData: function collectCalendarData(data) {
        var tempList = [];
        var dates = []; // 保存日期列表

        for (var j = 0, k = data.length; j < k; j++) {
          var element = data[j];
          var dname = element.header;
          // let dname = element.time.split(' ')[0];
          if (!findDate(dname)) {
            dates.push(dname);
            findObj(dname);
          }
        }

        return tempList; // 活动日历列表

        function parseDate(dateName) {
          // 处理日期(2018-03-03)
          var arr = dateName.split('-');
          return arr[0] + '年' + arr[1] + '月' + arr[2] + '日';
        }

        function findDate(dateName) {
          // 查找日期列表是否已经存储了日期
          if (dates.indexOf(dateName) < 0) {
            return false;
          }
          return true;
        }
        // 遍历列表找对象
        function findObj(dateName) {
          // let tempdate = data[0].time.split(' ')[0];  // 存储日期
          var tempitem = { // 按日期分组
            dateTitle: parseDate(dateName), // 分组标题头
            count: 0, // 分组数量
            list: [] // 分组数据
          };
          for (var i = 0, l = data.length; i < l; i++) {
            var item = data[i];
            if (item.header === dateName) {
              tempitem.list.push(item);
              tempitem.count++;
            }
          }
          tempList.push(tempitem);
        }
      },
      logIn: function logIn() {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: 'reload'
        });
        self.utils.modalOpenEvent(true);
        return;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "VdLZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".container[data-v-77dbc260]{padding-left:0;padding-right:0}@media only screen and (min-width:768px){.theactives[data-v-77dbc260]{margin-top:4px}}.theactives ul[data-v-77dbc260]{padding-left:0;margin-bottom:0}.theactives ul li[data-v-77dbc260]{list-style:none}.theactives .activecalendar[data-v-77dbc260]{padding-left:10px;padding-right:10px;margin-bottom:60px}.theactives .activecalendar .calendarlist[data-v-77dbc260]{margin-right:354px;padding-right:0}.theactives .activecalendar .calendarlist .calendartitle[data-v-77dbc260]{margin-top:30px;font-size:18px;color:#333}.theactives .activecalendar .calendarlist .calendartitle .calendardate[data-v-77dbc260]{padding-right:10px}@media only screen and (max-width:767px){.theactives .activecalendar .calendarlist[data-v-77dbc260]{margin-right:0;padding-right:0}}.theactives .activecalendar .calendarlist .dailynavigate[data-v-77dbc260]{height:36px;line-height:36px;background-color:#f2f4f6;text-align:center}.theactives .activecalendar .calendarlist .dailynavigate .curday[data-v-77dbc260]{font-size:15px;color:#333}.theactives .activecalendar .calendarlist .dailynavigate .nxtday[data-v-77dbc260],.theactives .activecalendar .calendarlist .dailynavigate .preday[data-v-77dbc260]{font-size:13px;color:#666}.theactives .activecalendar .calendarlist .dailynavigate .preday[data-v-77dbc260]{float:left}.theactives .activecalendar .calendarlist .dailynavigate .preday .iconfont[data-v-77dbc260]{padding-right:10px}.theactives .activecalendar .calendarlist .dailynavigate .nxtday[data-v-77dbc260]{float:right}.theactives .activecalendar .calendarlist .dailynavigate .nxtday .iconfont[data-v-77dbc260]{padding-left:10px}.theactives .activecalendar .calendarlist .dailyactives[data-v-77dbc260]{width:100%;float:left}@media only screen and (max-width:767px){.theactives .activecalendar .calendarlist .dailyactives[data-v-77dbc260]{padding-left:10px;padding-right:10px}}.theactives .activecalendar ul li[data-v-77dbc260]{padding:30px 0;border-bottom:1px solid #eee}@media only screen and (max-width:767px){.theactives .activecalendar ul li[data-v-77dbc260]{padding-top:17px;padding-bottom:15px}}@media only screen and (min-width:768px){.theactives .activecalendar ul li .activity-lists .activity-info[data-v-77dbc260]{width:380px!important}}.theactives .activecalendar .calendar[data-v-77dbc260]{margin-top:30px;float:right;width:344px;height:336px;border:1px solid #e0e0e0}@media only screen and (max-width:767px){.theactives .activecalendar .calendar[data-v-77dbc260]{margin-top:0;width:100%;border:none;border-bottom:1px solid #e0e0e0}}@media only screen and (max-width:767px){.theactives .activecalendar[data-v-77dbc260]{padding-left:0;padding-right:0}}@media only screen and (min-width:768px) and (max-width:1024px){.theactives .activecalendar[data-v-77dbc260]{padding-left:15px;padding-right:15px}}.theactives .activecenter[data-v-77dbc260],.theactives .activemy[data-v-77dbc260]{margin-bottom:60px}.theactives .activecenter .no-login[data-v-77dbc260],.theactives .activemy .no-login[data-v-77dbc260]{text-align:center}.theactives .activecenter .no-login .no-login-msg[data-v-77dbc260],.theactives .activemy .no-login .no-login-msg[data-v-77dbc260]{color:#999;font-size:14px}.theactives .activecenter ul[data-v-77dbc260],.theactives .activemy ul[data-v-77dbc260]{padding-left:10px;padding-right:10px}@media only screen and (min-width:768px) and (max-width:1024px){.theactives .activecenter ul[data-v-77dbc260],.theactives .activemy ul[data-v-77dbc260]{padding-left:15px;padding-right:15px}}.theactives .activecenter li[data-v-77dbc260],.theactives .activemy li[data-v-77dbc260]{width:50%;float:left;padding-bottom:35px;padding-top:30px;border-bottom:1px solid #eee}.theactives .activecenter li[data-v-77dbc260]:nth-child(odd),.theactives .activemy li[data-v-77dbc260]:nth-child(odd){padding-right:20px}.theactives .activecenter li[data-v-77dbc260]:nth-child(2n),.theactives .activemy li[data-v-77dbc260]:nth-child(2n){padding-left:20px}@media only screen and (max-width:767px){.theactives .activecenter li[data-v-77dbc260],.theactives .activemy li[data-v-77dbc260]{width:100%;padding-top:17px;padding-bottom:15px}.theactives .activecenter li[data-v-77dbc260]:nth-child(odd),.theactives .activemy li[data-v-77dbc260]:nth-child(odd){padding-right:0}.theactives .activecenter li[data-v-77dbc260]:nth-child(2n),.theactives .activemy li[data-v-77dbc260]:nth-child(2n){padding-left:0}}a[data-v-77dbc260]{text-decoration:none}.paging[data-v-77dbc260]{margin-top:60px}@media only screen and (max-width:767px){.paging[data-v-77dbc260]{display:none}}", ""]);

// exports


/***/ }),

/***/ "Vr7L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('tab-menu',{attrs:{"menuList":_vm.tabs,"defaultActive":_vm.curtab},on:{"currentActive":_vm.changeTab}}),_vm._v(" "),_c('div',{staticClass:"theactives clearfix"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.curtab === 0),expression:"curtab === 0"}],staticClass:"activecenter"},[(!_vm.center.list.length && !_vm.center.loading)?_c('none-data',{attrs:{"msg":"本月暂无活动"}}):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"clearfix"},_vm._l((_vm.center.list),function(item){return _c('li',{key:item.id},[_c('router-link',{attrs:{"to":{path: ("/index/eventDetails?f=2&t=0&event=" + (item.id))}}},[_c('activity-small',{attrs:{"activity-obj":item},on:{"focus-on":function($event){_vm.focusOnUpdateList(item.id)},"focus-off":function($event){_vm.focusOffUpdateList(item.id)}}})],1)],1)})),_vm._v(" "),_c('div',{staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.center.totalNumb,"current":_vm.center.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.center.curr,"total":_vm.center.totalNumb,"load":_vm.center.loading},on:{"more-data":_vm.loadMore}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.curtab===1),expression:"curtab===1"}],staticClass:"activecalendar"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.calendar.showCal),expression:"calendar.showCal"}],staticClass:"calendar clearfix"},[_c('vue-event-calendar',{attrs:{"events":_vm.eventsList},on:{"monthChanged":_vm.handleMonthChanged,"dayChanged":_vm.handleDayChanged,"backCurrent":_vm.backToCurrent}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.calendar.showList),expression:"calendar.showList"}],staticClass:"calendarlist clearfix"},[_c('div',{staticClass:"dailynavigate visible-xs"},[_c('span',{staticClass:"preday",on:{"click":_vm.previousDay}},[_c('i',{staticClass:" iconfont icon-arrow-left2"}),_vm._v("前一天")]),_vm._v(" "),_c('span',{staticClass:"curday",on:{"click":_vm.showCalendar}},[_vm._v(_vm._s(_vm.calendar.calDay.title))]),_vm._v(" "),_c('span',{staticClass:"nxtday",on:{"click":_vm.nextDay}},[_vm._v("后一天"),_c('i',{staticClass:" iconfont icon-arrow-right2"})])]),_vm._v(" "),_c('div',{staticClass:"clearfix"},[_c('none-data',{directives:[{name:"show",rawName:"v-show",value:(!_vm.calendar.list.length && !_vm.calendar.loading),expression:"!calendar.list.length && !calendar.loading"}],attrs:{"msg":"当前月暂无活动"}}),_vm._v(" "),_vm._l((_vm.calendar.list),function(item,index){return _c('div',{key:index,staticClass:"dailyactives"},[_c('div',{staticClass:"calendartitle hidden-xs"},[_c('span',{staticClass:"calendardate"},[_vm._v(_vm._s(item.dateTitle))]),_c('span',[_vm._v(_vm._s(item.count)+"场活动")])]),_vm._v(" "),_c('ul',{staticClass:"clearfix"},_vm._l((item.list),function(acts){return _c('li',{key:acts.id},[_c('router-link',{attrs:{"to":{path: ("/index/eventDetails?f=2&t=1&event=" + (acts.id))}}},[_c('activity-item',{attrs:{"activity-obj":acts},on:{"focus-on":function($event){_vm.focusOnUpdateList(acts.id)},"focus-off":function($event){_vm.focusOffUpdateList(acts.id)}}})],1)],1)}))])})],2),_vm._v(" "),_c('div',{staticClass:"paging"},[_c('pagination',{ref:"calPager",attrs:{"total":_vm.calendar.totalNumb,"current":_vm.calendar.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.calendar.curr,"total":_vm.calendar.totalNumb,"load":_vm.calendar.loading},on:{"more-data":_vm.loadMore}})],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.curtab === 2),expression:"curtab === 2"}],staticClass:"activemy"},[_c('none-data',{directives:[{name:"show",rawName:"v-show",value:(!_vm.mine.list.length && !_vm.mine.loading),expression:"!mine.list.length && !mine.loading"}],attrs:{"msg":"暂无关注的活动"}}),_vm._v(" "),(!_vm.isLogIn)?_c('div',{staticClass:"no-login"},[_c('none-data',{attrs:{"msg":""}}),_vm._v(" "),_c('div',{staticClass:"no-login-msg"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.logIn()}}},[_vm._v("登录")]),_vm._v("后查看关注的活动")])],1):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"clearfix"},_vm._l((_vm.mine.list),function(item,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{path: ("/index/eventDetails?f=2&t=2&event=" + (item.id))}}},[_c('activity-mine',{attrs:{"activity-obj":item},on:{"focus-off":function($event){_vm.focusOffUpdateList(item.id)}}})],1)],1)})),_vm._v(" "),_c('div',{staticClass:"paging"},[_c('pagination',{attrs:{"total":_vm.mine.totalNumb,"current":_vm.mine.curr},on:{"page-change":_vm.pageChange}})],1),_vm._v(" "),_c('load-more',{attrs:{"current":_vm.mine.curr,"total":_vm.mine.totalNumb,"load":_vm.mine.loading},on:{"more-data":_vm.loadMore}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bXdR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-6baca11c]{float:left!important}.pull-right[data-v-6baca11c]{float:right!important}.show[data-v-6baca11c]{display:block!important}.hidden[data-v-6baca11c]{display:none!important;visibility:hidden!important}.invisible[data-v-6baca11c]{visibility:hidden}.loading[data-v-6baca11c]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-6baca11c 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-6baca11c{0%{width:2px}to{width:15px}}a[data-v-6baca11c]{text-decoration:none}ol[data-v-6baca11c],ul[data-v-6baca11c]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-6baca11c],input[data-v-6baca11c]{-webkit-appearance:none}button[data-v-6baca11c]{border:none;background:none}input[data-v-6baca11c],input[data-v-6baca11c]:focus{outline:none}.none-data[data-v-6baca11c]{position:relative}.none-data[data-v-6baca11c]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-6baca11c]{border:1px solid #5390d7;color:#5390d7}.return[data-v-6baca11c]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-6baca11c]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-6baca11c]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-6baca11c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-6baca11c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-6baca11c]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-6baca11c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-6baca11c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-6baca11c]{color:#42a8dd}.not-overdue[data-v-6baca11c]{color:#5dc9a8}.overdue[data-v-6baca11c]{color:#f97f50}.overlay[data-v-6baca11c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-6baca11c]{padding-left:15px}.padMargin[data-v-6baca11c]{padding-right:15px;padding-left:15px}}.white-bg[data-v-6baca11c]{background-color:#fff}.vertical-top[data-v-6baca11c]{vertical-align:top}.vertical-middle[data-v-6baca11c]{vertical-align:middle}.vertical-center[data-v-6baca11c]{font-size:0;text-align:left}.vertical-center[data-v-6baca11c]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-6baca11c]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-6baca11c]{color:#fff}.swiper-button-next[data-v-6baca11c],.swiper-button-prev[data-v-6baca11c]{background-image:none}.swiper-button-next .iconfont[data-v-6baca11c],.swiper-button-prev .iconfont[data-v-6baca11c]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-6baca11c],.swiper-button-prev .iconfont[data-v-6baca11c]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-6baca11c],.swiper-button-prev .iconfont[data-v-6baca11c]{font-size:11px}}.list-container>li[data-v-6baca11c]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-6baca11c]{padding-bottom:31px}.list-container>li+li[data-v-6baca11c]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-6baca11c]{padding-bottom:15px}.list-container>li+li[data-v-6baca11c]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-6baca11c]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-6baca11c]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-6baca11c]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-6baca11c]{padding-bottom:16px}.has-right-column .calendar[data-v-6baca11c]{width:280px;height:254px}}.view-more[data-v-6baca11c]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-6baca11c]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-6baca11c]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-6baca11c]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-6baca11c]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-6baca11c]{display:none}.view-more .iconfont[data-v-6baca11c]{font-size:10px}}.about-content[data-v-6baca11c]{color:#666}.about-content>p[data-v-6baca11c]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-6baca11c]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-6baca11c]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-6baca11c]{padding-right:10px;padding-left:10px}.about-content>p[data-v-6baca11c]{font-size:13px;line-height:25px}.about-content>p+p[data-v-6baca11c]{margin-top:12px}}.component-menuInner.last1>a[data-v-6baca11c]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-6baca11c]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-6baca11c]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-6baca11c]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-6baca11c]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-6baca11c]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-6baca11c]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-6baca11c]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-6baca11c]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-6baca11c]{color:#5cc8a8}.component-menuInner a[data-v-6baca11c]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-6baca11c]{color:#4daada}.component-menuInner a p[data-v-6baca11c]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-6baca11c]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-6baca11c]{margin-top:20px}.component-menuInner a[data-v-6baca11c]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-6baca11c]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-6baca11c]{font-size:34px}.component-menuInner a p[data-v-6baca11c]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-6baca11c]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-6baca11c]{margin-top:10px}.component-menuInner a[data-v-6baca11c]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-6baca11c]{font-size:19px}.component-menuInner a p[data-v-6baca11c]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-6baca11c]{padding-right:15px;padding-left:15px}}.footer[data-v-6baca11c]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-6baca11c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-6baca11c]{position:relative}.eventAction[data-v-6baca11c]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-6baca11c .75s 0s linear infinite;animation:rotate-data-v-6baca11c .75s 0s linear infinite}.activity-lists[data-v-6baca11c]{display:block;position:relative;color:#959ca5}.activity-lists>.activity-info[data-v-6baca11c]{height:100%}.activity-lists>.activity-photo[data-v-6baca11c]{float:left}.activity-lists>.activity-photo .ac-img[data-v-6baca11c]{height:100%;object-fit:cover}.activity-lists .activity-title[data-v-6baca11c]{width:100%;margin-top:-3px;margin-bottom:0;color:#333;font-weight:400}.activity-lists .activity-type[data-v-6baca11c]{float:right;text-align:center;border-width:1px;border-style:solid;border-radius:3px}.activity-lists .type-exhibition[data-v-6baca11c]{color:#4bc3ce;border-color:#4bc3ce}.activity-lists .type-train[data-v-6baca11c]{color:#f6a623;border-color:#f6a623}.activity-lists .type-lecture[data-v-6baca11c]{color:#5390d7;border-color:#5390d7}@media only screen and (min-width:768px){.activity-lists[data-v-6baca11c]{height:86px}.activity-lists>.activity-photo[data-v-6baca11c]{width:139px;height:86px;overflow:hidden}.activity-lists .activity-info[data-v-6baca11c]{max-width:320px;display:block;margin-left:139px;position:relative;padding-left:20px;font-size:14px}.activity-lists .activity-title[data-v-6baca11c]{display:inline-block;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.activity-lists .activity-type[data-v-6baca11c]{width:34px;height:19px;margin-top:3px;margin-left:10px;font-size:12px}.activity-lists .activity-sponsor[data-v-6baca11c]{min-height:20px}.activity-lists .activity-timer[data-v-6baca11c]{padding-right:70px;height:24px;line-height:24px}.activity-lists .activity-timer .ac-timer[data-v-6baca11c]{display:inline-block;line-height:12px}}@media only screen and (max-width:767px){.activity-lists>.activity-photo[data-v-6baca11c]{width:132px;height:82px;border-radius:3px;overflow:hidden}.activity-lists .activity-info[data-v-6baca11c]{margin-left:142px;font-size:12px}.activity-lists .activity-title[data-v-6baca11c]{width:100%;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.activity-lists .activity-type[data-v-6baca11c]{width:32px;height:19px;margin-left:5px;font-size:12px}.activity-lists .content-details[data-v-6baca11c]{margin-top:2px}.activity-lists .activity-sponsor[data-v-6baca11c]{min-height:20px}.activity-lists .activity-timer[data-v-6baca11c]{padding-right:65px;height:24px;line-height:24px}.activity-lists .activity-timer .ac-timer[data-v-6baca11c]{display:inline-block;line-height:12px}}@media only screen and (min-width:768px) and (max-width:1023px){.activity-lists[data-v-6baca11c]{height:94px}.activity-lists>.activity-photo[data-v-6baca11c]{width:150px;height:94px}.activity-lists .activity-info[data-v-6baca11c]{display:block;padding-left:15px;margin-left:150px}.activity-lists .activity-title[data-v-6baca11c]{max-height:42px;font-size:15px;overflow:hidden}.activity-lists .activity-content[data-v-6baca11c]{font-size:13px}.activity-lists .activity-content>.content-details[data-v-6baca11c]{margin-top:0}}.focus[data-v-6baca11c]:focus,.focus[data-v-6baca11c]:hover{background-color:#4573ab;color:#fff}.focus:focus>.add-focus[data-v-6baca11c]:after,.focus:focus>.add-focus[data-v-6baca11c]:before,.focus:hover>.add-focus[data-v-6baca11c]:after,.focus:hover>.add-focus[data-v-6baca11c]:before{background-color:#fff}.focus-btn[data-v-6baca11c]{position:absolute;right:0;bottom:0;color:#4573ab;font-size:14px;border:1px solid #4573ab;background:none;border-radius:3px}@media only screen and (min-width:768px){.focus-btn[data-v-6baca11c]{padding:4px}.focus-btn>.iconfont[data-v-6baca11c]{font-size:7px}.focus-btn .add-focus[data-v-6baca11c]{vertical-align:2px}}@media only screen and (max-width:767px){.focus-btn[data-v-6baca11c]{padding:3px 2px 4px 0;font-size:12px}.focus-btn .add-focus[data-v-6baca11c]{vertical-align:1px}}.focus-btn.focused[data-v-6baca11c]{color:#64c1cf;border-color:#64c1cf}.focus-btn.focused>.icon-correct[data-v-6baca11c]{display:inline-block;font-size:7px;transform:scale(.7)}.focus-btn.focused>.icon-correct[data-v-6baca11c]:before{content:\"\\E64D\"}.focus-btn.focused[data-v-6baca11c]:focus,.focus-btn.focused[data-v-6baca11c]:hover{background-color:#64c1cf;color:#fff}.focus>.add-focus[data-v-6baca11c]{position:relative;display:inline-block;width:7px;height:7px;margin-right:9px}.focus>.add-focus[data-v-6baca11c]:after,.focus>.add-focus[data-v-6baca11c]:before{content:\"\";position:absolute;background-color:#4573ab}.focus>.add-focus[data-v-6baca11c]:before{width:7px;height:1px;top:50%;left:50%;margin-top:-.5px;margin-left:-3px}.focus>.add-focus[data-v-6baca11c]:after{width:1px;height:7px}", ""]);

// exports


/***/ }),

/***/ "cXRq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue__ = __webpack_require__("n0w1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be86b192_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activitySmall_vue__ = __webpack_require__("0zE7");
function injectStyle (ssrContext) {
  __webpack_require__("z4VY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-be86b192"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activitySmall_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be86b192_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activitySmall_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "d3TQ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("VdLZ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("feca0b40", content, true, {});

/***/ }),

/***/ "fc4D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue__ = __webpack_require__("On4r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6baca11c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityMine_vue__ = __webpack_require__("PCIh");
function injectStyle (ssrContext) {
  __webpack_require__("+/St")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6baca11c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activityMine_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6baca11c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activityMine_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "n0w1":
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
    global.activitySmall = mod.exports;
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

  exports.default = {
    name: "activitySmall",

    data: function data() {
      return {
        // isFocus: false // 是否已关注
        isLogin: this.ls.getItem('loginUserInfo') ? true : false
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
      goToDetail: function goToDetail(nid) {
        this.$router.push({
          name: 'eventDetails',
          query: {
            event: nid
          }
        });
      },
      focusOn: function focusOn(id) {
        var _this = this;

        // 判断用户是否登录
        if (!this.isLogin) {
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

/***/ "z4VY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("I9Gm");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("36e5526a", content, true, {});

/***/ })

});
//# sourceMappingURL=4.58360497fa973b20e947.js.map