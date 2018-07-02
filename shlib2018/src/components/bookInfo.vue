<!-- 书籍介绍 -->
<template>
  <div class="component-book-info clearfix">
    <span class="book-cover"><img :src="bookInfo.fcover" alt=""></span>
    <div class="book-about">
      <h3 class="book-name">{{bookInfo.ftitle}}</h3>
      <!-- 书籍类型 -->
      <div class="book-type visible-xs">{{bookInfo.fcommonclass}}</div>
      <div class="book-author-publish hidden-xs">
        <p><i class="iconfont icon-user-avatar"></i>{{bookInfo.fauthor}}</p>
        <p><i class="iconfont icon-chubanshe"></i>{{bookInfo.fpublisher}}<span class="publish-year">{{bookInfo.fpublishdate}}</span></p>
      </div>
      <p class="book-intro hidden-xs">
        <!-- <slot>暂无简介信息</slot> -->
        {{bookInfo.fsummary}}
      </p>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "bookInfo",

  data () {
    return {
    };
  },

  props: {
    bookInfo: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
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
<style lang="less">
  @import "../css/less/common";
  @import '../css/less/book-info';
</style>