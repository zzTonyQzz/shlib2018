<!-- 微周刊 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <column-title :column-title="weiTitle"></column-title>
    <div>
      <ul class="booklist clearfix">
        <li class="book" v-for="(book,index) in weiList" :key="index">
          <router-link :to="{name: 'eBookDetails',query: {type:'magazine',bid:book.bid}}">
            <simple-book :bookinfo="book"></simple-book>
          </router-link>
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
import simpleBook from '../components/simpleBook';
import { ebookSearch } from '../server/api';
let self = null; // 自定义变量存储实例this

export default {
  name: "weiWeek",

  data () {
    return {
      weiTitle: "微期刊",
      weiList: [],
      curr: 1,
      totalNumb: 0,
      loading: true,
      perPage: 30,
      isMob: this.$store.state.isMobile ? 'mobile' : 'all'
    };
  },

  created () {
    self = this;
  },

  components: {
    loadMore,
    simpleBook
  },

  computed: {},

  mounted () {
    this.pageChange(1);
  },

  methods: {
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        return;
      } else {
        this.curr = index;
        // this.loading = true;
        this.getWeiList(index).then((data) => {
          this.weiList = this.weiList.concat(data);
          // this.loading = false;
        }).catch((error) => {
          if (error === '10001') {
            let t = setTimeout(() => {
              self.loadMore(1);
              clearTimeout(t);
            }, 500);
          } else {
            this.loading = false;
          }
        });
      }
    },
    pageChange(index) { //PC翻页
      // this.loading = true;
      // window.scrollTo(0,0);
      this.getWeiList(index).then((data) => {
        this.weiList = data;
        window.scrollTo(0,0);
        // this.loading = false;
        
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.pageChange(1);
            clearTimeout(t);
          }, 500);
        } else {
          this.loading = false;
        }
      });
    },
    getWeiList (index) {  // 获取微期刊数据
      this.loading = true;
      let k = {
        source: '',
        keyword: '',
        classtype: '',
        page: index,
        pagesize: this.perPage,
        viewtype: this.isMob
      };
      return ebookSearch.magazineSearch(k).then((data) => {
        this.curr = index;
        this.totalNumb = Math.ceil(data.result.total / this.perPage);
        this.loading = false;
        return Promise.resolve(this.resDataHandel(data.result.mags));
      }).catch((error) => {
        return Promise.reject(error);
      });
    },
    resDataHandel (data) {  // 返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          bid: item.magid,
          // fid: item.magid,
          cover: item.cover,
          title: item.title,
          type: '',
          pace: ''
        });
      });

      return tempList;
    }
  }
}

</script>
<style lang="less" scoped>
.booklist {
  padding-left: 0;
  margin-left: -25px;
  margin-right: -25px;
  .book {
    width: 20%;
    margin-bottom: 40px;
    padding: 0 25px 0 25px;
    @media only screen and (max-width: 767px) {
      width: 33.333333%;
      margin-bottom: 20px;
      padding: 0 15px 0 15px;
    }
  }
  @media only screen and (max-width: 767px) {
      margin-left: -15px;
      margin-right: -15px;
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
  float: left;
  a {
    text-decoration: none;
  }
}
.lend-loading {
    // ============= @Media ===============
    // PC
    @media only screen and (min-width: 768px) {
      // position: relative;
      // height: 300px;
      position: fixed;
      top: 50%;
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