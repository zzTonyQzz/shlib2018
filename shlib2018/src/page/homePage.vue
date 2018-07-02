<!-- 首页 -->
<template>
  <div class="component-homePage">
    <head-info></head-info>
    <div class="container">
      <div class="row">
        <!-- 轮播图新闻 -->
        <div class="top-swiper-news padMargin clearfix">
          <div class="news-main col-sm-8">
            <div class="index-swiper">
              <swiper v-if="carouselList.length"  :options="swiperOption" ref="indexSwiper">
                <!-- slides -->
                <swiper-slide v-for="item in (isMob ? carouselList : carouselList.slice(2))" :key="item.v4">
                  <a :href="item.v6" target="_blank"><img class="img-responsive" :src="item.v5" alt=""></a>
                  <!-- <h2 class="swiper-news-title">{{item.v7}}</h2> -->
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
          <!-- 右侧新闻 -->
          <div v-if="!isMob" class="news-aside col-sm-4">
            <div class="index-swiper-news">
              <a :href="item.v6" class="news-item" v-for="item in carouselList.slice(0,2)" :key="item.v4" target="_blank">
                <img :src="item.v5" class="img-responsive" alt="">
                <!-- <h4>{{item.v7}}</h4> -->
              </a>
              <!-- <a href="javascript:;" class="news-item">
                <img src="/static/images/temp/swiper-news.png" class="img-responsive" alt="">
              </a> -->
            </div>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="quick-entrance padMargin clearfix">
          <div class="links-item">
            <router-link :to="{path: '/index/newsBulletin'}" class="link-news">
              <span class="link-cn">新闻公告</span><span class="link-en hidden-xs">Library News</span>
            </router-link>
          </div>
          <div class="links-item">
            <router-link :to="{path: '/index/serviceGuide'}" class="link-guide">
              <span class="link-cn">服务指南</span><span class="link-en hidden-xs">Guidenlines</span>
            </router-link>
          </div>
          <div class="links-item">
            <a :href="online" target="_blank" class="link-online">
              <span class="link-cn">在线咨询</span><span class="link-en hidden-xs">Online Q&A</span>
            </a>
          </div>
          <div class="links-item">
            <a href="javascript:;" @click="goToCurrntLending" class="link-borrowed">
              <span class="link-cn">已借图书</span><span class="link-en hidden-xs">Borrowed books</span>
            </a>
          </div>
          <div class="links-item">
            <a href="javascript:;" @click="goToMyActiveCenter" class="link-activities">
              <span class="link-cn">我的活动</span><span class="link-en hidden-xs">My activities</span>
            </a>
          </div>
        </div>

        <!-- 主内容 -->
        <div class="main-content padMargin">
          <!-- 活动中心 -->
          <div class="activity-center">
            <!-- title -->
            <column-title :column-title="activityTitle"></column-title>
            <!-- content -->
            <div class="activity-list-wrap has-right-column">
              <!-- 日历 -->
              <div class="calendar hidden-xs">
                <vue-event-calendar
                  :events="eventsList"
                  @monthChanged="handleMonthChanged" 
                  @dayChanged="handleDayChanged"
                  @backCurrent="backToCurrent"
                ></vue-event-calendar>
              </div>
              <!-- 活动列表 -->
              <!-- <ul class="list-container" :class="{'none-data': !activityList.length}"> -->
              <ul class="list-container">
                <!-- 无数据提示 -->
                <none-data
                  v-show="!activityList.length && !loading"
                  msg="当前月暂无活动"
                ></none-data>
                <router-link
                  :to="{path: `/index/eventDetails?event=${item.id}`}"
                  tag="li"
                  v-for="(item, index) in activityList"
                  :key="index">
                    <activity-item :activity-obj="item"></activity-item>
                </router-link>
              </ul>
            </div>

            <!-- 查看更多 -->
            <router-link :to="{path: '/index/activityCenter?isActive=0'}" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></router-link>
          </div>

          <!-- 每周推荐 -->
          <div class="weekly-recommended">
            <!-- title -->
            <column-title :column-title="weeklyTitle"></column-title>
            <!-- 推荐书籍 -->
            <div class="book-container row">
              <div class="col-xs-4 col-sm-6"
                v-for="(item, index) in weeklyList"
                :key="index"
                :class="{even: (index + 1) % 2 === 0}">
                <router-link
                  :to="{path: `eBook/eBookDetails?type=epub&bid=${item.fbookid}`}"
                  target="_blank"
                >
                  <book-info :book-info="item"></book-info>
                </router-link>
              </div>
            </div>

            <!-- 查看更多 -->
            <router-link :to="{path: 'eBook/recommendedPast'}" target="_blank" class="view-more">查看更多<i class="iconfont icon-arrow-right"></i></router-link>
          </div>

          <!-- 外链/其他服务入口 -->
          <div class="service-links">
            <!-- <column-title :column-title="moreService"></column-title> -->
            <div>
              <vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
                <template slot-scope="props">
                  <!-- <h3 class="service-header"><a :href="props.value.hlink">{{props.value.head}}</a></h3> -->
                  <ul class="service-info">
                    <li v-for="(item,index) in props.value.info" :key="index"><a :href="item.url" target="_blank">{{item.title}}</a></li>
                  </ul>
                  <!-- <p>{{props.value.info}}</p> -->
                </template>
              </vue-waterfall-easy>
            </div>
            
            <!-- 加载更多 -->
            <a href="javascript:;" class="view-more visible-xs" @click="fetchImgsData">点击加载更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import vueEventCalendar from '../components/vue-event-calendar';
import activityItem from '../components/activityItem';
import bookInfo from '../components/bookInfo';
import vueWaterfallEasy from '../components/vue-waterfall-easy.vue';
import headInfo from '../components/headInfo.vue';

// api request
import { 
  activityCenter,
  resommended,
  bookInfoApi,
  serverInfo
} from '../server/api';

// let clPanelInit = false;

export default {
  name: "homePage",

  data () {
    return {
      online: this.$store.state.online,
      isMob: this.$store.state.isMobile,
      swiperOption: {
        loop: true,
        // notNextTick: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
              el: '.swiper-pagination',
          },
          paginationClickable: true
      },
      carouselList: [], // 轮播列表

      // 活动中心
      activityTitle: '活动中心',
      activityList: [],
      // allActivityList: [],
      eventsList: [],
      clPanelInit: false,
      loading: true,
      // 活动中心 - End

      weeklyTitle: '每周推荐',
      weeklyList: [],
      
      moreService: '更多服务',
      imgsArr: [],  // 瀑布流
      allImgsArr: [],
      // 默认图书封面图片
      defaultCover: 'http://e.library.sh.cn/elib.jpg'
    };
  },

  created () {
    self = this;

    // 首页设置显示全部footer
    self.commitEvent('changeIsIndexPage', true);
  },

  destroyed () {
    self.commitEvent('changeIsIndexPage', false);
  },

  components: {
    swiper,
    swiperSlide,
    vueEventCalendar,
    activityItem,
    bookInfo,
    vueWaterfallEasy,
    headInfo
  },

  computed: {
    swiper () {
      return this.$refs.indexSwiper.swiper;
    }
  },

  mounted () {
    this.$EventCalendar.resetCurrMonth();
    self.checkLoginTick();
    self.getCarouselFigure();
    self.getEventInfo();
    self.getResommended();
    self.getWaterFallFlow();
  },

  methods: {
    checkLoginTick () { // 检查地址栏的登录标记
      // console.log(this.$route.query)
      if (this.$route.query.login) {
        self.checkLogin('/index/myLibrary');
        // return;
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
    getWaterFallFlow () {
      serverInfo.waterFallFlow().then((data) => {
        this.allImgsArr = this.initImgsArr(data.datas);
        self.fetchImgsData(1, 9);
      }).catch(error => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getWaterFallFlow();
            clearTimeout(t);
          }, 500);
        }
      })
    },
    /** 
     * [getEventInfo 活动列表查询]
     * @param {String, Date} start 开始时间
     * @param {String, Date} end 结束时间
     */
    getEventInfo (date = self.utils.getFirstEndDay(), maxLength = 2) {
      self.loading = true;
      // 清空活动内容列表
      self.activityList = [];
      
      activityCenter.getEventsMonth(date.firstDay, date.nextMonthFirstDay)
      .then(res => {
        let data = res.result.datas;
        if (!data.length) {
          self.loading = false;
          return;
        }
        self.dataHandle(data, maxLength);
        self.loading = false;
        if (self.clPanelInit) return;
        self.clPanelInit = true;

        self.eventsList = self.utils.getEventsData(data, {
          start: date.firstDay,
          end: date.nextMonthFirstDay
        });
        // console.log(self.eventsList)
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getEventInfo(date);
            clearTimeout(t);
          }, 500);
        } else {
          self.loading = false;
        }
      });
    },
    /** 
     * [dataHandle 统一处理活动数据]
     * @param {Array} data 活动内容列表
     * @param {Number} maxLength 显示活动内容数量, default: 2
     */
    dataHandle (data, maxLength = 2) {
      let tempList = [];
      data.forEach((item, index) => {
        // 首页取两条活动内容展示
        if (index < maxLength) {
          tempList.push({
            id: item.id,
            cover: item.v7,
            title: item.v1,
            type: item.v5,
            isFocus: item.v8 ? (item.v8 === 'false' ? false : true) : false,  // 判断是否已经关注
            organizers: '', // 活动举办单位暂无
            location: item.v6,
            time: self.utils.timerHandle(item.v3, item.v4)
          });
        }
      });

      self.activityList = tempList;
      // self.allActivityList = tempList;
    },
    /** 
     * [getResommended 获取每周推荐内容, 获取默认期数, 一般为7本]
     */
    getResommended () {
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
        let bookidStr = bookidList.join(',');
        // let bookidStr = bookidList.slice(0, 4).join(',');
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
            clearTimeout(t);
          }, 500);
        }
      });
    },
    /** 
     * [handleMonthChanged 事件日历 - 选择日]
     * @param {String, Date} day 日期
     */
    handleDayChanged (day) { // 选择 'day'
      let selectDay = day.date;
      // console.log(day)
      let nextDay = self.utils.getDateStr(selectDay, 1);
      // console.log(nextDay);
      // console.dir({
      //   firstDay: selectDay,
      //   nextMonthFirstDay: nextDay
      // })
      self.getEventInfo({
        firstDay: selectDay,
        nextMonthFirstDay: nextDay
      }, 5);
    },
    // 返回当前年月
    backToCurrent (month) {
      self.clPanelInit = false;
      self.eventsList = [];
      self.getEventInfo();
    },
    /** 
     * [handleMonthChanged 事件日历 - 选择月]
     * @param {String, Date} month 月份
     */
    handleMonthChanged (month) { // 选择 'month'
      self.clPanelInit = false;
      self.eventsList = [];
      let selectMonth = self.utils.getFirstEndDay(month.en);

      self.getEventInfo({
        firstDay: selectMonth.firstDay,
        nextMonthFirstDay: selectMonth.nextMonthFirstDay
      });
    },
    goToCurrntLending () { // 借阅历史
      if (!self.checkLogin('/index/fullMenu/currentLending', {isActive: 0})) {
        return;
      }
      self.openNewPage({
        path: '/index/fullMenu/currentLending',
        query: {isActive: 0}
      });
    },
    goToMyActiveCenter () { // 我的活动中心
      if (!self.checkLogin('/index/activityCenter', {isActive: 2})) {
        return;
      }
      self.openNewPage({
        path: '/index/activityCenter',
        query: {isActive: 2}
      });
    },
    // 瀑布流数据处理
    initImgsArr(data) { //num 图片数量
      let arr = [];
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let tempObj = {
          src: item.v3 || '/static/images/200-1.png',
          link: item.v4,
          head: item.v5,
          hlink: item.v6,
          info: []
        }
        for (let j = 7; j < 21; j+=2) {
          const element = item['v' + j];
          if (element) {
            tempObj.info.push({
              title: element,
              url: item['v' + (j + 1)]
            })
          }
        }
        arr.push(tempObj);
        // console.log(arr)
      }
      return arr
    },

    fetchImgsData(index, count) {
      this.imgsArr = this.imgsArr.concat(this.allImgsArr.slice((index - 1) * count, index * count))
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

  .component-homePage {
    position: relative;
    min-height: 100%;
  }

  // 首页顶部新闻
  .top-swiper-news {
    // PC | Pad - H
    @media only screen and (min-width: 768px) {
      height: 415px;
      margin-top: 20px;

      > .news-main, 
      > .news-aside {
        height: 100%;
      }
    }

    // Pad - V
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      height: 306px;
    }
  }

  // ========================= Swiper ======================
  .index-swiper {
    margin-right: -15px;
    margin-left: -15px;
    height: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
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
      height: 100%;
    }
    @media only screen and (max-width: 767px) {
      height: 230px;
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

  // 右侧新闻
  .index-swiper-news {
    position: relative;
    margin-right: -15px;
    margin-left: -15px;
    overflow: hidden;

    > a {
      display: block;
      position: relative;
      h4 {
        position: absolute;
        top: 20px;
        left: 20px;
      }
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    // ==================== @Media ========================
    // PC | Pad - H
    @media only screen and (min-width: 768px) {
      // .size(325px; 100%);
      // width: 325px;
      height: 100%;
      margin-left: -8px;
      
      > a {
        height: 203px;

        // 最后一个居底
        &:last-child {
          position: absolute;
          bottom: 0;
        }
      }
    }

    // Pad - V
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: auto;

      > a {
        height: 49%;
        // height: auto;
      }
    }

    @media only screen and (max-width: 767px) {
      >a {height: 230px;}
    }
  }

  // 主内容
  .main-content {

    // ==================== @Media ==================
    // Mobile
    @media only screen and (max-width: 767px) {
      padding: 0 10px 10px;
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

  // 活动中心
  .activity-list-wrap {

    // ============== @Media ===============
    @media only screen and (min-width: 768px) {
      min-height: 333px;
      // overflow: hidden;
    }
    .calendar {
      @media only screen and (max-width: 1024px) and (min-width: 768px) {
        width: 344px;
        height: 333px;
      }
    }
    .list-container {
      @media only screen and (max-width: 1024px) and (min-width: 768px) {
        margin-right: 344px;
        padding-right: 20px;
        margin-top: 40px;
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
    border-bottom: 1px solid #eee;

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

  .service-links {
    margin: 40px -15px 0 -15px;
    padding-top: 40px;
    border-top: 1px solid #eee;
    @media only screen and (max-width: 767px) {
      margin: 25px -10px 0 -10px;
      padding-top: 0;
      border: none;
      padding: 0 10px;
      background: #F0F3F6;
    }
    .service-header {
      font-size: 18px;
      color: #383838;
      line-height: 30px;
      margin: 10px 0;
      padding-left: 5px;
      a {
        color: #383838;
        text-decoration: none;
      }
    }
    .service-info {
      font-size: 14px;
      color: #959CA5;
      line-height: 21px;
      // padding-left: 20px;
      list-style: disc;
      li {
        // margin: 4px 0;
        height: 44px;
        line-height: 22px;
        padding: 9px 0;
        box-sizing: content-box;
        border-top: 1px solid #eee;
        // border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        // display: block;
      }
      a {
        font-size: 18px;
        color: #75797F;
        width: 100%;
        padding-left: 20px;
        // line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #959CA5;
        text-decoration: none;
        position: relative;
        @media only screen and (max-width: 767px) {
          font-size: 17px;
        }
        &:before {
          content: '';
          position: absolute;
          left: 0px;
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #AFB3B9;

        }
      }
    }
  }
</style>