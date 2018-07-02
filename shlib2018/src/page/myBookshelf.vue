<!-- 我的书架 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <div class="head-title">
      <div class="title">
        <div class="titlehead" v-show="!editing.edit">
          <i class="iconfont icon-shelf"></i>
          <span>我的书架</span>
        </div>
        <div class="titleedit" v-show="editing.edit">
          <div class="chousebtn">
            <label class="radio-btn">
              <i :class="{'iconfont icon-yixuanzhong-yuan': all}"></i>
              <input type="checkbox" :value="all" @change="selectAll($event.target.checked)">
            </label>
            <b>全选</b>
          </div>
          <div class="chouse hidden-xs">
            已选<span>{{tempList.length}}</span>本书
          </div>
        </div>
        <div class="bookedit" @click="edit" v-show="!editing.edit">
          <i class="iconfont icon-edit visible-xs"></i>
          <span>编辑</span>
        </div>
        <div class="bookdelete" v-show="editing.edit">
          <div class="delete" @click="deleteBook">
            <i class="iconfont icon-delete"></i>
            <span>删除</span>
          </div>
          <div class="cancel" @click="cancelEdit">
            <i class="iconfont icon-cancel"></i>
            <span>取消</span>
          </div>
        </div>
      </div>
      <title-tab @tab-change="changeTab" :tablist="tabs" :currenttab="curtab" :cantoggle="editing"></title-tab>
      <div class="bookchouse" v-show="editing.edit&&isMobile">
        已选<span>{{tempList.length}}</span>本书
      </div>
    </div>
    <div class="books">
      <!-- 我的图书 -->
      <div class="mybooks"  v-show="curtab===0">
        <ul class="clearfix">
          <li class="book" v-for="book in book.list" :key="book.id">
            <router-link :to="{name: 'eBookDetails',query: {type:'epub',bid:book.id}}" target="_blank">
              <simple-book :bookinfo="book"></simple-book>
            </router-link>
            <div class="chousebtn" v-show="editing.edit">
              <label class="radio-btn">
                <i :class="{'iconfont icon-yixuanzhong-yuan': book.chouse}"></i>
                <input type="checkbox" :value="book.chouse" @change="selectItem(book)">
              </label>
            </div>
          </li>
          <!-- 无数据展示 -->
          <none-data
          v-show="!book.list.length && !book.loading"
          msg="您还没有收藏图书"
          ></none-data>
        </ul>
        <div class="paging">
          <pagination ref="bookpg" @page-change="pageChange" :total="book.totalNumb" :current="book.curr"></pagination>
        </div>
        <load-more @more-data="loadMore" :current="book.curr" :total="book.totalNumb" :load="book.loading"></load-more>
      </div>
      <!-- 我的期刊 -->
      <div class="publication" v-show="curtab===1">
        <ul class="clearfix">
          <li class="book" v-for="book in publication.list" :key="book.id">
            <router-link :to="{name: 'eBookDetails',query: {type:'magazine',bid:book.id}}" target="_blank">
              <simple-book :bookinfo="book"></simple-book>
            </router-link>
            <div class="chousebtn" v-show="editing.edit">
              <label class="radio-btn">
                <i :class="{'iconfont icon-yixuanzhong-yuan': book.chouse, '': !book.chouse}"></i>
                <input type="checkbox" :value="book.chouse" @change="selectItem(book)">
              </label>
            </div>
          </li>
          <!-- 无数据展示 -->
          <none-data
          v-show="!publication.list.length && !publication.loading"
          msg="您还没有收藏期刊"
          ></none-data>
        </ul>
        <div class="paging">
          <pagination ref="magpg" @page-change="pageChange" :total="publication.totalNumb" :current="publication.curr"></pagination>
        </div>
        <load-more @more-data="loadMore" :current="publication.curr" :total="publication.totalNumb" :load="publication.loading"></load-more>
      </div>
    </div>
    <!-- 确认删除 -->
    <div class="delete-container" v-show="showDelete">
      <div class="delete-modal">
        <div class="modal-content">删除时将同时删除所有的书签、阅读记录信息，且无法恢复</div>
        <div class="action-btn"><button class="btn" @click="cancelDelete">取消</button><button class="btn delete" @click="makeDelete">删除</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import titleTab from "../components/titleTab";
import loadMore from '../components/loadMore';
import simpleBook from '../components/simpleBook';
import { bookInfoApi } from '../server/api';

let self = null; // 自定义变量存储实例this

export default {
  name: "myBookshelf",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      tabs: [
        {title: '图书'}, 
        {title: '期刊'}
        ],
      curtab: 0,
      book: {   // 我的图书
        list: [],  // 图书列表
        curr: 1,    // 当前页面
        totalNumb: 0,   // 总页面
        loading: true,  // 手机端是否正在载入
        totalBooks: 0   // 图书本数
      },
      publication: {   // 我的期刊
        list: [],
        curr: 1,
        totalNumb: 0,
        loading: true,
        totalMags: 0   // 图书本数
      },
      editing: {
        edit: false
      },   //编辑状态
      deleteing: false,   // 正在删除
      showDelete: false,   // 删除书架提示框
      all: false,   // 全选状态
      tempList: [],    // 选中对象id列表,待删除列表
      perPage: 10   // 每页显示
    };
  },

  created () {
    self = this;
  },

  components: {
    titleTab,
    loadMore,
    simpleBook
  },

  computed: {},

  mounted () {
    this.initMyBookShelf();
    this.initMyMagShelf();
  },

  methods: {
    initMyBookShelf () {
      this.getMyBookShelf(1).then((data)=> {
        this.book.list = data;
      });
    },
    initMyMagShelf () {
      this.getMyMagShelf(1).then((data)=> {
        this.publication.list = data;
      });
    },
    loadMore (index) {  // 手机端加载更多
      if (this.curtab === 0) {
        if (this.book.curr >= this.book.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.book.curr = index;
          this.getMyBookShelf(index).then((data) => {
            this.book.list = this.book.list.concat(data);
          });
        }
      }
      if (this.curtab === 1) {
        if (this.publication.curr >= this.publication.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.publication.curr = index;
          this.getMyMagShelf(index).then((data) => {
            this.publication.list = this.publication.list.concat(data);
          });
        }
      }
    },
    pageChange (index) {  // pc换页
      window.scrollTo(0,0);
      if (this.curtab === 0) {
        this.book.curr = index;
        this.getMyBookShelf(index).then((data) => {
          this.book.list = data;
        });
      }
      if (this.curtab === 1) {
        this.publication.curr = index;
        this.getMyMagShelf(index).then((data) => {
          this.publication.list = data;
        });
      }
    },
    getMyBookShelf (index) { // 获取我的图书书架，需要登录（uat）
      this.book.loading = true;
      return bookInfoApi.getMyBookShelf(index, this.perPage).then((data) => {
        let mybooks = data.result.datas;
        if (!mybooks.length) {
          this.tabs[0].title = "图书0";
          return Promise.resolve([]);
        }
        this.tabs[0].title = "图书" + data.result.totalrows;
        this.book.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
        this.book.loading = false;
        this.book.totalBooks = data.result.totalrows;
        return Promise.resolve(this.bookDataHandel(mybooks));
      }).catch((error) => {

      })
    },
    getMyMagShelf (index) { // 获取我的期刊书架，需要登录（uat）
      this.publication.loading = true;
      return bookInfoApi.getMyMagShelf(index, this.perPage).then((data) => {
        let mymags = data.result.datas;
        if (!mymags.length) {
          this.tabs[1].title = "期刊0";
          return Promise.resolve([]);
        }
        this.tabs[1].title = "期刊" + data.result.totalrows;
        this.publication.totalNumb = Math.ceil(data.result.totalrows / this.perPage);
        this.publication.loading = false;
        this.publication.totalMags = data.result.totalrows;
        return Promise.resolve(this.magDataHandel(mymags));
      }).catch((error) => {

      })
    },
    removeFromMyBookShelf (bids) {  // 删除我的图书
      bookInfoApi.removeBookShelf(bids).then((data) => {
        if (data.result.code === 0) {
          // 被成功删除的id
          let delbookids = data.reqparms.bookid.split(',');
          this.tabs[0].title = "图书" + (this.book.totalBooks - delbookids.length);

          if (this.isMobile) {
            // 手机页面，循环删除
            for (let i = 0 , l = this.book.list.length; i < l; i++) {
              if (delbookids.indexOf(this.book.list[i].id) >= 0) {
                this.book.list.splice(i, 1);
              }
            }
            this.book.curr = Math.ceil(this.book.list.length / this.perPage);
            this.book.totalNumb = Math.ceil(data.result.totalrows - delbookids.length / this.perPage);
            return;
          }
          if (this.book.curr >= this.book.totalNumb) {
            // 如果是最后一页
            if (delbookids.length >= this.book.list.length) {
              // 如果最后一页被全部删除
              if (this.book.curr === 1) {
                // 如果只有一页，清空这一页
                this.book.list = [];
              } else {
                // 获取前一页
                this.pageChange(--this.book.curr);
                this.$refs.bookpg.setPage(this.book.curr);
              }
            } else {
              // 如果最后一页没有被全部删除，逐个删除
              for (let i = 0 , l = this.book.list.length; i < l; i++) {
                if (delbookids.indexOf(this.book.list[i].id) >= 0) {
                  this.book.list.splice(i, 1);
                  // return Promise.resolve('Done');
                }
              }
            }
          } else {
            // 如果不是最后一页,重新获取当前页
            this.pageChange(this.book.curr);
          }
        }
        this.tempList.length = 0;
        this.deleteing = false;
        this.showDelete = false;
        this.editing.edit = false;
      }).catch((error) => {

      });
    },
    removeFromMyMagShelf (bids) { // 删除我的期刊
      this.publication.loading = true;
      return bookInfoApi.removeMagShelf(bids).then((data) => {
        if (data.result.code === 0) {
          let magids = data.reqparms.magid.split(',');  // 被成功删除的id
          this.tabs[1].title = "期刊" + (this.publication.totalMagss - magids.length);
          if (this.isMobile) {
            // 手机页面，循环删除
            for (let i = 0 , l = this.publication.list.length; i < l; i++) {
              if (magids.indexOf(this.publication.list[i].id) >= 0) {
                this.publication.list.splice(i, 1);
              }
            }
            this.publication.curr = Math.ceil(this.publication.list.length / this.perPage);
            this.publication.totalNumb = Math.ceil(data.result.totalrows - magids.length / this.perPage);
            return;
          }
          if (this.publication.curr >= this.publication.totalNumb) {
            // 如果是最后一页
            if (magids.length >= this.publication.list.length) {
              // 如果最后一页被全部删除
              if (this.publication.curr === 1) {
                // 如果只有一页，清空这一页
                this.publication.list = [];
              } else {
                // 获取前一页
                this.pageChange(--this.publication.curr);
                this.$refs.magpg.setPage(this.publication.curr);
              }
            } else {
              // 如果最后一页没有被全部删除，逐个删除
              for (let i = 0 , l = this.publication.list.length; i < l; i++) {
                if (magids.indexOf(this.publication.list[i].id) >= 0) {
                  this.publication.list.splice(i, 1);
                  // return Promise.resolve('Done');
                }
              }
            }
          } else {
            // 如果不是最后一页,重新获取当前页
            this.pageChange(this.publication.curr);
          }
        }
        this.tempList.length = 0;
        this.deleteing = false;
        this.showDelete = false;
        this.editing.edit = false;
      }).catch((error) => {

      });
    },
    bookDataHandel (data) {  // 我的图书返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          id: item.v1,
          // fid: item.magid,
          cover: item.v8,
          title: item.v5,
          type: '',
          pace: item.v6 + '%'
        });
      });

      return tempList;
    },
    magDataHandel (data) {  // 我的期刊返回数据二次处理，以适合simplebook的格式
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          id: item.v2,
          // fid: item.magid,
          cover: item.v8,
          title: item.v6,
          type: '',
          pace: item.v5 + '%'
        });
      });

      return tempList;
    },
    changeTab (index) {
      if (this.editing.edit) {
        return;
      }
      this.curtab = index;
    },
    edit () { // 编辑按钮
      this.editing.edit = true;
    },
    deleteBook () { // 编辑删除按钮
      if (!this.tempList.length) {
        return;
      }
      this.showDelete = true;
    },
    cancelEdit () {   // 编辑取消按钮
      if (this.deleteing) {
        return;
      }
      this.editing.edit = false;
      this.book.list.map((item) => {
        item.chouse = false;
      });
      this.tempList.length = 0;
    },
    cancelDelete () {   // 弹窗取消删除按钮
      this.showDelete = false;
    },
    makeDelete () {   // 弹窗确认删除按钮
      if (this.deleteing) {
        return;
      }
      this.deleteing = true;
      if (this.curtab === 0) {
        this.removeFromMyBookShelf(this.tempList.join(','));
      }
      if (this.curtab === 1) {
        this.removeFromMyMagShelf(this.tempList.join(','));
      }
    },
    selectAll (done) {  // 全选按钮
      this.all = !(this.all);
      if (this.curtab === 0) {
        if (this.all) {
            this.tempList.length = 0;
            this.book.list.forEach(item => {
              item.chouse = true;
              this.tempList.push(item.id);
          });
        } else {
            this.book.list.forEach(item => {
              item.chouse = false;
            });
            this.tempList.length = 0;
        }
      } else if (this.curtab === 1) {
        if (this.all) {
            this.tempList.length = 0;
            this.publication.list.forEach(item => {
              item.chouse = true;
              this.tempList.push(item.id);
          });
        } else {
            this.publication.list.forEach(item => {
              item.chouse = false;
            });
            this.tempList.length = 0;
        }
      }
    },
    selectItem (book) { // 单选按钮
      // console.log('item');
      book.chouse = !book.chouse;
      if (book.chouse) {
        this.tempList.push(book.id);
        if (this.curtab === 0) {
          if (this.tempList.length === this.book.list.length) {
            this.all = true;
          }
        }
        if (this.curtab === 1) {
          if (this.tempList.length === this.publication.list.length) {
            this.all = true;
          }
        }
      } else {
        this.all = false;
        for (let i = 0, l = this.tempList.length; i < l; i++) {
          if (book.id === this.tempList[i]) {
            this.tempList.splice(i, 1);
          }
        }
      }
      console.log(this.tempList);
      this.tempList;
    }
  }
}

</script>
<style lang="less" scoped>
.chousebtn {
  display: inline-block;
  font-size: 22px;
  padding-right: 16px;
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
  .radio-btn {
    position: absolute;
    cursor: pointer;
    // top: 19px;
    // display: inline-block;
    width: 23px;
    height: 23px;
    // line-height: 60px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #E9E9E9;
    margin-right: 8px;
    margin-left: 6px;
  }
  .iconfont {
    position: absolute;
    // top: 0;
    width: 23px;
    height: 23px;
    line-height: 23px;
  }
  input {
    display: none;
  }
  b {
    padding-left: 40px;
    font-weight: 400;
  }
}
.head-title {
  @media only screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    width: 100%;
    // padding: 0 15px;
    z-index: 8;
    background-color: #fff;
  }
}
.title {
  .titlehead, .titleedit {
    float: left;
  }
  .titlehead {
    height: 60px;
    @media only screen and (max-width: 767px) {
      height: 50px;
    }
  }
  .titleedit {
    .radio-btn {
      top: 19px;
      @media only screen and (max-width: 767px) {
        top: 14px;
      }
    }
    .chouse {
      display: inline-block;
      position: relative;
      margin-left: 16px;
      &:before {
        content: '';
        position: absolute;
        top: 18px;
        left: -16px;
        height: 24px;
        width: 1px;
        background-color: #979797;
        @media only screen and (max-width: 767px) {
          height: 16px;
        }
      }
      span {
        padding: 0 10px;
        color: #5C7BC8;
      }
    }
  }
}
.title {
  position: relative;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #EEEEEE;
  // font-family: MicrosoftYaHei;
  font-size: 20px;
  .iconfont {
    font-size: 22px;
    color: #5C7BC8;
  }
  .bookedit {
    cursor: pointer;
    float: right;
    font-size: 18px;
    padding-right: 20px;
    height: 60px;
    .iconfont {
      font-size: 18px;
    }
    span {
      color: #333333;
    }
  }
  .bookdelete {
    float: right;
    padding-right: 20px;
    @media only screen and (max-width: 767px) {
      padding-right: 0;
    }
    .delete, .cancel {
      cursor: pointer;
      float: left;
    }
    .cancel {
      margin-left: 24px;
      @media only screen and (max-width: 767px) {
        margin-left: 12px;
      }
    }
    .iconfont {
      font-size: 18px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    padding: 0 15px;
    .iconfont {
      font-size: 16px;
    }
    .bookedit {
        font-size: 13px;
        padding-right: 0;
        height: 50px;
      .iconfont {
        font-size: 13px;
        float: left;
      }
      span {
        color: #333333;
      }
    }
  }
}
.bookchouse {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
  margin-top: 14px;
  span {
    padding: 0 10px;
    color: #5C7BC8;
  }
}
.books {
  @media only screen and (max-width: 767px) {
    padding-top: 130px;
  }
}
.mybooks, .publication {
  margin-top: 20px;
  padding-left: 0;
  ul {
    padding-left: 0;
    margin-left: -16px;
    margin-right: -16px;
    li {
      list-style: none;
      float: left;
      a {
        text-decoration: none;
      }
    }
    @media only screen and (max-width: 767px) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .book {
    position: relative;
    list-style: none;
    float: left;
    width: 20%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 16px 0 16px;
    @media only screen and (max-width: 767px) {
      width: 33.333333%;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .chousebtn {
      display: block;
    }
    .radio-btn {
      top: -12px;
      right: -4px;
      width: 26px;
      height: 26px;
      background: #F5F6F7;
      .iconfont {
        position: absolute;
        width: 26px;
        height: 26px;
        color: #5C7BC8;
        font-size: 26px;
        left: -2px;
        top: 1px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
      margin-top: 0;
      margin-left: -15px;
      margin-right: -15px;
      height: calc(~'100vh - 200px');
      overflow: scroll;
  }
}
.delete-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .3);
  }

  .delete-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #333;
    text-align: center;
    background-color: #fff;
    overflow: hidden;

    > .action-btn {
      border-top: 1px solid #d9d9d9;

      > button {
        width: 50%;
        color: #959ca5;
      }

      .delete {
        border-left: 1px solid #d9d9d9;
        color: #4877ae;
      }
    }

    // =================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      width: 360px;
      height: 160px;
      margin-top: -80px;
      margin-left: -180px;
      border-radius: 8px;
      font-size: 18px;

      > .modal-content {
        padding-top: 20px;
        height: 109px;
        line-height: 40px;
      }

      > .action-btn {
        > button {
          line-height: 49px;
          font-size: 18px;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      width: 85%;
      max-width: 319px;
      transform: translate3d(-50%, -50%, 0);
      font-size: 15px;
      line-height: 24px;
      border-radius: 4px;

      > .modal-content {
        padding-top: 30px;
        padding-bottom: 18px;
      }

      > .action-btn {
        > button {
          line-height: 44px;
          font-size: 16px;
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
</style>