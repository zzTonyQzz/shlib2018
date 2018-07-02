<!-- header -->
<template>
  <div class="component-header">
    <!-- nav -->
    <div class="container">
      <div class="row">
        <!-- logo -->
        <a href="javascript:;" class="logo vertical-top"></a>
        <!-- 导航项目 -->
        <div class="header-items vertical-top">
          <a href="javascript:;">
            <i class="iconfont icon-user-login"></i><span class="hidden-xs">登录</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-classifission"></i><span class="hidden-xs">图书分类</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-my-shelf2"></i><span class="hidden-xs">我的书架</span>
          </a>
           <a href="javascript:;">
            <i class="iconfont icon-search2"></i><span class="hidden-xs">搜索</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "libHeader",

  data () {
    return {
    };
  },

  created () {
    self = this;
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
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
      @media only screen and (max-width: 750px) {
        flex: 1;
      }
      
      > a {
        height: 100%;
        margin-right: 19px;
        color: #333;

        // Mobile
        @media only screen and (max-width: 750px) {
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
      @media only screen and (max-width: 750px) {
        @mobileMenuPadding: 14px;

        display: flex;
        align-items: center;
        padding-right: @mobileMenuPadding;
        padding-left: @mobileMenuPadding;
        margin-right: -(@mobileMenuPadding - 3);
      }
    }
  }

  // ============================== @media =================================
  // Pad | PC
  @media only screen and (min-width: 767px) {
    .component-header {
      @headerHeight: 80px;

      height: @headerHeight;
      line-height: @headerHeight;

      .logo {
        position: relative;
        left: @padPadding;
        .size(59px; 100%);
      }

      .header-items {
        display: inline-block;
        width: ~"calc(100% - 135px)";
        font-size: 0; // 去除inline-block 间隙, 子级必须设置font-size

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
      }

      .menu {
        @padding: 26px;
        
        display: inline-block;
        padding-right: @padding;
        padding-left: @padding;
      }
    }
  }

  // Pad竖屏
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .component-header {
      @height: 60px;

      height: @height;
      line-height: @height;

      .header-items {
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