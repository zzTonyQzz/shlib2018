<!-- 搜索组件 -->
<template>
  <div class="component-search" v-show="showSearchArea" @click.stop="searchBarClick">
    <div class="container">
      <div class="row">
        <div class="search-area unityPadding clearfix">
          <div class="search-select-item" ref="sitem">
            <strong
              class="book-search"
              :class="{active: showSearchList}"
              @click="searchListAction()"
            >{{currentSearchType}}</strong>
            <ul class="search-list" v-show="showSearchList">
              <li
                v-for="(item, index) in searchList"
                :key="item.name"
                :class="{active: index === currentSelect}"
                @click="chooseSearchType(index, item.sty, item.name, $event)"
              >{{item.name}}</li>
            </ul>
          </div>
          <!-- <div class="search-input" :style="{'padding-left': currentSize}"> -->
          <div class="search-input">
            <div class="search-icon" @click="searchAction"><i class="iconfont icon-search2"></i><span class="hidden-xs">搜索</span></div>
            <input
              type="text"
              placeholder="搜索关键字"
              v-model="keyword"
              :autofocus="true"
              @keyup.enter="searchAction"
            >
            <i class="iconfont icon-close-bg clear-input" @click="clearKeyWord"></i>
          </div>
          <button class="search-btn visible-xs" @click="searchAction">检索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "searchArea",

  data () {
    return {
      isMobile: this.$store.state.isMobile,

      // 检索类型选择
      showSearchList: false,
      currentSelect: 0,
      searchList: [{
        name: '书目检索',
        order: 0,
        sty: 'pbook'
      }, {
        name: '电子书检索',
        order: 1,
        sty: 'ebook'
      }, {
        name: '资源发现',
        order: 2,
        sty: ''
      }],
      currentSize: null,

      // 搜索关键字
      keyword: ''
    };
  },

  created () {
    self = this;

    // let sty = self.ls.getItem('searchType');
    // self.currentSelect = sty === 'ebook' ? 1 : 0;
  },

  computed: {
    /** 
     * [showSearchArea 显示检索输入框]
     */
    showSearchArea () {
      return self.$store.state.showSearchBar;
    },
    /**
     * [currentSearchType 当前选择检索类型]
     */
    currentSearchType () {
      return self.searchList[self.currentSelect].name;
    }
  },

  mounted() {
    // 隐藏搜索栏
    document.addEventListener('click', (e) => {
      let currentPage = self.$route.name;
      // 搜索页不隐藏搜索框
      if (currentPage === 'pBookSearch' || currentPage === 'eBookSearch') {
        if (self.showSearchList) {
          self.showSearchList = false;
        }
        
        return;
      }
      if (!self.$store.state.showSearchBar) {
        return;
      }
      if (!self.$el.contains(e.target)) {
        self.showSearchList = false;
        self.commitEvent('changeSearchBar', false);
      }
    })
  },

  methods: {
    searchBarClick (e) {  // 隐藏检索类型
      if (!self.showSearchList) {
        return;
      }
      if (!self.$refs.sitem.contains(e.target)) {
        self.showSearchList = false;
      }
    },
    /** 
     * [searchListAction 检索类型展开事件]
     */
    searchListAction () {
      self.showSearchList = !self.showSearchList;
      // console.log(self.showSearchList);
    },
    /** 
     * [chooseSearchType 选择搜索类型]
     * @param {Int} index 当前选择类型的索引
     * @param {Int} type 类型表示
     * @param {String} name 所选类型中文名
     * @param {Object} ev 当前事件对象
     */
    chooseSearchType (index, sty, name, ev) {
      self.currentSelect = index;
      self.searchListAction();
      // self.ls.setItem('searchType', sty);

      // if ( !self.isMobile ) {
      //   self.currentSize = `${ev.target.offsetWidth + 13}px`;
      // }
    },
    /**
     * 清除关键词
     */
    clearKeyWord () {
      self.keyword = '';
      self.commitEvent('changeSearchEvent', '');
    },
    /** 
     * [searchAction 检索按钮事件]
     */
    searchAction () {
      if (self.keyword === '') {
        alert('搜索关键字不能为空');
        return;
      }
      if (self.currentSelect === 2) {
        // 资源发现 - 跳转外链
        // location.href = `http://en.shl.findplus.cn/?h=search_list&query=${self.keyword}`;
        // 中英文跳转
        let zw_yw = "cn";
        if (/[\u4e00-\u9fa5]/.test(self.keyword)) {
            zw_yw = "cn";
        } else {
            zw_yw = "en";
        }
        let url = "http://"+zw_yw+".shl.findplus.cn/?h=search_list&query=" + encodeURIComponent(self.keyword) + "&action[addexpander][]=fulltext";
        window.open(url);

        return;
      }

      let currentPage = self.$route.name; // 当前页面名
      // 传递搜索按钮事件
      self.commitEvent('changeSearchEvent', new String(self.keyword));
      
      // 当选择搜索类型为 `电子书检索`, `书目检索` 时, 跳转 电子书检索结果页, 其他跳转第三方页面
      if (self.currentSelect === 0) {
        if (currentPage === 'pBookSearch') return;
        self.openNewPage({
          path: `/index/pBookSearch`
        });

        return;
      }

      if (self.currentSelect === 1) {
        if (currentPage === 'eBookSearch') return;
        self.openNewPage({
          path: `/eBook/eBookSearch`
        });

        return;
      }
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .component-search {
    background-color: #4573ab;
  }

  .search-area {
    color: #fff;

    // 书目检索
    .book-search {
      position: relative;
      padding-right: 18px;
      font-weight: normal;
      font-size: 13px;
      cursor: pointer;

      &.active:after {
        margin-top: -7px;
        border-color: transparent transparent #fff;
        border-style: dashed dashed solid;
      }

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 3px;
        .square(0);
        border-width: 5px;
        margin-top: -2px;
        border-color: #fff transparent transparent;
        border-style: solid dashed dashed;
      }
    }

    // 检索下拉选择
    .search-select-item {
      position: relative;
      // z-index: 15;

      > .search-list {
        position: absolute;
        left: 0;
        z-index: 15;
        margin-top: 5px;
        margin-bottom: 0;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 10px 24px 0 rgba(115, 163, 218, .14);

        > li {
          min-width: 176px / 2;
          padding: 8px 7.5px;
          line-height: 19px;
          color: #666;
          font-size: 13px;
          cursor: pointer;

          &:hover,
          &.active {
            color: #4d7eb5;
          }

          + li {
            border-top: 1px solid #eee;
          }
        }
      }
    }

    // 输入框
    .search-input {
      position: relative;
      padding-left: 7px;

      .search-icon,
      .clear-input {
        position: absolute;
        top: 50%;
      }

      > input {
        .size(100%; 30px);
        padding: 8px 35px 8px 32px;
        border-radius: 30px;
        font-size: 13px;
        color: #999;
        line-height: 13px;
        border: none;
      }
    }

    // 手机版搜索按钮
    .search-btn {
      margin-left: 3px;
      outline: none;
    }

    // ==================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      display: table-cell;
      width: 1%;
      padding-top: 20px;
      padding-bottom: 20px;

      > .search-select-item,
      > .search-btn {
        float: left;
      }

      .book-search {
        font-size: 14px;

        &.active:after {
          margin-top: -10px;
        }

        &:after {
          right: -2px;
          border-width: 7px;
        }
      }

      .search-select-item {
        top: 8px;
        z-index: 4;

        > .search-list {
          > li {
            font-size: 14px;
          }
        }
      }

      .search-input {
        padding-left: 101px;
        
        > input {
          height: 40px;
          padding: 11px 140px 11px 22px;
        }
        
        .search-icon {
          @searchBtnHeight: 40px;

          right: 0;
          .size(122px; @searchBtnHeight);
          padding-left: 24px;
          font-size: 14px;
          line-height: @searchBtnHeight;
          -ms-transform: translateY(-52%);
              transform: translateY(-52%);
          cursor: pointer;

          &:before {
            content: '';
            position: absolute;
            top: 7px;
            bottom: 6px;
            left: 0;
            width: 1px;
            background-color: #c7c7c7;
          }

          > i {
            color: #4474ac;
            font-size: 18px;
            .vertical-align(middle);
          }

          > span {
            margin-left: 12px;
            color: #49709c;
            .vertical-align(middle);
          }
        }
        .clear-input {
          right: 135px;
          color: #c7ccd0;
          top: 8px;
          font-size: 18px;
        }
      }

      .search-btn {
        position: absolute;
        border: none;
        background-color: none;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      display: flex;
      // z-index: 12;
      height: 55px;
      padding-right: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;

      .search-input {
        flex: 1;

        .search-icon {
          left: 18px;
          transform: translateY(-40%);
          font-size: 11px;
          color: #c7c7c7;
        }

        .clear-input {
          right: 9px;
          color: #c7ccd0;
          transform: translateY(-50%);
        }
      }
    }

    // Pad  - V
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      .search-input {
        padding-right: 15px;
      }
    }
  }
</style>