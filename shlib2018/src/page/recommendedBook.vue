<!-- 图书推荐 -->
<template>
  <div class="component-recommendedBook">
    <div class="container">
      <div class="row">
        <!-- 搜索结果列表 -->
        <ul class="search-result-lists padMargin clearfix">
          <router-link
            tag="li"
            v-for="item in bookList"
            :key="item.title"
            :to="{path: `/index/pBookDetails?bid=${item.fbookid}`}"
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
        </ul>
      </div>
    </div>

    <!-- 加载更多 -->
    <a
      href="javascript:;"
      class="view-more visible-xs"
      :class="{'no-more-data': noMoreData}"
      @click="viewMore"
      v-if="delayShowPagination"
    >
      {{tips}}<i class="iconfont icon-arrow-right"></i>
    </a>

    <!-- 分页 -->
    <div class="pagination-wrap">
      <pagination
        :current="currentpage"
        :total="totalPage"
        @page-change="pageChange"
        v-show="delayShowPagination"
      ></pagination>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import bookInfo from '../components/bookInfo';

// apis
import { userprofiles } from '../server/api';

export default {
  name: "recommendedBook",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      coverLinks: this.$store.state.bookCoverLinks,
      currentpage: 1,
      totalPage: 0,
      maxLength: 20,

      saveData: [],
      bookList: [],

      // 无更多数据提示文本
      noMoreData: false,

      delayShowPagination: false
    };
  },

  created () {
    self = this;
  },

  components: {
    bookInfo
  },

  computed: {
    tips () {
      return this.noMoreData ? '没有更多数据了' : '加载更多';
    }
  },

  mounted () {
    self.getBookrecom();

    self.$parent.isNextPage = true;
  },

  destroyed () {
    self.$parent.isNextPage = false;
  },

  methods: {
    getBookrecom () {
      userprofiles.getBookrecom()
      .then(res => {
        let data = res.result;
        self.totalPage = Math.ceil(data.length / self.maxLength);

        let idsStr = data.join(',');
        userprofiles.getInfobyids({
          idsStr
        })
        .then(res => {
          if (res.code == -1) return;
          let data = res.result.bm;
          if (!data.length) return;
          self.saveData = data;
          self.dataHandle();
        });
      });
    },
    dataHandle (pageNum = self.currentpage) {
      let data = self.saveData.slice((pageNum - 1) * self.maxLength, pageNum * self.maxLength);
      let tempArr = data.map(item => {
        return {
          ftitle: item.title,
          fcover: `${self.coverLinks}${item.bookid}`,
          fauthor: item.author || '暂无作者',
          fpublisher: item.publisher,
          fpublishdate: item.publishdate,
          fsummary: item.summary || '暂无书籍简介',
          fbookid: item.bookid
        };
      });

      setTimeout(item => {
        self.delayShowPagination = true;
      }, 300);

      if (self.isMobile) {
        self.bookList.push(...tempArr);

        if (pageNum === self.totalPage) {
          self.noMoreData = true;
        }
        return;
      }

      self.bookList = tempArr;
    },
    pageChange (pageNum) {
      self.currentpage = pageNum;
      self.dataHandle();
      window.scroll(0,0);
    },
    viewMore () {
      if (self.noMoreData) {
        return;
      }
      self.currentpage ++;
      self.dataHandle();
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .component-book-info {
    display: block;
    color: #959ca5;

    .book-cover {
      box-shadow: 0 0 35px rgba(0, 0, 0, .13);

      > img {
        display: block;
        // .square(100%);
        width: auto;
        height: 100%;
        margin: 0 auto;
        object-fit: cover;
      }
    }

    .book-about {
      position: relative;
    }

    .book-name {
      color: #333;
      font-weight: normal;
      white-space: nowrap;
      .text-overflow();
    }

    .book-intro {
      position: absolute;
      bottom: -2px;
      margin-top: 0;
      margin-bottom: 0;
    }

    .publish-year {
      position: relative;
      padding-left: 16px;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 8px;
        .size(1px; 12px);
        margin-top: -6px;
        background-color: #959ca5
      }
    }

    // =================== @Media ==================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      @bookCoverSize: 161px;

      height: 200px;
      margin-bottom: 40px;
      cursor: pointer;

      .book-cover {
        float: left;
        .size(@bookCoverSize; 100%);

        > img {
          display: block;
          .square(100%);
        }
      }
      
      .book-about {
        height: 100%;
        margin-left: @bookCoverSize + 30;
        padding-right: 10px;
      }

      .book-name {
        position: relative;
        top: -3px;
        margin-top: 0;
        font-size: 18px;
      }

      .book-author-publish {
        margin-top: -6px;

        > p {
          margin-top: 6px;
          margin-bottom: 0;
          // white-space: nowrap;
        }
      }

      .book-intro {
        max-width: 100%;
        // max-height: 60px;
        height: 60px;
        overflow: hidden;
        padding-right: 10px;
      }

      .iconfont {
        margin-right: 9px;
      }

      .icon-chubanshe {
        font-size: 13px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      margin-bottom: 18px;

      .book-cover {
        display: block;
        .size(194px / 2; 241px / 2);
      }

      .book-name {
        margin-top: 12px;
        margin-bottom: 6px;
        font-size: 13px;
      }

      .book-type {
        font-size: 11px;
        color: #959ca5;
      }
    }
  }

  .component-recommendedBook {
    
    // =============== @Media ================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 19px;

      .search-result-lists {
        margin-bottom: 60px;

        // > li {
        //   width: 50%;
        //   float: left;
        //   + li {
        //     margin-top: 30px;
        //     padding-top: 30px;
        //     border-top: 1px solid @border-gray;
        //   }
        // }
        > li {
          width: 50%;
          float: left;
          margin-top: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid @border-gray;
        }
      }

      .component-book-info {
        margin-bottom: 0;
        .book-cover {
          img {
            object-fit: cover;
          }
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 768px) {
      .search-result-lists {
        padding-top: 19px;

        > li {
          width: 100%;
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
          img {
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
</style>