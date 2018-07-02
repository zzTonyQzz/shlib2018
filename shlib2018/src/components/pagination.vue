
<!-- Vue pagination组件 -->
<template>
  <div class="pagination-cpntainer hidden-xs" v-if="isMobileView && total > 1">
    <ul class="pagination">
      <li>
        <a href="javascript:;" class="prev-arrow" :class="setButtonClass('prev')" @click="prevPage(currentPage)">
          <i class="iconfont icon-arrow-left2"></i>
        </a>
      </li>
      <li v-for="index in totalPages" :key="index" :class="{active: currentPage == index}">
        <a href="javascript:;"
          @click="paginationClick(index)"
          :class="{isSymbol: index < 1}"
        >{{isSymbol(index)}}</a>
      </li>
      <li>
        <a href="javascript:;" class="next-arrow" :class="setButtonClass('next')" @click="nextPage(currentPage)">
          <i class="iconfont icon-arrow-right2"></i>
        </a>
      </li>
      <li class="skipPage">跳至<input type="text" v-model="skipPageNum" @keyup.enter="skipPage(skipPageNum)">页</li>
    </ul>
  </div>
</template>

<script>
/** 
 * [pagination 分页组件]
 *   props(接收参数)
 *     current => 默认页数
 *     total => 总页数
 * 
 *  Events(抛出事件)
 *    paginationClick => page-change => 选择页数, 返回所选页数的页码
 */
export default {
  data () {
    return {
      currentPage: this.current,
      skipPageNum: ''
    };
  },

  props: ['current', 'total'], // `current` - 当前页码, `total` 总页数

  computed: {
    isMobileView () {
      return this.$store.state.isMobile ? false : true;
    },
    totalPages () { // 计算总页数
      let left = 1,
          right = this.total,
          pageList = [],
          currentPage = this.currentPage,
          total = this.total;
      if ( total >= 11 ) {
        if ( currentPage > 5 && currentPage < total - 4 ) {
          left = currentPage - 5;
          right = currentPage + 4;
        } else {
          if ( currentPage <= 5 ) {
            left = 1;
            right = 8;
          } else {
            right = total;
            left = total - 9;
          }
        }
      }
      while ( left <= right ) {
        pageList.push(left);
        left++;
      }
      if ( pageList[0] > 1 ) {
        pageList[0] = 1;
        pageList[1] = -1;
      }

      let last = pageList.length - 1;
      if ( pageList[last] < total ) {
        pageList[last] = total;
        pageList[pageList.length - 2] = 0;
      }
      return pageList;
  }
  },

  methods: {
    init () {
      this.currentPage = 1;
    },
    setPage (page) {
      this.currentPage = page;
    },
    isSymbol (index) { // 显示省略号 or 页码
      return index < 1 ? '...' : index;
    },
    paginationClick (index) { // 点击页码
      if (index < 1) return;
      if (index != this.currentPage) {
        this.currentPage = index;
        this.$emit('page-change', index);
      }
    },
    nextPage (index) { // 下一页
      if (this.currentPage >= this.total) return;

      this.paginationClick(this.currentPage + 1);
    },
    prevPage (index) { // 上一页
      if (this.currentPage <= 1) return;

      this.paginationClick(this.currentPage - 1);
    },
    skipPage (num) { // 跳转页码(Enter事件)
      let pageNum = parseInt(num);
      if (pageNum < 1 || pageNum > this.total) {
        // 如果输入页码过大/过小，则不跳转
        return;
      }
      this.paginationClick(pageNum);
      this.skipPageNum = '';
    },
    setButtonClass (currentBtnType) { // 设置 `上一页`、`下一页` 是否可点击
      switch ( currentBtnType ) {
        case 'prev': 
            return this.currentPage <= 1 ? "page-button-disabled" : "";
            break;
        case 'next':
            return this.currentPage >= this.total ? "page-button-disabled" : "";
            break;
        default: break;
      }
    }
  }
}

</script>
<style lang="less" scoped>

.pagination-cpntainer {
  user-select: none;
  text-align: center;

  .pagination {
    display: inline-block;
  }

  .pagination, .pagination > li {
    margin: 0 5px;
    list-style: none;

  }

  .active a {
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  
  li {
    display: inline-block;
    vertical-align: top;
    
    &:first-child > a {
      margin-left: 0px;
    }

    &.skipPage {
      margin-left: 2px;
      font-size: 12px;

      > input {
        width: 26px;
        height: 26px;
        padding: 6px;
        margin-right: 5px;
        margin-left: 5px;
        border: 1px solid #e0e5e8;
        vertical-align: middle;
        outline: none;
      }

      > span {
        margin-left: 10px;
      }
    }
  }

  a {
    min-width: 26px;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 4px 10px 5px 9px;
    line-height: 17px;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    border-radius: 2px;
    background-color: #f0f3f6;

    &:hover {
      background-color: #4573ab;
      color: #fff;
    }

    &.page-button-disabled:hover {
      background-color: #f0f3f6;
      color: #666;
      cursor: default;
    }
  }

  // 省略符号
  .isSymbol {
    margin: 0 -5px;
    padding: 0 !important;
    font-size: 18px;
    background: none !important;
    cursor: default;

    &:hover {
      color: #666;
    }
  }

  .prev-arrow,
  .next-arrow {
    display: block;
    width: 26px;
    height: 26px;
    padding: 0;
    text-align: center;
    line-height: 26px;
    overflow: hidden;
  }

  i {
    font-size: 12px;
    font-weight: bold;
  }

  .page-button-disabled {
    color:#ddd !important;
  }
}
</style>