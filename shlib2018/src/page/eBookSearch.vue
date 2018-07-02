<!-- 电子书检索 -->
<template>
  <div class="component-eBookSearch">
    <div class="container">
      <div class="row">
        <tab-menu
          :menu-list="menuList"
          :default-active="currentActive"
          customer-class="e-book-search"
          @currentActive="currentHandle"
        ></tab-menu>

        <!-- 图书搜索结果列表 -->
        <div class="book" v-show="currentActive===0">
          <div class="search-length padMargin" v-show="!firstIn">共检索到<span>{{bookResult.searchCount}}</span>本关于 {{getSearchEvent}} 的图书</div>
          <ul class="search-result-lists padMargin clearfix">
            <li v-for="(item,index) in bookResult.list"
            :key="index">
              <router-link
                :to="{path: item.skipUrl}"
                target="_blank"
              >
                <div class="component-book-info clearfix">
                  <span class="book-cover"><img :src="item.fcover" alt="" class="img-responsive"></span>
                  <div class="book-about">
                    <h3 class="book-name">{{item.ftitle}}</h3>
                    <!-- 书籍类型 -->
                    <div class="book-author-publish">
                      <p><i class="iconfont icon-user-avatar"></i>{{item.fauthor}}</p>
                      <p><i class="iconfont icon-chubanshe"></i>{{item.fpublisher}}
                        <template v-if="item.publishDate">
                          | {{item.publishDate}}年
                        </template>
                      </p>
                    </div>
                    <p class="book-intro">{{item.fsummary}}</p>
                  </div>
                </div>
              </router-link>
            </li>
        </ul>

        <!-- 无数据提示 -->
        <none-data
          v-show="!bookResult.list.length && !bookResult.loading && !firstIn"
          msg="请搜索其他关键词"
        ></none-data>

        <!-- 第一次进入页面，搜索内容为空 -->
        <none-search
          v-if="firstIn"
        ></none-search>

        <!-- 加载更多 -->
        <load-more @more-data="viewMore" :current="bookResult.currentPage" :total="bookResult.totalPage" :load="bookResult.loading" v-show="bookResult.list.length"></load-more>

        <!-- 分页 -->
        <div class="pagination-wrap">
          <pagination ref="bsPager"
            :current="bookResult.currentPage"
            :total="bookResult.totalPage"
            @page-change="pageChange"
          ></pagination>
        </div>
        <!-- loading -->
        <loading class="lend-loading" v-show="bookResult.loading"></loading>
        </div>
        <!-- 期刊搜索结果 -->
        <div class="magazine" v-show="currentActive===1">
          <div class="search-length padMargin" v-show="!firstIn">共检索到<span>{{magazineResult.searchCount}}</span>本关于 {{getSearchEvent}} 的期刊</div>
          <ul class="padMargin search-result-lists clearfix">
            <li class="mag" v-for="book in magazineResult.list" :key="book.bid">
              <router-link :to="{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}}" target="_blank">
                <simple-book :bookinfo="book"></simple-book>
              </router-link>
            </li>
          </ul>

        <!-- 无数据提示 -->
        <none-data
          v-if="!magazineResult.list.length && !magazineResult.loading && !firstIn"
          msg="请搜索其他关键词"
        ></none-data>

        <!-- 第一次进入页面，搜索内容为空 -->
        <none-search
          v-if="firstIn" msg="搜索您感兴趣的期刊"
        ></none-search>

        <!-- 加载更多 -->
        <load-more @more-data="viewMore" :current="magazineResult.currentPage" :total="magazineResult.totalPage" :load="magazineResult.loading" v-show="magazineResult.list.length"></load-more>

        <!-- 分页 -->
        <div class="pagination-wrap">
          <pagination ref="msPager"
            :current="magazineResult.currentPage"
            :total="magazineResult.totalPage"
            @page-change="pageChange"
          ></pagination>
        </div>
        <!-- loading -->
        <loading class="lend-loading" v-show="magazineResult.loading"></loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import tabMenu from "../components/tabMenu";
import bookInfo from "../components/bookInfo";
import simpleBook from '../components/simpleBook';
import loadMore from '../components/loadMore';
import noneSearch from '../components/noneSearch';

// api request
import { ebookSearch } from "../server/api";

export default {
  name: "eBookSearch",

  data() {
    return {
      isMobile: this.$store.state.isMobile,
      coverLinks: this.$store.state.bookCoverLinks,
      maxLength: 20,  // 每页显示条数/每次加载条数
      // tab
      menuList: [
        {
          tabName: "图书",
          count: 0
        },
        {
          tabName: "期刊",
          count: 0
        }
      ],
      currentActive: 0, // 激活标签
      firstIn: true,
      searchCount: 0,
      keywords: this.getSearchEvent,

      // 搜索结果列表
      bookResult: {
        // 图书
        list: [],
        currentPage: 1, // 当前页
        totalPage: 0,  // 总页数
        loading: true,  // 正在搜索
        searchCount: 0
        // noMoreData: false, // 无更多数据提示文本
      },
      magazineResult: {
        // 期刊
        list: [],
        currentPage: 1,
        totalPage: 0,
        loading: true,
        searchCount: 0
        // noMoreData: false
      },

      // url传参
      // queryparams: {},
    };
  },

  created() {
    self = this;
    // self.queryparams = self.$route.query;
    // 默认显示搜索框
    console.log('ebook show')
    // self.commitEvent("changeSearchBar", true); // 显示搜索框
  },

  computed: {
    getSearchEvent() {
      return this.$store.state.searchEvent || "";
    },
    // showNoneDataType() {
    //   return this.currentActive === 0 ? this.bookResult : this.magazineResult;
    // },
    // tips() {
    //   return this.noMoreData ? "没有更多数据了" : "加载更多";
    // }
  },

  watch: {
    getSearchEvent(newVal, oldVal) {
      self.init();
    }
  },

  components: {
    tabMenu,
    bookInfo,
    simpleBook,
    loadMore,
    noneSearch
  },

  mounted() {
    self.commitEvent('changeSearchBar', true); 
    self.init();
  },

  destroyed() {
    // console.log('ebook hide')
    self.commitEvent("changeSearchBar", false); // 离开检索页即隐藏搜索框
  },

  methods: {
    init() {
      self.initList();
      self.getEqubSearch();
      self.getMagazineSearch();
    },
    initList () { // 初始化列表
      self.bookResult.list.length = 0;
      self.bookResult.currentPage = 1;
      self.bookResult.totalPage = 0;

      self.magazineResult.list.length = 0;
      self.magazineResult.currentPage = 1;
      self.magazineResult.totalPage = 0;

      // 页码初始化
      this.$refs.bsPager.init();
      this.$refs.msPager.init();
    },
    getEqubSearch(pageNum = 1) {
      if (!self.getSearchEvent) {
        self.bookResult.loading = false;
        return;
      }
      self.firstIn = false;
      self.bookResult.loading = true;
      self.bookResult.searchCount = 0;
      // 图书搜索
      ebookSearch
        .equbSearch({
          keyword: self.getSearchEvent,
          clsType: "",
          page: pageNum
        })
        .then(res => {
          let data = res.result.lst;
          // 获取搜索结果总数量
          self.menuList[0].count = res.result.maxrows;
          if (!data.length) {
            self.bookResult.loading = false;
            self.bookResult.searchCount = 0;
            return;
          }

          let tempArr = [];
          data.forEach(item => {
            tempArr.push({
              ftitle: item.ftitle,
              fcover: item.fcover || self.$store.state.defaultBookCover,
              fauthor: item.fauthor,
              fpublisher: item.fpublisher || "暂无出版社信息",
              fpublishdate: item.fpublishdate,
              fbookid: item.fbookid,
              fsummary:
                self.utils.replacePunctuation(
                  decodeURIComponent(item.fsummary)
                ) || "暂无简介",
              fcommonclass: item.fcommonclass,
              skipUrl: `/eBook/eBookDetails?type=epub&bid=${item.fbookid}`
            });
          });
          self.bookResult.loading = false;
          self.bookResult.currentPage = pageNum;
          self.bookResult.totalPage = Math.ceil(res.result.maxrows / self.maxLength);
          self.bookResult.searchCount = res.result.maxrows;
          // Mobile 点击 加载更多 -> 追加数据
          if (self.isMobile) {
            // self.commitEvent("changeSearchBar", false);
            self.bookResult.list.push(...tempArr);
            // if (self.bookResult.currentPage === totalList) {
            //   self.bookResult.noMoreData = true;
            // }
            return;
          }
          self.bookResult.list = tempArr;
        }).catch((error) => {
          if (error === '10001') {
            let t = setTimeout(() => {
              self.getEqubSearch(1);
              clearTimeout(t);
            }, 500);
          }
        });
    },
    getMagazineSearch(pageNum) {
      if (!self.getSearchEvent) {
        self.magazineResult.loading = false;
        return;
      }
      self.firstIn = false;
      self.magazineResult.loading = true;
      self.magazineResult.searchCount = 0;
      // 期刊搜索
      ebookSearch.magazineSearch({
          source: '',
          classtype: '',
          keyword: self.getSearchEvent,
          viewtype: "all",
          page: pageNum
        }).then(res => {
          let data = res.result.mags;
          // 获取搜索结果总数量
          self.menuList[1].count = res.result.total;
          if (!data.length) {
            self.magazineResult.loading = false;
            self.magazineResult.searchCount = 0;
            return;
          }

          // 统一处理搜索结果数据列表
          let tempArr = [];
          data.forEach(item => {
            tempArr.push({
              bid: item.magid,
              title: item.title,
              cover: item.cover,
              type: '',
              pace: ''
            });
          });
          self.magazineResult.loading = false;
          self.magazineResult.currentPage = pageNum;
          self.magazineResult.totalPage = Math.ceil(res.result.total / self.maxLength);
          self.magazineResult.searchCount = res.result.total;
          if (self.isMobile) {
            // self.commitEvent("changeSearchBar", false);
            self.magazineResult.list.push(...tempArr);
            return;
          }
          self.magazineResult.list = tempArr;
        }).catch((error) => {
          if (error === '10001') {
            let t = setTimeout(() => {
              self.getMagazineSearch(1);
              clearTimeout(t);
            }, 500);
          }
        });
    },
    currentHandle(index) {
      self.currentActive = index;
    },
    pageChange(pageNum) {
      window.scrollTo(0,0);
      self.tabAction(pageNum);
    },
    tabAction(pageNum) {
      // 电子书, 期刊检索
      switch (self.currentActive) {
        case 0:
          self.getEqubSearch(pageNum);
          break;
        case 1:
          self.getMagazineSearch(pageNum);
          break;
        default:
          break;
      }
    },
    viewMore() {
      self.currentPage++;
      self.getEqubSearch(self.currentPage);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../css/less/common";
@import "../css/less/book-info";

.component-eBookSearch {
  .search-length {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #999999;
    span {
      color: #5C7BC8;
      font-size: 16px;
      padding: 0 4px 0 4px;
    }
  }
  // =============== @Media ================
  // PC | Pad
  @media only screen and (min-width: 768px) {
    padding-top: 19px;

    .search-result-lists {
      margin-top: 40px;
      margin-bottom: 60px;

      > li {
        + li {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid @border-gray;
        }
      }
    }
    .magazine {
      // margin-top: 40px;
      .mag {
        float: left;
        width: 20%;
        margin-top: 0;
        margin-bottom: 40px;
        padding: 0 25px 0 25px;
      }
    }
    .component-book-info {
      margin-bottom: 0;
    }
  }

  // Mobile
  @media only screen and (max-width: 768px) {
    .row {
      padding-top: 55px;
      .tab-menu {
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 8;
        background-color: #fff;
      }
      .book,.magazine {
        margin-top: 34px;
        height: calc(~'100vh - 100px');
        overflow: scroll;
      }
    }
    .search-result-lists {
      padding-top: 19px;

      > li {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid @border-gray;
      }
    }
    .magazine {
      // padding-top: 19px;
      .mag {
        float: left;
        width: 33.333333%;
        margin-bottom: 20px;
        padding: 0 15px 0 15px;
      }
    }
    .component-book-info {
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin-bottom: 0;

      .book-cover {
        .size(194px / 2; 241px / 2);
      }

      .book-about {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        height: 241px / 2;
        padding-left: 16px;
        overflow: hidden;
      }

      .book-name {
        margin-top: 0;
        font-size: 15px;
      }

      .book-intro {
        position: static;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        margin-top: 2px;
        margin-bottom: 2px;
        font-size: 11px;
      }

      .iconfont {
        margin-right: 5px;
        font-size: 12px;
      }

      .icon-user-avatar {
        font-size: 14px;
      }
    }
  }
}
.lend-loading {
    // ============= @Media ===============
    // PC
    @media only screen and (min-width: 768px) {
      // position: relative;
      // height: 300px;
      position: fixed;
      top: 30%;
      left: 0;
      right: 0;
      // bottom: 0px;
      // width: 100%;
      z-index: 8;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: 52px;
      bottom: 0px;
      left: 0;
      right: 0;
      // width: 100%;
      z-index: 8;
    }
  }
</style>