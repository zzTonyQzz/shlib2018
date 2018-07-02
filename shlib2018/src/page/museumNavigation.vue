<!-- 分馆导航 -->
<template>
  <div class="component-container">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 lib-select" :style="showlibList?'':{visibility: 'hidden'}">
          <div class="branch-wrap">
            <!-- <div class="goto-map visible-xs" @click="showTheMap"><i class="iconfont icon-location2"></i></div> -->
            <div class="branch">
              <div
                class="branch-area"
                :class="{active: areaShow}"
                @click="selectModal(0)"
                id="toggler-area"
              >{{location || '区域'}}
                <i class="iconfont icon-down" :class="areaShow ? 'icon-arrow-up':'icon-arrow-down2'"></i>
              </div>

              <EasyScrollbar
                class="area-scroll"
                ref="area"
                v-show="areaShow"
                :barOption="barOption"
              >
                <ul class="branch-list area-list">
                  <li v-for="item in areaLists" :key="item.name">
                    <label>
                      <input
                        type="radio"
                        name="area"
                        class="select-area"
                        @click="selectArea(item.filter)"
                        v-model="currentArea"
                        :value="item.district"
                      >
                      <span>{{item.district}}</span>
                    </label>
                  </li>
                </ul>
              </EasyScrollbar>
              
              <div
                class="branch-level"
                :class="{active: levelShow}"
                @click="selectModal(1)"
                id="toggler-level"
              >{{currentLevel || '层级'}}
                <i class="iconfont icon-down" :class="levelShow ? 'icon-arrow-up':'icon-arrow-down2'"></i>
              </div>
              <EasyScrollbar
                class="area-scroll"
                ref="level"
                v-show="levelShow"
                :barOption="barOption"
              >
                <ul class="branch-list level-list">
                  <li v-for="item in libLevel" :key="item.name">
                    <label>
                      <input
                        type="radio"
                        name="level"
                        class="select-area"
                        @click="selectLevel(item.filter)"
                        v-model="currentLevel"
                        :value="item.name"
                      >
                      <span>{{item.name}}</span>
                    </label>
                  </li>
                </ul>
              </EasyScrollbar>
              
            </div>
          </div>

          <!-- 分馆地址列表 -->
          <div class="list-container">
            <EasyScrollbar
              :barOption="barOption"
              class="list-scroll"
            >
              <div>
                <!-- <div class="locatio">{{location + currentLevel}}</div> -->
                <div class="list-info" v-show="!libList.length">
                  <p>{{listInfo}}</p>
                </div>
                <div class="pad10"
                  v-for="item in libList"
                  :key="item.gcode"
                  @click="getEachInfo(item.gcode)"
                >
                  <div class="libr-addr">
                    <i class="iconfont icon-location2"></i>
                    <h3 class="libr-name" :title="item.libname">
                      <i class="pull-right" v-if="item.distance != -1">{{item.distance}}米</i>
                      <span class="adult" v-if="item.hasadult === '1'">成人</span>
                      <span class="child" v-if="item.haschild === '1'">儿童</span>
                      {{item.libname}}
                      
                    </h3>
                    <p><i class="iconfont icon-xiaofangzi"></i>{{item.address}}</p>
                    <p><i class="iconfont icon-clock-normal"></i>{{item.opentime}}</p>
                  </div>
                </div>
              </div>
            </Easyscrollbar>
          </div>
        </div>
        <div class="col-sm-8 lib-map" :style="showMap?'':{visibility: 'hidden'}">
          <div class="goto-liblist visible-xs" @click="hideTheMap">
            <i class="go-libs"></i>
          </div>
          <baidu-map class="map" id="nearLibs" @ready="mapHandler" :zoom="15" :scroll-wheel-zoom="true">
            <bm-marker
              v-for="(marker,index) in points"
              :key="index"
              :position="marker"
              :icon="{url: '/static/images/baidu-icon.png', size: {width: 25, height:25}}"
              @click="infoWindowOpen(index, marker.gcode)"
            >
              <my-overlay
                :position="marker"
                :text="infoWinContent"
                :active="adress == index ? false : true"
                @init-overplay="initOverPlay"
              >
              </my-overlay>
            </bm-marker>
          </baidu-map>
        </div>

        <!-- 手机端半透明遮罩层 -->
        <div class="black-cover" v-if="isMobile" v-show="levelShow || areaShow"></div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this
import myOverlay from "../components/myOverplay";

// api request
import {libsQuery} from '../server/api';

export default {
  name: "museumNavigation",

  data() {
    return {
      isMobile: this.$store.state.isMobile,
      libList: [], // 附近图书馆列表
      allLibList: [], // 缓存查询的列表
      // showlibList: this.$store.state.isMobile ? false : true,
      // showMap: true,
      showlibList: true,
      showMap: this.$store.state.isMobile ? false :true,
      listInfo: '',

      // BaiduMap 配置
      location: "上海",
      points: [],   // 地图显示点
      allPoints: [],  // 缓存所有点
      infoWinContent: {},
      adress: null,
      saveMapObj: null,  // 存储百度地图实例, 后续调用

      // 选择区县Modal
      areaShow: false,  // 是否显示 `选择区县` Modal
      currentArea: '',  // 当前选择区县
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
      levelShow: false,  // 是否显示 `选择层级` Modal
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

  created() {
    self = this;
  },

  components: {
    myOverlay
  },

  methods: {
    /** 
     * [mapHandler 处理百度地图API]
     * @param {Object} 百度地图组件对象
     * @param {Object } 百度地图组件
     */
    mapHandler ({BMap, map}) {
      // 存储百度地图实例, 后续调用
      self.saveMapObj = {BMap, map};
      let geolocation = new BMap.Geolocation();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        function (position){
          let lng = position.coords.longitude;
          let lat = position.coords.latitude;
          // var point = new BMap.Point(lng, lat);
          // map.centerAndZoom(point, 14);
          // self.setMapCenterAndZoom(lng, lat, 14);
          self.getLibList({lng, lat});
          self.location = '您的附近';
          // alert(lng);
          // console.log(position);
        }, function (msg) {
          let lng = '121.451271';
          let lat = '31.214195';
          // var point = new BMap.Point(lng, lat);
          // map.centerAndZoom(point, 14);
          // self.setMapCenterAndZoom(lng, lat, 14);
          self.getLibList({lng, lat});
          self.location = '上海图书馆附近'
          // console.log(msg);
        }, {timeout:4000});
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
    getLibList ({lng, lat, level, district}) {
      // self.location = '';
      self.listInfo = '';
      window.scroll(0, 0);
      const params = {
        lng, 
        lat, 
        level, 
        district,
        // page: 1,
        // pagesize: 10
      };
      libsQuery.getLibsInfo(params)
      .then(res => {
        let data = res.result;
        if (!data.length) {
          self.libList = [];
          return;
        };
        self.points.length = 0;
        self.allPoints.length = 0;
        let tempArr = data.map(item => {
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
          }
        });
        let centerPoint = self.points[0];
        self.setMapCenterAndZoom(centerPoint.lng, centerPoint.lat, 14);
        self.libList = tempArr;
        self.allLibList = tempArr;
      }).catch(error => {
        // alert(error)
      });
    },
    /**
     * [getEachInfo 地图info window 显示所选图书馆信息]
     * @param {String} code 所选图书馆内部code
     */
    getEachInfo (code) {
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
      for (let i = 0, l = self.points.length; i < l; i++) {
        // const {BMap, map} = self.saveMapObj;
        const point = self.points[i];
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
    setMapCenterAndZoom (lng, lat, zoom) {
      const {BMap, map} = self.saveMapObj;
      map.centerAndZoom(new BMap.Point(lng, lat), zoom);
    },
    setMapCenter (lng, lat) {
      const {BMap, map} = self.saveMapObj;
      map.setCenter(new BMap.Point(lng, lat));
    },
    /**
     * [selectModal 区域 | 层级 选择Modal]
     * @param {Int} index  => 0: 区域Modal | 1: 层级Modal
     */
    selectModal (index) {
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
        default: break;
      }
    },
    /**
     * [selectArea 选择区域]
     * @param {String} district 区县名(上海市现有区县)
     */
    selectArea (district) {
      let params = {
        district,
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
    selectLevel (level) {
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
      let tempArr = [];
      let tempPoints = [];
      self.allLibList.map(item => {
        if (item.level === level) {
          tempArr.push(item)
        }
      });
      self.allPoints.map(item => {
        if (item.level === level) {
          tempPoints.push(item)
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
    infoWindowOpen (i, code) {
      self.infoWinContent = self.libList.filter(item => {
        return item.gcode === code;
      })[0];
      self.adress = i;
    },
    showTheMap () {
      self.showlibList = false;
      self.showMap = true;
    },
    hideTheMap () {
      self.showMap = false;
      self.showlibList = true;
    },
    initOverPlay () {
      self.adress = -1;
    }
  }
};
</script>
<style lang="less" scoped>
  @import "../css/less/common";
  .map {.size(100%; 600px);}
  .easy-scrollbar,
  .easy-scrollbar__wrap {
    height: 100%;
  }
  .row {
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding-left: 15px;
      // padding-right: 15px;
    }
  }
  .lib-select {
    padding-top: 40px;

    .goto-map {
      @media only screen and (max-width: 767px) {
        position: absolute;
        right: 5px;
        top: 0;
        z-index: 15;
        padding: 0 5px;
        // font-size: 26px;
        .iconfont {
          font-size: 26px;
        }
      }
    }
    .list-info {
      margin-top: 40px;
      text-align: center;
    }
    .locatio {
      text-align: center;
      margin-top: 10px;
    }
    // ================== @Media ===================
    // PC
    @media only screen and (min-width: 768px) {
      height: 600px;
      padding-right: 35px;
      padding-left: 0;

      .list-container {
        height: 100%;
      }
      .list-scroll {
        // width: 298px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: relative;
      height: 600px;
      .list-container {
        margin-right: -6px;
        margin-left: -6px;
      }
    }
  }

  // 遮罩层
  .black-cover {
    position: fixed;
    left: 0;
    top: 92px;
    z-index: 3;
    .square(100%);
    opacity: .46;
    background-color: #000;
    transition: all 1s;
  }

  .branch-wrap {
    left: 0;
    z-index: 10;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;

    .icon-down {
      display: inline-block;
      width: 22px;
      margin-left: -3px;
      color: #b2b2b2;
      font-size: 12px;
    }

    // 区域
    .area-list {height: 400px;}

    // 层级
    .level-list {max-height: 400px;}

    // ================ @Media ===================
    // PC
    @media only screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 35px;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: @headerHeight;
      right: 0;
    }
  }

  .branch {
    position: relative;
    .square(100%);
    border-bottom: 1px solid #eee;

    > div {
      float: left;
      .size(50%; 100%);

      &.active {
        color: #4474ac;

        .iconfont {color: #4474ac;}
      }
    }

    .area-scroll {
      position: absolute;
      top: 40px;
      z-index: 10;
      height: auto;
      max-height: 400px;
      background-color: #fff;
    }

    .branch-area {
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        .size(1px; 15px);
        margin-top: -8px;
        background-color: #b4b4b4;
      }
    }

    .branch-level {cursor: pointer;}

    // ================== @Media ====================
    // PC
    @media only screen and (min-width: 768px) {
      .area-scroll {
        width: 298px;
        box-shadow: 0 0 30px rgba(0, 0, 0, .15);
        .border-radius(5px);
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      .area-scroll {
        width: 100%;
      }
    }
  }

  .branch-list {
    li {
      height: 39px;
      line-height: 38px;
      color: #666;

      + li {
        border-top: 1px solid #dfe4e7;
      }

      > label {
        display: block;
        .square(100%);
        cursor: pointer;
      }

      .select-area {
        position: absolute;
        left: -9999em;
        opacity: 0;

        span {cursor: pointer;}

        &:checked + span {color: #4c74ab;}
      }
    }
  }

  .pad10 {
    + .pad10 {
      .libr-addr {
        border-top: 1px solid #e0e5e8;
      }
    }

    .libr-addr {
      position: relative;

      .libr-name {
        color: #333;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        span {
          display: inline-block;
          .size(32px; 18px);
          line-height: 18px;
          font-size: 12px;
          color: #5390d7;
          text-align: center;
          .vertical-align(1px);
          background: rgba(68, 116, 172, .1);
          border-radius: 2px;
        }
        .adult {
          float: right;
        }
        .child {
          color: #5dc9a0;
          background-color: rgba(93, 201, 160, .1);
          float: right;
        }

        i {
          font-size: 12px;
          color: #888;
        }
      }

      p,
      h3 {
        margin: 5px 0;
      }

      p {
        margin-top: 7px;
        color: #959ca5;
        font-size: 12px;
      }
    }

    .icon-location2 {
      position: absolute;
      left: 0;
      color: #4474ac;
    }

    // ============== @Media ================
    // PC
    @media only screen and (min-width: 768px) {
      height: 111px;
      padding-right: 15px;
      cursor: pointer;
      
      .libr-addr {
        padding: 13px 0 11px 20px;

        .libr-name {
          font-size: 16px;
          i {
            padding-left: 5px;
          }
        }
      }

      .icon-location2 {
        top: 18px;
      }

      .icon-xiaofangzi,
      .icon-clock-normal {
        margin-right: 10px;
        font-size: 14px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      height: 88px;

      .libr-addr {
        padding: 3px 9px 8px 18px;

        .libr-name {
          font-size: 15px;

          i, span {
            font-size: 11px;
          }
          i {
            padding-left: 5px;
            min-width: 40px;
          }
        }
      }

      .icon-location2 {
        top: 9px;
        font-size: 14px;
      }

      .icon-xiaofangzi,
      .icon-clock-normal {
        margin-right: 5px;
        font-size: 10px;
      }
    }
  }

  .lib-map {
    @media only screen and (max-width: 767px) {
      padding-left: 0;
      padding-right: 0;
      position: absolute;
      top: 0;
      width: 100%;
      .goto-liblist {
        // background-color: #fff;
        position: fixed;
        left: 5px;
        top: 60px;
        z-index: 11;
        padding: 0 5px;
        // font-size: 26px;
        .iconfont {
          font-size: 26px;
        }
        .go-libs {
          display: block;
          background: url(/static/images/goto-libs.png) no-repeat center;
          width: 40px;
          height: 40px;
          background-size: 100%;
        }
      }
    }
  }
</style>