<!-- index -->
<template>
  <div class="component-index" :style="{'padding-bottom': footerHeight}">
    <!-- header -->
    <header class="header">
      <eBook-header></eBook-header>
      <!-- 搜索 -->
      <ebook-search></ebook-search>
    </header>

    <!-- 主内容 -->
    <router-view></router-view>

    <!-- 非主内容, 如Modal等 -->
    <modal-login></modal-login>
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
import ebookSearch from '../components/ebookSearch';      // 搜索框
import modalLogin from '../components/modalLogin';  // 用户登录Modal
import eBookHeader from '../components/eBookHeader';      // 页头

export default {
  data () {
    return {
      eachHeight: null
    };
  },

  components: {
    ebookSearch,
    modalLogin,
    eBookHeader
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
  .header {
    @media only screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      z-index: @zIndex + 9;
      width: 100%;
    }
  }
</style>
