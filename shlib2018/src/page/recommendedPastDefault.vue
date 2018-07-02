<!-- 每周推荐查看往期 -->
<template>
  <div class="container">
    <column-title :column-title="weeklyTitle"></column-title>
    <div>
      <ul class="list">
        <li v-for="(item,index) in pastList" :key="index">
          <router-link :to="{path: `/eBook/recommendedPast/recommended?sid=${item.v2}`}">
            <span class="unit">
              第{{item.v2}}期
            </span>
            <p>{{item.v3}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="paging">
      <pagination @page-change="pageChange" :total="totalNumb" :current="curr"></pagination>
    </div>
    <load-more @more-data="loadMore" :current="curr" :total="totalNumb" :load="loading"></load-more>
  </div>
</template>

<script>
import loadMore from '../components/loadMore';
import { resommended } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "recommendedPastDefault",

  data () {
    return {
      weeklyTitle: "每周推荐",
      pastList: [],   // 页面显示数据
      allPastList: [],  // 缓存所有数据，接口没有分页，一次获取所有数据
      curr: 1,
      totalNumb: 0,
      loading: true,
      perPage: 30,
      // maxId: 0 // 最新一季id
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
    this.getAllPastList();
  },

  methods: {
    pageChange (index) {  // pc换页
      this.curr = index;
      this.pastList = this.getPastList(index);
      window.scrollTo(0,0);
    },
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        return;
        // this.pastList = this.pastList.concat([]);
      } else {
        this.curr = index;
        // this.loading = true;
        this.pastList = this.pastList.concat(this.getPastList(index));
        // this.loading = false;
      }
    },
    getPastList (index) { // 分页获取列表
      return this.allPastList.slice((index - 1) * this.perPage, index * this.perPage);
    },
    getAllPastList () {   // 获取所有数据(接口没有分页)
      this.loading = true;
      resommended.getWeeklyPastList().then((data) => {
        this.allPastList = data.result.datas;
        if (!this.allPastList.length) {
          return;
          //this.maxId = this.allPastList[0].v2;
        }
        this.totalNumb = Math.ceil(this.allPastList.length / this.perPage);
        this.pastList = this.getPastList(1);  // 初始化第一页数据
        this.loading = false;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            this.getAllPastList();
            clearTimeout(t);
          }, 500);
        }
      });
    }
  }
}

</script>
<style lang="less" scoped>
.list {
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
      .unit {
        position: absolute;
        width: 85px;
        font-size: 16px;
        color: #666666;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media only screen and (max-width: 767px) {
          color: #4474AC;
          font-size: 14px;
        }
        }
      p {
        display: inline-block;
        width: 100%;
        padding-right: 20px;
        padding-left: 85px;
        font-size: 16px;
        color: #666666;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:before {
          content: '|';
          padding-right: 10px;
        }
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
</style>