<!-- 无数据提示 -->
<template>
  <div class="none-data-tip" :style="customStyle">
    <div class="none-ico"></div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "noneDataTip",

  data () {
    return {
    };
  },

  props: {
    msg: {
      type: String,
      default: '暂无数据'
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
    .none-ico {
      display: inline-block;
        width: 167px;
        height: 260px;
        background: url('/static/images/none-data.png') no-repeat center;
        background-size: 100%;
        @media only screen and (max-width: 767px) {
            width: 100px;
            height: 140px;
        }
    }
    color: #999;
    font-size: 14px;
    @media only screen and (max-width: 768px) {
      display: table;
      margin: 60px auto 0;
    }
  }
</style>