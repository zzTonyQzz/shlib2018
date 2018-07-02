<!-- 每周推荐 -->
<template>
  <div class="component-recommended">
    <!-- 推荐详情 -->
    <div class="recommended">
      <div class="container">
        <div class="row">
          <!-- 推荐标题 -->
          <column-title :column-title="recommendedTitle"></column-title>

          <!-- 卷首语,暂时隐藏 -->
          <div class="foreword" style="display:none">
            <span class="foreword-btn">卷首语</span><em>{{foreword}}</em>
          </div>

          <!-- 推荐列表 -->
          <div class="container">
            <ul class="search-result-lists padMargin row">
              <router-link
                class="col-xs-4 col-sm-12"
                tag="li"
                v-for="(item, index) in searchResultList"
                :key="index"
                :to="{path: `/eBook/eBookDetails?type=epub&bid=${item.fbookid}`}"
              >
                <div class="component-book-info clearfix">
                  <span class="book-cover"><img :src="item.fcover" alt="" class="img-responsive"></span>
                  <div class="book-about">
                    <h3 class="book-name">{{item.ftitle}}</h3>
                    <!-- 书籍类型 -->
                    <div class="book-author-publish hidden-xs">
                      <p><i class="iconfont icon-user-avatar"></i>{{item.fauthor}}</p>
                      <p><i class="iconfont icon-chubanshe"></i>{{item.fpublisher}}
                        <template v-if="item.fpublishdate">
                          | {{item.fpublishdate}}年
                        </template>
                      </p>
                    </div>
                    <p class="book-intro hidden-xs">
                      {{item.fsummary}}
                    </p>
                  </div>
                </div>
              </router-link>
            </ul>
          </div>

          <!-- 分页 -->
          <next-previous
          :navObj="navObj"
          @go-previous="prevSeason"
          @go-next="nextSeason"
          @go-list="returnPrevPage"
          ></next-previous>
          <!-- 加入提示信息 -->
          <div class="detail-note" v-show="showNote">
            <span class="detail-msg">{{noteMsg}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import nextPrevious from '../components/nextPrevious';

// api request
import { resommended, ebookSearch } from '../server/api';

export default {
  name: "recommended",

  data () {
    return {
      navObj: {
        previous: '上一期',
        next: '下一期'
      },
      recommendedTitle: '', // 季期标题
      foreword: '', // 卷首语

      // 推荐列表
      searchResultList: [], // 推荐内容列表
      queryParams: {},
      // latest: 0,  // 最新季期
      currSid: this.$route.query.sid || 0,   // 当前季期
      currIndex: 0,
      allSids: [],   // 存储所有季id
      loading: true,
      showNote: false,
      noteMsg: ''
    };
  },

  // watch: {
  //   currSid (newVal, oldVal) {
  //     self.currSid = newVal;
  //     self.getResommended();
  //   }
  // },

  created () {
    self = this;
  },

  components: {
    nextPrevious
  },

  mounted () {
    self.getAllPastList();
  },

  methods: {
    getResommended (sid) {
      this.loading = true;
      resommended.getWeeklyId(sid)
      .then(res => {
        let data = res.result.datas;
        let seationInfo = data[0];
        self.searchResultList = [];
        self.recommendedTitle = `${seationInfo.v7} ${seationInfo.v3}`;
        self.foreword = seationInfo.v8 || '暂无卷首语';
        this.loading = false;
        let bookidArr = [];
        data.map(item => {
          let params = {
            keyword: item.v4
          };
          ebookSearch.equbSearch(params)
          .then(res => {
            let inner = res.result.lst[0];
            if (!self.utils.isEmpty(inner)) {
              bookidArr.push(inner);
            }
          });
        });
        setTimeout(() => {
          let tempArr = bookidArr.map((item, index) => {
            let sidPath = item.fresid.split("_")[0];
            
            return {
              fcover: `${self.$store.state.bookCoverUrl}${sidPath}/${item.fbookid}.jpg` || self.$store.state.defaultBookCover,
              ftitle: item.ftitle.replace('=', ' '),
              fresid: item.fresid,
              fbookid: item.fbookid,
              fauthor: item.fauthor,
              fpublisher: item.fpublisher,
              fpublishdate: item.fpublishdate,
              fsummary: self.utils.replacePunctuation(decodeURIComponent(item.fsummary)) || '暂无简介',
              fcommonclass: item.fcommonclass
            };
          });

          self.searchResultList = tempArr;
        }, 2000);
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getResommended();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getAllPastList () {   // 获取所有季id(接口没有分页)
      this.loading = true;
      resommended.getWeeklyPastList().then((data) => {
        let res = data.result.datas;
        if (!res.length) {
          return;
        }
        this.getResommended(this.currSid);
        
        this.allSids = this.collectSids(res);
        this.currIndex = this.getIDIndex(this.currSid);
        // if (this.allSids.length) {
        //   this.latest = data.result.datas[0].v2;
        // }
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            this.getAllPastList();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getIDIndex (sid) {
      return this.allSids.indexOf(sid);
    },
    collectSids (data) {  // 收集所有季id
      let tempids = [];
      data.map(item => {
        tempids.unshift(item.v2);
      })
      return tempids;
    },
    prevSeason () { // 前一季
      this.navBySID(--this.currIndex);
    },
    nextSeason () { // 后一季
      this.navBySID(++this.currIndex);
    },
    // 返回列表页
    returnPrevPage () {
      self.$router.back();
    },
    navBySID (index) {
      // console.log(index)
      if (this.loading) {
        return;
      }
      if (index < 0) {
        // console.log('已是第一期了');
        this.showMsg('已是第一期了');
        this.currIndex = 0;
        return;
      }
      if (index > this.allSids.length - 1) {
        // console.log('已是最后一期了')
        this.showMsg('已是最后一期了');
        this.currIndex = this.allSids.length - 1;
        return;
      }
      let sid = this.allSids[index];
      this.$router.replace({
        query: {
          sid: sid,
        }
      });
      this.getResommended(sid);
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
  @import '../css/less/common';
  @import '../css/less/book-info';

  .search-result-lists {

    // =============== @Media =================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      > li {
        padding-right: 0;
        padding-left: 0;

        + li {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid @border-gray;
        }
      }

      .component-book-info {margin-bottom: 0;}
    }
  }

  // 卷首语
  .foreword {
    color: #999;

    > em {font-style: normal;}

    .foreword-btn {
      display: inline-block;
      color: @generalLend;
      border: 1px solid @generalLend;
      text-align: center;
      .border-radius(2px);
    }

    // ================ @Media =================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-bottom: 36px;
      line-height: 22px;
      font-size: 12px;

      .foreword-btn {
        .size(45px; 18px);
        margin-right: 9px;
        font-size: 12px;
        line-height: 16px;
      }
    }

    // Mobile
    @media only screen and (max-width: 768px) {
      padding: 0 15px 17px;
      font-size: 13px;
      line-height: 21px;

      .foreword-btn {
        .size(42px; 35px / 2);
        margin-right: 5px;
        font-size: 11px;
        line-height: 15px;
      }
    }
  }

  // 分页
  .pagination-wrap {
    @media only screen and (min-width: 768px) {
      margin-top: 60px;
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
</style>