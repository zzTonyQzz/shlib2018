<!-- 通用、拓展页面 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <div class="common">
      <div class="common-banner">
        <img src="/static/images/common/Group-28.png" alt="" class="banner-img">
        <h1 class="banner-title">艺术之美</h1>
      </div>
      <div class="common-main">
        <ul>
          <li class="common-item clearfix">
            <div class="img l-img"><img src="/static/images/common/p.png" alt="" /></div>
            <div class="txt r-txt">
              <div class="content">
                <h3>标题</h3>
	              <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
              </div>
            </div>
          </li>
          <li class="common-item clearfix">
            <div class="img r-img"><img src="/static/images/common/p.png" alt="" /></div>
            <div class="txt l-txt">
              <div class="content">
                <h3>标题</h3>
	              <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
              </div>
            </div>
          </li>
          <li class="common-item clearfix">
            <div class="img l-img"><img src="/static/images/common/p.png" alt="" /></div>
            <div class="txt r-txt">
              <div class="content">
                <h3>标题</h3>
	              <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
              </div>
            </div>
          </li>
          <li class="common-item clearfix">
            <div class="img r-img"><img src="/static/images/common/p.png" alt="" /></div>
            <div class="txt l-txt">
              <div class="content">
                <h3>标题</h3>
	              <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "commonPage",

  data () {
    return {
    };
  },

  created () {
    self = this;
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang="less" scoped>
@import "../css/less/common";
.common {
  .common-banner {
    width: 100%;
    position: relative;
    text-align: center;
    .banner-title {
      width: 100%;
      position: absolute;
      top: 28%;
      color: #fff;
      font-size: 3em;
      font-weight: normal;
    }
    .banner-img {
      width: 100%;
      max-height: 415px;
    }
    @media only screen and (max-width: 768px) {
      // margin-left: -15px;
      // margin-right: -15px;
      // padding-right: 0;
      // padding-left: 0;
      .banner-title {
        font-size: 2em;
      }
    }
  }
  .common-main {
    .common-item {
      margin-top: 40px;
      display: inline-block;
      height: 242px;
      @media only screen and (max-width: 1023px) and (min-width: 768px) {
        height: 180px;
      }
      @media only screen and (max-width: 768px) {
        height: auto;
        margin-top: 10px;
        border: 1px solid #eee;
        border-radius: 3px;
      }
      .img {
        width: 400px;
        height: 242px;
        @media only screen and (max-width: 1023px) and (min-width: 768px) {
          width: 300px;
          height: 180px;
        }
        @media only screen and (max-width: 768px) {
          width: 100%;
          height: 200px;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .txt {
        display: table;
        height: 100%;
        width: 100%;
        // height: 100%;
        .content {
          display: table-cell;
          vertical-align: middle;
          h3 {
            font-size: 22px;
            font-weight: normal;
            color: #383838;
            line-height: 30px;
            margin-bottom: 10px;
          }
          p {
            font-size: 18px;
            color: #959CA5;
            line-height: 28px;
            margin-top: 0px;
          }
          @media only screen and (max-width: 768px) {
            padding-left: 10px;
            padding-right: 10px;
            h3 {
              font-size: 17px;
              margin-top: 10px;
              line-height: 24px;
            }
            p {
              font-size: 13px;
              line-height: 24px;
              // margin-bottom: 
            }
          }
        }
      }
      .r-img {
        float: right;
        @media only screen and (max-width: 768px) {
          float: none;
        }
      }
      .l-img {
        float: left;
        @media only screen and (max-width: 768px) {
          float: none;
        }
      }
      .r-txt {
        float: right;
        margin-left: -400px;
        padding-left: 30px;
        text-align: left;

        h3,p {
          margin-left: 400px;
        }

        @media only screen and (max-width: 1023px) and (min-width: 768px) {
          margin-left: -300px;
          h3,p {
            margin-left: 300px;
          }
        }
        @media only screen and (max-width: 768px) {
          float: none;
          margin-left: 0;
          text-align: left;
          padding-left: 0;
          h3,p {
            margin-left: 0;
          }
        }
      }
      .l-txt {
        float: left;
        margin-right: -400px;
        padding-right: 30px;
        text-align: right;

        h3,p {
          margin-right: 400px;
        }

        @media only screen and (max-width: 1023px) and (min-width: 768px) {
          margin-right: -300px;
          h3,p {
            margin-right: 300px;
          }
        }
        @media only screen and (max-width: 768px) {
          float: none;
          margin-right: 0;
          text-align: left;
          padding-left: 0;
          h3,p {
            margin-right: 0;
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
        margin-left: 15px;
        margin-right: 15px;
    }
  }
  @media only screen and (max-width: 768px) {
      margin-left: -15px;
      margin-right: -15px;
  }
}
</style>