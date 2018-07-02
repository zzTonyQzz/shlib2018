/*! vue-cli-xiaxs */
webpackJsonp([24],{

/***/ "I+xn":
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
    global.eventDetails = mod.exports;
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
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "eventDetails",

    data: function data() {
      return {
        isLogin: this.ls.getItem('loginUserInfo') ? true : false,
        event: {
          id: this.$route.query.event,
          title: '',
          type: '',
          isFocus: true,
          location: '',
          time: '',
          content: '',
          isLogin: this.ls.getItem('loginUserInfo') ? true : false
        },
        idList: JSON.parse(this.ls.getItem('myEvents')) || [],
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
      this.initDetail();
    },


    methods: {
      initDetail: function initDetail() {
        var id = this.$route.query.event;
        var f = this.$route.query.f;
        var t = this.$route.query.t;
        if (f === '2' && t === '2') {
          // 表示从'我的活动'页跳转过来
          this.getEventDetails = this.getEventDetailsByID;
        } else {
          this.getEventDetails = this.getEventDetailsNavi;
        }
        if (id) {
          this.getEventDetails(id);
        } else {
          this.$router.push({
            name: 'activityCenter',
            query: { isActive: 0 }
          });
        }
      },
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
      getEventDetails: function getEventDetails() {},
      getEventDetailsByID: function getEventDetailsByID(id) {
        var _this = this;

        // 不带导航,返回一个值,从我的活动页跳转到详情时，使用此方法，使用localstorage存储的id列表导航
        this.loading = true;
        _api.activityCenter.getEventDetailByID(id).then(function (data) {
          var res = data.result.datas;
          if (!res.length) {
            return;
          }
          _this.DataHandel(id);
          _this.event = _this.resDataHandel(res[0]);
          _this.loading = false;
          window.scrollTo(0, 0);
        }).catch(function (error) {
          console.log(error);
        });
      },
      getEventDetailsNavi: function getEventDetailsNavi(id) {
        var _this2 = this;

        // 带导航，返回三个值
        this.loading = true;
        _api.activityCenter.naviEventsInfo(id).then(function (data) {
          var res = data.result.datas;
          if (!res.length) {
            return;
          }
          _this2.event = _this2.resDataHandel(_this2.naviDataHandel(id, res));
          _this2.loading = false;
          window.scrollTo(0, 0);
        }).catch(function (error) {
          console.log(error);
        });
      },
      resDataHandel: function resDataHandel(data) {
        // 返回数据二次处理,用于展示
        return {
          id: data.id,
          title: data.v1,
          type: data.v5,
          isFocus: data.v8 ? data.v8 === 'false' ? false : true : false, // 判断是否已经关注,
          location: data.v6,
          time: self.utils.timerHandle(data.v3, data.v4),
          img: data.v7,
          content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
        };
      },

      // 非导航接口前后导航数据处理
      DataHandel: function DataHandel(id) {
        var i = this.idList.indexOf(id + '');
        // let l = this.idList.length;
        this.previous = this.idList[i - 1] ? this.idList[i - 1] : 'first';
        this.next = this.idList[i + 1] ? this.idList[i + 1] : 'last';
      },

      // 导航接口前后导航数据处理
      naviDataHandel: function naviDataHandel(id, data) {
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
      goToActivityList: function goToActivityList() {
        // 返回活动列表
        // this.$router.push({
        //   name: 'activityCenter',
        //   query: {isActive: 0}
        // });
        if (!this.$route.query.f) {
          // 跳转到首页
          this.$router.push({
            name: 'homePage'
          });
          return;
        }
        if (this.$route.query.f === '2') {
          // 跳转到活动中心页
          this.$router.push({
            name: 'activityCenter',
            query: {
              isActive: this.$route.query.t
            }
          });
        } else {
          this.$router.push({
            name: 'activityCenter',
            query: { isActive: 0 }
          });
        }
        // this.$router.go(-1);
      },
      focusOn: function focusOn(id) {
        // 关注
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
          self.event.isFocus = true;
          // console.log('关注');
        }).catch(function (error) {
          console.log(error);
        });
      },
      focusOff: function focusOff(id) {
        // 取消关注
        _api.activityCenter.removeMyEvents(id).then(function () {
          self.event.isFocus = false;
          // console.log('取消关注');
        }).catch(function (error) {
          console.log(error);
        });
      },
      goToNext: function goToNext() {
        // 上一个
        this.naviByID(this.next);
      },
      goToPrevious: function goToPrevious() {
        // 下一个
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
        if (!this.$route.query.f) {
          this.$router.replace({
            query: {
              event: id
            }
          });
        }
        if (this.$route.query.f === '2') {
          this.$router.replace({
            query: {
              f: this.$route.query.f,
              t: this.$route.query.t,
              event: id
            }
          });
        }
        this.getEventDetails(id);
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

/***/ "P8bK":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".eventTitle[data-v-79d30270]{position:relative;padding-bottom:15px;border-bottom:1px solid #e0e5e8}.eventTitle .top[data-v-79d30270]{font-size:22px;margin-right:80px}.eventTitle .top .title[data-v-79d30270]{float:left;max-width:85%;margin-top:0;margin-bottom:0;height:29px;line-height:29px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:767px){.eventTitle .top .title[data-v-79d30270]{font-size:16px}}.eventTitle .top .type[data-v-79d30270]{float:left;width:34px;height:19px;line-height:19px;margin-top:5px;margin-left:10px;font-size:12px;text-align:center;border-radius:3px;border:1px solid #959ca5}.eventTitle .top .type-exhibition[data-v-79d30270]{color:#4bc3ce;border-color:#4bc3ce}.eventTitle .top .type-train[data-v-79d30270]{color:#f6a623;border-color:#f6a623}.eventTitle .top .type-lecture[data-v-79d30270]{color:#5390d7;border-color:#5390d7}@media only screen and (max-width:767px){.eventTitle[data-v-79d30270]{margin-top:20px;padding-bottom:0;border-bottom:none}.eventTitle .top[data-v-79d30270]{margin-right:0}}.eventTitle .msg[data-v-79d30270]{font-size:14px;color:#959ca5;margin-top:18px}.eventTitle .msg .location[data-v-79d30270]{margin-bottom:8px}.eventTitle .msg .iconfont[data-v-79d30270]{font-size:12px;color:#888;padding-right:10px}@media only screen and (max-width:767px){.eventTitle .msg[data-v-79d30270]{margin-top:12px}.eventTitle .msg .location[data-v-79d30270]{margin-bottom:4px}}.eventTitle .btn[data-v-79d30270]{position:absolute;font-size:14px;background:none;padding:4px 12px;-webkit-appearance:none;border-style:solid;border-width:1px}@media only screen and (min-width:768px){.eventTitle .btn[data-v-79d30270]{top:0;right:0;border-radius:3px}}@media only screen and (max-width:767px){.eventTitle .btn[data-v-79d30270]{font-size:12px;padding:3px 6px 3px 5px;vertical-align:0;right:0;bottom:0;border-radius:0}}.eventTitle .focus[data-v-79d30270]{color:#64c1cf;border-color:#64c1cf}.eventTitle .focus>.icon-correct[data-v-79d30270]{display:inline-block;font-size:7px;transform:scale(.7)}.eventTitle .focus>.icon-correct[data-v-79d30270]:before{content:\"\\E64D\"}.eventTitle .focus[data-v-79d30270]:focus,.eventTitle .focus[data-v-79d30270]:hover{background-color:#64c1cf;color:#fff}.eventTitle .unfocus[data-v-79d30270]{color:#4573ab;border-color:#4573ab}.eventTitle .unfocus .add[data-v-79d30270]{position:relative;display:inline-block;width:7px;height:7px;margin-right:9px;vertical-align:2px}.eventTitle .unfocus .add[data-v-79d30270]:before{content:\"\";position:absolute;background-color:#4573ab;width:7px;height:1px;top:50%;left:50%;margin-top:-.5px;margin-left:-3px}.eventTitle .unfocus .add[data-v-79d30270]:after{content:\"\";position:absolute;background-color:#4573ab;width:1px;height:7px}@media only screen and (max-width:767px){.eventTitle .unfocus .add[data-v-79d30270]{vertical-align:0}}.eventTitle .unfocus[data-v-79d30270]:focus,.eventTitle .unfocus[data-v-79d30270]:hover{background-color:#4573ab;color:#fff}.eventTitle .unfocus:focus>.add[data-v-79d30270]:after,.eventTitle .unfocus:focus>.add[data-v-79d30270]:before,.eventTitle .unfocus:hover>.add[data-v-79d30270]:after,.eventTitle .unfocus:hover>.add[data-v-79d30270]:before{background-color:#fff}.eventContent[data-v-79d30270]{margin-top:20px}.eventContent .contentimg img[data-v-79d30270]{max-width:100%}.eventContent .content[data-v-79d30270]{margin-top:15px}.eventContent .content p[data-v-79d30270]{text-indent:2em;font-size:14px;color:#666;line-height:28px}@media only screen and (max-width:767px){.eventContent[data-v-79d30270]{margin-left:-15px;margin-right:-15px;height:calc(100vh - 265px);overflow:scroll}}.detail-note[data-v-79d30270]{position:fixed;top:50%;left:0;width:100%;text-align:center}.detail-note .detail-msg[data-v-79d30270]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}", ""]);

// exports


/***/ }),

/***/ "to2N":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("P8bK");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("005527a6", content, true, {});

/***/ }),

/***/ "ubyA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('bread-crumb'),_vm._v(" "),_c('div',{staticClass:"eventDetail"},[_c('div',{staticClass:"eventTitle"},[_c('div',{staticClass:"top clearfix"},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(_vm.event.title))]),_vm._v(" "),_c('span',{staticClass:"type",class:_vm.setDiffType(_vm.event.type)},[_vm._v(_vm._s(_vm.event.type))])]),_vm._v(" "),_c('div',{staticClass:"msg"},[_c('div',{staticClass:"location"},[_c('i',{staticClass:"iconfont icon-location"}),_vm._v(_vm._s(_vm.event.location))]),_vm._v(" "),_c('div',{staticClass:"time"},[_c('i',{staticClass:"iconfont icon-clock-normal"}),_vm._v(_vm._s(_vm.event.time))])]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.event.isFocus),expression:"!event.isFocus"}],staticClass:"btn unfocus",on:{"click":function($event){$event.preventDefault();_vm.focusOn(_vm.event.id)}}},[_c('i',{staticClass:"add"}),_vm._v("关注")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.event.isFocus),expression:"event.isFocus"}],staticClass:"btn focus",on:{"click":function($event){$event.preventDefault();_vm.focusOff(_vm.event.id)}}},[_c('i',{staticClass:"iconfont icon-correct"}),_vm._v("已关注")])]),_vm._v(" "),_c('div',{staticClass:"eventContent"},[_c('div',{staticClass:"contentimg",attrs:{"align":"center"}},[_c('img',{attrs:{"src":_vm.event.img,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',[_vm._v(_vm._s(_vm.event.content))])])])]),_vm._v(" "),_c('next-previous',{on:{"go-list":_vm.goToActivityList,"go-previous":_vm.goToPrevious,"go-next":_vm.goToNext}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"detail-note"},[_c('span',{staticClass:"detail-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "uvvJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue__ = __webpack_require__("I+xn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79d30270_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eventDetails_vue__ = __webpack_require__("ubyA");
function injectStyle (ssrContext) {
  __webpack_require__("to2N")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79d30270"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eventDetails_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79d30270_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eventDetails_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=24.b37390b84e94bd71c1e9.js.map