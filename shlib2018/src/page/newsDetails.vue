<!-- 新闻详情 -->
<template>
  <div class="newsdetail">
    <!-- <bread-crumb></bread-crumb> -->
    <div class="newstitle">
      <h2>{{detail.title}}</h2>
      <span class="newsdate">{{detail.time | dateonly}}</span>
    </div>
    <div class="newscontent">
      <div class="content" v-html="detail.content"></div>
    </div>
    <next-previous @go-list="goToNewsList" @go-previous="goToPrevious" @go-next="goToNext"></next-previous>
    <!-- loading -->
    <loading class="lend-loading" v-show="loading"></loading>
    <!-- 加入提示信息 -->
    <div class="detail-note" v-show="showNote">
      <span class="detail-msg">{{noteMsg}}</span>
    </div>
  </div>
</template>

<script>
import nextPrevious from "../components/nextPrevious";
import { NewsBulletin } from "../server/api";
import router from "../router";
let self = null; // 自定义变量存储实例this

export default {
  name: "newsDetails",

  data () {
    return {
      detail: {
        title: '',
        time: '',
        content: '',
        next: 0,
        previous: 0
      },
      showNote: false,
      noteMsg: '',
      loading: true
    };
  },

  created () {
    self = this;
  },

  components: {
    nextPrevious
  },

  computed: {},

  mounted () {
    this.initNewsDetail();
  },

  methods: {
    initNewsDetail () {
      let id = this.$route.query.news;
      if (id) {
        this.getNewsDetail(id);
      } else {
        // this.$router.go(-1);
        this.goToNewsList();
      }
    },
    getNewsDetail (id) {
      this.loading = true;
      NewsBulletin.newsDetailNavi(id).then((data) => {
        let t = data.result.datas;
        if (!t.length) {
          return;
        }
        this.detail = this.resDataHandel(this.DataHandel(id, t));
        this.loading = false;
        window.scrollTo(0,0);
      }).catch((error) => {
        if (error = '10001') {
          let t = setTimeout(() => {
            this.getNewsDetail(id);
            clearTimeout(t);
          }, 500);
        } else {
          this.loading = false;
        }
      });
    },
    DataHandel (id, data) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (id === element.id) {
          if (i === 0) {
            this.previous = 'first';
            this.next = data[1].id;
          }
          if (i === 1) {
            this.previous = data[0].id;
            this.next = data.length > 2 ? data[2].id : 'last';
          }
          return element;
        }
      }
    },
    resDataHandel (data) {  // 返回数据二次处理
      return {
        title: data.v1,
        time: data.v3,
        content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
      }
    },
    goToNewsList () { // 返回列表
      this.$router.push({
        name: 'newsBulletinDefault'
      });
    },
    goToPrevious () {
      this.naviByID(this.previous);
    },
    goToNext () {
      this.naviByID(this.next);
    },
    naviByID (id) {
      if (this.loading) {
        return;
      }
      if (id === 'first') {
        self.showMsg('已经是第一条了');
        return;
      }
      if (id === 'last') {
        self.showMsg('已经是最后一条了');
        return;
      }
      this.$router.replace({
        query: {news: id}
      });
      this.getNewsDetail(id);
    },
    showMsg (msg) { // 显示提示信息
      self.noteMsg = msg;
      self.showNote = true;
      let t = setTimeout(() => {
        self.showNote = false;
        clearTimeout(t);
      },2000);
    }
  }
}

</script>
<style lang="less" scoped>
// >>> combinator
// There are cases where you may want to style children components e.g. using a third party component. In such cases, you can use the >>> (/deep/) combinator to apply styles to any descendant elements of a scoped styled element.
// If you are using less, note that it does not yet support the >>> operator, but you can use:
// @deep: ~">>>";
// .foo @{deep} .bar {
//   color: red;
// }

@deep: ~">>>";
.newsdetail {
  .newstitle {
    position: relative;
    @media only screen and (min-width: 768px) {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #E0E5E8;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 12px;
      min-height: 40px;
      line-height: 40px;
      border-bottom: none;
    }
    h2 {
      max-width: 100%;
      display: inline-block;
      margin: 0;
      font-weight: normal;
      @media only screen and (min-width: 768px) {
        padding-right: 80px;
        height: 100%;
        font-size: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      @media only screen and (max-width: 767px) {
        line-height: 25px;
        font-size: 16px;
      }
    }
    .newsdate {
      // position: absolute;
      // right: 0;
      // bottom: 0;
      color: #BFBFBF;
      @media only screen and (min-width: 768px) {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      @media only screen and (max-width: 767px) {
        float: right;
        width: 100%;
        min-height: 20px;
        line-height: 20px;
        text-align: right;
        margin-bottom: 5px;
      }
    }
  }
  .newscontent {
    padding: 0 0 5px 0;
    font-size: 14px;
    color: #666666;
    line-height: 29px;
    @{deep} img {
      max-width: 100%;
    }
    .content {
      @media only screen and (max-width: 767px) {
        height: calc(~'100vh - 215px'); // 198
        width: 100%;
        overflow: scroll;
      }
    }
  }
  .detail-note {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    .detail-msg {
      padding: 8px;
      font-size: 16px;
      color: #fff;
      border-radius: 4px;
      background-color: rgba(95, 87, 87, 0.5);
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
      bottom: 200px;
      left: 0;
      right: 0;
      // width: 100%;
      z-index: 8;
    }
  }
}
</style>