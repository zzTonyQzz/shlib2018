<!-- 图书借阅排行榜 -->
<template>
  <div class="component-container">
    <section class="container library">
      <!-- 面包屑 -->
      <bread-crumb></bread-crumb>

      <div class="row">
        <!-- 榜单列表左pc -->
        <div class="billboard-wrap col-md-3 col-sm-3">
          <nav @click="propShow">
            <i class="iconfont icon-filter"></i>筛选<i class="iconfont icon-shaixuan-jiantou"></i>
          </nav>
          <div class="library-list" ref="topSlide">
            <button
              v-for="(item, index) in typeList"
              :key="index"
              @click="changeClass(index, item.clc, item.lan)"
              :class="{'lib-active': currentActive === index}"
              :disabled="currentActive === index"
            >{{item.name}}</button>
          </div>
        </div>
        <!-- 榜单列表左pc -->
        <div class="col-xs-12 col-md-9 col-sm-9 lib-content">
          <div class="row">
            <template v-for="(lib, index) in libList">
              <h4
                class="billboard-title"
                v-if="index % 3 === 0 && currentActive === 0"
                :key="typeList[index / 3 + 1].name"
              >{{typeList[index / 3 + 1].name}}</h4>
              <div
              class="col-xs-4 lib-sub"
              :class="setRanking(lib.order)"
              :key="index"
              >
                <router-link :to="{path: `/index/pBookDetails?bid=${lib.bookid}`}">
                  <!-- 名次 -->
                  <b
                    class="ranking"
                    v-if="lib.order < 4"
                  >{{lib.order}}</b>
                  <!-- 封面 -->
                  <img :src="lib.cover" :title="lib.title" />
                  <!-- 图书信息 -->
                  <div class="content">
                    <h4 class="book-name">
                      <em :title="lib.title">{{lib.title}}</em>
                      <i class="iconfont"
                        :class="lib.class"
                      ></i>
                    </h4>
                    <i class="sub" v-if="lib.sub">{{lib.sub}}</i>
                    <span>{{lib.count}}借阅</span>
                  </div>
                </router-link>
              </div>
            </template>

            <div v-if="!libList.length">暂无数据</div>
          </div>

          <!-- 加载更多 -->
          <a
            href="javascript:;"
            class="view-more visible-xs"
            v-if="currentActive !== 0"
            :class="{'no-more-data': noMoreData}"
            @click="viewMore"
          >{{tips}}<i class="iconfont icon-arrow-right"></i></a>

          <!-- 分页 -->
          <div class="pagination-wrap">
            <pagination
              :current="currentPage"
              :total="totalPage"
              @page-change="pageChange"
              ref="pagination"
              v-show="delayShowPagination"
            ></pagination>
          </div>
        </div>
      </div>
    </section>
    <!-- pc弹窗 -->
    <lib-prop
      ref="libprop"
      @confirm-select="confirm"
      :billBordType="typeList"
    ></lib-prop>
    <!-- pc弹窗 -->
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this
// import { mapState } from 'vuex';

// components
import libProp from '../components/libProp';
// import libHeader from '../components/libHeader';

// api request
import { billBoard } from '../server/api';

export default {
  name: "digitalReadingList",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      currentPage: 1,
      totalPage: 0,
      maxSize: 15,
      delayShowPagination: false,

      noMoreData: false,       // 无更多数据提示文本
      
      // 榜单列表
      typeList: [{
        clc: 'hqxu',
        lan: 'hqxu',
        name: "总榜"
      }],

      swiperWidth: 0,
      maxTranslate: 0,
      maxWidth: 0,
      TOP_SLIDE: null,

      currentActive: 0,   // 当前选择总榜
      libList:[],         // 图书列表详情页
      saveData: []        // 存储完整数据做分页用
    };
  },

  created () {
    self = this;
  },

  components: {
    libProp,
    // libHeader
  },

  computed: {
    tips () {
      return this.noMoreData ? '没有更多数据了' : '加载更多';
    }
  },

  mounted () {
    self.getClasses();
    self.gather();

    self.TOP_SLIDE = self.$refs.topSlide;
    function getAllWidth () {
      let childList = self.TOP_SLIDE.children;
      let allWidth = 0;
      
      for (let i = 0; i < childList.length; i++) {
        allWidth += childList[i].clientWidth;
        // console.log(childList[i]);
      }

      return -allWidth;
    }

    self.swiperWidth = self.TOP_SLIDE.clientWidth;
    self.maxTranslate = getAllWidth();
    self.maxWidth = -self.maxTranslate + self.swiperWidth / 2;
    // console.log(self.swiperWidth)
    // console.log(self.maxTranslate)
    // console.log(self.maxWidth)
  },

  methods: {
    /** 
     * [getClasses 获取图书排行榜分类参数]
     */
    getClasses () {
      billBoard.getClasses()
      .then(res => {
        if (!res.result.length) return;
        
        self.typeList.push(...res.result);
      }).catch((error) => {
        if (error === '10001') {
          
        }
      });
    },
    /** 
     * [getList 获取借阅排行榜图书列表(除总榜)]
     * @param {Object} options {clc, lan, date, type...}
     */
    getList (options = {}) {
      self.libList = [];
      self.totalPage = 0;

      billBoard.byBook({
        clc: options.clc,
        lan: options.lang,
        date: options.date,
        type: options.type
      })
      .then(res => {
        let data = res.result;
        if (!data.length) return;
        self.saveData = data;
        self.totalPage = Math.ceil(data.length / self.maxSize);

        if (data.length > self.maxSize) {
          data = data.slice(0, self.maxSize);
        }
        self.dataHandle(data);
      });
    },
    /** 
     * [gather 获取借阅排行榜总榜图书列表]
     */
    gather () {
      billBoard.gather()
      .then(res => {
        let data = res.result;
        if (!data.length) return;
        // 过滤 clc === 'all' 的数据
        let filterList = data.filter((item, index) => {
          if (item.classes === 'all' && item.language === 'chi') {
            return false;
          }
          return true;
        });

        // 抽离 classes = 'all' 至列表最后
        let temp = [];
        for (let i = 0; i < filterList.length; i++) {
          if (filterList[i].classes === 'all') {
            let spliceItem = filterList.splice(i, 1);
            i--;
            temp.push(spliceItem[0]);
          }
        }
        let finalList = [...filterList, ...temp];
        self.dataHandle(finalList);
      });
    },
    /** 
     * [dataHandle 处理排行榜数据列表]
     * @param {Array} data 排行榜list
     */
    dataHandle (data) {
      let tempArr = [];
      data.forEach(item => {
        tempArr.push({
          title: self.utils.replacePunctuation(item.title),
          cover: item.cover || self.$store.state.defaultBookCover,
          count: item.cnt,
          order: item.order,
          class: self.revertTrend(item.trend),
          bookid: item.bookid,
          classes: item.classes
        });
      });

      if (self.isMobile && self.currentActive !== 0) {
        self.libList.push(...tempArr);

        if (self.currentPage === self.totalPage) {
          self.noMoreData = true;
        }

        return;
      }
      
      self.libList = tempArr;
      // console.log(self.libList);
      setTimeout(item => {
        self.delayShowPagination = true;
      }, 300);
    },
    /** 
     * [setRanking 设置借阅排名名次]
     * @param {String} order 排名名次
     * @return {String} rankingClass 名次对应class
     */
    setRanking (order) {
      let rankingClass = '';
      switch (order) {
        case '1': rankingClass = 'first';
          break;
        case '2': rankingClass = 'second';
          break;
        case '3': rankingClass = 'third';
          break;
        default: break;
      }

      return rankingClass;
    },
    /** 
     * [revertTrend 转换排名趋势显示类型]
     * @param {Int} trend 
     *        = 0 无变化
     *        > 0 排名上升
     *        < 0 排名下降
     */
    revertTrend (trend) {
      let targetClass = '';
      if (trend == 0) {
        targetClass = 'icon-trend-origin';
      } else if (trend < 0) {
        targetClass = 'icon-trend-down';
      } else if (trend > 0) {
        targetClass = 'icon-trend-up';
      }

      return targetClass;
    },
    /** 
     * [changeClass 排行榜类别列表]
     * @param {Int} index 当前类别index
     * @param {String} clc 当前类别
     * @param {String} lang 当前类别语言 
     */
    changeClass (index, clc, lang) {
      self.wrapperSlide(index);
      self.delayShowPagination = false;
      self.currentActive = index;
      self.currentPage = 1;       // 分页设置为 `第1页`
      self.noMoreData = false;    // 显示 `加载更多`
      self.$refs.pagination.init();
      
      // 获取总榜书籍列表
      if (clc === 'hqxu') {
        self.gather();
        return;
      }

      // 获取其他榜单书籍列表
      self.getList({
        clc,
        lang
      });
    },
    wrapperSlide (index) {
      let slide = self.TOP_SLIDE.children[index],
          slideLeft = slide.offsetLeft,
          slideWidth = slide.clientWidth,
          slideCenter = slideLeft + slideWidth / 2;
      
      if (slideCenter < self.swiperWidth / 2) {
        self.setTranslate();
      } else if (slideCenter > self.maxWidth) {
        self.setTranslate(self.maxTranslate);
      } else {
        let nowTlanslate = slideCenter - self.swiperWidth / 2 + 10;
        self.setTranslate(-nowTlanslate);
      }
    },
    setTranslate (translateX = 0) {
      self.TOP_SLIDE.style.transform = `translate3d(${translateX}px, 0, 0)`;
    },
    /** 
     * [pageChange 分页事件]
     * @param {Int} pageNum 分页数
     */
    pageChange (pageNum) {
      let sliceData = self.saveData.slice((pageNum - 1) * self.maxSize, pageNum * self.maxSize);
      self.dataHandle(sliceData);
    },
    /** 
     * [propShow 显示筛选Modal]
     */
    propShow () {
      self.$refs.libprop.showLoginModal = true;
      self.utils.modalOpenEvent(true);
    },
    /** 
     * [confirm 确认筛选]
     * @param {Object} params 筛选条件对象
     */
    confirm (params) {
      let [clc, lan] = params.boardType.split(',');
      self.typeList.map((item, index) => {
        if (item.clc == clc) {
          self.currentActive = index;
          self.changeClass(index, clc, lan);
        }
      });
    },
    /** 
     * [viewMore Mobile查看更多]
     */
    viewMore () {
      if (self.currentPage === self.totalPage) {
        return;
      }
      self.currentPage ++;
      self.pageChange(self.currentPage);
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .library {
    color: @fontC3;

    .icon-filter {
      color: @fontC9;
    }

    .library-list {
      button {
        position: relative;
        outline: none;
      }

      .lib-active {
        color: @blue;
        font-weight: bold;
      }
    }

    // ================= @Media ==================
    // PC
    @media only screen and (min-width: 768px) {
      nav {
        padding: @m20 0;
        font-size: 16px;
        border-bottom: 1px solid @border-gray;
        cursor: pointer;
      }

      .icon-filter {
        margin-right: 10px;
        font-size: 14px;
      }

      .icon-shaixuan-jiantou {
        display: inline-block;
        margin-left: 5px;
        font-size: 10px;
        transform: scale(10 / 12);
      }

      .library-list {
        padding-top: 5px;

        > button {
          display: block;
          width: 100%;
          height: @m30;
          margin: 10px 0;
          padding-left: 18px;
          line-height: @m30;
          text-align: left;
          font-size: 14px;
          color: #2a2a2a;
          border-left: 2px solid transparent;
          cursor: pointer;

          &:hover {
            color: @blue;
            font-weight: bold;
          }
        }

        .lib-active {
          background-color: #ecf1f6;
          border-left-color: @blue;

          &:after {
            content: '\e637';
            position: absolute;
            top: 1px;
            right: 9px;
            font-size: 10px;
            color: @blue;  
            font-family: "iconfont" !important;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale; 
            transform: scale(.8);
          }
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      .billboard-wrap {
        position: fixed;
        top: @headerHeight;
        z-index: @zIndex + 1;
        .size(100%; 44px);
        border-bottom: 1px solid #e0e5e8;
        background-color: #fff;
        overflow: hidden;
      }

      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: @zIndex + 2;
        .size(40px; 43px);
        background-color: #fff;
        font-size: 0;
        transform: translateY(-50%);
        box-shadow: -3px 0 10px rgba(0, 0, 0, .05);

        .icon-filter {
          font-size: 14px;
        }

        .icon-shaixuan-jiantou {display: none;}
      }
      
      .library-list {
        margin-right: -15px;
        margin-left: -15px;
        padding-right: 44px;
        padding-left: 5px;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        transition: transform .3s ease-out;

        > button {
          position: relative;
          display: inline-block;
          height: 44px;
          padding-right: 3px;
          padding-left: 3px;
          line-height: 44px;
          font-size: 15px;
          color: #999;
          white-space: nowrap;

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            bottom: 0;
            height: 2px;
            background: transparent;
            transition: background .5s;
          }

          + button {
            padding-left: 18px;

            &:after {
              left: 15px;
            }
          }
        }

        .lib-active:after {
          background: #4474ac;
        }
      }
    }
  }

  .billboard-title {
    padding-left: 14px;
    color: #4474ac;
    font-weight: normal;
  }

  .lib-sub {
    // 第二名
    &.second .ranking {
      background-color: #f35d38;
    }

    // 第三名
    &.third .ranking {
      background-color: #f26c38;
    }

    > a {
      position: relative;
      display: inline-block;
      width: 161px;
      text-align: left;
    }

    // 排名
    .ranking {
      position: absolute;
      top: 0;
      left: 0;
      .size(23px; 17px);
      text-align: center;
      line-height: 17px;
      color: #fff;
      font-size: 14px;
      font-weight: normal;
      background-color: #e74e4e;
      border-bottom-right-radius: 9px;
    }

    .book-name {
      margin-bottom: 0;
      font-weight: normal;
      font-size: 18px;
      color: @fontC3;
      white-space: nowrap;

      > em {
        display: inline-block;
        max-width: ~"calc(100% - 22px)";
        font-style: normal;
        .text-overflow();
        vertical-align: middle;
      }

      .iconfont {
        font-size: 14px;
        .vertical-align(-1px);
      }

      // 排名上升
      .icon-trend-up {color: #eda149}
      // 排名无变化
      .icon-trend-origin {color: #5dc9a0;}
      // 排名下降
      .icon-trend-down {color: #5390d7;}
    }

    .sub,
    span {
      display: block;
      margin-top: 3px;
      font-size: 12px;
    }

    .sub {color: @fontC9;}
    span {color: @ye;}

    img {
      display: block;
      .size(160px; 200px);
      box-shadow: 0 0 30px rgba(0, 0, 0, .15);
    }
  }
  
  .lib-content {
    padding-top: 5px;
  }

  .pagination-wrap {
    margin-top: 30px;

    &:empty {
      display: none;
    }
  }

  // =============== @Media ==================
  // PC
  @media only screen and (min-width: 768px) {
    .lib-content {
      padding-left: 46px;
    }

    .lib-sub {
      padding-right: 10px;
      padding-bottom: 28px;

      // 2, 5, 8, 11... 居中显示
      &:nth-of-type(3n + 2) {
        text-align: center;
      }

      // 3, 6, 9, 12... 居右显示
      &:nth-of-type(3n + 3) {
        text-align: right;
      }

      .book-name {
        margin-top: 17px;
      }
    }

    .billboard-title {
      padding-bottom: 10px;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 767px) {
    .lib-content {
      padding-top: 58px;
      padding-right: 12px;
      padding-left: 12px;
      overflow: hidden;
    }

    .billboard-title {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 16px;
    }

    .lib-sub {
      padding-bottom: 20px;
      
      > a {
        .size(98px; 122px);
      }

      img {
        .square(100%);
      }

      span {
        margin-top: 1px;
        font-size: 10px;
      }

      .book-name {
        margin-top: 2px;

        > em {
          font-size: 13px;
        }

        .iconfont {font-size: 8px;}
      }

      .ranking {
        .size(18px; 16px);
        line-height: 15px;
        font-size: 12px;
      }
    }
  }
</style>