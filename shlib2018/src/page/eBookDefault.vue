<!-- 数字阅读首页 -->
<template>
  <div class="component-homePage">
    <div class="container">
      <div class="row">
        <!-- 轮播图新闻 -->
        <div class="top-swiper-news padMargin clearfix">
          <div class="news-main">
            <div class="index-swiper">
              <swiper v-if="carouselList.length"  :options="swiperOption" ref="indexSwiper">
                <!-- slides -->
                <swiper-slide v-for="item in carouselList" :key="item.v4">
                  <a :href="item.v6" target="_blank"><img class="img-responsive" :src="item.v5" alt=""></a>
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-button-prev" slot="button-prev">
                  <i class="iconfont icon-arrow-left2"></i>
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <i class="iconfont icon-arrow-right2"></i>
                </div>
              </swiper>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <!-- 主内容 -->
        <div class="main-content padMargin">
          <!-- 我的书架 -->
          <div class="book-center" v-show="isLogin">
            <column-title :column-title="mybooksTitle"></column-title>

            <div class="book-list-wrap">
              <ul class="booklist clearfix">
                <li class="book" v-for="book in myBooksList" :key="book.bid">
                  <simple-book :bookinfo="book"></simple-book>
                </li>
              </ul>
            </div>

            <a href="javascript:;" @click="goToMyShelf" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></a>
          </div>

          <!-- 每周推荐 -->
          <div class="weekly-recommended">
            <column-title :column-title="weeklyTitle"></column-title>
            <div class="book-container row">
              <div class="col-xs-4 col-sm-6" :class="{even: (index + 1) % 2 === 0}" v-for="(item, index) in weeklyList"
                :key="index">
                <router-link
                  :to="{name: 'eBookDetails',query: {type:'epub',bid:item.fbookid}}"
                  target="_blank"
                >
                  <book-info :book-info="item"></book-info>
                </router-link>
              </div>
            </div>

            <router-link :to="{name: 'recommendedPastDefault'}" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></router-link>
          </div>

          <!-- 微期刊 -->
          <div class="book-center">
            <column-title :column-title="weiTitle"></column-title>
            <div class="book-list-wrap">
              <ul class="booklist clearfix">
                <li class="book" v-for="(book,index) in myWeiList" :key="index">
                  <router-link :to="{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}}" target="_blank">
                    <simple-book :bookinfo="book"></simple-book>
                  </router-link>
                </li>
              </ul>
            </div>

            <router-link :to="{name: 'weiWeek'}" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></router-link>
          </div>

          <!-- 排行榜 -->
          <div class="book-center">
            <column-title :column-title="rankTitle"></column-title>
            <div class="book-list-wrap">
              <ul class="booklist clearfix">
                <li class="book" v-for="book in rankList">
                  <simple-book :bookinfo="book"></simple-book>
                </li>
              </ul>
            </div>

            <a href="javascript:;" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

import { swiper, swiperSlide } from 'vue-awesome-swiper';
import activityItem from '../components/activityItem';
import bookInfo from '../components/bookInfo';
import simpleBook from '../components/simpleBook';
import { resommended, bookInfoApi, ebookSearch, serverInfo } from '../server/api';
export default {
  name: "eBook",

  data () {
    return {
      swiperOption: {
        loop: true,
        notNextTick: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // notNextTick: true,
        // prevButton: '.swiper-button-prev', // 上一张
        // nextButton: '.swiper-button-next', // 下一张
      },
      carouselList: [], // 轮播列表

      mybooksTitle: '我的书架',
      weeklyTitle: '每周推荐',
      weiTitle: '微期刊',
      rankTitle: '排行榜',
      myBooksList: [],  // 书架列表
      weeklyList: [],  // 每周推荐列表
      myWeiList: [],  // 微期刊列表
      rankList: [],  // 排行榜列表
      isMob: this.$store.state.isMobile ? 'mobile' : 'all',
      isLogin: this.ls.getItem('loginUserInfo') ? true : false
    };
  },

  created () {
    self = this;
  },

  components: {
    swiper,
    swiperSlide,
    activityItem,
    bookInfo,
    simpleBook
  },

  computed: {
    swiper () {
      return this.$refs.indexSwiper.swiper
    }
  },

  mounted () {
    this.checkLoginTick();
    this.getCarouselFigure();
    // this.myBooksList = this.getBookList();
    // this.myWeiList = this.getBookList();
    this.rankList = this.getBookList();
    this.getMyBookShelf();
    this.getResommended();
    this.getWeiList();
  },

  methods: {
    checkLoginTick () { // 检查地址栏的登录标记
      if (this.$route.query.login) {
        // let isLogin = self.ls.getItem('loginUserInfo');
        // // 未登录 - 打开登录Modal
        // if ( !isLogin ) {
        //   self.commitEvent('changeshowLoginModal', true);
        //   self.commitEvent('changeTempPath', {
        //     path: '/eBook'
        //   });
        //   self.utils.modalOpenEvent(true);
        //   return;
        // }
        self.checkLogin('/eBook');
      }
    },
    getCarouselFigure () {
      serverInfo.swiper().then((data) => {
        self.carouselList = data.datas;
      }).catch(error => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getCarouselFigure();
            clearTimeout(t);
          }, 500);
        }
      })
    },
    getBookList () {
      let list = [
        {imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集飞鸟集飞鸟集飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"},{imgUrl: "/static/images/temp/book-cover.jpg", title: "飞鸟集",type: "外国文学"}
      ];
      return list;
    },
    getResommended () { // 获取每周推荐
      resommended.getWeeklyInfos(7)
      .then(res => {
        const data = res.result.datas;
        if (!data.length) return;

        // 筛选最新季期 - 暂使用多次请求的方式
        const lastest = data[0].v2;
        let bookidList = [];
        data.map(item => {
          if (item.v2 === lastest) {
            bookidList.push(item.v4);
          }
        });
        let bookidStr = bookidList.slice(0, 7).join(',');
        bookInfoApi.epubinfo(bookidStr)
        .then(res => {
          let inner = res.result.datas;
          if (!self.utils.isEmpty(inner)) {
            let tempArr = inner.map((item, index) => {
              return {
                fcover: item.v14 || self.$store.state.defaultBookCover,
                ftitle: item.v9.replace('=', ' '),
                fbookid: item.v7,
                fauthor: item.v13,
                fpublisher: item.v15,
                fsummary: decodeURIComponent(item.v24) || '暂无简介信息',
                fcommonclass: item.v17
              };
            });
            
            self.weeklyList = tempArr;
          }
        });
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getResommended();
            // console.log('000');
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getWeiList () { // 获取微期刊
      let k = {
        source: '',
        keyword: '',
        classtype: '',
        page: 1,
        pagesize: 10,
        viewtype: this.isMob
      };
      ebookSearch.magazineSearch(k).then((data) => {
        this.myWeiList = this.weiDataHandel(data.result.mags);
        // console.log(this.myWeiList);
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getWeiList();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getMyBookShelf () { // 获取我的书架，需要登录（uat）
      if (!this.isLogin) {
        return;
      }
      bookInfoApi.getMyBookShelf(1, 10).then((data) => {
        let mybooks = data.result.datas;
        if (!mybooks.length) {return;}
        this.myBooksList = this.bookDataHandel(mybooks);
      }).catch((error) => {

      })
    },
    mergeTwoObj (one, two) {
      for (let i = 0, l = one.length; i < l; i++) {
        let element = one[i];
        for (let j = 0, k = two.length; j < k; j++) {
          const item = two[j];
          if (element.v1 === item.v7) {
            element.cover = item.v14;
            element.v5 = item.v9;
            break;
          }
        }
      }
    },
    weiDataHandel (data) {  // 微期刊返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          bid: item.magid,
          // fid: item.magid,
          cover: item.cover,
          title: item.title,
          type: '',
          pace: ''
        });
      });

      return tempList;
    },
    bookDataHandel (data) {  // 我的图书返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          bid: item.v1,
          // fid: item.magid,
          cover: item.v8,
          title: item.v5,
          type: '',
          pace: item.v6 + '%'
        });
      });

      return tempList;
    },
    goToMyShelf () {
      // let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      // if ( !isLogin ) {
      //   self.commitEvent('changeshowLoginModal', true);
      //   self.commitEvent('changeTempPath', {
      //     path: '/eBook/myBookshelf'
      //   });
      //   self.utils.modalOpenEvent(true);
      //   return;
      // }
      if (!self.checkLogin('/eBook/myBookshelf')) {
        return;
      }
      self.openNewPage({
        path: '/eBook/myBookshelf'
      });
    },
    /**
     * 检查登录
     */
    checkLogin (path, query) {
      // let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !self.ls.getItem('loginUserInfo') ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: path,
          query: query
        });
        self.utils.modalOpenEvent(true);
        return false;
      }
      return true;
    }
  }
}
</script>
<style lang="less">
  .swiper-pagination-bullets {
    bottom:0;
    width: 100%;
    background: rgba(0,0,0,0.6);
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      margin: 8px 5px 5px 5px;
      background: #ffffff;
    }
  }
</style>
<style lang="less" scoped>
  @import "../css/less/common";

  // 首页顶部新闻
  .top-swiper-news {
    .img-responsive {
      width: 100%;
      object-fit: cover;
    }
    // PC | Pad - H
    @media only screen and (min-width: 768px) {
      height: 620px;
      margin-top: 20px;

      > .news-main, 
      > .news-aside {
        height: 100%;
      }
      .img-responsive {
        height: 620px;
        // width: 100%;
        // max-height: 620px;
      }
    }

    // Pad - V
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      height: 360px;
      // height: 306px;
      .img-responsive {
        // max-height: 360px;
        height: 360px;
        // width: 100%;
      }
    }
    // mobile
    @media only screen and (max-width: 767px) {
      height: 250px;
      // height: 306px;
      .img-responsive {
        // max-height: 360px;
        height: 250px;
        // width: 100%;
      }
    }
  }

  // ========================= Swiper ======================
  // .index-swiper {
  //   // margin-right: -15px;
  //   // margin-left: -15px;
  // }
  .index-swiper {
    position: relative;
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
    height: auto;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
    }
    .swiper-news-title {
      color: #fff;
      font-size: 24px;
      font-weight: normal;
      position: absolute;
      left: 30px;
      top: 50%;
    }
    .swiper-container {
      width: 100%;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
      .swiper-news-title {
        top: 40%;
      }
    }
    .swiper-button-prev, .swiper-button-next {
      width: 50px;
    }
    .icon-arrow-right2, .icon-arrow-left2 {
      font-size: 48px;
      font-weight: bold;
    }
  }

  // 主内容
  .main-content {
    .book-center {
      padding-bottom: 40px;
      border-bottom: 1px solid #E0E5E8;
      &:last-child {
        border-bottom: none;
      }
    }
    .weekly-recommended {
      padding-bottom: 40px;
      border-bottom: 1px solid #E0E5E8;
    }
    .booklist {
      padding-left: 0;
      margin-left: -25px;
      margin-right: -25px;
      .book {
        float: left;
        width: 20%;
        margin-bottom: 40px;
        padding: 0 25px 0 25px;
        @media only screen and (max-width: 767px) {
          width: 33.333333%;
          margin-bottom: 20px;
          padding: 0 12px 0 12px;
          margin-left: 0;
          margin-right: 0;
        }
      }
      @media only screen and (max-width: 767px) {
          margin-left: -10px;
          margin-right: -10px;
      }
    }

    // ==================== @Media ==================
    // Mobile
    @media only screen and (max-width: 767px) {
      padding: 0 10px 10px;
    }
    .view-more {
      margin-top: 0;
    }
  }

  // 快速入口
  .quick-entrance {
    font-size: 0; // 去除inline-block间隙

    > .links-item {
      text-align: center;

      > a {
        color: #fff;

        &:hover {
          opacity: .8;
        }
      }

      span {
        display: block;
      }
    }

    // 新闻公告
    .link-news { background-color: #5c7bc8; }

    // 服务指南
    .link-guide { background-color: #5390d7; }

    // 在线咨询
    .link-online { background-color: #42a8dd; }

    // 已借图书
    .link-borrowed { background-color: #64c1cf; }

    // 我的活动
    .link-activities { background-color: #5dc9a8; }

    // =========================== @Media ===========================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 17px;

      > .links-item {
        float: left;
        width: 20%;
        padding-right: 10px;
        vertical-align: top;

        &:last-child {
          padding-right: 0;
        }

        > a {
          display: table-cell;
          .size(1%; 100px);
          vertical-align: middle;
          font-size: 18px;
        }

        .link-en {
          font-size: 10px;
          opacity: .5;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      display: flex;
      padding: 5px 5px 0;
      justify-content: space-between;

      > .links-item {
        flex: 1;

        &:not(:last-child) {
          padding-right: 11px / 2;
        }

        > a {
          display: flex;
          justify-content: center;
          align-items: center;
          .size(100%; 81px / 2);
          font-size: 12px;
        }
      }
    }
  }

  // 每周推荐
  .weekly-recommended {
    @media only screen and (max-width: 768px) {
      overflow: hidden;
    }
  }

  .book-container {
    > div:nth-child(n+3) {
      padding-top: 30px;
      border-top: 1px solid #eee;
    }
    @media only screen and (max-width: 768px) {
      > div:nth-child(n+3) {
        border-top: none;
        padding-top: 0;
      }
    }

    // ================= @Media ==================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      .even {
        padding-left: 56px;
      }
    }
  }

  // 外链入口
  .external-links {
    margin-bottom: -10px;
    font-size: 0; // 去除inline-block间隙
    
    > a {
      position: relative;
      color: #fff;
    }

    .none-padding {
      padding-right: 0;
      padding-bottom: 0;

      .links-inner {
        right: 0;
      }
    }

    .links-inner {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #64c1cf;

      > strong, span {
        display: block;
      }
    }

    // ================== @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 40px;

      > a {
        display: inline-block;
        .size(20%; 119px);
        padding-right: 10px;
        padding-bottom: 10px;
        font-size: 14px;
      }

      .links-inner {
        right: 10px;
        bottom: 10px;
        padding-top: 20px;
        padding-left: 7px;
    
        > strong {
          font-size: 16px;
          color: #ebe9e3;
        }

        > span {
          margin-top: -2px;
          opacity: .4;
          text-transform: uppercase;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      margin-top: 25px;

      > a {
        display: inline-block;
        .size(50%; 117px);
        font-size: 8px;

        &:nth-child(odd) .links-inner {
          right: 5px;
        }

        &:nth-child(even) .links-inner {
          left: 5px;
          right: 0;
        }
      }

      .links-inner {
        bottom: 10px;
        padding-top: 21px;
        padding-left: 20px;

        > strong {
          font-size: 13px;
        }

        > span {text-transform: uppercase;}
      }
    }
  }
</style>