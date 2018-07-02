<!-- 全部菜单默认页面 -->
<template>
  <div class="component-menuList">
    <div class="container">
      <!-- menu1 -->
      <div class="component-menuInner menu1 row">
        <router-link :to="{path: 'activityCenter?isActive=2'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-activity"></i>
          <p>我的活动</p>
        </router-link>
        <a href="javascript:;" @click="goToMyShelf" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-shelf"></i>
          <p>我的书架</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-points"></i>
          <p>我的积分</p>
        </a>
        <a href="javascript:;" @click="goToCurrntLendingHistory" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-history"></i>
          <p>借书历史</p>
        </a>
        <a href="javascript:;" @click="goToCurrntLendingDone" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-yijietushu"></i>
          <p>已借图书/续借</p>
        </a>
        <a :href="externalLinks.BookYuYueUrl" class="col-sm-2 col-xs-3" target="_blank">
          <i class="iconfont icon-book-appointment"></i>
          <p>图书预约</p>
        </a>
      </div>

      <!-- menu2 -->
      <div class="component-menuInner menu2 row">
        <router-link :to="{path: '/eBook'}" target="_blank" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-digital-read"></i>
          <p>数字阅读</p>
        </router-link>
        <router-link :to="{path: 'libraryList'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-rank-list"></i>
          <p>图书借阅排行榜</p>
        </router-link>
        <router-link :to="{path: '/eBook/bookClassification'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-book-classification"></i>
          <p>资源分类</p>
        </router-link>
        <router-link :to="{path: 'activityCenter?isActive=0'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-activity-center"></i>
          <p>活动中心</p>
        </router-link>
        <router-link :to="{path: 'newsBulletin'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-bulletin-news"></i>
          <p>新闻公告</p>
        </router-link>
        <router-link :to="{path: 'museumNavigation'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-nearset-museum"></i>
          <p>附近图书馆</p>
        </router-link>
        <a href="" class="col-sm-2 col-xs-3" target="_blank">
          <i class="iconfont icon-showroom-search"></i>
          <p>展览室查询</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3" target="_blank">
          <i class="iconfont icon-peace-image"></i>
          <p>楼层平面图</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3" target="_blank">
          <i class="iconfont icon-shangtuvr"></i>
          <p>上图VR</p>
        </a>
      </div>

      <!-- menu3 -->
      <div class="component-menuInner menu3 row">
        <router-link :to="{path: 'serviceGuide'}" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-service-guide"></i>
          <p>服务指南</p>
        </router-link>
        <a href="" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-icon-weixinfuwu"></i>
          <p>微信服务</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-weibo-service"></i>
          <p>微博服务</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-download"></i>
          <p>APP下载</p>
        </a>
        <a href="" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-contact"></i>
          <p>联系我们</p>
        </a>
        <a :href="online" target="_blank" class="col-sm-2 col-xs-3">
          <i class="iconfont icon-online-guide"></i>
          <p>在线指南</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// 加载组件
import menuList from '../components/menuList';

export default {
  name: "fullMenuDefault",

  data () {
    return {
      externalLinks: JSON.parse(this.ls.getItem('exList')) || '',
      online: this.$store.state.online
    };
  },

  created () {
    self = this;
  },
  
  destroyed () {
    self.commitEvent('changeIsHideFullFooter', false);
  },

  components: {
    menuList
  },

  computed: {},

  mounted () {},

  methods: {
    goToCurrntLendingHistory () { // 借阅历史
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: '/index/fullMenu/currentLending',
          query: {isActive: 1}
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      self.openNewPage({
        path: '/index/fullMenu/currentLending',
        query: {isActive: 1}
      });
    },
    goToCurrntLendingDone () {  // 已借阅图书
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: '/index/fullMenu/currentLending',
          query: {isActive: 0}
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      self.openNewPage({
        path: '/index/fullMenu/currentLending',
        query: {isActive: 0}
      });
    },
    goToMyShelf () {
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: '/eBook/myBookshelf'
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

  .component-menuList {
    margin-top: -@breadcrumbHeight;
    padding-top: @breadcrumbHeight;
    background-color: #f5f7f8;

    // 菜单列表
    .component-menuInner {
      background-color: #fff;
      overflow: hidden;
    }

    @media only screen and (min-width: 768px) {
      margin-bottom: -@footerMargin;
      padding-bottom: @footerMargin;
    }
  }
</style>