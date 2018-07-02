<!-- footer -->
<template>
  <div class="component-footer" v-show="!footerHideAll">
    <div class="container">
      <div class="row">
        <!-- 交通信息、开馆时间、友情链接 切换显示 -->
        <div class="switch-info clearfix" v-if="showMiddleContent">
          <ul class="title-tab">
            <li @click="changeStatus(0)" :class="{active: tabActive === 0}"><i class="iconfont icon-traffic-info"></i>交通信息</li>
            <li @click="changeStatus(1)" :class="{active: tabActive === 1}"><i class="iconfont icon-open-time"></i>开馆时间</li>
            <li @click="changeStatus(2)" :class="{active: tabActive === 2}"><i class="iconfont icon-friend-link"></i>友情链接</li>
          </ul>
          <div class="tab-content">
            <!-- 交通信息 -->
            <ul class="tab-content-item" v-show="tabActive === 0">
              <li>
                <span class="left-title">地址：</span>
                <p class="item-details">上海市淮海中路1555号</p>
              </li>
              <li>
                <span class="left-title">邮编：</span>
                <p class="item-details">200031</p>
              </li>
              <li>
                <span class="left-title">电话：</span>
                <p class="item-details">021-64455555*200或5000</p>
              </li>
              <li>
                <span class="left-title">传真：</span>
                <p class="item-details">021-64455001</p>
              </li>
              <li>
                <span class="left-title">公交：</span>
                <p class="item-details">26、911、926、945、920、830、96、93、15、548等高安路；地铁十号线上海图书馆站、地铁一号线衡山路站</p>
              </li>
              <li>
                <span class="left-title">邮箱：</span>
                <p class="item-details">service1@libner.sh.cn</p>
              </li>
            </ul>
            <!-- 开馆时间 -->
            <div class="tab-content-item vertical-center no-padding-top" v-show="tabActive === 1">
              <ul class="open-time ele-middle">
                <li>周一至周日 &nbsp; 8:30--20:30</li>
                <li>国家法定假日 &nbsp; 9:00--16:00</li>
              </ul>
            </div>
            <!-- 友情链接 -->
            <div class="tab-content-item vertical-center no-padding-top" v-show="tabActive === 2">
              <ul class="friend-link ele-middle">
                <li class="col-md-4 col-xs-6" v-for="item in fURLList" :key="item.id"><a :href="item.v2" target="_blank">{{item.v4}}</a></li>
                <!-- <li class="col-md-4 col-xs-6"><a href="#">上海行业情报服务网</a></li>
                <li class="col-md-4 col-xs-6"><a href="#">上海图书馆专业门户</a></li>
                <li class="col-md-4 col-xs-6"><a href="#">上海市中心图书馆</a></li>
                <li class="col-md-4 col-xs-6"><a href="#">全国文化信息共享工程</a></li>
                <li class="col-md-4 col-xs-6"><a href="#">上海市图书馆学会</a></li> -->
              </ul>
            </div>
          </div>
        </div>

        <!-- 联系方式 -->
        <div class="footer-bottom">
          <ul class="internet-contact" v-if="showMiddleContent">
            <li>
              <i class="iconfont icon-phone"></i>
              <!-- Mobile隐藏 -->
              <div class="qrcode-container hidden-xs">
                <img src="/static/images/temp/app.jpg" alt="iPhone二维码"><span>iPhone</span>
              </div>
              <!-- Mobile显示 -->
              <span class="client visible-xs">IPHONE客户端</span>
            </li>
            <li>
              <i class="iconfont icon-android"></i>
              <!-- Mobile隐藏 -->
              <div class="qrcode-container hidden-xs">
                <img src="/static/images/temp/app.jpg" alt="Android二维码"><span>Android</span>
              </div>
              <!-- Mobile显示 -->
              <span class="client visible-xs">安卓系统客户端</span>
            </li>

            <!-- Mobile显示 -->
            <li class="market-name visible-xs">App Store</li>
            <li class="market-name visible-xs">Android Market</li>

            <!-- <li class="mobile-text"> -->
            <li>
              <i class="iconfont icon-weichat"></i>
              <!-- Mobile隐藏 -->
              <div class="qrcode-container hidden-xs">
                <img src="/static/images/temp/weixin.bmp" alt="weiChart二维码"><span>weiChat</span>
              </div>
              <!-- Mobile显示 -->
              <span class="mobile-name visible-xs">上海图书馆信使</span>
            </li>
            <li class="mobile-text last">
              <a href="https://weibo.com/shlibrary" target="_blank">
              <i class="iconfont icon-sina-weibo"></i></a>
              <!-- Mobile隐藏 -->
              <div class="qrcode-container hidden-xs">
                <img src="/static/images/temp/qrcode.png" alt="weibo二维码"><span>weibo</span>
              </div>
              <!-- Mobile显示 -->
              <span type="text" class="mobile-name visible-xs">{{copyMessage}}<button class="copy-text" v-clipboard:copy="copyMessage"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">复制</button></span>
            </li>
          </ul>
          <mini-footer :totalVisit="webCount"></mini-footer>
        </div>
      </div>
    </div>

    <!-- 复制成功提示 -->
    <span class="copy-action-tips" v-show="hideCopyTips">{{copyTipMessage}}</span>
  </div>
</template>

<script>
import { serverInfo } from '../server/api';

let self = null; // 自定义变量存储实例this

export default {
  name: "siteFooter",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      footerHideAll: false,
      tabActive: 0,
      copyMessage: 'shlibrary',
      hideCopyTips: false,
      copyTipMessage: '',
      webCount: 0,
      fURLList: []
    };
  },

  props: ['eachHeight'],

  created () {
    self = this;
  },

  computed: {
    showMiddleContent () {
      /** 
       * Mobile footer 根据不同场景展示不同内容
       *  homePage => 展示全部内容
       *  other => 展示 `访问次数` | `版权信息`...
       */
      if (self.isMobile) {
        let isHideFullFooter = self.$store.state.isHideFullFooter,
            isIndexPage = self.$store.state.isIndexPage;

        // 隐藏全部footer
        if (isHideFullFooter) {
          self.commitEvent('changeFooterHeight', 15);
          self.footerHideAll = true;
          return;
        }
        
        let showContent = false; // 默认不显示中间内容
        self.footerHideAll = false;
        if (isIndexPage) { // 当前是否为首页
          let finalVal = self.eachHeight || 490;
          showContent =  true;
          self.commitEvent('changeFooterHeight', finalVal);
        } else {
          self.commitEvent('changeFooterHeight', 135);
        }
        
        return showContent;
      }
      
      return true;
    }
  },
  mounted() {
    this.initFooter();
  },

  methods: {
    initFooter () {
      this.getWebCounter();
      this.getFurl();
    },
    getFurl () {  // 获取友情链接
    //   this.fURLList = [
    //     {
    //         "v1": "shlib.web.h5.1",
    //         "v2": "http://www.libnet.sh.cn/zxtsg/",
    //         "v3": "102",
    //         "v4": "上海市中心图书馆",
    //         "id": "4"
    //     },
    //     {
    //         "v1": "shlib.web.h5.1",
    //         "v2": "http://www.libnet.sh.cn/",
    //         "v3": "101",
    //         "v4": "上海图书馆专业门户",
    //         "id": "3"
    //     },
    //     {
    //         "v1": "shlib.web.h5.1",
    //         "v2": "http://www.hyqb.sh.cn/",
    //         "v3": "100",
    //         "v4": "上海行业情报服务网",
    //         "id": "2"
    //     },
    //     {
    //         "v1": "shlib.web.h5.1",
    //         "v2": "http://www.istis.sh.cn/",
    //         "v3": "99",
    //         "v4": "情报服务平台",
    //         "id": "1"
    //     }
    // ];
      serverInfo.getFurl().then((data) => {
        this.fURLList = data.datas;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getFurl();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getWebCounter () {  // 获取网站计数
      // this.webCount = 20180420;
      serverInfo.getWebCounter().then((data) => {
        this.webCount = data['shlib.web.h5.1']
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getWebCounter();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    changeStatus (index) {
      self.tabActive = index;

      // Mobile 传递事件
      if (self.isMobile) {
        self.$emit('tabChange');
      }
    },
    onCopy (ev) {
      self.hideCopyTips = true;
      self.copyTipMessage = '复制成功';

      setTimeout(() => {
        self.hideCopyTips = false;
      }, 3000);
    },
    onError (ev) {
      self.copyTipMessage = '复制失败, 请重试';
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .copy-action-tips {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 3px 6px;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, .8);
    transform: translate3d(-50%, -50%, 0);
    border-radius: 4px;
    transition: all .5s;
  }

  .component-footer {
    padding: 0 0 19px;
    background-color: #49709c;

    // Mobile
    @media only screen and (min-width: 768px) {
      height: 433px;
      padding: 25px 0 30px 17px;
    }
  }

  @wrapPadding: 25px;

  .switch-info {
    padding-bottom: 18px;

    // ======================== @Media =======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      height: 184px;
    }

    // Mobile
    @media only screen and (max-width: 768px) {
      padding-right: @wrapPadding;
      padding-left: @wrapPadding;
    }
  }

  @padding: 30px;

  // ======================= 切换标题 ======================
  .title-tab {
    position: relative;

    > li {
      position: relative;
      color: rgba(255, 255, 255, .6);
      cursor: pointer;

      > .iconfont {
        margin-right: 4px;
        font-size: 12px;
      }
    }

    // ======================== @Media ======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      float: left;
      padding: 13px @padding 13px 17px;
      margin-bottom: 0;
      border-right: 1px solid rgba(255, 255, 255, .1);

      > li {
        font-size: 16px;

        &:after {
          opacity: 0;
          content: "";
          position: absolute;
          .size(2px; 40px);
          margin-top: 0;
          background-color: #fff;
          top: -7px;
          right: -@padding;
        }

        &.active {
          color: #fff;

          &:after {
            opacity: 1;
          }
        }

        + li {
          margin-top: 28px;
        }

        > .iconfont {
          margin-right: 19px;
          font-size: 20px;
          .vertical-align(-2px);

          &.icon-friend-link {font-size: 17px;}
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      display: flex;
      margin: 0 -@wrapPadding;
      justify-content: space-between;
      padding: 16px @wrapPadding 13px;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #fff;
        transform: scaleY(.5);
        opacity: .1;
      }

      > li {
        line-height: 18px;
        text-align: center;
        font-size: 13px;

        &.active {color: #fff;}
      }
    }
  }
  
  // ======================= 切换内容 ======================
  .tab-content {
    height: 100%;
    
    color: #fff;
    font-size: 12px;

    &-item {
      position: relative;
      height: 100%;
    }

    li {
      overflow: hidden;

      > span {
        display: block;
        float: left;
        white-space: nowrap;
      }

      > p {
        margin: 0;
      }
    }

    // ======================= @Media =======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-left: 156px;
      padding-left: @padding;

      li {
        + li {margin-top: 10px;}

        @leftTitleWidth: 40px;
        > span {
          width: @leftTitleWidth;
        }

        > p {
          margin-left: @leftTitleWidth;
        }
      }

      &-item {
        padding-top: 13px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      li {
        + li {margin-top: 3px;}

        @leftTitleWidth: 32px;
        > span {
          width: @leftTitleWidth;
        }

        > p {
          margin-left: @leftTitleWidth;
        }
      }

      &-item {
        padding-top: 10px;
      }
    }
  }

  .no-padding-top {padding-top: 0;}

  // tab - 开馆时间
  .open-time {
    font-size: 14px;
  }

  .friend-link, 
  .open-time {

    // ======================= @Media =======================
    // PC | Pad
    @media  only screen and (min-width: 768px) {
      > li {
        margin-top: 10px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      > li, li + li {
        margin-top: 8px;
        font-size: 12px;
      }
    }
  }

  // footer-bottom
  .footer-bottom {
    color: #fff;
    text-align: center;

    // ======================= @Media ========================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 21px;
      border-top: 1px solid rgba(255, 255, 255, .1);
    }

    // Mobile
    @media  only screen and (max-width: 767px) {
      margin-top: -8px;
      padding-right: @wrapPadding;
      padding-left: @wrapPadding;
    }
    // ======================= End ===========================
  }

  // ======================= 微信微博等联系方式 =======================
  .internet-contact {
    position: relative;
    font-size: 0; // 去除inline-block间隙, 子元素必须添加font-size

    > li {
      position: relative;
      cursor: pointer;

      &:not(.mobile-text):hover {
        background-color: #5b7ea6;

        .qrcode-container {
          display: block;
        }
      }

      .iconfont {
        color: #fff;
        font-size: 28px;
      }
    }

    // ======================= @Media =======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      text-align: center;

      > li {
        display: inline-block;
        .square(48px);
        margin: 0 24.5px;
        line-height: 48px;
        font-size: 28px;
        text-align: center;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: center;

      &:after {
        content: "";
        position: absolute;
        right: -@wrapPadding;
        bottom: 23px;
        left: -@wrapPadding;
        height: 1px;
        background-color: rgba(255, 255, 255, .1);
      }
      
      > li {
        display: flex;
        align-items: center;
        width: ~"calc(50% - 9px)";
        font-size: 13px;
        line-height: 14px;
        
        &:nth-child(-n + 2) {
          height: 57px;
          padding-left: 12px;
          background-color: rgba(255, 255, 255, .1);
          .border-radius(4px);

          &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 81px / 2;
            background-color: #f8f8f8;
            opacity: .1;
          }
        }

        > .iconfont {
          margin-left: -1px;
          font-size: 20px;
        }

        > .icon-weichat,
          .icon-sina-weibo {
          font-size: 13px;
        }

        > .client {
          margin-top: -13px;
          margin-left: 21px;
        }
      }

      // 最后一个
      .last {
        padding-left: 29px / 2;

        &:before {
          content: "";
          position: absolute;
          top: 3px;
          left: 0;
          .size(1.5px; 12.5px);
          background-color: rgba(255, 255, 255, .5);
        }
      }

      .market-name {
        margin-top: 19px;
        margin-bottom: 26px;
        font-size: 11px;
        line-height: 14px;
      }

      .mobile-name {
        margin-left: 6px;
        font-size: 13px;
        vertical-align: middle;

        > .copy-text {
          padding: 1px 3px 0;
          margin-left: 5px;
          font-size: 10px;
          background-color:rgba(255, 255, 255, .1);
          border: none;
          outline: none;
        }
      }
    }
    // ======================= End =======================
  }

  // 二维码
  .qrcode-container {
    display: none;
    position: absolute;
    top: -123px;
    left: 50%;
    .size(92px; 114px);
    margin-left: -92px / 2;
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 14px;
    color: #666;
    text-align: center;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 6px 15px 0 #3b618c;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      margin-left: -4px;
      .square(0);
      border-width: 4px;
      border-style: solid dashed dashed;
      border-color: #fff transparent transparent;
      border-radius: 1px;
    }

    > img {
      .img-responsive();
      .center-block();
    }

    > span {
      display: block;
      margin-top: -7px;
    }
  }
</style>