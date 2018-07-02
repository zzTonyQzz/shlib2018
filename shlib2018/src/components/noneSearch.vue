<!-- 暂无搜索提示 -->
<template>
  <div class="none-data-tip" :style="customStyle">
    {{msg}}
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "noneSearch",

  data () {
    return {
    };
  },

  props: {
    msg: {
      type: String,
      default: '搜索您感兴趣的书名、作者'
    },
    customStyle: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  created () {
    self = this;
  }
}

</script>
<style lang="less" scoped>
  .none-data-tip {
    text-align: center;
    color: #999;
    font-size: 14px;
    @media only screen and (max-width: 768px) {
      display: table;
      margin: 60px auto 0;
    }
  }
</style>