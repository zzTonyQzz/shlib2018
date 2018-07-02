<!-- 访问次数 | 版权信息 -->
<template>
  <div class="component-miniFooter">
    <p class="visit-total">访问次数 <span class="total-num">{{totalVisit}}</span></p>
    <ul class="copyright">
      <li>版权所有©上海图书馆上海科学技术情报研究所 2014-2016</li>
      <li>沪ICP备050172015&nbsp;&nbsp;&nbsp;网络视听许可证：0911606</li>
      <li>广播电视节目制作许可证：沪字第353号</li>
    </ul>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "miniFooter",

  data () {
    return {
    };
  },

  props: {
    totalVisit: {
      type: [String, Number],
      default: 12141481840
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
<style lang="less" scoped>
  @import '../css/less/common';

  .component-miniFooter {
    // 访问次数
    .visit-total {
      margin-top: 20px;
      margin-bottom: 2px;
      font-size: 12px;

      .total-num {
        margin-left: 8px;
        font-size: 18px;
        .vertical-align(-2px);
      }

      // ====================== @Media ==================
      @media only screen and (min-width: 768px) {
        margin-bottom: 12px;
        font-size: 16px;

        .total-num {
          margin-left: 19px;
          font-size: 24px;
        }
      }
    }

    // 版权
    .copyright {
      padding-top: 2px;
      font-size: 10px;
      line-height: 20px;

      // ====================== @Media ==================
      @media only screen and (min-width: 768px) {
        font-size: 12px;

        > li + li {margin-top: 4px;}
      }
    }
  }
</style>