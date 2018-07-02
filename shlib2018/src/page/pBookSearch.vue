<!-- 电子书检索 -->
<template>
  <div class="component-eBookSearch">
    <div class="container">
      <div class="search-length padMargin" v-show="!firstIn">共检索到<span>{{searchCount}}</span>条关于 {{getSearchEvent}} 的结果</div>
      <div class="row">
        <!-- 搜索结果列表 -->
        <ul class="search-result-lists padMargin">
          <li v-for="item in bookResult"
            :key="item.bookName">
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
          v-show="!bookResult.length && !loading && !firstIn"
          msg="请搜索其他关键词"
        ></none-data>

        <!-- 第一次进入页面，搜索内容为空 -->
        <none-search
          v-if="firstIn"
        ></none-search>

        <!-- 加载更多 -->
        <load-more @more-data="viewMore" :current="currentPage" :total="totalPage" :load="loading" v-show="bookResult.length"></load-more>

        <!-- 分页 -->
        <div class="pagination-wrap">
          <pagination ref="pbPager"
            :current="currentPage"
            :total="totalPage"
            @page-change="pageChange"
          ></pagination>
        </div>
        <!-- loading -->
        <loading class="lend-loading" v-show="loading"></loading>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import bookInfo from '../components/bookInfo';
import loadMore from '../components/loadMore';
import noneSearch from '../components/noneSearch';
// api request
import { ebookSearch } from '../server/api';

export default {
  name: "pBookSearch",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      coverLinks: this.$store.state.bookCoverLinks,

      // 搜索结果列表
      bookResult: [],     // 图书
      // magazineResult: [], // 期刊
      firstIn: true,  // 刚进入页面
      searchCount: 0,
      // 分页
      currentPage: 1,
      totalPage: 0,
      maxLength: 20,
      loading: true,
      // url传参
      // queryparams: {},

      // 无更多数据提示文本
      // noMoreData: false,
    };
  },

  created () {
    self = this;
    // self.queryparams = self.$route.query;
    // 默认显示搜索框
    // self.commitEvent('changeSearchBar', true); // 显示搜索框
  },

  computed: {
    getSearchEvent () {
      return this.$store.state.searchEvent || '';
    },
    // showNoneDataType () {
    //   return this.bookResult;
    // }
  },

  watch: {
    getSearchEvent (newVal, oldVal) {
      self.init();
    }
  },

  components: {
    bookInfo,
    loadMore,
    noneSearch
  },

  mounted () {
    self.commitEvent('changeSearchBar', true); 
    self.init();
  },

  destroyed () {
    self.commitEvent('changeSearchBar', false); // 离开检索页即隐藏搜索框
  },

  methods: {
    init () {
      self.initList();
      self.getIPAC(1);
    },
    initList () { // 初始化列表
      self.bookResult.length = 0;
      self.currentPage = 1;
      self.totalPage = 0;

      // 页码初始化
      this.$refs.pbPager.init();
    },
    getIPAC (pageNum) {
      if (!self.getSearchEvent) {
        // console.log('000');
        self.loading = false;
        return;
      }
      self.firstIn = false;
      self.loading = true;
      ebookSearch.getIPAC({
        keywords: self.getSearchEvent,
        page: pageNum
      })
      .then(res => {
        if (res.code == -1) {
          self.loading = false;
          return;
        }
        let data = res.result.bm;
        if (!data.length) {
          self.loading = false;
          self.searchCount = 0;
          return;
        }

        let tempArr = data.map((item, index) => {
          return {
            ftitle: item.title,
            fcover: `${self.coverLinks}${item.bookid}`,
            fauthor: item.author || '暂无作者',
            fpublisher: item.publisher || '暂无出版社信息',
            fpublishdate: item.publishdate,
            fbookid: item.bookid,
            fsummary: self.utils.replacePunctuation(decodeURIComponent(item.summary)) || '暂无简介',
            skipUrl: `/index/pBookDetails?bid=${item.bookid}&type=zbook`
          };
        });
        self.loading = false;
        self.currentPage = pageNum;
        self.totalPage = Math.ceil(res.result.maxrows / self.maxLength);
        self.searchCount = res.result.maxrows;
        // Mobile 点击 加载更多 -> 追加数据
        if (self.isMobile) {
          // self.commitEvent('changeSearchBar', false); 
          self.bookResult.push(...tempArr);
          // if (self.currentPage === self.totalPage) {
          //   self.noMoreData = true;
          // }
          return;
        }
        self.bookResult = tempArr;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getIPAC(1);
            clearTimeout(t);
          }, 500);
        }
      });
    },
    pageChange (pageNum) {
      window.scrollTo(0,0);
      // self.bookResult.length = 0;
      self.getIPAC(pageNum);
    },
    viewMore () {
      // if (self.noMoreData) {
      //   return;
      // }
      self.currentPage ++;
      self.getIPAC(self.currentPage);
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";
  @import '../css/less/book-info';

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

      .component-book-info {
        margin-bottom: 0;
        .img-responsive {
            display: block;
            // .square(100%);
            // width: auto;
            height: 100%;
            // margin: 0 auto;
            object-fit: cover;
          }
      }
    }

    // Mobile
    @media only screen and (max-width: 768px) {
      margin-top: 55px;
      .search-result-lists {
        padding-top: 19px;

        > li {
         padding-bottom: 20px;
         margin-bottom: 20px;
         border-bottom: 1px solid @border-gray;
        }
      }

      .component-book-info {
        display: flex;
        align-items: center;
        padding: 0 15px;
        margin-bottom: 0;

        .book-cover {
          .size(194px / 2; 241px / 2);
          .img-responsive {
            display: block;
            // .square(100%);
            // width: auto;
            height: 100%;
            // margin: 0 auto;
            object-fit: cover;
          }
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

        .icon-user-avatar {font-size: 14px;}
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