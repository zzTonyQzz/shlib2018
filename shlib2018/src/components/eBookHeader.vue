<!-- ebook header -->
<template>
  <div class="component-header">
    <!-- nav -->
    <div class="container">
      <div class="row">
        <!-- logo -->
        <router-link to="/eBook" class="logo vertical-top"></router-link>
        <!-- 导航项目 -->
        <div class="header-items vertical-top">
          <div class="login">
            <a href="javascript:;" @click="logIn">
              <i class="iconfont icon-user-avatar"></i><span>{{username}}</span>
            </a>
          </div>
          <router-link :to="{path: '/eBook/bookClassification'}" class="bookclass">
            <i class="iconfont icon-classifission"></i><span class="hidden-xs">图书分类</span>
          </router-link>
          <a href="javascript:;" @click="goToMyShelf">
            <i class="iconfont icon-my-shelf2"></i><span class="hidden-xs">我的书架</span>
          </a>
          <a href="javascript:;" @click.stop="showSearchBar(0)" :class="{active: isActive}">
            <i class="iconfont icon-search2"></i><span class="hidden-xs">搜索</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// vuex
import { mapState } from 'vuex';

// api request
import { userprofiles } from '../server/api';

export default {
  name: "eBookHeader",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      menuActive: null,
      username: '登录'
    };
  },

  created () {
    self = this;
  },

  computed: mapState({
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    isActive (state) {
      return state.showSearchBar && self.menuActive === 0;
    }
  }),
  mounted () {
    this.getUserInfo();
  },
  methods: {
    getUserInfo () {
      let uat = self.ls.getItem('UAT');
      if (!uat) {
        this.username = '登录';
        return;
      }
      userprofiles.getUserProfiles({uat})
      .then(res => {
        if (!res || self.utils.isEmpty(res)) return;
        this.username = res.nameCn;
      });
    },
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
      // console.log(currentState);
      self.commitEvent('changeSearchBar', !currentState); // 显示搜索框
    },
    logIn () {
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
    goToMyShelf () {
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
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
      .size(32px; 32px);
      background: url(/static/images/elib.jpg) no-repeat left center;
      background-size: contain;
    }

    // 导航项目
    .header-items {
      text-align: right;
      color: #666;
      // Mobile
      @media only screen and (max-width: 767px) {
        flex: 1;
        .login {
          display: inline-block;
          font-size: 13px;
          padding-right: 14px;
          border-right: 1px solid #979797;
          a {
            color: #666;
            .iconfont {
              margin-right: 5px;
            }
          }
        }
      }
      
      > a {
        height: 100%;
        margin-left: 19px;
        color: #333;

        // Mobile
        @media only screen and (max-width: 767px) {
          flex: 1;

          .iconfont {
            font-size: 18px;
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
    z-index: @zIndex + 998;
    background-color: rgba(0, 0, 0, .3);

    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 80%;
      min-height: 280px;
      padding: 10px;
      background-color: #fff;
      .border-radius(4px);
      transform: translate3d(-50%, -50%, 0);
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
        .size(130px; 100%);
        // margin: 5px 0;
        background: url(/static/images/ebook-logo.png) no-repeat left center;
        background-size: 100%;
      }

      .header-items {
        float: right;
        // display: inline-block;
        width: ~"calc(100% - 235px)";
        height: 80px;
        font-size: 0; // 去除inline-block 3px 间隙, 子级必须设置font-size
        .login {
          a {
            color: #333;
            height: 100%;
            display: inline-block;
            padding: 0 10px 0 10px;
            &:hover:after,
            &.active:after {
              background-color: @navActiveColor;
              color: @navActiveColor;
            }
            &:after {
              content: "";
              position: absolute;
              right: 50px;
              bottom: 15px;
              left: 0;
              height: 2px;
              background-color: transparent;
            }
          }
          height: 80px;
          padding: 0 50px 0 0;
          @navActiveColor: #4474ac;
          position: relative;
          display: inline-block;
          font-size: 18px;
          border-right: 1px solid #eee;
        }
        > a {
          @navActiveColor: #4474ac;
          position: relative;
          display: inline-block;
          margin-left: 20px;
          padding-right: 10px;
          padding-left: 10px;
          // padding-left: 3px;
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
        .bookclass {
          margin-left: 50px;
        }
        .iconfont {
          margin-right: 10px;
          font-size: 20px;
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
        left: @padMargin;
        .size(110px; 100%);
      }

      .header-items {
        height: 60px;
        .login {
          height: 60px;
        }
        > a {
          margin-right: 30px;
          font-size: 16px;
        }

        .iconfont {font-size: 16px;}
      }

      .menu {
        margin-right: -11px;
      }
    }
  }
  // ============================== End =================================
</style>