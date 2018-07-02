<!-- 图书详情 -->
<template>
  <div class="component-eBooks">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>

    <div class="container">
      <div class="row">
        <!-- 图书概览 -->
        <book-details-header
          :show-action-btn="showActionBtn"
          :summary-info="summaryInfo"
        ></book-details-header>

        <div v-if="type === 'epub'">
          <!-- 简介 -->
          <div class="book-about-container padMargin">
            <column-title :column-title="aboutTitle" :customer-class="aboutClass"></column-title>
            <!-- 简介内容 -->
            <div class="about-content" v-html="summaryContent">

            </div>
          </div>

          <!-- 目录 -->
          <column-title :column-title="directories" :customer-class="aboutClass"></column-title>

          <!-- 目录列表 -->
          <dl class="directories padMargin">
            <dt v-if="false">预留此篇章标签, 后期扩展</dt>
            <dd v-for="(item, index) in chapters" :key="index">
              <a :href="item.src">{{item.title}}</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// components
import bookDetailsHeader from '../components/bookDetailsHeader';

// api request
import { bookInfoApi, doubanHandle } from '../server/api';

export default {
  name: "eBookDetails",

  data () {
    return {
      isMobile: this.$store.state.isMobile,
      routeParams: {},
      aboutTitle: '简介',
      directories: '目录',
      showActionBtn: true,
      aboutClass: 'about-class',
      summaryInfo: {},
      summaryContent: '',
      chapters: '',
      pBookUrl: 'http://e.library.sh.cn/epubReader2017/reader.htm?bookid=',  // 图书外链地址
      type: this.$route.query.type
    };
  },

  created () {
    self = this;
    self.routeParams = self.$route.query;
  },

  components: {
    bookDetailsHeader
  },

  mounted () {
    window.scroll(0, 0);
    let type = self.routeParams.type;
    if (type === 'magazine') {
      this.$route.meta.breadcrumbName = '期刊详情';
      self.getMagazineInfo();
      return;
    } else if (type === 'epub') {
      this.$route.meta.breadcrumbName = '图书详情';
      self.getPBookInfo();
    } else {
      this.$router.push({
        path: '/eBook/bookClassification',
        replace: true
      });
    }
  },

  methods: {
    getPBookInfo () {
      bookInfoApi.epubinfo(self.routeParams.bid)
      .then(res => {
        const data = res.result.datas[0] || {};
        self.summaryInfo =  {
          cover: data.v14 || self.$store.state.defaultBookCover,
          bookName: data.v9 || '',
          bookType: self.routeParams.ty,
          viewCount: data.viewCount || '',
          doubanScore: +data.v11 || 0,
          author: data.v13 || '暂无作者',
          publish: data.v15 || '暂无出版社',
          publishDate: data.publishDate || '',
          readUrl: data.v9 ? self.pBookUrl + self.routeParams.bid : '',
          douUrl: data.v12 || 'https://book.douban.com/'
        }

        // 获取简介及目录
        self.summaryContent = data.v24 ? (decodeURIComponent(data.v24).replace(/\+/g, ' ') || '暂无简介') : '暂无简介';
        self.chapters = eval("["+ self.utils.replacePunctuation(decodeURIComponent(data.v23)) +"]")[0] || '暂无章节信息';
        if(data.v10){
            doubanHandle.doubanBookIsbn(data.v10).then(res => {
                let doubanSummary = res.summary;
                let doubanAlt = res.alt;
                let doubanRating = res.rating;
                let doubanCover = res.image;
                self.summaryInfo.douUrl = doubanAlt;
                if(doubanRating.average!="0.0")
                    self.summaryInfo.doubanScore = doubanRating.average*1;
                if(doubanSummary)
                    self.summaryContent = doubanSummary+"[<a href='"+doubanAlt+"' target='_blank'>豆瓣数据</a>]";
                if(doubanCover&&!self.summaryInfo.cover)
                    self.summaryInfo.cover = doubanCover;
            }).catch((error) => {
                console.log(error);
            });
        }
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getPBookInfo();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    getMagazineInfo () { // 无任何返回值
      bookInfoApi.magazineInfo(self.routeParams.bid)
      .then(res => {
        let data = res.result.mags[0] || {};
        self.summaryInfo = {
          cover: data.cover || '',
          bookName: data.title || '',
          readUrl: data.ssourl || ''
        };

        // self.showActionBtn = false;
        // 获取简介及目录
        self.summaryContent = '暂无简介'
        self.chapters = '暂无章节信息';
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.getMagazineInfo();
            clearTimeout(t);
          }, 500);
        }
      });
    },
    // logIn () {
    //   self.commitEvent('changeshowLoginModal', true);
    //   self.utils.modalOpenEvent(true);
    //   return;
    // }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  // 目录
  .directories {
    margin-bottom: 0;

    > dt {
      color: #666;
    }

    > dd {
      color: #3f3f3f;
      // opacity: .8;

      > a {
        color: #666;
        font-weight: 500;
      }
    }

    // ===================== @Media ======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      > dt,
      > dd {
        line-height: 29px;
      }

      > dt {
        margin-top: 20px;

        &:first-child {margin-top: 0;}
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      padding-right: @mobilePadding;
      padding-left: @mobilePadding;

      > dt,
      > dd {
        line-height: 25px;
      }

      > dt:not(:first-child) {
        margin-top: 14px;
      }
    }
  }

  .node-data {
    display: none;
  }
</style>