<!-- 图书详情 - 纸质书 -->
<template>
  <div class="component-pBookDetails">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>

    <!-- 图书简介 -->
    <div class="container">
      <div class="row">
        <!-- 图书概览 -->
        <book-details-header
          :show-lend-type="showLendType"
          :summary-info="summaryInfo"
        ></book-details-header>

        <!-- 简介 -->
        <div class="book-about-container padMargin">
          <column-title :column-title="aboutTitle" :customer-class="aboutClass"></column-title>
          
          <!-- 简介内容 -->
          <div class="about-content" v-html="summaryContent"></div>
        </div>

        <!-- 馆藏 -->
        <div class="collection padMargin">
          <column-title :column-title="collectionTitle" :customer-class="aboutClass"></column-title>

          <!-- 馆藏书籍列表 -->
          <div class="collection-container">
            <div class="collection-switch">
              <template v-for="(item, index) in collectionTab">
                <a href="javascript:;"
                  @click="changeStatus(index)"
                  :class="{active: index === activeIndex}"
                  :key="item.name"
                ><span>{{item.name}}</span></a>
              </template>

              <!-- 筛选 -->
              <span class="collection-filter" @click="filterModalHandler"><i class="iconfont icon-filter"></i></span>
            </div>
            <!-- 当前馆藏状态 -->
            <div class="collection-state">复本／藏书记录</div>

            <!-- 详细馆藏列表 -->
            <table class="table-collection">
              <thead>
                <tr :class="{'show-header-content': headerOtherShow}">
                  <th>
                    馆址
                    <!-- Mobile 馆藏地 | 条形码 -->
                    <div class="mobile-view-content">馆藏地</div>
                  </th>
                  <th>
                    馆藏类型
                    <!-- Mobile 馆藏地 | 条形码 -->
                    <div class="mobile-view-content">条形码</div>
                  </th>
                  <th>状态</th>
                  <th>应还日期</th>
                  <th class="mobile-view-more" v-if="isMobile" @click="showHeaderOther"><i class="iconfont icon-arrow-down2"></i></th>
                  <th v-if="!isMobile">馆藏地</th>
                  <th v-if="!isMobile">条形码</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in museumList">
                  <tr :class="{'show-hide-content': tdIndex === index}" :key="index">
                    <td>
                      {{item.address}}
                      <!-- Mobile 馆藏地 | 条形码 -->
                      <div class="mobile-view-content">{{item.location}}</div>
                    </td>
                    <td>
                      {{item.type}}
                      <!-- Mobile 馆藏地 | 条形码 -->
                      <div class="mobile-view-content">{{item.barcode}}</div>
                    </td>
                    <td><span class="current-collection-state" :class="item.className">{{item.status}}</span></td>
                    <td>{{item.returnDate}}</td>
                    <!-- Mobile 展开内容箭头 -->
                    <td class="mobile-view-more" v-if="isMobile" @click="showTdHandler(index)"><i class="iconfont icon-arrow-down2"></i></td>
                    <!-- PC 馆藏地 | 条形码 -->
                    <td v-if="!isMobile">{{item.location}}</td>
                    <td v-if="!isMobile">{{item.barcode}}</td>
                  </tr>
                  <!-- End -->
                </template>
              </tbody>
            </table>

            <!-- 无数据提示 -->
            <none-data
              v-if="!museumList.length&&!loading"
              msg="暂无馆藏信息"
              :custom-style="{'padding-top': '15px'}"
            ></none-data>

            <!-- 分页 -->
            <div class="pagination-wrap">
              <pagination
                :current="currentPage"
                :total="totalPage"
                @page-change="pageChangeHandle"
                ref="pagination"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 馆藏筛选Modal -->
    <div class="collection-filter-modal" v-show="showFilterModal">
      <div class="filter-item">
        <div class="filter-type">状态</div>
        <div class="allow-select-item">
          <label class="label-checked">
            <input type="radio" name="state" v-model="state" value="">
            <i class="iconfont icon-unselected2"></i><span>全部</span>
          </label>
          <label class="label-checked">
            <input type="radio" name="state" v-model="state" value="i">
            <i class="iconfont icon-unselected2"></i><span>可借</span>
          </label>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-type">馆藏状态</div>
        <div class="allow-select-item">
          <label class="label-checked">
            <input type="radio" name="collection-state" v-model="collectionState" value="">
            <i class="iconfont icon-unselected2"></i><span>全部副本</span>
          </label>
          <!-- <label class="label-checked">
            <input type="radio" name="collection-state" v-model="collectionState" value="bs">
            <i class="iconfont icon-unselected2"></i><span>保存资料</span>
          </label> -->
          <label class="label-checked">
            <input type="radio" name="collection-state" v-model="collectionState" value="pj">
            <i class="iconfont icon-unselected2"></i><span>普通外借资料</span>
          </label>
          <label class="label-checked">
            <input type="radio" name="collection-state" v-model="collectionState" value="cj">
            <i class="iconfont icon-unselected2"></i><span>参考外借资料</span>
          </label>
          <label class="label-checked">
            <input type="radio" name="collection-state" v-model="collectionState" value="yl">
            <i class="iconfont icon-unselected2"></i><span>仅供阅览资料</span>
          </label>
        </div>
      </div>

      <!-- 重置、确认按钮 -->
      <div class="action-btn">
        <button class="btn btn-reset" @click="resetSelect">重置</button><button class="btn btn-confirm" @click="confirmSelect">确认</button>
      </div>
    </div>
    <!-- 半透明层 -->
    <div class="overlay" v-show="showFilterModal" @click="hideFilterModal"></div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import bookDetailsHeader from '../components/bookDetailsHeader';

// api request
import { bookInfoApi, doubanHandle } from '../server/api';

export default {
  name: "pBookDetails",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      routeParams: {},
      showLendType: true,
      aboutTitle: '简介',
      collectionTitle: '馆藏',
      aboutClass: 'about-class',

      // 图书摘要
      summaryInfo: {},

      // 馆藏地切换
      collectionTab: [{
        name: '上海图书馆',
        method: ''
      }, {
        name: '其他馆址',
        method: ''
      }],
      activeIndex: 0,

      // 分页组件配置
      currentPage: 1,
      totalPage: 0,
      pageSize: 30,

      // 馆藏列表
      allData: [],
      museumList: [],
      showFilterModal: false,
      state: '',
      collectionState: '',
      tdIndex: null,
      headerOtherShow: false,
      summaryContent: '',
      loading: true
    };
  },

  created () {
    self = this;
    self.routeParams = self.$route.query;
  },

  components: {
    bookDetailsHeader
  },

  mounted () {
    self.getIPACInfo();
    self.getBookCollection();
  },

  methods: {
    /** 
     * [getIPACInfo IPAC书目检索]
     * @param {String} id 图书id(bookid)
     */
    getIPACInfo () {
      let bid = self.routeParams.bid;
      if (!bid) {
        this.$router.push({
          name: 'homePage'
        });
        return;
      }
      bookInfoApi.ipacInfo({
        id: bid
      })
      .then(res => {
        const data = res.result.bm[0] || {};
        const imgPath = 'http://218.1.116.104:8080/Image/servlet/ImageServlet?bib=';
        self.summaryInfo = {
          cover: data.bookid ? `${imgPath}${data.bookid}` : self.$store.state.defaultBookCover,
          bookName: data.title || '暂无书名',
          author: data.author || '暂无作者',
          publish: data.publisher || '暂无出版社',
          publishDate: data.publishdate,
            isbn: data.isbn,
            doubanScore: 0,
           douUrl: 'http://e.library.sh.cn'
        };
        self.summaryContent = data.summary || '暂无简介';
        let isbn = self.summaryInfo.isbn;
        doubanHandle.doubanBookIsbn(isbn).then(res => {
            let doubanSummary = res.summary;
            let doubanAlt = res.alt;
            let doubanRating = res.rating;
            let doubanCover = res.image;
            self.summaryInfo.douUrl = doubanAlt;
            if(doubanRating.average!="0.0")
                self.summaryInfo.doubanScore = doubanRating.average*1;
            if(doubanSummary)
                self.summaryContent = doubanSummary+"[<a href='"+doubanAlt+"' target='_blank'>豆瓣数据</a>]";
            if(doubanCover&&!self.summaryInfo.cover)
                self.summaryInfo.cover = doubanCover;
        }).catch((error) => {
            console.log(error);
        });

      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getIPACInfo();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    /** 
     * [getBookCollection 馆藏列表]
     *  返回字段说明:
     *    location: 'sl' => 上海图书馆, 其他非 sl 的为 '其他馆址' 列表
     */
    getBookCollection () {
      bookInfoApi.bookcollection(self.routeParams.bid)
      .then(res => {
        self.allData = res.result.collections;
        if (!self.allData.length) return;
        self.loading = false;
        // 筛选过滤数据
        self.collectionDataHandle();
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getBookCollection();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    /** 
     * [collectionDataHandle 馆藏列表数据处理]
     * @param {Int} index 0 - 上海图书馆 | 1 - 其他馆址, default = 0
     * @param {String} state
     *   'i' - 可借
     *   '' - 全部
     * 
     * 备注: 暂缺 '馆藏状态' 筛选条件
     */
    collectionDataHandle (index = self.activeIndex) {
      let clcList = [];
      if (index === 0) {
        clcList = self.allData.filter(item => {
          // state 见上方注释说明
          return self.state === 'i' ? (
                self.collectionState === '' ? (item.location === 'sl' && item.itemstatus === 'i') : (item.location === 'sl' && item.itemstatus === 'i' && item.itemtype === self.collectionState)
                ) 
                : 
                (self.collectionState === '' ? 
                item.location === 'sl' : 
                item.location === 'sl' && item.itemtype === self.collectionState);
        });
      } else {
        clcList = self.allData.filter(item => {
          return self.state === 'i' ? (
                self.collectionState === '' ? (item.location !== 'sl' && item.itemstatus === 'i') : (item.location !== 'sl' && item.itemstatus === 'i' && item.itemtype === self.collectionState)
                ) 
                : 
                (self.collectionState === '' ? 
                item.location !== 'sl' : 
                item.location !== 'sl' && item.itemtype === self.collectionState);
        });
      }
      // console.log(clcList)
      // 计算分页数
      self.totalPage = Math.ceil(clcList.length / self.pageSize);

      let tempList = [];
      let pageData = clcList.slice((self.currentPage - 1) * self.pageSize, self.currentPage * self.pageSize);
      pageData.forEach(item => {
        tempList.push({
          address: item.locationcn,
          type: item.itemtypecn,
          status: item.itemstatuscn,
          statusCode: item.itemstatus,
          returnDate: item.duedate && item.duedate.split(' ')[0],
          location: item.collectioncn,
          barcode: item.barcode,
          itemstatus: item.itemstatus,
          className: self.setCurrentState(item.itemstatus)
        });
      });
      // console.log(tempList);
      self.museumList = tempList;
    },
    /** 
     * [pageChangeHandle 分页事件]
     * @param {Int} pageNum 当前页数
     */
    pageChangeHandle (pageNum) {
      self.currentPage = pageNum;
      self.collectionDataHandle();
    },
    /** 
     * [changeStatus 当前选择馆藏类型]
     * @param {Int} index
     *   0 - 上海图书馆
     *   1 - 其他馆址
     */
    changeStatus (index) {
      self.activeIndex = index;
      // 重置筛选条件, 如不需要可删除
      // self.resetSelect();
      // 初始化插件默认页码
      self.currentPage = 1;
      self.$refs.pagination.init();
      // 筛选过滤数据
      self.collectionDataHandle(index);
    },
    /** 
     * [setCurrentState 设置当前图书状态]
     * @param {String} status
     *   'i' - 归还
     *   'o' - 借出
     *   '' - 其他统一状态
     */
    setCurrentState (status) {
      let state = '';
      switch (status) {
        case 'i': state = 'return';
          break;
        case 'o': state = 'lend';
          break;
        default: state = 'damage';
          break;
      }

      return state;
    },
    /** 
     * [filterModalHandler 显示馆藏筛选Modal]
     */
    filterModalHandler () {
      self.showFilterModal = true;
    },
    resetSelect () { // 重置筛选
      self.state = '';
      self.collectionState = '';
    },
    confirmSelect () { // 确认选择
      // console.log(this.collectionState);
      // console.log(this.state);
      self.hideFilterModal();
      // 初始化插件默认页码
      self.currentPage = 1;
      self.$refs.pagination.init();
      // 过滤数据
      self.collectionDataHandle();
    },
    hideFilterModal () {
      self.showFilterModal = false;
    },
    showHeaderOther () {
      self.headerOtherShow = !self.headerOtherShow;
    },
    showTdHandler (index) {
      let initIndex = self.tdIndex;
      self.tdIndex = (initIndex || initIndex === 0) ? null : index;
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";
  
  .overlay {
    z-index: @zIndex + 9;
  }

  // 馆藏
  .collection {
    @media only screen and (max-width: 768px) {
      padding-right: @mobilePadding;
      padding-left: @mobilePadding;
    }
  }
  
  // 选择馆址
  .collection-switch {
    position: relative;
    border-bottom: 1px solid @border-gray;
    
    > a {
      display: inline-block;
      color: #999;

      span {
        display: block;
        border-bottom: 2px solid transparent;
      }

      &.active {
        @activeColor: #4474ac;
        color: @activeColor;

        span {
          border-bottom-color: @activeColor;
        }
      }
    }

    .collection-filter {
      position: absolute;
      top: 0;
      right: 0;
      .size(40px; 100%);
      text-align: right;
      cursor: pointer;

      .iconfont {
        color: #999;
      }
    }

    // ============== @Media ==============
    // PC | Pad
    @media only screen and (min-width: 768px) {
      font-size: 16px;

      > a {
        position: relative;
        padding-right: 30px;
        padding-left: 30px;

        &:after {
          content: '';
          position: absolute;
          top: 6px;
          right: 0;
          .size(2px; 12px);
          background-color: #979797;
          opacity: .5;
        }

        &:last-of-type:after {
          display: none;
        }

        span {
          padding-bottom: 9px;
        }
      }

      // 筛选
      .collection-filter {
        .iconfont {
          font-size: 14px;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      margin-top: 5px;
      font-size: 13px;

      > a {
        &:not(:last-of-type) {
          margin-right: 18px;
        }
        span {
          padding-bottom: 6px;
        }
      }

      // 筛选
      .collection-filter {
        .iconfont {
          font-size: 10px;
        }
      }
    }
  }

  // 当前查看馆藏状态
  .collection-state {
    color: #666;
    text-align: center;
    background-color: #f2f6fa;

    // ============== @Media ==============
    // PC | Pad
    @media only screen and (min-width: 768px) {
      height: 40px;
      line-height: 40px;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      height: 29px;
      line-height: 29px;
      font-size: 13px;
    }
  }

  // 馆藏列表
  .table-collection {
    width: 100%;
    color: #666;

    th {
      font-weight: normal;
      color: #333;
    }

    th, td {
      text-align: left;
    }

    thead {
      background-color: #f7fafc;
    }

    td {
      span {
        padding: 1px 3px;
        font-size: 12px;
        border-radius: 3px;
      }
    }

    .mobile-view-content {
      display: none;
    }

    // ============== @Media ==============
    // PC | Pad
    @media only screen and (min-width: 768px) {
      tbody {
        tr:nth-child(even) {
          background-color: #fafcfe;
        }
      }

      th, td {
        padding: 15px 0 15px 40px;
        border-bottom: 1px solid @border-gray;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      margin-bottom: 10px;

      .show-hide-content,
      .show-header-content {
        td, th {
          padding-bottom: 28px;
        }

        .mobile-view-content {
          display: block;
        }

        .icon-arrow-down2 {
          font-size: 14px;

          &:before {
            content: "\e638";
          }
        }
      }

      .mobile-view-content {
        position: absolute;
        margin-top: 6px;
        padding-right: 5px;
      }

      tbody {
        border-bottom: 1px solid #ededed;

        tr:nth-child(odd) {
          background-color: #fafcfe;
        }
      }

      th, td {
        padding: 8px 0 7px 19px / 2;
        border-top: 1px solid #ededed;

        .iconfont {
          color: #999;
          font-size: 13px;
        }
      }

      th {
        font-size: 12px;
      }

      td {
        font-size: 11px;

        span {
          padding: 0;
          font-size: 11px;
          border: none;
        }
      }
    }
  }

  // 无数据提示
  .none-collection-data {
    padding-top: 15px;
  }

  // 分页
  .pagination-wrap {

    // ================== @Media ===================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 61px;
    }
  }

  // 馆藏筛选Modal
  .collection-filter-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: @zIndex + 10;
    color: #666;
    background-color: #fff;
    box-shadow: 0 17px 19px 0 rgba(89, 99, 146, .12);

    .filter-type {
      color: #999;
    }

    .filter-item + .filter-item {
      border-top: 1px solid #eef1f2;
    }

    .allow-select-item {
      overflow: hidden;
    }

    .label-checked {
      float: left;
      width: 50%;
      
      > input {
        position: absolute;
        left: -9999em;
        opacity: 0;

        &:checked {
          + i {
            color: #5390d7;

            &:before {
              content: '\e655';
            }
          }
        }
      }

      .iconfont {
        color: #c1c1c1;
        vertical-align: middle;
      }
    }

    .action-btn {
      overflow: hidden;

      > .btn {
        color: #49709c;
        border: 1px solid #49709c;
        text-align: center;
        border-radius: 4px; 
      }

      .btn-confirm {
        background-color: #5390d7;
        border-color: #5390d7;
        color: #fff;
      }
    }

    // =================== @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      .size(538px; 380px);
      margin-top: -190px;
      margin-left: -269px;
      padding: 30px 82px 32px;
      font-size: 16px;
      border-radius: 6px;

      .filter-type {
        font-size: 22px;
      }

      .filter-item {
        + .filter-item {
          margin-top: 1px;
          padding-top: 16px;
        }
      }
      
      .allow-select-item {
        margin-top: 19px;
      }

      .label-checked {
        margin-bottom: 11px;

        .iconfont {
          font-size: 22px;
          margin-right: 11px;
        }
      }

      .action-btn {
        margin-top: 25px;

        > .btn {
          .size(169px; 48px);
          line-height: 44px;
          font-size: 18px;
        }

        .btn-confirm {
          float: right;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      width: 85%;
      padding: 12px 20px 15px;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 3px;

      .filter-type {
        margin-bottom: 9px;
        font-size: 13px;
        line-height: 15px;
      }

      .allow-select-item {
        padding-bottom: 5px;
        font-size: 11px;
      }
      
      .filter-item {
        + .filter-item {
          padding-top: 8px;
        }
      }

      .label-checked {
        margin-bottom: 5px;

        > .iconfont {
          margin-right: 4px;
          font-size: 11px;
        }
      }

      .action-btn {
        margin-top: 12px;
        text-align: center;

        > .btn {
          .size(88px; 25px);
          margin-right: 5px;
          margin-left: 5px;
          line-height: 21px;
        }
      }
    }
  }
</style>