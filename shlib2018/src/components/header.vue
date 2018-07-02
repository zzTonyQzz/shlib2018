<!-- header -->
<template>
  <div class="component-header">
    <!-- nav -->
    <div class="container">
      <div class="row">
        <!-- logo -->
        <router-link to="/index" class="logo vertical-top"></router-link>
        <!-- 导航项目 -->
        <div class="header-items vertical-top">
          <a href="javascript:;" @click.stop="showSearchBar(0)" :class="{active: isActive}">
            <i class="iconfont icon-search2"></i><span class="hidden-xs">搜索</span>
          </a>
          <a href="javascript:;" class="visible-xs-inline-block" @click="getQrcodeId">
            <i class="iconfont icon-qrcode"></i>
          </a>
          <a href="javascript:;" @click="viewMyLibrary">
            <i class="iconfont" :class="showLoginIcon?'icon-activity':'icon-user-avatar'"></i><span class="hidden-xs">我的图书馆</span>
          </a>
          <router-link :to="{path: '/index/museumNavigation'}">
            <i class="iconfont icon-location3"></i><span class="hidden-xs">分馆导航</span>
          </router-link>
        </div>
        <!-- menu -->
        <router-link :to="{path: '/index/fullMenu'}" tag="span" class="menu vertical-top">
          <i class="iconfont icon-mobile-menu"></i>
        </router-link>
      </div>
    </div>

    <!-- 二维码读者证 -->
    <div class="modal-qrcode" v-if="isMobile && showQrcode">
      <i class="iconfont icon-close-bg" @click="closeQrcode"></i>
      <div class="qrcode-note">
        <h3>二维码读者证</h3>
        <p>在上海图书馆，使用自助借还设备进行借书、续借操作时，让自助设备“扫一下”即可。</p>
      </div>
      <span><img :src="qrcodeImage" class="img-responsive"></span>
      <div class="qrcode-note">
        <p>二维码读者证有效时间1分钟，若失效请手动刷新</p>
      </div>
      <button class="qrcode-btn" @click.stop="refreshQrCode">刷新二维码</button>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// vuex
import { mapState } from 'vuex';

// api request
import {getQrcodeId} from '../server/api';

export default {
  name: "siteHeader",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      menuActive: null,
      qrcodeImage: '',
      showQrcode: false
    };
  },

  created () {
    self = this;
  },

  computed: mapState({
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    isActive (state) {
      return state.showSearchBar && self.menuActive === 0;
    },
    showLoginIcon () {
      let state;
      // state = self.ls.getItem('loginUserInfo');
      // if (state) {
      //   return true;
      // }
      state = self.$store.state.showLoginIcon;
      return state;
    }
  }),

  methods: {
    showSearchBar (index) {
      let currentPage = self.$route.name;
      let currentState = self.$store.state.showSearchBar;
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
    getQrcodeId () {
      if (!this.ls.getItem('loginUserInfo')) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: 'done'
        });
        self.utils.modalOpenEvent(true);
        return;
      }

      getQrcodeId().then(res => {
        if (res.code && res.code === '-1') {
          return;
        }
        self.showQrcode = true;
        self.qrcodeImage = res.qrurl;
      }).catch(error => {

      });
    },
    viewMyLibrary () {
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
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
    closeQrcode () {
      self.showQrcode = false;
      self.qrcodeImage = '';
    },
    refreshQrCode () {  // 刷新qrcode
      // console.log(111);
      getQrcodeId().then(res => {
        if (res.code && res.code === '-1') {
          return;
        }
        self.qrcodeImage = res.qrurl;
      }).catch(error => {

      });
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .component-header {
    position: relative;
    height: 52px;
    background-color: #fff;

    &:after {
      content: "";
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: #eee;
    }

    .container {
      height: 100%;
      font-size: 0; // 去除inline-block 间隙, 子级必须设置font-size

      .row {
        height: 100%;

        // Mobile
        @media only screen and (max-width: 767px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 11px;
          padding-right: 11px;
        }
      }
    }

    // logo
    .logo {
      display: inline-block;
      .size(30px; 22px);
      background: url(/static/images/logo.png) no-repeat left center;
      background-size: contain;
      
    }

    // 导航项目
    .header-items {
      text-align: right;

      // Mobile
      @media only screen and (max-width: 767px) {
        flex: 1;
      }
      
      > a {
        height: 100%;
        margin-right: 19px;
        color: #333;

        // Mobile
        @media only screen and (max-width: 767px) {
          flex: 1;

          .iconfont {
            font-size: 18px;
          }
          .icon-activity {
            color: #5390d7;
          }
        }
      }
    }

    // menu
    .menu {
      height: 100%;
      border-left: 1px solid #eee;
      cursor: pointer;

      // Mobile
      @media only screen and (max-width: 767px) {
        @mobileMenuPadding: 14px;

        display: flex;
        align-items: center;
        padding-right: @mobileMenuPadding;
        padding-left: @mobileMenuPadding;
        margin-right: -(@mobileMenuPadding - 3);
      }
    }
  }

  // 二维码读者证
  .modal-qrcode {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: @zIndex + 9;
    background-color: #eee;
    // background-color: rgba(0, 0, 0, .3);
    padding-top: 40px;
    .iconfont {
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 36px;
      line-height: 1;
    }
    .qrcode-note {
      padding: 0 35px;
      p {
        color: #999;
      }
    }
    .qrcode-btn {
      width: 280px;
      height: 36px;
      color: #eee;
      font-size: 16px;
      margin: 0 auto;
      display: block;
      background-color: #5f9ce3;
      .border-radius(4px);
    }
    > span {
      // position: absolute;
      // top: 50%;
      // left: 50%;
      display: block;
      margin: 0 auto;
      max-width: 80%;
      min-height: 280px;
      padding: 10px;
      background-color: #fff;
      .border-radius(4px);
      // transform: translate3d(-50%, -50%, 0);
    }
    @media all and (orientation : landscape) {
      // padding-top: 0;
      > span {
        max-width: 280px;
        max-height: 280px;
        float: left;
        margin-left: 40px;
        // margin-top: 30px;
      }
      .qrcode-note {
        width: 50%;
        float: right;
      }
      .qrcode-btn {
        float: right;
        margin-right: 30px;
      }
    }
  }

  // ============================== @media =================================
  // Pad | PC
  @media only screen and (min-width: 768px) {
    .component-header {
      @headerHeight: 80px;

      height: @headerHeight;
      line-height: @headerHeight;

      .logo {
        position: relative;
        // .size(125px; 100%);
        .size(310px; 100%);
        padding: 10px 0;
        background: url(/static/images/logo-pc.png) no-repeat left center;
        background-size: 100%;
      }

      .header-items {
        display: inline-block;
        width: ~"calc(100% - 390px)";
        height: 80px;
        font-size: 0; // 去除inline-block 3px 间隙, 子级必须设置font-size

        > a {
          @navActiveColor: #4474ac;
          position: relative;
          display: inline-block;
          margin-right: 46px;
          padding-right: 10px;
          padding-left: 3px;
          font-size: 18px;

          &:hover:after,
          &.active:after {
            background-color: @navActiveColor;
            color: @navActiveColor;
          }

          &:after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 15px;
            left: 0;
            height: 2px;
            background-color: transparent;
          }
        }

        .iconfont {
          margin-right: 10px;
          font-size: 20px;
        }
        .icon-activity {
          color: #5390d7;
        }
      }

      .menu {
        @padding: 26px;
        
        display: inline-block;
        padding-right: @padding;
        padding-left: @padding;
      }
    }
  }

  // Pad -V
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .component-header {
      @height: 60px;
      height: @height;
      line-height: @height;

      .logo {
        height: 50px;
        margin: 5px 0;
        left: @padMargin;
        background-size: 100%;
        width: 280px;
      }

      .header-items {
        > a {
          margin-right: 30px;
          font-size: 16px;
        }

        .iconfont {font-size: 16px;}
        .icon-activity {
          color: #5390d7;
        }
      }

      .menu {
        margin-right: -11px;
      }
    }
  }
  // ============================== End =================================
</style>