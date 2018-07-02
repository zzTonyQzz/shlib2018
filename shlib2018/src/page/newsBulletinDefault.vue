<!-- 新闻公告默认页面 -->
<template>
  <div>
    <div class="title">
      <i class="iconfont icon-bulletin"></i>
      <span>新闻公告</span>
    </div>
    <div class="newsList">
      <ul class="bulletin">
        <li v-for="item in newsList" :key="item.id">
          <router-link :to="{name: 'newsDetails', query: {news:item.id}}">
            <p>{{item.v1}}</p>
            <span>{{item.v3 | dateonly}}</span>
            <i class="iconfont icon-arrow-right2"></i>
          </router-link>
        </li>
      </ul>
      <!-- loading -->
      <loading class="lend-loading" v-show="loading"></loading>
    </div>
    <div class="paging" v-show="totalNumb>0">
      <pagination @page-change="pageChange" :total="totalNumb" :current="curr"></pagination>
    </div>
    <load-more @more-data="loadMore" :current="curr" :total="totalNumb" :load="loading"></load-more>
  </div>
</template>

<script>
import loadMore from '../components/loadMore';
import { NewsBulletin } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "newsBulletinDefault",

  data () {
    return {
      newsList: [],
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
    loadMore
  },

  computed: {},

  mounted () {
    this.pageChange(1);
  },

  methods: {
    pageChange (index) {  // pc换页
      this.getNewsList(index).then((data) => {
        this.newsList = data;
        window.scrollTo(0,0);
      });
    },
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        // this.newsList = this.newsList.concat([]);
        return;
      } else {
        // this.loading = true;
        this.getNewsList(index).then((data) => {
          this.newsList = this.newsList.concat(data);
        });
      }
    },
    getNewsList (index) { // pc获取新闻列表
      this.loading = true;
      return NewsBulletin.getNewsList('新闻', index, this.perPage).then((data) => {
        this.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
        this.curr = index;
        this.loading = false;
        // this.newsList = data.result.datas;
        return Promise.resolve(data.result.datas);
      }).catch((error) => {
        if (error = '10001') {
          let t = setTimeout(() => {
            this.pageChange(1);
            clearTimeout(t);
          }, 500);
        } else {
          this.loading = false;
        }
      });
    },
    // getNewsListMob (index) {  // 手机获取新闻列表
    //   NewsBulletin.getNewsList(index, this.perPage, '新闻').then((data) => {
    //         this.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
    //         this.curr = index;
    //         this.newsList = this.newsList.concat(data.result.datas);
    //         this.loading = false;
    //         // return Promise.resolve(data);
    //       }).catch((error) => {
    //         console.log(error);
    //       });
    // },
    goToDetail (nid) {
      this.$router.push({
        name: 'newsDetails',
        query: {news: nid}
      });
      // this.$router.push("newsBulletin/newsDetails?news=" + id);
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
  border-bottom: 1px solid #EEEEEE;
  .iconfont {
    font-size: 22px;
    color: #5C7BC8;
  }
  @media only screen and (max-width: 767px) {
    height: 50px;
    line-height: 50px;
  }
}
.newsList {
  position: relative;
}
.bulletin {
  box-sizing: border-box;
  padding-left: 0;
  // li:first-child {
  //   border-top: 1px solid #E0E5E8;
  // }
  li {
    position: relative;
    // border-top: 1px solid #E0E5E8;
    border-bottom: 1px solid #E0E5E8;
    line-height: 60px;
    height: 60px;
    // @media only screen and (max-width: 767px) {
    //   line-height: 0px;
    // }
    a {
      display: inline-block;
      text-decoration: none;
      width: 100%;
      height: 100%;
      p {
        display: inline-block;
        width: 100%;
        font-size: 16px;
        color: #666666;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 100px;
        @media only screen and (max-width: 767px) {
          font-size: 14px;
          display: block;
          height: 36px;
          line-height: 36px;
          padding-right: 20px;
        }
      }
      span {
        // float: right;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #BFBFBF;
        margin-right: 25px;
        @media only screen and (max-width: 767px) {
          left: 0;
          height: 30px;
          line-height: 30px;
          font-size: 13px;
        }
      }
      .iconfont {
        position: absolute;
        right: 0;
        top: 0;
        color: #999999;
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
// .loadmore {
//   margin: 60px auto 0;
//   cursor: pointer;
//   text-align: center;
//   color: #999999;
//   width: 90px;
//   height: 30px;
//   line-height: 30px;
//   border: solid 1px #C1C1C1;
//   border-radius: 3px;
//   @media only screen and (min-width: 767px) {
//     display: none;
//   }
// }
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