<!-- 当前借阅 -->
<template>
  <div class="component-currentLending">
    <div class="container">
      <div class="row">
        <!-- tab -->
        <tab-menu
          class="menu-tab"
          :menuList="tabList"
          :default-active="currentTab"
          @currentActive="currActiveHandle"
        ></tab-menu>
        <!-- 当前借阅 -->
        <div class="curr-borrow" v-show="currentTab===0">
          <!-- 一键续借 -->
          <div class="renew clearfix" :class="{'is-loading': renewText === ''}" v-show="currentTab === 0">
            <button
              class="btn btn-renew"
              :disabled="!canrenew"
              @click="bookRenew"
              v-if="renewText"
            >
              <i class="iconfont icon-continue"></i>{{renewText}}
            </button>
            <p class="renew-info hidden-xs">您当前总借阅<span>{{total}}</span>本书，其中<span>{{generalLending}}</span>本普通外借和<span>{{referenceBorrow}}</span>本参考外借</p>
          </div>
          <!-- tab-content -->
          <div class="lending-content container">
            <template v-for="(item, index) in lendList">
              <div class="row" :key="lendList[index].title">
                <div class="lendingBook-wrap col-sm-6" v-for="inner in item" :key="inner.title">
                <lending-book-info
                  :book-info="inner"
                  :current-tab="currentTab"
                  :is-last="isLast(index)"
                ></lending-book-info>
              </div>
              </div>
              
              <!-- 分割线 -->
              <div class="split-line hidden-xs"
                :class="{'last-line': index === lendList.length - 1}"
                :key="index"
              ></div>
            </template>
          </div>
        </div>
        <!-- 借阅历史 -->
        <div class="history-borrow" v-show="currentTab===1">
          <div class="lending-content container">
            <template v-for="(item, index) in lendHistoryList">
              <div class="row" :key="lendHistoryList[index].title">
                <div class="lendingBook-wrap col-sm-6" v-for="inner in item" :key="inner.title">
                <lending-book-history
                  :book-info="inner"
                  :is-last="isLast(index)"
                ></lending-book-history>
              </div>
              </div>
              
              <!-- 分割线 -->
              <div class="split-line hidden-xs"
                :class="{'last-line': index === lendList.length - 1}"
                :key="index"
              ></div>
            </template>
          </div>
          <!-- 加载更多 -->
          <a
            href="javascript:;"
            class="view-more visible-xs"
            v-show="!isShowLoading"
            :class="{'no-more-data': noMoreData}"
            @click="viewMore"
          >{{tips}}<i class="iconfont icon-arrow-right"></i></a>

          <!-- 分页 -->
          <div class="pagination-wrap" v-show="!isShowLoading">
            <pagination
              :current="currentPage"
              :total="totalPage"
              @page-change="pageChange"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- loading -->
    <loading class="lend-loading" v-show="isShowLoading"></loading>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import tabMenu from '../components/tabMenu';        // tab切换
import lendingBookInfo from '../components/lendingBookInfo';  // 当前借阅书籍列表
import lendingBookHistory from '../components/lendingBookHistory';  // 借阅历史书籍列表

// api request
import { lendingInfo } from '../server/api';

export default {
  name: "currentLending",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      
      // Tab
      tabList: [{
        method: '',
        tabName: '当前借阅'
      }, {
        method: '',
        tabName: '借阅历史'
      }],
      currentTab: 0,          // 默认Tab => 当前借阅
      queryParams: {},        // router 参数

      // 当前借阅图书信息
      total: null,            // 总借阅数量
      generalLending: null,   // 普通外借数量
      referenceBorrow: null,  // 参考外借数量
      canrenew: false,        // 当前读者是否可续借图书

      // 已借图书 | 借阅历史 图书列表
      lendList: [],           // 已借图书列表

      lendHistoryList: [],    // 借阅历史列表
      // 分页组件
      currentPage: 1,
      totalPage: 0,
      defaultPageSize: 16,  // 每页默认展示已借图书数量
      noMoreData: false,      // 无更多数据提示文本
      isShowLoading: true
    };
  },

  created () {
    self = this;
    self.queryParams = self.$route.query;
    self.currentTab = +self.queryParams.isActive;
  },

  components: {
    tabMenu,
    lendingBookInfo,
    lendingBookHistory
  },

  computed: {
    tips () {
      return this.noMoreData ? '没有更多数据了' : '加载更多';
    },
    renewText () {
      return this.canrenew ? '一键续借' : '无可续借图书';
    }
  },

  mounted () {
    self.init();
  },

  methods: {
    /** 
     * [init 页面加载初始获取数据类型]
     *    self.currentTab - 0 => 当前借阅
     *                    - 1 => 借阅历史
     */
    init () {
      self.getBookHistory();
      self.getCurrLending();
      // switch (self.currentTab) {
      //   case 0: self.getCurrLending();
      //     break;
      //   case 1: self.getBookHistory();
      //     break;
      //   default: break;
      // }
    },
    /** 
     * [getCurrLendingList 当前借阅]
     * 备注: 暂不展示 `出版社` | `出版时间` | `作者`
     */
    getCurrLending () {
      lendingInfo.currentLending()
      .then(res => {
        self.hideLoading();
        self.total = res.total; // 总借阅图书数量
        self.canrenew = res.canrenew; // 是否允许续借

        let tempList = [];
        let generalCount = 0,
            referenceCount = 0;
        res.books.map(item => {
          // 计算参考外借和普通外借图书数量
          if (item.booktype === 'pj') {
            generalCount++;
          } else if (item.booktype === 'cj') {
            referenceCount++;
          }

          // 当前借阅图书列表
          tempList.push({
            title: item.title.replace('=', ' '),
            cover: item.cover,
            isbn: item.isbn,
            borrowtime: item.borrowtime,
            duetime: item.duetime,
            type: item.booktype,
            currState: item.alertinfo,
            locationCN: item.location_CN,
            bookid: '',
            bib: item.bib,
            status: item.status_CN
          });
        });

        self.generalLending = generalCount;
        self.referenceBorrow = referenceCount;
        self.lendList = self.utils.splitArr(tempList);
      }).catch((error) => {
        self.hideLoading();
      });
    },
    /** 
     * [getCurrLendingList 借阅历史]
     * @param {Int} page 当前分页数, default = 1
     * 备注: 暂不展示 `出版社` | `出版时间` | `作者`
     */
    getBookHistory (page = self.currentPage) {
      lendingInfo.bookHistory(page)
      .then(res => {
        self.hideLoading();
        // 计算总页数
        self.totalPage = Math.ceil(res.totalrows / self.defaultPageSize);

        let tempList = res.bkhis.map(item => {
          return {
            title: item.title.replace('=', ' '),
            cover: `http://218.1.116.99/Image/servlet/ImageServlet?bib=${item.bib}`,
            borrowtime: item.borrowdate,
            borrowlocationcn: item.borrowlocationcn,
            duetime: item.duedate,
            duelocation: item.duelocationcn,
            type: item.booktype,
            bib: item.bib
          };
        });

        if (self.isMobile) {
          self.lendHistoryList.push(...self.utils.splitArr(tempList));

          if (self.currentPage === self.totalPage) {
            self.noMoreData = true;
          }

          return;
        }

        self.lendHistoryList = self.utils.splitArr(tempList);
      }).catch((error) => {
        self.hideLoading();
      });
    },
    /** 
     * [pageChange 分页选择]
     * @param {Int} pageNum 分页数
     */
    pageChange (pageNum) {
      self.showLoading();
      window.scroll(0, 0);
      self.getBookHistory(pageNum);
    },
    /** 
     * [bookRenew 一键借阅]
     */
    bookRenew () {
      self.renewText = '';
      lendingInfo.bookrenew()
      .then(res => {
        alert('图书续借成功');
        self.canrenew = false;
        self.getCurrLending();
      });
    },
    /** 
     * [currActiveHandle 当前选择tab]
     * @param {Int} index   0 - 当前借阅
     *                      1 - 借阅历史
     */
    currActiveHandle (index) {
      // self.showLoading();
      this.$router.replace({
        query: {
          isActive: index
        }
      });
      self.currentTab = index;
      //self.currentPage = 1;       // 分页设置为 `第1页`
      //self.noMoreData = false;    // 显示 `加载更多`
      //self.lendList = [];         // 清空列表内容

      //self.init();
    },
    /** 
     * [viewMore Mobile 加载更多]
     */
    viewMore () {
      if (self.noMoreData) {
        return;
      }
      self.currentPage ++;
      self.getBookHistory(self.currentPage);
    },
    /** 
     * [isLast 是否为最后一个列表]
     * @param {Int} index 列表索引值
     */
    isLast (index) {
      return index === this.lendList.length - 1 ? true : false;
    },
    showLoading () {
      self.isShowLoading = true;
    },
    hideLoading () {
      self.isShowLoading = false;
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  // 当前借阅及借阅历史loading
  .lend-loading {
    // ============= @Media ===============
    // PC
    @media only screen and (min-width: 768px) {
      // position: relative;
      // height: 300px;
      position: fixed;
      top: 0px;
      bottom: 0px;
      width: 100%;
      z-index: 8;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: 0px;
      bottom: 0px;
      width: 100%;
      z-index: 8;
    }
  }

  // 续借按钮loading
  .is-loading {
    position: relative;

    // ============= @Media ===============
    // PC
    @media only screen and (min-width: 768px) {
      &:before {
        content: "";
        .ball-clip-rotate(18px; #fff; 2px);
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      &:before {
        content: "";
        .ball-clip-rotate(16px; #fff; 2px);
      }
    }
  }

  .menu-tab {

    // ================= @Media ===================
    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: @headerHeight;
      z-index: @zIndex + 1;
      width: 100%;
      background-color: #fff;
    }
  }

  .renew {
    background-color: #f2f6fa;
    color: #666;

    > .btn-renew {
      color: #fff;
      text-align: center;

      &:not(:disabled):hover,
      &:not(:disabled):active,
      &:disabled {
        opacity: .8;
      }
    }

    > p {
      margin-top: 0;
      margin-bottom: 0;
    }

    .renew-info {
      > span {
        margin-right: 4px;
        margin-left: 4px;
        font-weight: bold;
        color: #4573ab;
      }
    }

    // ================ @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding: 14px 20px 13px 15px;
      line-height: 30px;

      > .btn-renew {
        float: right;
        height: 30px;
        padding-right: 14px;
        padding-left: 14px;
        line-height: 28px;
        font-size: 14px;
        background-color: #4573ab;
        border-radius: 2px;

        .iconfont {
          float: right;
          margin-top: 1px;
          margin-left: 4px;
          font-size: 12px;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      bottom: 0;
      z-index: 10;
      .size(100%; 47px);
      line-height: 47px;
      text-align: center;
      font-size: 15px;
      background-color: #5390d7;

      .btn-renew {
        line-height: 45px;
      }

      .iconfont {
        margin-right: 11px / 2;
        font-size: 15px;
      }
    }
  }

  // 当前借阅书籍列表
  .lending-content {
    .lendingBook-wrap {
      padding-left: 0;
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }

    // ================= @Media ==================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 41px;

      > li {
        position: relative;
      }

      .split-line {
        height: 1px;
        margin: 18px -15px 30px;
        background-color: #eee;

        &.last-line {
          margin-bottom: 0;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      padding-top: 34px;

      .lendingBook-wrap {
        padding-right: 0;
      }
    }
  }

  // 分页
  .pagination-wrap {

    &:empty {
      display: none;
    }
    // ================== @Media ===================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 60px;
    }
  }
</style>