<!-- 评分组件 -->
<template>
  <div class="component-rate">
    <span class="rate-item" v-for="(itemClass, index) in rateClasses" :class="itemClass" :key="index"></span>
    <span class="score-num" v-if="score">{{score.toFixed(1)}}</span>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

const LENGTH = 5;
const CLS_ON = "on";
const CLS_HALF = "half";
const CLS_OFF = "off";

export default {
  name: "rate",

  data() {
    return {};
  },

  props: {
    score: {
      type: Number,
      default: 0
    }
  },

  created() {
    self = this;
  },

  computed: {
    rateClasses () {
      let result = [];
      let score = Math.floor(self.score * 2) / 4; // 将数值调整为整数及.5的形式, 例如: 4.3 => 4, 4.6 => 4.5
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);

      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }

      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    }
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.component-rate {
  display: inline-block;
  margin-left: 5px;
  font-size: 0;
  vertical-align: -1px;

  .rate-item {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 1px;
    background-repeat: no-repeat;
    background-size: 12px 12px;

    &:last-child {
      margin-right: 0;
    }

    &.on {
      background-image: url(/static/images/rate-full.png);
    }

    &.off {
      background-image: url(/static/images/rate-zero.png);
    }

    &.half {
      background-image: url(/static/images/rate-half.png);
    }
  }

  .score-num {
    margin-left: 10px;
    font-size: 12px;
    color: #ffbd3f;
    vertical-align: 1px;
  }
}
</style>