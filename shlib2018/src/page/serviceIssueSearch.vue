<!-- 服务指南问题检索 -->
<template>
  <div>
    <search-key @search-key="search" :words="keywords"></search-key>
    <div class="title">
      <div>共检索到<span>{{searchlength}}</span>条结果</div>
    </div>
    <div>
      <ul class="list">
        <li v-for="(item) in issueList" :key="item.id">
          <a href="javascript:;" @click="goToIssueDetail(item.id)">
            <p>{{item.v2}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="paging" v-show="totalNumb>0">
      <pagination ref="issuePager" @page-change="pageChange" :total="totalNumb" :current="curr"></pagination>
    </div>
    <div v-show="totalNumb>0">
      <load-more @more-data="loadMore" :current="curr" :total="totalNumb" :load="loading"></load-more>
    </div>
    <!-- loading -->
    <loading class="lend-loading" v-show="loading"></loading>
    <div v-show="!loading&&searchlength<=0">
      <no-more></no-more>
    </div>
  </div>
</template>

<script>
import loadMore from '../components/loadMore';
import noMore from '../components/noMore';
import searchKey from '../components/searchKey';
import { IssueService } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "serviceIssueSearch",

  data () {
    return {
      allIssueList: [],  // 所有数据缓存列表
      issueList: [],  // 页面显示显示的list
      // issueIDList: [], // 缓存id列表，用于在详情页导航
      // keywords: {
      //   k: this.$route.query.kw || ''
      // },   // 搜索关键字
      keywords: this.$route.query.kw || '',
      searchlength: 0,  // 总搜索数量
      curr: 1,
      totalNumb: 0,
      loading: true,  // 正在搜索
      perPage: 30    // 每页显示
    };
  },

  created () {
    self = this;
  },

  components: {
    loadMore,
    searchKey,
    noMore
  },

  computed: {},

  mounted () {
    this.getAllSearchIssueList(this.keywords, 1);
  },

  methods: {
    pageChange (index) {  // pc换页 
      window.scrollTo(0,0);
      this.issueList = this.getSearchIssueList(index);
    },
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        return;
        // this.newsList = this.newsList.concat([]);
      } else {
        // this.loading = true;
        this.issueList = this.issueList.concat(this.getSearchIssueList(index));
      }
    },
    getSearchIssueList (index) {  // 获取每页数据
      this.curr = index;
      return this.allIssueList.slice((index - 1) * this.perPage, index * this.perPage);
    },
    getAllSearchIssueList (keywords, index) { // 获取关键字搜索新闻列表，并缓存起来
      // this.ls.removeItem('issueList');
      this.loading = true;
      IssueService.getSearchIssueList(keywords, index, 10000).then(
        (data) => {
          this.searchlength = data.result.totalrows <= 0 ? 0 : data.result.totalrows;
          this.totalNumb = Math.ceil(this.searchlength / this.perPage);
          this.loading = false;
          this.allIssueList = data.result.datas;
          // this.allIssueList.map((item) => {
          //   this.issueIDList.push(item.id);  // 存储id列表
          // });
          this.issueList = this.getSearchIssueList(1);
        }
      ).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getAllSearchIssueList(keywords, index);
            clearTimeout(t);
          }, 500);
        } else {
          this.loading = false
        }
      });
    },
    search (words) { // 搜索
      this.$router.replace({
        query: {kw: words}
      });

      if (!words || !words.trim()) {  // 如果没有输入关键词
        // this.keywords.k = "";
        // this.loading = true;
        // this.loading = false;
        // return;
        words = '';
      }
      this.keywords = words.trim();
      this.loading = true;
      this.getAllSearchIssueList(words, 1);
      this.$refs.issuePager.init();
      // this.searchIssueList(this.keywords.k);
    },
    goToIssueDetail (id) {
      // this.ls.setItem('issueList', this.issueIDList);
      this.$router.push({
        name: 'serviceIssueDetails',
        query: {
          f: '3',
          kw: this.keywords,
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
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #999999;
  span {
    color: #5C7BC8;
    font-size: 16px;
    padding: 0 4px 0 4px;
  }
  @media only screen and (max-width: 767px) {

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
      height: 100%;
      color: #666666;
      p {
        display: inline-block;
        width: 100%;
        font-size: 16px;
        color: #666666;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media only screen and (max-width: 767px) {
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