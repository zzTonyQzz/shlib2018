<!-- vue breadcrumb -->
<template>
  <div class="breadcrumb hidden-xs">
    <div class="container">
      <div class="row">
        <ul>
          <li v-for="(item, index) in breadList" :key="index" v-if="item.meta.breadcrumbName">
            <router-link :to="item.path" :style="{color: color}">{{item.meta.breadcrumbName}}</router-link>
          </li>
          <li>
            <span :style="{color: color}">{{lastBread}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let self = null;

export default {
  name: 'breadCrumb',
  data () {
    return {
      breadList: [],
      lastBread: ''
    };
  },

  props: {
    color: {
      type: String,
      default: '#666'
    }
  },

  created () {
    self = this;
    self.getBreadcrumb();
  },

  watch: {
    $route () {
      self.getBreadcrumb();
    }
  },

  methods: {
    getBreadcrumb () {
      self.$route.matched.forEach((item, index) => {
        // 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
        // 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
        item.name === 'index' ? item.path = '/' : self.$route.path === item.path ? self.title = item.meta.breadcrumbName : '';
      });
      let length = self.$route.matched.length;
      // console.log(self.$route.matched);
      if (!self.$route.matched[length - 1].meta.breadcrumbName) {
        self.breadList = self.$route.matched.slice(0, length - 2);
        self.lastBread = self.$route.matched[length - 2].meta.breadcrumbName;
        return;
      }
      // console.log(self.$route.matched);
      self.breadList = self.$route.matched.slice(0, length - 1);
      // console.log(self.breadList);
      self.lastBread = self.$route.matched[length - 1].meta.breadcrumbName;
    }
  }
}

</script>
<style lang='less' scoped>
  @import "../css/less/common";

  .breadcrumb {
    height: @breadcrumbHeight;
    padding-top: 10px;
    padding-bottom: 10px;

    // ================== @Media ===============
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding-left: @padMargin;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    clear: both;
    overflow: hidden;

    li {
      position: relative;
      float: left;

      + li {
        > a {
          &:before {
            content: ">";
            display: inline-block;
            margin-right: 2px;
            margin-left: 2px;
            font-size: 12px;
          }
        }
        span {
          font-size: 12px;
          vertical-align: 1px;
          // color: rgb(255, 255, 255);
          &:before {
            content: ">";
            display: inline-block;
            margin-right: 2px;
            margin-left: 2px;
            font-size: 12px;
          }
        }
      }
    }

    a {
      text-decoration: none;
      opacity: .5;
      font-size: 12px;
      vertical-align: 1px;

      &:hover,
      &.router-link-exact-active {
        opacity: 1;
      }
    }
  }
</style>