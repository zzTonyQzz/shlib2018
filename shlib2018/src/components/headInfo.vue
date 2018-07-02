<!-- 首页头部/页脚信息栏 -->
<template>
  <div class="info-noto">
      <div class="info-note-head" v-show="headNotice">
        <div class="container info-container">
          <div class="info-content" v-html="headNotice"></div>
          <span class="info-close info-head-close" title="关闭" @click="closeHeadInfo"><i class="iconfont icon-close2"></i></span>
        </div>
      </div>
      <div class="info-note-footer" v-show="footNotice">
        <div class="container info-container">
          <div class="info-content" v-html="footNotice"></div>
          <span class="info-close info-foot-close" title="关闭" @click="closeFootInfo"><i class="iconfont icon-close2"></i></span>
        </div>
      </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "headInfo",

  data () {
    return {
      // showHeadInfo: true,
      // showFootInfo: true,
      headNotice: '',
      footNotice: ''
    };
  },

  created () {
    self = this;
  },

  components: {},

  // props: {
  //   headNotice: { // 头部信息
  //     type: String,
  //     default: ''
  //   },
  //   footNotice: { // 页脚信息
  //     type: String,
  //     default: ''
  //   },
  // },

  mounted () {
    this.headNotice = "<span class=\"cat\">欢迎来到上海图书馆</span>",
    this.footNotice = "<div style=\"width:100%\"><span style=\"float:left\"><i class=\"iconfont icon-author\"></i>欢迎来到上海图书馆</span><div style=\"float:right\"><a href=\"https://www.baidu.com\" target=\"_blank\">点击就送</a></div></div>"
    // setTimeout(() => {
    //   this.init();
    // }, 1000);
  },

  methods: {
    init () {
      let cat = document.getElementsByClassName('cat');
      let cato = document.getElementsByClassName('info-content');
      console.log(cat[0].offsetWidth)
      console.log(cato[0].offsetWidth)
    },
    closeHeadInfo () {
      this.headNotice = '';
    },
    closeFootInfo () {
      this.footNotice = '';
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";
  .info-noto {
    width: 100%;
    .info-content {
      position: relative;
      // float: left;
      // margin: 0;
      // display: inline-block;
      height: 48px;
      // width: 100%;
      margin-right: 48px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-decoration: none;
      @media only screen and (max-width: 767px) { 
        height: 36px;
      }
    }
    .info-note-head {
      height: 48px;
      line-height: 48px;
      background: #D1D1D1;
      overflow: hidden;
      @media only screen and (max-width: 767px) { 
        height: 36px;
        line-height: 36px;
      }
      .container {
        position: relative;
      }    
    }
    .info-note-footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      height: 48px;
      line-height: 48px;
      background: #102442;
      z-index: 10;
      overflow: hidden;
      @media only screen and (max-width: 767px) { 
        height: 36px;
        line-height: 36px;
      }
      .container {
        position: relative;
      }
      .info-content {
        color: #fff;
      }
    }
    .info-close {
      // float: right;
      position: absolute;
      right: 0;
      top: 0;
      height: 32px;
      line-height: 32px;
      text-align: center;
      width: 32px;
      margin: 8px;
      cursor: pointer;
      @media only screen and (max-width: 767px) { 
        height: 24px;
        line-height: 24px;
        width: 24px;
        margin: 6px;
      }
      // border: 2px solid transparent;
      // box-sizing: border-box;
    }
    .info-head-close {
      // &:hover {
      //   border-color: #000;
      // }
    }
    .info-foot-close {
      .iconfont {
        color: #fff;
      }
      // &:hover {
      //   border-color: #fff;
      // }
    }
    .info-container {
      overflow: hidden;
      height: 48px;
      @media only screen and (max-width: 767px) { 
        height: 36px;
      }
    }
  }

</style>
<style lang="less">
@keyframes scroll{
  from {
    // margin-left:100%;
    left: 100%;
  }
  to {
    // margin-left: -100%;
    left: -200%;
  }
}

.scroll{
    height:30px;
    overflow:hidden;
    position: absolute;
    // -webkit-animation-name: scroll;
    // -webkit-animation-delay: 1000ms;
    // -webkit-animation-duration: 1s;
    // -webkit-animation-timing-function: linear;
    // -webkit-animation-iteration-count: infinite;
    // -moz-animation-name: scroll;
    // -moz-animation-delay: 1000ms;
    // -moz-animation-duration: 5s;
    // -moz-animation-timing-function: linear;
    // -moz-animation-iteration-count: infinite;
    // -ms-animation-name: scroll;
    // -ms-animation-delay: 1000ms;
    // -ms-animation-duration: 5s;
    // -ms-animation-timing-function: linear;
    // -ms-animation-iteration-count: infinite;
    animation-name:scroll;
    animation-duration: 30s;
    animation-delay: 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    } 
</style>
