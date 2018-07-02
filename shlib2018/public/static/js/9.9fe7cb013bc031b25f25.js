/*! vue-cli-xiaxs */
webpackJsonp([9],{

/***/ "1kel":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("juFk"), __webpack_require__("JA8L")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("../components/myOverplay"), require("../server/api"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.myOverplay, global.api);
    global.museumNavigation = mod.exports;
  }
})(this, function (module, exports, _myOverplay, _api) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _myOverplay2 = _interopRequireDefault(_myOverplay);

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

  var self = null; // 自定义变量存储实例this


  // api request
  exports.default = {
    name: "museumNavigation",

    data: function data() {
      return {
        isMobile: this.$store.state.isMobile,
        libList: [], // 附近图书馆列表
        allLibList: [], // 缓存查询的列表
        // showlibList: this.$store.state.isMobile ? false : true,
        // showMap: true,
        showlibList: true,
        showMap: this.$store.state.isMobile ? false : true,
        listInfo: '',

        // BaiduMap 配置
        location: "上海",
        points: [], // 地图显示点
        allPoints: [], // 缓存所有点
        infoWinContent: {},
        adress: null,
        saveMapObj: null, // 存储百度地图实例, 后续调用

        // 选择区县Modal
        areaShow: false, // 是否显示 `选择区县` Modal
        currentArea: '', // 当前选择区县
        areaLists: [{
          district: '上海市',
          filter: '上海市'
        }, {
          district: '浦东新区',
          filter: '浦东'
        }, {
          district: '黄浦区',
          filter: '黄浦'
        }, {
          district: '静安区',
          filter: '静安'
        }, {
          district: '徐汇区',
          filter: '徐汇'
        }, {
          district: '长宁区',
          filter: '长宁'
        }, {
          district: '普陀区',
          filter: '普陀'
        }, {
          district: '虹口区',
          filter: '虹口'
        }, {
          district: '杨浦区',
          filter: '杨浦'
        }, {
          district: '宝山区',
          filter: '宝山'
        }, {
          district: '闵行区',
          filter: '闵行'
        }, {
          district: '嘉定区',
          filter: '嘉定'
        }, {
          district: '金山区',
          filter: '金山'
        }, {
          district: '松江区',
          filter: '松江'
        }, {
          district: '青浦区',
          filter: '青浦'
        }, {
          district: '奉贤区',
          filter: '奉贤'
        }, {
          district: '崇明县',
          filter: '崇明'
        }],

        // 选择层级Modal
        levelShow: false, // 是否显示 `选择层级` Modal
        libLevel: [{
          name: '市级馆',
          filter: '市级'
        }, {
          name: '区县馆',
          filter: '区县'
        }, {
          name: '街镇馆',
          filter: '街镇'
        }],
        currentLevel: '', // 当前选择层级

        /** 
         * [easyscroll vue 滚动条插件]
         * https://www.waitig.com/在vue项目中使用easyscroll滚动条插件.html
         * https://garveyzuo.github.io/easyscroll.github.io/#/
         */
        barOption: {
          barColor: '#d7dce0',
          barWidth: 3,
          barMarginRight: 1,
          horizrailenabled: false,
          railColor: 'transparent'
        }
      };
    },
    created: function created() {
      self = this;
    },


    components: {
      myOverlay: _myOverplay2.default
    },

    methods: {
      /** 
       * [mapHandler 处理百度地图API]
       * @param {Object} 百度地图组件对象
       * @param {Object } 百度地图组件
       */
      mapHandler: function mapHandler(_ref) {
        var BMap = _ref.BMap,
            map = _ref.map;

        // 存储百度地图实例, 后续调用
        self.saveMapObj = { BMap: BMap, map: map };
        var geolocation = new BMap.Geolocation();
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var lng = position.coords.longitude;
            var lat = position.coords.latitude;
            // var point = new BMap.Point(lng, lat);
            // map.centerAndZoom(point, 14);
            // self.setMapCenterAndZoom(lng, lat, 14);
            self.getLibList({ lng: lng, lat: lat });
            self.location = '您的附近';
            // alert(lng);
            // console.log(position);
          }, function (msg) {
            var lng = '121.451271';
            var lat = '31.214195';
            // var point = new BMap.Point(lng, lat);
            // map.centerAndZoom(point, 14);
            // self.setMapCenterAndZoom(lng, lat, 14);
            self.getLibList({ lng: lng, lat: lat });
            self.location = '上海图书馆附近';
            // console.log(msg);
          }, { timeout: 4000 });
        } else {
          console.log('不支持定位');
        }

        /**
        try {
          let geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(r => {
            try {
              let {lng, lat} = r.point;
              console.log(r.point);
              // var point = new BMap.Point(lng,lat);
              var point = new BMap.Point('121.57636356066055','31.201652168185987');
              // console.dir(BMap.Convertor)
              // let c = new BMap.Convertor();
              // c.translate(point, 0,5, function (data){console.log(data)});
              setTimeout(() => {
                map.centerAndZoom(point,14);
              }, 200);
              
              // self.getLibList({lng, lat});
              // var point = new BMap.Point('121.57636356066055','31.201652168185987');
              self.getLibList({lng: '121.57636356066055', lat: '31.201652168185987'});
            } catch (error) {
              console.log(error);
            }
            
          });
        } catch (error) {
          console.log(error);
        }
        */
      },

      /**
       * [getLibList 获取附近图书馆列表]
       * @param {String} lng 当前位置经度
       * @param {String} lat 当前位置纬度
       * @param {String} level 分馆层级
       * @param {String} district 分馆所在区县
       */
      getLibList: function getLibList(_ref2) {
        var lng = _ref2.lng,
            lat = _ref2.lat,
            level = _ref2.level,
            district = _ref2.district;

        // self.location = '';
        self.listInfo = '';
        window.scroll(0, 0);
        var params = {
          lng: lng,
          lat: lat,
          level: level,
          district: district
          // page: 1,
          // pagesize: 10
        };
        _api.libsQuery.getLibsInfo(params).then(function (res) {
          var data = res.result;
          if (!data.length) {
            self.libList = [];
            return;
          };
          self.points.length = 0;
          self.allPoints.length = 0;
          var tempArr = data.map(function (item) {
            // 场馆经纬度
            self.points.push({
              lng: item.baidux,
              lat: item.baiduy,
              gcode: item.gcode,
              level: item.level
            });

            self.allPoints.push({
              lng: item.baidux,
              lat: item.baiduy,
              gcode: item.gcode,
              level: item.level
            });

            // 场馆信息
            return {
              gcode: item.gcode,
              libname: item.libname,
              hasadult: item.hasadult,
              haschild: item.haschild,
              distance: item.distance,
              address: item.address,
              tel: item.tel,
              opentime: item.opentime,
              level: item.level,
              district: item.district
            };
          });
          var centerPoint = self.points[0];
          self.setMapCenterAndZoom(centerPoint.lng, centerPoint.lat, 14);
          self.libList = tempArr;
          self.allLibList = tempArr;
        }).catch(function (error) {
          // alert(error)
        });
      },

      /**
       * [getEachInfo 地图info window 显示所选图书馆信息]
       * @param {String} code 所选图书馆内部code
       */
      getEachInfo: function getEachInfo(code) {
        // libsQuery.getLibIdInfo(code)
        // .then(res => {
        //   const data = res.result[0];
        //   const {BMap, map} = self.saveMapObj;
        //   self.points = [{
        //     lng: data.baidux,
        //     lat: data.baiduy,
        //     gcode: data.gcode
        //   }];

        //   // 设置地图中心点为当前所选图书馆的经纬度信息
        //   map.setCenter(new BMap.Point(data.baidux, data.baiduy));
        //   // 显示所选图书馆对应的 info window
        //   self.infoWindowOpen(0, data.gcode);
        // });
        // 从缓存的点中筛选，不再从新请求
        for (var i = 0, l = self.points.length; i < l; i++) {
          // const {BMap, map} = self.saveMapObj;
          var point = self.points[i];
          if (point.gcode === code) {
            // 设置地图中心点为当前所选图书馆的经纬度信息
            // map.centerAndZoom(new BMap.Point(point.lng, point.lat), 18);
            self.setMapCenterAndZoom(point.lng, point.lat, 18);
            // 显示所选图书馆对应的 info window
            self.infoWindowOpen(i, code);
            if (self.isMobile) {
              self.showTheMap();
            }

            break;
          }
        }
      },
      setMapCenterAndZoom: function setMapCenterAndZoom(lng, lat, zoom) {
        var _self$saveMapObj = self.saveMapObj,
            BMap = _self$saveMapObj.BMap,
            map = _self$saveMapObj.map;

        map.centerAndZoom(new BMap.Point(lng, lat), zoom);
      },
      setMapCenter: function setMapCenter(lng, lat) {
        var _self$saveMapObj2 = self.saveMapObj,
            BMap = _self$saveMapObj2.BMap,
            map = _self$saveMapObj2.map;

        map.setCenter(new BMap.Point(lng, lat));
      },

      /**
       * [selectModal 区域 | 层级 选择Modal]
       * @param {Int} index  => 0: 区域Modal | 1: 层级Modal
       */
      selectModal: function selectModal(index) {
        // 关闭所有已显示info window
        self.adress = null;
        switch (index) {
          case 0:
            self.areaShow = !self.areaShow;
            self.levelShow = false;
            break;
          case 1:
            self.levelShow = !self.levelShow;
            self.areaShow = false;
            break;
          default:
            break;
        }
      },

      /**
       * [selectArea 选择区域]
       * @param {String} district 区县名(上海市现有区县)
       */
      selectArea: function selectArea(district) {
        var params = {
          district: district
          // page: 1,
          // pagesize: 10
          // level: ''
        };
        self.currentLevel = '';
        // self.currentArea = district;
        self.areaShow = false;
        self.getLibList(params);
        self.location = district;
      },

      /**
       * [selectLevel 选择层级]
       * @param {String} level 图书馆层级 => 市级馆 | 区县馆 | 街镇馆
       */
      selectLevel: function selectLevel(level) {
        // let params = {
        //   level,
        //   district: self.currentArea
        // };
        // // self.currentLevel = level;
        // self.levelShow = false;
        // self.getLibList(params);
        // for (let i = 0, l = self.libList.length; i < l; i++) {
        //   const item = self.libList[i];

        // }
        var tempArr = [];
        var tempPoints = [];
        self.allLibList.map(function (item) {
          if (item.level === level) {
            tempArr.push(item);
          }
        });
        self.allPoints.map(function (item) {
          if (item.level === level) {
            tempPoints.push(item);
          }
        });
        self.levelShow = false;
        self.libList = tempArr;
        self.points = tempPoints;
        if (!tempArr.length) {
          self.listInfo = self.location + '没有 \"' + level + '\" 级图书馆';
        }
      },

      /**
       * [infoWindowOpen 显示筛选已选图书馆地图信息窗口]
       * @param {Int} i index for info window
       * @param {String} code 所选图书馆内部code, 通过 `libsQuery.getLibsInfo` 获取
       */
      infoWindowOpen: function infoWindowOpen(i, code) {
        self.infoWinContent = self.libList.filter(function (item) {
          return item.gcode === code;
        })[0];
        self.adress = i;
      },
      showTheMap: function showTheMap() {
        self.showlibList = false;
        self.showMap = true;
      },
      hideTheMap: function hideTheMap() {
        self.showMap = false;
        self.showlibList = true;
      },
      initOverPlay: function initOverPlay() {
        self.adress = -1;
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "2xuR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("JVYR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6ab26878", content, true, {});

/***/ }),

/***/ "89MD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bm-overlay',{ref:"customOverlay",class:{sample: true, isActive: _vm.isActive},attrs:{"pane":"labelPane"},on:{"draw":_vm.draw}},[_c('div',{staticClass:"row title"},[_c('div',{staticClass:"title-item col-xs-10"},[_c('h3',[_vm._v(_vm._s(_vm.text.libname))])]),_vm._v(" "),_c('div',{staticClass:"title-item col-xs-2 icon",on:{"click":_vm.handleClick,"touchend":_vm.handleClick}},[_c('i',{staticClass:"iconfont icon-close2"})])]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-xiaofangzi"}),_vm._v(_vm._s(_vm.text.address))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-telphone"}),_vm._v(_vm._s(_vm.text.tel))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-clock-normal"}),_vm._v(_vm._s(_vm.text.opentime))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "DNLx":
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
    global.myOverplay = mod.exports;
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

  var self = null;
  exports.default = {
    data: function data() {
      return {
        isActive: true,
        width: this.$store.state.isMobile ? 360 : 450
      };
    },
    created: function created() {
      self = this;
    },


    props: ["text", "position", "active"],

    watch: {
      position: {
        handler: function handler() {
          this.$refs.customOverlay.reload();
        },

        deep: true
      },
      active: function active(newVal, oldVal) {
        this.isActive = newVal;
      }
    },

    methods: {
      handleClick: function handleClick() {
        // global.alert("Well done.");
        this.$emit('init-overplay');
        this.isActive = true;
      },
      draw: function draw(_ref) {
        var el = _ref.el,
            BMap = _ref.BMap,
            map = _ref.map;
        var _position = this.position,
            lng = _position.lng,
            lat = _position.lat;

        var pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
        el.style.left = pixel.x - self.width / 2 + "px";
        el.style.top = pixel.y - 205 + "px";
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "JVYR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".pull-left[data-v-b06afa0c]{float:left!important}.pull-right[data-v-b06afa0c]{float:right!important}.show[data-v-b06afa0c]{display:block!important}.hidden[data-v-b06afa0c]{display:none!important;visibility:hidden!important}.invisible[data-v-b06afa0c]{visibility:hidden}.loading[data-v-b06afa0c]:after{overflow:hidden;display:inline-block;vertical-align:bottom;animation:ellipsis-data-v-b06afa0c 2s infinite;content:\"\\2026\"}@keyframes ellipsis-data-v-b06afa0c{0%{width:2px}to{width:15px}}a[data-v-b06afa0c]{text-decoration:none}ol[data-v-b06afa0c],ul[data-v-b06afa0c]{padding-left:0;list-style:none;margin-top:0;margin-bottom:0}button[data-v-b06afa0c],input[data-v-b06afa0c]{-webkit-appearance:none}button[data-v-b06afa0c]{border:none;background:none}input[data-v-b06afa0c],input[data-v-b06afa0c]:focus{outline:none}.none-data[data-v-b06afa0c]{position:relative}.none-data[data-v-b06afa0c]:before{content:\"\\6682\\65E0\\6570\\636E\";color:#666}.lend[data-v-b06afa0c]{border:1px solid #5390d7;color:#5390d7}.return[data-v-b06afa0c]{border:1px solid #5dc9a0;color:#5dc9a0}.damage[data-v-b06afa0c]{border:1px solid #f6a623;color:#f6a623}.general-lend[data-v-b06afa0c]{color:#5390d7;border:1px solid #5390d7;border-radius:2px}@media only screen and (min-width:768px){.general-lend[data-v-b06afa0c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.general-lend[data-v-b06afa0c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.reference-lend[data-v-b06afa0c]{color:#5dc9a0;border:1px solid #5dc9a0;border-radius:2px}@media only screen and (min-width:768px){.reference-lend[data-v-b06afa0c]{padding:1px 4px;margin-left:10px;font-size:12px;vertical-align:2.5px}}@media only screen and (max-width:767px){.reference-lend[data-v-b06afa0c]{height:20px;line-height:20px;padding-right:2px;padding-left:2px;margin-left:9px;font-size:10px;white-space:nowrap;vertical-align:1px}}.due[data-v-b06afa0c]{color:#42a8dd}.not-overdue[data-v-b06afa0c]{color:#5dc9a8}.overdue[data-v-b06afa0c]{color:#f97f50}.overlay[data-v-b06afa0c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,.3)}@media only screen and (min-width:768px) and (max-width:1024px){.unityPadding[data-v-b06afa0c]{padding-left:15px}.padMargin[data-v-b06afa0c]{padding-right:15px;padding-left:15px}}.white-bg[data-v-b06afa0c]{background-color:#fff}.vertical-top[data-v-b06afa0c]{vertical-align:top}.vertical-middle[data-v-b06afa0c]{vertical-align:middle}.vertical-center[data-v-b06afa0c]{font-size:0;text-align:left}.vertical-center[data-v-b06afa0c]:before{content:\"\";display:inline-block;width:0;height:100%;vertical-align:middle}.vertical-center .ele-middle[data-v-b06afa0c]{display:inline-block;font-size:14px;*text-align:left;vertical-align:middle}.vertical-center a[data-v-b06afa0c]{color:#fff}.swiper-button-next[data-v-b06afa0c],.swiper-button-prev[data-v-b06afa0c]{background-image:none}.swiper-button-next .iconfont[data-v-b06afa0c],.swiper-button-prev .iconfont[data-v-b06afa0c]{color:#fff}@media only screen and (min-width:768px){.swiper-button-next .iconfont[data-v-b06afa0c],.swiper-button-prev .iconfont[data-v-b06afa0c]{font-size:22px}}@media only screen and (max-width:767px){.swiper-button-next .iconfont[data-v-b06afa0c],.swiper-button-prev .iconfont[data-v-b06afa0c]{font-size:11px}}.list-container>li[data-v-b06afa0c]{border-bottom:1px solid #eee}@media only screen and (min-width:768px){.list-container>li[data-v-b06afa0c]{padding-bottom:31px}.list-container>li+li[data-v-b06afa0c]{padding-top:31px}}@media only screen and (max-width:767px){.list-container>li[data-v-b06afa0c]{padding-bottom:15px}.list-container>li+li[data-v-b06afa0c]{padding-top:15px}}@media only screen and (min-width:768px){.has-right-column .list-container[data-v-b06afa0c]{margin-right:344px;padding-right:40px}.has-right-column .calendar[data-v-b06afa0c]{float:right;width:344px;height:333px;border:1px solid #e0e0e0}}@media only screen and (min-width:768px) and (max-width:1023px){.has-right-column .list-container[data-v-b06afa0c]{margin-right:280px;padding-right:20px}.has-right-column .list-container>li[data-v-b06afa0c]{padding-bottom:16px}.has-right-column .calendar[data-v-b06afa0c]{width:280px;height:254px}}.view-more[data-v-b06afa0c]{display:block;margin-right:auto;margin-left:auto;border:1px solid #ccc;border-radius:2px;color:#999;text-align:center}@media only screen and (min-width:768px){.view-more[data-v-b06afa0c]{width:100px;height:30px;margin-top:40px;line-height:28px;font-size:14px}.view-more .iconfont[data-v-b06afa0c]{margin-left:2px;font-size:12px}}@media only screen and (max-width:767px){.view-more[data-v-b06afa0c]{width:90px;height:27px;margin-top:15px;font-size:13px;line-height:25px}.view-more.no-more-data[data-v-b06afa0c]{width:auto;border:none}.view-more.no-more-data .iconfont[data-v-b06afa0c]{display:none}.view-more .iconfont[data-v-b06afa0c]{font-size:10px}}.about-content[data-v-b06afa0c]{color:#666}.about-content>p[data-v-b06afa0c]{margin-top:0;margin-bottom:0}.about-content>p+p[data-v-b06afa0c]{margin-top:25px}@media only screen and (min-width:768px){.about-content[data-v-b06afa0c]{line-height:29px}}@media only screen and (max-width:767px){.about-content[data-v-b06afa0c]{padding-right:10px;padding-left:10px}.about-content>p[data-v-b06afa0c]{font-size:13px;line-height:25px}.about-content>p+p[data-v-b06afa0c]{margin-top:12px}}.component-menuInner.last1>a[data-v-b06afa0c]:nth-last-child(-n+1),.component-menuInner.last2>a[data-v-b06afa0c]:nth-last-child(-n+2),.component-menuInner.last3>a[data-v-b06afa0c]:nth-last-child(-n+3),.component-menuInner.last4>a[data-v-b06afa0c]:nth-last-child(-n+4),.component-menuInner.last5>a[data-v-b06afa0c]:nth-last-child(-n+5){border-bottom:0}.component-menuInner.lastAll>a[data-v-b06afa0c]:nth-last-child(-n+6){border-bottom:none}.component-menuInner.menu1[data-v-b06afa0c]{margin-top:0}.component-menuInner.menu1 .iconfont[data-v-b06afa0c]{color:#f7b366}.component-menuInner.menu2 .iconfont[data-v-b06afa0c]{color:#63bfce}.component-menuInner.menu3 .iconfont[data-v-b06afa0c]{color:#5cc8a8}.component-menuInner a[data-v-b06afa0c]{color:#666;text-align:center;border-bottom:1px solid #e0e5e8}.component-menuInner a .iconfont[data-v-b06afa0c]{color:#4daada}.component-menuInner a p[data-v-b06afa0c]{margin-top:0;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:768px){.component-menuInner[data-v-b06afa0c]{margin-top:43px;overflow:hidden}.component-menuInner+.component-menuInner[data-v-b06afa0c]{margin-top:20px}.component-menuInner a[data-v-b06afa0c]{height:149px;padding-top:36px;padding-bottom:32px;margin-top:-1px;margin-bottom:-1px;vertical-align:top;font-size:14px}.component-menuInner a[data-v-b06afa0c]:hover{opacity:.8}.component-menuInner a .iconfont[data-v-b06afa0c]{font-size:34px}.component-menuInner a p[data-v-b06afa0c]{margin-top:12px}}@media only screen and (max-width:767px){.component-menuInner.lastAll>a[data-v-b06afa0c]:nth-last-child(-n+4){border-bottom:none}.component-menuInner+.component-menuInner[data-v-b06afa0c]{margin-top:10px}.component-menuInner a[data-v-b06afa0c]{padding:22px 5px 19px;margin-top:-1px;margin-bottom:-1px;font-size:12px}.component-menuInner a .iconfont[data-v-b06afa0c]{font-size:19px}.component-menuInner a p[data-v-b06afa0c]{margin-top:9px}}@media only screen and (min-width:768px) and (max-width:1024px){.component-menuInner[data-v-b06afa0c]{padding-right:15px;padding-left:15px}}.footer[data-v-b06afa0c]{position:absolute;bottom:0;width:100%}@keyframes rotate-data-v-b06afa0c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.eventAction[data-v-b06afa0c]{position:relative}.eventAction[data-v-b06afa0c]:before{content:\"\";position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:3px solid #5390d7;border-bottom-color:transparent;background:transparent!important;-webkit-animation:rotate-data-v-b06afa0c .75s 0s linear infinite;animation:rotate-data-v-b06afa0c .75s 0s linear infinite}.map[data-v-b06afa0c]{width:100%;height:600px}.easy-scrollbar[data-v-b06afa0c],.easy-scrollbar__wrap[data-v-b06afa0c]{height:100%}@media only screen and (min-width:768px) and (max-width:1024px){.row[data-v-b06afa0c]{padding-left:15px}}.lib-select[data-v-b06afa0c]{padding-top:40px}@media only screen and (max-width:767px){.lib-select .goto-map[data-v-b06afa0c]{position:absolute;right:5px;top:0;z-index:15;padding:0 5px}.lib-select .goto-map .iconfont[data-v-b06afa0c]{font-size:26px}}.lib-select .list-info[data-v-b06afa0c]{margin-top:40px;text-align:center}.lib-select .locatio[data-v-b06afa0c]{text-align:center;margin-top:10px}@media only screen and (min-width:768px){.lib-select[data-v-b06afa0c]{height:600px;padding-right:35px;padding-left:0}.lib-select .list-container[data-v-b06afa0c]{height:100%}}@media only screen and (max-width:767px){.lib-select[data-v-b06afa0c]{position:relative;height:600px}.lib-select .list-container[data-v-b06afa0c]{margin-right:-6px;margin-left:-6px}}.black-cover[data-v-b06afa0c]{position:fixed;left:0;top:92px;z-index:3;width:100%;height:100%;opacity:.46;background-color:#000;transition:all 1s}.branch-wrap[data-v-b06afa0c]{left:0;z-index:10;height:40px;line-height:40px;text-align:center;background-color:#fff}.branch-wrap .icon-down[data-v-b06afa0c]{display:inline-block;width:22px;margin-left:-3px;color:#b2b2b2;font-size:12px}.branch-wrap .area-list[data-v-b06afa0c]{height:400px}.branch-wrap .level-list[data-v-b06afa0c]{max-height:400px}@media only screen and (min-width:768px){.branch-wrap[data-v-b06afa0c]{position:absolute;top:0;right:35px}}@media only screen and (max-width:767px){.branch-wrap[data-v-b06afa0c]{position:fixed;top:52px;right:0}}.branch[data-v-b06afa0c]{position:relative;width:100%;height:100%;border-bottom:1px solid #eee}.branch>div[data-v-b06afa0c]{float:left;width:50%;height:100%}.branch>div.active .iconfont[data-v-b06afa0c],.branch>div.active[data-v-b06afa0c]{color:#4474ac}.branch .area-scroll[data-v-b06afa0c]{position:absolute;top:40px;z-index:10;height:auto;max-height:400px;background-color:#fff}.branch .branch-area[data-v-b06afa0c]{position:relative;cursor:pointer}.branch .branch-area[data-v-b06afa0c]:after{content:\"\";display:block;position:absolute;right:0;top:50%;width:1px;height:15px;margin-top:-8px;background-color:#b4b4b4}.branch .branch-level[data-v-b06afa0c]{cursor:pointer}@media only screen and (min-width:768px){.branch .area-scroll[data-v-b06afa0c]{width:298px;box-shadow:0 0 30px rgba(0,0,0,.15);border-radius:5px}}@media only screen and (max-width:767px){.branch .area-scroll[data-v-b06afa0c]{width:100%}}.branch-list li[data-v-b06afa0c]{height:39px;line-height:38px;color:#666}.branch-list li+li[data-v-b06afa0c]{border-top:1px solid #dfe4e7}.branch-list li>label[data-v-b06afa0c]{display:block;width:100%;height:100%;cursor:pointer}.branch-list li .select-area[data-v-b06afa0c]{position:absolute;left:-9999em;opacity:0}.branch-list li .select-area span[data-v-b06afa0c]{cursor:pointer}.branch-list li .select-area:checked+span[data-v-b06afa0c]{color:#4c74ab}.pad10+.pad10 .libr-addr[data-v-b06afa0c]{border-top:1px solid #e0e5e8}.pad10 .libr-addr[data-v-b06afa0c]{position:relative}.pad10 .libr-addr .libr-name[data-v-b06afa0c]{color:#333;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pad10 .libr-addr .libr-name span[data-v-b06afa0c]{display:inline-block;width:32px;height:18px;line-height:18px;font-size:12px;color:#5390d7;text-align:center;vertical-align:1px;background:rgba(68,116,172,.1);border-radius:2px}.pad10 .libr-addr .libr-name .adult[data-v-b06afa0c]{float:right}.pad10 .libr-addr .libr-name .child[data-v-b06afa0c]{color:#5dc9a0;background-color:rgba(93,201,160,.1);float:right}.pad10 .libr-addr .libr-name i[data-v-b06afa0c]{font-size:12px;color:#888}.pad10 .libr-addr h3[data-v-b06afa0c],.pad10 .libr-addr p[data-v-b06afa0c]{margin:5px 0}.pad10 .libr-addr p[data-v-b06afa0c]{margin-top:7px;color:#959ca5;font-size:12px}.pad10 .icon-location2[data-v-b06afa0c]{position:absolute;left:0;color:#4474ac}@media only screen and (min-width:768px){.pad10[data-v-b06afa0c]{height:111px;padding-right:15px;cursor:pointer}.pad10 .libr-addr[data-v-b06afa0c]{padding:13px 0 11px 20px}.pad10 .libr-addr .libr-name[data-v-b06afa0c]{font-size:16px}.pad10 .libr-addr .libr-name i[data-v-b06afa0c]{padding-left:5px}.pad10 .icon-location2[data-v-b06afa0c]{top:18px}.pad10 .icon-clock-normal[data-v-b06afa0c],.pad10 .icon-xiaofangzi[data-v-b06afa0c]{margin-right:10px;font-size:14px}}@media only screen and (max-width:767px){.pad10[data-v-b06afa0c]{height:88px}.pad10 .libr-addr[data-v-b06afa0c]{padding:3px 9px 8px 18px}.pad10 .libr-addr .libr-name[data-v-b06afa0c]{font-size:15px}.pad10 .libr-addr .libr-name i[data-v-b06afa0c],.pad10 .libr-addr .libr-name span[data-v-b06afa0c]{font-size:11px}.pad10 .libr-addr .libr-name i[data-v-b06afa0c]{padding-left:5px;min-width:40px}.pad10 .icon-location2[data-v-b06afa0c]{top:9px;font-size:14px}.pad10 .icon-clock-normal[data-v-b06afa0c],.pad10 .icon-xiaofangzi[data-v-b06afa0c]{margin-right:5px;font-size:10px}}@media only screen and (max-width:767px){.lib-map[data-v-b06afa0c]{padding-left:0;padding-right:0;position:absolute;top:0;width:100%}.lib-map .goto-liblist[data-v-b06afa0c]{position:fixed;left:5px;top:60px;z-index:11;padding:0 5px}.lib-map .goto-liblist .iconfont[data-v-b06afa0c]{font-size:26px}.lib-map .goto-liblist .go-libs[data-v-b06afa0c]{display:block;background:url(/static/images/goto-libs.png) no-repeat 50%;width:40px;height:40px;background-size:100%}}", ""]);

// exports


/***/ }),

/***/ "K3dq":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".sample[data-v-bddce8ac]{position:absolute;width:450px;padding:15px;text-align:left;background-color:#fff;box-shadow:0 12px 16px 0 rgba(0,0,0,.05);border-radius:4px}@media only screen and (max-width:767px){.sample[data-v-bddce8ac]{width:360px}}.sample[data-v-bddce8ac]:after{content:\"\";position:absolute;left:50%;bottom:-28px;width:0;height:0;margin-left:-14px;border-style:solid dashed dashed;border-color:#fff transparent transparent;border-width:14px}.sample.isActive[data-v-bddce8ac]{display:none;background:rgba(0,0,0,.75);color:#fff}.sample h3[data-v-bddce8ac]{margin:0;font-size:16px;color:#333;font-weight:500}.sample .icon[data-v-bddce8ac]{text-align:right}.sample .icon i[data-v-bddce8ac]{color:#bec5c9;font-size:13px}.sample .title[data-v-bddce8ac]{margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid #bec5c9}.sample .title>.title-item[data-v-bddce8ac]{padding:0}.sample p[data-v-bddce8ac]{margin:5px 0}.sample p i[data-v-bddce8ac]{color:#4474ac;margin-right:10px}", ""]);

// exports


/***/ }),

/***/ "dkd9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("K3dq");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("ff23a9b0", content, true, {});

/***/ }),

/***/ "juFk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue__ = __webpack_require__("DNLx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bddce8ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myOverplay_vue__ = __webpack_require__("89MD");
function injectStyle (ssrContext) {
  __webpack_require__("dkd9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bddce8ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_myOverplay_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bddce8ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_myOverplay_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "see7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue__ = __webpack_require__("1kel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b06afa0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_museumNavigation_vue__ = __webpack_require__("vfc1");
function injectStyle (ssrContext) {
  __webpack_require__("2xuR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b06afa0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_museumNavigation_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b06afa0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_museumNavigation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vfc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-container"},[_c('bread-crumb'),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-4 lib-select",style:(_vm.showlibList?'':{visibility: 'hidden'})},[_c('div',{staticClass:"branch-wrap"},[_c('div',{staticClass:"branch"},[_c('div',{staticClass:"branch-area",class:{active: _vm.areaShow},attrs:{"id":"toggler-area"},on:{"click":function($event){_vm.selectModal(0)}}},[_vm._v(_vm._s(_vm.location || '区域')+"\n              "),_c('i',{staticClass:"iconfont icon-down",class:_vm.areaShow ? 'icon-arrow-up':'icon-arrow-down2'})]),_vm._v(" "),_c('EasyScrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.areaShow),expression:"areaShow"}],ref:"area",staticClass:"area-scroll",attrs:{"barOption":_vm.barOption}},[_c('ul',{staticClass:"branch-list area-list"},_vm._l((_vm.areaLists),function(item){return _c('li',{key:item.name},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentArea),expression:"currentArea"}],staticClass:"select-area",attrs:{"type":"radio","name":"area"},domProps:{"value":item.district,"checked":_vm._q(_vm.currentArea,item.district)},on:{"click":function($event){_vm.selectArea(item.filter)},"change":function($event){_vm.currentArea=item.district}}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.district))])])])}))]),_vm._v(" "),_c('div',{staticClass:"branch-level",class:{active: _vm.levelShow},attrs:{"id":"toggler-level"},on:{"click":function($event){_vm.selectModal(1)}}},[_vm._v(_vm._s(_vm.currentLevel || '层级')+"\n              "),_c('i',{staticClass:"iconfont icon-down",class:_vm.levelShow ? 'icon-arrow-up':'icon-arrow-down2'})]),_vm._v(" "),_c('EasyScrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.levelShow),expression:"levelShow"}],ref:"level",staticClass:"area-scroll",attrs:{"barOption":_vm.barOption}},[_c('ul',{staticClass:"branch-list level-list"},_vm._l((_vm.libLevel),function(item){return _c('li',{key:item.name},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentLevel),expression:"currentLevel"}],staticClass:"select-area",attrs:{"type":"radio","name":"level"},domProps:{"value":item.name,"checked":_vm._q(_vm.currentLevel,item.name)},on:{"click":function($event){_vm.selectLevel(item.filter)},"change":function($event){_vm.currentLevel=item.name}}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))])])])}))])],1)]),_vm._v(" "),_c('div',{staticClass:"list-container"},[_c('EasyScrollbar',{staticClass:"list-scroll",attrs:{"barOption":_vm.barOption}},[_c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.libList.length),expression:"!libList.length"}],staticClass:"list-info"},[_c('p',[_vm._v(_vm._s(_vm.listInfo))])]),_vm._v(" "),_vm._l((_vm.libList),function(item){return _c('div',{key:item.gcode,staticClass:"pad10",on:{"click":function($event){_vm.getEachInfo(item.gcode)}}},[_c('div',{staticClass:"libr-addr"},[_c('i',{staticClass:"iconfont icon-location2"}),_vm._v(" "),_c('h3',{staticClass:"libr-name",attrs:{"title":item.libname}},[(item.distance != -1)?_c('i',{staticClass:"pull-right"},[_vm._v(_vm._s(item.distance)+"米")]):_vm._e(),_vm._v(" "),(item.hasadult === '1')?_c('span',{staticClass:"adult"},[_vm._v("成人")]):_vm._e(),_vm._v(" "),(item.haschild === '1')?_c('span',{staticClass:"child"},[_vm._v("儿童")]):_vm._e(),_vm._v("\n                    "+_vm._s(item.libname)+"\n                    \n                  ")]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-xiaofangzi"}),_vm._v(_vm._s(item.address))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"iconfont icon-clock-normal"}),_vm._v(_vm._s(item.opentime))])])])})],2)])],1)]),_vm._v(" "),_c('div',{staticClass:"col-sm-8 lib-map",style:(_vm.showMap?'':{visibility: 'hidden'})},[_c('div',{staticClass:"goto-liblist visible-xs",on:{"click":_vm.hideTheMap}},[_c('i',{staticClass:"go-libs"})]),_vm._v(" "),_c('baidu-map',{staticClass:"map",attrs:{"id":"nearLibs","zoom":15,"scroll-wheel-zoom":true},on:{"ready":_vm.mapHandler}},_vm._l((_vm.points),function(marker,index){return _c('bm-marker',{key:index,attrs:{"position":marker,"icon":{url: '/static/images/baidu-icon.png', size: {width: 25, height:25}}},on:{"click":function($event){_vm.infoWindowOpen(index, marker.gcode)}}},[_c('my-overlay',{attrs:{"position":marker,"text":_vm.infoWinContent,"active":_vm.adress == index ? false : true},on:{"init-overplay":_vm.initOverPlay}})],1)}))],1),_vm._v(" "),(_vm.isMobile)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.levelShow || _vm.areaShow),expression:"levelShow || areaShow"}],staticClass:"black-cover"}):_vm._e()])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=9.9fe7cb013bc031b25f25.js.map