<!-- 服务指南默认页面 -->
<template>
  <div>
    <search-key @search-key="search"></search-key>
    <div class="serverguide">
      <ul>
        <li class="guideitem" v-for="item in guideList" :key="item.id">
          <div class="guidedetail">
            <div class="guidetitle">
              <span>{{item.title}}</span>
              <div class="guideall" v-if="item.total>perPage">
                <router-link :to="{name: 'serviceIssueList',query: {n:item.title,q: item.id}}">查看全部</router-link>
                <i class="iconfont icon-arrow-right2"></i>
              </div>
          </div>
          <ul class="guidelist">
            <li v-for="guide in item.guides" :key="guide.id">
              <a href="javascript:;" @click="goToIssueDetails(guide)"><p>{{guide.v2}}</p></a>
            </li>
          </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- loading -->
    <loading class="lend-loading" v-show="loading"></loading>
  </div>
</template>

<script>
import searchKey from "../components/searchKey";
import router from "../router";
import { IssueService } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "serviceGuideDefault",

  data() {
    return {
      keywords: "", // 搜索关键字
      guideList: [], // 指南列表
      perPage: 6,
      issueList: {}, // 存储指南id信息，从此页跳转到详情时，根据id导航
      loading: true
    };
  },

  created() {
    self = this;
  },

  components: {
    searchKey
  },

  computed: {},

  mounted() {
    this.getGuideList();
  },

  methods: {
    search(keywords) {  // 搜索，跳转到问题搜索页
      // console.log(keywords);
      this.$router.push({
        name: 'serviceIssueSearch',
        query: {
          kw: keywords
        }
      });
    },
    getGuideList() {  // 获取问题列表，并缓存起来
      // this.ls.removeItem('issueList');
      this.loading = true;
      this.issueList = {};
      let guidelist = [];
      let qid = [
          {
            id: 'wechat',
            title: '常见问题'
          }, 
          {
            id: '服务需知',
            title: '服务需知'
            },
            {
            id: 'wechat',
            title: '常见问题'
          }, 
          {
            id: '服务需知',
            title: '服务需知'
            }
        ];
      for (let i = 0; i < qid.length; i++) {
        IssueService.getIssueList(qid[i].id, 1, 6).then(
          (data) => {
            let temp = {
              title: qid[i].title,
              total: data.result.totalrows,
              id: qid[i].id,
              guides: data.result.datas
            }
            // this.issueList[temp.id] = [];
            // temp.guides.map((item)=> {
            //   this.issueList[temp.id].push(item.id);
            // })
            guidelist.push(temp);
          }
        ).catch((error) => {
          if (error === '10001') {
            let t = setTimeout(() => {
              self.getGuideList();
              clearTimeout(t);
            }, 500);
          } else {
            this.loading = false;
          }
        });
      }
      // console.log(this.issueList);
      this.loading = false;
      this.guideList =  guidelist;
    },
    goToIssueDetails (guide) {  // 跳转到详情
      // 跳转到详情前，存储导航所需id列表
      // this.issueDetail = {
      //   type: guide.v1
      // };
      // this.ls.setItem('issuedetail', { type: guide.v1 });
      this.$router.push({
        name: 'serviceIssueDetails',
        query: {
          f: '1',
          q: guide.v1,
          issue: guide.id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.serverguide {
  margin-top: 15px;
  > ul {
    padding: 0;
  }
  .guideitem {
    // min-height: 411px;
    padding-bottom: 20px;
    float: left;
    list-style: none;
    width: 50%;
    &:nth-child(odd) {
      // background-color: red;
      padding-right: 10px;
    }
    &:nth-child(even) {
      // background-color: red;
      padding-left: 10px;
    }
    @media only screen and (max-width: 767px) {
      background-color: #EEF1F3;
      min-height: 60px;
      width: 100%;
      &:nth-child(odd) {
        // background-color: red;
        padding-right: 0px;
      }
      &:nth-child(even) {
        // background-color: red;
        padding-left: 0px;
      }
    }
    .guidedetail {
      min-height: 382px;
      border: 1px solid #eeeeee;
      // border-radius: 6px;
      padding: 0 20px 20px 20px;
      @media only screen and (max-width: 767px) {
        padding: 0;
        min-height: 40px;
        border: none;
        background-color: #fff;
        padding-left: 15px;
        padding-right: 15px;
      }
      .guidetitle {
        position: relative;
        height: 60px;
        line-height: 60px;
        @media only screen and (max-width: 767px) {
          height: 45px;
          line-height: 45px;
        }
        span {
          display: inline-block;
          width: 100%;
          font-size: 20px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 80px;
        }
        .guideall {
          position: absolute;
          top: 0;
          right: 0;
          a {
            text-decoration: none;
            color: #959ca5;
          }
        }
        @media only screen and (max-width: 767px) {
            span {
              font-size: 18px;
              color: #4474AC;
            }
        }
      }
      .guidelist {
        padding: 0;
        li {
          list-style: none;
          border-bottom: 1px solid #E0E5E8;
          line-height: 50px;
          height: 50px;
          @media only screen and (max-width: 767px) {
            height: 40px;
            line-height: 40px;
          }
          &:first-child {
            border-top: 1px solid #e0e5e8;
          }
          a {
            display: inline-block;
            text-decoration: none;
            width: 100%;
            height: 100%;
            p {
              display: inline-block;
              color: #666666;
              margin: 0;
              width: 100%;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              @media only screen and (max-width: 767px) {
                font-size: 14px;
                display: block;
                height: 40px;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    margin-left: -15px;
    margin-right: -15px;
    > ul {
      li:last-child {
        padding-bottom: 0;
      }
    }
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