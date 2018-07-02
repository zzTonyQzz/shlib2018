<!-- index -->
<template>
  <div class="component-index" :style="{'padding-bottom': footerHeight}">
    <!-- header -->
    <header class="header">
      <site-header></site-header>
      <!-- 搜索 -->
      <search-area></search-area>
    </header>

    <!-- 主内容 -->
    <router-view></router-view>

    <!-- 非主内容, 如Modal等 -->
    <modal-login></modal-login>

    <!--侧部信息 -->
    <lib-info></lib-info>

    <!-- footer -->
    <footer class="footer">
      <site-footer
        ref="sitefooter"
        :each-height="eachHeight"
        @tabChange="tabChangeHandler"
      ></site-footer>
    </footer>
  </div>
</template>

<script>
let self = null;  // 定义保存 Vue `this` 对象

// 加载组件
import searchArea from '../components/search';      // 搜索框
import modalLogin from '../components/modalLogin';  // 用户登录Modal
import siteHeader from '../components/header';      // 页头
import libInfo from '../components/libInfo';      // 侧部信息


export default {
  data () {
    return {
      eachHeight: null
    };
  },

  components: {
    searchArea,
    modalLogin,
    siteHeader,
    libInfo
  },

  computed: {
    footerHeight () {
      let isMobile = this.$store.state.isMobile,
          isHideFullFooter = this.$store.state.isHideFullFooter;
      if (isMobile && !isHideFullFooter) {
        return `${self.$store.state.footerHeight}px`;
      }
    }
  },

  created () {
    self = this;  // Vue创建后将 `this` 赋值给定义的变量self
  },

  methods: {
    tabChangeHandler () { // 动态设置padding-bottom值
      self.$nextTick(() => {
        let dynamicHeight = self.$refs.sitefooter.$el.offsetHeight;
        self.eachHeight = dynamicHeight + 15;
      });
    }
  }
}

</script>
<style lang="less" scoped>
  @import '../css/less/common';

  .component-index {
    position: relative;
    min-height: 100%;
    
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-bottom: @footerHeight + @footerMargin;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      padding-bottom: 15px;
    }
  }

  // header - moible 固定定位
  .header {
    @media only screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      z-index: @zIndex + 12;
      width: 100%;
    }
  }
</style>
