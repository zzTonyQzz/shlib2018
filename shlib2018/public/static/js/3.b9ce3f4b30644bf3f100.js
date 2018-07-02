/*! vue-cli-xiaxs */
webpackJsonp([3],{

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

/***/ "Iuox":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue__ = __webpack_require__("oT4o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232c369a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookDetails_vue__ = __webpack_require__("zhtw");
function injectStyle (ssrContext) {
  __webpack_require__("kGeY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-232c369a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_eBookDetails_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232c369a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_eBookDetails_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ "kGeY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("x2Ai");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5784b6d6", content, true, {});

/***/ }),

/***/ "oT4o":
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
    global.eBookDetails = mod.exports;
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

  var self = null; // 自定义变量存储实例this

  // components


  // api request
  exports.default = {
    name: "eBookDetails",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        routeParams: {},
        aboutTitle: '简介',
        directories: '目录',
        showActionBtn: true,
        aboutClass: 'about-class',
        summaryInfo: {},
        summaryContent: '',
        chapters: '',
        pBookUrl: 'http://e.library.sh.cn/epubReader2017/reader.htm?bookid=', // 图书外链地址
        type: this.$route.query.type
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
      window.scroll(0, 0);
      var type = self.routeParams.type;
      if (type === 'magazine') {
        this.$route.meta.breadcrumbName = '期刊详情';
        self.getMagazineInfo();
        return;
      } else if (type === 'epub') {
        this.$route.meta.breadcrumbName = '图书详情';
        self.getPBookInfo();
      } else {
        this.$router.push({
          path: '/eBook/bookClassification',
          replace: true
        });
      }
    },


    methods: {
      getPBookInfo: function getPBookInfo() {
        _api.bookInfoApi.epubinfo(self.routeParams.bid).then(function (res) {
          var data = res.result.datas[0] || {};
          self.summaryInfo = {
            cover: data.v14 || self.$store.state.defaultBookCover,
            bookName: data.v9 || '',
            bookType: self.routeParams.ty,
            viewCount: data.viewCount || '',
            doubanScore: +data.v11 || 0,
            author: data.v13 || '暂无作者',
            publish: data.v15 || '暂无出版社',
            publishDate: data.publishDate || '',
            readUrl: data.v9 ? self.pBookUrl + self.routeParams.bid : '',
            douUrl: data.v12 || 'https://book.douban.com/'

            // 获取简介及目录
          };self.summaryContent = data.v24 ? decodeURIComponent(data.v24).replace(/\+/g, ' ') || '暂无简介' : '暂无简介';
          self.chapters = eval("[" + self.utils.replacePunctuation(decodeURIComponent(data.v23)) + "]")[0] || '暂无章节信息';
          if (data.v10) {
            _api.doubanHandle.doubanBookIsbn(data.v10).then(function (res) {
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
          }
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getPBookInfo();
              clearTimeout(t);
            }, 500);
          }
        });
      },
      getMagazineInfo: function getMagazineInfo() {
        // 无任何返回值
        _api.bookInfoApi.magazineInfo(self.routeParams.bid).then(function (res) {
          var data = res.result.mags[0] || {};
          self.summaryInfo = {
            cover: data.cover || '',
            bookName: data.title || '',
            readUrl: data.ssourl || ''
          };

          // self.showActionBtn = false;
          // 获取简介及目录
          self.summaryContent = '暂无简介';
          self.chapters = '暂无章节信息';
        }).catch(function (error) {
          if (error === '10001') {
            var t = setTimeout(function () {
              self.getMagazineInfo();
              clearTimeout(t);
            }, 500);
          }
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "oVjZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-rate"},[_vm._l((_vm.rateClasses),function(itemClass,index){return _c('span',{key:index,staticClass:"rate-item",class:itemClass})}),_vm._v(" "),(_vm.score)?_c('span',{staticClass:"score-num"},[_vm._v(_vm._s(_vm.score.toFixed(1)))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "x2Ai":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-232c369a]{float:left!important}.pull-right[data-v-232c369a]{float:right!important}.show[data-v-232c369a]{display:block!important}.hidden[data-v-232c369a]{display:none!important;visibility:hidden!important}.invisible[data-v-232c369a]{visibility:hidden}.loading[data-v-232c369a]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-232c369a 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-232c369a{0%{width:2px}to{width:15px}}a[data-v-232c369a]{text-decoration:none}ol[data-v-232c369a],ul[data-v-232c369a]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-232c369a],input[data-v-232c369a]{-webkit-appearance:none}button[data-v-232c369a]{border:none;background:none}input[data-v-232c369a],input[data-v-232c369a]:focus{outline:none}.none-data[data-v-232c369a]{position:relative}.none-data[data-v-232c369a]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-232c369a]{border:1px solid #5390d7;color:#5390d7}.return[data-v-232c369a]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-232c369a]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-232c369a]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-232c369a]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-232c369a]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-232c369a]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-232c369a]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-232c369a]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-232c369a]{color:#42a8dd}.not-overdue[data-v-232c369a]{color:#5dc9a8}.overdue[data-v-232c369a]{color:#f97f50}.overlay[data-v-232c369a]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-232c369a]{padding-left:15px}.padMargin[data-v-232c369a]{padding-right:15px;padding-left:15px}}.white-bg[data-v-232c369a]{background-color:#fff}.vertical-top[data-v-232c369a]{vertical-align:top}.vertical-middle[data-v-232c369a]{vertical-align:middle}.vertical-center[data-v-232c369a]{font-size:0;text-align:left}.vertical-center[data-v-232c369a]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-232c369a]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-232c369a]{color:#fff}.swiper-button-next[data-v-232c369a],.swiper-button-prev[data-v-232c369a]{background-image:none}.swiper-button-next .iconfont[data-v-232c369a],.swiper-button-prev .iconfont[data-v-232c369a]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-232c369a],.swiper-button-prev .iconfont[data-v-232c369a]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-232c369a],.swiper-button-prev .iconfont[data-v-232c369a]{font-size:11px}}.list-container>li[data-v-232c369a]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-232c369a]{padding-bottom:31px}.list-container>li+li[data-v-232c369a]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-232c369a]{padding-bottom:15px}.list-container>li+li[data-v-232c369a]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-232c369a]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-232c369a]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-232c369a]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-232c369a]{padding-bottom:16px}.has-right-column .calendar[data-v-232c369a]{width:280px;height:254px}}.view-more[data-v-232c369a]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-232c369a]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-232c369a]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-232c369a]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-232c369a]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-232c369a]{display:none}.view-more .iconfont[data-v-232c369a]{font-size:10px}}.about-content[data-v-232c369a]{color:#666}.about-content>p[data-v-232c369a]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-232c369a]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-232c369a]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-232c369a]{padding-right:10px;padding-left:10px}.about-content>p[data-v-232c369a]{font-size:13px;line-height:25px}.about-content>p+p[data-v-232c369a]{margin-top:12px}}.component-menuInner.last1>a[data-v-232c369a]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-232c369a]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-232c369a]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-232c369a]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-232c369a]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-232c369a]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-232c369a]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-232c369a]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-232c369a]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-232c369a]{color:#5cc8a8}.component-menuInner a[data-v-232c369a]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-232c369a]{color:#4daada}.component-menuInner a p[data-v-232c369a]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-232c369a]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-232c369a]{margin-top:20px}.component-menuInner a[data-v-232c369a]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-232c369a]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-232c369a]{font-size:34px}.component-menuInner a p[data-v-232c369a]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-232c369a]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-232c369a]{margin-top:10px}.component-menuInner a[data-v-232c369a]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-232c369a]{font-size:19px}.component-menuInner a p[data-v-232c369a]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-232c369a]{padding-right:15px;padding-left:15px}}.footer[data-v-232c369a]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-232c369a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-232c369a]{position:relative}.eventAction[data-v-232c369a]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-232c369a .75s 0s linear infinite;animation:rotate-data-v-232c369a .75s 0s linear infinite}.directories[data-v-232c369a]{margin-bottom:0}.directories>dt[data-v-232c369a]{color:#666}.directories>dd[data-v-232c369a]{color:#3f3f3f}.directories>dd>a[data-v-232c369a]{color:#666;font-weight:500}@media only screen and (min-width:768px){.directories>dd[data-v-232c369a],.directories>dt[data-v-232c369a]{line-height:29px}.directories>dt[data-v-232c369a]{margin-top:20px}.directories>dt[data-v-232c369a]:first-child{margin-top:0}}@media only screen and (max-width:767px){.directories[data-v-232c369a]{padding-right:10px;padding-left:10px}.directories>dd[data-v-232c369a],.directories>dt[data-v-232c369a]{line-height:25px}.directories>dt[data-v-232c369a]:not(:first-child){margin-top:14px}}.node-data[data-v-232c369a]{display:none}", ""]);

// exports


/***/ }),

/***/ "yqyU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-09e0a005]{float:left!important}.pull-right[data-v-09e0a005]{float:right!important}.show[data-v-09e0a005]{display:block!important}.hidden[data-v-09e0a005]{display:none!important;visibility:hidden!important}.invisible[data-v-09e0a005]{visibility:hidden}.loading[data-v-09e0a005]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-09e0a005 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-09e0a005{0%{width:2px}to{width:15px}}a[data-v-09e0a005]{text-decoration:none}ol[data-v-09e0a005],ul[data-v-09e0a005]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-09e0a005],input[data-v-09e0a005]{-webkit-appearance:none}button[data-v-09e0a005]{border:none;background:none}input[data-v-09e0a005],input[data-v-09e0a005]:focus{outline:none}.none-data[data-v-09e0a005]{position:relative}.none-data[data-v-09e0a005]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-09e0a005]{border:1px solid #5390d7;color:#5390d7}.return[data-v-09e0a005]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-09e0a005]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-09e0a005]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-09e0a005]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-09e0a005]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-09e0a005]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-09e0a005]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-09e0a005]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-09e0a005]{color:#42a8dd}.not-overdue[data-v-09e0a005]{color:#5dc9a8}.overdue[data-v-09e0a005]{color:#f97f50}.overlay[data-v-09e0a005]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-09e0a005]{padding-left:15px}.padMargin[data-v-09e0a005]{padding-right:15px;padding-left:15px}}.white-bg[data-v-09e0a005]{background-color:#fff}.vertical-top[data-v-09e0a005]{vertical-align:top}.vertical-middle[data-v-09e0a005]{vertical-align:middle}.vertical-center[data-v-09e0a005]{font-size:0;text-align:left}.vertical-center[data-v-09e0a005]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-09e0a005]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-09e0a005]{color:#fff}.swiper-button-next[data-v-09e0a005],.swiper-button-prev[data-v-09e0a005]{background-image:none}.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-09e0a005],.swiper-button-prev .iconfont[data-v-09e0a005]{font-size:11px}}.list-container>li[data-v-09e0a005]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-09e0a005]{padding-bottom:31px}.list-container>li+li[data-v-09e0a005]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-09e0a005]{padding-bottom:15px}.list-container>li+li[data-v-09e0a005]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-09e0a005]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-09e0a005]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-09e0a005]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-09e0a005]{padding-bottom:16px}.has-right-column .calendar[data-v-09e0a005]{width:280px;height:254px}}.view-more[data-v-09e0a005]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-09e0a005]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-09e0a005]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-09e0a005]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-09e0a005]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-09e0a005]{display:none}.view-more .iconfont[data-v-09e0a005]{font-size:10px}}.about-content[data-v-09e0a005]{color:#666}.about-content>p[data-v-09e0a005]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-09e0a005]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-09e0a005]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-09e0a005]{padding-right:10px;padding-left:10px}.about-content>p[data-v-09e0a005]{font-size:13px;line-height:25px}.about-content>p+p[data-v-09e0a005]{margin-top:12px}}.component-menuInner.last1>a[data-v-09e0a005]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-09e0a005]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-09e0a005]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-09e0a005]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-09e0a005]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-09e0a005]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-09e0a005]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-09e0a005]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-09e0a005]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-09e0a005]{color:#5cc8a8}.component-menuInner a[data-v-09e0a005]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-09e0a005]{color:#4daada}.component-menuInner a p[data-v-09e0a005]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-09e0a005]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-09e0a005]{margin-top:20px}.component-menuInner a[data-v-09e0a005]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-09e0a005]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-09e0a005]{font-size:34px}.component-menuInner a p[data-v-09e0a005]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-09e0a005]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-09e0a005]{margin-top:10px}.component-menuInner a[data-v-09e0a005]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-09e0a005]{font-size:19px}.component-menuInner a p[data-v-09e0a005]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-09e0a005]{padding-right:15px;padding-left:15px}}.footer[data-v-09e0a005]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-09e0a005{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-09e0a005]{position:relative}.eventAction[data-v-09e0a005]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-09e0a005 .75s 0s linear infinite;animation:rotate-data-v-09e0a005 .75s 0s linear infinite}.book-intro[data-v-09e0a005]{position:relative;margin-bottom:0;border-bottom:1px solid #e0e5e8}.book-intro .img-responsive[data-v-09e0a005]{display:block;height:100%;object-fit:cover}.book-intro>dt[data-v-09e0a005]{float:left;overflow:hidden}.book-intro>dd[data-v-09e0a005]{position:relative}.book-intro>dd p[data-v-09e0a005]{margin-top:0;margin-bottom:0}.book-intro>dd p+p[data-v-09e0a005]{margin-top:3px}.book-intro .book-title[data-v-09e0a005]{color:#333;font-size:0}.book-intro .view-count-score[data-v-09e0a005]{color:#666}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{color:#fff;display:inline-block;background:#5f9ce3;text-align:center}.book-intro .author-publish-info[data-v-09e0a005]{color:#959ca5}@media only screen and (min-width:768px){.book-intro[data-v-09e0a005]{height:231px;margin-top:4px;padding-bottom:30px}.book-intro>dt[data-v-09e0a005]{width:161px;height:200px}.book-intro>dd[data-v-09e0a005]{height:100%;padding-top:9px;margin-left:191px}.book-intro .book-title>em[data-v-09e0a005]{font-size:18px;font-style:normal}.book-intro .view-count-score[data-v-09e0a005]{margin-top:17px}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{margin-top:16px;width:100px;height:30px;line-height:30px}.book-intro .view-count-score span[data-v-09e0a005]{margin-left:8px}.book-intro .author-publish-info[data-v-09e0a005]{position:absolute;bottom:0}.book-intro .author-publish-info>p[data-v-09e0a005]{margin-bottom:8px}.book-intro .author-publish-info .iconfont[data-v-09e0a005]{margin-right:7px}.book-intro .author-publish-info .icon-chubanshe[data-v-09e0a005]{font-size:13px}}@media only screen and (min-width:768px) and (max-width:1024px){.book-intro[data-v-09e0a005]{margin-right:15px;margin-left:15px}}@media only screen and (max-width:767px){.book-intro[data-v-09e0a005]{padding:14px 10px}.book-intro>dt[data-v-09e0a005]{width:98px;height:121.5px}.book-intro>dd[data-v-09e0a005]:not(.action-btn){margin-left:111px}.book-intro>dd:not(.action-btn) p[data-v-09e0a005]{font-size:11px}.book-intro>dd:not(.action-btn) span[data-v-09e0a005]{margin-left:6px}.book-intro .book-title[data-v-09e0a005]{margin-top:4px}.book-intro .book-title>em[data-v-09e0a005]{font-size:15px;font-style:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.book-intro .view-count-score[data-v-09e0a005]{margin-top:3px}.book-intro .view-count-score .gotoDou[data-v-09e0a005]{width:66px;height:24px;line-height:24px}.book-intro .author-publish-info[data-v-09e0a005]{margin-top:16px}.book-intro .iconfont[data-v-09e0a005]{margin-right:5px;font-size:12px}.book-intro .icon-user-avatar[data-v-09e0a005]{font-size:15px}}.action-btn[data-v-09e0a005]{position:absolute;right:0}.action-btn .btn[data-v-09e0a005]{color:#fff;background-color:#5f9ce3}.action-btn .to-read[data-v-09e0a005]{background-color:#5390d7}@media only screen and (min-width:768px){.action-btn[data-v-09e0a005]{bottom:0}.action-btn .btn[data-v-09e0a005]{width:100px;height:30px;margin-left:20px;line-height:26px;font-size:14px}.action-btn .btn[data-v-09e0a005]:focus,.action-btn .btn[data-v-09e0a005]:hover{opacity:.8}.action-btn .iconfont[data-v-09e0a005]{margin-right:9px;font-size:14px;vertical-align:-1px}}@media only screen and (max-width:767px){.action-btn[data-v-09e0a005]{position:fixed;right:0;bottom:0;left:0;z-index:2}.action-btn .btn[data-v-09e0a005]{width:50%;height:47px;line-height:47px;font-size:15px}.action-btn .btn .iconfont[data-v-09e0a005]{font-size:15px;vertical-align:-1px}}.add-note[data-v-09e0a005]{position:fixed;left:0;width:100%;text-align:center}.add-note .add-msg[data-v-09e0a005]{padding:8px;font-size:16px;color:#fff;border-radius:4px;background-color:rgba(95,87,87,.5)}", ""]);

// exports


/***/ }),

/***/ "zhtw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-eBooks"},[_c('bread-crumb'),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('book-details-header',{attrs:{"show-action-btn":_vm.showActionBtn,"summary-info":_vm.summaryInfo}}),_vm._v(" "),(_vm.type === 'epub')?_c('div',[_c('div',{staticClass:"book-about-container padMargin"},[_c('column-title',{attrs:{"column-title":_vm.aboutTitle,"customer-class":_vm.aboutClass}}),_vm._v(" "),_c('div',{staticClass:"about-content",domProps:{"innerHTML":_vm._s(_vm.summaryContent)}})],1),_vm._v(" "),_c('column-title',{attrs:{"column-title":_vm.directories,"customer-class":_vm.aboutClass}}),_vm._v(" "),_c('dl',{staticClass:"directories padMargin"},[(false)?_c('dt',[_vm._v("预留此篇章标签, 后期扩展")]):_vm._e(),_vm._v(" "),_vm._l((_vm.chapters),function(item,index){return _c('dd',{key:index},[_c('a',{attrs:{"href":item.src}},[_vm._v(_vm._s(item.title))])])})],2)],1):_vm._e()],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=3.b9ce3f4b30644bf3f100.js.map