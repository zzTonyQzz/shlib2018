<!-- 分类书单 -->
<template>
  <div>
    <column-title :column-title="weiTitle"></column-title>
    <div>
      <ul class="booklist clearfix">
        <li class="book" v-for="(book,index) in bookList" :key="index">
          <router-link :to="{name: 'eBookDetails',query: {type:theType,bid:book.bid}}" target="_blank">
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
  name: "bookClassificationList",

  data () {
    return {
      weiTitle: this.$route.query.name || '',
      theType: this.$route.query.type || '',
      isBook: this.$route.query.type === 'epub' ? true : false, // 用于判断是图书还是期刊
      bookList: [],
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
    this.$route.meta.breadcrumbName = this.weiTitle;
    this.search();
    this.pageChange(1);
  },

  methods: {
    search () { // 初始化搜索，根据type判断是搜索图书还是期刊
      if (!this.weiTitle) {
        this.$router.push({
          path: '/eBook/bookClassification',
          replace: true
        });
      }
      if (this.theType !== 'epub' && this.theType !== 'magazine') {
        this.$router.push({
          path: '/eBook/bookClassification',
          replace: true
        });
      }
      if (this.isBook) {
        this.search = ebookSearch.equbSearch;
      } else {
        this.search = ebookSearch.magazineSearch;
      }
    },
    getBookList (index) { // 获取分类图书/期刊
      this.loading = true;
      let k = {
        source: '',
        keyword: '',
        clsType: this.weiTitle,
        classtype: this.weiTitle,
        page: index,
        pagesize: this.perPage,
        viewtype: this.isMob
      };
      return this.search(k).then((data) => {
        this.curr = index;
        this.loading = false;
        return Promise.resolve(this.resDataHandel(data.result));
      }).catch((error) => {
        return Promise.reject(error);
      });
    },
    loadMore (index) {  // 手机加载更多
      if (this.curr >= this.totalNumb) {
        // this.newsList = this.newsList.concat([]);
        return;
      } else {
        this.curr = index;
        // this.loading = true;
        this.getBookList(index).then((data) => {
          this.bookList = this.bookList.concat(data);
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
    pageChange(index) {   // pc翻页
      // this.loading = true;
      this.getBookList(index).then((data) => {
        this.bookList = data;
        // this.loading = false;
        window.scrollTo(0,0);
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
    resDataHandel (data) {  // 返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      if (this.isBook) {  // 如果返回图书数据
        this.totalNumb = Math.ceil(data.maxrows / this.perPage);
        data.lst.forEach(item => {
          tempList.push({
            bid: item.fbookid,
            // fid: item.fresid,
            cover: item.fcover || `http://e.library.sh.cn/wread2017/_cover/cx/${item.fbookid}.jpg`,
            title: item.ftitle,
            type: '',
            pace: ''
          });
        });
        return tempList;
      } else {
        this.totalNumb = Math.ceil(data.total / this.perPage);
        data.mags.forEach(item => {
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
}

</script>
<style lang="less" scoped>
.booklist {
  padding-left: 0;
  .book {
    width: 20%;
    margin-bottom: 40px;
    padding: 0 16px 0 16px;
    @media only screen and (max-width: 767px) {
      width: 33.333333%;
      margin-bottom: 20px;
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