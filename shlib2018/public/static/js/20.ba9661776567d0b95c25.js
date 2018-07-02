/*! vue-cli-xiaxs */
webpackJsonp([20],{

/***/ "1CT9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-recommended"},[_c('div',{staticClass:"recommended"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('column-title',{attrs:{"column-title":_vm.recommendedTitle}}),_vm._v(" "),_c('div',{staticClass:"foreword",staticStyle:{"display":"none"}},[_c('span',{staticClass:"foreword-btn"},[_vm._v("卷首语")]),_c('em',[_vm._v(_vm._s(_vm.foreword))])]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('ul',{staticClass:"search-result-lists padMargin row"},_vm._l((_vm.searchResultList),function(item,index){return _c('router-link',{key:index,staticClass:"col-xs-4 col-sm-12",attrs:{"tag":"li","to":{path: ("/eBook/eBookDetails?type=epub&bid=" + (item.fbookid))}}},[_c('div',{staticClass:"component-book-info clearfix"},[_c('span',{staticClass:"book-cover"},[_c('img',{staticClass:"img-responsive",attrs:{"src":item.fcover,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"book-about"},[_c('h3',{staticClass:"book-name"},[_vm._v(_vm._s(item.ftitle))]),_vm._v(" "),_c('div',{staticClass:"book-author-publish hidden-xs"},[_c('p',[_c('i',{staticClass:"iconfont icon-user-avatar"}),_vm._v(_vm._s(item.fauthor))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-chubanshe"}),_vm._v(_vm._s(item.fpublisher)+"\n                      "),(item.fpublishdate)?[_vm._v("\n                        | "+_vm._s(item.fpublishdate)+"年\n                      ")]:_vm._e()],2)]),_vm._v(" "),_c('p',{staticClass:"book-intro hidden-xs"},[_vm._v("\n                    "+_vm._s(item.fsummary)+"\n                  ")])])])])}))]),_vm._v(" "),_c('next-previous',{attrs:{"navObj":_vm.navObj},on:{"go-previous":_vm.prevSeason,"go-next":_vm.nextSeason,"go-list":_vm.returnPrevPage}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNote),expression:"showNote"}],staticClass:"detail-note"},[_c('span',{staticClass:"detail-msg"},[_vm._v(_vm._s(_vm.noteMsg))])])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5vdg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue__ = __webpack_require__("Q0Ho");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7662f2b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommended_vue__ = __webpack_require__("1CT9");
function injectStyle (ssrContext) {
  __webpack_require__("zixF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7662f2b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommended_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7662f2b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommended_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Q0Ho":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("D7Ex"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../components/nextPrevious'), require('../server/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.nextPrevious, global.api);
    global.recommended = mod.exports;
  }
})(this, function (module, exports, _nextPrevious, _api) {
  'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: "recommended",

    data: function data() {
      return {
        navObj: {
          previous: '上一期',
          next: '下一期'
        },
        recommendedTitle: '', // 季期标题
        foreword: '', // 卷首语

        // 推荐列表
        searchResultList: [], // 推荐内容列表
        queryParams: {},
        // latest: 0,  // 最新季期
        currSid: this.$route.query.sid || 0, // 当前季期
        currIndex: 0,
        allSids: [], // 存储所有季id
        loading: true,
        showNote: false,
        noteMsg: ''
      };
    },


    // watch: {
    //   currSid (newVal, oldVal) {
    //     self.currSid = newVal;
    //     self.getResommended();
    //   }
    // },

    created: function created() {
      self = this;
    },


    components: {
      nextPrevious: _nextPrevious2.default
    },

    mounted: function mounted() {
      self.getAllPastList();
    },


    methods: {
      getResommended: function getResommended(sid) {
        var _this = this;

        this.loading = true;
        _api.resommended.getWeeklyId(sid).then(function (res) {
          var data = res.result.datas;
          var seationInfo = data[0];
          self.searchResultList = [];
          self.recommendedTitle = seationInfo.v7 + ' ' + seationInfo.v3;
          self.foreword = seationInfo.v8 || '暂无卷首语';
          _this.loading = false;
          var bookidArr = [];
          data.map(function (item) {
            var params = {
              keyword: item.v4
            };
            _api.ebookSearch.equbSearch(params).then(function (res) {
              var inner = res.result.lst[0];
              if (!self.utils.isEmpty(inner)) {
                bookidArr.push(inner);
              }
            });
          });
          setTimeout(function () {
            var tempArr = bookidArr.map(function (item, index) {
              var sidPath = item.fresid.split("_")[0];

              return {
                fcover: '' + self.$store.state.bookCoverUrl + sidPath + '/' + item.fbookid + '.jpg' || self.$store.state.defaultBookCover,
                ftitle: item.ftitle.replace('=', ' '),
                fresid: item.fresid,
                fbookid: item.fbookid,
                fauthor: item.fauthor,
                fpublisher: item.fpublisher,
                fpublishdate: item.fpublishdate,
                fsummary: self.utils.replacePunctuation(decodeURIComponent(item.fsummary)) || '暂无简介',
                fcommonclass: item.fcommonclass
              };
            });

            self.searchResultList = tempArr;
          }, 2000);
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getResommended();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getAllPastList: function getAllPastList() {
        var _this2 = this;

        // 获取所有季id(接口没有分页)
        this.loading = true;
        _api.resommended.getWeeklyPastList().then(function (data) {
          var res = data.result.datas;
          if (!res.length) {
            return;
          }
          _this2.getResommended(_this2.currSid);

          _this2.allSids = _this2.collectSids(res);
          _this2.currIndex = _this2.getIDIndex(_this2.currSid);
          // if (this.allSids.length) {
          //   this.latest = data.result.datas[0].v2;
          // }
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              _this2.getAllPastList();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getIDIndex: function getIDIndex(sid) {
        return this.allSids.indexOf(sid);
      },
      collectSids: function collectSids(data) {
        // 收集所有季id
        var tempids = [];
        data.map(function (item) {
          tempids.unshift(item.v2);
        });
        return tempids;
      },
      prevSeason: function prevSeason() {
        // 前一季
        this.navBySID(--this.currIndex);
      },
      nextSeason: function nextSeason() {
        // 后一季
        this.navBySID(++this.currIndex);
      },

      // 返回列表页
      returnPrevPage: function returnPrevPage() {
        self.$router.back();
      },
      navBySID: function navBySID(index) {
        // console.log(index)
        if (this.loading) {
          return;
        }
        if (index < 0) {
          // console.log('已是第一期了');
          this.showMsg('已是第一期了');
          this.currIndex = 0;
          return;
        }
        if (index > this.allSids.length - 1) {
          // console.log('已是最后一期了')
          this.showMsg('已是最后一期了');
          this.currIndex = this.allSids.length - 1;
          return;
        }
        var sid = this.allSids[index];
        this.$router.replace({
          query: {
            sid: sid
          }
        });
        this.getResommended(sid);
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
  module.exports = exports['default'];
});

/***/ }),

/***/ "vXYh":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-7662f2b8]{float:left!important}.pull-right[data-v-7662f2b8]{float:right!important}.show[data-v-7662f2b8]{display:block!important}.hidden[data-v-7662f2b8]{display:none!important;visibility:hidden!important}.invisible[data-v-7662f2b8]{visibility:hidden}.loading[data-v-7662f2b8]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-7662f2b8 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-7662f2b8{0%{width:2px}to{width:15px}}a[data-v-7662f2b8]{text-decoration:none}ol[data-v-7662f2b8],ul[data-v-7662f2b8]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-7662f2b8],input[data-v-7662f2b8]{-webkit-appearance:none}button[data-v-7662f2b8]{border:none;background:none}input[data-v-7662f2b8],input[data-v-7662f2b8]:focus{outline:none}.none-data[data-v-7662f2b8]{position:relative}.none-data[data-v-7662f2b8]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-7662f2b8]{border:1px solid #5390d7;color:#5390d7}.return[data-v-7662f2b8]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-7662f2b8]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-7662f2b8]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-7662f2b8]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-7662f2b8]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-7662f2b8]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-7662f2b8]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-7662f2b8]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-7662f2b8]{color:#42a8dd}.not-overdue[data-v-7662f2b8]{color:#5dc9a8}.overdue[data-v-7662f2b8]{color:#f97f50}.overlay[data-v-7662f2b8]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-7662f2b8]{padding-left:15px}.padMargin[data-v-7662f2b8]{padding-right:15px;padding-left:15px}}.white-bg[data-v-7662f2b8]{background-color:#fff}.vertical-top[data-v-7662f2b8]{vertical-align:top}.vertical-middle[data-v-7662f2b8]{vertical-align:middle}.vertical-center[data-v-7662f2b8]{font-size:0;text-align:left}.vertical-center[data-v-7662f2b8]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-7662f2b8]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-7662f2b8]{color:#fff}.swiper-button-next[data-v-7662f2b8],.swiper-button-prev[data-v-7662f2b8]{background-image:none}.swiper-button-next .iconfont[data-v-7662f2b8],.swiper-button-prev .iconfont[data-v-7662f2b8]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-7662f2b8],.swiper-button-prev .iconfont[data-v-7662f2b8]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-7662f2b8],.swiper-button-prev .iconfont[data-v-7662f2b8]{font-size:11px}}.list-container>li[data-v-7662f2b8]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-7662f2b8]{padding-bottom:31px}.list-container>li+li[data-v-7662f2b8]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-7662f2b8]{padding-bottom:15px}.list-container>li+li[data-v-7662f2b8]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-7662f2b8]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-7662f2b8]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-7662f2b8]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-7662f2b8]{padding-bottom:16px}.has-right-column .calendar[data-v-7662f2b8]{width:280px;height:254px}}.view-more[data-v-7662f2b8]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-7662f2b8]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-7662f2b8]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-7662f2b8]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-7662f2b8]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-7662f2b8]{display:none}.view-more .iconfont[data-v-7662f2b8]{font-size:10px}}.about-content[data-v-7662f2b8]{color:#666}.about-content>p[data-v-7662f2b8]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-7662f2b8]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-7662f2b8]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-7662f2b8]{padding-right:10px;padding-left:10px}.about-content>p[data-v-7662f2b8]{font-size:13px;line-height:25px}.about-content>p+p[data-v-7662f2b8]{margin-top:12px}}.component-menuInner.last1>a[data-v-7662f2b8]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-7662f2b8]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-7662f2b8]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-7662f2b8]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-7662f2b8]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-7662f2b8]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-7662f2b8]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-7662f2b8]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-7662f2b8]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-7662f2b8]{color:#5cc8a8}.component-menuInner a[data-v-7662f2b8]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-7662f2b8]{color:#4daada}.component-menuInner a p[data-v-7662f2b8]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-7662f2b8]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-7662f2b8]{margin-top:20px}.component-menuInner a[data-v-7662f2b8]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-7662f2b8]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-7662f2b8]{font-size:34px}.component-menuInner a p[data-v-7662f2b8]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-7662f2b8]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-7662f2b8]{margin-top:10px}.component-menuInner a[data-v-7662f2b8]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-7662f2b8]{font-size:19px}.component-menuInner a p[data-v-7662f2b8]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-7662f2b8]{padding-right:15px;padding-left:15px}}.footer[data-v-7662f2b8]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-7662f2b8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-7662f2b8]{position:relative}.eventAction[data-v-7662f2b8]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-7662f2b8 .75s 0s linear infinite;animation:rotate-data-v-7662f2b8 .75s 0s linear infinite}.component-book-info[data-v-7662f2b8]{display:block;color:#959ca5}.component-book-info .book-cover[data-v-7662f2b8]{box-shadow:0 0 35px rgba(0,0,0,.13)}.component-book-info .book-cover>img[data-v-7662f2b8]{display:block;width:auto;height:100%;margin:0 auto}.component-book-info .book-about[data-v-7662f2b8]{position:relative}.component-book-info .book-name[data-v-7662f2b8]{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.component-book-info .book-intro[data-v-7662f2b8]{position:absolute;bottom:-2px;margin-top:0;margin-bottom:0}.component-book-info .publish-year[data-v-7662f2b8]{position:relative;padding-left:16px}.component-book-info .publish-year[data-v-7662f2b8]:before{content:\"\";position:absolute;top:50%;left:8px;width:1px;height:12px;margin-top:-6px;background-color:#959ca5}@media only screen and (min-width:768px){.component-book-info[data-v-7662f2b8]{height:200px;margin-bottom:40px;cursor:pointer}.component-book-info .book-cover[data-v-7662f2b8]{float:left;width:161px;height:100%}.component-book-info .book-cover>img[data-v-7662f2b8]{display:block;width:100%;height:100%}.component-book-info .book-about[data-v-7662f2b8]{height:100%;margin-left:191px}.component-book-info .book-name[data-v-7662f2b8]{position:relative;top:-3px;margin-top:0;font-size:18px}.component-book-info .book-author-publish[data-v-7662f2b8]{margin-top:-6px}.component-book-info .book-author-publish>p[data-v-7662f2b8]{margin-top:6px;margin-bottom:0;white-space:nowrap}.component-book-info .book-intro[data-v-7662f2b8]{max-width:100%;max-height:60px;height:60px;overflow:hidden}.component-book-info .iconfont[data-v-7662f2b8]{margin-right:9px}.component-book-info .icon-chubanshe[data-v-7662f2b8]{font-size:13px}}@media only screen and (max-width:767px){.component-book-info[data-v-7662f2b8]{margin-bottom:18px}.component-book-info .book-cover[data-v-7662f2b8]{display:block;width:97px;height:120.5px}.component-book-info .book-name[data-v-7662f2b8]{margin-top:12px;margin-bottom:6px;font-size:13px}.component-book-info .book-type[data-v-7662f2b8]{font-size:11px;color:#959ca5}}@media only screen and (min-width:768px){.search-result-lists>li[data-v-7662f2b8]{padding-right:0;padding-left:0}.search-result-lists>li+li[data-v-7662f2b8]{margin-top:30px;padding-top:30px;border-top:1px solid #e0e5e8}.search-result-lists .component-book-info[data-v-7662f2b8]{margin-bottom:0}}.foreword[data-v-7662f2b8]{color:#999}.foreword>em[data-v-7662f2b8]{font-style:normal}.foreword .foreword-btn[data-v-7662f2b8]{display:inline-block;color:#5390d7;border:1px solid #5390d7;text-align:center;border-radius:2px}@media only screen and (min-width:768px){.foreword[data-v-7662f2b8]{margin-bottom:36px;line-height:22px;font-size:12px}.foreword .foreword-btn[data-v-7662f2b8]{width:45px;height:18px;margin-right:9px;font-size:12px;line-height:16px}}@media only screen and (max-width:768px){.foreword[data-v-7662f2b8]{padding:0 15px 17px;font-size:13px;line-height:21px}.foreword .foreword-btn[data-v-7662f2b8]{width:42px;height:17.5px;margin-right:5px;font-size:11px;line-height:15px}}@media only screen and (min-width:768px){.pagination-wrap[data-v-7662f2b8]{margin-top:60px}}.detail-note[data-v-7662f2b8]{position:fixed;top:50%;left:0;width:100%;text-align:center}.detail-note .detail-msg[data-v-7662f2b8]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}", ""]);

// exports


/***/ }),

/***/ "zixF":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vXYh");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("91c4de90", content, true, {});

/***/ })

});
//# sourceMappingURL=20.ba9661776567d0b95c25.js.map