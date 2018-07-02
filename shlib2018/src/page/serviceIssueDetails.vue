<!-- 服务指南问题详情 -->
<template>
  <div>
    <div class="detailtitle">
      <h2>{{issueDetail.title}}</h2>
      <!-- <span class="detaildate">2010-02-02</span> -->
    </div>
    <div class="content">
      <div class="detailcontent" v-html="issueDetail.content"></div>
    </div>
    <next-previous @go-list="goToIssueList" @go-previous="goToPrevious" @go-next="goToNext"></next-previous>
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
import { IssueService } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "serviceIssueDetails",

  data () {
    return {
      issueDetail: {
        v2: '',
        v21: ''
      },
      allIssueList: [],  // 缓存问题列表
      idList: [], // 用于导航的id列表
      next: 0,  // 下一个id
      previous: 0,   // 上一个id
      loading: true,
      showNote: false,
      noteMsg: ''
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
    this.initIssueDetail();
  },

  methods: {
    initIssueDetail () {
      let id = this.$route.query.issue;   // 问题id
      let qid = this.$route.query.q;  // 类型
      let kw = this.$route.query.kw;  // 搜索关键词
      // console.log(kw);
      if (qid && id) {
        this.getAllIssueList(qid, id);
      } else if (kw || kw === '' && id) {
        this.getAllSearchIssueList(kw, id);
      } else {
        this.$router.push({
          name: 'serviceGuideDefault'
        });
      }
    },
    getIssueDetail (id) { // 返回数据
      this.issueDetail = this.resDataHandel(this.DataHandel(id, this.allIssueList));
      window.scrollTo(0,0);
    },
    getAllIssueList (qid, id) { // 获取所有问题列表，缓存起来
      this.loading = true;
      IssueService.getIssueList(qid, 1, 10000).then((data) => {
        this.loading = false;
        this.allIssueList = data.result.datas;
        this.allIssueList.map((item) => {
          this.idList.push(item.id)
        });
        this.getIssueDetail(id);
      }).catch((error) => {
        console.log(error);
      });
    },
    getAllSearchIssueList (keywords, id) { // 获取关键字搜索新闻列表，并缓存起来
      this.loading = true;
      IssueService.getSearchIssueList(keywords, 1, 10000).then(
        (data) => {
          this.loading = false;
          this.allIssueList = data.result.datas;
          this.allIssueList.map((item) => {
            this.idList.push(item.id)
          });
          this.getIssueDetail(id);
        }
      )
    },
    DataHandel (id, data) {
      let i = this.idList.indexOf(id + '');
      this.previous = this.idList[i - 1] ? this.idList[i - 1] : 'first';
      this.next = this.idList[i + 1] ? this.idList[i + 1] : 'last';
      return data[i];
    },
    resDataHandel (data) {  // 返回数据二次处理
      return {
        title: data.v2,
        content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
      }
    },
    goToIssueList () {  // 返回列表页
      if (!this.$route.query.f) {
        // 跳转到服务指南页
        this.$router.push({
          name: 'serviceGuideDefault'
        });
        return;
      }
      if (this.$route.query.f === '1') {
        // 跳转到服务指南页
        this.$router.push({
          name: 'serviceGuideDefault'
        });
      }else if (this.$route.query.f === '2') {
        // 跳转到服务指南问题列表页
        this.$router.push({
          name: 'serviceIssueList',
          query: {
            n: this.$route.query.n,
            q: this.$route.query.q
          }
        });
      }else if (this.$route.query.f === '3') {
        // 跳转到服务指南问题检索页
        this.$router.push({
          name: 'serviceIssueSearch',
          query: {
            kw: this.$route.query.kw
          }
        });
      } else {
        this.$router.push({
          name: 'serviceGuideDefault'
        });
      }
      // this.$router.go(-1);
    },
    goToNext () {   // 下一个
      this.naviByID(this.next);
    },
    goToPrevious () {   // 上一个
      this.naviByID(this.previous);
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
      if (this.$route.query.f === '1') {
        this.$router.replace({
          query: {
            f: this.$route.query.f,
            q: this.$route.query.q,
            issue: id
          }
        });
      }else if (this.$route.query.f === '2') {
        this.$router.replace({
          query: {
            f: this.$route.query.f,
            n: this.$route.query.n,
            q: this.$route.query.q,
            issue: id
          }
        });
      }else if (this.$route.query.f === '3') {
        this.$router.replace({
          query: {
            f: this.$route.query.f,
            kw: this.$route.query.kw,
            issue: id
          }
        });
      }
      this.getIssueDetail(id);
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
.detailtitle {
  border-bottom: 1px solid #E0E5E8;
  position: relative;
  @media only screen and (min-width: 768px) {
    height: 60px;
    line-height: 60px;
  }
  @media only screen and (max-width: 767px) {
    min-height: 40px;
    line-height: 40px;
  }
  h2 {
    max-width: 100%;
    display: inline-block;
    margin: 0;
    padding-right: 10px;
    
    font-weight: normal;
    @media only screen and (min-width: 768px) {
      height: 60px;
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
  .detaildate {
    // float: right;
    position: absolute;
    right: 0;
    top: 0;
    color: #BFBFBF;
  }
}
.content {
  padding: 20px 0 0 0;
  font-size: 14px;
  line-height: 28px;
  color: #666666;
  // text-indent: 2em;
  .detailcontent {
    height: calc(~'100vh - 600px');
    min-height: 200px;
    @media only screen and (max-width: 767px) {
      height: calc(~'100vh - 198px');
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
      bottom: 0px;
      left: 0;
      right: 0;
      // width: 100%;
      z-index: 8;
    }
  }
</style>