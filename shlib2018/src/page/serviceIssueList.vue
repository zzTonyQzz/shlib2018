<!-- 服务指南问题列表 -->
<template>
  <div>
    <search-key @search-key="search"></search-key>
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div>
      <ul class="list">
        <li v-for="item in issueList" :key="item.id">
          <a href="javascript:;" @click="goToIssueDetail(item.id)"><p>{{item.v2}}</p></a>
        </li>
      </ul>
    </div>
    <div class="paging" v-show="totalNumb>0">
      <pagination @page-change="pageChange" :total="totalNumb" :current="curr"></pagination>
    </div>
    <load-more @more-data="loadMore" :current="curr" :total="totalNumb" :load="loading"></load-more>
    <!-- loading -->
    <loading class="lend-loading" v-show="loading"></loading>
  </div>
</template>

<script>
import loadMore from '../components/loadMore';
import searchKey from '../components/searchKey';
import { IssueService } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "serviceIssueList",

  data () {
    return {
      title: this.$route.query.n || '',
      qid: this.$route.query.q || '',
      allIssueList: [],  // 缓存所有问题列表数据
      issueList: [],  // 界面显示的数据
      // issueIDList: [], // 缓存id列表，用于在详情页导航
      // keywords: this.$route.query.kw || "",
      curr: 1,
      totalNumb: 0,
      loading: true,
      perPage: 30
    };
  },

  created () {
    self = this;
  },

  components: {
    loadMore,
    searchKey
  },

  computed: {},

  mounted () {
    this.getAllIssueList(1);
  },

  methods: {
    pageChange (index) {  // pc换页
      window.scrollTo(0,0);
      this.issueList = this.getIssueList(index);
    },
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        return;
      } else {
        // this.loading = true;
        this.issueList = this.issueList.concat(this.getIssueList(index));
      }
    },
    getIssueList (index) {  // 获取每页数据
      this.curr = index;
      return this.allIssueList.slice((index - 1) * this.perPage, index * this.perPage);
    },
    getAllIssueList (index) { // 获取所有问题列表，缓存起来
      // this.ls.removeItem('issueList');
      this.loading = true;
      IssueService.getIssueList(this.qid, index, 10000).then((data) => {
        this.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
        this.loading = false;
        this.allIssueList = data.result.datas;
        // this.allIssueList.map((item) => {
        //   this.issueIDList.push(item.id);  // 存储id列表
        // });
        this.issueList = this.getIssueList(1);
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getAllIssueList(1);
            clearTimeout(t);
          }, 500);
        } else {
          this.loading = false;
        }
      });
    },
    search (keywords) { // 搜索，跳转到问题搜索页
      this.$router.push({
        name: 'serviceIssueSearch',
        query: {
          kw: keywords
        }
      });
    },
    goToIssueDetail (id) {
      // this.ls.setItem('issueList', this.issueIDList);
      this.$router.push({
        name: 'serviceIssueDetails',
        query: {
          f: '2',
          n: this.title,
          q: this.qid,
          issue: id
        }
      });
    }
  }
}

</script>
<style lang="less" scoped>
.title {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  .iconfont {
    font-size: 22px;
    color: #5C7BC8;
  }
  @media only screen and (max-width: 767px) {
    height: 50px;
    line-height: 50px;
  }
}

.list {
  box-sizing: border-box;
  padding-left: 0;
  li:first-child {
    border-top: 1px solid #E0E5E8;
  }
  li {
    position: relative;
    // border-top: 1px solid #E0E5E8;
    border-bottom: 1px solid #E0E5E8;
    line-height: 60px;
    height: 60px;
    @media only screen and (max-width: 767px) {
      line-height: 40px;
      height: 40px;
    }
    a {
      display: inline-block;
      text-decoration: none;
      width: 100%;
      height: 60px;
      color: #666666;
      @media only screen and (max-width: 767px) {
        line-height: 40px;
        height: 40px;
      }
      p {
        display: inline-block;
        width: 100%;
        padding-right: 20px;
        font-size: 16px;
        color: #666666;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media only screen and (max-width: 767px) {
          padding-right: 0;
          font-size: 14px;
        }
      }
    }
  }
}
.paging {
  // text-align: center;
  margin-top: 60px;
  // >div{
  //   display: inline-block;
  // }
  @media only screen and (max-width: 767px) {
    display: none;
  }
}
li {
  list-style: none;
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