<!-- 当前借阅、借阅历史书籍信息 -->
<template>
  <router-link
    class="component-book-info clearfix"
    :to="{path: `/index/pBookDetails?bid=${bookInfo.bib}&ty=${bookInfo.type}`}"
    :class="{
      'split-line-middle': !isHideItem,
      'is-last-element': isLast
    }" target="_blank"
  >
    <span class="book-cover"><img :src="bookInfo.cover"></span>
    <div class="book-about">
      <h3 class="book-name">
        <em class="book-title" :title="bookInfo.title">{{bookInfo.title}}</em>
        <span :class="lendType(bookInfo.type).class">{{lendType(bookInfo.type).cn}}</span>
      </h3>
      <!-- 作者 | 出版社 | 出版时间 - 暂不显示该信息 -->
      <div class="book-author-publish" style="visibility: hidden;">
        <p><i class="iconfont icon-user-avatar"></i>{{bookInfo.author}}</p>
        <p><i class="iconfont icon-chubanshe"></i>{{bookInfo.publish}} | {{bookInfo.publishTime}}年</p>
      </div>
      <!-- ISBN | 外借日期/馆 | 应还日期 -->
      <ul class="other-info">
        <li class="ISBN"
          v-show="isHideItem"
        >ISBN :<span>{{bookInfo.isbn}}</span></li>
        <li class="lend-details">
          <b>外借日期/馆 :</b><span>{{bookInfo.borrowtime}}</span><span class="location-cn" v-if="bookInfo.locationCN">{{bookInfo.locationCN}}</span>
        </li>
        <li class="return-date">
          <b>应还日期 :</b><span>{{bookInfo.duetime}}</span>
        </li>
      </ul>
    </div>

    <!-- 当前图书状态 -->
    <div class="book-current-state"
      v-show="isHideItem"
      :class="currentState(bookInfo.status, bookInfo.currState).stateClass"
    >
      <i class="iconfont"
        :class="currentState(bookInfo.status, bookInfo.currState).iconClass"
      ></i>{{currentState(bookInfo.status, bookInfo.currState).content}}
    </div>
  </router-link>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "lendingBookInfo",

  props: {
    bookInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTab: {
      type: Number,
      default: 0
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },

  created () {
    self = this;
  },

  computed: {
    isHideItem () {
      return this.currentTab === 0 ? true : false;
    }
  },

  methods: {
    /** 
     * [lendType 当前借阅类型]
     * @param {String} type 借阅类型 => pj - 普通外借, cj - 参考外借
     */
    lendType (type) {
      return self.revertType(type);
    },
    currentState (status, currentState) {
      let stateClass = '',
          iconClass = '',
          content = '';
      
      if (status || currentState) {
        stateClass = 'overdue';
        iconClass = 'icon-out-of-date';
        if (currentState) {
          content = currentState;
        } else if (status) {
          content = status;
        }
      } else {
        // console.log(2);
        stateClass = 'not-overdue';
        iconClass = 'icon-weichaoqi';

        content = '未超期';
      }

      return {stateClass, iconClass, content};
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .component-book-info {
    display: block;
    color: #959ca5;

    &.split-line-middle {
      .book-about {
        border-bottom: none;
      }
    }

    .book-cover {
      box-shadow: 0 0 35px rgba(0, 0, 0, .13);

      > img {
        display: block;
        .square(100%);
        object-fit: cover;
      }
    }

    .book-about {
      position: relative;
      border-bottom: 1px dashed #eee;
    }

    .book-name {
      color: #333;
      font-weight: normal;
    }

    .book-title {
      display: inline-block;
      font-style: normal;
      .text-overflow();
    }
    
    .location-cn {
      position: relative;
      padding-left: 10px;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 5px;
        .size(1px; 10px);
        margin-top: -5px;
        background-color: #959ca5;
      }
    }

    .ISBN {
      color: #baa37d;
    }

    // =================== @Media ==================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      @bookCoverSize: 161px;

      height: 200px;
      margin-bottom: 40px;

      &.split-line-middle {
        margin-bottom: 12px;

        .other-info {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed @border-gray;
        }
      }

      .book-cover {
        float: left;
        .size(@bookCoverSize; 100%);
      }
      
      .book-about {
        height: 100%;
        margin-left: @bookCoverSize + 30;
      }

      .book-name {
        margin-top: 0;
        padding-top: 11px;
        font-size: 0; // 去除inline-block间隙, 子元素必须设置font-size
      }

      .book-title {
        max-width: ~"calc(100% - 78px)";
        .vertical-align(-5px);
        font-size: 18px;
      }

      .book-author-publish {
        margin-top: -6px;

        > p {
          margin-top: 10px;
          margin-bottom: 0;
        }
      }

      .other-info {
        font-size: 12px;

        b {
          display: inline-block;
          width: 73px;
          font-weight: normal;
          white-space: nowrap;
        }

        span {
          margin-right: 6px;
          margin-left: 4px;
        }
      }
      
      .ISBN {
        margin-top: 14px;
        margin-bottom: 17px;
      }

      .return-date {
        margin-top: 6px;
      }

      .book-current-state {
        margin-top: 9px;
        margin-left: @bookCoverSize + 30;
        font-size: 14px;

        .iconfont {
          .vertical-align(-1px);
        }
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
      margin: 20px 10px 0;
      
      &:not(.is-last-element) {
        border-bottom: 1px solid @border-gray;
      }

      &.split-line-middle {
        padding-bottom: 39px / 2;

        .book-about {
          padding-bottom: 0;
        }

        .other-info {
          margin-top: 23px / 2;
          padding-top: 23px / 2;
          border-top: 1px dashed @border-gray;
        }
      }

      @leftWidth: 98px + 29px / 2;

      .book-cover {
        float: left;
        .size(98px; 243px / 2);
      }

      .book-about {
        margin-left: @leftWidth;
        padding-bottom: 12px;
        font-size: 11px;
      }

      .book-name {
        display: flex;
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 15px;
      }

      .book-type {
        font-size: 11px;
        color: #959ca5;
      }
      
      .book-author-publish {
        height: 20px;
        overflow: hidden;

        > p {
          margin-top: 0;
          margin-bottom: 1px;
        }
      }

      .other-info {
        font-size: 12px;
        color: #666;

        b {
          margin-right: 2px;
          font-weight: normal;
        }
      }

      .ISBN {
        margin-top: 4px;
        margin-bottom: 9px;
      }

      .book-current-state {
        padding: 10px 10px 12px @leftWidth;
        font-size: 12px;
      }

      .iconfont {
        margin-right: 4px;
        font-size: 10px;
      }

      .icon-user-avatar {
        font-size: 12px;
      }
    }
  }
</style>