<!-- 图书详情 - header -->
<template>
  <dl class="book-intro clearfix">
    <dt><img :src="summaryInfo.cover" class="img-responsive"></dt>
    <dd>
      <p class="book-title">
        <em>{{summaryInfo.bookName}}</em>
        <span
          :class="lendType(summaryInfo.bookType).class"
          v-if="summaryInfo.bookType && showLendType"
        >{{lendType(summaryInfo.bookType).cn}}</span>
      </p>
      <div class="view-count-score" v-if="type === 'epub'">
        <p style="display: none;">点击量 :<span>{{summaryInfo.viewCount}}</span></p>
        <p>豆瓣评分 :<rate :score="summaryInfo.doubanScore"></rate>
        </p>
        <a class="gotoDou" target="_blank" :href="summaryInfo.douUrl">前往豆瓣</a>
      </div>
      <div class="view-count-score" v-if="type === 'zbook'">
        <p>豆瓣评分 :<rate :score="summaryInfo.doubanScore"></rate>
        </p>
        <a class="gotoDou" target="_blank" :href="summaryInfo.douUrl">前往豆瓣</a>
      </div>
      <div class="author-publish-info">
        <p v-if="summaryInfo.author"><i class="iconfont icon-user-avatar"></i>{{summaryInfo.author}}</p>
        <p v-if="summaryInfo.publish"><i class="iconfont icon-chubanshe"></i>{{summaryInfo.publish}} 
        <template v-if="summaryInfo.publishDate">
          | {{summaryInfo.publishDate}}年
        </template>
      </p>
      </div>

      <!-- 按钮 -->
      <div class="action-btn" v-if="showActionBtn">
        <button class="btn add-shelf" @click="addToShelf"><i class="iconfont icon-add-shelf"></i>加入书架</button><button class="btn to-read" @click="goToRead"><i class="iconfont icon-go-read"></i>前往阅读</button>
      </div>
    </dd>
    <!-- 加入书架提示信息 -->
      <div class="add-note" v-show="showNote">
        <span class="add-msg">{{noteMsg}}</span>
      </div>
  </dl>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import rate from '../components/rate';

// api request
import { bookInfoApi } from '../server/api';

export default {
  name: "bookDetailsHeader",

  data () {
    return {
      routeParams: {},
      showNote: false,
      noteMsg: '',
      type: this.$route.query.type
    };
  },

  props: {
    summaryInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    showLendType: {
      type: Boolean,
      default: false
    },
    showActionBtn: {
      type: Boolean,
      default: false
    }
  },

  created () {
    self = this;
    self.routeParams = self.$route.query;
  },

  components: {
    rate
  },

  methods: {
    addToShelf () {
      if (!self.ls.getItem('loginUserInfo')) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: 'reload'
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      if (!self.summaryInfo.bookName) {
        return;
      }
      // let type = self.routeParams.type;
      if (this.type === 'epub') {
        bookInfoApi.addBookshelf(self.routeParams.bid, self.summaryInfo.bookName).then(res => {
          // alert('已加入书架');
          self.showMsg('已加入书架');
        }).catch((error) => {
          self.showMsg('添加失败');
        });
      } else if (this.type === 'magazine') {
        bookInfoApi.addMagshelf(self.routeParams.bid).then(res => {
          self.showMsg('已加入书架');
        }).catch((error) => {
          self.showMsg('添加失败');
        });
      }
    },
    showMsg (msg) { // 显示提示信息
      self.noteMsg = msg;
      self.showNote = true;
      let t = setTimeout(() => {
        self.showNote = false;
        clearTimeout(t);
      },2000);
    },
    lendType (type) {
      // revertType 为全局注册组件, 位置: /index.js
      return self.revertType(type);
    },
    goToRead () {
      if (self.routeParams.type === 'magazine') {
        if (!self.ls.getItem('loginUserInfo')) {
          self.commitEvent('changeshowLoginModal', true);
          self.commitEvent('changeTempPath', {
            path: 'done'
          });
          self.utils.modalOpenEvent(true);
          return;
        }
      }
      let url = self.summaryInfo.readUrl;
      if (!url) {
        self.showMsg('暂无阅读地址');
        return;
      }
      window.open(url, '_blank').location;
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .book-intro {
    position: relative;
    margin-bottom: 0;
    border-bottom: 1px solid @border-gray;
    .img-responsive {
      display: block;
      // .square(100%);
      // width: auto;
      height: 100%;
      // margin: 0 auto;
      object-fit: cover;
    }
    > dt {
      float: left;
      overflow: hidden;
    }

    > dd {
      position: relative;

      p {
        margin-top: 0;
        margin-bottom: 0;

        + p {
          margin-top: 3px;
        }
      }
    }

    .book-title {
      color: #333;
      font-size: 0;
    }

    // 阅读量 | 评分
    .view-count-score {
      color: #666;
      .gotoDou {
        color: #fff;
        display: inline-block;
        background: #5f9ce3;
        text-align: center;
      }
    }

    // 作者 | 出版时间
    .author-publish-info {
      color: #959ca5;
    }
    // ====================== @Media ======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      height: 231px;
      margin-top: 4px;
      padding-bottom: 30px;
      
      @bookCoverWidth: 161px;

      > dt {
        .size(@bookCoverWidth; 200px);
      }

      > dd {
        height: 100%;
        padding-top: 9px;
        margin-left: @bookCoverWidth + 30px;
      }

      .book-title {
        > em {
          font-size: 18px;
          font-style: normal;
        }
      }

      .view-count-score {
        margin-top: 17px;
        .gotoDou {
          margin-top: 16px;
          width: 100px;
          height: 30px;
          line-height: 30px;
        }
        span {
          margin-left: 8px;
        }
      }

      .author-publish-info {
        position: absolute;
        bottom: 0;

        > p {
          margin-bottom: 8px;
        }

        .iconfont {
          margin-right: 7px;
        }

        .icon-chubanshe {
          font-size: 13px;
        }
      }
    }

    // Pad - H
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin-right: @padMargin;
      margin-left: @padMargin;
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      padding: 14px @mobilePadding;

      @bookCoverWidth: 98px;

      > dt {
        .size(@bookCoverWidth; 243px / 2);
      }

      > dd:not(.action-btn) {
        margin-left: @bookCoverWidth + 13px;

        p {
          font-size: 11px;
        }

        span {
          margin-left: 6px;
        }
      }

      .book-title {
        margin-top: 4px;

        > em {
          font-size: 15px;
          font-style: normal;
          .multiLine-overflow();
        }
      }

      .view-count-score {
        margin-top: 3px;
        .gotoDou {
          // margin-top: 16px;
          width: 66px;
          height: 24px;
          line-height: 24px;
        }
      }

      .author-publish-info {
        margin-top: 16px;
      }

      .iconfont {
        margin-right: 5px;
        font-size: 12px;
      }

      .icon-user-avatar {font-size: 15px;}
    }
  }

  .action-btn {
    position: absolute;
    right: 0;

    .btn {
      color: #fff;
      background-color: #5f9ce3;
    }
    // .to-read {
    //   display: inline-block;
    //   width: 100px;
    //   height: 30px;
    //   margin-left: 20px;
    //   line-height: 26px;
    //   font-size: 14px;
    //   padding: 1px 6px;
    //   text-align: center;
    //   cursor: pointer;
    // }
    // 前往阅读
    .to-read {
      background-color: #5390d7;
    }

    // ================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      bottom: 0;

      .btn {
        .size(100px; 30px);
        margin-left: 20px;
        line-height: 26px;
        font-size: 14px;
        

        &:hover,
        &:focus {
          opacity: .8;
        }
      }

      .iconfont {
        margin-right: 9px;
        font-size: 14px;
        vertical-align: -1px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: @zIndex + 1;

      .btn {
        .size(50%; 47px);
        line-height: 47px;
        font-size: 15px;

        .iconfont {
          font-size: 15px;
          vertical-align: -1px;
        }
      }
      // .to-read {
      //   display: inline-block;
      //   margin-left: 0px;
      //   padding: 1px 8px;
      //   cursor: pointer;
      // }
    }
  }
  .add-note {
    position: fixed;
    left: 0;
    width: 100%;
    text-align: center;
    .add-msg {
      padding: 8px;
      font-size: 16px;
      color: #fff;
      border-radius: 4px;
      background-color: rgba(95, 87, 87, 0.5);
    }
  }
</style>