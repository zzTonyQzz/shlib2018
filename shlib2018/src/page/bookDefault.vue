<!-- 图书分类默认页面 -->
<template>
  <div>
    <!-- 图书分类 -->
    <div class="bookssort">
      <div class="title">
        <i class="iconfont icon-book"></i>
        <span>图书</span>
      </div>
      <ul class="list clearfix">
        <li v-for="(book, index) in bookList" :key="index">
          <router-link :to="{path: `bookClassification/bookClassificationList?type=epub&name=${book.name}`}">
            <book-sort :sortinfo="book"></book-sort>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 期刊分类 -->
    <div class="publicationssort">
      <div class="title">
        <div class="pub-ico"></div>
        <span>期刊</span>
      </div>
      <ul class="list clearfix">
        <li v-for="(publication, index) in publicationList" :key="index">
          <router-link :to="{path: `bookClassification/bookClassificationList?type=magazine&name=${publication.name}`}">
            <book-sort :sortinfo="publication"></book-sort>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- loading -->
    <loading class="lend-loading" v-show="bookloading || magloading"></loading>
  </div>
</template>

<script>
import bookSort from '../components/bookSort';
import { Classes } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "bookDefault",

  data () {
    return {
      bookList: [],
      publicationList: [],
      bookloading: true,
      magloading: true,
    };
  },

  created () {
    self = this;
  },

  components: {
    bookSort
  },

  computed: {},

  mounted () {
    this.getBookClassList();
    this.getPublicClassList();
  },

  methods: {
    getBookClassList () { // 获取图书列表
      Classes.epubClasses().then((data) => {
        this.bookList = data.result;
        this.bookloading = false;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getBookClassList();
            clearTimeout(t);
          }, 500);
        } else {
          this.bookloading = false;
        }
      });
    },
    getPublicClassList () { // 获取期刊列表
      Classes.magazineClasses().then((data) => {
        this.publicationList = data.result[0].concat(data.result[1]);
        this.magloading = false;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getPublicClassList();
            clearTimeout(t);
          }, 500);
        } else {
          this.magloading = false;
        }
      });
    }
  }
}

</script>
<style lang="less" scoped>
.bookssort {
  border-bottom: 1px solid #E0E5E8;
  .iconfont {
    color: #5C7BC8;
  }
  @media only screen and (max-width: 767px) {
    border-bottom: none;
  }
}
.publicationssort {
  position: relative;
  .pub-ico {
    // position: absolute;
    display: none;
    width: 17px;
    height: 40px;
    background: url(/static/images/pub-ico.png) no-repeat center;
    background-size: 100%;
    @media only screen and (max-width: 767px) {
      display: inline-block;
      float: left;
      // top: 0;
    }
  }
}
.bookssort, .publicationssort {
  .title {
    height: 100px;
    line-height: 100px;
    @media only screen and (max-width: 767px) {
      height: 40px;
      line-height: 40px;
    }
    .iconfont {
      display: none;
      font-size: 16px;
      @media only screen and (max-width: 767px) {
        display: inline;
      }
    }
    span {
      font-size: 18px;
      color: #333333;
      padding-left: 10px;
      border-left: 5px solid #49709C;
      @media only screen and (max-width: 767px) {
        border-left: none;
        font-size: 15px;
        padding-left: 5px;
      }
    }
  }
}
.list {
  padding-left: 0;
  margin-bottom: 0;
  min-height: 190px;
  li {
    width: 25%;
    list-style: none;
    float: left;
    // padding-right: 20px;
    &:nth-child(4n+0) {
      padding-right: 0px;
    }
    
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      width: 50%;
      margin-bottom: 20px;
      &:nth-child(odd) {
        padding: 0 10px 0 0;
      }
      &:nth-child(even) {
        padding:0 0 0 10px;
      }
    }
    a {
      text-decoration: none;
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